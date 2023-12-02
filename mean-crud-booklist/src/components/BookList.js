import React from 'react';
import { Link } from 'react-router-dom';
import UpdateBook from './UpdateBook';

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
            <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Published</th>
                <th>Publisher</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book) => (
                <tr key={book.id}>
                    <td>{book.isbn}</td>
                    <td>{book.author}</td>
                    <td>{book.description}</td>
                    <td>{book.publishedYear}</td>
                    <td>{book.publisher}</td>
                    <td>
                        <Link to={'/books/update/${book.id}'}>Update</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
