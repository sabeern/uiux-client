import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { instance } from "../config/baseUrl";
import VerticalProductCard from "./VerticalProductCard";

function SuggestedProducts() {
  const [topRated, setTopRated] = useState([]);
  const [offered, setOffered] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const fetchProducts = async () => {
    try {
      const products = await instance.get("/products/suggestedProducts");
      setTopRated(products.data.ratedProducts);
      setBestSeller(products.data.bestSellerProducts);
      setOffered(products.data.offerProducts);
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
        <Col md={4}>
          <p className="product-head">Top Rated Products</p>
          <hr />
          {topRated.map((product) => {
            return <VerticalProductCard data={product} />;
          })}
        </Col>
        <Col md={4}>
          <p className="product-head">Special Offers</p>
          <hr />
          {offered.map((product) => {
            return <VerticalProductCard data={product} />;
          })}
        </Col>
        <Col md={4}>
          <p className="product-head">Best Sellers</p>
          <hr />
          {bestSeller.map((product) => {
            return <VerticalProductCard data={product} />;
          })}
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default SuggestedProducts;
