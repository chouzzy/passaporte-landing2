import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import { useEffect, useState } from "react";
import {Link as Slink} from 'react-scroll'

export function Banner(BannerProps) { 
   // useEffect( () => alert('Site em construção 🚜'),[])
   
   const [number, setNumber] = useState(0)
   useEffect(() => {
      if (number > 2) {
         setTitle(titles[0])
         setButtonName(buttonNames[0])
         setButtonTag(buttonTags[0])
         BannerProps.bgState(BannerProps.bgBanner[0])
         setNumber(0)
      }
      else if (number < 0) {
         setTitle(titles[2])
         setButtonName(buttonNames[2])
         setButtonTag(buttonTags[2])
         BannerProps.bgState(BannerProps.bgBanner[2])
         setNumber(2)
      } else {
         setTitle(titles[number])
         setButtonName(buttonNames[number])
         setButtonTag(buttonTags[number])
         BannerProps.bgState(BannerProps.bgBanner[number])
      }
   }, [number])
 
   const titles = [
      <Flex key='0' display='inline'> 
         <Flex display='inline'>O futuro na Europa nunca esteve tão </Flex> 
         <Flex display='inline' color='clubMaldivas'> próximo de você. </Flex> 
      </Flex>  ,
      <Flex key='1' display='inline'>
         Está preparado para
      <Flex display='inline' color='clubMaldivas'> mudar de vida? </Flex> 
      </Flex>,
      <Flex key='2' display='inline' color='clubMaldivas'>
         Você em Portugal
      <Flex display='inline' color='white'> com praticidade e agilidade </Flex> 
      </Flex>,
   ]
   const buttonNames = ['Descubra se você é elegível', 'Clique e saiba mais!', 'Clique e descubra!' ]
   const buttonTags = ['#contato', '#contato', '#contato' ]

   const [title, setTitle] = useState(titles[0])
   const [buttonName, setButtonName] = useState(buttonNames[0])
   const [buttonTag, setButtonTag] = useState(buttonTags[0])

   return (
      <Flex w='100%' my='auto'>
         <HStack w='100%' color='whiteAlpha.700' p={[0,4,8,8]} letterSpacing={1}>
            <Flex _hover={{color: "clubAqua", transition:'300ms'}} cursor='pointer' onClick={() => setNumber(number - 1)} fontSize='2rem'> <BiLeftArrow/></Flex>

            <Flex w='100%' h='400px' textAlign='center' justifyContent='center'>
               <VStack w='100%' spacing={8}  justifyContent='center'>
                  <Heading maxW={['88vw','72vw','64vw','64vw']} fontWeight='500' mx='auto' color='white' textShadow='1px 1px 1px #00000060' fontSize={['1.5rem','1.7rem','2rem','2rem']}>
                     {title}
                  </Heading>
                  <Slink  to={buttonTag} spy={true} smooth={true} offset={-60} duration={500}>
                     <Button bg='clubAqua' fontWeight='400' color='white' borderRadius={'full'} _hover={{bg:'clubMoss'}}> 
                     {buttonName} 
                     </Button>
                  </Slink>
               </VStack>
            </Flex>

            <Flex _hover={{color: "clubAqua", transition:'300ms'}} cursor='pointer' onClick={() => setNumber(number + 1)} fontSize='2rem'> <BiRightArrow/></Flex>
         </HStack>
      </Flex>
   )
}