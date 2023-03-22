import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VerticalProductCard from "./VerticalProductCard";

function SuggestedProducts() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h4>Top Related Products</h4>
          <hr />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
        </Col>
        <Col md={4}>
          <h4>Special Offers</h4>
          <hr />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
        </Col>
        <Col md={4}>
          <h4>Best Sellers</h4>
          <hr />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default SuggestedProducts;
