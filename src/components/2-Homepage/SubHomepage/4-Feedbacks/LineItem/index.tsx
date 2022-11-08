import { Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Quotes } from "phosphor-react";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

interface LineItemProps {
   image:string,
   text:string,
   subText:string
}

export function LineItem({image, text, subText}:LineItemProps) {
   return (
               <Flex mx='auto' bgImage={image} bgRepeat='no-repeat' bgSize={'contain'} bgColor='clubDark' bgPosition='center' borderRadius={6}
               h={[480,360,480,500,360]} position='relative' justifyContent='center' alignItems='center'>

                  <Grid w={'100.3%'} h='100%' position='absolute' p={4} color='gray.50'>
                     <VStack textAlign='left'>
                        <Quotes size={36} weight="regular" color='#4ca7a1'/>
                        <Text fontSize={'0.9rem'} fontWeight='400' color='gray.50' bg='#1c928b50'  p={2} borderRadius={6}>
                           {text}
                        </Text>
                        <Text fontSize={['1rem']} fontWeight='400'>
                           {subText}
                        </Text>
                     </VStack>
                  </Grid>

               </Flex>
   )
}

