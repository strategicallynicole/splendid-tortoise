import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Particle from "reusecore/Particles";

import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "reusecore/Accordion";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import FaqImage from "assets/images/illustrations/moon.svg";
/* import particle1 from "assets/images/app/particle/07.png";
import particle2 from "assets/images/app/particle/08.png"; */

import data from "../../../_data/faq";

import FaqSectionWrapper from "./faqSection.style";

const Faq = () => {
  return (
    <FaqSectionWrapper id="faq">
    <Particle />  
{/*    <img className="section__particle two" src={particle2} alt="img" />
 */}      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col className="faq-thumb-block" xs={12} sm={6}>
            <div className="faq-thumb">
              <img src={FaqImage} alt="appion-faq" />
            </div>
          </Col>
          <Col className="faq-content-block" xs={12} sm={6}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Lorem</h4>
              <h2>
                <span> Sausage frankfurter prosciutto  </span> ribeye pork belly jerky bacon chicken.
              </h2>
            </SectionTitle>
            <Accordion>
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <h5>{faq.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <IoIosArrowForward />
                      </OpenIcon>
                      <CloseIcon>
                        <IoIosArrowDown />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p>{faq.content}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="button urplebutton">Lipsum</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
