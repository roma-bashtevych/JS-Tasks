// 1) Напишіть код, який:
//   a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь(mon - year)

// let mainHeader = document.getElementById('main_header');

// mainHeader.style.color = 'red';
// mainHeader.innerText = 'apr21';

//  b) робить шириниу елементу ul 400 px

//   let list = document.getElementsByTagName('ul');

// for(let el of list){
//   el.style.width = '400px'
// }

//  c) робить шириниу всіх елементів з класом linkList шириною 50 %

// let item = document.querySelectorAll('.linkList');

// for(let elem of item){
//   elem.style.width = '50%';
// }

//    d) отримує текст який зберігається в елементі з класом listElement2

// let listElement2 = document.querySelector('.listElement2');

// console.log(listElement2.innerText);

//  e) отримує всі елементи li та змінює ім колір фону на сірий

// let itemBg = document.getElementsByTagName('li');

// for(let li of itemBg){
//   li.style.backgroundColor = 'silver';
// }

//  f) отримує всі елементи 'a'
//  та додає їм клас anchor

// let anchors = document.getElementsByTagName('a');

// for(const anchor of anchors){
//   anchor.classList.add('anchor')
// }

//  g) отримує всі елементи 'a'
//  та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let anchors = document.getElementsByTagName('a');
// for(let el of anchors){
//   if (el.innerText === 'link3'){
//     el.style.fontSize = '40px'
//     }
// }
//  h) отримує всі елементи 'a'
//  та додає їм клас element_XXX.Де XXX - текстовий контент елементу a

// let anchors = document.getElementsByTagName('a');
// for(let el of anchors){
//   el.classList.add(`element_${el.innerText}`);
// }

//  i) отримує всі елементи 'sub-header'
//  та змінює колір фону.Фон отримати з prompt()

// let headerBg = document.getElementsByClassName('sub-header');
// let color = prompt('Введіть колір');

// for(let el of headerBg){
//   el.style.backgroundColor = color;
// }

//  j) отримує всі елементи 'sub-header'
//  та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.Колір отримати з prompt()

// let headerColor = document.getElementsByClassName('sub-header');
// let colorText = prompt('Введіть колір');

// for(let el of headerColor){
//   if (el.innerText === 'content 2 segment'){
//    el.style.color = colorText;
//   }
// }

//  k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний.Текст отримати з prompt()

// let divText = document.querySelector('.content_1');
// let text = prompt('Введіть text');

// for (let el of divText.children) {
//   el.innerText = text
// }

//  l) отримати елементи p та змінити їм padding на 20 px

// let parag = document.getElementsByTagName('p');

// for(let el of parag){
//   el.style.padding = '20px'
// }

//  m) отримати елементи з класом text2 та змінити їм текст на назву групи(mon - year)

// let texts = document.querySelectorAll('.text2');
// for(let el of texts){
//   el.innerText = 'apr21'
// }

//  2. Створити форму з інпутом для введення ім 'я, та action="index2.html".
//  При відправці данних з форми, зберігати ім 'я в localstorage, та переходити на index2.html.
//  На index2.html виводити записане в localstorage ім 'я в div

// let f1 = document.forms.f1;
// let nameInput = f1.name;
// let surnameInput = f1.surname;

// f1.addEventListener('submit', (event) => {
//   // event.preventDefault();
//   let name = nameInput.value;
//   let surname = surnameInput.value;
//   let user = {
//     name: name,
//     surname: surname
//   };
//   let jsonUser = JSON.stringify(user);
//   localStorage.setItem('user', jsonUser);
// });



//  3. Імітуємо наповнення інтернет магазину товарами:
//    Створити форму з наступними полями:
//    -назва товару -
//    кількість товару -
//    ціна товару -
//    картинка товару(посилання з інтернету)
//  Зберігати товари в масив в локалсорадж.При збережені товару з форми, action не повинно відбуватись.
//  створити елемент < a href = 'list.html' > На сторінку товарів < /a>, та list.html, при переході на який відобразити на сторінці всі товари.
//  На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

let forms = document.forms.form;
let nameInput = form.name;
let quantityInput = form.quantity;
let priceInput = form.price;
let imgInput = form.img;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = nameInput.value;
  let quantity = quantityInput.value;
  let price = priceInput.value;
  let img = imgInput.value;
  let user = {
    name: name,
    quantity: quantity,
    price: price,
    img: img
  };


  let jsonUser = JSON.stringify(user);
  localStorage.setItem('user', jsonUser);
  
});


//  ДОДАТКОВО
//  До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар