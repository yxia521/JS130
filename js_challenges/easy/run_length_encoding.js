function encode(string) {
  if (string.length < 2) return string;
  let encodedeString = "";
  let arr = [];

  for (let index = 0; index < string.length; index += 1) {
    arr.push(string[index]);
    if (string[index] !== string[index + 1]) {
      if (arr.length > 1) {
        encodedeString += `${arr.length}${arr[0]}`;
      } else {
        encodedeString += `${arr[0]}`;
      }
      arr = []; // has to be reset to [] after each chunk
    }
  }

  return encodedeString;
}

function decode(compressedData) {
  if (compressedData === "" || !compressedData.match(/\d/g)) return compressedData;
  let decodedString = "";

  let pairs = compressedData.match(/\d*\D/g); // split data by pattern: "0 or more digits - non-digits"
  pairs.forEach(pair => {
    if (pair.match(/\d/)) {    // pair contains digits
      decodedString += pair.slice(-1).repeat(Number(pair.slice(0, -1)));
    } else {                   // pair doesn't contain digits at all
      decodedString += pair;
    }
  });

  return decodedString;
}


module.exports = {
  encode,
  decode,
};


// Or using regex

let encode = function(string) {
  return string.replace(/(.)\1+/g, (match, p1) => `${match.length}${p1}`); // any char appearing 1 or more times
};

let decode = function(string) {
  return string.replace(/(\d+)(\D{1})/g, (_, p1, p2) => p2.repeat(p1)); // pattern: (1 or more digits)(only 1 non-digits)
};

