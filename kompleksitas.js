// Impor modul yang dibutuhkan
const fs = require("fs");
const esprima = require("esprima");
const estraverse = require("estraverse");

// Definisikan fungsi untuk menghitung kompleksitas siklomatik dari kode sumber yang diberikan
function hitungKompleksitasSiklomatik(kodeSumber) {
	// Parse kode sumber menjadi AST
	const ast = esprima.parseScript(kodeSumber);

	// Inisialisasi variabel untuk menyimpan jumlah edge, node, dan komponen terhubung dalam graf alur kontrol
	let edge = 0;
	let node = 0;
	let komponenTerhubung = 1;

	// Lakukan penjelajahan pada AST dan perbarui variabel sesuai kondisi
	estraverse.traverse(ast, {
		enter: function (node) {
			// Tambahkan satu ke jumlah node untuk setiap node dalam AST
			node++;

			// Tambahkan satu ke jumlah edge untuk setiap node yang mewakili struktur kontrol, seperti if, switch, for, while, dll.
			if (node.type === "IfStatement") {
				edge++;
				// Jika node memiliki cabang alternatif (else atau else if), tambahkan satu lagi ke jumlah edge
				if (node.alternate) {
					edge++;
				}
			} else if (node.type === "SwitchStatement") {
				// Tambahkan jumlah edge sebanyak jumlah kasus dalam pernyataan switch
				edge += node.cases.length;
			} else if (
				node.type === "ForStatement" ||
				node.type === "ForInStatement" ||
				node.type === "ForOfStatement" ||
				node.type === "WhileStatement" ||
				node.type === "DoWhileStatement"
			) {
				edge++;
			}
		},
		leave: function (node) {
			// Jika node adalah deklarasi atau ekspresi fungsi, tambahkan satu ke jumlah komponen terhubung
			if (
				node.type === "FunctionDeclaration" ||
				node.type === "FunctionExpression"
			) {
				komponenTerhubung++;
			}
		},
	});

	// Hitung dan kembalikan kompleksitas siklomatik menggunakan rumus
	return edge - node + 2 * komponenTerhubung;
}

// Baca kode sumber dari sebuah berkas
const kodeSumber = fs.readFileSync("./source.js", "utf8");

// Panggil fungsi untuk menghitung kompleksitas siklomatik
const kompleksitas = hitungKompleksitasSiklomatik(kodeSumber);

// Cetak hasilnya
console.log("Kompleksitas siklomatik:", kompleksitas);
