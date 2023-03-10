import { Box, Flex, FormControl, Heading, Image, Input, Link, List, ListIcon, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import { BsDashLg, BsWhatsapp } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { qualityLifeIndexData } from "./Data";
import { useState } from "react";


export function Hurry() {

   const [name, setName] = useState("")
   const [number, setNumber] = useState("")

   return (
      <Flex
         w='100%'
         flexDir={['column', 'column', 'row', 'row']}
         alignItems='center'
         gap={[6, 6, 0]}
      >

         <Flex
            w='100%'
            flexDir={'column'}
            textAlign='left'
            gap={8} p={[4, 8, 16]}
            borderRight={['', '', '', '1px solid #00000033']}
         >
            <Heading
               fontSize={['1.6rem', '2rem', '2rem']} color='clubAqua' fontWeight='300'
            >
               {qualityLifeIndexData.title}
            </Heading>
            <Text
               fontSize={['1rem', '1rem', '1rem']}
            >
               {qualityLifeIndexData.subtitle}
            </Text>
            <Box
               fontSize={['1rem', '1rem', '1rem']}
            >
               {qualityLifeIndexData.info}
               <Popover>
                  <PopoverTrigger>
                     <Text display='inline' pl={1} _hover={{ textDecoration: 'none', cursor:'pointer', color: 'clubMoss', transition:'500ms' }} color='#1c928b' >
                        Basta clicar aqui, que você poderá falar com a nossa equipe e solicitar o acesso a esse ebook <b>gratuitamente!</b>
                     </Text>
                  </PopoverTrigger>

                  <Portal>
                     <PopoverContent bg='#0f1d27' border='none' p={2} m={2} borderRadius={2}>
                        <PopoverArrow bg='#0f1d27' border='none' />
                        <PopoverCloseButton color='white' fontSize='0.9rem' p={6} _hover={{ color: 'clubMaldivas' }} />
                        <PopoverBody>

                           <VStack spacing={3}>

                              <Flex color='white' fontWeight={400}>
                                 Por favor, preencha as seguintes informações:
                              </Flex>

                              <FormControl isRequired>
                                 <Input type='name' onChange={(e) => { setName(`${e.target.value}`) }} my={1} variant='outline' bg='white' placeholder='Nome' />
                                 <Input type='number' onChange={(e) => { setNumber(`${e.target.value}`) }} my={1} variant='outline' bg='white' placeholder='DDD + número, ex: 11999998888' />
                              </FormControl>

                              <Link
                                 href={`https://wa.me/5511930003573?text=Olá, tudo bem? Meu nome é ${name} e meu telefone é ${number}. Acessei o site do Clube do Passaporte e gostaria de falar com um atendente.`} target="_blank"
                                 _hover={{ textDecoration: 'none' }}>
                                 <Flex
                                    bg='#25D366'
                                    _hover={{ bg: 'clubMaldivas' }}
                                    borderRadius={2}
                                    gap={3}
                                    p={2}
                                    boxShadow='2px 2px 1px #000000bb'
                                 >
                                    <Flex color='white'>Falar conosco </Flex>
                                    <BsWhatsapp fontSize={'1.4rem'} color='white' />
                                 </Flex>
                              </Link>
                           </VStack>

                        </PopoverBody>
                     </PopoverContent>
                  </Portal>
               </Popover>
            </Box>

         </Flex>

         <Flex
            minW='50%'
            p={[4, 2, 0, 0]}
            justifyContent='center'
            alignItems={'center'}
            flexDir='column'
         >
            <Image
               maxW={['', '72vw', '40vw']}
               border={'1px solid #00000044'}
               src={'static/img/noticias/hurry.png'}
               alt='Noticia O Globo "Falta de mão de obra chega ca nível 
            crítico e Portugal precisa de milhares de trabalhadores'
            />

            <Flex
               fontSize='0.5rem'
               color={'gray.700'}
            >
               Créditos: https://www.jornaldenegocios.pt/ - Catarina Almeida Pereira
            </Flex>

         </Flex>
      </Flex>
   )
}