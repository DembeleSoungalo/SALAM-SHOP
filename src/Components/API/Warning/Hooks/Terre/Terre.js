import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Card, ListGroup } from 'react-bootstrap';
import styles from './Terre.module.css';

const Terre = () => {
    
  const uri = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(uri)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error.message));
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <Container className={styles.container}>
      <h2>Countries:</h2>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </InputGroup>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4"> {/* Use Row with responsive grid */}
        {filteredCountries.map(country => (
          <Col key={country.cca3}> {/* Wrap each card in a Col */}
            <Card className={styles.card}> {/* Use Card component */}
              <Card.Img variant="top" src={country.flags.png} alt={`${country.name.common} flag`} className={styles.flag} />
              <Card.Body>
                <Card.Title className={styles.countryName}>{country.name.common}</Card.Title>
               {/* Add more Card content as needed (e.g., population, region) */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


    </Container>
  );
};

export default Terre;






