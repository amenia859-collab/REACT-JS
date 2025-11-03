import React, { useState } from "react";
import style from "./Style.css";
import product from "./product.js";
import { Card, Button, Navbar, Container, Nav } from "react-bootstrap";
import Name from "./components/Name";
import Image from "./components/Image";
import Price from "./components/Price";
import Description from "./components/Description";

function App() {
  const [firstName, setfirstName] = useState("Ameni"); // var counter

  let { name, price, description, image } = product;
  return (
    <React.Fragment>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <Card style={{ width: "18rem" }} className="container">
          <Image />
          <Card.Body>
            <Name />
            <Card.Text>
              <Price />
              <Description />
            </Card.Text>
            <Button variant="primary" className="btn">
              Buy Now
            </Button>
          </Card.Body>
        </Card>
        {/* 👇 Greeting message */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {firstName ? <h1>Hello, {firstName}!</h1> : <h1>Hello, there!</h1>}
          {/* 👇 Image only if name exists */}
          {firstName && (
            <img
              src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg"
              alt="User Profile"
              style={{ width: 100, height: 100, marginLeft: 20 }}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
