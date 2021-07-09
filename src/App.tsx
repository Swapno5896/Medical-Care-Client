import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainAppointment from "./components/Appointment/MainAppointment/MainAppointment";
import MainBlog from "./components/Blogs/MainBlog/MainBlog";
import Header from './components/Home/Header/Header'
import MainHome from './components/Home/MainHome/MainHome';
import MainContact from './components/ContactUs/MainContact/MainContact';
import Footer from './components/Home/Footer/Footer'
import MainDetailBlog from "./components/Blogs/MainDetailBlog/MainDetailBlog";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <MainHome />
          </Route>
          <Route path='/appoinment'>
            <MainAppointment />
          </Route>
          <Route path='/blog'>

            <MainBlog></MainBlog>
          </Route>

          <Route path='/contact'>
            <MainContact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;