import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "assets/images/logos/darkmain.svg";
import particleOne from "assets/images/shapes/sunsjourneyfadeddots.svg";
import particleTwo from "assets/images/shapes/purpledoughnut.svg";

import FotterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FotterWrapper>
      <img src={particleOne} className="section__particle one"  alt="seerist" />
      <img src={particleTwo} className="section__particle two"  alt="seerist" />
      <img src={particleTwo} className="section__particle three"  alt="seerist" />

      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <Link className="footer-logo" to="#">
                <img src={logo} alt="logo" />
              </Link>
              <ul className="info">
                <li>
                  <FiMail />
                  <Link className="anchor" to="#">
me@seerist.com                  </Link>
                </li>
                <li>
                  <FiPhoneCall />
                  <Link className="anchor" to="#">
9999999999                  </Link>
                </li>
              </ul>

              <ul className="social">
                <li>
                  <Link className="anchor" to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Bacon</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
Ipsum                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
Spare Ribs                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
Ipsum                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                  Corned beef               </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                  porchetta beef                   </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">ribs turducken   </h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                  pork belly                 </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                cupim                 </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                  leberkas 
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                  meatloaf fatback salami                 </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
Lorem                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Our Address</h3>
              <p>
               123 st, <br />
                raleigh, NC <br />
                27613
              </p>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link className="anchor" to="#">
                Terms
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Condition
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Help
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            Copyright @  
            <Link className="anchor" to="#">
              Seerist 
            </Link>
                 &nbsp; &nbsp; All Right Reserved 2020
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
