import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { instance } from "../config/baseUrl";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const products = await instance.get("/products/featured");
      setFeaturedProducts(products.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            <b>Featured Products</b>
            <span style={{ float: "right" }}>
              <a href="#" className="featured-link">
                <span
                  className="px-3 "
                  style={{ background: "black", color: "white" }}
                >
                  All
                </span>
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
          {featuredProducts.map((products, index) => {
            return <ProductCard key={index} data={products} />;
          })}
        </Row>
      </Col>
    </Container>
  );
}

export default FeaturedProducts;
