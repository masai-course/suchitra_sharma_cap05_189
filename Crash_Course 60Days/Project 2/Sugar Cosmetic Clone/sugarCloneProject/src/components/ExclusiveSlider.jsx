import { Container, HStack, Heading, Image, VStack, Box } from "@chakra-ui/react"

export default function ExclusiveSlider(){
    return (
        <>
        <Container height="400px" bg={"lightpink"} maxW="120%" marginTop={20}>
                <VStack>
                    <Heading>
                        ---------EXCLUSIVE RANGE LAUNCH----------
                    </Heading>
                    <HStack gap={4}>
                        <Box bg={"white"} height={"320px"} width={"200px"}>
                            <VStack>
                                <Image width="220px" height="200px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F599125845-01.jpg%3Fv%3D1711208074&w=256&q=75" />
                                <p style={{
                                    color: "black", fontSize: "12px", margin: "4px"

                                }}>Matte Attack Transferproof Lispstick</p>
                                <p style={{ color: "gray", fontSize: "12px" }}>15 Shades</p>
                                <h4>RS. 749</h4>
                            </VStack>

                        </Box>

                        <Image width="200px" height="320px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent-01.jpg%3Fv%3D1691768624&w=256&q=75" />
                        <Image width="200px" height="320px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_0d43e9a7-af34-4fb9-a43b-eda429d7139a.jpg%3Fv%3D1711208170&w=256&q=75" />
                        <Image width="200px" height="320px" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F526522653-01.jpg%3Fv%3D1691768822&w=256&q=75" />
                    </HStack>


                </VStack>


            </Container>

        
        
        </>
    )
}