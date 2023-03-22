import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            Featured Products
            <span style={{ float: "right" }}>
              <a href="#" className="featured-link">
                All
              </a>
              <a href="#" className="featured-link">
                Power Tools
              </a>
              <a href="#" className="featured-link">
                Hand Tools
              </a>
              <a href="#" className="featured-link">
                Plumbing
              </a>
            </span>
          </div>
        </Col>
      </Row>

      <hr className="hr-nav mb-3" />
      <Col md={12}>
        <Row>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Col>
    </Container>
  );
}

export default FeaturedProducts;
