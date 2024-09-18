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
import DetailPopularHuntComponent from './components/Popular_Hunt/popular_hunt_detail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewHuntDetailContainer from './components/New_Hunt/new_hunt_detail'
import ContactUSContainer from './components/contactus/contactus'
import TermsAndConditionComponent from './components/terms_and_condition/terms_and_condition';
import AboutUsContainer from './components/AboutUS/aboutus'
import SponsorsContainer from './components/Sponsors/sponsors'
import GalleryComponent from './components/Gallery/gallery'
import VideoComponent from './components/Video/video'


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
        <Route path="/popularhunt/:id" element={<DetailPopularHuntComponent />} />
        <Route path="/newhunt/:id" element={<NewHuntDetailContainer />} />
        <Route path="/contactus" element={<ContactUSContainer />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditionComponent />} />
        <Route path="/aboutus" element={<AboutUsContainer />} />
        <Route path="/sponsors" element={<SponsorsContainer />} />
        <Route path="/gallery" element={<GalleryComponent />} />
        <Route path='/video' element={<VideoComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
