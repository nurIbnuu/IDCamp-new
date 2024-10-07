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
