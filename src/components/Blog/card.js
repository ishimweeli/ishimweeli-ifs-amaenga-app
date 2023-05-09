import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  const [ showMore, setShowMore ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const cardStyles = css`
    width: ${showMore ? "90%" : "50%"};
    transition: all 0.3s ease-in-out;
    max-height: 90%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  `;

  const loaderStyles = css`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: auto;
    margin-top: 20px;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  useEffect(() => {
    // simulate data loading delay for 2 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Card className="mb-4" sx={ cardStyles }>
      { loading ? (
        <div css={ loaderStyles }></div>
      ) : (
        <>
          <CardImg alt="Card image cap" src={ props.image } />
          <CardBody className="p-4">
              <CardTitle tag="h5">{ props.title }</CardTitle>
              <CardSubtitle>{ props.subtitle }</CardSubtitle>
              <CardText className="mt-3">
                { !showMore && props.text.length > 100
                  ? props.text.substring(0, 20) + "..."
                  : props.text }
              </CardText>
              { !showMore && props.text.length > 100 && (
                <Button
                  color={ props.color }
                  onClick={ () => setShowMore(true) }
                >
                  Read More
                </Button>
              ) }
              { showMore && (
                <CardText className="mt-3">{ props.text }</CardText>
              ) }
              <CardTitle tag="h5">
                { props.pdf && (
                  <a
                    href={ props.pdf }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                ) }
              </CardTitle>
            </CardBody>
        </>
      ) }
    </Card>
  );
};

export default Blog;
