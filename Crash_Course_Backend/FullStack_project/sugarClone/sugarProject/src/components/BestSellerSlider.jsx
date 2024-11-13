import { Container, HStack, Heading, Image, VStack, Box } from "@chakra-ui/react"

export default function BestSellerSlider() {
    return (
        <>
            <Container height="400px" bg={"black"} maxW="120%" marginTop={20}>
                <VStack>
                    <Heading>
                        ---------BEST SELLER----------
                    </Heading>
                    <HStack >
                        <Box bg={"white"} height={"320px"} width={"200px"}>
                            <VStack>
                                <Image width="220px" height="200px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMatteAttackTransferproofLipstickPDPimagesFinal1.jpg%3Fv%3D1714511152&w=256&q=75" />
                                <p style={{
                                    color: "black", fontSize: "12px", margin: "4px"

                                }}>Matte Attack Transferproof Lispstick</p>
                                <p style={{ color: "gray", fontSize: "12px" }}>15 Shades</p>
                                <h4>RS. 749</h4>
                            </VStack>

                        </Box>

                        <Image width="200px" height="320px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F370205924-01_1aef1c2e-8e41-42a2-89c5-70dab3b356ac.jpg%3Fv%3D1698238462&w=256&q=75" />
                        <Image width="200px" height="320px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_a7f69324-313b-4777-8a29-0878241e7136.jpg%3Fv%3D1714491449&w=256&q=75" />
                        <Image width="200px" height="320px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FDreamCoverSpf15MattifyingCompactPDPImagesparent1stcard.jpg%3Fv%3D1680623338&w=256&q=75" />
                    </HStack>


                </VStack>


            </Container>
        </>
    )
}