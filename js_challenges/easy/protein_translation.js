// protein translation main function

const CODON_TO_POLYPEPTIDE = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

function translate(rna) {
  let proteins = [];
  if (!rna) return proteins; // no arguments passed in

  let codons = rna.match(/.{3}/g);   // split strings into 3-character groups
  codons.forEach(codon => {          // put every match to proteins array
    Object.keys(CODON_TO_POLYPEPTIDE).forEach(key => {
      if (codon === key) {
        proteins.push(CODON_TO_POLYPEPTIDE[key]);
      }
    });
  });

  if (proteins.length === 0) throw new Error("Invalid codon"); // still empty proteins means that no any match, invalid arguments
  if (proteins.includes("STOP")) {                             // only get codons before STOP appearing
    let stopIndex = proteins.indexOf("STOP");
    proteins = proteins.slice(0, stopIndex);
  }

  return proteins;
}

module.exports = translate;
