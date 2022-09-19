import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";


const Header = () => {

  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData) ;


  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Food Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="text-decoration-none text-light" to="/">
              Home
            </Link>
          </Nav>
          <Badge badgeContent={getData.length } color="primary">
            <Link to="/cart">
              <ShoppingCartIcon
                className="text-light"
                style={{ fontSize: "28px", cursor: "pointer" }}
                id="fade-button"
              />
            </Link>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
