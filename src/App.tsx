import React from 'react';
import Header from './components/Home/Header/Header';
import TopBanner from './components/Home/TopBanner/TopBanner';
import SmallDetail from './components/Home/SmallDetail/SmallDetail';
import Doctors from './components/Home/Doctors/Doctors';
import Booking from './components/Home/Booking/Booking';
import Articles from './components/Home/Articles/Articles';
const App = () => {
  return (
    <div>
      <Header />
      <TopBanner />
      <SmallDetail />
      <Doctors />
      <Booking />
      <Articles />
    </div>
  );
};

export default App;