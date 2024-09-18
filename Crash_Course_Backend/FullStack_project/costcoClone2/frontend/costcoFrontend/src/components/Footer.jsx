import { HStack, VStack, Input, InputRightAddon, InputGroup, Image } from "@chakra-ui/react"
import { QuestionOutlineIcon, SearchIcon } from '@chakra-ui/icons'
import './footer.css'

export default function Footer() {
    return (
        <>
        
            <div className="footerDiv">
                <div className="footerFirstSec">
                    <HStack id="hstack">
                        <div className="footerSecDiv">
                            <VStack>
                                <p id="para">Customer Service</p>
                                <HStack>
                                    <QuestionOutlineIcon h={'100px'} /> <h5>Get Help</h5>
                                </HStack>
                            </VStack>

                        </div>
                        <div className="footerSecDiv">
                            <VStack>
                                <h3 className="heading">Find A Warehouse</h3>
                                <InputGroup>
                                    <Input className="inputGrp" type="text" placeholder="City, State or Zip" />
                                    <InputRightAddon className="inputGrp"><SearchIcon /></InputRightAddon>
                                </InputGroup>
                            </VStack>

                        </div>
                        <div className="footerSecDiv">
                            <VStack>
                                <h3 className="heading">Get Email Offers</h3>
                                <InputGroup>
                                    <Input className="inputGrp" type="text" placeholder="Enter Your Email" />
                                    <InputRightAddon className="inputGrp">Go</InputRightAddon>
                                </InputGroup>
                            </VStack>

                        </div>
                        <div className="footerSecDiv">
                            <VStack>
                                <h5 id='h5'>Follow Us</h5>
                                <HStack id="socialIcons">
                                    <Image src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-facebook.svg" />
                                    <Image src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-pinterest.svg" />
                                    <Image src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-instagram.svg" />

                                </HStack>
                            </VStack>

                        </div>
                        <div className="footerSecDiv">
                            <VStack>
                                <h4 className="H4">Get The Costco App</h4>
                                <Image className="img" src="https://mobilecontent.costco.com/live/resource/img/static-folder-app-icon/app-icon.png" />

                            </VStack>


                        </div>
                    </HStack>

                </div>

        <hr/>
        <div id="footersecContainer">
        <div className="footerSecCont">
            <h2 className="H2">About Us</h2>
            <p>Charitable Contributions</p>
            <p>Company Information</p>
            <p>Sustainability Commitment</p>
            <p>Investor Relations</p>
            <p>Careers</p>
            <p>Kirkland Signature</p>
            <p>Logo and Media Requests</p>
            <p>The Costco Connection</p>
            <p>Quick & Easy Recipe Videos</p>
            <p>Costco Blog</p>
            <p>Employee Site</p>
        </div>
        <div className="footerSecCont">
        <h2 className="H2">Membership</h2>
        <p>Join Now</p>
        <p>Member Privileges</p>
        <p>Executive Membership Terms</p>
        <p>Sign In or Register</p>
        <p>Credit Card</p>
        <br />
        <br />
        
        <h2>Vendors & Suppliers</h2>
        <p>Supply Chain Disclosure</p>
        <p>Ethics Hotline for Suppliers</p>
        <p>Supplier Inclusion</p>
        <p>Explore Our Brands</p>

        </div>
        <div className="footerSecCont">
        <h2 className="H2">Customer Service</h2>
        <p>Costco Shop Card Balance</p>
        <p>Order By Item Number</p>
        <p>Costco Technical & Warranty Servies</p>
        <p>Volume Sales: Export & Domestic</p>
        <p>Order Status</p>
        <p>Preventing Fraud</p>
        <p>Shippng</p>
        <p>Rebates</p>
        <p>Recalls & Product Notices</p>
        <p>Returns & Exchanges</p>
        <p>Returns Policy</p>
        <p>Accessibity</p>
        </div>
        <div className="footerSecCont">
        <h2 className="H2">Location Services</h2>
        <p>Find a warehouse</p>
        <p>Locations Coming Soon</p>
        <p>Hours and Holiday Closures</p>
        <p>Gasoline</p>
        <p>Hearing Aid Center</p>
        <p>Optical</p>
        <p>Special Events</p>
        <p>CostcoGrocery</p>
        <p>Grocery by Instacart</p>
        </div>

        </div>

        <div id="footerLastCont">
        <p>Site Map</p>
        <p>Terms & Conditions</p>
        <p>Your Privacy Rights</p>
        <p>CA Notice</p>
        <p>Cookie Settings</p>
        <p>
            <HStack>
            <Image className="iconImg" src="https://mobilecontent.costco.com/live/resource/img/static-us-landing-pages/icon-privacy-choices.svg"/>
           
           <p>Your Privacy choices</p>

            </HStack>
           
        </p>
        <p>Consumer Health Data</p>
        <p>Feedback</p>
        </div>
        <hr />
        <p className="lastP">© 1998 — 2024 Costco Wholesale Corporation. All rights reserved.</p>


            </div>
        </>
    )
}