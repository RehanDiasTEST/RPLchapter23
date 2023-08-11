
# Analisis Metrik dan Membuat Pilihan Kemungkinan KRS Kuliah

Proyek ini dibuat sebagai bagian dari penyelesaian soal di Chapter 23. Ini melibatkan tiga komponen utama yang bertujuan untuk melakukan analisis metrik pada kode JavaScript dan membangkitkan berbagai kemungkinan jadwal kuliah yang unik.

## Deskripsi

Proyek ini bertujuan untuk memberikan solusi bagi soal di Chapter 23 dengan menerapkan analisis metrik pada kode JavaScript dan membangkitkan berbagai jadwal kuliah yang memenuhi batasan yang diberikan.

## Kegunaan Kode

### 1. source.js

File `source.js` membaca dan menganalisis metrik Halstead dari kode sumber JavaScript. Metrik Halstead digunakan untuk mengukur kompleksitas dan ukuran kode berdasarkan operator dan operand yang berbeda, serta total operator dan operand.

### 2. siklomatik.js

File `siklomatik.js` menghitung kompleksitas siklomatik dari kode sumber JavaScript. Kompleksitas siklomatik mengukur seberapa kompleks aliran kontrol dalam kode program, dengan memperhitungkan struktur pengendalian seperti if, switch, for, dan lain-lain.

### 3. jadwal.js

File `jadwal.js` memanfaatkan data mata kuliah, waktu, dan ruang kelas yang diberikan dalam file JSON untuk membangkitkan berbagai kemungkinan jadwal kuliah. Kode ini menghindari duplikasi mata kuliah dalam jadwal dan menghasilkan variasi jadwal yang unik.

## Cara Penggunaan

Anda dapat menggunakan tiga skrip ini untuk melakukan analisis metrik pada kode JavaScript dan membangkitkan berbagai kemungkinan jadwal kuliah yang unik.

## Instalasi

Pastikan Anda memiliki Node.js yang terinstal di komputer Anda.
```bash
npm install
```

## Cara Menjalankan

Jalankan masing-masing skrip dengan perintah berikut:

```bash
node source_code.js
```

```bash
node siklomatik.js
```

```bash
node jadwal.js
```

---

Dibuat dengan :heart: oleh [Rehan Dias Pratama].


## ⚠️ Peringatan ⚠️

Kode yang ada dalam repositori ini masih dalam tahap awal pengembangan. Sebagian besar fungsionalitas mungkin belum diimplementasikan atau berjalan dengan benar. jadi mungkin masih ada error atau bug.

