import { Box, Collapse, Container, Flex, Grid, GridItem, Heading, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { VisaModal } from "./Modal";
import { vistos } from "./vistos";


export function VisaLanding() { 
   const [data, setData] = useState({})
   const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
   const title = <> Essa é a chance de ouro para morar em um  <b style={{color:'#4ca7a1', fontWeight:'300'}}> país de 1º Mundo </b> </>
   const ebookButtonText = <> <b> Clique aqui </b> para falar com a nossa equipe e solicitar acesso ao <b>Guia Essencial</b> para mudar para Portugal! </>

   function handleVisaDetails(visaItem) {
      setData(visaItem)
      onToggle()
   }

   return (
   <Flex w='100%' minH={['60vh','60vh','40vh']}>
      <Flex w='100%' p={4} alignItems={'center'} justifyContent='center'>
         <VStack 
         w={['100%','88%','88%','88%']} 
         p={[0,0,0,4]}
         spacing={12}
         >

            <Heading 
            w='100%' 
            textAlign={'center'} 
            fontWeight='300' 
            color='gray.50'
            >
               {title}
            </Heading>

            <Flex
            cursor={'pointer'} 
            p={4}
            borderRadius={8}
            bgGradient='linear(to-br, clubMaldivas, clubAqua)'
            boxShadow={'dark-lg'}
            textAlign={'center'}
            color='white'
            _hover={{bgGradient:'linear(to-br, white, whiteAlpha.900)', color:'clubAqua', transition:"300ms"}}
            >
               <Text
               fontWeight='400' 
               fontSize='1rem'
               >

               {ebookButtonText}
               </Text>
            </Flex>

            {/* <Flex border='1px solid white' justifyContent='center'
            alignItems={'flex-start'} flexDir={['column','column','column','row-reverse']} gap={2}>
               {isOpen?
               <VisaModal
                  isOpen={isOpen}
                  onClose={onClose}
                  data={data}
               />
               :
               <Grid templateColumns={'repeat(2, 1fr)'} gap={2}>
               {vistos.map( visaItem => {
                  return (
                     <Flex 
                     key={visaItem.id}
                     onClick={() => {handleVisaDetails(visaItem)}}
                     bgColor='clubDark'
                     bgImage={visaItem.backgroundSource}
                     bgPosition='center'
                     bgSize={'cover'}
                     _hover={{
                        opacity:1,
                        bgImage:'none',
                        bgColor:'clubMoss',
                        transition: '1000ms',
                        cursor: 'pointer'
                     }}
                     h={24}
                     p={4}
                     >
                           <Text 
                              w='100%'
                              my='auto'
                              
                              color='white'
                              fontWeight={400}
                              fontSize={'1rem'}
                           > 
                           {visaItem.name} 
                           </Text>
                     </Flex>
                  )
               })}
               </Grid>
               }
            </Flex> */}
            
         </VStack>
      </Flex>
   </Flex>
   )
}