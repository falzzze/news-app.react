import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Form, Modal } from "react-bootstrap";
import { AppContext } from "../App";

function ModalForEdit() {
  const [show, setShow] = useState(false);
  const { selectArticleForEdit, title, setTitle, description, setDescription } =
    useContext(AppContext);
  const { id } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="me-3" variant="warning" onClick={handleShow}>
        Edit this
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование статьи</Modal.Title>
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
          <Button
            variant="dark"
            onClick={() => {
              selectArticleForEdit(id);
              handleClose();
            }}
          >
            Опубликовать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForEdit;
