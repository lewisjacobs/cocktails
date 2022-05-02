import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddProduct = ({ save }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [decoration, setDecoration] = useState("");
  const [recipe, setRecipe] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const isFormFilled = () => name && ingredients && decoration && recipe && image && price;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Cocktail</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Cocktail name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter name of cocktail"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputUrl"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputIngredients"
              label="Ingredients"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="ingredients"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setIngredients(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDecoration"
              label="Decoration"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="decoration"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setDecoration(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputRecipe"
              label="Recipe"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="recipe"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setRecipe(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPrice"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                name,
                ingredients,
                decoration,
                recipe,
                image,
                price,
              });
              handleClose();
            }}
          >
            Save product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddProduct.propTypes = {
  save: PropTypes.func.isRequired,
};

export default AddProduct;