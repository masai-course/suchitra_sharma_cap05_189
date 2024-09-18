
import { useState, useEffect } from "react"
import { Image } from "@chakra-ui/react"
import './productsbar.css'

export default function Productsbar() {
    const images = [
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=705876-847__1&recipeName=350",
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=221663-847__1&recipeName=350",
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1699355-847__1&recipeName=350",
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1826983-847__1&recipeName=350"
    ]
    const amount=[
        "$7.20 OFF",
        "$5 OFF",
        "$10 OFF",
        "$12 OFF"
    ]

// console.log(images[0])

    return (
        <div className="imageDiv">
                    
            {images.map((image, index) => (
                     <div key={index}>
                        <div className="amountDiv">{amount[index]}</div>
                     <Image src={image} className="image"/>
                        <div className="downDiv">products on sale</div>
                 </div>
             )
          )
            }
            

            {/* <img src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=705876-847__1&recipeName=350"/> */}


        </div>
    )
}