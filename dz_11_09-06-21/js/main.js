// 1) Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName:
//   a) отримує текст з параграфа з id "content"

// let content = document.getElementById('content');
// console.log(content.innerText);


// b) отримує текст з блоку з id "rules"

// let rules = document.getElementsByClassName('fc');
// console.log(rules[0].innerText);


// c) замініть текст параграфа з id 'content'
// на будь - який інший

// let content = document.getElementsByTagName('p');
// content[0].innerText = `Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.`;
// console.log(content[0].innerText);


// d) замініть текст параграфа з id 'rules'
// на будь - який інший

// let rule = document.getElementById('rules');

// rule.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti';

// console.log(rule.innerText);


// e) змініть кожному елементу колір фону на червоний

// let bg = document.body.children;
// console.log(bg);
// for(let el of bg){
//   el.style.backgroundColor = 'red';
// }

// f) змініть кожному елементу колір тексту на синій

// let bg = document.body.children;
// for(let el of bg){
//   el.style.color = 'blue';
// }

// g) отримати весь список класів елемента з id = rules і вивести їх в console.log

// let rule = document.getElementById('rules');

// console.log(rule.classList);

// h) отримати всі елементи з класом fc_rules

// let rules = document.getElementsByClassName('fc_rules');

// console.log(rules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// let rules = document.getElementsByClassName('fc_rules');

// for(let el of rules){
//   el.style.color = 'red'
// }
// 
// __________________________________________________________________________
// -Створити довільний елемент с id = text.використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id = "text".

// let btn = document.querySelector('.button');

// let idText = document.getElementById('text');

// btn.addEventListener('click', function(){
//    idText.style.display = 'none';
// });

// -Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// let btn = document.querySelector('.button');

// btn.addEventListener('click', function(){
//   btn.style.display = 'none';
// });

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

// -Створіть меню, яке розгортається / згортається при клику

// let menuBtn = document.getElementById('menu__btn');
// let menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function () {
//   menu.classList.toggle('active')
//   console.log(999)
// })

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

// for(let el of objComments){

// }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// -Створити 2 форми по 2 інпути в кожній.створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2 х форм.
// Кнопка повинна лежати за межами форм(Щоб уникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути.

// let formAPI = document.forms[1]
// let child = formAPI.children

// let formAPITwo = document.forms[2]
// let childTwo = formAPI.children

// let formButton = document.querySelector('.form-button')

// formButton.addEventListener('click', function () {
//   for (let el of child) {
//     for (let elem of childTwo) {
//       console.log(el.value, elem.value)
//     }
//   }
// })

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

// -Напишіть« Карусель»– стрічку зображень, яку можна гортати вліво - вправо нажаттям на стрілочки.

let buttonBack = document.querySelector('.button-back');
let buttonNext = document.querySelector('.button-next');
let slider = document.querySelectorAll('img');

let index = 0;

buttonNext.addEventListener('click', function () {
  ++index
  if (index >= slider.length) {
    slider[index - 1].classList.remove('block');
    index = 0;
    slider[index].classList.add('block');
  } else {
    slider[index - 1].classList.remove('block');
    slider[index].classList.add('block');
  }
})

buttonBack.addEventListener('click', function () {
  ++index
  if (index >= slider.length) {
    slider[index + 1].classList.remove('block');
        index = 0;
    slider[index].classList.add('block');    
  } else {
    slider[index + 1].classList.remove('block');

    slider[index].classList.add('block');
  }
})