import { Nav, Navbar, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedInContext";

const Header = () => {
  const changeLoggedStatus = useContext(LoggedInContext);

  console.log(changeLoggedStatus);

  let location = useLocation();
  const history = useHistory();

  function logOut() {
    changeLoggedStatus.setIsLoggedIn((changeLoggedStatus.isLoggedIn = false));
    history.push("/sing-up");
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/main">Danitter</Navbar.Brand>
        <Nav className="mr-auto">
        {changeLoggedStatus.isLoggedIn && <Nav.Link href="/my-page">My Danitter</Nav.Link>}
        </Nav>
        {!changeLoggedStatus.isLoggedIn &&
          location.pathname !== "/sing-in" && (
            <Nav.Link href="/sing-in"> Sign-in </Nav.Link>
          )}
        {!changeLoggedStatus.isLoggedIn &&
          location.pathname !== "/sing-up" && (
            <Nav.Link href="/sing-up">Register </Nav.Link>
          )}
        {changeLoggedStatus.isLoggedIn && (
          location.pathname === "/main" || location.pathname === "/my-page") && (
            <Button variant="outline-primary" onClick={logOut}>
              Sign-out
            </Button>
          )}
      </Navbar>
    </>
  );
};

export default Header;
