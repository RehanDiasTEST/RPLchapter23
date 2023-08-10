// Membaca kode sumber dari file source.js
const fs = require('fs');
const sourceCode = fs.readFileSync('source.js', 'utf-8');

// Mendefinisikan operator dan operand yang valid dalam JavaScript
const operators = ['+', '-', '*', '/', '%', '=', '==', '===', '!=', '!==', '<', '<=', '>', '>=', '&&', '||', '!', '?', ':', '.', ',', ';', '{', '}', '[', ']', '(', ')', 'function', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'default', 'return', 'const', 'let', 'var'];
const operands = /[a-zA-Z_$][a-zA-Z0-9_$]*/g;

// Menghitung jumlah operator dan operand yang berbeda dan total
const distinctOperators = new Set();
const distinctOperands = new Set();
const totalOperators = [];
const totalOperands = [];

let currentToken = '';
let isString = false;
let isComment = false;

for (let i = 0; i < sourceCode.length; i++) {
  const char = sourceCode[i];

  // Melewati karakter dalam string atau komentar
  if (isString || isComment) {
    if (char === '"' || char === "'") {
      isString = !isString;
    }
    if (char === '\n') {
      isComment = false;
    }
    continue;
  }

  // Memeriksa apakah karakter adalah operator
  if (operators.includes(char)) {
    // Menambahkan token sebelumnya sebagai operand jika ada
    if (currentToken) {
      distinctOperands.add(currentToken);
      totalOperands.push(currentToken);
      currentToken = '';
    }

    // Memeriksa apakah karakter berikutnya adalah bagian dari operator
    const nextChar = sourceCode[i + 1];
    const twoCharOperator = char + nextChar;
    if (operators.includes(twoCharOperator)) {
      // Menambahkan operator dua karakter sebagai operator
      distinctOperators.add(twoCharOperator);
      totalOperators.push(twoCharOperator);
      i++;
    } else {
      // Menambahkan operator satu karakter sebagai operator
      distinctOperators.add(char);
      totalOperators.push(char);
    }

    // Memeriksa apakah karakter adalah awal dari string atau komentar
  } else if (char === '"' || char === "'") {
    isString = true;
  } else if (char === '/' && sourceCode[i + 1] === '/') {
    isComment = true;

    // Memeriksa apakah karakter adalah bagian dari operand
  } else if (char.match(/[a-zA-Z0-9_$]/)) {
    currentToken += char;

    // Memeriksa apakah karakter adalah spasi atau baris baru
  } else if (char.match(/\s/)) {
    // Menambahkan token sebelumnya sebagai operand jika ada
    if (currentToken) {
      distinctOperands.add(currentToken);
      totalOperands.push(currentToken);
      currentToken = '';
    }
  }
}

// Menghitung metrik Halstead berdasarkan jumlah operator dan operand yang berbeda dan total
const n1 = distinctOperators.size; // Jumlah operator yang berbeda
const n2 = distinctOperands.size; // Jumlah operand yang berbeda
const N1 = totalOperators.length; // Total jumlah operator
const N2 = totalOperands.length; // Total jumlah operand

const n = n1 + n2; // Ukuran kosakata program
const N = N1 + N2; // Panjang program

const V = N * Math.log2(n); // Volume program

const D = (n1 / 2) * (N2 / n2); // Kesulitan program
const L = 1 / D; // Tingkat program

const E = D * V; // Upaya program

const T = E / 18; // Waktu yang dibutuhkan untuk memprogram

const B = Math.pow(E, 0.667) / 3000; // Jumlah bug yang dikirimkan

// Membuat objek yang berisi metrik Halstead dan nilai-nilainya
const halsteadMetrics = {
  n1,
  n2,
  N1,
  N2,
  n,
  N,
  V,
  D,
  L,
  E,
  T,
  B,
};

// Mencetak hasil analisis Halstead dalam bentuk tabel
console.log('Hasil Analisis Halstead:\n');
console.table(halsteadMetrics);
