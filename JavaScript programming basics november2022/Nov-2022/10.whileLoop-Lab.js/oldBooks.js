function oldBooks(input) {
  let bookSearched = input[0];

  let index = 1;
  let currentBook = input[index];
  index++;

  let booksChecked = 0;

  while (currentBook !== "No More Books") {
    if (currentBook === bookSearched) {
      console.log(`You checked ${booksChecked} books and found it.`);
      return;
    }

    booksChecked++;

    currentBook = input[index];
    index++;
  }
  console.log(`The book you search is not here!`);
  console.log(`You checked ${booksChecked} books.`);
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
