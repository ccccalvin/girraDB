import data from './girraDB.json' assert { type: 'json' }

function countNamesStartingWith(letter) {
  // Ensure letter is uppercase for case-insensitive comparison
  const uppercaseLetter = letter.toUpperCase();

  // Filter names that start with the specified letter
  const filteredNames = data.names.filter(name => name.startsWith(uppercaseLetter));

  // Return the count
  return filteredNames.length;
}

// Get the letter from command-line arguments
const letter = process.argv[2]; // The third element is the first argument
if (letter) {
  console.log(`Count of names starting with "${letter}":`, countNamesStartingWith(letter));
} else {
  console.log("Please provide a letter as an argument.");
}
