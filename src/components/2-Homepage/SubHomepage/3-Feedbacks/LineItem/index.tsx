import { Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Quotes } from "phosphor-react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

interface LineItemProps {
   image: string,
   text: string,
   subText: ReactJSXElement
}

export function LineItem({ image, text, subText }: LineItemProps) {
   return (
      <Flex
         mx='auto'
         alignItems='center'
         justifyContent='center'
         borderRadius={6}
         minH={[480, 360, 480, 500, 500]}
      >

         <Grid w={'100.3%'} h='100%' p={4} color='gray.50'>

            <VStack
               my='auto'
               textAlign='left'
            >

               <Quotes size={36} weight="regular" color='#4ca7a1' />
               <Flex
                  fontSize={'0.9rem'}
                  fontWeight='400'
                  flexDir='column'
                  color='gray.700'
                  bg='white'
                  justifyContent={'center'}
                  alignItems='center'
                  p={8}
                  borderRadius={6}
               >
                  {text}
                  <Flex fontSize={['1rem']} m='auto' textAlign={'center'} fontWeight='400' color='#4ca7a1'>
                     {subText}
                  </Flex>
               </Flex>
            </VStack>
         </Grid>

      </Flex>
   )
}

