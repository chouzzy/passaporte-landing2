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
      bg='#0f1d27'
      flexDir='column'  px={0} pt={6} 
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
            
            <Flex 
            w='100%' 
            my={4}
            p={4}
            >
                <Heading 
                mx='auto'
                textAlign={'center'}
                fontWeight='300' fontSize='2rem' 
                color='white' 
                
                > 
                    {qualityLifeData.title}
                </Heading>
            </Flex>

            <Flex w={'100%'} mx='auto' flexDir='column' gap={2} boxShadow='1px 1px 1px #000000'>

                {lines.map( item => {
                    return (
                        <>
                            <LineItem
                            image={item.image} 
                            title={item.title} 
                            info={item.info} 
                            />
                        </>
                    )
                })}
                
            </Flex>
         </Flex>
      </Flex>
   )
}