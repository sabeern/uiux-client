import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image:
      "https://res.cloudinary.com/dyff453oq/image/upload/v1679469751/ulux/slide-1_zlv5st.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image:
      "https://res.cloudinary.com/dyff453oq/image/upload/v1679469751/ulux/slide-1_zlv5st.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image:
      "https://res.cloudinary.com/dyff453oq/image/upload/v1679469751/ulux/slide-1_zlv5st.jpg",
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row md={12} className="mt-4 mb-4">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item className="container">
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider image"
                />
                <Carousel className="topleft">
                  <p>
                    <span
                      style={{
                        background: "yellow",
                        fontWeight: 900,
                        fontSize: "25px",
                        padding: "5px",
                      }}
                    >
                      30% OFF
                    </span>
                  </p>
                  <h2>
                    When Buying Parts
                    <br />
                    With Installation
                  </h2>
                  <p>
                    Installation of parts in the service of <br />
                    our partner
                  </p>
                </Carousel>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Row>
    </Container>
  );
}
export default HomeCarousel;
