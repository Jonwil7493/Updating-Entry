import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import UpdateBook from './components/UpdateBook';

const App = () => {
  const books = [/* Your book data */];

  return (
    <Router>
      <Switch>
        <Route exact path="/books" render={() => <BookList books={books} />} />
        <Route path="/books/update/:id" render={({ match }) => {
          const book = books.find(b => b.id === parseInt(match.params.id, 10));
          return <UpdateBook book={book} />;
        }} />
      </Switch>
    </Router>
  );
};

export default App;
