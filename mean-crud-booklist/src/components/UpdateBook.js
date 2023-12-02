// UpdateBook.js

import React, { useState } from 'react';

const UpdateBook = ({ book }) => {
  const [updatedBook, setUpdatedBook] = useState({
    isbn: book.isbn,
    title: book.title,
    author: book.author,
    description: book.description,
    publishedYear: book.publishedYear,
    publisher: book.publisher,

    const handleUpdate = () => {
        fetch('/api/books/${book.id}', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Book Updated successfully: ', data);
        })
        .catch((error) => {
            console.error('Error updating book: ', error);
        })
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Implement the update logic here (e.g., API request or state update)
    console.log('Updated Book:', updatedBook);
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form>
        {/* Input fields for ISBN, Title, Author, etc. */}
        {/* Use handleInputChange to update the local state */}
        <label>ISBN: </label>
        <input
          type="text"
          name="isbn"
          value={updatedBook.isbn}
          onChange={handleInputChange}
        />
        {/* Repeat for other fields */}

        <button type="button" onClick={handleUpdate}>
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
