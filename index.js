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

const array = [4,100,-104,110,2,1];

const maxSum = (arr) => {
  const sumArr = [];
  for (let i=0; i < arr.length; i++) {
    if (i === 0) {
      sumArr.push(arr[i]);
    } else {
      sumArr.push(arr[i] + sumArr[i-1]);
    }
  }
  let result = sumArr[0];
  for (let i=0; i < sumArr.length; i++) {
    if (sumArr[i] > result) {
      result = sumArr[i];
    }
  }
  return result;
};

console.log(maxSum(array));

//  O(2n) => O(n)
