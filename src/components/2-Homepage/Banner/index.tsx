import { Flex, Heading, Text } from "@chakra-ui/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export function Banner() { 
   return (
      <Flex w='100%' h='100%'>
         <Flex maxW={'100%'} h='100%' zIndex='0'>
            <Heading color='white'>
            Essa é a chance de ouro para brasileiros irem morar em um país de primeiro mundo
            </Heading>
         </Flex>
      </Flex>
   )
}