import { Flex, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";


export function Map() {
    
   const iframeHeight = useBreakpointValue({ base: '400px', sm: '254px', md: '480px', lg: '480px', xl: '400' })
   const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false, xl: false })

    return (
        <Flex w='100%' justifyContent={'space-between'} py={[8, 8, 16, 12]} px={[8, 8, 16, 16]} flexDir='column' >

            {isMobile?
            ''
                :
            <Flex alignItems={'center'} justifyContent='center' p={8} >
                <Flex bg='whiteAlpha.900' alignItems={'center'} justifyContent='center' p={8} borderRadius={8}>
                    <Image src='static/img/logo-square.png' maxW={64} alt='Logo do clube do passaporte' />
                </Flex>
            </Flex>
            }


            <Flex flexDir='column' gap={4}>
                <iframe style={{ outline: '3px solid #4ca7a1 ' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.949187259931!2d-46.6922740853838!3d-23.57026836780559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce570b2e36ff85%3A0x509c26d9fd87396f!2sAv.%20Brg.%20Faria%20Lima%2C%201485%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-002!5e0!3m2!1spt-BR!2sbr!4v1665495720920!5m2!1spt-BR!2sbr" width="100%" height={iframeHeight} loading="lazy" />
                <VStack>
                    <Text>Avenida Faria Lima 1485 - Torre Norte, 2º andar - Pinheiros, São Paulo - SP, 01452-002</Text>
                </VStack>
            </Flex>
        </Flex>

    )
}