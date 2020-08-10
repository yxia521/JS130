// Consider the following code: Without running this code, what does it print?

for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

// undefined  from line 4
// Hello      from line 4
// Bye        from line 12
// 2          from line 13


// rewrite:
var index;
var foo;

for (index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    foo = "Hello";
  } else {
    foo = "Bye";
  }
}
