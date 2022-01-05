const readline = require("readline");
const EventEmitter = require("events");
const { stdin } = require("process");

const eventEmitter = new EventEmitter();

let books = ["GOT", "Lords of Rings"];

function showbooks() {
  console.log(books);
  return;
}

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function interactWithUser() {
  r1.question(
    "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all book  2 - Add a new book  3 - Quit \n",
    (selectedOption) => {
      eventEmitter.on("show books pressed", showbooks);

      if (selectedOption === "1") {
        eventEmitter.emit("show books pressed");
        interactWithUser();
      } else if (selectedOption === "2") {
        r1.question("Please provide name of the books", (bookName) => {
          books.push(bookName);
          eventEmitter.emit("show books pressed");
          interactWithUser();
        });
      } else if (selectedOption === "3") {
        r1.close();
      } else {
        console.log(
          "You have selected an invalid entry so please press 1, 2 or 3"
        );
        interactWithUser();
      }
    }
  );
}

interactWithUser();

r1.on("close", () => {
  console.log("Finish");
  process.exit(0);
});
