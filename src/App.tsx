import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainAppointment from "./components/Appointment/MainAppointment/MainAppointment";
import MainBlog from "./components/Blogs/MainBlog/MainBlog";

import MainHome from './components/Home/MainHome/MainHome';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            {/* <MainBlog></MainBlog> */}
            <MainAppointment />
          </Route>
          <Route path='blog'>
            <MainBlog></MainBlog>
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default App;