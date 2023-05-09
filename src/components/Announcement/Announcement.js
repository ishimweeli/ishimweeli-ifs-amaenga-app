import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../Blog/card";
import bg1 from "../../Assets/about.jpeg";
import bg2 from "../../Assets/about.jpeg";
import bg3 from "../../Assets/about.jpeg";
import bg4 from "../../Assets/about.jpeg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Announcement = () => {
  const [ blogData, setBlogData ] = useState([]);

  useEffect(() => {
    fetch('https://amarenga-appa.onrender.com/publication')
      .then(response => response.json())
      .then(data => {
        setBlogData(data);
        console.log(data);
        console.log(blogData);
      })
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    console.log('https://amarenga-appa.onrender.com/publication', blogData);
  }, [ blogData ]);
  return (
    <div className="mt-7">
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-5">b</h5>
      <Row>
        { blogData.map((item, index) => (
          <Col key={ index } sm={ 6 } md={ 6 } lg={ 4 } xl={ 3 }>
            <Blog 
              image={ item.image }
              title={ item.title }
              text={ item.description }
              pdf={ item.pdf }
              date={ item.updatedAt }
            />
          </Col>
        ))}
      </Row>
      
    </div>
  );
};

export default Announcement;
