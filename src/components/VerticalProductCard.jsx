import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function VerticalProductCard({ data }) {
  let b = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= data.productRating) {
      b.push(1);
    } else b.push(0);
  }
  return (
    <MDBContainer fluid className="mb-2">
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md={12}>
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody style={{ minHeight: "160px" }}>
              <MDBRow>
                <MDBCol md={3} className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://res.cloudinary.com/dyff453oq/image/upload/v1679485246/ulux/product-6_swzzlf.jpg"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md={9}>
                  <p className="product-name">{data.productName}</p>
                  <div className="mt-1 mb-0 text-muted small">
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
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default VerticalProductCard;
