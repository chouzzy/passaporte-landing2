import { Button, Container, Flex, VStack } from "@chakra-ui/react";
import { OportunitiySession } from "./2-Session";
import { LifeQuality } from "./3-Session";
import { LifeQualityIndexes } from "./4-Session";
import { Namidia } from "./5-Namidia";
import { Hurry } from "./5-Session";


export function SubHomepage() {
   return (
      
      <>
         <Container maxW='100vw' bgPosition='center' bgSize='cover' p='0' m='0' centerContent bgGradient='gray.50' gap={12}>

            <OportunitiySession/>
            <LifeQuality/>
            <LifeQualityIndexes/>


            <Flex 
            my={0}
            w='100%'
            p={6}
            justifyContent='center'
            alignItems='center'
            >
               <VStack
               >
                  <Flex
                  cursor={'pointer'}
                  p={8}
                  fontWeight={'500'}
                  borderRadius={72}
                  bg='clubMaldivas'
                  color='white'
                  _hover={{bg:'blackAlpha.900', color:'clubMaldivas', transition:'500ms', px:'10'}}
                  >
                   Clique aqui para falar com a nossa equipe e solicitar acesso ao Guia Essencial para mudar para Portugal!
                  </Flex>
               </VStack>
            </Flex>


            <Hurry/>


            <Flex 
            my={0}
            w='100%'
            p={6}
            justifyContent='center'
            alignItems='center'
            >
               <VStack
               >
                  <Flex
                  cursor={'pointer'}
                  p={8}
                  fontWeight={'500'}
                  borderRadius={72}
                  bg='clubMaldivas'
                  color='white'
                  _hover={{bg:'blackAlpha.900', color:'clubMaldivas', transition:'500ms', px:'10'}}
                  >
                  Clique aqui para falar com a nossa equipe e solicitar acesso ao Guia Essencial para mudar para Portugal
                  </Flex>
               </VStack>
            </Flex>
            {/* <FirstSession/>
            <SecondSession/>
            <ThirdSession/> */}
         </Container> 
      </>
   )
}