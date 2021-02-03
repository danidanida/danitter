import "../blocks/Login.css";
import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Login = (props) => {
    const history = useHistory();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUserNameChange(e) {
    setUsername(e.target.value);
    console.log(props);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      localStorage.setItem("username", `${username}`);
      localStorage.setItem("password", `${password}`);
      history.push("/main");
    } else {
      alert("Please enter your username and password");
    }
  }

  return (
    <>
      <section className="container-fluid">
        <fieldset className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-4">
            <form className="form-container">
              <legend>
                <h3>Login </h3>
              </legend>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUserNameChange}
                  className="form-control"
                  placeholder="Please enter username"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-control"
                  placeholder="Please enter password"
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: "gray" }}
                onClick={handleSubmit}
                className="btn btn-primary btn-block"
              >
                Login
              </button>
            </form>
          </section>
        </fieldset>
      </section>
    </>
  );
};

export default Login;
