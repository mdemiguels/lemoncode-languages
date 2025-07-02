console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "El señor de los anillos"));
