// Latihan menjalankan node.js
// console.log(process.platform);
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



// ------
// Minggu, 27 Oktober 2024
// 1. Membuat dan Mengakses Properti di Object
// const book = {
//   title: 'JavaScript Basic',
//   author: 'John Doe',
//   pages: 250
// }
// console.log(book.title, book.author, book['pages']);

// const {title, author} = book;
// console.log(title, author);

// const laptop = {
//   brand: 'Lenovo',
//   price: 10_000_000
// }
// laptop.price = 8_500_000;
// console.log(laptop);

// laptop.isAvailable = true;
// console.log(laptop);

// delete laptop.isAvailable;
// console.log(laptop);



// ARRAY
// const colors = ['red', 'green', 'blue'];
// console.log(colors);

// console.log(colors[0], colors[2]);

// const numbers = [10, 20, 30, 40, 50];
// numbers[1] = 25;
// console.log(numbers);

// numbers.push(60);
// console.log(numbers);

const animals = ['cat', 'dog', 'rabbit', 'lion'];

// delete animals[2];
// console.log(animals);

// animals.splice(2, 1);
// console.log(animals);

// animals.pop();
// console.log(animals);

// animals.shift();
// console.log(animals);

// animals.unshift('Turtle');
// console.log(animals);





// -----------
// Senin, 28 Oktober 2024

// Latihan Array Destructuring
// const today = ['Monday', 30];
// const [day, date] = today;
// console.log(day, date);

// const person = ['Ibnu', 'Hubab'];
// const [fistName, lastName, age = 18] = person;
// console.log(fistName, lastName, age);



// Latihan Map
// const book = new Map()
// book.set('title', 'JavaScript Library')
// book.set('author', 'azmutte')
// book.set(1, 0)
// book.set('publisher', 'Muamalah Publishing')
// book.set('year', 2024)

// book.delete('year')
// console.log(book.get('title'));
// console.log(book.get('author'));
// console.log(book.get(1));
// console.log(book.get('publisher'));


// const numbers = new Set([10, 20, 30])
// for (const number of numbers) {
//   console.log(number);
// }

// const colors = new Set(['red', 'green', 'blue'])
// colors.delete('green')
// colors.forEach(color =>
//   console.log(color)
// )


// Selasa, 29 Oktober 2024
// const person = {firstName: 'John', lastName: 'Doe'};
// const job = {jobTitle: 'Developer', company: 'Tech Corp'};
// const personWithJob = {...job, ...person};
// personWithJob.age = 25;
// console.log(personWithJob);

// const fruits = ['Apple', 'Orange', 'Strawberry'];
// const vegetables = ['Tomato', 'Carrot', 'Cucumber'];
// const groceries = [...fruits, ...vegetables, 'Milk'];
// console.log(groceries);

// 1. Latihan Fungsi Penjumlahan
// function sumAll(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sumAll(1, 2, 3, 4)); // Output: 10
// console.log(sumAll(10, 20, 30)); // Output: 60

// 2. Latihan Fungsi Menyambungkan Kalimat
// function combineWords(...words) {
//   return words.join(' ');
// }

// console.log(combineWords("Hello", "world", "!")); // Output: "Hello world !"
// console.log(combineWords("JavaScript", "is", "fun")); // Output: "JavaScript is fun"

// 3. Latihan Mencari Nilai Tertinggi
// function findMax(...numbers) {
//   return Math.max(...numbers);
// }

// console.log(findMax(10, 20, 5, 8)); // Output: 20
// console.log(findMax(1, 7, 3, 6, 9)); // Output: 9



// -----------
// Explore
// Tentu! Mari kita bahas kode yang telah Anda tulis, baik di `support.mjs` maupun `main.mjs`, secara terperinci.

// ### 1. `support.mjs`

// ```javascript
// export const API = {
//   fetch(delay, simulateError = false) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (simulateError) {
//           return reject(new Error(`Error from delay ${delay}`));
//         }
//         return resolve(`Data from delay ${delay}`);
//       }, delay);
//     });
//   }
// };

// export const sampleErrorData = [
//   { delay: 100, simulateError: false },
//   { delay: 50, simulateError: true }
// ];

// export const sampleSuccessData = [
//   { delay: 100, simulateError: false },
//   { delay: 50, simulateError: false }
// ];
// ```

// #### Penjelasan:

// - **API Object**: 
//   - Ini adalah objek `API` yang berisi metode `fetch`.
//   - **Method `fetch`**:
//     - Menerima dua parameter: `delay` (waktu tunggu dalam milidetik) dan `simulateError` (boolean yang menentukan apakah akan menimbulkan error).
//     - Mengembalikan Promise yang di-resolve atau di-reject setelah jangka waktu tertentu (`delay`).
//     - Jika `simulateError` bernilai `true`, Promise akan di-reject dengan pesan error yang sesuai.
//     - Jika `simulateError` bernilai `false`, Promise akan di-resolve dengan pesan data yang sesuai.

// - **Sample Data**:
//   - **`sampleErrorData`**: Array objek yang berisi dua item. Item kedua memiliki `simulateError: true`, yang akan menghasilkan error saat di-fetch.
//   - **`sampleSuccessData`**: Array objek yang serupa tetapi tanpa error, sehingga kedua pemanggilan akan berhasil.

// ### 2. `main.mjs`

// ```javascript
// import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

// function processData(data) {
//   return Promise.all(
//     data.map(item => 
//       API.fetch(item.delay, item.simulateError).catch(error => {
//         throw new Error(error.message);
//       })
//     )
//   );
// }

// processData(sampleErrorData).then(console.log).catch(console.log); // Expected output: "Error from delay 50"
// processData(sampleSuccessData).then(console.log).catch(console.log); // Expected output: ["Data from delay 100", "Data from delay 50"]
// ```

// #### Penjelasan:

// - **Import Statement**:
//   - Mengimpor `API`, `sampleErrorData`, dan `sampleSuccessData` dari `support.mjs`.

// - **Fungsi `processData(data)`**:
//   - Menerima parameter `data`, yang merupakan array objek yang telah didefinisikan di `support.mjs`.
//   - Menggunakan `Promise.all()` untuk menjalankan semua pemanggilan `API.fetch` secara bersamaan.
//   - **`data.map(item => ...)`**: Iterasi melalui setiap item dalam array `data`, memanggil `API.fetch` untuk mendapatkan data dengan menggunakan `delay` dan `simulateError` yang diberikan dalam setiap item.
//     - Jika `API.fetch` berhasil, hasilnya akan dikumpulkan dalam array.
//     - Jika terjadi error, `.catch()` akan menangkapnya dan membangkitkan `Error` baru dengan pesan yang sama.

// - **Pemanggilan Fungsi**:
//   - `processData(sampleErrorData)`: Menguji data yang memiliki error. Mengharapkan output yang berupa pesan error: "Error from delay 50".
//   - `processData(sampleSuccessData)`: Menguji data yang tidak memiliki error. Mengharapkan output berupa array data yang berhasil: `["Data from delay 100", "Data from delay 50"]`.

// ### Kesimpulan

// - Kode ini memanfaatkan Promise untuk menangani operasi asynchronous, seperti fetching data dengan delay. 
// - Metode `processData` dengan `Promise.all` memastikan semua fetch dilakukan secara bersamaan, dan error ditangani dengan baik. 
// - Struktur kode memisahkan logika API dan data sample, sehingga lebih modular dan mudah dikelola.

// Jika ada bagian tertentu yang ingin Anda bahas lebih lanjut, silakan beri tahu!