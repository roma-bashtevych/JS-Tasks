// 1 створити функцію конструктор для об 'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об 'єктами User

// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }

// let arrUser = []

// let lenka = new User(1, 'Lena', 'Petrova', 'lena_petrova@gmail.com', '+380009900990');
// let sveta = new User(2, 'Sveta', 'Ivanova', 'sveta@gmail.com', '+380009988990');
// let ivan = new User(3, 'Ivan', 'Petrov', 'terminator@ukr.net', '+380459900990');
// let stepan = new User(4, 'Stepan', 'Ivanov', 'who@gmail.com', '+380009900460');
// let olya = new User(5, 'Olya', 'Pupkina', 'pupkina@gmail.com', '+38000456990');
// let max = new User(6, 'Max', 'Pupkin', 'max77@gmail.com', '+380004568790');
// let roma = new User(7, 'Roma', 'Kuznecov', 'roma3000@gmail.com', '+380009900550');
// let stas = new User(8, 'Stas', 'Solomonov', 'stas_solomonov@ukr.net', '+380559900990');
// let jonh = new User(9, 'Jonh', 'Smith', 'jonych@gmail.com', '+380009956990');
// let petro = new User(10, 'Petro', 'Saharov', 'petr@gmail.com', '+380009947890');

// arrUser = [lenka, sveta, ivan, stepan, olya, max, roma, stas, jonh, petro];

// console.log(arrUser);

// 2 створити класс для об 'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об 'єктами Client


// class Clients {
//   constructor(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email; 
//     this.phone = phone;
//     this.order = order;
//   }
// }

// const dimas = new Clients(1, 'Dima', 'Dimych', 'dimych@ukr.net', '+38945623000', ['milk', 'bread', 'soul']);
// const sveta = new Clients(2, 'Sveta', 'Ivanova', 'sveta@gmail.com', '+380009988990', ['car', 'bike']);
// const ivan = new Clients(3, 'Ivan', 'Petrov', 'terminator@ukr.net', '+380459900990', ['cola', 'potato', 'tea']);
// const stepan = new Clients(4, 'Stepan', 'Ivanov', 'who@gmail.com', '+380009900460', ['milk']);
// const olya = new Clients(5, 'Olya', 'Pupkina', 'pupkina@gmail.com', '+38000456990', ['phone']);
// const max = new Clients(6, 'Max', 'Pupkin', 'max77@gmail.com', '+380004568790', ['watch', 'bike']);
// const roma = new Clients(7, 'Roma', 'Kuznecov', 'roma3000@gmail.com', '+380009900550', ['tea', 'sugar']);
// const stas = new Clients(8, 'Stas', 'Solomonov', 'stas_solomonov@ukr.net', '+380559900990', ['oil']);
// const jonh = new Clients(9, 'Jonh', 'Smith', 'jonych@gmail.com', '+380009956990', ['milk', 'bread']);
// const petro = new Clients(10, 'Petro', 'Saharov', 'petr@gmail.com', '+380009947890', ['tea']);

// let arrClient = [];

// arrClient = [dimas, sveta, ivan, stepan, olya, max, roma, stas, jonh, petro]

// console.log(arrClient)

// 3 Створити функцію конструктор яка дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//   --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   --info() - яка виводить всю інформацію про автомобіль
//   --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   --changeYear(newValue) - змінює рік випуску на значення newValue
//   --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car


// function Car(model, maker, year, maxSpeed, capacity) {
//   this.model = model;
//   this.maker = maker;
//   this.year = year;
//   this.maxSpeed = maxSpeed;
//   this.capacity = capacity;

//   this.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//   }

//   this.info = function () {
//     console.log(`Модель: ${this.model}, виробник: ${this.maker}, рік випуску: ${this.year}, макс.швидкість: ${this.maxSpeed}, обєм двигуна: ${this.capacity}`)
//   }

//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed

//   }

//   this.changeYear = function (newValue) {
//     this.year = newValue;
//   }

//   this.addDriver = function (driver = {}) {
//     this.driver = driver;
//   }
// }


// const mers = new Car('mersedes', 'mersedesCo', '1987', 220, '3.6')

// mers.drive()
// mers.info()
// mers.increaseMaxSpeed(2)
// mers.changeYear(2020)

// const driver = {
//   name: 'Vitya',
//   age: 25,
// }

// mers.addDriver(driver)
// console.log(mers)

// 4 Створити клас який дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//   --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   --info() - яка виводить всю інформацію про автомобіль
//   --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   --changeYear(newValue) - змінює рік випуску на значення newValue
//   --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car

// class Car {
//   constructor(model, maker, year, maxSpeed, capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//   }
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//   }

//   info() {
//     console.log(`Модель: ${this.model}, виробник: ${this.maker}, рік випуску: ${this.year}, макс.швидкість: ${this.maxSpeed}, обєм двигуна: ${this.capacity}`)
//   }
//   increaseMaxSpeed(newSpeed) {
//     this.maxSpeed += newSpeed
//   }

//   changeYear(newValue) {
//     this.year = newValue;
//   }

//   addDriver(driver = {}) {
//     this.driver = driver;
//   }
// }


// const tesla = new Car('tesla', 'Mask', '2021', 400, 'electro')

// tesla.drive()
// tesla.info()
// tesla.increaseMaxSpeed(2)
// tesla.changeYear(2020)

// const driver = {
//   name: 'Misha',
//   age: 25,
//   carDriver: true
// }

// tesla.addDriver(driver)
// console.log(tesla)

// 5 Взяти масив з завдання 1.
//   Відфільтрувати, залишивши тільки об 'єкти з парними id -


// let filter = arrUser.filter(user => user.id % 2 === 0)
// console.log(filter)

//   Відсортувати його по id.по зростанню -

// let sortUp = arrUser.sort((a, b) => a.id - b.id)

// console.log(sortUp)

//   Відсортувати його по id.по спаданню

// let sortDown = arrUser.sort((a, b) => b.id - a.id)

// console.log(sortUp)


// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order.по спаданню

// let sortOrder = arrClient.sort((a, b) => (a.order).length - (b.order).length)

// console.log(sortOrder);


