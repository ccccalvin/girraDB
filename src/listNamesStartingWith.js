import data from './girraDB.json' assert { type: 'json' }

function listNamesStartingWith(letter) {
  // Ensure letter is uppercase for case-insensitive comparison
  const uppercaseLetter = letter.toUpperCase();

  // Filter names that start with the specified letter
  const filteredNames = data.names.filter(name => name.startsWith(uppercaseLetter));

  return filteredNames;
}

// Get the letter from command-line arguments
const letter = process.argv[2]; // The third element is the first argument
if (letter) {
  console.log(`List of names starting with "${letter}":`, listNamesStartingWith(letter));
} else {
  console.log("Please provide a letter as an argument.");
}
