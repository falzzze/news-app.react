import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

// 'https://gnews.io/api/v4/top-headlines?lang=en&token=9f64b333b8335a1145b70d8badec6724'

const SinglePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    async function fetchArticle() {
      try {
        const { data } = await axios.get(
          "https://64ea6d75bf99bdcc8e678e48.mockapi.io/news/" + id
        );
        setArticle(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchArticle();
  }, [id]);

  if (!article) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <Col xs={12} md={6} lg={4} key={article.id} className="m-auto">
        <Card
          className="bg-dark text-light"
          style={{ height: "50rem", width: "25rem" }}
        >
          <Card.Img
            src={article.image}
            className="rounded mx-auto d-block"
            style={{ width: "70%", height: "170px" }}
          />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <Card.Link href={article.url}>More</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SinglePage;
