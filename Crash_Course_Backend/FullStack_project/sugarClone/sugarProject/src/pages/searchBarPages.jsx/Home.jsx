import SearchNavbar from "../../components/SearchNavbar";
import UpperNavbar from "../../components/UpperNavbar";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import BestSellerSlider from "../../components/BestSellerSlider";
import ExclusiveSlider from "../../components/ExclusiveSlider";
import ClubVelvetSlider from "../../components/ClubVelvetSlider";
import Footer from "../../components/Footer";


export default function Home(){
    return(
        <>
        <h1>welcome to the Home Page</h1>
        <UpperNavbar/>
        <SearchNavbar/>
        <Navbar/>
        <Slider/>
        <BestSellerSlider/>
        <ExclusiveSlider/>
        <ClubVelvetSlider/>
        <Footer/>
        
        
        </>
    )
}