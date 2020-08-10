// How can we refactor the invocation of the function formatName (without changing the function definition) 
// so that we don't need to grab each element of the array fullName by index?

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(fullName[0], fullName[1], fullName[2]));
// logs: Kirk, James T.

// console.log(formatName(...fullName));
