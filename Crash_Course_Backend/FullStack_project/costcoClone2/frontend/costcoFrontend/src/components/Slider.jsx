import { useState } from "react"
import { Image } from "@chakra-ui/react"
import './slider.css'


export default function  Slider() {
    // Store the array of images directly inside the component
    const images = [
        "https://mobilecontent.costco.com/live/resource/img/24w12159/d_24w12159_hero_sept_mvm_tires_michelin.jpg",
        " https://mobilecontent.costco.com/live/resource/img/20240902_HolidayTravel_Imgs/20240902_Europe_Com_US_ComHero_D.jpg",
        "https://mobilecontent.costco.com/live/resource/img/25w01033/d_25w01033_hero_best_of_the_hunt.jpg",
        "https://mobilecontent.costco.com/live/resource/img/25w01041/d_25w01041_hero_gopro.jpg",
    
    
    ]
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="slider">
        <button onClick={prevSlide} className="left-arrow">
        &#10094;
        </button>
        <div className="image-wrapper">
          <img src={images[currentIndex]} alt="slider-img" />
        </div>
        <button onClick={nextSlide} className="right-arrow">
        &#10095;
        </button>
      </div>
    );
  };