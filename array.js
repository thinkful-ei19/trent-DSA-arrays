'use strict';
const Memory = require('./memory');
const memory = new Memory();


class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  retrieve(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
    
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}

// function main(){

//   Array.SIZE_RATIO = 3;

//   //create an instance of the array class
//   let arr = new Array();

//   //add an item to the array
//   arr.push(3);

//   console.log(arr);
// }

// What is the length, capacity and memory address of your array?
// Array { length: 1, _capacity: 3, ptr: 0 }

// function main(){

//     Array.SIZE_RATIO = 3;

//     //create an instance of the array class
//     let arr = new Array();

//     //add an item to the array
//     arr.push(3);
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);

//     console.log(arr);
// }
// main();

// What is the length, capacity and memory address of your array? 
// Explain the result of your program after adding the new lines of code

// Array { length: 6, _capacity: 12, ptr: 3 }
// the length is now 6 and since it exceeded the original capacity,
// the size was increased to 12 due to the size of the array and the 
// size ratio. The ptr is shifted over to where the previous arrays 
// capacity ended.


// function main(){

//     Array.SIZE_RATIO = 3;

//     //create an instance of the array class
//     let arr = new Array();

//     //add an item to the array
//     arr.push(3);
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);
//     arr.pop();
//     arr.pop();
//     arr.pop();

//     console.log(arr);
// }
// main();

// What is the length, capacity and address of your array? 
// Explain the result of your program after adding the new 
// lines of code
// Array { length: 3, _capacity: 12, ptr: 3 }
// the array length is reduced by 3 but the ptr and capacity stay the same.


// function main(){

//     Array.SIZE_RATIO = 3;

//     //create an instance of the array class
//     let arr = new Array();

//     //add an item to the array
//     arr.push(3);

//     console.log(arr.retrieve(0));
// }
// main();


// Print the first item in the array arr.
// 3


function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push('trent');

  console.log(arr.retrieve(0));
}
main();





