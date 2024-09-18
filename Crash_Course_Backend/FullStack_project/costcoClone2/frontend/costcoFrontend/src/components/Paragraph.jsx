import { Image } from "@chakra-ui/react"
import './paragraph.css'

export default function Paragraph(){
    return(
        <>
        <Image src="https://mobilecontent.costco.com/staging/resource/img/static-us-landing-pages/d_224w09064_rom_banner_april.jpg"/>
        <div className="paraDiv">
            <h2>Quick & Easy Grocery Delivery!</h2>
            <p>
            With today’s busy lifestyles, it’s difficult to find time to go grocery shopping.
             Luckily, Costco offers you the convenience of having groceries delivered directly to your doorstep, with two new delivery options! 
             You can choose 2-day delivery with Costco Grocery, or same-day delivery with Costco powered by Instacart. 
            Checkout our FAQ page to learn more about the Costco Grocery Delivery Program.
            </p>
            <p>

            Costco makes online grocery shopping a breeze! Our products can be searched by brand, dietary needs, number of servings, and more! 
            We even have dairy free, gluten free, and kosher foods.And if you’re looking for something specific, 
            like Kirkland Signature products or organic groceries, Costco lets you customize your search to easily find what you need.
            </p>


        </div>
    <hr />
        </>
    )
}