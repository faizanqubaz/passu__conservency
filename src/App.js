import NavbarComponent from './components/Navbar/navbar';
import NavbarComponentClass from './components/Navbar/navbarcontainer';
import SliderComponent from './components/Slider/slider';
import IntroductionComponent from './components/Intodduction/introduction';
import MapContainerComponent from './components/map/mapcontainer';
import DiscountComponent from './components/Discounts_New_Hunt/discount';
import PopularHuntComponent from './components/Popular_Hunt/popularhunt';
import NewHuntComponent from './components/New_Hunt/newhunt';
import GuideComponent from './components/guides/guide';
import PartnersComponents from './components/partners/partners';
import FooterComponents from './components/Footer/footer';
import TeamComponent from './components/Team/team';
import DetailDiscountComponent from './components/Discounts_New_Hunt/detail_discount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* The navbar and some shared components */}
      <NavbarComponent />
      <NavbarComponentClass />
      
      {/* Define routes for navigation */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <SliderComponent />
              <IntroductionComponent />
              <MapContainerComponent />
              <DiscountComponent />
              <PopularHuntComponent />
              <NewHuntComponent />
              <GuideComponent />
              <PartnersComponents />
              <TeamComponent />
              <FooterComponents />
            </>
          } 
        />
        {/* Route for detail page */}
        <Route path="/discount/:id" element={<DetailDiscountComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
