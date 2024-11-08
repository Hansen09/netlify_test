// Define the Book interface
interface Book {
  // consists of title, author and publication year
  title: string;
  author: string;
  publicationYear: number;
}

// Function to display books by year of publication
function displayBooksByYear(bookArray: Book[], year: number): void {
  // Code here
  let grouped = [];
  console.log("Year: " + year);
  for (var book of bookArray) {
    if (book.publicationYear == year) {
      console.log("Book: " + book.title + " by " + book.author);
    }
  }
}

// Array of books
const bookArray: Book[] = [
  // Add book objects with title, author, and publication year
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  },
  { title: "1984", author: "George Orwell", publicationYear: 1949 },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
  },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851 },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    publicationYear: 2018,
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    publicationYear: 2010,
  },
  {
    title: "The Vanishing Half",
    author: "Brit Bennett",
    publicationYear: 2020,
  },
  { title: "Educated", author: "Tara Westover", publicationYear: 2018 },
  { title: "Normal People", author: "Sally Rooney", publicationYear: 2023 },
  {
    title: "The Night Watchman",
    author: "Louise Erdrich",
    publicationYear: 2020,
  },
  {
    title: "An American Marriage",
    author: "Tayari Jones",
    publicationYear: 2018,
  },
  { title: "The Testaments", author: "Margaret Atwood", publicationYear: 2019 },
];

// Call the function to display books published in a certain year
displayBooksByYear(bookArray, 2020);
// Output:
// Books published in the year 2020:
// - Book A by Author A
// - Book C by Author C

displayBooksByYear(bookArray, 2019);
// Output:
// Books published in the year 2019:
// - Book B by Author B

displayBooksByYear(bookArray, 2021);
// Output:
// No books were published in the year 2021
