import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import { TiMessageTyping, TiHeartOutline } from "react-icons/ti";

import imgNews1 from "assets/images/filler/10.jpeg";
import imgNews2 from "assets/images/filler/11.jpeg";
import imgNews3 from "assets/images/filler/12.jpeg";
import particle1 from "assets/images/shapes/branddoughnut.svg";
import particle2 from "assets/images/shapes/grimmacedoughnut.svg";

import NewsSectionWrapper from "./newsSection.style";

const News = () => {
  return (
    <NewsSectionWrapper>
      <img className="section__particle one shadow" src={particle1} alt="img" />
      <img className="section__particle two shadow" src={particle2} alt="img" />
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <h4>Bacon Blog Posts</h4>
          <h2>
            <span>Frankfurter ham hock landjaeger picanha. 

</span> Fatback corned beef beef ribs kevin. 
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={imgNews1} alt="img" />
                </Link>
              </div>
              <div className="post-meta-block">
                <Link to="#">Short ribs </Link>
                <span className="divider">/</span>
                <span>3/1/2021</span>
              </div>
              <h2 className="title">
                <Link to="#">
                salami rump hamburger pork        </Link>
              </h2>
              <p>Buffalo ball tip spare ribs, rump picanha turducken pig.

</p>
              <div className="post-reaction-block">
                <Link to="#">  <TiMessageTyping /> 99 Comments     </Link>
                <Link to="#">
                  <TiHeartOutline /> 99 LIkes
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={imgNews2} alt="img" />
                </Link>
              </div>
              <div className="post-meta-block">
                <Link to="#">, frankfurter tail </Link>
                <span className="divider">/</span>
                <span>3/20/2021</span>
              </div>
              <h2 className="title">
                <Link to="#">
                Chislic pancetta turducken meatloaf              </Link>
              </h2><p>Porchetta landjaeger frankfurter tongue pastrami leberkas strip steak turducken.  </p>
              <div className="post-reaction-block">
                <Link to="#">
                  <TiMessageTyping />  99 Comments
                </Link>
                <Link to="#">
                  <TiHeartOutline /> 99 Likes
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={imgNews3} alt="img" />
                </Link>
              </div>
              <div className="post-meta-block">
                <Link to="#">turducken salami </Link>
                <span className="divider">/</span>
                <span>3/22/2021</span>
              </div>
              <h2 className="title">
                <Link to="#">
                kevin short ribs ball tip ribeye               </Link>
              </h2>
              <p> Sirloin doner chuck short loin sausage </p>
              <div className="post-reaction-block">
                <Link to="#">
                  <TiMessageTyping />  99 Comments
                </Link>
                <Link to="#">
                  <TiHeartOutline /> 99 Likes
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </NewsSectionWrapper>
  );
};

export default News;
