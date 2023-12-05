import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
import { AppContext } from "../../App";
import { RequireAuth } from "./authPage/Auth";
import axios from "axios";
import ModalForEdit from "../ModalForEdit";

// 'https://gnews.io/api/v4/top-headlines?lang=en&token=9f64b333b8335a1145b70d8badec6724'

const SinglePage = () => {
  const { handleDeleteArticle } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
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
      <Col xs={12} md={6} lg={3} key={article.id} className="m-auto">
        <Card
          className="bg-dark text-light"
          style={{ height: "45rem", width: "25rem" }}
        >
          <Card.Img
            src={article.image}
            className="rounded mx-auto d-block"
            style={{ width: "70%", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <Button className="my-5 me-5" as={Link} to={article.url}>
              Read more
            </Button>
            {/* запрещаем удаление незарегистрированным пользователям */}
            <RequireAuth>
              <ModalForEdit />
              <Button
                variant="danger"
                onClick={() => {
                  handleDeleteArticle(id);
                  navigate(`/home`);
                }}
              >
                Delete this
              </Button>
            </RequireAuth>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SinglePage;
