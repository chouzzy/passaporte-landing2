import { Container, Flex, VStack } from "@chakra-ui/react";
import { Link as RSlink } from 'react-scroll'
import { useEffect, useState } from "react";

import { OportunitiySession } from "./2-Session";
import { LifeQuality } from "./3-Session";
import { LifeQualityIndexes } from "./4-Session";
import { Hurry } from "./5-Session";
import { useRouter } from "next/router";
import { Feedbacks } from "./3-Feedbacks";


export function SubHomepage() {

   const [name, setName] = useState("")
   const [number, setNumber] = useState("")
   const [linkDisable, SetLinkDisable] = useState(true)
   const router = useRouter()

   useEffect(() => {
      if (name.length > 1 && number.length > 10) {
         SetLinkDisable(false)
      } else {
         SetLinkDisable(true)
      }
   }, [name, number])

   function RedirectContact(name, number) {

      if (typeof window !== "undefined") {
         router.push({
            pathname: "obrigado-whatsapp",
            query: {
               name: name,
               number: number
            }
         })
      }
      return
   }

   return (

      <>
         <Container maxW='100vw' bgPosition='center' bgSize='cover' p='0' m='0' centerContent bgGradient='gray.50' gap={4}>

            <OportunitiySession />
            <Feedbacks />
            <LifeQuality />
            <LifeQualityIndexes />


            {/* Botão com formulário para Whatsapp */}
            <Flex>
               <Flex
                  my={0}
                  w='100%'
                  p={6}
                  justifyContent='center'
                  alignItems='center'
               >
                  <VStack>
                     <RSlink to="#contato" spy={true} smooth={true} offset={0} duration={1500}>

                        <Flex
                           cursor={'pointer'}
                           px={12}
                           py={4}
                           fontWeight={'500'}
                           borderRadius={72}
                           bg='clubMaldivas'
                           textAlign='center'
                           color='white'
                           _hover={{ bg: 'blackAlpha.900', color: 'clubMaldivas', transition: '500ms', px: '10' }}
                        >
                           Clique para solicitar seu Ebook e saber como aproveitar essa oportunidade de ouro!
                        </Flex>
                     </RSlink>
                  </VStack>
               </Flex>
            </Flex>

            <Hurry />

            {/* Botão com formulário para Whatsapp */}
            <Flex>
               <Flex
                  my={0}
                  w='100%'
                  p={6}
                  justifyContent='center'
                  alignItems='center'
               >
                  <VStack>
                     <RSlink to="#contato" spy={true} smooth={true} offset={0} duration={1500}>
                        <Flex
                           cursor={'pointer'}
                           px={[6, 12, 12]}
                           py={4}
                           fontWeight={'500'}
                           borderRadius={72}
                           bg='clubMaldivas'
                           textAlign='center'
                           color='white'
                           _hover={{ bg: 'blackAlpha.900', color: 'clubMaldivas', transition: '500ms', px: '10' }}
                        >
                           Clique para solicitar seu Ebook e saber como aproveitar essa oportunidade de ouro!
                        </Flex>
                     </RSlink>
                  </VStack>
               </Flex>
            </Flex>


            {/* <FirstSession/>
            <SecondSession/>
            <ThirdSession/> */}
         </Container>
      </>
   )
}
