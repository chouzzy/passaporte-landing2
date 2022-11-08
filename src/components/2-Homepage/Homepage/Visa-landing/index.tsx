import { Box, Collapse, Container, Flex, GridItem, Heading, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
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

   function handleVisaDetails(visaItem) {
      setData(visaItem)
      onToggle()
   }

   return (
   <Flex w='100%' py={12}>
      <Flex w='100%' p={4} alignItems={'flex-start'} justifyContent='center'>
         <VStack w={['100%','88%','88%','88%']} spacing={12} p={[0,0,0,4]}>

            <Heading fontWeight='300' w='100%' textAlign={'center'} color='gray.50'> 
               Tire o seu visto agora mesmo com o <b style={{color:'#4ca7a1', fontWeight:'300'}}> Clube do Passaporte! </b>
            </Heading>

            <Flex w='100%' flexDir={['column','column','column','row-reverse']} gap={2}>
               <Flex maxWidth={['100vw','100vw','100vw','40vw']}>
                  <Swiper
                     spaceBetween={4}
                     slidesPerView={1}
                     speed={1000}
                     navigation
                     autoplay={{
                        delay:5000
                     }}
                     simulateTouch={false}
                     loop
                     // onSlideChange={() => console.log('slide change')}
                  >

                     {vistos.map( item => {
                        return (
                           <SwiperSlide key={item[0].id}>
                              <Text h={0} ml={4000} color='clubDark'>.</Text>

                              <SimpleGrid 
                                 columns={1}
                                 gap={4}
                                 
                              >
                                 
                                 {item.map( visaItem => {
                                    return (
                                       <GridItem 
                                       key={visaItem.id}
                                       onClick={() => {handleVisaDetails(visaItem)}}
                                       alignItems= 'center'
                                       justifyContent= 'center'
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
                                       h={[32,32,32,24]}
                                       >
                                          <VStack spacing={6} p={8}>
                                             <Text w='100%'
                                                color='white'
                                                fontWeight={400}
                                                fontSize='1rem'
                                             > 
                                             {visaItem.name} 
                                             </Text>
                                             {/* <Text w='100%'
                                                color='white'
                                                fontWeight={300}
                                                fontSize='0.9rem'
                                             > 
                                             {visaItem.description} 
                                             </Text> */}
                                          </VStack>
                                       </GridItem>
                                    )
                                 })}

                              </SimpleGrid>
                           </SwiperSlide>
                        )
                     })}
                  
                  </Swiper>
               </Flex>
               <VisaModal
                  isOpen={isOpen}
                  onClose={onClose}
                  data={data}
               />
            </Flex>
         </VStack>
      </Flex>
   </Flex>
   )
}