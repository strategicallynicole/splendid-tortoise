import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import integrationImage1 from "assets/images/illustrations/men.svg";
import integrationImage2 from "assets/images/illustrations/links.svg";
import integrationImage3 from "assets/images/illustrations/reachforit.svg";
import integrationImage4 from "assets/images/illustrations/dive.svg";



import Icon from "assets/images/icons/arrow/circle_right.svg";

import IntegrationItemWrapper from "./integrationSection.style";

const Integrations = () => {
  return (
    <IntegrationItemWrapper className="integrationleft">
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={9}>
            <div className="integration__block__wrap">
              <div className="integration__block">
                <div className="integration__block__inner">
                  <img src={integrationImage1} className="featureimage" alt=" integration" />
                  <h3>Bacon Ipsum</h3>
                  <p>Sausage frankfurter</p>
                  <Link to="#">
                    <img src={Icon} alt=" app" />
                  </Link>
                </div>
                <div className="integration__block__inner">
                  <img src={integrationImage2} className="featureimage" alt=" integration" />
                  <h3>Brisket</h3>
                  <p>Ham hock leberkas </p>
                  <Link to="#">
                    <img src={Icon} alt=" app" />
                  </Link>
                </div>
              </div>
              <div className="integration__block right">
                <div className="integration__block__inner">
                  <img src={integrationImage3} className="featureimage" alt="appion integration" />
                  <h3>Filet</h3>
                  <p>Ham hock leberkas  </p>
                  <Link to="#">
                    <img src={Icon} alt=" app" />
                  </Link>
                </div>
                <div className="integration__block__inner">
                  <img src={integrationImage4} className="featureimage" alt="appion integration" />
                  <h3>Burgdoggen</h3>
                  <p>Cow meatball </p>
                  <Link to="#">
                    <img src={Icon} alt=" app" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={3} className="integration-content-wrap integrationright">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Bacon ipsum</h4>

              <h2>
                <span>Alcatra pork loin salami,  </span> turkey. 
              </h2>
            </SectionTitle>
            <p className="integration-text">
            Pork chop strip steak pancetta 
            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="button darkknightrisesbutton">Fry It Up</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </IntegrationItemWrapper>
  );
};

export default Integrations;
