import React from "react";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContexts";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
          <div className="w-100" style={{maxWidth:'400px'}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path = '/' component={Dashboard}/>
                  <Route path = "/signup" component = {Signup}/>
                  <Route path = "/forgotPassword" component = {ForgotPassword}/>
                  <Route path = "/login" component = {Login}/>
                  <Route path = "/updateUser" component = {UpdateUser}/>
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </Container>
  );
}

export default App;
