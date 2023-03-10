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
      w='100%'
      minH='110vh'
      borderRadius={1}
      boxShadow='2px 2px 4px #000000'

      bgImage={image}
      bgSize={'cover'}
      bgRepeat='no-repeat'
      bgPosition='center'
      bgColor='clubDarkBlue'
      justifyContent='center'
      alignItems='center'
      >

         <Grid 
         h='100%' 
         w={'100%'} 
         color='gray.50'
         justifyContent={'center'}
         alignItems='center'
         >
            <VStack
            maxW={['90vw','80vw','72vw','60vw']}
            p={6}
            bg='#0f1d27ee'
            borderRadius={24}
            textAlign='left'
            justifyContent='center'
            gap={8}
            >

               <Flex
               borderRadius={1}
               fontSize='2rem'
               fontWeight='300'
               textAlign={'center'}
               color='clubMaldivas'
               >
                  {title}
               </Flex>
               
               <Flex 
               
               fontSize={['1.2rem','1.1rem','1.2rem']} 
               fontWeight='400'
               flexDir={'column'}
               textAlign={['justify','justify','left']}
               gap={2}
               color='white'
               lineHeight={1.6}
               >
                  {info}
               </Flex>
            </VStack>
         </Grid>

      </Flex>
   )
}

