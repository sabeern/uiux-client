import React from "react";
import TopLeftMenu from "../components/TopLeftMenu";
import { Container, Row, Col } from "react-bootstrap";
import TopRightMenu from "../components/TopRightMenu";
import MiddleMenu from "../components/MiddleMenu";
import MainNavbar from "../components/MainNavbar";
import HomeCarousel from "../components/HomeCarousel";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import Banner from "../components/Banner";
import SuggestedProducts from "../components/SuggestedProducts";
import Service from "../components/Service";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <TopLeftMenu />
          </Col>
          <Col md={6}>
            <TopRightMenu />
          </Col>
        </Row>
      </Container>
      <MiddleMenu />
      <hr className="hr-nav" />
      <MainNavbar />
      <hr className="hr-nav" />
      <HomeCarousel />
      <Brands />
      <FeaturedProducts />
      <Banner />
      <SuggestedProducts />
      <Service />
      <Footer />
    </>
  );
}

export default Home;
