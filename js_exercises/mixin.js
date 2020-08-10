// Classical Object Creation with Mixin

// In this exercise, you'll add a mixin to your solution from this exercise. 
// The mixin adds an invoice and payTax methods.

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  communicate() {
    console.log('Communicating');
  }

  eat() {
    console.log('Eating');
  }

  sleep() {
    console.log('Sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log('Diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log('Teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log('Studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, gradDegree) {
    super(firstName, lastName, age, gender, degree);
    this.gradDegree = gradDegree;
  }

  research() {
    console.log('Researching');
  }
}

// ---------------------------------
let professional = {           // mixin
  invoice: function() {
    console.log(this.fullName() + ' is Billing customer');
  },
  
  payTax: function() {
    console.log(this.fullName() + ' Paying taxes');
  },
};

let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'     Note the before & after change
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'

// ------ solution ---------------------------

function delegate(callingObject, methodOwner, methodName) {
  return function() {
    return methodOwner[methodName].apply(callingObject, arguments);
  };
}

function extend(object, mixin) {
  let methodNames = Object.keys(mixin);

  methodNames.forEach(name => {
    object[name] = delegate(object, mixin, name); // manually add the methods of mixin into object, and modify object
  });

  return object;
}

// methods from the mixin use state from the object they are being called on and call on other methods on the object they are mixed in to.
