// 1 За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Вставити цей блок на сторінку
// 2 За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: {
//     city: 'Lviv',
//     country: 'Ukraine',
//     street: 'Shevchenko',
//     houseNumber: 1
//   }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: {
//     city: 'New York',
//     country: 'USA',
//     street: 'East str',
//     houseNumber: 21
//   }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: {
//     city: 'Budapest',
//     country: 'Hungary',
//     street: 'Kuraku',
//     houseNumber: 78
//   }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: {
//     city: 'Prague',
//     country: 'Czech',
//     street: 'Paster',
//     houseNumber: 56
//   }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: {
//     city: 'Istanbul',
//     country: 'Turkey',
//     street: 'Mikar',
//     houseNumber: 39
//   }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: {
//     city: 'Rio',
//     country: 'Brasil',
//     street: 'Ronaldi',
//     houseNumber: 5
//   }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: {
//     city: 'Montreal',
//     country: 'Canada',
//     street: 'Acusto',
//     houseNumber: 90
//   }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: {
//     city: 'Quebeck',
//     country: 'Canada',
//     street: 'Binaro',
//     houseNumber: 33
//   }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: {
//     city: 'Moscow',
//     country: 'Russia',
//     street: 'Gogolia',
//     houseNumber: 1
//   }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: {
//     city: 'Portland',
//     country: 'USA',
//     street: 'Forest str',
//     houseNumber: 4
//   }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: {
//     city: 'Cairo',
//     country: 'Egypt',
//     street: 'Seashore',
//     houseNumber: 45
//   }
// }];

// let div = document.createElement('div');
// document.body.append(div);

// for (const user of users) {
//   let userDiv = document.createElement('div');
//   div.append(userDiv);
//   userDiv.style.margin = '20px';

//   let title = document.createElement('h3');
//   title.innerText = `Name user: ${user.name}`;
//   userDiv.append(title);

//   let age = document.createElement('p');
//   age.innerText = `Age user: ${user.age}`;
//   userDiv.append(age);

//   let status = document.createElement('p');
//   status.innerText = `Status user: ${user.status}`;
//   userDiv.append(status);

//   let address = document.createElement('div');
//   userDiv.append(address);

//   let city = document.createElement('p');
//   city.innerText = `City address: ${user.address.city}`;
//   address.append(city);

//   let country = document.createElement('p');
//   country.innerText = `Country address: ${user.address.country}`;
//   address.append(country);

//   let street = document.createElement('p');
//   street.innerText = `Street address: ${user.address.street}`;
//   address.append(street);

//   let houseNumber = document.createElement('p');
//   houseNumber.innerText = `House number address: ${user.address.houseNumber}`;
//   address.append(houseNumber);
// }

// 3 Є масив котрий характеризує правила.
// Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html


let rules = [{
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.'
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.'
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.'
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.'
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.'
  }
];


let btn = document.createElement('button')
btn.innerText = `Open page`
document.body.append(btn)


btn.addEventListener('click', function () {
btn.style.display = `none`

  let contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'content')
  document.body.append(contentDiv);

  let mainTitle = document.createElement('h1');
  mainTitle.innerText = 'Правила бойцовского клуба';
  contentDiv.append(mainTitle);

  let wrapDiv = document.createElement('div');
  wrapDiv.setAttribute('id', 'wrap')
  contentDiv.append(wrapDiv);

  for (let i = 0; i < rules.length; i++) {
    let rulesDiv = document.createElement('div');
    rulesDiv.setAttribute('class', `rules rule${i + 1}`);
    rulesDiv.style.margin = '20px';
    wrapDiv.append(rulesDiv);

    let ruleTitle = document.createElement('h2');
    ruleTitle.innerText = rules[i].title;
    rulesDiv.append(ruleTitle);

    let ruleBody = document.createElement('p');
    ruleBody.innerText = rules[i].body;
    rulesDiv.append(ruleBody);
  }
})


