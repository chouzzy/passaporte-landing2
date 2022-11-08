import { Flex, Heading, Text, VStack } from "@chakra-ui/react";


export function SecondSession() {

   const textData = {
      title:'Muitos brasileiros não sabem que têm direito à nacionalidade portuguesa!',
      subtitle:'Durante a Inquisição, que perdurou por mais de 300 anos em Portugal, muitas pessoas foram forçadas a abandonarem sua fé e suas crenças para evitar perseguições, torturas e até execuções, levando milhares de pessoas à conversão forçada ao Cristianismo e à adoção sobrenomes típicos portugueses. Assim, como forma reparação histórica, em 2015, foi aprovado o Decreto-Lei 30-A/2015, propiciando a todos os descendentes de perseguidos no período o direito à cidadania portuguesa. São muitos brasileiros elegíveis, mesmo que a ancestralidade nunca tenha sido conhecida!'
   }
   return (
      <Flex w='100%' flexDir='column' color='whiteAlpha.800' justifyContent='center' alignItems='center'> 
         <VStack spacing={4} px={[4,12,12,12,32]} textAlign={['left','center','center','center']}>
            <Heading fontSize='1.8rem' fontWeight='300' color='clubAqua'>
               {textData.title}
            </Heading>
            <Text fontWeight='300'>
               {textData.subtitle}
            </Text>
         </VStack>
      </Flex>
   )
}