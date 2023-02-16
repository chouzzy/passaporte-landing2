import { Flex, Heading, Image, Link, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react"
import { BsDashLg } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { firstSessionData } from "./Data";


export function OportunitiySession() {

   const slides = useBreakpointValue({ base: 1, sm: 1, md: 1, lg: 1, xl: 1 })

   return (
      <Flex
      mt={12} 
      w='100%' 
      flexDir={['column','column','row', 'row']} 
      alignItems='center'
      >

         <Flex 
         w='100%' 
         flexDir={'column'} 
         textAlign='left' 
         gap={8} p={[4,8,16]} 
         borderRight={['','','','1px solid #00000033']}
         >
            <Heading 
            fontSize={['2rem','2.4rem','2.4rem']} color='clubAqua' fontWeight='300'
            >
               {firstSessionData.title}
            </Heading>
            <Text
            fontSize={['1.1rem','1.2rem','1.2rem']}
            >
               {firstSessionData.subtitle}
            </Text>
            
         </Flex>
         
         <Flex 
         minW={['100vw','100vw','50vw','50vw']}
         p={[4,2,0,0]}
         justifyContent='center'
         alignItems={'center'}
         flexDir='column'
         >
            <Link 
            href='https://blogs.oglobo.globo.com/portugal-giro/post/falta-de-mao-de-obra-chega-nivel-critico-e-portugal-precisa-de-milhares-de-trabalhadores.html'
            target={'_blank'}
            >
            <Image
            border={'1px solid #00000044'}
            _hover={{border:'1px solid #1c928b', transition:'400ms'}}
            src={'static/img/noticias/oportunidade_de_ouro_3.png'} 
            alt='Noticia O Globo "Falta de mão de obra chega ca nível 
            crítico e Portugal precisa de milhares de trabalhadores'
            />
            </Link>

            <Flex
            fontSize='0.7rem'
            color={'gray.700'}
            >
               Créditos: https://blogs.oglobo.globo.com/ - Gian Amato
            </Flex>

         </Flex>
      </Flex>
   )
}