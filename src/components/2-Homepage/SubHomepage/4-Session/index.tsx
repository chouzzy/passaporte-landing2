import { Box, Flex, Heading, Image, Link, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react"
import { BsDashLg } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { qualityLifeIndexData } from "./Data";


export function LifeQualityIndexes() {

   return (
      <Flex
      w='100%'
      flexDir={['column','column','row-reverse', 'row-reverse']} 
      alignItems='center'
      gap={[0,6,0]}
      >

         <Flex 
         w='100%' 
         flexDir={'column'} 
         textAlign={['justify','center','left']}
         gap={8} p={[4,8,16]}
         borderLeft={['','','','1px solid #00000033']}
         >
            <Heading 
            fontSize='2rem' textAlign={['center','center','left']} color='clubAqua' fontWeight='300'
            >
               {qualityLifeIndexData.title}
            </Heading>
            <Text
            fontSize={['1rem','1rem','1rem']}
            >
               {qualityLifeIndexData.subtitle}
            </Text>
            <Box 
            fontSize={['1rem','1rem','1rem']}
            textAlign='left'
            >
               {qualityLifeIndexData.info}
            </Box>
            
         </Flex>
         
         <Flex 
         minW='50%'
         p={[8,2,0,0]}
         justifyContent='center'
         alignItems={'center'}
         flexDir='column'
         >
            <Image
            maxW={['','72vw','36vw']}
            border={'1px solid #00000044'}
            _hover={{border:'1px solid #1c928b', transition:'400ms'}}
            src={'static/img/noticias/qualidade_de_vida.png'}
            alt='Noticia O Globo "Falta de mão de obra chega ca nível 
            crítico e Portugal precisa de milhares de trabalhadores'
            />

            <Flex
            fontSize='0.5rem'
            color={'gray.700'}
            >
               Créditos: https://g1.globo.com/ - France Presse
            </Flex>
            
         </Flex>
      </Flex>
   )
}