import React, { useState } from "react";

function MainPage() {
const [data] = useState([
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" },
  { title: "Math", author: "George Orwell", year: 1949, genre: "Dystopian" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Drama" },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Adventure" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Tragedy" },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genre: "Psychological" },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Romance" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818, genre: "Horror" },
]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title");
  

  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "year") return a.year - b.year;
      if (sortOption === "author") return a.author.localeCompare(b.author);
      if (sortOption === "genre") return a.genre.localeCompare(b.genre);
      return a.title.localeCompare(b.title);
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Main Page - Data Display</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
        <option value="year">Sort by Year</option>
        <option value="genre">Sort by Genre</option>
      </select>

      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Year</th><th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.year}</td>
              <td>{item.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainPage;