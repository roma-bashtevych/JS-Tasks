// TASK (1);
// Створити змінні.Присвоїти кожному з них значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log, alert, document.write


// let hello = 'hello';
// console.log(hello);
// alert(hello);
// document.write(`<div>${hello}</div>`);

// let webSchool = 'owu';
// console.log(webSchool);
// alert(webSchool);
// document.write(`<div>${webSchool}</div>`);

// let domainCom = 'com';
// console.log(domainCom);
// alert(domainCom);
// document.write(`<div>${domainCom}</div>`);

// let domainUa = 'ua';
// console.log(domainUa);
// alert(domainUa);
// document.write();

// let oneNumber = 1;
// console.log(oneNumber);
// alert(oneNumber);
// document.write(`<div>${oneNumber}</div>`);

// let tenNumber = 10;
// console.log(tenNumber);
// alert(tenNumber);
// document.write(`<div>${tenNumber}</div>`);

// let smallNumber = -999;
// console.log(smallNumber);
// alert(smallNumber);
// document.write(`<div>${smallNumber}</div>`);

// let number = 123;
// console.log(number);
// alert(number);
// document.write(`<div>${number}</div>`);

// let pi = 3.14;
// console.log(pi);
// alert(pi);
// document.write(`<div>${pi}</div>`);

// let e = 2.7;
// console.log(e);
// alert(e);
// document.write(`<div>${e}</div>`);

// let num = 16;
// console.log(num);
// alert(num);
// document.write(`<div>${num}</div>`);

// let booleanTrue = true;
// console.log(booleanTrue);
// alert(booleanTrue);
// document.write(`<div>${booleanTrue}</div>`);

// let booleanFalse = false;
// console.log(booleanFalse);
// alert(booleanFalse);
// document.write(`<div>${booleanFalse}</div>`);


// TASK(2)
// -Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// Вивести кожну змінну за допомогою: console.log, alert, document.write

// hello = 'hello world';
// console.log(hello);
// alert(hello);
// document.write(`<div>${hello}</div>`);

// webSchool = 'okten';
// console.log(webSchool);
// alert(webSchool);
// document.write(`<div>${webSchool}</div>`);

// domainCom = 'COM';
// console.log(domainCom);
// alert(domainCom);
// document.write(`<div>${domainCom}</div>`);

// domainUa = 'UA';
// console.log(domainUa);
// alert(domainUa);
// document.write();

// oneNumber = '1';
// console.log(oneNumber);
// alert(oneNumber);
// document.write(`<div>${oneNumber}</div>`);

// tenNumber = '10';
// console.log(tenNumber);
// alert(tenNumber);
// document.write(`<div>${tenNumber}</div>`);

// smallNumber = -99999;
// console.log(smallNumber);
// alert(smallNumber);
// document.write(`<div>${smallNumber}</div>`);

// number = 123456;
// console.log(number);
// alert(number);
// document.write(`<div>${number}</div>`);

// pi = 3.1415;
// console.log(pi);
// alert(pi);
// document.write(`<div>${pi}</div>`);

// e = '2.7';
// console.log(e);
// alert(e);
// document.write(`<div>${e}</div>`);

// num = '16';
// console.log(num);
// alert(num);
// document.write(`<div>${num}</div>`);

// booleanTrue = 'true';
// console.log(booleanTrue);
// alert(booleanTrue);
// document.write(`<div>${booleanTrue}</div>`);

// booleanFalse = 'false';
// console.log(booleanFalse);
// alert(booleanFalse);
// document.write(`<div>${booleanFalse}</div>`);

// TASK(3)
// -За допомогою 3 х різних prompt() отримати 3 слова які являються вашими Імям, По - Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

//  let firstNm = prompt('Ваше ім*я?');
//  let centerNm = prompt('Ваше по-батькові?');
//   let age = prompt('Ваш вік?');
//   alert('Вітаю ' + firstNm + ' ' + centerNm +'.' + 'Тобі ' + age + ' років.')

// TASK(4)
// -Взяти змінні з завдання вище та зєднати їх в одну змінну(конкатинація).

// let fullName = firstNm + centerNm + age;
// console.log(fullName)

// TASK(5)
// -За допомогою prompt() отримати 3 числа.Привести їх до числа(Google "String to number JS").Вивести їх в консоль.

// let num1 = +prompt('Введіть число');
// let num2 = +prompt('Введіть число');
// let num3 = +prompt('Введіть число');

// console.log(num1, num2, num3)

// TASK(6)
// -За допомогою prompt() отримати 4 числа.Привести їх до числа за допомогою paeseInt.Додати їх всі мож собою і результат вивести в консоль.

// let num1 = parseInt(prompt('Введіть число'));
// let num2 = parseInt(prompt('Введіть число'));
// let num3 = parseInt(prompt('Введіть число'));
// let num4 = parseInt(prompt('Введіть число'));

// console.log(num1 + num2 + num3 + num4)

// TASK(7)
// -За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//  Просумувати їх.Отрманий результат записати в змінну result.Вивести цю змінну в консоль.

// let num1 = parseFloat(prompt('Введіть число з плаваючою точкою'));
// let num2 = parseFloat(prompt('Введіть число з плаваючою точкою'));
// let num3 = parseFloat(prompt('Введіть число з плаваючою точкою'));

// let result = num1 + num2 + num3;

// console.log(result) 

// TASK(8)
// -За допомогою prompt() отримати 3 числа з плаваючою точкою.Заокруглити їх(Google "round number JS").Просумувати їх між собою.Результат вивести в консоль.

// let num1 = Math.round(prompt('Введіть 1 дробове число'));
// let num2 = Math.round(prompt('Введіть 2 дробове число'));
// let num3 = Math.round(prompt('Введіть 3 дробове число'));

// let result = num1 + num2 + num3;
// console.log('Your num = ' + result)

// TASK(9)
// -За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня.Друге число - це число яке являється степенню.
// За допомогою Math.pow(Google) піднести перше число в степінь другого числа.
// Example.Число 1 = 5. Число 2 = 2. Результат = 25

// let num1 = Math.round(prompt('Введіть число яке будуть підносити до степеня'));
// let num2 = Math.round(prompt('Введіть 2 число яке являється степенню'));

// let result = Math.pow(num1, num2);
// console.log('степінь = ' + result);

// TASK(10)
// -За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// TASK(11)
// -Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!

// console.log(5 < 6); // - > true
// console.log(5 > 6);//  - > false
// console.log(5 >= 6);//  - > false
// console.log(5 == 6);//  - > false
// console.log(10 == 10);//  - > true
// console.log(10 === 10);//  - > true
// console.log(10 != 10);//  - > false
// console.log(10 !== 10);//  - > false
// console.log(10 > 10);//  - > false
// console.log(123 === '123');//  - > false
// console.log(123 == '123');//  - > true

// TASK(12)
// Додатково:
//   -Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль.Перевірте себе.

// console.log(132 > 100 && 45 < 12);//  false
// console.log(34 > 33 && 23 < 90);//  true
// console.log(99 > 100 && 45 > 12); // false
// console.log(132 > 100 || 45 < 12);// true
// console.log(111 > 11 || 45 < 111);// true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));//  true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));//   true
// console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));//  false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));//   true
// console.log(!!'-1');//  true
// console.log(!!-1);//  true   
// console.log(!!'0');//  true
// console.log(!!'null');//  true
// console.log(!!'undefined');//  true
// console.log(!!(3 / 'owu')); //false
// console.log((111 > 11 || 45 < 111) || !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));//  false


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// __________________________________________________________________________________________________________________________________________________
// TASK(13)
//  1. Оголосіть змінні str, num, flag и txt зі значеннями« Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и boolean.

// const str = 'Привіт';
// const num =  123;
// const flag = true;
// const txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// TASK(14)
// 2. Оголосіть змінні a1, a2, a3, a4, a5.За домогою 3 х математичних оператцій отримайте числа:
//   34,
//   12,
//   66,
//   90,
//   87
// Старайтесь використовувати різні оператори.
// Example: 88 = (16 / 2) * 11

// const a1 = (12 * 3) - 2;
// const a2 = (36 / 2) - 6;
// const a3 = 6 + (90 - 30);
// const a4 = 10 + (160 / 2);
// const a5 = (90 - 10) + 7


// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// TASK(15)
// 3. Створіть змінні a6, a7, a8, a9, a10.Запишіть в них результати виразів:
//   5 % 3,
//   3 % 5,
//   5 + '3',
//   '5' - 3,
//   75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// TASK(16)
// 4. Напищіть код, який вираховує площу прямокутника висотою 23 см.(змінна height) та шириною 10 см(змінна width).
// Значееня площі зберігати в змінній s.

// let height = 23;
// let width  = 10;

// let height = +prompt('Введите высоту')
// let width = +prompt('Введите ширину')
// let s = height * width;
// console.log(s);

// TASK(17)
// 5. Напиши код, который находит объем цилиндра высотой 10 м(переменная heightC) и диаметром основания 4 м(dC),
//   результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let rC = 4 / 2;
// let pi = 3.14;

// let v = pi * (rC * rC) * heightC;
// console.log(heightC);

// TASK(18)
// 6. У прямоугольного треугольника две стороны n(со значением 3) и m(со значением 4).
// Найдите гипотенузу k по теореме Пифагора(нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

// console.log(k)

// TASK(19)
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// console.log(str);
// alert(str);
// document.write(str)

// TASK(20)
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби(каждой на новой строки спомощью\ n).

// alert('Bashtevych Roman Stepanovych\n 27\n js')

// TASK(21)
// 9. Создать 4 переменные с использованием ключевого слова
// let с именами str1, str2, str3, concatenation.
// Переменной str1 присвоить фразу‘ Кто‘, str2–‘ ты‘, str3–‘ такой ? ’
//   Локальной переменной concatenation присвоить результат конкатенации 3 - х строк : str1, str2, str3.
// Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = ' Кто';
// let str2 = ' ты';
// let str3 = ' такой ? ';
// let concatenation = str1 + str2 + str3;

// document.write(concatenation);
// if (concatenation === ' Кто ты такой ? '){
//   console.log('Давай досвидание)))')
// }

// TASK(22)
// 10. Какие значения выведет в окно браузера следующий фрагмент кода ? и почему ?
//   let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205
// document.write(str - a + "<br/>"); // 15
// document.write(str * "2" + "<br/>");// 40
// document.write(str / 2 + "<br/>");//  10

// TASK(23)
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log ?
//   parseInt("3.14") //3
// parseInt("-7.875") //-7
// parseInt("435") //435
// parseInt("Вася") //NaN 

// TASK(24)
// 12. С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// TASK(25)
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let num1 = +prompt('Enter number:');
// let num2 = +prompt('Enter number:');

// alert(num1 + num2);

// TASK(26)
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32, а вывод результата при помощи метода alert

// let firstName = prompt('Введите имя пжлс');
// let surName = prompt('Введите фамилию пжлс');
// let age = prompt('Введите возраст');

// alert('Доброго вечера ' + firstName + ' ' + surName + ', ' + 'мои поздравления что вам ' + age);

// TASK(27)
// 1. Три різних числа вводяться через prompt().
// За допомоги
// if
// else вивести іх в порядку зростання.(відсортувати по зростанню)

// let num1 = +prompt('num1 = ');
// let num2 = +prompt('num2 = ');
// let num3 = +prompt('num3 = ');

// if (num1 < num2 && num1 < num3) {
//   if (num2 < num3) {
//     console.log(num1, num2, num3)
//   } else {
//     console.log(num1, num3, num2)
//   }
// } else if (num2 < num1 && num2 < num3) {
//   if (num1 < num3) {
//     console.log(num2, num1, num3)
//   } else {
//     console.log(num2, num3, num1)
//   }
// } else if (num3 < num1 && num3 < num2) {
//   if (num1 < num2) {
//     console.log(num3, num1, num2)
//   } else {
//     console.log(num3, num2, num1)
//   }
// }

// TASK(28)
// 2.
// Все параматры получаем с клавиатуры!!!!
//   Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let str = prompt('Какой цвет на светлофоре ?');

// switch (str) {
//   case 'зеленый':
//     alert('иди');
//     break;
//   case 'желтый':
//     alert('подожди');
//     break;
//     case 'красный':
//     alert('стой');
//     break;    
//   default:
//     alert('делай что хочешь');
//     break;
// }

// TASK(29)
// 3
// Все параметры получаем с клавиатуры!!!!(prompt, confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть - вывести подожди пока нарушители проедут ".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет - вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let str = prompt('Какой цвет на светлофоре ?');

// let isRoadClear = confirm('Есть машины???');

// if (str == 'зеленый' && isRoadClear == false) {
//   alert('иди');
// } else if (str == 'зеленый' && isRoadClear == true) {
//   alert('подожди пока нарушители проедут');
// } else if (str == 'желтый' && isRoadClear == true) {
//   alert('жди');
// } else if (str == 'желтый' && isRoadClear == false) {
//   alert('все рано жди');
// } else if (str == 'красный' && isRoadClear == false) {
//   alert('стой все рано');
// } else if (str == 'красный' && isRoadClear == true) {
//   alert('стой и жди');
// } else {
//   alert('делай что хочешь');
// }

// ___________________________інший варіант_______________________________________________________________________________

// let str = prompt('Какой цвет на светлофоре ?');

// let isRoadClear = confirm('Есть машины???');


// switch (true) {
//   case str === 'зеленый' && isRoadClear:
//     alert('иди');
//     break;
//   case str === 'зеленый' && !isRoadClear:
//     alert('подожди пока нарушители проедут');
//     break;
//   case str === 'желтый' && isRoadClear:
//     alert('жди');
//     break;
//   case str === 'желтый' && !isRoadClear:
//     alert('все равно жди');
//     break;
//   case str === 'красный' && isRoadClear:
//     alert('стой все рано');
//     break;
//   case str === 'красный' && !isRoadClear:
//     alert('стой и жди');
//     break;
//     default:
//       alert('делай что хочешь');
//       break;
// }

// TASK(30)
// --створити масив з:
//   -з 5 числових значень -
//   з 5 стічкових значень -
//   з 5 значень стрічкового, числового та булевого типу -
// const arrNum = [1, 2, 3, 4, 5];
// const arrStr = ['str1', 'str2', 'str3'];
// const arrAll = [1, 'str1', true, 8]
// console.log(arrNum);
// console.log(arrStr);
// console.log(arrAll);

// TASK(31)
// --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль

// let arr = [];

// arr[0] = 125;
// arr[1]= '125';
// arr[2]= true;

// console.log(arr);

// TASK(32)
// -За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <= 10; i++) {
//   document.write(`<div>Hello world!</div>`)
// }

// TASK(33)
// -За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <= 10; i++) {
//   document.write(`<div>Hello world! - ${i}</div>`)
// }

// TASK(34)
// -За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;

// while (i <= 20) {
//   document.write(`<h1>Hello world!</h1>`);
//   i++
// }

// TASK(35)
// -За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;

// while (i <= 20) {
//   document.write(`<h1>Hello world! - ${i}</h1>`);
//   i++
// }

// TASK(36)
// -Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі.

//  const arr = [1, 2, 3, 9, 8, 7, 5, 4, 6, 0];

// for(const el of arr){
//   console.log(el)
// }

// TASK(37)
// -Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі.

// const arr = ['srt1', 'srt2', 'srt3', 'srt4', 'srt5', 'srt6', 'srt7', 'srt8', 'srt9', 'srt0'];

// for (const el of arr) {
//   console.log(el)
// }

// TASK(38)
// -Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі.

// const arr = ['srt1', 2, '23', true, 'srt5', false, 96547, 'hello', 0, 'srt0'];

// for (const el of arr) {
//   console.log(el)
// }

// TASK(39)
// -Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки булеві елементи

// const arr = [true, 2, '23', true, 'srt5', false, 96547, 'true', 0, 'srt0'];

// for (const el of arr) {
//   if(typeof el === "boolean")
//   console.log(el)
// }

// TASK(40)
// -Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки числові елементи

// const arr = [true, 2, '23', true, 'srt5', false, 96547, 'true', 0, 'srt0'];

// for (const el of arr) {
//   if(typeof el === "number")
//   console.log(el)
// }

// TASK(41)
// -Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою
// if та typeof вивести тільки рядкові елементи

// const arr = [true, 2, '23', true, 'srt5', false, 96547, 'true', 0, 'srt0'];

// for (const el of arr) {
//   if(typeof el === "string")
//   console.log(el)
// }

// TASK(42)
// -Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі.

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

// TASK(43)
// -Створити цикл
// for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i = 1; i<= 10; i++){
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// TASK(44)

// -Створити цикл
// for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// TASK(45)
// -Створити цикл
// for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// TASK(46)
// -Створити цикл
// for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write

// for (let i = 2; i < 100; i += 2) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// TASK(47)
// -Створити цикл
// for на 100 ітерацій.Вивести тільки непарні кроки.через console.log + document.write

// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
//   document.write(`<div>${i}</div>`)
// }

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
// // TASK(50)
// -Дан масив['a', 'b', 'c'].Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];

// for(let i = 1; i <= 3; i++){
//   arr.push(i);
// }

// console.log(arr)

// TASK(51)
// -Дан масив[1, 2, 3].Зробіть з нього новий масив[3, 2, 1].

// const arr = [1, 2, 3];
// const arr2 = arr.reverse();
// console.log(arr2)

// TASK(52)
// -Дан масив[1, 2, 3].Додайте йому в кінець елементи 4, 5, 6.

// const arr = [1, 2, 3];

// for(let i = 4; i <= 6; i++){
//   arr.push(i);
// }

// console.log(arr)

// TASK(53)
// -Дан масив[1, 2, 3].Додайте йому в початок елементи 4, 5, 6.

// const arr = [1, 2, 3];

// for (let i = 4; i <= 6; i++) {
//   arr.unshift(i);
// }

// console.log(arr)

// TASK(54)
// -Дан масив['js', 'css', 'jq'].Виведіть на екран перший елемент за допомогою shift()

// let shift = ['js', 'css', 'jq'].shift();
// console.log(shift)

// TASK(55)
// -Дан масив['js', 'css', 'jq'].Виведіть на екран останній елемент за допомогою pop()

// let pop = ['js', 'css', 'jq'].pop()
// console.log(pop);

// TASK(55)
// -Дан масив[1, 2, 3, 4, 5].Перетворіть масив в[4, 5].

//   const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.splice(0, 3);
// console.log(arr)

// const arr2 = arr.slice(3, arr.length);
// console.log(arr2)

// TASK(56)
// -Дан масив[1, 2, 3, 4, 5].Перетворіть масив в[1, 2].

// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.slice(0, 2);
// console.log(arr2)

// TASK(57)
// -Дан масив[1, 2, 3, 4, 5].Зробіть з нього масив[1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.splice(3, 0, 'a', 'b', 'c');

// console.log(arr)

// TASK(58)
// -Дан масив[1, 2, 3, 4, 5].Зробіть з нього масив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')

// console.log(arr);

// TASK(59)
// -Взяти масив з 10 чисел або створити його.Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [];

// for(let i = 1; i <= 10; i++){
//   arr.push(i)
// }

// for(el of arr){
//   if (el % 2 === 0){
//     console.log(el)
//   }
// }

// TASK(60)
// -Взяти масив з 10 чисел або створити його.Створити 2 й порожній масив.За допомогою будь - якого циклу та push() скопіювати значення одного масиву в інший

// let arr = [];

// for(let i = 1; i <= 10; i++){
//   arr.push(i)
// }

// let arr2 = [];

// for(el of arr){
//   arr2.push(el)
// }

// console.log(arr2);

// TASK(61)
// зробити масив з 10 чисел[2, 17, 13, 6, 22, 31, 45, 66, 100, -18] та:
//   1. перебрати його циклом
// while

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++
// }

// TASK(62)
//  перебрати його циклом for

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// TASK(63)
// 3. перебрати циклом while та вивести числа тільки з непарним індексом

//  const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//  let i = 0;
//  while (i < arr.length) {
//    if(i % 2 !== 0)
//   console.log(arr[i])
//    i++
//  }

// TASK(64)
// 4. перебрати циклом for та вивести числа тільки з непарним індексом

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(arr[i])
//   }
// }

// TASK(65)
// 5. перебрати циклом
// while та вивести числа тільки парні значення

//  const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//  let i = 0;
//  while (i < arr.length) {
//    if(i % 2 === 0)
//   console.log(arr[i])
//    i++
//  }

// TASK(66)
// 6. перебрати циклом
// for та вивести числа тільки парні значення

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     console.log(arr[i])
//   }
// }

// TASK(67)
// 7. замінити кожне число кратне 3 на слово "okten"

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0) {
//     arr[i] = 'okten'
//   }
//   arr2.push(arr[i])
// }
// console.log(arr2);

// TASK(68)
// 8. вивести масив в зворотньому порядку.

//  const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//  arr.reverse();
//  console.log(arr);

// TASK(69)
// створити пустий масив та:
//   -заповнити його 50 парними числами за допомоги циклу.

// let arr = [];
//  for(let i = 1; i <= 100; i++){
//    if(i % 2 === 0){
//      arr.push(i)
//    }
//  }
//  console.log(arr);

// TASK(70)
// -заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];
//  for(let i = 1; i <= 100; i++){
//    if(i % 2 !== 0){
//      arr.push(i)
//    }
//  }
//  console.log(arr);

// TASK(71)
//  c.Заповнити масив 20 ма рандомними числами.(Google: Generate random number JS)

// let arr = [];

// for(let i = 1; i <= 20; i++){
//   arr.push(Math.random())
// }
// console.log(arr);

// TASK(72)
// d.Заповнити масив 20 ма рандомними чисалами в діапазоні від 8 до 732(Google: Generate random number JS)

// let arr = [];

// for(let i = 1; i <= 20; i++){
//   arr.push(Math.floor(Math.random() * (732 - 8) + 8))
// }
// console.log(arr);

// TASK(73)
//  2. Вивести за допомогою console.log кожен третій елемен
// let arr = [];

// for(let i = 1; i <= 20; i++){
//   arr.push(Math.floor(Math.random() * (732 - 8) + 8))
// }
// console.log(arr)

// for(let i = 0; i < arr.length; i+=3){
//   console.log(arr[i])
// }

// TASK(74)
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];

// for (let i = 1; i <= 20; i++) {
//   arr.push(Math.floor(Math.random() * (732 - 8) + 8))
// }
// console.log(arr)

// for (let i = 0; i < arr.length; i += 3) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i])
//   }
// }

// TASK(75)
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// let newArr = []

// for (let i = 1; i <= 20; i++) {
//   arr.push(Math.floor(Math.random() * (732 - 8) + 8))
// }
// console.log(arr)

// for (let i = 0; i < arr.length; i += 3) {
//   if (arr[i] % 2 === 0) {
//    newArr.push(arr[i])
//   }
// }
// console.log(newArr)

// TASK(76)
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//  EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] - > Має бути виведено 1, 9, 56

//  const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// console.log(arr);

//  for(let i = 0; i <= arr.length-1; i++){
//    if(arr[i + 1] % 2 === 0){
//      console.log(arr[i])
//    }
//  }

// TASK(77)
//  6. Є масив з числами[100, 250, 50, 168, 120, 345, 188], Які характеризують вартість окремої покупки.Обрахувати середній чек.

// let numArr = [100, 250, 50, 168, 120, 345, 188];
// let chek = 0

// for(const el of numArr){
//  chek += el
// }

// console.log(chek);

// TASK(78)
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let newArr = [];
// for (let i = 1; i <= 20; i++) {
//   arr.push(Math.floor(Math.random() * (100 - 1) + 1))
// }
// console.log(arr);

// for(const el of arr){
//   newArr.push(el * 5)
// }
// console.log(newArr);

// TASK(79)
// 8. Створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [1, '25', true, 254, false, 'NaN', 359]
// let newArr = []

// for(const el of arr){
//   if(typeof el === 'number'){
// newArr.push(el)
//   }
// }

// console.log(newArr);

// TASK(80)
// -Дано масив: ['a', 'b', 'c'].За допомогою циклу
// for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i <= arr.length - 1; i++){
//   str += arr[i]
// }

// console.log(str);

// TASK(81)
// -Дано масив: ['a', 'b', 'c'].За допомогою циклу
// while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';

// let i = 0;
// while (i <= arr.length - 1) {
//   str += arr[i]
//   i++
// }
// console.log(str);

// TASK(82)
// -Дано масив: ['a', 'b', 'c'].За допомогою циклу
// for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// for (const el of arr){
//   str += el
// }

// console.log(str);

// TASK(82)
// 1) створити функцію яка приймає масив та виводить його

// function showArr(arr) {
//  console.log(arr);
// }

// showArr([1, 2, 75])

// TASK(83)
// 2) створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попередню функцію.

// function ramdomNum(min, max) {
//   let arr = []
//    for (let i = 1; i <= 10; i++) {
//     arr.push(Math.floor(Math.random() * (max - min) + min))
//   }
//   showArr(arr)
// }

// ramdomNum(1, 100)
// TASK(84)
// 3) створити функцію яка приймає три числа та виводить найменьше.(Без Math.min!)

// function littleNum(num1, num2, num3) {
//   if(num1 < num2 && num1 < num3){
//    console.log(num1)
//   }else if(num2 < num1 && num2 < num3){
//     console.log(num2)
//   }else if(num3 < num1 && num3 < num2){
//     console.log(num3);
//   }
// }

// littleNum(769, 3567, 55)

// TASK(85)
// 4) створити функцію яка приймає три числа та виводить найбільше.(Без Math.max!)

// function bigNum(num1, num2, num3) {
//   if(num1 > num2 && num1 > num3){
//    console.log(num1)
//   }else if(num2 > num1 && num2 > num3){
//     console.log(num2)
//   }else if(num3 > num1 && num3 > num2){
//     console.log(num3);
//   }
// }

// bigNum(769, 3567, 55)

// TASK(86)
// 5) створити функцію яка повертає найбільше число з масиву

// function bigNum(arr) {
//   let num = 0
//   for (const el of arr) {
//     if (num < el) {
//       num = el
//     }
//   }
//   return num
// }

// console.log(bigNum([2, 89, 6]));

// TASK(87)
// 6) створити функцію яка повертає найменьше число з масиву

// function littleNum(arr) {
//   let num = arr[0];
//   for(const el of arr){
//     if(num > el){
//       num = el
//     }
//   }
//   return num
// }

// console.log(littleNum([7895, 32, 563, 5]));

// TASK(88)
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArr(arr) {
//   let sum = 0;
//   for(const el of arr){
//     sum += el
//   }
//   return sum
// }
// console.log(sumArr([1, 2, 3, 4, 5]));

// TASK(89)
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArrMid(arr) {
//   let sum = 0;
//   for(const el of arr){
//     sum += el
//   }
//   return sum / arr.length
// }
// console.log(sumArrMid([1, 2, 3, 4, 5]));

// TASK(90)
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// function getKey(arr) {
//   let keys = []
//   for (const el of arr) {
//     for (const key in el) {
//       keys.push(key)
//     }
//   }
//   return keys
// }

// console.log(getKey([{
//     name: 'kolya',
//     age: 24
//   },
//   {
//     name: 'vlad',
//     age: 29,
//     status: true
//   }
// ]));

// TASK(91)
// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// function getValue(arr) {
//   let keys = []
//   for (const el of arr) {
//     for (const key in el) {
//       keys.push(el[key])
//     }
//   }
//   return keys
// }

// console.log(getValue([{
//     name: 'kolya',
//     age: 24
//   },
//   {
//     name: 'vlad',
//     age: 29,
//     status: true
//   }
// ]));

// TASK(92)
// 11) створити функцію яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.

// function func(arr1, arr2) {
//   let arr3 = [];
//   for(let i = 0; i <= arr1.length - 1; i++){
//     for(let j = 0; j <= arr2.length - 1; j++){
//       if(i === j){
//         arr3.push(arr1[i] + arr2[j])
//       }
//     }
//   }
//   return arr3
// }

// console.log(func([1, 2, 3, 4], [2, 3, 4, 5]))

// TASK(93)
// -створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше(Math використовувати заборонено);

// function func() {
//    let numSmall = arguments[0];
//      let numBig = arguments[0]
//      for (let i = 0; i < arguments.length; i++) {
//        if (numSmall > arguments[i]) {
//          numSmall = arguments[i]
//        } else if (numBig < arguments[i]) {
//          numBig = arguments[i]
//        }
//      }
//      console.log(numBig);
//      return numSmall  
// }

// console.log(func(10, 25, 795, 6, 45, 3));

// TASK(94)
// -Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function getObj(arr, val) {
//   let keys = [];
//   for (const el of arr) {
//     for (const k in el) {
//       if (val === 'key') {
//         keys.push(k)
//       } else if (val === 'value') {
//         keys.push(el[k])
//       }
//     }
//   }
//   return keys
// }

// console.log(getObj([{
//     name: 'kolya',
//     age: 24
//   },
//   {
//     name: 'vlad',
//     age: 29,
//     status: true
//   }
// ], 'value'));

// TASK(95)
// -Приймає масив та число "i", та міняє місцями об `єкт який знаходиться в індексі "i" на "i+1"

// function indexChange(arr, index) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === index) {
//       // console.log(i, arr[i])
//       arr.splice(i + 1, 0, arr.splice(i, 1)[0])

//     }
//   }
//   return arr
// }

// console.log(indexChange([9, 8, 0, 4], 2))

// TASK(96)
// -Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

// function changeZero(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1)
//       arr.push(0)
//     }
//   }
//   return arr
// }

// console.log(changeZero([ 0, 1, 0, 5, 0, 0, 67, 78]))

// TASK(97)
// -Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function nameNormalizator(name) {
//     name = name.trim();
//     while (name.includes('  ')) {
//       name = name.replace('  ', ' ');
//     }
//     return name;
// }

// console.log(nameNormalizator('    Hermione       Granger      '));

// TASK(97)
// Реалізовуємо свій компютерний магазин. ===
//   Необхідно реалізувати базовий клас комютера.Який має лише параметри:
//   Оперативна память.
// Потужність процесора.(цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

// class Computer {
//     constructor(memory, processor, name) {
//         this.memory = memory;
//         this.processor = processor;
//         this.name = name;
//         }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
// }


// let pc = new Computer(2, 500, 'AppleComputer')
// console.log(pc);
// pc.turnOn();

// TASK(98)
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї.Ця змінна визначається як потужність / (дюйми * оперативку)

// class Laptop extends Computer {
//     constructor(memory, processor, name, screenSize) {
//         super(memory, processor, name);
//         this.screenSize = screenSize;
//         this.batery = this.processor/(this.screenSize*this.memory);
//     }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
// }

// let laptop = new Laptop(4, 600, 'MacBook', 15);
// laptop.turnOn();
// console.log(laptop);

// TASK(99)
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2 кг та батарея тримаж менше ніж 4 години.

// class UltraBook extends Laptop {
//     constructor(memory, processor, name, screenSize, weight) {
//         super(memory, processor, name, screenSize);
//         this.weight = weight;
//     }
//     turnOn() {
//         if (this.weight > 2 && this.batery < 4) {
//             console.log('Issue');
//         }
//         else {
//         console.log('Hello dear owner, let`s work');
//         }
//     }
// }

// let ultraBook = new UltraBook(6, 700, 'MacBook', 13, 3);
// ultraBook.turnOn();
// console.log(ultraBook);

// TASK(100)
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10 % .Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази.Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи.Мняти змінну "в лоб"
// заборонено.

// class PC extends Computer {
//     constructor(memory, processor, name) {
//         super(memory, processor, name)
//         this.fps = this.processor/this.memory;
//         }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
//     playGame(game = '') {
//         console.log(`You are playing ${game} with ${this.fps} FSP`);
//     }
// }


// let basePC = new PC(4, 500, 'Dell');
// console.log(basePC);
// basePC.turnOn();
// basePC.playGame('WarThunder');

// TASK(101)
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1 % .
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

// class PowerPC extends PC {
//     constructor(memory, processor, name) {
//         super(memory, processor, name)
//         }
//         increasePower() {
//             let max = 1.1;
//             let min = 1.0;
//             this.processor *= (Math.random() * (max - min + 0.01) + min);
//             this.processor = Math.round(this.processor);
//         }
//         increaseMemory() {
//             this.memory *= 2;
//         }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
//     playGame(game = '') {
//         console.log(`You are playing ${game} with ${this.fps} FSP`);
//     }
// }


// let powerPC = new PowerPC(6, 600, 'Asus');
// console.log(powerPC);
// powerPC.increasePower();
// powerPC.increaseMemory();
// powerPC.turnOn();
// powerPC.playGame('WarThunder');
// console.log(powerPC);


// TASK(101)
// -Створити функцію конструктор яка дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
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

// TASK(102)
// -Створити клас який дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
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

// TASK(102)
// -створити класс попелюшка з полями ім 'я, вік, розмір ноги
//   --Створити 10 попелюшок, покласти їх в масив
//   --Сторити об 'єкт класу "принц" за допомоги класу який має поля ім'
// я, вік, туфелька яку він знайшов.
//   --за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }

// let olya = new Cinderella('Olya', 25, 36)
// let sveta = new Cinderella('Sveta', 18, 35)
// let stefa = new Cinderella('Stefa', 24, 39)
// let sasha = new Cinderella('Sasha', 29, 36)
// let karina = new Cinderella('Karina', 22, 39)
// let inga = new Cinderella('Inga', 33, 37)
// let anna = new Cinderella('Anna', 26, 34)
// let roma = new Cinderella('Roma', 24, 35)
// let zoryna = new Cinderella('Zoryna', 29, 38)
// let maryana = new Cinderella('Maryna', 25, 37)

// class Prince extends Cinderella {
//   constructor(name, age, shoesSize) {
//     super (name, age);
//     this.shoesSize = shoesSize;
//   }
// }

// let prince = new Prince('prince', 25, 38)

// let girlsArr = [olya, sveta, stefa, sasha, karina, inga, anna, roma, zoryna, maryana];

// console.log(girlsArr)

// for (let el of girlsArr) {
//   if (el.footSize === prince.shoesSize) {
//     console.log(el)
//   }
// }

// TASK(103)
// -створити функцію конструктор попелюшка з полями ім 'я, вік, розмір ноги
//   --Створити 10 попелюшок, покласти їх в масив
//   --Сторити об 'єкт типу "принц" за допомоги функції конструктора з полями ім'
// я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//   --функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// class Cinderella {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }

// let olya = new Cinderella('Olya', 25, 36)
// let sveta = new Cinderella('Sveta', 18, 35)
// let stefa = new Cinderella('Stefa', 24, 39)
// let sasha = new Cinderella('Sasha', 29, 36)
// let karina = new Cinderella('Karina', 22, 39)
// let inga = new Cinderella('Inga', 33, 37)
// let anna = new Cinderella('Anna', 26, 34)
// let roma = new Cinderella('Roma', 24, 35)
// let zoryna = new Cinderella('Zoryna', 29, 38)
// let maryana = new Cinderella('Maryna', 25, 37)

// class Prince extends Cinderella {
//   constructor(name, age, shoesSize) {
//     super (name, age);
//     this.shoesSize = shoesSize;

//     this.searchGirl = function (arr = []){
//         for (let el of girlsArr) {
//           if (el.footSize === prince.shoesSize) {
//             console.log(el)
//           }
//         }
//     }
//   }
// }

// let prince = new Prince('prince', 25, 38)

// let girlsArr = [olya, sveta, stefa, sasha, karina, inga, anna, roma, zoryna, maryana];

// console.log(girlsArr)

// prince.searchGirl(girlsArr)

// TASK(104)
// 1) Створити масив з 20 чисел та:
//   a) відсортувати його від меншого до більшого.

// const arr = [25, 1, 78, 6, 45, 18, 7, 3, 8, 16, 9, 27, 21, 33, 75, 628, 256, 2, 11, 0]

// let sortArr = arr.sort(function(a, b){
//   return a - b
// })

// console.log(sortArr);

// TASK(105)
//  b) відсортувати його від більшого до меншого.)

// let sortArr = arr.sort(function (a, b) {
//         return b - a
//       })

//       console.log(sortArr);

// TASK(106)
//  c) Відфілтрувати числа які є кратними 3.

// let filterArr = arr.filter(function(elem){
//   return elem % 3 === 0
// })

// console.log(filterArr);

// TASK(107)
//  d) Відфілтрувати числа які є більшими за 10.

// let filterArr = arr.filter(function (elem) {
//   return elem > 10
// })

// console.log(filterArr);

// TASK(108)
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// let arrFor = arr.forEach(function (elem) {
// document.write(`<div>${elem}</div>`)   
// })

// TASK(109)
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.

//  let map = arr.map(function(elem){
//  return elem * 3
// })

// console.log(map);

// TASK(110)
//  g) Порахувати загальну суму всіх елментів у масиві(reduce)

// let reducer = arr.reduce(function(acc, value) {
//   return acc + value
// })
// console.log(reducer);

// TASK(111)
// 2) Створити масив з 20 стрічок та:
//   a) Відсортувати його в алфавітному порядку

// const strArr = ['str', 'abcde', 'hello', 'java', 'script', 'html', 'yes', 'dog', 'abrakadabra', 'no', 'str', 'abcde', 'hello', 'java', 'script', 'html', 'yes', 'dog', 'abrakadabra', 'no']

// let sortStrArr = strArr.sort()
// console.log(sortStrArr);
// TASK(112)
//  b) Відсортувати в зворотньому порядку

// let sortStrArr = strArr.sort((str1, str2) => {
//   if (str1 > str2){
//     return -1
//   }

//   return 1
// })
// console.log(sortStrArr);


// TASK(113)
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви(filter)

// let filterStrArr = strArr.filter((elem) => elem.length > 4);

// console.log(filterStrArr);

// TASK(113)
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let mapStr = strArr.map(function(elem){
//   return `Sam say ${elem}`
// })

// console.log(mapStr);

// TASK(114)
// 3) Все робити тільки за допомогою методів масивів!
// a) відсортувати його за віком(зростання, а потім окремо спадання)
const users = [{
    name: 'vasya',
    age: 31,
    isMarried: false
  },
  {
    name: 'petya',
    age: 30,
    isMarried: true
  },
  {
    name: 'kolya',
    age: 29,
    isMarried: true
  },
  {
    name: 'olya',
    age: 28,
    isMarried: false
  },
  {
    name: 'max',
    age: 30,
    isMarried: true
  },
  {
    name: 'anya',
    age: 31,
    isMarried: false
  },
  {
    name: 'oleg',
    age: 28,
    isMarried: false
  },
  {
    name: 'andrey',
    age: 29,
    isMarried: true
  },
  {
    name: 'masha',
    age: 30,
    isMarried: true
  },
  {
    name: 'olya',
    age: 31,
    isMarried: false
  },
  {
    name: 'max',
    age: 31,
    isMarried: true
  }
];

// let ageUser = users.sort((user1, user2) =>{
//   return user1.age - user2.age
// })

// console.log(ageUser);

// ____________________________________________________________________________

// let ageUser = users.sort((user1, user2) => {
//   return user2.age - user1.age
// })

// console.log(ageUser);

// TASK(115)
// b) відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання)

// let nameUser = users.sort((user1, user2) =>{
//   return (user1.name).length - (user2.name).length
// })

// console.log(nameUser);

// ____________________________________________________________________________

// let nameUser = users.sort((user1, user2) => {
//   return (user2.name).length - (user1.name).length
// })

// console.log(nameUser);

// TASK(115)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення),
//   та зберегти це в новий масив(первинний масив залишиться без змін)

// let mapUser = users.map(function(user, index){
//  user.id = index + 1
//  return user
// })

// console.log(mapUser);

// TASK(116)
// d) відсортувати його за індентифікатором

// let idUser = users.sort((user1, user2) => {
//   return user2.id - user1.id
// })

// console.log(idUser);

// TASK(117)
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру(reduce)




// TASK(118)
// Відфільтрувати масив за наступними крітеріями:

// const cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
//   },
//   {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
//   },
//   {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
//   },
//   {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
//   },
//   {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
//   },
//   {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
//   },
//   {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
//   },
//   {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
//   },
//   {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
//   },
//   {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
//   },
//   {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
//   },
//   {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
//   },
//   {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
//   }
// ];
//   -двигун більше 3 х літрів -

// let volume = cars.filter(function(car){
//   if(car.volume > 3){
//   return car
//   }
// })

// console.log(volume);

// _______________________________________________
//   двигун = 2 л -

// let volume = cars.filter(function (car) {
//   if (car.volume = 2) {
//     return car
//   }
// })

// console.log(volume);

// _____________________________________________________
//   виробник мерс -

// let producer = cars.filter(function (car) {
//   if (car.producer === 'mercedes') {
//     return car
//   }
// })

// console.log(producer);

// _//   двигун більше 3 х літрів + виробник мерседес -_______

// let filter = cars.filter(function (car) {
//   if (car.volume > 3 && car.producer === 'meredes') {
//     return car
//   }else{
//     console.log('sory, no car');
//   }
// })

// console.log(filter);

// _____________________________________________________
//   двигун більше 3 х літрів + виробник субару -

// let filter = cars.filter(function (car) {
//   if (car.volume > 3 && car.producer === 'subaru') {
//     return car
//   }
// })

// console.log(filter);

// _________________________________________________________
//   сили більше ніж 300 -

// let filter = cars.filter(function (car) {
//   if (car.power > 300) {
//     return car
//   }
// })

// console.log(filter);

// _________________________________________________
//   сили більше ніж 300 + виробник субару -

// let filter = cars.filter(function (car) {
//   if (car.power > 300 && car.producer === 'subaru') {
//     return car
//   }
// })

// console.log(filter);

// _____________________________________________________
//   мотор серіі ej -

// let filter = cars.filter(function (car) {
//   if (car.engine.includes('ej')) {
//     return car
//   }
// })

// console.log(filter);

// __________________________________________________________
//   сили більше ніж 300 + виробник субару + мотор серіі ej -

// let filter = cars.filter(function (car) {
//   if (car.engine.includes('ej') && car.power > 300 && car.producer === 'subaru') {
//     return car
//   }
// })

// console.log(filter);

// ______________________________________________________________
//   двигун меньше 3 х літрів + виробник мерседес -

// let filter = cars.filter(function (car) {
//   if (car.volume < 3 && car.producer === 'meredes') {
//     return car
//   }else{
//     console.log('sory, no car');
//   }
// })

// console.log(filter);

// ___________________________________________________________________
//   двигун більше 2 л + сили більше 250 -

// let filter = cars.filter(function (car) {
//   if (car.volume > 2 && car.power > 250) {
//     return car
//   }
// })

// console.log(filter);

// ______________________________________________________
//   сили більше 250 + виробник бмв

// let filter = cars.filter(function (car) {
//   if (car.producer === 'bmw' && car.power > 250) {
//     return car
//   }
// })

// console.log(filter);

// TASK(119)
// -взять слдующий массив

// const usersWithAddress = [{
//     id: 9,
//     name: 'vasya',
//     age: 31,
//     isMarried: false,
//     address: {
//       city: 'Kyiv',
//       street: 'Gongadze',
//       number: 16
//     }
//   },
//   {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     isMarried: true,
//     address: {
//       city: 'Rivne',
//       street: 'Zelena',
//       number: 1
//     }
//   },
//   {
//     id: 4,
//     name: 'kolya',
//     age: 29,
//     isMarried: true,
//     address: {
//       city: 'Lviv',
//       street: 'Pasichna',
//       number: 121
//     }
//   },
//   {
//     id: 3,
//     name: 'olya',
//     age: 28,
//     isMarried: false,
//     address: {
//       city: 'Rivne',
//       street: 'Shevchenko',
//       number: 90
//     }
//   },
//   {
//     id: 8,
//     name: 'max',
//     age: 30,
//     isMarried: true,
//     address: {
//       city: 'Lviv',
//       street: 'Kriva Lipa',
//       number: 115
//     }
//   },
//   {
//     id: 6,
//     name: 'anya',
//     age: 31,
//     isMarried: false,
//     address: {
//       city: 'Lviv',
//       street: 'Shevchenko',
//       number: 2
//     }
//   },
//   {
//     id: 10,
//     name: 'oleg',
//     age: 28,
//     isMarried: false,
//     address: {
//       city: 'Kyiv',
//       street: 'Centralna',
//       number: 22
//     }
//   },
//   {
//     id: 5,
//     name: 'andrey',
//     age: 29,
//     isMarried: true,
//     address: {
//       city: 'Lviv',
//       street: 'Gorodotska',
//       number: 43
//     }
//   },
//   {
//     id: 1,
//     name: 'masha',
//     age: 30,
//     isMarried: true,
//     address: {
//       city: 'Kyiv',
//       street: 'Peremogi',
//       number: 12
//     }
//   },
//   {
//     id: 7,
//     name: 'olya',
//     age: 31,
//     isMarried: false,
//     address: {
//       city: 'Lviv',
//       street: 'Naukova',
//       number: 16
//     }
//   },
//   {
//     id: 11,
//     name: 'max',
//     age: 31,
//     isMarried: true,
//     address: {
//       city: 'Rivne',
//       street: 'Ivana Franka',
//       number: 121
//     }
//   }
// ];

// --Відсортувати їх по ID

// let sort = usersWithAddress.sort((user1, user2) => {
//   return user1.id - user2.id
// })

// console.log(sort);

// --Відсортувати їх по ID в зворотньому порядку

// let sort = usersWithAddress.sort((user1, user2) => {
//   return user2.id - user1.id
// })

// console.log(sort);

// --Відсортувати по віку

// let sort = usersWithAddress.sort((user1, user2) => {
//   return user1.age - user2.age
// })

// console.log(sort);

// --Відсортувати по віку в зворотньому порядку

// let sort = usersWithAddress.sort((user1, user2) => {
//   return user2.age - user1.age
// })

// console.log(sort);

// --Відсорутвати по імені
// let sort = usersWithAddress.sort((user1, user2) => {
// if(user1.name > user2.name){
//   return 1
// }
//   return -1
// })

// console.log(sort);

// --Відсорутвати по назві вулиці
// let sort = usersWithAddress.sort((user1, user2) => {
// if (user1.address.street > user2.address.street) {
//   return 1
// }
//   return -1
// })

// console.log(sort);

// --Відсорутвати по номеру будинку
// let sort = usersWithAddress.sort((user1, user2) => {
//   return user1.address.number - user2.address.number
// })

// console.log(sort);
// --Залигити тільки тих, хто молодший ніж 30(filter)

// let filter = usersWithAddress.filter((user) => {
// if(user.age < 30){
//   return user
// }
// })

// console.log(filter);

// --Залишити тільки одружених

// let filter = usersWithAddress.filter((user) => {
//   if (user.isMarried === true) {
//     return user
//   }
// })

// console.log(filter);

// --Залишити тільки одружених, які молодні за 30

// let filter = usersWithAddress.filter((user) => {
//   if (user.isMarried === true && user.age < 30) {
//     return user
//   }
// })

// console.log(filter);

// --Залишити лише тих, в кого парні номери будинків.

// let filter = usersWithAddress.filter((user) => {
//   if (user.address.number % 2 === 0) {
//     return user
//   }
// })

// console.log(filter);

// --Порахувати загальний вік всіх людей.(reduce)

// let reducer = usersWithAddress.reduce((acc, val) => {
//   acc.age + val.age
// }, 0)

// console.log(reducer);

// --Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив(reduce)

// TASK(120)
// Створити обєкт автомобіля з полями:
//   Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.

// const cars = [{
//     producer: "subaru",
//     year: 2010,
//     volume: 2,
//     power: 400,
//     price: 15000,
//     owner: {
//       name: 'vadim',
//       age: 29,
//       experience: 7
//     }
//   },
//   {
//     producer: "subaru",
//     year: 1998,
//     volume: 2,
//     power: 140,
//     price: 17000,
//     owner: {
//       name: 'vasya',
//       age: 25,
//       experience: 2
//     }
//   },
//   {
//     producer: "bmw",
//     year: 2013,
//     volume: 1.5,
//     power: 120,
//     price: 12000,
//     owner: {
//       name: 'dima',
//       age: 19,
//       experience: 1
//     }
//   },
//   {
//     producer: "bmw",
//     year: 2010,
//     volume: 1.5,
//     power: 120,
//     price: 25000,
//     owner: {
//       name: 'roman',
//       age: 27,
//       experience: 8
//     }
//   },
//   {
//     producer: "mercedes",
//     year: 1990,
//     volume: 2,
//     power: 180,
//     price: 8000,
//     owner: {
//       name: 'slavik',
//       age: 20,
//       experience: 1
//     }
//   },
//   {
//     producer: "mercedes",
//     year: 2017,
//     volume: 3,
//     power: 400,
//     price: 15000,
//     owner: {
//       name: 'vlad',
//       age: 52,
//       experience: 27
//     }
//   },
//   {
//     producer: "mercedes",
//     year: 2017,
//     volume: 2.5,
//     power: 230,
//     price: 30000,
//     owner: {
//       name: 'stas',
//       age: 65,
//       experience: 45
//     }
//   }
// ];

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10 % (переприсвоєння змінної потужності).

// cars[0].volume = cars[0].volume * 0.1;
// cars[1].volume = cars[1].volume * 0.1;
// cars[2].volume = cars[2].volume * 0.1;
// cars[3].volume = cars[3].volume * 0.1;

// На відремонтовані автомобілі найняти нових водіїв(переприсвоїти змінну водій).

// cars[0].owner = {
//   name: 'dima',
//   age: 39,
//   experience: 4
// }
// cars[1].owner = {
//   name: 'vadim',
//   age: 29,
//   experience: 7
// }
// cars[2].owner = {
//   name: 'vlad',
//   age: 52,
//   experience: 27
// }
// cars[3].owner = {
//   name: 'stas',
//   age: 65,
//   experience: 45
// }

// console.log(cars);

// Далі необхідно рати кожну другу машинку(цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10 % та ціну на 5 %

// for (let i = 0; i < cars.length; i += 2) {
//   cars[i].volume = cars[i].volume * 0.1;
//   cars[i].price = cars[i].price * 0.05;
// }

// Після того зробити перевірку досвіду ВСІХ наших водіїв.Якщо досвід водія менший за 5 років, але його вік більший за 25,
//   то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.


// for (let i = 0; i < cars.length; i++) {
// if(cars[i].owner.experience && cars[i].owner.age > 25){
//   cars[i].owner.experience++
// }
// }

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let sumPriceCars = 0;
// for(let i = 0; i < cars.length; i++){
//   sumPriceCars += cars[i].price
// }

// console.log(sumPriceCars);

// TASK(121)
// -Створити довільний елемент с id = text.використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id = "text".

// let btn = document.querySelector('.button');

// let idText = document.getElementById('text');

// btn.addEventListener('click', function(){
//    idText.style.display = 'none';
// });

// TASK(122)
// -Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// let btn = document.querySelector('.button');

// btn.addEventListener('click', function(){
//   btn.style.display = 'none';
// });

// TASK(123)
// -Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

// let formSubmit = document.querySelector('.form__submit');
// let formInput = document.querySelector('.form__input');

// formSubmit.addEventListener('click', function(){
//  if (formInput.value < 18){
//    alert('Ви не повнолітній')
//  }else{
//    alert('Вам все можна')
//  }
// });

// TASK(124)
// -Створіть меню, яке розгортається / згортається при клику
// let menuBtn = document.getElementById('menu__btn');
// let menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function () {
//   menu.classList.toggle('active')
//   console.log(999)
// })

// TASK(125)
// -Створіть список коментарів, приклад об 'єкту коментаря - {title : '
// lorem ', body:'
// lorem ipsum dolo sit ameti '}.
// Вивести список коментарів в документ, кожний в своєму блоці.
// Додайте кожному коментарю по кнопці для згортання його body.

// const objComments = [{
//     title: 'lorem',
//      body:'lorem ipsum dolo sit ameti'
//     }, {
//       title: 'lorem',
//       body: 'lorem ipsum dolo sit ameti'
//     },
//     {
//       title: 'lorem',
//       body: 'lorem ipsum dolo sit ameti'
//     }
// ]

// let div = document.createElement('div');
// document.body.append(div);

// for(let el of objComments){
//   let title = document.createElement('h3');
//   title.innerText = `title comment: ${el.title}`;
//   div.append(title);

//   let body = document.createElement('p');
//   body.innerText = `body comment: ${el.body}`;
//   div.append(body);

//   let delet = document.createElement('button');
//   delet.innerText = `delete`;
//   div.append(delet);

//   delet.addEventListener('click', function(){
//     body.style.display = 'none'
//   })
// }

// TASK(126)
// -Створити 2 форми по 2 інпути в кожній.створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2 х форм.
// Кнопка повинна лежати за межами форм(Щоб уникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути.

// let formOne = document.forms.form1;
// let inputOne = formOne.input1

// let formTwo = document.forms.form2;
// let inputTwo = formOne.input2

// let btnForm = document.querySelector('.form-button')

// btnForm.addEventListener('click', function(){
//   console.log(inputOne.value);
//     // console.log(inputTwo.value);
// })

// TASK(127)
// -Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кількість ячейок в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let elem = document.querySelector('.elem')

// function createTable(rows, cols, pasteEl) {
//   let table = document.createElement("table");
//   for (let i = 0; i < rows; i++) {
//     let tr = document.createElement('tr')
//     for (let j = 0; j < cols; j++) {
//       let td = document.createElement('td')
//       td.innerText = 'клітинка'
//       td.style.border = '1px solid black'
//       tr.appendChild(td)
//     }
//     table.appendChild(tr)
//   }
//   table.style.border = '1px solid black'
//   table.style.margin = '30px'
//   pasteEl.appendChild(table);
// }

// createTable(4, 3, elem)

// TASK(128)
// -Напишіть« Карусель»– стрічку зображень, яку можна гортати вліво - вправо нажаттям на стрілочки.

// let buttonBack = document.querySelector('.button-back');
// let buttonNext = document.querySelector('.button-next');
// let slider = document.querySelectorAll('img');

// let index = 0;

// buttonNext.addEventListener('click', function () {
//   ++index
//   if (index >= slider.length) {
//     slider[index - 1].classList.remove('block');
//     index = 0;
//     slider[index].classList.add('block');
//   } else {
//     slider[index - 1].classList.remove('block');
//     slider[index].classList.add('block');
//   }
// })

// // index = slider.length

// // buttonBack.addEventListener('click', function(){
// // --index
// // if(index >= 0){
// //   slider[index + 1].classList.remove('block');
// //   index = slider.length
// //   slider[index].classList.add('block');
// // }else{
// //   slider[index + 1].classList.remove('block');
// //   slider[index].classList.add('block');
// // }
// // })

// TASK(129)
// -Сворити масив нецензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// const arrWords = ['xxx', 'fuck'];
// const buttonWords = document.querySelector('.button__words');
// const inputWords = document.querySelector('.input__words');

// buttonWords.addEventListener('click', function(){
//   for(const el of arrWords){
//     if ((inputWords.value).toLowerCase() === el) {
//       alert('Увага нецензурне слово')
//     }
//   }
// })

// TASK(130)
// -Сворити масив нецензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// const arrWords = ['xxx', 'fuck'];
// const buttonWords = document.querySelector('.button__words');
// const inputWords = document.querySelector('.input__words');

// buttonWords.addEventListener('click', function () {
//   for (const el of arrWords) {
//     if ((inputWords.value).toLowerCase().includes(el)) {
//       alert('Увага нецензурне слово')
//     }
//   }
// })

// TASK(131)
// 3. Імітуємо наповнення інтернет магазину товарами:
//   Створити форму з наступними полями:
//   -назва товару -
//   кількість товару -
//   ціна товару -
//   картинка товару(посилання з інтернету)
// Зберігати товари в масив в локалсорадж.При збережені товару з форми, action не повинно відбуватись.
// створити елемент < a href = 'list.html' > На сторінку товарів < /a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар

const {
  name,
  price,
  img
} = document.forms.form;
const btn = document.getElementById('btn');
const key = 'store'


const save = (name, price, img) => {
  const store = JSON.parse(localStorage.getItem(key)) || [];
  store.push({
    id: Math.random(),
    name,
    price,
    img
  })
  localStorage.setItem(key, JSON.stringify(store))
}

btn.onclick = () => {
  save(name.value, price.value, img.value)
}

// TASK(132)
// Від Віктора про Проміси. Зробити розпорядок дня з різними інтервалами

// let daytime = 12;

// function toWakeUp(getUp) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (getUp) {
//         daytime -= 1
//         resolve('Доброго ранку')
//       } else {
//         reject('Ти сплюх')
//       }

//     }, 5000);
//   })
// }

// function breakfast(timeForBreakfast) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (timeForBreakfast > 1) {
//         console.log('не проспав нормально поїв');
//         timeForBreakfast = timeForBreakfast - 1;
//         resolve(timeForBreakfast);
//       } else {
//         reject('Хто довго спить той не їсть')
//       }
//     }, 2500);
//   })
// }

// function goToWork(timeForGo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (goToWork) {
//         timeForGo -= 1
//         resolve('Швидко заїхав не получив штрафу');
//       } else {
//         reject('Довго їхав, запізнився - штраф')
//       }
//     }, 1000);
//   })
// }

// function goWork(timeForWork) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (timeForWork) {
//         timeForWork -= 8
//         resolve('Відпахав молодець')
//       } else {
//         reject('Не працюєш? ..ля ти криса')
//       }
//     }, 1000);
//   })
// }

// async function allDay() {
//   try {
//     let resultGetUp = await toWakeUp(true)
//     console.log(resultGetUp, ' resultGetUp');

//     let breackfastTime = await breakfast(daytime)
//     console.log(breackfastTime, ' breackfastTime');

//     let work = await goToWork(breackfastTime);
//     console.log(work, ' work');

//     let workDay = await goWork(work)
//     console.log(workDay, ' workDay');
//   }catch(event){
//     console.log(event);
//   }
// }

// allDay()


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr— массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.Если такого элемента нет в массиве, выведите - 1.

// function findIndex(arr = [], element = '') {
//   let minIndx = 0;
//   let maxIndx = 0;
//   let noFound = 0;
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//       newArr.push(i);
//     }
//   }

//   if(newArr.length > 0){
//   console.log(`MinIndex: ${newArr[0]}`);
//   console.log(`MaxIndex: ${newArr[newArr.length - 1]}`);
//   }else{
//     console.log(-1);
//   }
// }


// let numArr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// findIndex(numArr, 4);

// --Взяти масив юзерів
const usersWithAddress = [{
    id: 9,
    name: 'vasya',
    age: 31,
    isMarried: false,
    address: {
      city: 'Kyiv',
      street: 'Gongadze',
      number: 16
    }
  },
  {
    id: 2,
    name: 'petya',
    age: 30,
    isMarried: true,
    address: {
      city: 'Rivne',
      street: 'Zelena',
      number: 1
    }
  },
  {
    id: 4,
    name: 'kolya',
    age: 29,
    isMarried: true,
    address: {
      city: 'Lviv',
      street: 'Pasichna',
      number: 121
    }
  },
  {
    id: 3,
    name: 'olya',
    age: 28,
    isMarried: false,
    address: {
      city: 'Rivne',
      street: 'Shevchenko',
      number: 90
    }
  },
  {
    id: 8,
    name: 'max',
    age: 30,
    isMarried: true,
    address: {
      city: 'Lviv',
      street: 'Kriva Lipa',
      number: 115
    }
  },
  {
    id: 6,
    name: 'anya',
    age: 31,
    isMarried: false,
    address: {
      city: 'Lviv',
      street: 'Shevchenko',
      number: 2
    }
  },
  {
    id: 10,
    name: 'oleg',
    age: 28,
    isMarried: false,
    address: {
      city: 'Kyiv',
      street: 'Centralna',
      number: 22
    }
  },
  {
    id: 5,
    name: 'andrey',
    age: 29,
    isMarried: true,
    address: {
      city: 'Lviv',
      street: 'Gorodotska',
      number: 43
    }
  },
  {
    id: 1,
    name: 'masha',
    age: 30,
    isMarried: true,
    address: {
      city: 'Kyiv',
      street: 'Peremogi',
      number: 12
    }
  },
  {
    id: 7,
    name: 'olya',
    age: 31,
    isMarried: false,
    address: {
      city: 'Lviv',
      street: 'Naukova',
      number: 16
    }
  },
  {
    id: 11,
    name: 'max',
    age: 31,
    isMarried: true,
    address: {
      city: 'Rivne',
      street: 'Ivana Franka',
      number: 121
    }
  }
];
// Створити три чекбокси.Кожний з них активує фільтр для вищевказаного масиву.Фільтри можуть працювати як разом так і окремо.
// 1 й - відфільтровує юзерів зі статусом false(залишає зі статусом false)
// 2 й - залишає старших 29 років включно
// 3 й - залишає тих в кого місто Київ
// Дані виводить в документ

let formcheck = document.forms.formCheck;


let check1 = document.createElement('input');
check1.setAttribute('type', 'checkbox');
document.body.append(check1);

let check2 = document.createElement('input');
check2.setAttribute('type', 'checkbox');
document.body.append(check2);

let check3 = document.createElement('input');
check3.setAttribute('type', 'checkbox');
document.body.append(check3);

let usersIsMaried = []
let usersIsAge = []


check1.addEventListener('focus', function () {
  for (const el of usersWithAddress) {
    if (el.isMarried === false) {
      usersIsMaried.push(el);
      console.log(el);
    }
  }
  console.log('___________________________________________________________________');
})

check2.addEventListener('focus', function () {
  for (const el of usersIsMaried) {
    if (el.age > 29) {
      usersIsAge.push(el);
      console.log(el);

    }
  }
  console.log('___________________________________________________________________');
})


check3.addEventListener('focus', function () {
  for (const el of usersIsAge) {
    if (el.address.city === 'Kyiv') {
      console.log(el);
    }
  }
})