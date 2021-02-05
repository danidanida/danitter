import { useContext, useState } from "react";
import "../blocks/HeartButton.css";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";

const Main = () => {
  const [like, setLike] = useState(0);
  localStorage.setItem("like_amount", `${like}`);

  function handleLike(e) {
    if (e.target.style.fill !== "red") {
      e.target.style.fill = "red";
      setLike(1);
    } else {
      e.target.style.fill = "gray";
      setLike(0);
    }
  }
  function handleClose (e) {
      console.log("Close")
  }

  const changeLoggedStatus = useContext(LoggedInContext);
  changeLoggedStatus.setIsLoggedIn((changeLoggedStatus.isLoggedIn = true));
  return (
    <>
      <Container fluid>
        <h2>Hello, {localStorage.username}</h2>
        <Jumbotron style={{position: "relative"}}>
          <Row>
          <button
                type="button"
                className="close"
                onClick={handleClose}
                style={{ position: "absolute", right: "0", top: "0" }}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            <Col>
              <h1>{localStorage.title}</h1>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{localStorage.post}</p>
            </Col>
            <div>
              <Col>
                <svg
                  onClick={handleLike}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="gray"
                  style={{ float: "right" }}
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Col>
             {like > 0 && <p className="like">{like}</p> }
            </div>
          </Row>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Main;
