// Latihan menjalankan node.js
// (process.platform);
// (3 + 8);

// Latihan statement dan expression
// let lima = 5, tiga = 3, limaTambahTiga = lima + tiga;
// console.log(`Hasil dari ${lima} + ${tiga} adalah ${limaTambahTiga}`);

// Latihan membuat komentar
// Menghitung Luas Segitiga
/* Rumus:
1/2 * alas * tinggi
*/
// let half = 1/2, alas = 10, tinggi = 20;
// const luasSegitiga = half * alas * tinggi;
// console.log(`Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luasSegitiga}`);


// Latihan Variabel
// const gender = 'Laki-laki';
// let job = 'Pelajar';
// job = 'Bekerja';

// Latihan 4: Konversi Tipe Data
// let number = 123;
// let strNumber = String(number);
// console.log(typeof strNumber);
// let strBoolean = 'true';
// let boolean = Boolean(strBoolean);
// console.log(typeof boolean);

// console.log('20' + 5);
// console.log('10' * 2);


// Latihan 5: Operator
// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 / 3);

// console.log(5 < 7);

// let lima = 5, tujuh = 7;
// console.log((lima < tujuh) ? 'Lima lebih kecil dari Tujuh' : 'Lima tidak lebih kecil dari Tujuh');


// ---------
// Jum'at, 25 Oktober 2024
// Latihan 1: Membuat Function

// Buatlah function yang mengonversi suhu dari Fahrenheit ke Celsius. Gunakan rumus konversi berikut: Celsius=(Fahrenheit−32)×59Celsius=9(Fahrenheit−32)×5​
// function convertFahrenheitToCelsius(farenheit) {
//   return (farenheit - 32) * 5 / 9;
// }
// console.log(convertFahrenheitToCelsius(212));

// Latihan 2: Function dengan Parameter Default

// Modifikasi function dari Latihan 1 agar memiliki parameter default untuk suhu Fahrenheit. Misalnya, jika tidak ada nilai yang diberikan saat pemanggilan, suhu default adalah 32.
// function convertFahrenheitToCelsius(fahrenheit = 32) {
//   return (fahrenheit - 32) * 5 / 9;
// }
// console.log(convertFahrenheitToCelsius());


// Latihan 3: Function Expression

// Buatlah function expression untuk menghitung luas persegi panjang. Fungsi ini harus menerima dua parameter, panjang dan lebar, dan mengembalikan luasnya.

// const luasPersegiPanjang = function(panjang, lebar) {
//   return panjang * lebar;
// }
// console.log(luasPersegiPanjang(10, 10));

// Latihan 4: Arrow Function

// Ubah function dari Latihan 3 menjadi arrow function. Pastikan tetap berfungsi dengan baik.
// const luasPersegiPanjang = (panjang, lebar) => panjang * lebar;
// console.log(luasPersegiPanjang(20, 10));

// const convertFahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;
// console.log(convertFahrenheitToCelsius(32));


// Latihan 5: Function dengan Return Value

// Buatlah function yang menerima dua angka dan mengembalikan hasil penjumlahan kedua angka tersebut. Nama function-nya jumlah.

// Contoh pemanggilan function:

// const add = (number1, number2) => number1 + number2;
// console.log(add(100, 300));


// Latihan 6: Menggunakan Function sebagai Argumen

// Buatlah function yang menerima dua angka dan satu function sebagai parameter. Function ini harus menggunakan function yang diterima untuk melakukan operasi (misalnya penjumlahan, pengurangan, dll.) pada kedua angka.

// const add = (n1, n2) => n1 + n2;
// const subtract = (n1, n2) => n1 - n2;

// const calculator = function(operation, n1, n2) {
//   return operation(n1, n2);
// }

// console.log(calculator(add, 3, 2));
// console.log(calculator(subtract, 3, 2));











// -------
// Sabtu, 26 Oktober 2024
// Latihan 1: Membuat dan Mengakses Object
// const student = {
//   name: 'Muhammad Nur Ibnu Hubab',
//   age: '18',
//   grade: 'lecture'
// }

// console.log(student.age);
// console.log(student['age']);
// console.log(student.grade);
// console.log(student['grade']);



// Latihan 2: Array Manipulasi
// const numbers = [10, 20, 30, 40, 50];
// numbers[1] = 25;
// numbers.push(60);
// numbers.shift();
// console.log(numbers);

// Latihan 3: Map
// const userProfile = new Map();
// userProfile.set('username', 'ibnuCoder');
// userProfile.set('age', 18);

// console.log(userProfile.get('username'));
// userProfile.set('age', 19);
// console.log(userProfile.get('age'));


// Latihan 4: Set dan Perulangan
// const mySet = new Set([1, 2, 3, 4, 5]);
// mySet.add(6);
// mySet.delete(3);

// for (const value of mySet) {
//     console.log(value); // Output: 1, 2, 4, 5, 6
// }
