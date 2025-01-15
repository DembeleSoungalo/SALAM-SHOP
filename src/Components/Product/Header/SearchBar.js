import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    onSearch(query);
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="search"
      />
      <Button  type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;