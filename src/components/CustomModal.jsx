import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppContext } from "../App";

function CustomModal() {
  const [show, setShow] = useState(false);
  const {
    handleNewArticleSubmit,
    title,
    setTitle,
    description,
    setDescription,
  } = useContext(AppContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mt-5 ms-3" variant="primary" onClick={handleShow}>
        Add article
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление статьи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название статьи</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Название"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание статьи</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                name="description"
                placeholder="Описание"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="dark" onClick={handleNewArticleSubmit}>
            Опубликовать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
