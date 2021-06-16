import React from "react";
import Header from "./../Header/Header";
// import TopBanner from "../TopBanner/TopBanner";
import SmallDetail from "./../SmallDetail/SmallDetail";
import Doctors from "./../Doctors/Doctors";
import Booking from "./../Booking/Booking";
import Articles from "./../Articles/Articles";
import Footer from "./../Footer/Footer";

const MainHome = () => {
  return (
    <div>
      <Header />
      {/* <TopBanner /> */}
      <SmallDetail />
      <Doctors />
      <Booking />
      <Articles />
      <Footer />
    </div>
  );
};

export default MainHome;
