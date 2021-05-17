import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

import particle1 from "assets/images/shapes/grimmacecircle.svg";
import particle2 from "assets/images/shapes/grimmacedoughnut.svg";

import data from "../../../_data/pricing";

import PricingSectionWrapper from "./pricingSection.style";

const Pricing = () => {
  return (
    <PricingSectionWrapper id="pricing">
      <img className="shadow section__particle one" src={particle1} alt="img" />
      <img className="shadow section__particle two" src={particle2} alt="img" />
      <Container>
        <SectionTitle UniWidth="65%">
          <h4>Lorem Ipsum</h4>
          <h2>
            <span>Set amateur ame </span> Delorum setorum luiet
          </h2>
        </SectionTitle>
        <Row>
          {data.pricings.map((pricing, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <div className="pricing-block">
                <div className="thumb-block">
                  <img src={pricing.thumb} alt="appion app landing" />
                </div>
                <div className="price-block">
                  <h3>{pricing.price}</h3>
                  <p>{pricing.name}</p>
                </div>
                <p>{pricing.description}</p>
                <div className="details-block">
                  {pricing.services.map((service, index) => (
                    <span className={service.className} key={index}>
                      {service.className === "on" ? (
                        <IoMdCheckmark />
                      ) : (
                        <IoMdClose />
                      )}
                      {service.content}
                    </span>
                  ))}
                </div>
                <Button className="pricing-btn outlinebutton sunsjourneyoutlinebutton">{pricing.btnText}</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </PricingSectionWrapper>
  );
};

export default Pricing;
