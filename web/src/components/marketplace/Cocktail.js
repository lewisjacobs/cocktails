import React, { useState } from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const Cocktail = ({ cocktail, buy }) => {
  const account = window.walletConnection.account();
  const { id, price, name, ingredients, decoration, recipe, sold, image } = cocktail;
  const [expanded, setExpanded] = useState(false)

  const triggerBuy = () => {
    buy(id, price);
  };

  return (
    <Col key={id}>
      <Card style={{ backgroundColor: "#2d2d2d" }}>
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="text-light h6" style={{ marginBottom: "2px" }}>{name}</span>
            <Badge bg="secondary" className="ms-auto">
              Sold {sold} time{ sold === 1 ? "" : "s" }
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover", cursor: "pointer" }} onClick={() => setExpanded(!expanded)} />
        </div>
        <Card.Body className="d-flex flex-column">
          {
            expanded && 
            <>
              <Card.Text className="flex-grow-1 text-light h6">Ingredients</Card.Text>
              {
                ingredients?.split("\n").map((i) => <Card.Text className="flex-grow-1 text-light" style={{ marginBottom: "0px" }}>{i}</Card.Text>)
              }
              <Card.Text className="flex-grow-1 text-light h6" style={{ marginTop: "10px" }}>Decoration</Card.Text>
              {
                decoration?.split("\n").map((d) => <Card.Text className="flex-grow-1 text-light" style={{ marginBottom: "0px" }}>{d}</Card.Text>)
              }
              <Card.Text className="flex-grow-1 text-light h6" style={{ marginTop: "10px" }}>Recipe</Card.Text>
              <Card.Text className="flex-grow-1 text-light">{recipe}</Card.Text>
            </>
          }
          {account.accountId ? 
            <Button
              variant="outline-light"
              onClick={triggerBuy}
              className="w-100 py-2"
            >
              Buy for {utils.format.formatNearAmount(price)} NEAR
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