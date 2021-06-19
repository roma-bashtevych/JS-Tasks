  // 1) створити функцію яка приймає масив та виводить його

  // const numbers = [1, 25, 65, 96, 55, 63]

  //   function showArray(arr) {
  //     console.log(arr)
  //   }

  // showArray(numbers);

  // 2) створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попередню функцію.

  // function showArray(arr) {
  //   console.log(arr)
  // }

  // let arrRand = [];

  // function pushArr(arr) {
  //   for (let i = 0; i <= 10; i++) {
  //     arr.push(Math.random(i))
  //   }
  //   showArray(arr)
  // }

  // pushArr(arrRand)


  // 3) створити функцію яка приймає три числа та виводить найменьше.(Без Math.min!)

  // function compareNum(num1, num2, num3) {

  //   if (num1 < num2 && num1 < num3) {
  //     console.log(num1);
  //   } else if (num2 < num1 && num2 < num3) {
  //     console.log(num2);
  //   } else if (num3 < num1 && num3 < num2) {
  //     console.log(num3)

  //   }
  // }

  // compareNum(2, 5, 1);

  // 4) створити функцію яка приймає три числа та виводить найбільше.(Без Math.max!)

  // function compareBigNum(num1, num2, num3) {

  //   if (num1 > num2 && num1 > num3) {
  //     console.log(num1);
  //   } else if (num2 > num1 && num2 > num3) {
  //     console.log(num2);
  //   } else if (num3 > num1 && num3 > num2) {
  //     console.log(num3)

  //   }
  // }

  // compareBigNum(72, 5, 61);

  // 5) створити функцію яка повертає найбільше число з масиву

  //       const numbers = [1, 225, 65, 96, 55, 163]

  //    function bigNumWithArr(arr) {
  //      let max = 0;
  //      for(let i = 0; i < arr.length; i++){
  //        if(arr[i] > max){
  //          max = arr[i]
  //        }
  //      }
  //      return max
  //    }

  // console.log(bigNumWithArr(numbers));

  // 6) створити функцію яка повертає найменьше число з масиву

  //       const numbers = [121, 225, 65, 96, 55, 1]

  //    function smallNumWithArr(arr) {
  //      let min = arr[0];
  //      for(let i = 0; i < arr.length; i++){
  //        if(arr[i] < min){
  //          min = arr[i]
  //        }
  //      }
  //      return min
  //    }

  // console.log(smallNumWithArr(numbers));

  // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

  //  const numbers = [121, 225, 65, 96, 55, 1];

  //   function sumArr(arr) {
  //      let sum = 0;
  //       for(const el of arr){
  // sum += el
  //       }
  //       return sum
  //   }

  //   console.log(sumArr(numbers))

  // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

  // const numbers = [1, 2, 6, 9, 5, 8];

  // function sumMeanArr(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i]
  //   }
  //   return sum / arr.length
  // }

  // console.log(sumMeanArr(numbers))

  // 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

  //   let arrObj = [
  //     {
  //     name: 'Vasya',
  //      age: 26
  //     },
  //   {
  //     name: 'Alfred',
  //     age: 126,
  //     status: true
  //   }
  // ];

  // function retKey(arr) {
  //   let keys = [];
  //   for(const el of arr){
  //      for(let key in el){
  //        keys.push(key)
  //      }

  //   }
  //   return keys
  // }

  // console.log(retKey(arrObj));


  // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

  // let arrObj = [{
  //     name: 'Vasya',
  //     age: 26
  //   },
  //   {
  //     name: 'Alfred',
  //     age: 126,
  //     status: true
  //   }
  // ];

  // function retKey(arr) {
  //   let keys = [];
  //   for (const el of arr) {
  //     for (let key in el) {
  //       keys.push(el[key])
  //     }

  //   }
  //   return keys
  // }

  // console.log(retKey(arrObj));

  // 11) створити функцію яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.

  // let arr1 = [1, 2, 3, 4];
  // let arr2 = [2, 3, 4, 5];

  // function sumArr(arr1, arr2) {
  //   let arr3 = []
  //   for(let i = 0; i < arr1.length; i++){
  //     for(let j = 0; j < arr2.length; j++){
  //       if(i === j){
  //         arr3.push(arr1[i] + arr2[j])
  //       }
  //     }
  //   }
  //   return arr3
  // }

  // console.log(sumArr(arr1, arr2))


  // ____________________________________________________________________________________________________________________________________________________


  // let random = (value, num) => {
  //   let arrs = []
  //   for (let i = 0; i < value; i++) {
  //     arrs.push(Math.floor(Math.random() * num))
  //   }
  //   return arrs
  // }
  // let xxx = random(4, 9);
  // console.log(xxx);