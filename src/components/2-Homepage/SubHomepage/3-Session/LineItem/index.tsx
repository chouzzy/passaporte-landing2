import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

interface LineItemProps {
   image:string,
   text:string,
   subText:string
}

export function LineItem({image, text, subText}:LineItemProps) {
   return (
               <Flex mx='auto' bgImage={image} bgRepeat='no-repeat' bgSize={'cover'} bgPosition='center'
               h={'380px'} border='1px solid #343434' position='relative' justifyContent='center' alignItems='center' >

                  <Grid borderRadius={0} w={'100.3%'} bg='#020101de' color='gray.50' bottom='0' position='absolute' p={4}>
                     <Text textAlign='center' fontSize={['1.2rem','1.3rem','1.3rem','1.6rem']} fontWeight='300'>
                        {text}
                     </Text>
                     <Text textAlign='center' fontSize={['0.9rem','0.9rem','0.9rem','0.9rem']} fontWeight='300'>
                        {subText}
                     </Text>
                  </Grid>

               </Flex>
   )
}

