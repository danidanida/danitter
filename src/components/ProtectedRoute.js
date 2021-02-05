import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedInContext";


const ProtectedRoute = ({ component: Component, ...props  }) => {

    const changeLoggedStatus = useContext(LoggedInContext);

    console.log(changeLoggedStatus)
    console.log(props)

    return (
      <Route path={props.path}>
        {
          () => changeLoggedStatus.isLoggedIn ? <Component {...props} /> : <Redirect to="/sing-in" />
        }
      </Route>
  )}
  
  export default ProtectedRoute; 