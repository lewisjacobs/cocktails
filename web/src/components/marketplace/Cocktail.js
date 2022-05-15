import React, { useEffect, useState } from "react";
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

  const useMatchMedia = (mediaQuery, initialValue) => {
    const [isMatching, setIsMatching] = useState(initialValue)
    useEffect(() => {
      const watcher = window.matchMedia(mediaQuery)
      setIsMatching(watcher.matches)
      const listener = (matches) => {
        setIsMatching(matches.matches)
      }
      if (watcher.addEventListener) {
        watcher.addEventListener('change', listener)
      } else {
        watcher.addListener(listener)
      }
      return () => {
        if (watcher.removeEventListener) {
          return watcher.removeEventListener('change', listener)
        } else {
          return watcher.removeListener(listener)
        }
      }
    }, [mediaQuery])
  
    return isMatching
  }

  const isMobileResolution = useMatchMedia('(max-width:600px)', true)

  return (
    <Col key={id}>
      <Card style={{ backgroundColor: "#2d2d2d" }}>
        <Card.Header style={{ padding: isMobileResolution ? "5px 10px" : "10px", textAlign: "center" }}>
          <Stack direction="horizontal" gap={1}>
            <span className={`text-light ${isMobileResolution ? "small" : "h6"}`} style={{ marginBottom: "2px" }}>{name}</span>
            {
              !isMobileResolution && 
              <Badge bg="secondary" className="ms-auto">
                {sold} sold
              </Badge>
            }
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover", cursor: "pointer" }} onClick={() => setExpanded(!expanded)} />
        </div>
        <Card.Body className="d-flex flex-column" style={{ padding: isMobileResolution ? "5px" : "10px" }}>
          {
            expanded && 
            <>
              <Card.Text className="flex-grow-1 text-light h5">Ingredients</Card.Text>
              {
                ingredients?.split("\n").map((i) => <Card.Text className="flex-grow-1 text-light small" style={{ marginBottom: "0px" }}>{i}</Card.Text>)
              }
              <Card.Text className="flex-grow-1 text-light h5" style={{ marginTop: "10px" }}>Decoration</Card.Text>
              {
                decoration?.split("\n").map((d) => <Card.Text className="flex-grow-1 text-light small" style={{ marginBottom: "0px" }}>{d}</Card.Text>)
              }
              <Card.Text className="flex-grow-1 text-light h5" style={{ marginTop: "10px" }}>Recipe</Card.Text>
              <Card.Text className="flex-grow-1 text-light small">{recipe}</Card.Text>
            </>
          }
          {account.accountId ? 
            <Button
              variant="dark"
              onClick={triggerBuy}
              className="w-100"
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