import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Main from "./Main";
//import ProtectedRoute from "./ProtectedRoute";
import { LoggedInContext } from "../contexts/LoggedInContext";

function App() {
  //const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const changeLoggedStatus = { isLoggedIn, setIsLoggedIn };

  return (
    <LoggedInContext.Provider value={changeLoggedStatus}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/sing-up">
            <Register />
          </Route>

          <Route path="/sing-in">
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </div>
    </LoggedInContext.Provider>
  );
}

export default App;
