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


  // -Створити функцію конструктор для об 'єкту який описує теги
  // Властивості
  //    назва тегу -
  //   опис його дій -
  //   масив з атрибутами(2 - 3 атрибути максимум)
  // Кожен атрибут описати як окремий який буде містити
  //   -назву атрибуту -
  //   опис дії атрибуту
  // інформацію брати з htmlbook.ru
  // Таким чином описати теги
  //   -
  //   a -
  //   div -
  //   h1 -
  //   span -
  //   input -
  //   form -
  //   option -
  //   select
  // Приклад результуючого об 'єкту {
  //   titleOfTag: 'area',
  //   action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
  //   attrs: [{
  //       titleOfAttr: 'accesskey',
  //       actionOfAttr: 'Переход к области с помощью комбинации клавиш'
  //     },
  //     {
  //       /*some props and values*/ },
  //     {
  //       /*...*/ },
  //     {
  //       /*...*/ },
  //   ]

  // }

//   function Tags(tagsTitle, descriptTags, arrAtributs) {
//    this.tagsTitle = tagsTitle;
//    this.descriptTags = descriptTags;
//    this.arrAtributs = arrAtributs
//   } 

// // let a = new Tags('<a>', 'Элемент <a> (от англ. anchor — якорь) является одним из важных в HTML и предназначен для создания ссылок.', [{
// //   href: 'Задаёт адрес документа, на который следует перейти.',
// //   target: 'Имя окна или фрейма, куда браузер будет загружать документ.'
// // }])

// let title = '<a>';
// let descript = 'Элемент <a> (от англ. anchor — якорь) является одним из важных в HTML и предназначен для создания ссылок.';
// let arrAtr = [{
//     href: 'Задаёт адрес документа, на который следует перейти.',
//     target: 'Имя окна или фрейма, куда браузер будет загружать документ.'
//   }]
 
// // console.log()  
// let a = new Tags(title, descript, arrAtr)

// console.log(a.tagsTitle)
// console.log(a.descriptTags)
// console.log(...a.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let div = new Tags('div', 'Элемент <div> (от англ. division — раздел, секция) является универсальным блочным элементом', [{
//   class: 'Определяет имя класса, которое позволяет связать элемент со стилевым оформлением.',
//   style: 'Применяется для определения стиля элемента с помощью правил CSS.'
// }])

// // console.log(div)

// console.log(div.tagsTitle)
// console.log(div.descriptTags)
// console.log(...div.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let h1 = new Tags('h1', '<h1>Заголовок первого уровня', [{
//   class: 'Определяет имя класса, которое позволяет связать элемент со стилевым оформлением.',
//   style: 'Применяется для определения стиля элемента с помощью правил CSS.'
// }])

// // console.log(h1)

// console.log(h1.tagsTitle)
// console.log(h1.descriptTags)
// console.log(...h1.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let span = new Tags('span', 'Универсальный строчный элемент <span> (от англ. span — охватывать) предназначен для выделения отдельных строк', [{
//   class: 'Определяет имя класса, которое позволяет связать элемент со стилевым оформлением.',
//   style: 'Применяется для определения стиля элемента с помощью правил CSS.'
// }])

// // console.log(span)

// console.log(span.tagsTitle)
// console.log(span.descriptTags)
// console.log(...span.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let input = new Tags('input', '<input> (от англ. input — ввод) является одним из разносторонних элементов формы и позволяет создавать разные части интерфейса и обеспечивать взаимодействие с пользователем', [{
//   placeholder: 'Выводит подсказывающий текст.',
//   type: 'Сообщает браузеру, к какому типу относится элемент формы'
// }])

// // console.log(input)

// console.log(input.tagsTitle)
// console.log(input.descriptTags)
// console.log(...input.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let form = new Tags('form', 'Элемент <form> (от англ. form — форма) устанавливает форму на веб-странице.', [{
//   target: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.',
//   autocomplete: 'Включает автозаполнение полей формы. '
// }])

// // console.log(form)

// console.log(form.tagsTitle)
// console.log(form.descriptTags)
// console.log(...form.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let option = new Tags('option', 'Элемент <option> (от англ. option — вариант, выбор) определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//   label: 'Указание метки пункта списка.',
//   selected: 'Заранее устанавливает определённый пункт списка выделенным.'
// }])

// // console.log(option)

// console.log(option.tagsTitle)
// console.log(option.descriptTags)
// console.log(...option.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// let select = new Tags('select', '<select> (от англ. selection — выбор) позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', [{
//   form: 'Связывает список с формой.',
//   name: 'Имя элемента для отправки на сервер или обращения через скрипты.'
// }])

// // console.log(select)

// console.log(select.tagsTitle)
// console.log(select.descriptTags)
// console.log(...select.arrAtributs)

// console.log('_____________________________________________________________________________________________________________________')

// class User {
//   constructor(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//   }

//   greeting() {
//     console.log(this.name + ' hello!');
//   }
// }

// 	let users = [
// 	  new User('vasya', 31, true),
// 	  new User('max', 32, false),
// 	  new User('stefan', 38, false),
// 	  new User('petrovich', 40, true),
// 	  new User('olko', 52, false),
// 	  new User('andre', 60, true),
// 	  new User('den', 38, false)
// 	];

// 	console.log(users);

//    let map = users.map(function (value, index) {
//   	// console.log(value, index);
//   	value.id = index + 1;
//   	return value;
//   });
  
//   console.log(map);


// class Computer{
//   constructor(memory, processor, name, switc){
//     this.memory = memory;
//     this.processor = processor;
//     this.name = name;
//     this.switc = switc;
//   }
// }

// class Laptop extends Computer{
//   constructor(memory, processor, name, switc, diagonal){
//     super(memory, processor, name, switc)
//     this.diagonal = diagonal;
//     acum(){
//     return  this.memory * this.diagonal
//     }
//   }
// }

// let pk = new Laptop(2, 1000, 'pentium', 'on', 17);

// console.log(pk.acum())