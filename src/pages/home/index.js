import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CarouselHome from './Carousel.home';
import ProductHome from './Product.home';

const Home = () => {   
  return (
    <>
      <CarouselHome />
      <Container>
        <Row>
          <Col className="mt-3">
            <ProductHome />
          </Col>
          <Col className="mt-3">
            <ProductHome />
          </Col>
          <Col className="mt-3">
            <ProductHome />
          </Col>
          <Col className="mt-3">
            <ProductHome />
          </Col>
          <Col className="mt-3">
            <ProductHome />
          </Col>
          
        </Row>
      </Container>
    </>
  );

}

export default Home;

