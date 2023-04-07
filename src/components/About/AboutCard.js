import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            A warm Welcome to GS INSTITUT FILIPPO SMALDONE.
             GS INSTITUT FILIPPO SMALDONE is a model school for inclusive education
              especially for learners with hearing disabilities Reflecting on our REB 
              results for Both O’LEVEL as well as the primary education.
               We have always maintained our academic excellence with our
                staff members doing a commendable job to teach and nurture our students. 
                GS IFS is located in Kigali – Rwanda. The School started in 2000s.
                 It was started with two-fold purpose:
                  To provide high quality inclusive education,
                   through innovation, positive influence, team-work and self-discipline; 
            guided by the principles of professionalism, commitment and excellence..  THE SCHOOL IS MANAGED BY the Salesian Sisters of the Sacred Hearts.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Inclusive education
            </li>
            <li className="about-activity">
              <ImPointRight /> Diversity
            </li>
            <li className="about-activity">
              <ImPointRight /> exellence
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">bill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
