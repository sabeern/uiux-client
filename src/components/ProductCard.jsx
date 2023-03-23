import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductCard({ data }) {
  let b = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= data.productRating) {
      b.push(1);
    } else b.push(0);
  }
  return (
    <Col md={4} lg={3}>
      <Card style={{ height: "100%" }}>
        <Card.Img
          variant="top"
          src={data.productImage}
          style={{ width: "100%", height: "auto", position: "relative" }}
        />
        <img
          src="https://res.cloudinary.com/dyff453oq/image/upload/v1679480109/ulux/quickview_savvts.svg"
          alt="Quick view"
          className="quick-view"
        />
        <img
          src="https://res.cloudinary.com/dyff453oq/image/upload/v1679544244/ulux/cart-20_qd9sqi.svg"
          alt="Cart view"
          className="cart-view"
        />
        <Card.Body>
          <Card.Text>
            <p className="product-code">{data.productCode}</p>
            <p className="product-name">{data.productName}</p>
            <p>
              {b.map((val) => {
                return val === 1 ? (
                  <AiFillStar style={{ color: "yellow" }} />
                ) : (
                  <AiOutlineStar />
                );
              })}
              <span>{data.totalReviews} reviews</span>
            </p>
            <p className="product-name">${data.productPrice}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
