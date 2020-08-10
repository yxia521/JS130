// In what sequence does the JavaScript runtime run the functions q(), d(), n(), z(), s(), f(), and g() in the following code?

setTimeout(function() {  
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();

// g, f, d, z, n, s, q
// Notice that g() still comes before f() even though the timeout duration defaults to 0
