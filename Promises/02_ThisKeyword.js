// console.log(this);

// const obj = {
//   name: 'Alice',
//   greet() {
//     console.log(this.name); // 'Alice' - this refers to obj
//   }
// };
// obj.greet();

const obj = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // undefined - arrow function uses global this
  },
  regularGreet() {
    const arrowFunc = () => {
      console.log(this.name); // 'Bob' - inherits from regularGreet's this
    };
    arrowFunc();
  }
};

obj.greet(); // undefined
obj.regularGreet(); // 'Bob'


// Scenario 1: Arrow function as object method

// javascriptgreet: () => {
//   console.log(this.name); // undefined
// }


// What happens:

// 1] The arrow function is defined at the object literal level.
// 2] At this level, this refers to the global scope (window in browser, global in Node.js)
// 3] Arrow functions capture the this from where they're defined, not where they're called
// 4] Since the global scope doesn't have a name property, this.name is undefined


// Scenario 2: Arrow function inside regular method

// javascriptregularGreet() {
//   const arrowFunc = () => {
//     console.log(this.name); // 'Bob'
//   };
//   arrowFunc();
// }

// What happens:

// 1] regularGreet is a regular method, so when called as obj.regularGreet(), its this refers to obj
// 2] The arrow function is defined inside regularGreet
// 3] The arrow function captures the this from its enclosing scope (which is regularGreet)
// 4] Since regularGreet's this is obj, the arrow function's this is also obj
// 5] Therefore this.name is 'Bob'