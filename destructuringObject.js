// Some destructuring examples
// Available since ES6

// Original Object
const myObj = {
  level11: {
    'level2-1': 'value11',
    'level2-2': 'value12',
  },
  level12: {
    'level2-1': 'value21',
  }
};

/* Use destructuring to get level1 properties */
const { level11, level12 } = myObj;

console.log(level11);
//~$ { 'level2-1': 'value11', 'level2-2': 'value12' }
console.log(level12);
//~$ { 'level2-1': 'value21' }

/* Use destructuring storing the data on "aux" */

const { level11: aux } = myObj;

console.log(aux);
//~$ { 'level2-1': 'value11', 'level2-2': 'value12' }

/* Set Default Values */
const { level11111: aux1 = 'default value :D' } = myObj;

console.log(aux1);
//~$ default value :D
