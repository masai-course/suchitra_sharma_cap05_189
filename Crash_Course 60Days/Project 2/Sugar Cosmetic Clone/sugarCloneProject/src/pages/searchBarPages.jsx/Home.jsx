
import UpperNavbar from "../../components/UpperNavbar"
import SearchNavbar from "../../components/SearchNavbar"
import Slider from "../../components/Slider"
import BestSellerSlider from "../../components/BestSellerSlider"
import ExclusiveSlider from "../../components/ExclusiveSlider"
import ClubVelvetSlide from "../../components/ClubVelvetSlide"
import Subscriber from "../../components/Subscriber"
import Footer from "../../components/Footer"
import SearchNavbarLink from "../../components/SearchNavbarLink"


export default function Home(){
    return(
        <>
         <UpperNavbar/>
         <SearchNavbar />
         <SearchNavbarLink/>
         <Slider/>
      <BestSellerSlider/>
      <ExclusiveSlider/>
      <ClubVelvetSlide/>
      <Subscriber/>
      <Footer/>
        
        
        </>
    )
}