/*
1)
The previous makeList function's interface isn't clear. The single call
`list('make breakfast')` performs two entirely different operations - remove and add.
We need to improve the API.
*/

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn

function makeList() {
  return {
    items: [],

    add: function(argument) {
      if (!(this.items.includes(argument))) {
        this.items.push(argument);
        console.log(argument + ' added!');
      }
    },

    remove: function(argument) {
      if (this.items.includes(argument)) {
        this.items.splice(this.items.indexOf(argument), 1);
        console.log(argument + ' removed!');
      }
    },

    list: function() {
      if (this.items.length === 0) {      
        console.log('The list is empty.');
      } else {
        this.items.forEach(todo => console.log(todo));
      }
    },
  };
}

/*
2)
Notice that our solution to the previous problem lets us access the array of items through the items property:

> list.items  // items is accessible from outside the object
['corn']       // since it is an object property

That wasn't the case in the single-function implementation:

> list.items;  // items isn't accessible from outside the function
undefined      // since it is within a closure.

Update the implementation from problem 1 so that it retains the use of an object with methods 
but prevents outside access to the items the object stores internally.
*/

function makeList() {
  let items = [];  // items now is private, can't be accessed thru outside code

  return {
    add: function(argument) {
      if (!(items.includes(argument))) {
        items.push(argument);
        console.log(argument + ' added!');
      }
    },

    remove: function(argument) {
      if (items.includes(argument)) {
        items.splice(items.indexOf(argument), 1);
        console.log(argument + ' removed!');
      }
    },

    list: function() {
      if (items.length === 0) {      
        console.log('The list is empty.');
      } else {
        items.forEach(todo => console.log(todo));
      }
    },
  };
}
