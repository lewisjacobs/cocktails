import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const Cocktail = ({ Cocktail, make }) => {
  const account = window.walletConnection.account();
  const { id, price, name, ingredients, decoration, recipe, made, image } =
    Cocktail;

  const triggerMake = () => {
    make(id, price);
  };

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="text-secondary">{name}</span>
            <Badge bg="secondary" className="ms-auto">
              Made {made} time{ made === 1 ? "" : "s" }
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Text className="flex-grow-1 h5">Ingredients</Card.Text>
          {
            ingredients?.split("\n").map((i) => <Card.Text className="flex-grow-1" style={{ marginBottom: "0px" }}>{i}</Card.Text>)
          }
          <Card.Text className="flex-grow-1 h5" style={{ marginTop: "10px" }}>Decoration</Card.Text>
          {
            decoration?.split("\n").map((d) => <Card.Text className="flex-grow-1" style={{ marginBottom: "0px" }}>{d}</Card.Text>)
          }
          <Card.Text className="flex-grow-1 h5" style={{ marginTop: "10px" }}>Recipe</Card.Text>
          <Card.Text className="flex-grow-1">{recipe}</Card.Text>
          {account.accountId ? 
            <Button
              variant="outline-dark"
              onClick={triggerMake}
              className="w-100 py-3"
            >
              Make for {utils.format.formatNearAmount(price)} NEAR
            </Button>
            : 
            null
          }
        </Card.Body>
      </Card>
    </Col>
  );
};

Cocktail.propTypes = {
  Cocktail: PropTypes.instanceOf(Object).isRequired,
  buy: PropTypes.func.isRequired,
};

export default Cocktail;