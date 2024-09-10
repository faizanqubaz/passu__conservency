import NavbarComponent from './components/Navbar/navbar'
import NavbarComponentClass from './components/Navbar/navbarcontainer'
import SliderComponent from './components/Slider/slider'
import IntroductionComponent from './components/Intodduction/introduction'
import MapContainerComponent from './components/map/mapcontainer'
import DiscountComponent from './components/Discounts_New_Hunt/discount'
import PopularHuntComponent from './components/Popular_Hunt/popularhunt'
import NewHuntComponent from './components/New_Hunt/newhunt'
import GuideComponent from './components/guides/guide';
import PartnersComponents from './components/partners/partners';
import FooterComponents from './components/Footer/footer';
import TeamComponent from './components/Team/team'

function App() {
  return (
     <>
      <NavbarComponent />
      <NavbarComponentClass />
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
   
  );
}

export default App;
