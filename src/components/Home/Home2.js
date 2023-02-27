import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
           <h3>
            A warm Welcome to GS INSTITUT FILIPPO SMALDONE GS INSTITUT FILIPPO SMALDONE
             is a model school for inclusive education especially for learners with hearing disabilities
              Reflecting on our REB results for
             Both ORDINARY LEVEL as well as the primary education. We have always maintained our academic excellence ... THE SCHOOL IS MANAGED BY the Salesian Sisters of the Sacred Hearts.
            </h3>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img  className="img-fluid" style={{  margin: '0 auto', borderRadius: '50%', marginBottom: '20px', width: '300px', height: '300px' }} src={myImg } />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="white">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/ishimweeli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a> */}
              {/* </li> */}
              <li className="social-icons">
                <a
                  href="https://twitter.com/ArtroomIfs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a> */}
              {/* </li> */}
              <a>gssmaldone@gmail.com</a>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
