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

function VerticalProductCard() {
  return (
    <MDBContainer fluid className="mb-2">
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md={12}>
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
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
                  <h5>Quant trident shirts</h5>
                  <div className="mt-1 mb-0 text-muted small">
                    <p>rating</p>
                    <span>100% cotton</span>
                    <span>
                      Best finish
                      <br />
                    </span>
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
