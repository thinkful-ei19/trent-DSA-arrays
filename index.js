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

const array1 = [1, 3, 6, 8, 11,12];
const array2 = [2, 3, 5, 8, 9];

const mergeArr = (arr1, arr2) => {
  const result = [];
  let arr1Index = 0;
  let arr2Index = 0;
  for (let i=0; i < arr1.length + arr2.length; i++) {
    if (arr1Index === arr1.length) {
      return [...result, ...arr2.slice(arr2Index)];
    }
    if (arr2Index === arr2.length) {
      return [...result, ...arr1.slice(arr1Index)];
    }
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } 
    else if (arr1[arr1Index] > arr2[arr2Index]) {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
    else if (arr1[arr1Index] === arr2[arr2Index]) {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return result;
};

// O(n^2)

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

console.log(mergeArr(array1,array2));

// O(n)



// const removeChars = (str, remove) => {
//   let result = '';
//   for (let i=0; i < str.length; i++) {
//     let add = true;
//     for (let j=0; j < remove.length; j++) {
//       if (str[i] === remove[j]) {
//         add = false;
//         break;
//       }
//     }
//     if (add) {
//       result += str[i];
//     }
//   }
//   return result;
// };

// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// O(n^2)


// const products = (arr) => {
//   const result = [];
//   let product;
//   for (let i=0; i < arr.length; i++) {
//     product = 1;
//     for (let j=0; j < arr.length; j++) {
//       if (i !== j) {
//         product *= arr[j];
//       }
//     }
//     result[i] = product;
//   }
//   return result;
// };

// console.log(products([1, 3, 9, 4]));

// O(n^2)

// const twoDArr = (arr) => {
//   const result = [];
//   for (let i=0; i < arr.length; i++) {
//     let allOnes = true;
//     let index = [];
//     for (let j=0; j < 5; j++) {
//       if (arr[i][j] === 0) {
//         allOnes = false;
//         result[i] = [0,0,0,0,0];
//         index.push(j);
//       }
//     }
//     if (allOnes) {
//       let newRow = [];
//       for(let k=0; k < 5; k++) {
//         if (index.includes(k)) {
//           newRow.push(0);
//         } else {
//           newRow.push(1);
//         }
//       }
//       result[i] = newRow;
//     }
//   }
//   return result;
// };

// const twoDArr = (arr) => {
//   let newArr = [];
//   let clearedRowHolder = [];
//   let clearedColHolder = [];
//   for (let i = 0; i < arr.length; i++) {
//     let rowCount = clearedRowHolder.length;
//     let colCount = clearedRowHolder.length;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i][j] === 0) {
//         clearedRowHolder[rowCount] = j;
//         rowCount++;
//         clearedColHolder[colCount] = i;
//         colCount++;
//       }
//     }
//   }
//   for (let i = 0; i < clearedRowHolder.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       arr[j][clearedRowHolder[i]] = 0;
//     }
//   }
//   for (let i = 0; i < clearedColHolder.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       arr[clearedColHolder[i]][j] = 0;
//     }
//   }
//   return arr;
// };

// console.log(
//   twoDArr([
//     [1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]]));

// O(n^4)

// const strRotation = (word1, word2) => {
//   let str = word1 + word1;
//   return str.includes(word2); 
// };

// const strRotation = (word1, word2) => {
//   if (str === 0) {

//   }
   
// };

// console.log(strRotation('amazon', 'azonma')); // false
// console.log(strRotation('amazon', 'azonam')); // true