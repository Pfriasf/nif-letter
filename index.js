// Guess the letter of the identity card

// The letter depends on the result of dividing the 8 digits number by 23. Each possible remainder of this division corresponds with a letter. More info at https://www.letranif.com/formula-para-calcular-nif/

const DNI = 99999999;

const letters = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function dniLetter(dniNumber) {
  return dniNumber + letters[dniNumber % 23];
}

dniLetter(DNI);
