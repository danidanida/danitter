import { useContext, useState } from "react";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../blocks/MyPage.css";
import { useHistory } from "react-router-dom";

const MyPage = () => {
  const history = useHistory();
  const changeLoggedStatus = useContext(LoggedInContext);
  changeLoggedStatus.setIsLoggedIn((changeLoggedStatus.isLoggedIn = true));

  const [content, setContent] = useState("");
  const [title, setTitle] = useState(""); 
  const [postAmount, setPostAmount] = useState(0);

  function handleContent(e) {
    setContent(e.target.value);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (content !== "" && title !== "") {
      const creationDate = new Date();
      setPostAmount(postAmount + 1)
      localStorage.setItem("title", `${title}`);
      localStorage.setItem("post", `${content}`);
      localStorage.setItem("post_amount", `${postAmount}`);
      localStorage.setItem("post_creation_date", `${creationDate}`);
      history.push("/main");
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <section className="blog_post">
              <Form.Group>
                <Form.Label className="form-label">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="My post"
                  value={title}
                  onChange={handleTitle}
                />
                <Form.Label className="form-label" style={{marginTop:"5px"}}> Post content </Form.Label>
                <Form.Control
                  as="textarea"
                  value={content}
                  onChange={handleContent}
                  maxlength="201"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </section>
          </Col>
          <Col>
            <section className="account_info">
              <p>
                {" "}
                <b>Nickname: </b>
                {localStorage.username}
              </p>
              <p>
                {" "}
                <b>Registration time: </b> {localStorage.registration_time}
              </p>
              <p><b>Like amount: </b> {localStorage.like_amount}</p>
              <p><b>Post amount: </b> {localStorage.post_amount}</p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPage;
