import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";
import { AppContext } from "../App";

const NewsList = () => {
  const { news, loading } = useContext(AppContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Row>
        {news?.map((item) => (
          <Col
            xs={12}
            md={6}
            lg={4}
            key={item.id}
            className="py-3 text-decoration-none"
            as={Link}
            to={`/news/${item.id}`}
          >
            <Card className="bg-dark text-light" style={{ height: "100%" }}>
              <Card.Img
                src={item.image}
                className="rounded mx-auto d-block"
                style={{ width: "100%", height: "170px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description?.slice(0, 70) + "..."}</Card.Text>
                <Card.Link as={Link} to={item.url}>
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
