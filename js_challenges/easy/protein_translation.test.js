/*
Protein Translation
Lets write a program that will translate RNA sequences into proteins. 
RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:


RNA: "AUGUUUUCU" => translates to

Codons: "AUG", "UUU", "UCU"
=> which become a polypeptide with the following sequence =>

Protein: "Methionine", "Phenylalanine", "Serine"


There are 64 codons which in turn correspond to 20 amino acids; 
however, all of the codon sequences and resulting amino acids are not important in this exercise.

There are also four terminating codons (also known as 'STOP' codons); 
if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated. 
All subsequent codons after are ignored, like this:


RNA: "AUGUUUUCUUAAAUG" =>

Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>

Protein: "Methionine", "Phenylalanine", "Serine"


Note the stop codon terminates the translation and the final methionine is not translated into the protein sequence.

Below are the codons and resulting Amino Acids needed for the exercise.

Codon               Amino Acids
AUG                 Methionine
UUU, UUC            Phenylalanine
UUA, UUG            Leucine
UCU, UCC, UCA, UCG  Serine
UAU, UAC            Tyrosine
UGU, UGC            Cysteine
UGG                 Tryptophan
UAA, UAG, UGA       STOP

Test suite:
*/

let translate = require('./protein_translation.js');

describe("ProteinTranslation", () => {
  test("Empty RNA has no proteins", () => {
    expect(translate()).toEqual([]);
  });

  test("Methionine codon translates into protein", () => {
    expect(translate("AUG")).toEqual(["Methionine"]);
  });

  test("Phenylalanine codons translate into protein", () => {
    expect(translate("UUCUUU")).toEqual(["Phenylalanine", "Phenylalanine"]);
  });

  test("Leucine codons translate into protein", () => {
    expect(translate("UUAUUG")).toEqual(["Leucine", "Leucine"]);
  });

  test("Serine codons translate into protein", () => {
    expect(translate("UCUUCCUCAUCG")).toEqual([
      "Serine",
      "Serine",
      "Serine",
      "Serine"
    ]);
  });

  test("Tyrosine codons translate into protein", () => {
    expect(translate("UAUUAC")).toEqual(["Tyrosine", "Tyrosine"]);
  });

  test("Cysteine codons translate into protein", () => {
    expect(translate("UGUUGC")).toEqual(["Cysteine", "Cysteine"]);
  });

  test("Tryptophan codon translates into protein", () => {
    expect(translate("UGG")).toEqual(["Tryptophan"]);
  });

  test("Sequence starts with stop codon 1", () => {
    expect(translate("UAAUUUUUA")).toEqual([]);
  });

  test("Sequence starts with stop codon 2", () => {
    expect(translate("UAGAUGUAU")).toEqual([]);
  });

  test("Sequence starts with stop codon 3", () => {
    expect(translate("UGAUGU")).toEqual([]);
  });

  test("Small RNA strand", () => {
    expect(translate("AUGUUUUCU")).toEqual([
      "Methionine",
      "Phenylalanine",
      "Serine"
    ]);
  });

  test("Stop codon ends translation", () => {
    expect(translate("AUGUUUUCUUAAAUG")).toEqual([
      "Methionine",
      "Phenylalanine",
      "Serine"
    ]);
  });

  test("Invalid codon throws error", () => {
    expect(() => translate("LOL")).toThrow(new Error("Invalid codon"));
  });
});
