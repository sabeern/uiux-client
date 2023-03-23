import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { instance } from "../config/baseUrl";

function Brands() {
  const [brands, setBrands] = useState([]);
  const fetchBrands = async () => {
    try {
      const allBrands = await instance.get("/brand/allBrands");
      setBrands(allBrands.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchBrands();
  }, []);
  return (
    <Container>
      <Row className="mt-2 mb-4">
        <Col md={12} className="overflow-auto">
          <table className="brand-table">
            <tr>
              {brands.map((brand, index) => {
                if (index < 8) {
                  return (
                    <td key={index}>
                      <img
                        src={brand.brandLogo}
                        alt="brand"
                        className="brandImage"
                      />
                      <p>{brand.brandName}</p>
                    </td>
                  );
                }
              })}
            </tr>
            <tr>
              {brands.map((brand, index) => {
                if (index >= 8) {
                  return (
                    <td key={index}>
                      <img
                        src={brand.brandLogo}
                        alt="brand"
                        className="brandImage"
                      />
                      <p>{brand.brandName}</p>
                    </td>
                  );
                }
              })}
            </tr>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default Brands;
