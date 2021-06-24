import React from "react";
import Header from "./../Header/Header";
// import TopBanner from "../TopBanner/TopBanner";
import SmallDetail from "./../SmallDetail/SmallDetail";
import Doctors from "./../Doctors/Doctors";
import Booking from "./../Booking/Booking";
import Articles from "./../Articles/Articles";

const MainHome = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <TopBanner />  */}
      <SmallDetail />
      <Doctors />
      <Booking />
      <Articles />
    </div>
  );
};

export default MainHome;
