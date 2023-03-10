import { Flex, FormControl, Heading, Image, Input, Link, List, ListIcon, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import { BsDashLg, BsWhatsapp } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { firstSessionData } from "./Data";
import { useState } from "react";


export function OportunitiySession() {

   const [name, setName] = useState("")
   const [number, setNumber] = useState("")
   const slides = useBreakpointValue({ base: 1, sm: 1, md: 1, lg: 1, xl: 1 })

   return (
      <Flex
         mt={12}
         w='100%'
         flexDir={['column', 'column', 'row', 'row']}
         alignItems='center'
      >

         <Flex
            w='100%'
            flexDir={'column'}
            textAlign='left'
            gap={8} p={[4, 8, 16]}
            borderRight={['', '', '', '1px solid #00000033']}
         >
            <Heading
               fontSize={['2rem', '2.4rem', '2.4rem']} color='clubAqua' fontWeight='300'
            >
               {firstSessionData.title}
            </Heading>
            <Flex
            display='inline'
               fontSize={['1.1rem', '1.2rem', '1.2rem']}
            >
               {firstSessionData.subtitle}

               <Popover>
                  <PopoverTrigger>
                     <Text fontSize={['1.1rem', '1.2rem', '1.2rem']} display='inline' pl={1} _hover={{ textDecoration: 'none', cursor: 'pointer', color: 'clubMoss', transition: '500ms' }} color='#1c928b' >
                     Clique aqui para saber como aproveitar essa <b>oportunidade!</b>
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
            </Flex>
         </Flex>

         <Flex
            minW={['100vw', '100vw', '50vw', '50vw']}
            p={[4, 2, 0, 0]}
            justifyContent='center'
            alignItems={'center'}
            flexDir='column'
         >
            <Image
               border={'1px solid #00000044'}
               src={'static/img/noticias/oportunidade_de_ouro_3.png'}
               alt='Noticia O Globo "Falta de mão de obra chega ca nível 
            crítico e Portugal precisa de milhares de trabalhadores'
            />

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