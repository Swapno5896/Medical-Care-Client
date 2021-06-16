import React from 'react';
import Header from './components/Home/Header/Header';
import TopBanner from './components/Home/TopBanner/TopBanner';
import SmallDetail from './components/Home/SmallDetail/SmallDetail';
import Doctors from './components/Home/Doctors/Doctors';
import Booking from './components/Home/Booking/Booking';
import Articles from './components/Home/Articles/Articles';
import Footer from './components/Home/Footer/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <TopBanner />
      <SmallDetail />
      <Doctors />
      <Booking />
      <Articles />
      <Footer></Footer>
    </div>
  );
};

export default App;