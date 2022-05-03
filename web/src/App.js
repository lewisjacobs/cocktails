import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./utils/near";
import Wallet from "./components/Wallet";
import { Notification } from "./components/utils/Notifications";
import Cocktails from "./components/marketplace/Cocktails";
import LoginButton from "./components/utils/LoginButton";

const App = function AppWrapper() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Notification />
      <Container fluid="md">
        <Nav className="justify-content-end pt-3 pb-5">
          <Nav.Item>
            {account.accountId ? (
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            ) : (
              <LoginButton login={login} />
            )}
          </Nav.Item>
        </Nav>
        <main>{<Cocktails />}</main>
      </Container>
    </div>
  );
};

export default App;