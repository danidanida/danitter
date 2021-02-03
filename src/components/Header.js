import { Nav, Form, Navbar, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push("/sing-in");
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Danitter</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">My Danitter</Nav.Link>
        </Nav>
        {!props.isLoggedIn && (
          <Button variant="outline-primary">Sign-in</Button>
        )}
        {!props.isLoggedIn && (
          <Button variant="outline-primary">Register</Button>
        )}
        {props.isLoggedIn && (
          <Button variant="outline-primary" onClick={logOut}>
            Sign-out
          </Button>
        )}
      </Navbar>
    </>
  );
};

export default Header;
