import React from 'react';
//import useState from 'react';
import { Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Main from './Main';
//import Main from "./Main";
//import ProtectedRoute from "./ProtectedRoute";

function App() {
  //const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
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
  );
}

export default App;
