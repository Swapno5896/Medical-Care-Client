import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainBlog from "./components/Blogs/MainBlog/MainBlog";

import MainHome from './components/Home/MainHome/MainHome';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainBlog></MainBlog>
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