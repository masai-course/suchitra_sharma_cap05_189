// import Header from '../components/Header'
// import Navbar from './components/Navbar'
// import Advertisement from './components/Advertisement'
// import Slider from './components/Slider'
// import SliderSponsorProduct from './components/SliderSponsorProduct'
// import Productsbar from './components/Productsbar'
// import Paragraph from './components/Paragraph'
// import Footer from './components/Footer'
import Header from './Header'
import Navbar from './Navbar'
import Advertisement from './Advertisement'
import Slider from './Slider'
import Productsbar from './Productsbar'
import SliderSponsorProduct from './SliderSponsorProduct'
import SponsorProducts from './SponsorProducts'
import Paragraph from './Paragraph'
import Footer from './Footer'
import Location from './Location'


export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Location/>
            <Advertisement />
            <Slider />
            <Productsbar />
            <SliderSponsorProduct />
            <SponsorProducts/>
            <Paragraph />
            <Footer />




        </>
    )
}