// --створити масив з:
//   -з 5 числових значень -
//   з 5 стічкових значень -
//   з 5 значень стрічкового, числового та булевого типу -
//   та вивести його в консоль

// const numbers = [1, 2, 3, 4, 5];

// const strings = ['srt1', 'srt2', 'srt3', 'srt4', 'srt5'];

// const arr = ['srt1', 55, 'hello', true, 534.5];

// console.log(numbers);
// console.log(strings);
// console.log(arr);


// --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль

// let arr = [];

// arr[0] = 1;
// arr[1] = 'std';
// arr[2] = true;

// console.log(arr);


// -За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом всередині -
//   За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині -
//   За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом всередині. -
//   За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i <= 10; i++) {
//   document.write(`<div>Hello world!</div>`)
// }
// // ____________________________________________________
// for (let i = 0; i <= 10; i++) {
//   document.write(`<div>Hello world! - ${i}</div>`)
// }
// // _______________________________________________________
// let i = 0;

// while (i <= 20) {
//   document.write(`<h1>Hello world!</h1>`);
//   i++
// }
// // ______________________________________________________
// let i = 0;

// while (i <= 20) {
//   document.write(`<h1>Hello world! - ${i}</h1>`);
//   i++
// }

// -Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі. -
//   Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі. -
//   Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі. -
//   Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки булеві елементи
//   -
//   Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки числові елементи
//   -
//   Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою
// if та typeof вивести тільки рядкові елементи

// const arr = [1, 2, 3, 9, 8, 7, 5, 4, 6, 0];

// for(const el of arr){
//   console.log(el)
// }
// __________________________________________________________________________________________________
// const arr = ['srt1', 'srt2', 'srt3', 'srt4', 'srt5', 'srt6', 'srt7', 'srt8', 'srt9', 'srt0'];

// for (const el of arr) {
//   console.log(el)
// }
// __________________________________________________________________________________________________
// const arr = ['srt1', 2, '23', true, 'srt5', false, 96547, 'hello', 0, 'srt0'];

// for (const el of arr) {
//   console.log(el)
// }
// __________________________________________________________________________________________________
// const arr = [true, 2, '23', true, 'srt5', false, 96547, 'true', 0, 'srt0'];

// for (const el of arr) {
//   if(typeof el === "boolean")
//   console.log(el)
// }
// __________________________________________________________________________________________________
// const arr = [true, 2, '23', true, 'srt5', false, 96547, 'true', 0, 'srt0'];

// for (const el of arr) {
//   if(typeof el === "number")
//   console.log(el)
// }
// __________________________________________________________________________________________________
// const arr = [true, 2, '23', true, 'srt5', false, 96547, 'true', 0, 'srt0'];

// for (const el of arr) {
//   if(typeof el === "string")
//   console.log(el)
// }

// Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі. -
//   Створити цикл
// for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write -
//   Створити цикл
// for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write -
//   Створити цикл
// for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write -
//   Створити цикл
// for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write -
//   Створити цикл
// for на 100 ітерацій.Вивести тільки непарні кроки.через console.log + document.write

// let arr = [];

// arr[0] = 1;
// arr[1] = 55;
// arr[2] = true;
// arr[3] = 'true';
// arr[4] = 'str';
// arr[5] = false;
// arr[6] = 1.58;
// arr[7] = 3.14;
// arr[8] = 'pi';
// arr[9] = 'hello';

// for(const el of arr){
//   console.log(el)
// }

// _______________________________________________--

// for(let i = 1; i<= 10; i++){
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// __________________________________________

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// ____________________________________________
// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// ____________________________________________
// for (let i = 2; i < 100; i += 2) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// ____________________________________________
// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// -Дано 2 масиви з рівною кількістю об 'єктів.
// Масиви:
// let usersWithId = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
//   },
//   {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
//   },
//   {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
//   },
//   {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
//   }
// ];

// let citiesWithId = [{
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
//   },
//   {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
//   },
//   {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
//   },
//   {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
//   }
// ];

// З 'єднати в один об'
// єкт користувача та місто з відповідними "id"
// та "user_id".
// Записати цей об 'єкт в новий масив
// Example:
//   let usersWithCities = [{
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//           user_id: 1, // <===
//           country: 'Ukraine',
//           city: 'Ternopil'
//         }
//       },
// ___________________________________________________________________________________

// let city;
// let user;
// let usersWithCities = [];

// for (user of usersWithId) {
//   for (city of citiesWithId) {
//     if (user.id == city.user_id) {
//       user.address = city;
//     }    
//   } 
//   usersWithCities.push(user)
// } 
// console.log(usersWithCities)









// -Відтворити роботу годинника, відрахувавши 2 хвилини(2 цикли!1 й - хвилини, 2 й - секунди) -
// Відтворити роботу годинника, відрахувавши 2 години 20 хвилини(3 цикли!1 й - години, 2 й - хвилини, 3 й - секунди)

// for(let i = 1; i <= 2; i++){
//   for(let j = 0; j < 60; j++){
//    console.log('секунда: ' + j);
//   }
//    console.log('Хвилина: ' + i)
// }

// ___________________________________________________________________


// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j < 60; j++) {
//     for (let k = 0; k < 60; k++) {
//         if (i == 2 && j == 20 && k === 1) {
//           break
//         }
//       console.log('година: ' + i + '  ' + 'Хвилина: ' + j + '  ' + 'секунда: ' + k);
//     }  
//      if (i == 2 && j == 20) {
//        break
//      }
//   }
//   if(i == 2){
//     continue
//   }

// }