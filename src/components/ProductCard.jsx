import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";

function ProductCard() {
  return (
    <Col md={4} lg={3}>
      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dyff453oq/image/upload/v1679479344/ulux/product-1_z9tied.jpg"
          style={{ width: "100%", height: "auto", position: "relative" }}
        />
        <img
          src="https://res.cloudinary.com/dyff453oq/image/upload/v1679480109/ulux/quickview_savvts.svg"
          alt="Quick view"
          className="quick-view"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <p>sku-3265</p>
            <h4>Glossy gory</h4>
            <p>3625</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
