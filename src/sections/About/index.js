import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import imgAbout from "assets/images/illustrations/puzzling.svg";
/* import particle1 from "assets/images/logos/darkknightdoughnut.svg";
import particle2 from "assets/images/logos/darkknightcircle.svg"; */
import Particle from "reusecore/Particles";

import AboutSectionWrapper from "./about.style";
import { LoremIpsum } from 'react-lorem-ipsum';


const About = () => {
  return (
    <AboutSectionWrapper id="about" >
      <Particle />
     {/*  <img className="section__particle one" src={particle1} alt="img" />

      <img className="section__particle two" src={particle2} alt="img" />
      <img className="section__particle three" src={particle1} alt="img" /> */}

      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={imgAbout}
              alt="Adonec turpis vestibulum"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              {" "}
              <h4> 
                <LoremIpsum 
                 p={1} 
                 avgSentencesPerParagraph={1} 
                 avgWordsPerSentence={5} />
              </h4>
              <h2>
                <span> Adonec turpis vestibulum </span>   integer id conubia. 
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
       
              <LoremIpsum p={2} />

             
            </p>
            <p className="about-text text-two">
            <LoremIpsum 
              p={1} 
              avgSentencesPerParagraph={1} 
              avgWordsPerSentence={6} />
            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="button dietbutton">Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
