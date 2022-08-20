// in place of div, one can use fragments too. => React.Fragment/<></>
// under the hood react changes <div><h4>Hwllo!</h4></div> into

// const Greeting = () =>
//   React.createElement("div", {}, React.createElement("h1", {}, "Hello!"));

import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";

const BookList = () => (
  <section className="book-list">
    {books.map((book) => {
      return <Book key={book.id} {...book} />;
    })}
  </section>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
