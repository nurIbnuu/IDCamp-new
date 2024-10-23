// Senin, 7 Oktober 2024
// 1. Object Creation & Accessing Properties
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Corolla

// 2. Menambahkan Properti ke Objek & Modifikasi
car.color = "Blue";
car.year = 2021;

console.log(car.color); // Output: Blue
console.log(car.year); // Output: 2021

// 3. Method dalam Objek
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model} from ${this.year}.`);
  },
};

car.describe(); // Output: This car is a Toyota Corolla from 2020.

// 4. Accessing Properties via Bracket Notation
console.log(car["color"]); // Output: Blue
console.log(car["brand"]); // Output: Toyota

// 5. Object dengan Method untuk Perhitungan
let vehicle = {
  type: "Car",
  year: 2015,
  calculateAge: function () {
    return 2024 - this.year;
  },
};

console.log(vehicle.calculateAge()); // Output: 9

vehicle.color = "Red";
vehicle.type = "Truck";

console.log(vehicle.type); // Output: Truck
console.log(vehicle.year); // Output: 2015
console.log(vehicle["color"]); // Output: Red

// 6. Object dengan Method Mengembalikan String
let student = {
  name: "John Doe",
  age: 21,
  major: "Computer Science",
  getInfo: function () {
    return `${this.name} is ${this.age} years old and majors in ${this.major}.`;
  },
};

console.log(student.getInfo()); // Output: John Doe is 21 years old and majors in Computer Science.

// 7. Object Destructuring Sederhana
let product = {
  id: 101,
  name: "Laptop",
  price: 1500,
  brand: "BrandX",
};

let { name, price } = product;
console.log(name, price); // Output: Laptop 1500

// 8. Object Destructuring dengan Nilai Default
let user = {
  username: "johndoe",
  email: "john@example.com",
};

let { username, age = 25 } = user;
console.log(username, age); // Output: johndoe 25

// 9. Object Destructuring untuk Nested Object
let order = {
  orderId: 123,
  customer: {
    name: "Jane Doe",
    address: "123 Main St",
  },
  items: ["item1", "item2"],
};

let {
  orderId,
  customer: { name, address },
} = order;
console.log(orderId, name, address); // Output: 123 Jane Doe 123 Main St

// 10. Object Destructuring dalam Parameter Fungsi
let book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
};

const displayBookInfo = ({ title, author, year } = book) =>
  console.log(`Title: ${title}, Author: ${author}, Year: ${year}.`);

displayBookInfo(); // Output: Title: 1984, Author: George Orwell, Year: 1949.

// Berikut adalah semua kode yang kamu pelajari dan praktikkan sejak tadi pagi, termasuk konsep-konsep dasar dari object, operator, hingga object destructuring dalam JavaScript:

// 1. Function Dasar
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!

// 2. Unary dan Ternary Operator
let x = 5;
x++; // Unary operator
console.log(x); // Output: 6

let isAdult = age >= 18 ? "Adult" : "Minor"; // Ternary operator
console.log(isAdult);

// 3. Membuat Object Sederhana
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Corolla

// 4. Modifikasi Object
car.color = "Blue";
car.year = 2021;

console.log(car.color); // Output: Blue
console.log(car.year); // Output: 2021

// 5. Object dengan Method
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model} from ${this.year}.`);
  },
};

car.describe(); // Output: This car is a Toyota Corolla from 2020.

// 6. Bracket Notation
console.log(car["color"]); // Output: Blue
console.log(car["brand"]); // Output: Toyota

// 7. Method dalam Object untuk Kalkulasi
let vehicle = {
  type: "Car",
  year: 2015,
  calculateAge: function () {
    return 2024 - this.year;
  },
};

console.log(vehicle.calculateAge()); // Output: 9

vehicle.color = "Red";
vehicle.type = "Truck";

console.log(vehicle.type); // Output: Truck
console.log(vehicle.year); // Output



// Selasa, 8 Oktober 2024

// Ringkasan:
// Perbedaan Dot Notation dan Bracket Notation
//     Gunakan dot notation jika nama properti sederhana dan valid sebagai identifier.
//     Gunakan square bracket notation jika properti dinamis, mengandung spasi, karakter khusus, atau angka.


// method push, pop, shift, unshift
// unshift(): Add elements to the front of an Array.
// shift(): Remove an Element from the front of an Array.
// push(): Add elements to the end of an Array.
// pop(): Remove an element from end of an Array.
// Berikut adalah penjelasan tentang metode **`shift()`**, **`unshift()`**, **`pop()`**, dan **`push()`** yang digunakan untuk memanipulasi array dalam JavaScript:

// ### 1. **`push()`**
// - **Deskripsi**: Menambahkan satu atau lebih elemen baru ke akhir array.
// - **Return**: Mengembalikan panjang baru dari array.
// - **Contoh**:
//   ```javascript
//   let buah = ['apel', 'jeruk'];
//   buah.push('mangga'); // Menambahkan 'mangga' ke akhir array
//   console.log(buah); // Output: ['apel', 'jeruk', 'mangga']
//   ```

// ### 2. **`pop()`**
// - **Deskripsi**: Menghapus elemen terakhir dari array.
// - **Return**: Mengembalikan elemen yang dihapus. Jika array kosong, mengembalikan `undefined`.
// - **Contoh**:
//   ```javascript
//   let buah = ['apel', 'jeruk', 'mangga'];
//   let terakhir = buah.pop(); // Menghapus 'mangga'
//   console.log(buah); // Output: ['apel', 'jeruk']
//   console.log(terakhir); // Output: 'mangga'
//   ```

// ### 3. **`shift()`**
// - **Deskripsi**: Menghapus elemen pertama dari array.
// - **Return**: Mengembalikan elemen yang dihapus. Jika array kosong, mengembalikan `undefined`.
// - **Contoh**:
//   ```javascript
//   let buah = ['apel', 'jeruk', 'mangga'];
//   let pertama = buah.shift(); // Menghapus 'apel'
//   console.log(buah); // Output: ['jeruk', 'mangga']
//   console.log(pertama); // Output: 'apel'
//   ```

// ### 4. **`unshift()`**
// - **Deskripsi**: Menambahkan satu atau lebih elemen baru ke awal array.
// - **Return**: Mengembalikan panjang baru dari array.
// - **Contoh**:
//   ```javascript
//   let buah = ['jeruk', 'mangga'];
//   buah.unshift('apel'); // Menambahkan 'apel' ke awal array
//   console.log(buah); // Output: ['apel', 'jeruk', 'mangga']
//   ```

// ### **Ringkasan**
// - **`push()`**: Menambah elemen di akhir array.
// - **`pop()`**: Menghapus elemen terakhir dari array.
// - **`shift()`**: Menghapus elemen pertama dari array.
// - **`unshift()`**: Menambah elemen di awal array.

// Metode-metode ini sangat berguna dalam manipulasi data dalam array, memungkinkan kamu untuk menambah atau menghapus elemen dengan mudah. Jika ada pertanyaan lebih lanjut atau contoh tambahan yang ingin kamu lihat, silakan beri tahu!

// Berikut adalah ringkasan mengenai struktur data **Object**, **Array**, **Map**, dan **Set** dalam JavaScript:

// ### 1. **Object**
// - **Deskripsi**: Objek adalah kumpulan pasangan kunci-nilai, di mana kunci (atau properti) adalah string dan nilai dapat berupa tipe data apapun (string, number, array, objek lain, dll).
// - **Karakteristik**:
//   - Kunci bersifat unik dalam objek.
//   - Menggunakan notasi titik (`.`) atau notasi bracket (`[]`) untuk mengakses atau mengubah nilai.
//   - Berguna untuk menyimpan data terkait dalam satu entitas.

// - **Contoh**:
//   ```javascript
//   let mobil = {
//       merek: 'Toyota',
//       model: 'Camry',
//       tahun: 2020
//   };
//   console.log(mobil.merek); // Output: 'Toyota'
//   ```

// ### 2. **Array**
// - **Deskripsi**: Array adalah koleksi terurut dari elemen yang dapat diakses menggunakan indeks (angka).
// - **Karakteristik**:
//   - Elemen dalam array dapat berupa tipe data yang berbeda.
//   - Menggunakan metode seperti `push()`, `pop()`, `shift()`, dan `unshift()` untuk manipulasi.
//   - Panjang array dapat diakses dengan properti `length`.

// - **Contoh**:
//   ```javascript
//   let buah = ['apel', 'jeruk', 'mangga'];
//   console.log(buah[0]); // Output: 'apel'
//   ```

// ### 3. **Map**
// - **Deskripsi**: Map adalah koleksi pasangan kunci-nilai yang mengizinkan kunci dari tipe apapun (tidak hanya string).
// - **Karakteristik**:
//   - Kunci dalam Map bersifat unik dan dapat berupa objek.
//   - Menyediakan metode seperti `set()`, `get()`, `delete()`, dan `has()` untuk manipulasi.
//   - Menjaga urutan elemen sesuai dengan urutan saat ditambahkan.

// - **Contoh**:
//   ```javascript
//   let map = new Map();
//   map.set('nama', 'John');
//   map.set('umur', 30);
//   console.log(map.get('nama')); // Output: 'John'
//   ```

// ### 4. **Set**
// - **Deskripsi**: Set adalah koleksi nilai unik yang tidak terurut. Set tidak mengizinkan duplikasi elemen.
// - **Karakteristik**:
//   - Set hanya menyimpan nilai (tidak ada kunci-nilai seperti Map).
//   - Menyediakan metode seperti `add()`, `delete()`, `has()`, dan `clear()` untuk manipulasi.
//   - Berguna untuk menghilangkan duplikasi dalam array.

// - **Contoh**:
//   ```javascript
//   let set = new Set();
//   set.add(1);
//   set.add(2);
//   set.add(2); // Tidak akan ditambahkan
//   console.log(set.size); // Output: 2
//   ```

// ### Ringkasan Perbandingan
// | Struktur Data | Tipe Kunci | Tipe Nilai | Urutan | Unik |
// |---------------|------------|------------|--------|------|
// | Object        | String     | Beragam    | Tidak  | Ya   |
// | Array         | Indeks     | Beragam    | Ya     | Tidak|
// | Map           | Beragam    | Beragam    | Ya     | Ya   |
// | Set           | N/A        | Hanya nilai| Tidak  | Ya   |

// Dengan ringkasan ini, kamu dapat memahami perbedaan dan penggunaan yang tepat dari masing-masing struktur data dalam JavaScript. Jika ada yang ingin kamu tanyakan lebih lanjut atau butuh penjelasan lebih detail, silakan beri tahu!


// SET
// Berikut adalah penjelasan lebih detail tentang **Set** dalam JavaScript:

// ### Apa Itu Set?
// Set adalah struktur data yang menyimpan koleksi nilai unik. Ini berarti bahwa setiap nilai dalam Set hanya dapat muncul satu kali, dan tidak ada duplikasi. Set bersifat tidak terurut, yang berarti urutan elemen yang ditambahkan tidak dijamin. Set diperkenalkan dalam ECMAScript 2015 (ES6).

// ### Karakteristik Set
// 1. **Nilai Unik**: Set tidak mengizinkan nilai yang sama. Jika kamu mencoba menambahkan nilai yang sudah ada, Set tidak akan mengubahnya.
  
// 2. **Tidak Terurut**: Elemen dalam Set tidak memiliki indeks dan urutan dari elemen tidak terjamin. Artinya, kamu tidak dapat mengakses elemen berdasarkan indeks seperti pada array.

// 3. **Tipe Data Beragam**: Set dapat menyimpan berbagai tipe data, termasuk objek, fungsi, dan tipe data primitif.

// ### Metode dan Properti pada Set
// Berikut adalah beberapa metode dan properti yang umum digunakan dengan Set:

// - **`add(value)`**: Menambahkan nilai ke dalam Set. Jika nilai sudah ada, tidak akan ada perubahan.
//   ```javascript
//   let set = new Set();
//   set.add(1);
//   set.add(2);
//   set.add(2); // Tidak ada perubahan
//   console.log(set); // Output: Set { 1, 2 }
//   ```

// - **`delete(value)`**: Menghapus nilai dari Set. Mengembalikan `true` jika nilai berhasil dihapus, atau `false` jika tidak ada.
//   ```javascript
//   set.delete(1);
//   console.log(set); // Output: Set { 2 }
//   ```

// - **`has(value)`**: Memeriksa apakah Set berisi nilai tertentu. Mengembalikan `true` atau `false`.
//   ```javascript
//   console.log(set.has(2)); // Output: true
//   console.log(set.has(1)); // Output: false
//   ```

// - **`clear()`**: Menghapus semua elemen dari Set.
//   ```javascript
//   set.clear();
//   console.log(set); // Output: Set {}
//   ```

// - **`size`**: Properti yang mengembalikan jumlah elemen dalam Set.
//   ```javascript
//   console.log(set.size); // Output: 0 (setelah clear)
//   ```

// ### Contoh Penggunaan Set
// 1. **Menghapus Duplikasi**: Set sering digunakan untuk menghilangkan nilai duplikat dari array.
//    ```javascript
//    let angka = [1, 2, 2, 3, 4, 4, 5];
//    let uniqueAngka = new Set(angka);
//    console.log(uniqueAngka); // Output: Set { 1, 2, 3, 4, 5 }
//    ```

// 2. **Menjaga Daftar Unik**: Set dapat digunakan untuk menyimpan daftar item yang tidak boleh ada duplikat.
//    ```javascript
//    let namaSet = new Set();
//    namaSet.add('Alice');
//    namaSet.add('Bob');
//    namaSet.add('Alice'); // Tidak ditambahkan lagi
//    console.log(namaSet); // Output: Set { 'Alice', 'Bob' }
//    ```

// 3. **Iterasi**: Kamu dapat menggunakan loop `for...of` untuk iterasi melalui elemen dalam Set.
//    ```javascript
//    for (let nama of namaSet) {
//        console.log(nama);
//    }
//    // Output:
//    // Alice
//    // Bob
//    ```

// ### Kelebihan dan Kekurangan Set
// #### Kelebihan:
// - Mudah digunakan untuk memastikan tidak ada duplikasi.
// - Mendukung berbagai tipe data.
// - Memiliki performa yang baik untuk operasi pencarian, penambahan, dan penghapusan.

// #### Kekurangan:
// - Tidak mendukung akses berbasis indeks.
// - Tidak ada metode untuk mengurutkan elemen (meskipun kamu bisa mengonversi Set ke array dan mengurutkannya).

// ### Kesimpulan
// Set adalah alat yang berguna dalam JavaScript untuk menyimpan koleksi nilai unik. Ini memberikan cara yang efisien untuk mengelola data dan memastikan bahwa tidak ada elemen yang terduplikasi. Jika ada pertanyaan lebih lanjut atau jika kamu ingin menjelajahi contoh tertentu, silakan beri tahu!

// Ringkasan

//     Untuk mengakses nilai tertentu dalam Set dengan menggunakan indeks, kamu perlu mengonversinya menjadi Array terlebih dahulu.
//     Setelah dikonversi, kamu dapat menggunakan indeks untuk mengakses nilai dengan cara yang sama seperti pada Array.



// SPREAD OPERATOR
// Berikut adalah ringkasan poin-poin mengenai **spread operator** dalam JavaScript:

// ### **Spread Operator (`...`) - Ringkasan Poin**

// 1. **Menggabungkan Array**: Menggabungkan beberapa array menjadi satu array baru.
// 2. **Menyalin Array**: Membuat salinan dangkal dari array yang ada.
// 3. **Menambahkan Elemen ke Array**: Menambahkan elemen baru di depan atau belakang array.
// 4. **Mengonversi Set ke Array**: Mengubah Set menjadi array.
// 5. **Menyalin Objek**: Membuat salinan dangkal dari objek.
// 6. **Menggabungkan Objek**: Menggabungkan beberapa objek menjadi satu objek baru.

// Jika ada yang ingin ditambahkan atau dijelaskan lebih lanjut, silakan beri tahu!



// PERBEDAAN SPREAD DAN REST OPERATOR
// Berikut adalah penjelasan lebih detail tentang perbedaan antara **spread operator** dan **rest operator** dalam JavaScript:

// ### **Perbedaan antara Spread Operator dan Rest Operator**

// | Aspek                       | **Spread Operator (`...`)**                              | **Rest Operator (`...`)**                                 |
// |-----------------------------|----------------------------------------------------------|-----------------------------------------------------------|
// | **Fungsi Utama**            | Menyebarkan elemen dari iterable ke dalam koleksi lain   | Mengumpulkan argumen atau elemen menjadi sebuah array      |
// | **Penggunaan**              | Digunakan saat kamu ingin menyalin, menggabungkan, atau menyebarkan elemen | Digunakan saat kamu ingin mengumpulkan argumen yang tidak terdefinisi |
// | **Konteks**                 | Digunakan dalam array, objek, dan fungsi untuk menyebarkan elemen | Digunakan dalam parameter fungsi dan destrukturisasi array/objek |
// | **Contoh Penggunaan**       | ```javascript let array1 = [1, 2]; let array2 = [3, 4]; let gabungan = [...array1, ...array2]; // Output: [1, 2, 3, 4] ``` | ```javascript function jumlah(...angka) { return angka.reduce((total, num) => total + num, 0); } console.log(jumlah(1, 2, 3)); // Output: 6 ``` |
// | **Destrukturisasi**         | Menyebarkan elemen dalam array atau objek | Mengumpulkan sisa elemen yang tidak diambil dalam destrukturisasi |
// | **Contoh Destrukturisasi**  | ```javascript let array = [1, 2, 3]; let [a, b, ...sisa] = array; console.log(sisa); // Output: [3] ``` | ```javascript let obj = { nama: 'Alice', umur: 25 }; let { nama, ...sisaData } = obj; console.log(sisaData); // Output: { umur: 25 } ``` |

// ### **Detail Lebih Lanjut**

// 1. **Fungsi Utama**:
//    - **Spread Operator**:
//      - Digunakan untuk menyebarkan elemen dari array atau objek.
//      - Misalnya, ketika kamu ingin menggabungkan dua array atau mengkloning array, kamu menggunakan spread operator.
//    - **Rest Operator**:
//      - Digunakan untuk mengumpulkan argumen yang tidak ditentukan ke dalam array.
//      - Berguna ketika jumlah argumen dalam fungsi tidak diketahui sebelumnya.

// 2. **Konteks Penggunaan**:
//    - **Spread Operator**:
//      - Sering digunakan saat membuat array baru, objek baru, atau saat memanggil fungsi dengan argumen yang tersimpan dalam array.
//    - **Rest Operator**:
//      - Umumnya digunakan dalam deklarasi fungsi untuk menangani argumen variabel.
//      - Juga digunakan dalam destructuring untuk mengumpulkan sisa elemen.

// 3. **Contoh Lanjutan**:
//    - **Spread Operator**:
//      ```javascript
//      // Menggabungkan objek
//      let obj1 = { a: 1, b: 2 };
//      let obj2 = { c: 3 };
//      let gabunganObjek = { ...obj1, ...obj2 }; // Output: { a: 1, b: 2, c: 3 }
//      ```
//    - **Rest Operator**:
//      ```javascript
//      // Mengumpulkan argumen dalam fungsi
//      function tampilkanNama(namaPertama, ...namaLain) {
//          console.log('Nama Pertama:', namaPertama);
//          console.log('Nama Lain:', namaLain);
//      }
//      tampilkanNama('Alice', 'Bob', 'Charlie'); 
//      // Output: 
//      // Nama Pertama: Alice
//      // Nama Lain: [ 'Bob', 'Charlie' ]
//      ```

// ### **Kesimpulan**
// - **Spread operator** digunakan untuk menyebarkan elemen dari iterable, sedangkan **rest operator** digunakan untuk mengumpulkan elemen atau argumen yang tidak terdefinisi.
// - Keduanya ditandai dengan tiga titik (`...`), tetapi konteks dan tujuan penggunaannya berbeda.

// Jika ada pertanyaan lebih lanjut atau jika kamu ingin menjelaskan sesuatu dengan lebih detail, silakan beri tahu!


// DESTRUCTURING
/**Destructuring** adalah fitur dalam JavaScript yang memungkinkan kamu untuk "menguraikan" nilai dari array atau objek ke dalam variabel yang terpisah dengan cara yang lebih mudah dan ringkas. Fitur ini diperkenalkan pada ECMAScript 2015 (ES6) dan membantu mengurangi jumlah kode yang diperlukan untuk mengambil nilai dari struktur data kompleks.

// ### **Jenis Destructuring**

// Ada dua jenis destructuring yang umum digunakan: **destructuring array** dan **destructuring objek**.

// #### 1. **Destructuring Array**
// Dengan destructuring array, kamu dapat mengambil elemen dari array dan menyimpannya ke dalam variabel dengan sintaks yang lebih sederhana.

// **Contoh**:
// ```javascript
// let buah = ['apel', 'jeruk', 'mangga'];

// // Destructuring
// let [buah1, buah2] = buah;

// console.log(buah1); // Output: 'apel'
// console.log(buah2); // Output: 'jeruk'
// ```

// Kamu juga bisa menggunakan rest operator untuk mengumpulkan sisa elemen.

// **Contoh**:
// ```javascript
// let angka = [1, 2, 3, 4, 5];
// let [pertama, kedua, ...sisa] = angka;

// console.log(pertama); // Output: 1
// console.log(kedua);   // Output: 2
// console.log(sisa);    // Output: [3, 4, 5]
// ```

// #### 2. **Destructuring Objek**
// Dengan destructuring objek, kamu dapat mengambil nilai dari properti objek dan menyimpannya ke dalam variabel dengan nama yang sama.

// **Contoh**:
// ```javascript
// let orang = { nama: 'Alice', umur: 25 };

// // Destructuring
// let { nama, umur } = orang;

// console.log(nama); // Output: 'Alice'
// console.log(umur); // Output: 25
// ```

// Kamu juga bisa menggunakan alias untuk memberikan nama variabel yang berbeda.

// **Contoh**:
// ```javascript
// let orang = { nama: 'Alice', umur: 25 };
// let { nama: namaDepan, umur } = orang;

// console.log(namaDepan); // Output: 'Alice'
// console.log(umur);      // Output: 25
// ```

// ### **Kelebihan Destructuring**
// - **Kode yang Lebih Bersih**: Mengurangi jumlah kode yang diperlukan untuk mengakses nilai dari array atau objek.
// - **Mudah Dibaca**: Sintaksnya lebih jelas dan mudah dimengerti, terutama untuk struktur data yang kompleks.
// - **Penggunaan Rest Operator**: Memudahkan pengelolaan sisa elemen dalam array dan properti dalam objek.

// ### **Kesimpulan**
// Destructuring adalah fitur yang sangat berguna dalam JavaScript untuk mengambil nilai dari array dan objek dengan cara yang ringkas dan mudah dibaca. Jika ada pertanyaan lebih lanjut atau jika kamu ingin melihat contoh tambahan, silakan beri tahu!


Kapan Menggunakan return?

    Ketika Memerlukan Nilai Kembali: Jika fungsi melakukan perhitungan atau pengolahan data yang memerlukan hasil yang ingin kita gunakan di tempat lain.

    Validasi Data: Saat kita ingin memeriksa kondisi tertentu dan mengembalikan nilai yang sesuai jika kondisi tidak terpenuhi (seperti dalam contoh validasi name dan email).

    Untuk Menghentikan Eksekusi: Jika ada kondisi tertentu di mana kita ingin keluar dari fungsi lebih awal, return bisa digunakan untuk menghentikan eksekusi lebih lanjut.




    
    // Rabu, 9 Oktober 2024
    Berikut ringkasan mudah untuk mengingat perbedaan **`for` loop** dan **`while` loop**:

### **`for` loop**:
- **Gunakan saat tahu jumlah perulangan**.
- Ada **increment/decrement** yang jelas.
- Struktur lebih rapi karena inisialisasi, kondisi, dan perubahan variabel semua di satu baris.

**Contoh**:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

### **`while` loop**:
- **Gunakan saat jumlah perulangan tidak pasti**.
- Bisa pakai atau tidak pakai **increment**.
- Cocok untuk kondisi yang berubah-ubah secara dinamis (misalnya input pengguna).

**Contoh**:
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++; // Increment di dalam blok
}
// Output: 0, 1, 2, 3, 4
```

### Ringkasnya:
- **`for`** = Tahu jumlah pasti + ada pola increment/decrement.
- **`while`** = Tidak tahu jumlah pasti + kondisi dinamis.

Apakah ringkasan ini membantu?


Perbandingan:

    for loop digunakan untuk perulangan berdasarkan angka.
    for...in digunakan untuk mengambil key (dalam objek) atau indeks (dalam array).
    for...of digunakan untuk mengambil nilai langsung dari array, string, atau iterable lainnya.

Ya, operator ternary bisa digunakan sebagai alternatif untuk if...else statement, terutama ketika kamu ingin menulis kode yang lebih ringkas. Operator ternary adalah bentuk singkat dari if...else dan digunakan untuk keputusan sederhana.


Ya, switch statement dapat menjadi alternatif dari else if ketika kamu ingin menguji beberapa nilai dari variabel yang sama. switch biasanya digunakan ketika kamu memiliki banyak kondisi yang bergantung pada nilai yang sama dan ingin menjaga kode tetap bersih dan terstruktur.

Kapan Menggunakan try:

    Ketika ada kemungkinan kesalahan: Misalnya saat berurusan dengan input pengguna, parsing data, atau melakukan operasi yang tidak dapat diprediksi.
    Menangani kesalahan yang dapat ditangkap: Jika kamu tahu bahwa ada risiko kesalahan yang dapat terjadi, menggunakan try...catch membantu menjaga program tetap berjalan dengan baik.




    // Kamis, 10 Oktober 2024
    Untuk melengkapi fungsi `categorizeNumber` sesuai dengan spesifikasi yang diberikan, kita bisa mengikuti langkah-langkah berikut:

1. Memeriksa apakah input adalah bilangan, jika tidak, kita akan melempar (throw) error.
2. Jika input adalah bilangan negatif, kita langsung mengembalikan nilai "Negatif".
3. Jika input adalah nol, kita mengembalikan "Nol".
4. Memeriksa apakah input bilangan prima.
5. Memeriksa apakah input bilangan genap atau ganjil.

Berikut adalah implementasi lengkap dari fungsi tersebut:

```javascript
function isPrime(number) {
  if (number < 2) return false; // Bilangan prima harus lebih dari 1
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function categorizeNumber(input) {
  if (typeof input !== 'number') {
    throw new Error("Input harus berupa bilangan bulat");
  }

  if (input < 0) {
    return "Negatif";
  }

  if (input === 0) {
    return "Nol";
  }

  if (isPrime(input)) {
    return "Prima";
  }

  if (input % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
```

### Penjelasan:
1. Fungsi `isPrime()` memeriksa apakah suatu bilangan adalah bilangan prima. Jika angka kurang dari 2, maka bukan bilangan prima. Selanjutnya, loop memeriksa apakah ada pembagi selain 1 dan dirinya sendiri.
2. Dalam fungsi `categorizeNumber()`, pertama-tama kita memeriksa apakah `input` adalah tipe `number`. Jika tidak, kita melemparkan error dengan pesan "Input harus berupa bilangan bulat".
3. Jika input negatif, kita kembalikan "Negatif".
4. Jika input adalah nol, kita kembalikan "Nol".
5. Jika input bilangan prima, kita kembalikan "Prima".
6. Jika tidak, kita memeriksa apakah input genap atau ganjil dan mengembalikan nilai yang sesuai.

Fungsi ini memenuhi semua syarat yang diminta dalam soal.




// Sabtu, 12 Oktober 2024
Modularisasi dalam JavaScript adalah cara untuk memecah kode menjadi beberapa file terpisah (modul) agar lebih terstruktur dan mudah dikelola. Setiap modul dapat memiliki fungsionalitas tertentu, seperti fungsi, variabel, atau kelas, yang dapat digunakan di bagian lain dari aplikasi dengan cara diekspor (export) dari modul tersebut dan diimpor (import) di modul lain.

### Cara Kerja `export`:

1. **Export Named (Bernama)**
   Pada export bernama, kita bisa mengekspor beberapa elemen dari satu file. Elemen ini bisa berupa fungsi, variabel, atau kelas, dan bisa diimpor di file lain dengan nama yang sama.
   
   **Contoh:**
   ```javascript
   // utils.js
   export const add = (a, b) => a + b;
   export const subtract = (a, b) => a - b;
   ```

   Di sini, `add` dan `subtract` diekspor dari file `utils.js`.

2. **Export Default**
   Dengan export default, kita hanya bisa mengekspor satu nilai dari modul. Export default berguna ketika modul hanya mengekspor satu hal utama.
   
   **Contoh:**
   ```javascript
   // calculator.js
   const multiply = (a, b) => a * b;
   export default multiply;
   ```

   Di sini, hanya `multiply` yang diekspor sebagai nilai default.

### Cara Menggunakan `import`:

Setelah modul diekspor, kita bisa mengimpornya ke file lain menggunakan `import`.

- **Mengimpor Named Exports:**
  ```javascript
  // main.js
  import { add, subtract } from './utils.js';

  console.log(add(5, 3)); // Output: 8
  console.log(subtract(5, 3)); // Output: 2
  ```

- **Mengimpor Default Exports:**
  ```javascript
  // main.js
  import multiply from './calculator.js';

  console.log(multiply(4, 3)); // Output: 12
  ```

Dengan modularisasi, kamu bisa menjaga agar kode tetap terorganisir dan mudah dipelihara.

// Minggu, 13 Oktober 2024
Dalam JavaScript, **module** digunakan untuk memisahkan kode menjadi bagian-bagian yang lebih kecil, sehingga lebih mudah dipelihara dan digunakan kembali. Modul juga membantu mengelola dependensi antar bagian kode.

### Cara Menggunakan Module JavaScript

1. **Exporting**: Modul JavaScript memungkinkan kita untuk mengekspor fungsi, variabel, atau kelas dari sebuah file, sehingga dapat digunakan di file lain.
   
   Contoh (file `mathModule.js`):
   ```javascript
   // Ekspor beberapa fungsi
   export function add(a, b) {
       return a + b;
   }

   export function subtract(a, b) {
       return a - b;
   }
   ```

2. **Importing**: Untuk menggunakan kode yang diekspor dari file lain, kita perlu mengimpor fungsinya.

   Contoh (file `main.js`):
   ```javascript
   // Impor fungsi dari modul lain
   import { add, subtract } from './mathModule.js';

   console.log(add(5, 3));       // Output: 8
   console.log(subtract(5, 3));  // Output: 2
   ```

### Default Export
Kamu juga bisa mengekspor satu nilai sebagai default, yang dapat diimpor tanpa menggunakan nama kurung kurawal `{}`.

Contoh (file `greetModule.js`):
```javascript
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

Di file lain, kita bisa mengimpornya seperti ini:

```javascript
import greet from './greetModule.js';

console.log(greet('Ibnu'));  // Output: Hello, Ibnu!
```

### Catatan:
- **Module** hanya bisa digunakan jika kamu menjalankan JavaScript dalam lingkungan yang mendukung modul, seperti di browser modern atau dengan menggunakan Node.js. Jika menggunakan di browser, pastikan kamu menyertakan `type="module"` dalam tag `<script>` di HTML:
  
  ```html
  <script type="module" src="main.js"></script>
  ```

Apakah Ibnu ingin mencoba latihan membuat modul sederhana?


// Senin, 14 Oktober 2024
Modularisasi dalam JavaScript dengan menggunakan ECMAScript Modules (ESM) memungkinkan Anda untuk membagi kode menjadi bagian-bagian yang lebih kecil dan terpisah, membuatnya lebih mudah untuk dikelola dan dipelihara. Berikut adalah penjelasan dan contoh bagaimana menggunakan ESM:

### Apa itu ESM?
ECMAScript Modules adalah cara resmi untuk mendefinisikan modul dalam JavaScript. Dengan ESM, Anda dapat mengekspor fungsi, objek, atau nilai dari satu file dan mengimpornya ke file lain.

### Struktur Dasar ESM

1. **Menentukan Modul**: Anda perlu menggunakan atribut `type="module"` di tag `<script>` saat menyertakan file JavaScript di HTML.

2. **Ekspor**: Anda dapat mengekspor variabel, fungsi, atau kelas menggunakan kata kunci `export`.

3. **Impor**: Anda dapat mengimpor modul menggunakan kata kunci `import`.

### Contoh Penggunaan ESM

#### 1. Membuat File Modul

Buat file bernama `math.js`:

```javascript
// math.js
export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}
```

#### 2. Mengimpor Modul di File Lain

Buat file bernama `main.js`:

```javascript
// main.js
import { tambah, kurang } from './math.js';

const a = 5;
const b = 3;

console.log(`Hasil penjumlahan: ${tambah(a, b)}`); // Hasil penjumlahan: 8
console.log(`Hasil pengurangan: ${kurang(a, b)}`); // Hasil pengurangan: 2
```

#### 3. Menyertakan Modul dalam HTML

Buat file HTML bernama `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modularisasi ESM</title>
</head>
<body>
    <script type="module" src="main.js"></script>
</body>
</html>
```

### Penjelasan

- **Ekspor**: Di `math.js`, kita mengekspor dua fungsi, `tambah` dan `kurang`.
- **Impor**: Di `main.js`, kita mengimpor kedua fungsi tersebut dan menggunakannya untuk melakukan operasi.
- **HTML**: Di file HTML, kita menyertakan `main.js` dengan atribut `type="module"`.

### Kelebihan ESM
- **Organisasi Kode**: Membuat kode lebih terstruktur dan mudah dipahami.
- **Reuse**: Modul dapat digunakan kembali di berbagai bagian proyek atau di proyek lain.
- **Pengelolaan Dependensi**: Memudahkan pengelolaan dependensi antar modul.

Jika Anda memiliki pertanyaan lebih lanjut tentang ESM atau ingin tahu tentang topik lain, silakan beri tahu!


Penggunaan `./math.js` versus `math.js` dalam modul JavaScript (ESM) sebenarnya mengacu pada cara browser atau lingkungan JavaScript mengidentifikasi lokasi file modul tersebut. Berikut penjelasannya:

1. **`./math.js`**:
   - Tanda `./` menunjukkan bahwa file `math.js` berada di **direktori yang sama** dengan file yang melakukan impor.
   - Ini adalah **relative path** (jalur relatif), yang berarti Anda mengarahkan browser atau Node.js untuk mencari file di lokasi relatif terhadap file yang mengimpor modul tersebut.
   - Digunakan ketika file yang diimpor ada dalam direktori yang sama atau subdirektori dari file yang mengimpor.
   
   **Contoh**: Jika file `main.js` dan `math.js` berada di folder yang sama, kita menggunakan `./math.js`.

2. **`math.js` (tanpa `./`)**:
   - Jika Anda menulis `import { tambah } from 'math.js';` tanpa `./`, browser atau Node.js akan menganggap `math.js` sebagai **module atau library yang berasal dari node_modules** atau module yang diinstal dari package manager (seperti npm).
   - Ini adalah **module resolution** default yang digunakan untuk mengimpor modul dari library eksternal.
   - Misalnya, jika Anda menulis `import React from 'react';`, itu berarti Anda mengimpor `React` dari **package/library** yang sudah ada, bukan dari file lokal.

### Mengapa harus menggunakan `./`?
Dalam contoh `import { tambah } from './math.js';`, kita menggunakan `./` karena kita ingin mengimpor file **lokal** yang berada di lokasi yang sama dengan file `main.js`. Tanpa `./`, JavaScript akan mencoba mencari `math.js` di direktori `node_modules` atau package eksternal, yang akan menyebabkan kesalahan jika tidak ditemukan.

### Kesimpulan:
- Gunakan `./` ketika Anda mengimpor modul dari **file lokal**.
- Jangan gunakan `./` ketika Anda mengimpor modul dari **library eksternal**.

Apakah penjelasan ini membantu menjawab pertanyaanmu?

Dalam ECMAScript Modules (ESM), ada dua jenis ekspor utama: **`export named`** (ekspor bernama) dan **`export default`** (ekspor default). Keduanya digunakan untuk mengekspor kode dari modul, tetapi cara penggunaannya berbeda. Berikut penjelasannya:

### 1. **`export named` (Ekspor Bernama)**
Ekspor bernama memungkinkan Anda mengekspor beberapa fungsi, variabel, atau kelas dari satu modul, dan saat mengimpornya, Anda harus menggunakan nama yang sama seperti saat diekspor.

#### Contoh `export named`

**math.js:**

```javascript
// Ekspor bernama beberapa fungsi
export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}
```

**main.js:**

```javascript
// Impor fungsi-fungsi dengan nama yang sama seperti yang diekspor
import { tambah, kurang } from './math.js';

console.log(tambah(5, 3)); // 8
console.log(kurang(5, 3)); // 2
```

#### Ciri-ciri `export named`:
- Anda dapat mengekspor lebih dari satu hal (fungsi, variabel, kelas) dari satu file.
- Saat mengimpornya, Anda harus menggunakan **nama yang sama** seperti saat diekspor.
- Anda juga bisa mengubah nama saat impor dengan menggunakan kata kunci `as`.

**Contoh mengganti nama saat impor:**

```javascript
import { tambah as penjumlahan } from './math.js';

console.log(penjumlahan(5, 3)); // 8
```

### 2. **`export default` (Ekspor Default)**
Ekspor default digunakan ketika Anda hanya ingin mengekspor **satu nilai utama** dari sebuah modul, misalnya sebuah fungsi utama, kelas, atau variabel. Modul yang diekspor sebagai default tidak memerlukan nama ketika diimpor, dan Anda bisa memberi nama sesuka hati saat mengimpornya.

#### Contoh `export default`

**calculator.js:**

```javascript
// Ekspor default satu fungsi
export default function kali(a, b) {
    return a * b;
}
```

**main.js:**

```javascript
// Impor ekspor default tanpa harus menggunakan nama yang diekspor
import kali from './calculator.js';

console.log(kali(5, 3)); // 15
```

#### Ciri-ciri `export default`:
- Hanya bisa mengekspor **satu hal** sebagai ekspor default dalam satu modul.
- Saat mengimpornya, Anda **tidak perlu** menggunakan nama yang sama seperti yang diekspor. Nama bisa dipilih sesuai keinginan.
- Biasanya digunakan untuk mengekspor fungsi atau kelas utama dari modul.

### Kombinasi `export named` dan `export default`
Anda bisa menggabungkan `export named` dan `export default` dalam modul yang sama.

**math.js:**

```javascript
export default function bagi(a, b) {
    return a / b;
}

export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}
```

**main.js:**

```javascript
import bagi, { tambah, kurang } from './math.js';

console.log(bagi(10, 2)); // 5
console.log(tambah(5, 3)); // 8
console.log(kurang(5, 3)); // 2
```

### Kesimpulan:
- **`export named`** memungkinkan ekspor banyak hal dan mengimpor harus menggunakan nama yang sama (atau menggunakan `as` untuk mengganti nama).
- **`export default`** digunakan untuk mengekspor satu nilai utama dari modul, dan nama bisa diubah saat impor.
  
Apakah penjelasan ini cukup jelas untukmu?



// Selasa, 15 Oktober 2024
Berikut adalah rangkuman dari semua materi yang telah disampaikan di atas tentang **OOP (Object-Oriented Programming)** dan konsep **instance** dalam JavaScript:

1. **Class** adalah blueprint atau cetak biru yang mendefinisikan properti dan metode untuk objek. Contohnya, **class Mobil** mendefinisikan properti seperti `merek` dan `warna`, serta metode seperti `jalan()`.

2. **Instance** adalah objek nyata yang dibuat berdasarkan class. Instance adalah pengimplementasian atau penerapan dari class. Untuk membuat instance, kita menggunakan keyword `new`. Contohnya, `const mobilBaru = new Mobil("Toyota", "Merah")` membuat instance dari class **Mobil**.

3. **Constructor** adalah metode khusus dalam class yang otomatis dijalankan saat instance dibuat. Fungsi utamanya adalah menginisialisasi properti dari objek yang dibuat.

4. **Encapsulation** membatasi akses ke properti dan metode dari objek, biasanya untuk melindungi data atau mengendalikan bagaimana data bisa diakses atau diubah. Ini bisa dilakukan dengan menggunakan private field seperti `#kecepatan` di JavaScript.

5. **Inheritance** adalah proses dimana sebuah class mewarisi properti dan metode dari class lain. Contohnya, class **SepedaMotor** mewarisi class **Kendaraan**, sehingga bisa menggunakan metode yang ada di class **Kendaraan**.

6. **Polymorphism** adalah kemampuan untuk menggunakan metode yang sama dengan perilaku berbeda pada class turunan. Contohnya, method `suara()` pada class **Kucing** akan menghasilkan suara yang berbeda dari method `suara()` pada class **Hewan**.

7. **Instance = Pengimplementasian atau penerapan class**. Saat kita membuat instance dari sebuah class, kita sedang menciptakan objek nyata yang didasarkan pada blueprint (class) tersebut.

Itu adalah konsep dasar dari OOP dalam JavaScript, serta penjelasan mudah tentang apa itu **instance**. Jika ada pertanyaan lebih lanjut, kamu bisa bertanya lagi!






// --------------------------------
Wednesday, October 17, 2024

Pengantar Menyelami Dunia OOP
Berikut adalah ringkasan penting dan konsep utama dari pengantar Object-Oriented Programming (OOP):

### 1. **Mengapa Belajar Paradigma Pemrograman?**
   Setiap paradigma pemrograman menawarkan cara berbeda untuk menyelesaikan masalah. Memahami beberapa paradigma, seperti OOP dan functional programming, memberi kita fleksibilitas untuk memilih pendekatan yang paling cocok untuk setiap situasi.

### 2. **Apa itu Object-Oriented Programming (OOP)?**
   OOP adalah paradigma pemrograman yang berfokus pada objek. Setiap objek terdiri dari **properti** (data/atribut) dan **metode** (fungsi/aksi). OOP memungkinkan kita untuk membuat kode yang lebih terstruktur, modular, dan mudah dipelihara.

### 3. **Konsep Inti OOP:**
   - **Class**: Template atau blueprint untuk membuat objek.
   - **Object**: Instance dari sebuah class. Memiliki properti dan metode.
   - **Encapsulation (Enkapsulasi)**: Menyembunyikan detail internal objek dan hanya menunjukkan fitur penting melalui interface yang jelas.
   - **Inheritance (Pewarisan)**: Kemampuan untuk mewarisi properti dan metode dari class lain, sehingga dapat mengurangi pengulangan kode.
   - **Polymorphism (Polimorfisme)**: Kemampuan untuk memanggil metode yang sama dengan cara yang berbeda tergantung pada class yang memanggilnya.
   - **Abstraction (Abstraksi)**: Menyederhanakan kompleksitas dengan hanya menunjukkan detail yang relevan dan menyembunyikan detail yang tidak perlu.

### 4. **Properti dan Method dalam Object dan Class**
   - **Properti**: Atribut yang menjelaskan karakteristik sebuah objek.
   - **Metode**: Fungsi yang terkait dengan objek, yang mendefinisikan aksi yang dapat dilakukan oleh objek.

### 5. **Membuat Object dan Class**
   Ada dua cara umum untuk membuat class di JavaScript:
   - **Constructor Function**: Cara tradisional untuk membuat class sebelum ES6.
   - **ES6 Class**: Cara baru dan lebih mudah untuk membuat class, diperkenalkan pada ES6.

### 6. **Enkapsulasi melalui Access Modifier**
   Dalam OOP, kita dapat mengontrol akses terhadap properti dan metode objek menggunakan **access modifier** (seperti `private`, `protected`, dan `public`). Ini membantu menyembunyikan data dan mencegah manipulasi data secara langsung.

### 7. **Inheritance dan Prototype-Chain**
   - **Inheritance (Pewarisan)**: Memungkinkan sebuah class (SubClass) mewarisi properti dan metode dari class lain (SuperClass). Dalam JavaScript, ini dapat dilakukan melalui **ES6 Class** atau **prototype inheritance**.
   - **Prototype-Chain**: Mekanisme di JavaScript di mana objek dapat mewarisi properti dan metode dari prototype parent-nya.

### 8. **Constructor dan Method Overriding**
   - **Constructor Overriding**: SubClass dapat memiliki constructor sendiri yang menggantikan constructor dari SuperClass.
   - **Method Overriding**: SubClass juga dapat menggantikan metode yang diwarisi dari SuperClass dengan metode yang baru sesuai kebutuhan.

### 9. **Object Composition**
   Object composition memungkinkan kita untuk menyusun objek yang kompleks dari objek yang lebih sederhana. Ini sering digunakan sebagai alternatif inheritance untuk menghindari hierarki class yang terlalu dalam.

Dengan mempelajari OOP, kita dapat menulis kode yang lebih terstruktur, modular, dan mudah dirawat.



----------------------------------------------------------------
Berikut adalah ringkasan dari topik **Paradigma Pemrograman**:

### 1. **Definisi Paradigma Pemrograman**:
   Paradigma pemrograman adalah gaya atau pendekatan yang digunakan programmer dalam menulis program. Paradigma ini memberikan panduan dan cara pandang unik dalam menyelesaikan masalah.

### 2. **Pentingnya Memahami Paradigma Pemrograman**:
   - **Optimalisasi Solusi**: Setiap paradigma menawarkan cara berbeda untuk menyelesaikan masalah, sehingga pemahaman yang baik dapat membantu menemukan solusi yang optimal.
   - **Kualitas Kode**: Menulis kode sesuai paradigma menghasilkan kode yang lebih bersih, terstruktur, dan dapat digunakan kembali (reusability).
   - **Kolaborasi yang Lebih Mudah**: Paradigma menyediakan pedoman yang sama untuk tim, meminimalkan miskomunikasi dalam proyek.

### 3. **Paradigma Bukanlah Aturan Kaku**:
   Paradigma pemrograman bukanlah aturan yang harus diikuti secara kaku, melainkan panduan yang memudahkan penulisan program.

### 4. **Jenis Paradigma Pemrograman**:
   Ada beberapa jenis paradigma, seperti:
   - **Imperative**
   - **Object-Oriented (OOP)**
   - **Procedural**
   - **Functional**

Namun, modul ini fokus pada **Object-Oriented Programming (OOP)**, yang memberikan pandangan bahwa masalah bisa diselesaikan melalui pendekatan berbasis objek.

### 5. **Fokus pada OOP**:
   Dengan paradigma OOP, semua orang di proyek bisa bekerja dengan pemahaman dan pendekatan yang sama, sehingga mengurangi risiko miskomunikasi.

Apakah konsep ini sudah jelas, Ibnu?

---------
Paradigma Berbasis Objek
Berikut adalah ringkasan dari topik **Paradigma Berbasis Objek (Object-Oriented Programming/OOP)**:

### 1. **Pengertian OOP**:
   OOP adalah paradigma pemrograman yang berfokus pada objek. Setiap objek dalam program memiliki **property** (atribut) dan **method** (perilaku). Objek berinteraksi satu sama lain untuk menyelesaikan tugas.

### 2. **Objek dan Class**:
   - **Object**: Bentuk nyata dari suatu entitas yang memiliki property dan method.
   - **Class**: Cetak biru (blueprint) yang digunakan untuk membuat objek. Class membantu dalam menciptakan entitas yang kompleks secara efektif.
   - Contoh: Jika kita punya dua kucing, "Ziggy" dan "Garfield", keduanya dapat dibuat sebagai objek dengan properti seperti nama, warna, berat badan, dan perilaku.

### 3. **Constructor Function (Pre-ES6)**:
   Sebelum adanya ES6, objek dan class dibuat menggunakan **constructor function**.
   - Contoh:
     ```javascript
     function Person(name, age) {
       this.name = name;
       this.age = age;
     }
     Person.prototype.eat = function() {
       console.log(`${this.name} is eating`);
     }
     ```
   - **Prototype**: Konsep fundamental yang memungkinkan pewarisan sifat dan method antar objek. Setiap objek memiliki properti tersembunyi bernama `[[Prototype]]`.

### 4. **ES6 Class**:
   ES6 memperkenalkan cara yang lebih mudah dan modern untuk membuat objek menggunakan class. Ini serupa dengan bahasa berbasis class lainnya seperti Java dan C++.
   - Contoh:
     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
       eat() {
         console.log(`${this.name} is eating`);
       }
     }
     const person1 = new Person('Alice', 30);
     const person2 = new Person('Bob', 25);
     ```
   - **Class sebagai Syntactic Sugar**: Meskipun ES6 mendukung class, JavaScript tetap berbasis prototype. Class di JavaScript hanya merupakan **syntactic sugar** dari constructor function.

### 5. **Kesimpulan**:
   Pemahaman tentang objek dan class sangat penting dalam OOP. Dengan adanya ES6, membuat objek lebih mudah dan intuitif, khususnya bagi programmer yang terbiasa dengan bahasa berbasis class.

Materi selanjutnya akan membahas lebih dalam tentang konsep-konsep penting dalam OOP seperti inheritance, encapsulation, dan lainnya.

1. Latihan Membuat Class dan Object
class Animal {
  cunstructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  speak() {
    console.log('Animal is making a sound');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Dog is barking');
  }
}

const newDog = new Dog('Dogi', 2);
newDog.speak();
newDog.bark();


2. Latihan Menggunakan Constructor dan Method
class Car {
  constructor(brand, model, year, fuelType) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }
  
  startEngine() {
    console.log(`The engine of ${this.brand} ${this.model} is starting`)
  }
  
    stopEngine() {
    console.log(`The engine of ${this.brand} ${this.model} is stop. This Fuel Type is ${this.fuelType}`)
  }
}

const myCar = new Car('Toyota', 'Camry', 2024, 'Diesel');

myCar.startEngine();
myCar.stopEngine();

3. Latihan Membuat Subclass dengan Method Tambahan
class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  makeCall() {
    console.log(`Call from ${this.brand} ${this.model} to you`);
  }
}

class SmartPhone extends Phone {
  constructor(brand, model, os) {
    super(brand, model);
    this.os = os;
  }
  
  installApp(app) {
    console.log(`Installing ${app} in ${this.brand} ${this.model} with os ${this.os}`);
  }
}

const myPhone = new SmartPhone('Apple', 'Iphone 14 Pro Max', 'iOS');
myPhone.makeCall();
myPhone.installApp('Telegram');







4. Latihan Menggunakan Inheritance dan Method Overriding

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return `Hello my name is ${this.name}. I'm ${this.age} years old.`; // Menggunakan return
  }
}

class Student extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  
  introduce() {
    return `${super.introduce()} I'm a ${this.job}.`; // Sekarang kita bisa menggabungkan output
  }
}

const aboutMe = new Student('Ibnu', 18, 'Student');
console.log(aboutMe.introduce()); // Output: "Hello my name is Ibnu. I'm 18 years old. I'm a Student."





-----------------------------
Jumat, 18/10/2020

Penjelasan yang Anda berikan sangat bagus dan sudah mencakup konsep polymorphism dengan detail. Dalam pemrograman berorientasi objek (OOP), polymorphism memungkinkan kita untuk menggunakan satu interface umum untuk berbagai bentuk (implementasi) yang berbeda. Dalam hal ini, method `charging()` di SuperClass `SmartPhones` dapat diubah atau di-override oleh SubClass, seperti `Android`, dengan implementasi yang lebih spesifik.

Selain itu, konsep overriding juga dijelaskan dengan baik, baik pada constructor maupun method. Overriding constructor memungkinkan kita untuk menambah properti baru di SubClass, sementara overriding method memberikan fleksibilitas untuk mengubah perilaku method yang diwariskan dari SuperClass.

Jika Anda memiliki pertanyaan lebih lanjut tentang konsep ini atau ingin latihan tambahan, jangan ragu untuk bertanya!

**Polymorphism** adalah konsep dalam OOP yang memungkinkan suatu entitas (SuperClass) mewariskan properti dan method ke SubClass, yang dapat mengubah implementasinya sesuai kebutuhan. Ini memungkinkan SubClass untuk memiliki bentuk (implementasi) yang berbeda dari SuperClass.

**Overriding** adalah teknik dalam polymorphism yang memungkinkan SubClass mengubah atau menambah implementasi method atau constructor yang diwariskan dari SuperClass. Overriding constructor digunakan untuk menambah properti baru di SubClass, sementara overriding method memungkinkan SubClass mengubah perilaku method yang diturunkan.

**Contoh:** 
- Overriding method `charging()` di SubClass `Android` menambahkan dukungan untuk "fast charger," menggantikan implementasi di SuperClass `SmartPhones`.

**Polymorphism** adalah salah satu pilar utama dalam pemrograman berorientasi objek (OOP), yang memungkinkan objek dari berbagai kelas terkait untuk diperlakukan sebagai objek dari kelas yang sama. Dengan polymorphism, satu method yang sama bisa memiliki perilaku yang berbeda tergantung pada objek mana yang mengimplementasikannya. Polymorphism sering digunakan bersamaan dengan pewarisan (inheritance), di mana SubClass dapat menggunakan atau mengubah properti dan method dari SuperClass.

### **Overriding**
Overriding adalah teknik di mana SubClass mengubah implementasi method atau constructor yang diwariskan dari SuperClass. Ada dua jenis overriding yang umum:

1. **Overriding Constructor**
   - Constructor adalah method khusus yang dipanggil ketika instance dari class dibuat. 
   - Pada SubClass, kita bisa melakukan overriding constructor dari SuperClass untuk menambahkan properti baru.
   - Saat mengoverride constructor, **harus** menggunakan method `super()` untuk memanggil constructor dari SuperClass agar properti yang diwariskan dapat diinisialisasi dengan benar.
   
   **Contoh Overriding Constructor:**
   ```javascript
   class SmartPhones {
     constructor(color, brand, model) {
       this.color = color;
       this.brand = brand;
       this.model = model;
     }
   }

   class Android extends SmartPhones {
     constructor(color, brand, model, device) {
       super(color, brand, model);  // Memanggil constructor SuperClass
       this.device = device;  // Properti baru di SubClass
     }
   }

   const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');
   console.log(android);
   ```
   Pada contoh ini, `Android` memiliki properti tambahan `device`, di samping properti yang diwariskan dari `SmartPhones`.

2. **Overriding Method**
   - Selain constructor, method yang diwariskan dari SuperClass juga dapat diubah di SubClass. 
   - Overriding method memungkinkan SubClass mengimplementasikan versi method yang lebih spesifik atau lebih kompleks dibandingkan dengan SuperClass.
   - Tidak perlu menggunakan `super()` di dalam method yang di-override, tetapi kita **bisa** menggunakannya jika ingin memanggil method dari SuperClass sebelum atau setelah menambahkan logika baru.

   **Contoh Overriding Method:**
   ```javascript
   class SmartPhones {
     constructor(color, brand, model) {
       this.color = color;
       this.brand = brand;
       this.model = model;
     }
     charging() {
       console.log(`Charging ${this.model}`);
     }
   }

   class Android extends SmartPhones {
     constructor(color, brand, model, device) {
       super(color, brand, model);
       this.device = device;
     }
     charging() {
       super.charging();  // Memanggil method dari SuperClass
       console.log(`Charging ${this.model} with fast charger`);
     }
   }

   const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');
   android.charging();
   ```
   Output:
   ```
   Charging Galaxy S21
   Charging Galaxy S21 with fast charger
   ```
   Di sini, method `charging()` di `Android` mengubah perilaku method `charging()` dari SuperClass `SmartPhones` dengan menambahkan dukungan untuk "fast charger". Method `super.charging()` digunakan untuk memanggil method dari SuperClass sebelum menambahkan logika baru.

### **Perbedaan Polymorphism dan Inheritance**
- **Inheritance** (pewarisan) memungkinkan SubClass untuk menggunakan properti dan method yang ada di SuperClass tanpa harus mendefinisikannya ulang.
- **Polymorphism** memungkinkan SubClass untuk mengubah (override) atau menambah implementasi dari properti atau method yang diwariskan, sehingga memberikan fleksibilitas dalam penanganan objek dari berbagai jenis secara seragam.

Polymorphism memungkinkan kita untuk menggunakan satu antarmuka umum (SuperClass) untuk berbagai SubClass dengan perilaku yang berbeda, sementara inheritance hanya menyangkut penurunan properti dan method. Polymorphism lebih spesifik pada cara bagaimana SubClass dapat mengubah atau mengimplementasikan ulang method-method tersebut.

Berikut adalah contoh soal latihan yang bisa membantu Anda memahami konsep **encapsulation** dalam OOP menggunakan JavaScript.

**Latihan 1: Encapsulation dalam JavaScript**

Buat sebuah class `Car` yang memiliki properti dan method berikut:
1. Properti `brand`, `model`, dan `year`.
2. Method `startEngine()` yang mencetak pesan bahwa mesin mobil sedang menyala.
3. Method `getDetails()` yang mengembalikan informasi mobil (brand, model, year) dalam format string.

Gunakan **encapsulation** untuk melindungi properti `brand`, `model`, dan `year` agar tidak dapat diakses langsung dari luar class. Sebagai gantinya, buat method getter dan setter untuk mengakses dan mengubah nilai properti tersebut.

**Instruksi:**
- Buat properti `brand`, `model`, dan `year` menjadi private dengan menggunakan konvensi penamaan (misalnya dengan awalan underscore `_`).
- Buat getter dan setter untuk masing-masing properti agar data bisa diambil atau diubah dengan aman.

**Contoh Output:**
```javascript
const myCar = new Car('Toyota', 'Corolla', 2020);

// Mengakses data melalui getter
console.log(myCar.getDetails()); 
// Output: "Car: Toyota Corolla, Year: 2020"

// Mengubah data menggunakan setter
myCar.setYear(2021);

// Mengakses data yang sudah diubah
console.log(myCar.getDetails()); 
// Output: "Car: Toyota Corolla, Year: 2021"

// Menyalakan mesin
myCar.startEngine(); 
// Output: "The engine of Toyota Corolla is now running."
```

### **Solusi:**
```javascript
class Car {
  // Properti private dengan awalan _
  constructor(brand, model, year) {
    this._brand = brand;
    this._model = model;
    this._year = year;
  }

  // Getter untuk mendapatkan properti
  getBrand() {
    return this._brand;
  }

  getModel() {
    return this._model;
  }

  getYear() {
    return this._year;
  }

  // Setter untuk mengubah properti
  setBrand(newBrand) {
    this._brand = newBrand;
  }

  setModel(newModel) {
    this._model = newModel;
  }

  setYear(newYear) {
    if (newYear > 1885) {  // Validasi untuk memastikan tahun lebih dari 1885 (tahun mobil pertama dibuat)
      this._year = newYear;
    } else {
      console.log('Invalid year');
    }
  }

  // Method untuk menyalakan mesin
  startEngine() {
    console.log(`The engine of ${this._brand} ${this._model} is now running.`);
  }

  // Method untuk mendapatkan detail mobil
  getDetails() {
    return `Car: ${this._brand} ${this._model}, Year: ${this._year}`;
  }
}

// Menguji class Car
const myCar = new Car('Toyota', 'Corolla', 2020);

console.log(myCar.getDetails()); 
myCar.setYear(2021);
console.log(myCar.getDetails()); 
myCar.startEngine();
```

### **Penjelasan:**
- **Encapsulation** diterapkan dengan membuat properti `brand`, `model`, dan `year` bersifat private (dengan awalan `_`) agar tidak dapat diakses langsung dari luar class.
- Getter (`getBrand()`, `getModel()`, `getYear()`) digunakan untuk mengambil nilai properti, sementara setter (`setBrand()`, `setModel()`, `setYear()`) digunakan untuk mengubah nilai properti.
- Setter `setYear()` juga memiliki validasi untuk memastikan tahun yang diberikan adalah valid.

Dengan menggunakan encapsulation, kita melindungi properti internal class dari modifikasi langsung, dan hanya memberikan akses yang terkontrol melalui getter dan setter.


Dalam JavaScript, simbol `_` (underscore) dan `#` digunakan untuk tujuan yang berbeda dalam mengimplementasikan **encapsulation** atau pembatasan akses terhadap properti dan method di dalam class.

### **1. Underscore (`_`)**
Underscore (`_`) hanyalah konvensi penamaan yang biasa digunakan oleh para developer untuk menandakan bahwa sebuah properti atau method **seharusnya dianggap private** (hanya diakses di dalam class tersebut). Namun, ini **tidak benar-benar membuat properti tersebut private**. Properti atau method yang diawali dengan `_` masih bisa diakses dan dimodifikasi dari luar class.

**Contoh dengan `_`:**
```javascript
class Car {
  constructor(brand, model) {
    this._brand = brand;  // Konvensi bahwa ini 'private'
    this._model = model;
  }

  getBrand() {
    return this._brand;
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar._brand);  // Output: "Toyota" (masih bisa diakses)
```

Pada contoh ini, meskipun `_brand` dimulai dengan underscore, kita masih bisa mengakses dan memodifikasinya dari luar class. Tidak ada mekanisme privasi yang sesungguhnya diterapkan; ini hanya kesepakatan antara developer untuk tidak mengakses properti yang diawali dengan `_`.

### **2. Hash (`#`)**
Simbol `#` adalah fitur baru dalam JavaScript (ECMAScript 2019 atau ES6+) yang **secara resmi membuat properti atau method menjadi private**. Properti atau method yang diawali dengan `#` tidak bisa diakses dari luar class, hanya bisa diakses di dalam class itu sendiri. Jika Anda mencoba mengakses properti private dari luar, JavaScript akan menghasilkan error.

**Contoh dengan `#`:**
```javascript
class Car {
  // Properti private
  #brand;
  #model;

  constructor(brand, model) {
    this.#brand = brand;  // Private property
    this.#model = model;
  }

  getBrand() {
    return this.#brand;  // Hanya bisa diakses dari dalam class
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.#brand);  // Error: Private field '#brand' must be declared in an enclosing class
```

Pada contoh ini, properti `#brand` dan `#model` benar-benar bersifat private. Jika mencoba mengakses `#brand` dari luar class, akan muncul **error** karena properti tersebut tidak dapat diakses langsung dari luar.

### **Perbedaan Utama:**
1. **Underscore (`_`):**
   - Hanya **konvensi** untuk menunjukkan bahwa properti atau method bersifat "private" (tetapi masih dapat diakses dari luar class).
   - Tidak ada perlindungan privasi sesungguhnya di JavaScript.

2. **Hash (`#`):**
   - Merupakan fitur resmi yang membuat properti atau method **benar-benar private**.
   - Properti atau method dengan `#` tidak bisa diakses dari luar class.
   - Digunakan dalam ECMAScript 2019 (ES6+) ke atas.

### **Contoh Perbandingan:**

```javascript
class Car {
  _publicBrand = 'Public Toyota';  // Konvensi "private" tapi bisa diakses
  #privateBrand = 'Private Toyota';  // Properti private yang sesungguhnya

  getPublicBrand() {
    return this._publicBrand;
  }

  getPrivateBrand() {
    return this.#privateBrand;
  }
}

const myCar = new Car();
console.log(myCar._publicBrand);   // Output: "Public Toyota" (masih bisa diakses)
console.log(myCar.#privateBrand);  // Error: Private field '#privateBrand' must be declared in an enclosing class
```

### Kesimpulan:
- Gunakan `_` sebagai penanda bagi developer bahwa suatu properti "sebaiknya" dianggap private, meskipun tidak ada perlindungan privasi sesungguhnya.
- Gunakan `#` jika ingin memastikan properti atau method benar-benar private dan tidak bisa diakses dari luar class di JavaScript modern.

Penggunaan underscore (`_`) dan hash (`#`) dalam JavaScript tergantung pada kebutuhan spesifik dan kompatibilitas kode dengan standar JavaScript modern. Berikut adalah beberapa panduan tentang kapan menggunakan masing-masing:

### 1. **Underscore (`_`):** 
   - **Kapan digunakan?**
     - Jika Anda **tidak terlalu khawatir** dengan privasi penuh tetapi ingin memberi tahu developer lain bahwa properti atau method tertentu **tidak dimaksudkan untuk diakses langsung dari luar** class.
     - **Kompatibilitas**: Digunakan saat Anda bekerja dengan versi JavaScript yang lebih lama, atau saat Anda perlu mendukung browser yang tidak mendukung fitur private field (`#`).
     - Dalam **tim besar** atau proyek yang mengutamakan kesederhanaan, underscore sering digunakan sebagai pedoman bahwa properti tersebut **sebaiknya** dianggap private, meskipun sebenarnya masih dapat diakses.
     - Ketika Anda menggunakan framework atau library JavaScript yang tidak mendukung private field secara native (misalnya, sebelum ECMAScript 2019).

   - **Kelebihan:**
     - Sangat **kompatibel** dengan semua versi JavaScript dan bisa bekerja dengan semua browser atau lingkungan JavaScript yang lebih tua.
     - Mudah dipahami oleh developer sebagai tanda visual bahwa properti itu "bersifat private".

   - **Kekurangan:**
     - Tidak memberikan proteksi privasi yang sesungguhnya. Pengguna luar masih bisa mengakses dan memodifikasi properti ini, yang berpotensi menyebabkan masalah dalam aplikasi yang besar dan kompleks.

   - **Contoh penggunaan:**
     ```javascript
     class Car {
       constructor(brand, model) {
         this._brand = brand;  // Penanda "private"
         this._model = model;
       }

       getBrand() {
         return this._brand;
       }
     }

     const car = new Car('Toyota', 'Corolla');
     console.log(car._brand);  // Akses ke "private" property (meskipun seharusnya tidak)
     ```

### 2. **Hash (`#`):**
   - **Kapan digunakan?**
     - Jika Anda menginginkan **privasi penuh** di dalam class, di mana properti atau method benar-benar tidak dapat diakses dari luar.
     - Saat Anda bekerja dengan proyek **modern** yang dapat mendukung ECMAScript 2019 atau versi JavaScript yang lebih baru (misalnya, jika aplikasi Anda hanya berjalan di browser modern atau Node.js terbaru).
     - Ketika Anda ingin memastikan kode Anda **terlindungi** dari manipulasi luar, terutama pada sistem yang lebih besar atau aplikasi yang lebih kompleks, di mana kontrol akses ke data sangat penting.
     - Saat membuat **class library** atau API publik, di mana Anda ingin memastikan pengguna tidak dapat secara langsung mengubah nilai internal objek.

   - **Kelebihan:**
     - Memberikan **perlindungan privasi yang sesungguhnya**. Tidak ada cara bagi pengguna luar untuk mengakses atau memodifikasi properti yang diberi tanda `#`.
     - Memungkinkan kontrol penuh atas bagaimana properti atau method diakses dan dimodifikasi melalui class.

   - **Kekurangan:**
     - **Tidak kompatibel** dengan semua lingkungan JavaScript, terutama browser lama atau lingkungan yang belum mendukung ECMAScript 2019.
     - Bisa lebih sulit dipahami bagi developer yang belum terbiasa dengan JavaScript modern.

   - **Contoh penggunaan:**
     ```javascript
     class Car {
       #brand;  // Private field
       #model;  // Private field

       constructor(brand, model) {
         this.#brand = brand;  // Hanya bisa diakses di dalam class
         this.#model = model;
       }

       getBrand() {
         return this.#brand;
       }
     }

     const car = new Car('Toyota', 'Corolla');
     console.log(car.#brand);  // Error: Cannot access private field
     ```

     
### **Kapan Harus Menggunakan Masing-Masing:**

- **Gunakan underscore (`_`)** jika:
  - Anda ingin menggunakan konvensi penamaan yang lebih sederhana dan **tidak terlalu khawatir** tentang perlindungan privasi secara ketat.
  - Anda bekerja di lingkungan di mana **kompatibilitas dengan versi JavaScript lama** atau browser yang lebih tua masih menjadi perhatian utama.
  - Proyek Anda tidak terlalu besar dan Anda tidak merasa perlu memproteksi properti secara ketat, atau Anda hanya ingin menandakan secara visual bahwa properti tersebut bersifat private.

- **Gunakan hash (`#`)** jika:
  - Anda bekerja dengan JavaScript **modern** dan membutuhkan **kontrol akses penuh** untuk properti dan method di dalam class.
  - Anda ingin **menghindari kemungkinan bug** di masa depan akibat properti atau method yang tidak sengaja dimodifikasi oleh pengguna luar.
  - Anda membuat library atau sistem besar yang memerlukan **tingkat privasi yang lebih tinggi** untuk mencegah perubahan tidak diinginkan oleh pengguna atau developer lain.

### **Kesimpulan:**
- **Underscore (`_`)** hanya merupakan konvensi penamaan yang masih bisa diakses dari luar class, tetapi memberikan petunjuk kepada developer lain bahwa properti atau method itu sebaiknya tidak diakses secara langsung.
- **Hash (`#`)** memberikan privasi yang sesungguhnya dengan memastikan properti dan method benar-benar hanya bisa diakses dari dalam class.

Jika Anda menggunakan JavaScript modern dan membutuhkan privasi penuh, lebih baik menggunakan `#`. Namun, jika Anda membutuhkan kompatibilitas yang lebih luas atau hanya memberi peringatan kepada developer lain tentang akses, maka `_` masih bisa digunakan.
\



------------------
Minggu, 20 Oktober 2024

Ya, kedua contoh kode yang kamu berikan pada dasarnya menghasilkan perilaku yang sama, tetapi dengan pendekatan yang berbeda dalam hal inisialisasi objek. Mari kita bahas lebih detail:

### Contoh Pertama

```javascript
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  eat() {
    return `${this.name} sedang makan!`; 
  }
}

class Eagle extends Animal {
  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('Labi', 2, true);
const myEagle = new Eagle('Elo', 4, false);

console.log(myRabbit.isMammal); // Output: true
console.log(myEagle.isMammal);   // Output: false
```

- **Penjelasan**: 
  - Di sini, kamu memberikan semua tiga argumen (`name`, `age`, dan `isMammal`) saat membuat objek `myRabbit` dan `myEagle`.
  - Ini berarti kamu harus memastikan untuk memasukkan nilai yang tepat untuk `isMammal` setiap kali kamu membuat objek baru.

### Contoh Kedua

```javascript
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal selalu true
  }

  eat() {
    return `${this.name} sedang makan!`; 
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal selalu false
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

console.log(myRabbit.isMammal); // Output: true
console.log(myEagle.isMammal);   // Output: false
```

- **Penjelasan**: 
  - Di sini, kamu menambahkan konstruktor di kelas `Rabbit` dan `Eagle` yang memanggil `super()` dengan nilai yang telah ditentukan untuk `isMammal`.
  - Dengan cara ini, kamu tidak perlu memberikan nilai untuk `isMammal` setiap kali kamu membuat objek dari `Rabbit` atau `Eagle`; kelas turunan sudah mengatur nilai tersebut untuk kamu.

### Kesimpulan

- **Output**: 
  - Keduanya akan menghasilkan output yang sama, yaitu `true` untuk `myRabbit.isMammal` dan `false` untuk `myEagle.isMammal`.

- **Keuntungan Pendekatan Kedua**: 
  - Pendekatan kedua lebih aman dan lebih bersih, karena mengurangi kemungkinan kesalahan. 
  - Pengembang tidak perlu ingat untuk memberikan nilai `isMammal` secara eksplisit setiap kali membuat objek baru, yang membuat kode lebih mudah dibaca dan digunakan.

Jadi, meskipun kedua contoh menghasilkan hasil yang sama, pendekatan kedua lebih baik dalam hal pemeliharaan kode dan kejelasan. Jika ada yang masih membingungkan atau ada pertanyaan lain, silakan tanyakan!






-------------------- 
Senin, 21 Oktober 2024
DASAR OOP
Berikut adalah gabungan dari semua konsep utama **OOP dalam JavaScript** beserta contoh kodenya. Ini mencakup **class**, **inheritance**, **encapsulation**, **polymorphism**, **object composition**, **abstraction**, dan **interface-like behavior**.

### 1. **Class (Kelas)**
   - **Pengertian**: Template atau cetak biru untuk membuat objek dengan properti dan metode yang sama.
   ```javascript
   class Animal {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     speak() {
       return `${this.name} makes a sound.`;
     }
   }
   ```

### 2. **Inheritance (Pewarisan)**
   - **Pengertian**: Class turunan dapat mewarisi properti dan metode dari class induk.
   ```javascript
   class Rabbit extends Animal {
     eat() {
       return `${this.name} is eating.`;
     }
   }

   class Eagle extends Animal {
     fly() {
       return `${this.name} is flying.`;
     }
   }
   ```

### 3. **Encapsulation (Enkapsulasi)**
   - **Pengertian**: Menyembunyikan data dengan hanya menyediakan akses melalui metode khusus (getter dan setter).
   ```javascript
   class Animal {
     #name; // Properti privat

     constructor(name, age) {
       this.#name = name;
       this.age = age;
     }

     getName() {
       return this.#name;
     }

     setName(newName) {
       this.#name = newName;
     }
   }

   const myAnimal = new Animal('Labi', 2);
   console.log(myAnimal.getName()); // Output: Labi
   myAnimal.setName('Bunny');
   console.log(myAnimal.getName()); // Output: Bunny
   ```

### 4. **Polymorphism (Polimorfisme)**
   - **Pengertian**: Class turunan dapat memiliki metode yang sama dengan class induk, tetapi dengan implementasi yang berbeda.
   ```javascript
   class Animal {
     speak() {
       return `${this.name} makes a sound.`;
     }
   }

   class Rabbit extends Animal {
     speak() {
       return `${this.name} says squeak!`;
     }
   }

   class Eagle extends Animal {
     speak() {
       return `${this.name} screams!`;
     }
   }

   const myRabbit = new Rabbit('Labi');
   const myEagle = new Eagle('Elo');

   console.log(myRabbit.speak()); // Output: Labi says squeak!
   console.log(myEagle.speak());  // Output: Elo screams!
   ```

### 5. **Object Composition (Komposisi Objek)**
   - **Pengertian**: Membuat objek yang lebih kompleks dengan menggabungkan beberapa objek yang lebih kecil.
   ```javascript
   class Swimmable {
     swim() {
       return "Swimming in the water!";
     }
   }

   class Flyable {
     fly() {
       return "Flying in the sky!";
     }
   }

   class Animal {
     constructor(name, age, swimmable, flyable) {
       this.name = name;
       this.age = age;
       this.swimmable = swimmable;
       this.flyable = flyable;
     }

     swim() {
       return this.swimmable ? this.swimmable.swim() : `${this.name} cannot swim.`;
     }

     fly() {
       return this.flyable ? this.flyable.fly() : `${this.name} cannot fly.`;
     }
   }

   const fish = new Animal("Goldfish", 1, new Swimmable(), null);
   const bird = new Animal("Parrot", 2, null, new Flyable());

   console.log(fish.swim()); // Output: Swimming in the water!
   console.log(bird.fly());  // Output: Flying in the sky!
   ```

### 6. **Abstraction (Abstraksi)**
   - **Pengertian**: Menyembunyikan kompleksitas dan hanya menampilkan fungsionalitas penting.
   ```javascript
   class Vehicle {
     startEngine() {
       return "Engine started!";
     }

     move() {
       return "Vehicle is moving!";
     }
   }

   class Car extends Vehicle {
     move() {
       return "Car is driving!";
     }
   }

   const myCar = new Car();
   console.log(myCar.startEngine()); // Output: Engine started!
   console.log(myCar.move());        // Output: Car is driving!
   ```

### 7. **Interface-like behavior (Perilaku mirip Interface)**
   - **Pengertian**: Menjamin bahwa class turunan mengimplementasikan metode tertentu meskipun JavaScript tidak memiliki keyword `interface`.
   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }

     // Metode ini harus diimplementasikan di class turunan
     makeSound() {
       throw new Error("Method 'makeSound()' must be implemented.");
     }
   }

   class Dog extends Animal {
     makeSound() {
       return "Bark!";
     }
   }

   const dog = new Dog("Buddy");
   console.log(dog.makeSound()); // Output: Bark!
   ```

### **Kesimpulan OOP dalam JavaScript**:
1. **Class**: Template untuk membuat objek dengan properti dan metode.
2. **Inheritance**: Pewarisan fitur dari class induk ke class turunan.
3. **Encapsulation**: Menyembunyikan data dengan akses terbatas melalui getter/setter.
4. **Polymorphism**: Metode yang sama bisa berperilaku berbeda di class turunan.
5. **Object Composition**: Membuat objek kompleks dengan menggabungkan beberapa objek.
6. **Abstraction**: Menyembunyikan detail implementasi dan hanya menyediakan antarmuka yang mudah digunakan.
7. **Interface-like behavior**: Mengharuskan class turunan mengimplementasikan metode tertentu.

Dengan ringkasan ini, kamu dapat dengan mudah mengingat dan memahami konsep-konsep utama dalam **OOP di JavaScript**.


-------
Object Composition
Berikut ini adalah perbandingan kode yang menggunakan **Object Composition** dan **Inheritance** dalam JavaScript untuk kasus sederhana, sehingga kamu bisa melihat bagaimana keduanya bekerja.

### 1. **Contoh dengan Inheritance (Pewarisan)**

Dalam contoh pewarisan ini, kita membuat class `Animal` sebagai class induk, kemudian `Dog` dan `Bird` mewarisi dari `Animal`.

```javascript
// Inheritance (Pewarisan)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

class Bird extends Animal {
  speak() {
    return `${this.name} chirps.`;
  }

  fly() {
    return `${this.name} is flying!`;
  }
}

// Membuat instance dari Dog dan Bird
const myDog = new Dog("Buddy");
const myBird = new Bird("Tweety");

console.log(myDog.speak()); // Output: Buddy barks.
console.log(myBird.speak()); // Output: Tweety chirps.
console.log(myBird.fly());   // Output: Tweety is flying!
```

#### **Penjelasan Inheritance:**
- Class `Dog` dan `Bird` mewarisi properti dan metode dari `Animal`.
- `Dog` menimpa metode `speak()` dari `Animal`, tetapi `Dog` dan `Bird` tetap memiliki struktur yang bergantung pada class induk.
- Setiap turunan membawa serta semua fitur class induknya, meskipun mungkin tidak semuanya dibutuhkan.

### 2. **Contoh dengan Object Composition (Komposisi Objek)**

Dalam contoh ini, kita menggunakan komposisi untuk memberikan kemampuan spesifik ke objek tanpa perlu mewarisi dari class induk. Misalnya, `Dog` memiliki kemampuan berbicara, sedangkan `Bird` bisa berbicara dan terbang.

```javascript
// Object Composition (Komposisi Objek)
class Speakable {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Barkable {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} barks.`;
  }
}

class Flyable {
  constructor(name) {
    this.name = name;
  }

  fly() {
    return `${this.name} is flying!`;
  }
}

// Membuat instance dari Dog dan Bird dengan komposisi
const myDog = new Barkable("Buddy");
const myBird = Object.assign(new Speakable("Tweety"), new Flyable("Tweety"));

console.log(myDog.speak()); // Output: Buddy barks.
console.log(myBird.speak()); // Output: Tweety makes a sound.
console.log(myBird.fly());   // Output: Tweety is flying!
```

#### **Penjelasan Object Composition:**
- `Speakable`, `Barkable`, dan `Flyable` adalah objek dengan tanggung jawab spesifik. Mereka dapat dikombinasikan untuk memberikan perilaku pada objek `myDog` dan `myBird`.
- **Komposisi** memungkinkan kita membuat objek yang lebih fleksibel. Misalnya, `myBird` adalah gabungan dari objek yang bisa berbicara dan terbang tanpa harus memikirkan pewarisan hierarki.
- Menggunakan `Object.assign()` untuk menggabungkan beberapa kemampuan ke dalam satu objek.

---

### **Perbandingan Langsung:**

1. **Fleksibilitas:**
   - **Inheritance**: Dengan pewarisan, `Dog` dan `Bird` harus mengikuti struktur hierarki. Jika ada perubahan besar pada `Animal`, maka perubahan tersebut akan memengaruhi semua turunan.
   - **Object Composition**: Komposisi lebih fleksibel, karena kita dapat memilih hanya kemampuan yang dibutuhkan oleh masing-masing objek. Ini tidak terikat oleh struktur hierarki class.

2. **Keterikatan (Coupling):**
   - **Inheritance**: Class turunan (`Dog`, `Bird`) sangat terikat pada class induknya (`Animal`). Setiap perubahan di `Animal` mungkin akan memengaruhi `Dog` dan `Bird`.
   - **Object Composition**: Setiap bagian berdiri sendiri (misalnya, `Speakable`, `Flyable`) dan bisa digunakan kembali di objek lain tanpa saling bergantung satu sama lain.

3. **Penggunaan Ulang Kode (Reusability):**
   - **Inheritance**: Kamu hanya bisa menggunakan kembali kode dari class induk ke class turunan. Jika butuh perilaku berbeda, kamu harus menimpa metode class induk.
   - **Object Composition**: Kamu bisa menggunakan kembali setiap objek kecil (modular), seperti `Speakable` atau `Flyable`, dan menggabungkannya dengan objek lain. Ini sangat berguna ketika kamu ingin berbagi kemampuan yang sama di banyak objek tanpa membuat hirarki baru.

---

### **Kesimpulan:**
- **Inheritance** cocok jika objek memiliki hubungan alami dalam hierarki **"is-a"**, misalnya, **"Dog is an Animal"**.
- **Object Composition** cocok ketika kamu ingin lebih fleksibel dan menyusun objek dengan kemampuan yang berbeda, misalnya, **"Bird can fly, but not all animals can"**.

Kedua pendekatan ini memiliki tempatnya masing-masing, tergantung pada kebutuhan struktur program dan seberapa fleksibel atau ketat kamu ingin kode itu dikelola.




------------------------
Selasa, 22 Oktober 2024
Tentu, berikut adalah rangkuman materi yang telah dipelajari hari ini:

### 1. **Object Composition dalam JavaScript**
- **Pengertian**: Object composition adalah teknik OOP di mana objek dibentuk dengan menggabungkan fungsi-fungsi yang mewakili kemampuan-kemampuan tertentu, alih-alih menggunakan hierarki kelas.
- **Tujuan**: Memberikan fleksibilitas lebih dalam menggabungkan kemampuan tanpa bergantung pada hierarki, sehingga memudahkan penambahan atau perubahan kemampuan di masa depan.
- **Kode Sederhana**:
  ```javascript
  function canAttack(character) {
    return {
      attack: () => console.log(`${character} menyerang!`)
    };
  }
  
  function canDefend(character) {
    return {
      defend: () => console.log(`${character} bertahan!`)
    };
  }

  const warrior = Object.assign({}, canAttack('Warrior'), canDefend('Warrior'));
  warrior.attack(); // Warrior menyerang!
  warrior.defend(); // Warrior bertahan!
  ```

### 2. **Perbandingan Object Composition dengan Inheritance**
- **Inheritance (Pewarisan)**: Menggunakan hirarki kelas untuk mewariskan properti dan metode.
  - **Contoh Kode**:
    ```javascript
    class Character {
      constructor(name) {
        this.name = name;
      }
    }

    class Warrior extends Character {
      attack() {
        console.log(`${this.name} menyerang!`);
      }
    }

    const warrior = new Warrior('Warrior');
    warrior.attack(); // Warrior menyerang!
    ```
- **Object Composition** memungkinkan penggabungan kemampuan yang lebih fleksibel, dibandingkan dengan pewarisan yang lebih kaku.

### 3. **Konstanta dan Referensi dalam JavaScript**
- **Const**: Digunakan untuk mendeklarasikan variabel yang nilainya tidak dapat diubah setelah diinisialisasi, **kecuali** untuk objek dan array.
  - **Referensi**: Pada objek dan array, meskipun kita tidak bisa mengubah referensi objek, kita masih bisa mengubah properti di dalam objek tersebut.
  - **Gambar Ilustrasi**: Dalam gambar yang sudah kita buat, panah menunjukkan referensi yang tidak bisa diubah.
  
  **Contoh Kode**:
  ```javascript
  const buku = { judul: "Belajar" };
  buku.judul = "Belajar JavaScript"; // Mengubah properti diperbolehkan
  ```

### 4. **Properti, Key, dan Value**
- **Properti**: Kombinasi **key** dan **value** dalam objek.
  - **Key**: Nama dari properti.
  - **Value**: Nilai yang terkait dengan key.
  
  **Contoh Kode**:
  ```javascript
  const buku = { judul: "Belajar", penulis: "John" };
  // Properti: judul: "Belajar"
  // Key: judul
  // Value: "Belajar"
  ```

### 5. **Kesimpulan tentang Konstanta dan Pengelolaan Memori**
- **Pengelolaan Memori**: Pada objek di JavaScript, referensi objek disimpan di memori. Dengan `const`, referensi ini tidak dapat diubah, tetapi properti objek masih dapat dimodifikasi.
- **Tidak Bisa Mengganti Referensi**:
  ```javascript
  const buku = { judul: "Belajar" };
  buku = { judul: "Belajar Python" }; // Error, karena tidak bisa mengganti referensi objek
  ```

Dengan rangkuman ini, semua materi dari hari ini telah disusun. Jika ada yang ingin ditambahkan atau diperjelas lagi, saya siap membantu!


--------------------------
Rabu, 23 Oktober 2024
Berikut penjelasan tentang konsep utama dalam Pemrograman Fungsional (Functional Programming - FP):

1. **Pure Function**:
   - **Definisi**: Fungsi murni (pure function) adalah fungsi yang, untuk input yang sama, selalu menghasilkan output yang sama dan tidak memiliki efek samping (side effects). Efek samping dapat berupa perubahan pada variabel di luar fungsi, interaksi dengan I/O, atau mengubah status program.
   - **Contoh**: Fungsi yang menghitung jumlah dua angka:
     ```javascript
     function add(a, b) {
         return a + b; // Selalu menghasilkan output yang sama untuk input yang sama
     }
     ```

2. **Higher-Order Function**:
   - **Definisi**: Fungsi tingkat tinggi (higher-order function) adalah fungsi yang dapat menerima fungsi lain sebagai argumen atau mengembalikan fungsi sebagai hasil. Ini memungkinkan penggunaan fungsi-fungsi lain untuk membentuk komposisi dan abstraksi yang lebih kompleks.
   - **Contoh**: Fungsi yang menerima fungsi lain sebagai argumen:
     ```javascript
     function applyFunction(fn, value) {
         return fn(value); // Menggunakan fungsi yang diterima sebagai argumen
     }
     
     const result = applyFunction(add, 5); // Menerapkan fungsi add dengan argumen 5
     ```

3. **Recursion**:
   - **Definisi**: Rekursi adalah teknik pemrograman di mana sebuah fungsi memanggil dirinya sendiri untuk menyelesaikan masalah. Ini sering digunakan untuk menyelesaikan masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil.
   - **Contoh**: Fungsi untuk menghitung faktorial:
     ```javascript
     function factorial(n) {
         if (n === 0) {
             return 1; // Kasus dasar
         }
         return n * factorial(n - 1); // Rekursi
     }
     ```

4. **Immutability**:
   - **Definisi**: Immutability (ketidakberubahan) adalah prinsip di mana data tidak dapat diubah setelah diciptakan. Jika perlu mengubah data, sebuah salinan baru dibuat dengan perubahan yang diinginkan. Ini membantu mencegah efek samping dan memudahkan pelacakan perubahan dalam aplikasi.
   - **Contoh**: Menggunakan metode untuk membuat salinan array dengan elemen baru:
     ```javascript
     const originalArray = [1, 2, 3];
     const newArray = [...originalArray, 4]; // Membuat array baru dengan elemen tambahan
     ```

Dengan memahami konsep-konsep ini, kamu dapat mulai menerapkan pendekatan pemrograman fungsional dalam kode kamu, meningkatkan modularitas, keterbacaan, dan pemeliharaan kode.