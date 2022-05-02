import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const LoginButton = ({ name, login }) => {
  if ((name, login)) {
    return (
      <Button onClick={login} variant="dark" className="rounded-pill px-3 mt-3">
        Connect Wallet
      </Button>
    );
  }
  return null;
};

LoginButton.propTypes = {
  name: PropTypes.string,
};

LoginButton.defaultProps = {
  name: "",
};

export default LoginButton;