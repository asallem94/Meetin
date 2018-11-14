import React from 'react';
import HomepageHeader from './homepage_components/homepage_header';
// import SuggestedActivities from './homepage_components/suggested_activities';
// import SuggestedEvents from './homepage_components/suggested_events';
import Interests from './homepage_components/interests';
import OnMobile from './homepage_components/on_mobile';
// import Footer from './homepage_components/footer';


const Homepage = () => {
  return (
    <div className="homepage-container">
      <HomepageHeader/>
      <Interests/>
      <OnMobile/>
    </div>
  )
};


export default Homepage;


// <SuggestedActivities/>
// <SuggestedEvents/>
// <Footer/>
