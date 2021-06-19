  // -створити функцію яка обчислює та повертає площу прямокутника висотою

  // -створити функцію яка обчислює та повертає площу кола

  // function squireCircle(radius) {
  //   const sCircle = Math.PI * Math.pow(radius, 2);
  //   return sCircle
  // }

  // console.log(squireCircle(2))

  // -створити функцію яка обчислює та повертає площу циліндру

  // function squireCylinder(radius, heigth) {
  //   const sCylinder = 2 * squireCircle(radius) + 2 * Math.PI * radius * heigth;
  //   return sCylinder
  // }

  // console.log(squireCylinder(2, 4))

  // -створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше(Math використовувати заборонено);

  // function retBig() {
  //   let numSmall = arguments[0];
  //   let numBig = arguments[0]
  //   for (let i = 0; i < arguments.length; i++) {
  //     if (numSmall > arguments[i]) {
  //       numSmall = arguments[i]
  //     } else if (numBig < arguments[i]) {
  //       numBig = arguments[i]
  //     }
  //   }
  //   console.log(numBig);
  //   return numSmall
  // }

  // console.log(retBig(10,2,45,25,3))



  // -Приймає масив та число "i", та міняє місцями об `єкт який знаходиться в індексі "i" на "i+1"
  // EXAMPLE:
  //   foo([9, 8, 0, 4], 0) // ==> [ 8, 9, 0, 4 ]
  // foo([9, 8, 0, 4], 1) // ==> [ 9 ,0, 8, 4 ]
  // foo([9, 8, 0, 4], 2) // ==> [ 9, 8, 4, 0 ]

  // function indexChange(arr, index) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i == index) {
  //       // console.log(i, arr[i])
  //       arr.splice(i + 1, 0, arr.splice(i, 1)[0])

  //     }
  //   }
  //   return arr
  // }

  // console.log(indexChange([9, 8, 0, 4], 2))


  
  // -Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.Зберігаючи при цьому порядок не нульових значень.
  // Двожина масиву від 2 до 100
  // EXAMPLE: [1, 0, 6, 0, 3] => [1, 6, 3, 0, 0]
  //   [0, 1, 2, 3, 4] => [1, 2, 3, 4, 0]
  //   [0, 0, 1, 0] => [1, 0, 0, 0]

  // function changeZero(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 0 ) {
  //       arr.splice(i, 1)
  //       arr.push(0)
  //     }
  //   }
  //   return arr
  // }

  // console.log(changeZero([0, 0, 1, 0]))



  // -Дано список імен.
  // let n1 = '    Harry       Potter      '
  // let n2 = '    Ron       Whisley      '
  // let n3 = '    Hermione       Granger      '
  // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
  // let n1 = 'Harry Potter'
  // let n2 = 'Ron Whisley'
  // let n3 = 'Hermione Granger'

  // function Normalize(str) {
  //   str = str.trim();
  //   while (str.includes('  ')) {
  //     str = str.replace('  ', ' ');
  //   }
  //   return str;
  // }
  // let n1 = '    Harry       Potter      '
  // let n2 = '    Ron       Whisley      '
  // let n3 = '    Hermione       Granger      '

  // console.log(Normalize(n))