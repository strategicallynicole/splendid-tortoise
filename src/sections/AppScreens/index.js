import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";

import image1 from "assets/images/screenshots/1.png";
import image2 from "assets/images/screenshots/1.png";
import image3 from "assets/images/screenshots/1.png";
import image4 from "assets/images/screenshots/1.png";
import particle1 from "assets/images/logos/darkknightdoughnut.svg";
import particle2 from "assets/images/logos/grimmacecircle.svg";
import particle3 from "assets/images/logos/orangedonut.svg";
import particle4 from "assets/images/logos/brandcircle.svg";

import AppScreenSectionWrapper from "./appScreenSection.style";

const AppScreens = () => {
  const thumbs = [image1, image2, image3, image4];
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={thumbs[i]} alt="img" />
        </a>
      );
    },
    infinite: true,
    autoplay: true,
    dots: true,
    className: "app__screen__slider",
    dotsClass: "slick-dots slick-thumb",
    centerPadding: "100px",
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    infinite: true,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "280px"
        }
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px"
        }
      }
    ]
  };
  return (
    <AppScreenSectionWrapper>
      <div className="app-screen-one-block">
        <img className="section__particle one shadow" src={particle1} alt="img" />
        <img className="section__particle two shadow" src={particle2} alt="img" />
        <img className="section__particle three shadow" src={particle3} alt="img" />

        <img className="section__particle four shadow" src={particle4} alt="img" />
        <Container>
          <Row>
            <Col className="app-screen-content-block" xs={12} lg={6}>
              <div className="app__screen__conent">
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  <h4>An Ipsum Lorem</h4>
                  <h2>
                    <span>All my life lorem</span> & lipsum guess who's back
                  </h2>
                </SectionTitle>
                <Button className="outlinebutton grimmaceoutlinebutton">Back Again</Button>
              </div>
            </Col>
            <Col className="app-screen-slider-block" xs={12} lg={6}>
              <SlickSlider {...settings}>
                <SliderItem key={"1"}>
                  <img src={image1} alt="img" />
                </SliderItem>
                <SliderItem key={"2"}>
                  <img src={image2} alt="img" />
                </SliderItem>
                <SliderItem key={"3"}>
                  <img src={image3} alt="img" />
                </SliderItem>
                <SliderItem key={"4"}>
                  <img src={image4} alt="img" />
                </SliderItem>
              </SlickSlider>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="app-screen-two-block">
        <Container>
          <Row>
            <Col className="app-screen-content-block" offsetMd={6} md={6}>
              <div className="blocker">
              <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  {" "}
                  <h4>Ipsum Screens</h4>
                  <h2>
                    <span>Bacon ipsum</span> & delorem sit amateur.
                  </h2>
                </SectionTitle>
                <div className="btn-group">
                  <Button className="outlinebutton sunsjourneyoutlinebutton">
Lorem                  </Button>
                 
                </div>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
    </AppScreenSectionWrapper>
  );
};

export default AppScreens;
