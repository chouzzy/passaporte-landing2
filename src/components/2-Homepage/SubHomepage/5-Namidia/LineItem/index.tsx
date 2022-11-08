import { Flex, Grid, Image, Link, Text, VStack } from "@chakra-ui/react";
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
   text:any,
   newsLink:any
}

export function LineItem({image, text, newsLink}:LineItemProps) {
   return (
               <Flex mx='auto' bgRepeat='no-repeat' bgSize={'contain'} bgColor='gray.50' bgPosition='center' borderRadius={1}
               minH={['420px','360px','360px','400px']} position='relative' justifyContent='center' alignItems='center'>

                  <Grid w={'100.3%'} h='100%' position='absolute' p={4} color='gray.50'>
                     <VStack textAlign='left'>

                        <Link href={newsLink} target="_blank">
                           <Image src={image}/>
                        </Link>
                        
                        <Link href={newsLink} target="_blank">
                           <Text _hover={{color:'clubMaldivas'}} fontSize={'1.2rem'} fontWeight='600' color='gray.900' lineHeight={1.1} borderRadius={1}>
                              {text}
                           </Text>
                        </Link>

                     </VStack>
                  </Grid>

               </Flex>
   )
}

