import React from "react";
import Header from "../Header/Header";
import TopBanner from "../TopBanner/TopBanner";
import SmallDetail from "../SmallDetail/SmallDetail";
import Doctors from "../Doctors/Doctors";
import Booking from "../Booking/Booking";
import Articles from "../Articles/Articles";
import Siler from "../Siler/Siler";

const MainHome = () => {
  return (
    <div>
      {/* <Header /> */}
      <TopBanner />
      {/* <Siler /> */}
      <SmallDetail />
      <Doctors />
      <Booking />
      <Articles />
    </div>
  );
};

export default MainHome;
