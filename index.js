'use strict';

// const urlify = (url) => {
//   let result = '';
//   for (let i=0; i < url.length; i++) {
//     if (url[i] === ' ') {
//       result += '%20';
//     } else {
//       result += url[i];
//     }
//   }
//   return result;
// };

// console.log(urlify('www.thinkful.com /tauh ida parv een'));

// O(n)


// const array = [4,7,8,3,10,5];

// const filter = (arr) => {
//   const result = [];
//   let count = 0;
//   for (let i=0; i < arr.length; i++) {
//     if (arr[i] >= 5) {
//       result[count] = arr[i];
//       count++;
//     }
//   }
//   return result;
// };

// console.log(filter(array));

// O(n)

// const array = [4,100,-104,110,2,1];

// const maxSum = (arr) => {
//   const sumArr = [];
//   for (let i=0; i < arr.length; i++) {
//     if (i === 0) {
//       sumArr.push(arr[i]);
//     } else {
//       sumArr.push(arr[i] + sumArr[i-1]);
//     }
//   }
//   let result = sumArr[0];
//   for (let i=0; i < sumArr.length; i++) {
//     if (sumArr[i] > result) {
//       result = sumArr[i];
//     }
//   }
//   return result;
// };

// console.log(maxSum(array));

//  O(2n) => O(n)

// const array1 = [1, 3, 6, 8, 11];
// const array2 = [2, 3, 5, 8, 9];
// const mergeArr = (arr1, arr2) => {
//   const result = [];
//   for (let i=0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//     for (let j=0; j < arr2.length; j++) {
//       if (arr2[j] === arr1[i]) {
//         result.push(arr2[j]);
//       }
//     }
//   }
// };

// const mergeArr = (arr1, arr2) => {
//   const result = [];
//   const largerArr = arr1.length >= arr2.length ? arr1.length : arr2.length;
//   for (let i=0; i < largerArr.length; i++) {
//     if (arr1[i] > arr2[i]) {
//       result.push(arr2[i]);
//     } 
//     else if (arr1[i] === arr2[i]) {
//       result.push(arr1[i]);
//       result.push(arr2[i]);
//     }
//     else if (arr1[i] < arr2[i]) {
//       result.push(arr1[i]);
//       result.push(arr2[i]);
//     }
//   }
// };

// const mergeArr = (arr1, arr2, res=[], count=0) => {
//   let min = 0;
//   if (arr1.length + arr2.length === 0) {
//     return console.log(res);
//   }
//   if (arr1.length === 0) {
//     min = arr2[0];
//     arr2.shift();
//   }
//   if (arr2.length === 0) {
//     min = arr1[0];
//     arr1.shift();
//   }
//   if (arr1[0] <= arr2[0]) {
//     min = arr1[0];
//     arr1.shift();
//   }
//   else if (arr1[0] > arr2[0]) {
//     min = arr2[0];
//     arr2.shift();
//   }
//   res[count] = min;
//   count++;
//   mergeArr(arr1, arr2, res, count);
// };

// console.log(mergeArr(array1,array2));

// O(n)



const removeChars = (str, remove) => {
  let result = '';
  for (let i=0; i < str.length; i++) {
    let add = true;
    for (let j=0; j < remove.length; j++) {
      if (str[i] === remove[j]) {
        add = false;
        break;
      }
    }
    if (add) {
      result += str[i];
    }
  }
  return result;
};

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// O(n^2)

