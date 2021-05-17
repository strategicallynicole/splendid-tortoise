import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Particle from "reusecore/Particle";

import { FaPlay, FaDownload } from "react-icons/fa";
import data from "../../../_data/homepage/index.yaml";
import BannerSectionWrapper from "./banner.style";
import imgHero from "assets/images/illustrations/moonreach.svg";
const BannerModern = () => {
  return (
    <BannerSectionWrapper>
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col sm={7} md={6}>
            <SectionTitle
              className="section-title text-wh"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4 className="text-white">{data.hero_preheadline}</h4>
              <h1 className="white-text">
              {data.hero_headline}
              </h1>
            </SectionTitle>
            <p className="text-white white-text">
             {data.hero_copy}
            </p>
            <VintageBox right={true} vintageOne={true}>
            <div className="button-group">   <a href={data.first_button_link}> <Button className="button sunsjourneybutton">
                {/* <FaDownload className="icon-left" /> */}
{data.first_button_text}              </Button></a>
<a href={data.second_button_link}> <Button className="outlinebutton dietoutlinebutton">
                {/* <FaDownload className="icon-left" /> */}
{data.second_button_text}              </Button></a>
            
              </div>
            </VintageBox>
          </Col>
          <Col sm={5} md={6}>
            <img
              src={imgHero}
              className="hero-img"
              alt="prime-app hero image"
            />
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerModern;
