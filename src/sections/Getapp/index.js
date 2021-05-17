import React from "react";
import { Link } from "gatsby";
import Button from "reusecore/Button";

import { Container, Row, Col } from "reusecore/Layout";
import { DiAppstore } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";

import AppSecreenImage from "assets/images/filler/9.jpeg";
import particle1 from "assets/images/shapes/grimmace3ddots.svg";
import particle2 from "assets/images/shapes/branddoughnut.svg";
import particle3 from "assets/images/shapes/grimmace3ddots.svg";
import particle4 from "assets/images/shapes/branddoughnut.svg";

import GetAppSectionWrap from "./getAppSection.style";

const GetApp = () => {
  return (
    <GetAppSectionWrap>
      <img className="section__particle one shadow" src={particle1} alt="img" />
      <img className="section__particle two shadow" src={particle2} alt="img" />
      <img className="section__particle three shadow" src={particle3} alt="img" />
      <img className="section__particle four shadow" src={particle4} alt="img" />
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="getapp-block">
              <h3> Pork chop prosciutto</h3>
              <p>
              Buffalo ball tip spare ribs, rump picanha turducken pig. Sirloin doner chuck short loin sausage tenderloin buffalo short ribs pork pork loin pork belly andouille filet mignon porchetta kielbasa. Shank jerky turducken spare ribs bresaola.</p>
              <div className="btn-block">
              <Button className="getapp-btn outlinebutton sunsjourneyoutlinebutton">                  <DiAppstore />&nbsp; &nbsp;
Meatball</Button>
                <Button className="getapp-btn outlinebutton sunsjourneyoutlinebutton">                  <FaGooglePlay />&nbsp; &nbsp;
Meatball</Button>

                
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="getapp-thumb">
              <img src={AppSecreenImage} alt="get the app" />
            </div>
          </Col>
        </Row>
      </Container>
    </GetAppSectionWrap>
  );
};

export default GetApp;
