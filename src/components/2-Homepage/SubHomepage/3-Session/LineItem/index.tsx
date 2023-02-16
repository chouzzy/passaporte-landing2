import { Flex, Grid, Text, VStack } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

interface LineItemProps {
   image:string,
   title:string,
   info:React.ReactNode
}

export function LineItem({image, title, info}:LineItemProps) {
   return (
      <Flex
      mx='auto'
      minH={['72vh','80vh','80vh','80vh']}
      borderRadius={1}

      bgImage={image}
      bgSize={'cover'}
      bgRepeat='no-repeat'
      bgPosition='center'

      position='relative'
      justifyContent='center'
      alignItems='center'
      >

         <Grid 
         h='100%' 
         w={'100.3%'} 
         position='absolute' 
         color='gray.50'
         justifyContent={'center'}
         alignItems='center'
         >
            <VStack
            maxW={['90vw','80vw','72vw','60vw']}
            p={6}
            bg='whiteAlpha.700'
            borderRadius={2}
            textAlign='left'
            justifyContent='center'
            gap={8}
            >

               <Flex
               bg='clubMoss'
               borderRadius={2}
               p={3}
               fontSize={['1rem','1.1rem','1.2rem']}
               fontWeight='300'
               color='gray.50'
               >
                  {title}
               </Flex>
               
               <Flex 
               
               fontSize={['1rem','1.1rem','1.2rem']} 
               fontWeight='400'
               flexDir={'column'}
               gap={2}
               color='black'
               lineHeight={1.6}
               >
                  {info}
               </Flex>
            </VStack>
         </Grid>

      </Flex>
   )
}

