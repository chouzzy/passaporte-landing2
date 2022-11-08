import { Button, Flex, Grid, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import {Link as Slink} from 'react-scroll'
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

interface LineItemProps {
   image:string,
   text:any,
   subText:any
}

export function SlideItem({image, text, subText}:LineItemProps) {
   return (
      <>
               <Flex mx='auto' bgImage={image} bgRepeat='no-repeat' bgSize={'cover'} bgPosition='center'
               h='100vh' border='1px solid #343434' position='relative' justifyContent='center' alignItems='center' >

               <Flex w='100%' my='auto'>
                  <HStack w='100%' color='whiteAlpha.700' p={[0,4,8,8]} letterSpacing={1}>

                     <Flex w='100%' h='400px' textAlign='center' justifyContent='center'>
                        <VStack w='100%' spacing={8}  justifyContent='center'>
                           <Heading maxW={['88vw','72vw','64vw','64vw']} fontWeight='500' mx='auto' color='white' textShadow='1px 1px 1px #00000060' fontSize={['1.5rem','1.7rem','2rem','2rem']}>
                              {text}
                           </Heading>
                           <Slink to='#contato' spy={true} smooth={true} offset={-60} duration={500}>
                              <Button bg='clubAqua' fontWeight='400' color='white' borderRadius={'full'} _hover={{bg:'clubMoss'}}> 
                              {subText}
                              </Button>
                           </Slink>
                        </VStack>
                     </Flex>
                  </HStack>
               </Flex>
               </Flex>

         </>
   )
}

