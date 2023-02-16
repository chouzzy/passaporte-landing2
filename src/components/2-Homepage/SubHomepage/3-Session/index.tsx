import { Container, Flex, Heading, Image, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";
import { qualityLifeData, lines } from "./Data/QualityLifeData";




 
 export function LifeQuality() {
    
    return (
      <Flex id='#qualityLifeData' 
      w='100%' 
      bg='blackAlpha.900'
      flexDir='column' 
      gap={8} px={0} pt={6} 
      color='gray.50'
      >

         <Flex 
         w='100%'
         gap={6}
         flexDir='column'
         alignItems='center' 
         zIndex={0} 
         color='whiteAlpha.800'
         >
            
            <Flex w='100%'>
                <Heading 
                mx='auto' 
                textAlign={'center'}
                fontWeight='300' fontSize='1.65rem' 
                color='gray.50' 
                > 
                    {qualityLifeData.title}
                </Heading>
            </Flex>

            <Flex maxW={'100%'}>
                <Swiper
                spaceBetween={24}
                slidesPerView={1}
                navigation
                autoplay
                loop
                // onSlideChange={() => console.log('slide change')}
                >

                {lines.map( item => {
                    return (
                    <SwiperSlide key={item.id}>
                            <Text h={0} ml={4000} color='clubDark'>.</Text>
                            <LineItem  
                            image={item.image} 
                            title={item.title} 
                            info={item.info} 
                            />
                    </SwiperSlide>
                    )
                })}
                
                </Swiper>
            </Flex>
         </Flex>
      </Flex>
   )
}