import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/icons/experimental/happy.svg";
import Icon2 from "assets/images/icons/experimental/color.svg";
import Icon3 from "assets/images/icons/experimental/cookie.svg";
import Icon4 from "assets/images/icons/experimental/moon.svg";
import Icon5 from "assets/images/icons/experimental/sad.svg";
import Icon6 from "assets/images/icons/experimental/cupcake.svg";

import FeturesSectionWrapper from "./fetures.style";

const FeaturesClassic = () => {
  return (
    <FeturesSectionWrapper id="features">
      <Container>
        <SectionTitle UniWidth="65%">
          <h2>
            <span>Bacon ipsum</span> delorum spare rib
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon1} alt="prime app features icon" />
              </div>
              <h3>Pork Rinds</h3>
              <p>
              Corned beef porchetta beef ribs turducken pork belly, cupim leberkas meatloaf fatback salami kevin. 
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon2} alt="prime app features icon" />
              </div>
              <h3>Prosciutto </h3>
              <p>
              ball tip tongue salami kielbasa, porchetta brisket cupim cow corned beef andouille.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon3} alt="prime app features icon" />
              </div>
              <h3>prosciutto chislic</h3>
              <p>
              Pastrami jerky ball tip, drumstick cow spare ribs tri-tip 
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon4} alt="prime app features icon" />
              </div>
              <h3> salami ham flank turkey andouille</h3>
              <p>
              Alcatra kevin pig ground round brisket turkey meatloaf 


              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon5} alt="prime app features icon" />
              </div>
              <h3>pastrami beef short </h3>
              <p>
              loin fatback shank buffalo. Prosciutto sirloin porchetta chislic
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon6} alt="prime app features icon" />
              </div>
              <h3>Frankfurter t-bone chislic</h3>
              <p>
            buffalo boudin tri-tip ham hock landjaeger salami short ribs pastrami spare ribs short loin. 
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FeturesSectionWrapper>
  );
};

export default FeaturesClassic;
