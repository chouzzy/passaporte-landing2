import { Box, Collapse, Container, Flex, FormControl, Grid, GridItem, Heading, Input, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";

import { OportunitiySession } from "./2-Session";
import { LifeQuality } from "./3-Session";
import { LifeQualityIndexes } from "./4-Session";
import { Namidia } from "./5-Namidia";
import { Hurry } from "./5-Session";
import { useRouter } from "next/router";


export function SubHomepage() {

   const [name, setName] = useState("")
   const [number, setNumber] = useState("")
   const [linkDisable, SetLinkDisable] = useState(true)
   const router = useRouter()

   useEffect(() => {
       if (name.length > 1 && number.length > 10) {
           SetLinkDisable(false)
       } else {
           SetLinkDisable(true)
       }
   }, [name, number])

   function RedirectContact(name, number) {

      if (typeof window !== "undefined") {
         router.push({
            pathname: "obrigado-whatsapp",
            query: {
               name: name,
               number: number
            }
         })
      }
      return
   }

   return (

      <>
         <Container maxW='100vw' bgPosition='center' bgSize='cover' p='0' m='0' centerContent bgGradient='gray.50' gap={4}>

            <OportunitiySession />
            <LifeQuality />
            <LifeQualityIndexes />


            {/* Botão com formulário para Whatsapp */}
            <Popover>
               <PopoverTrigger>
                  <Flex>
                     <Flex
                        my={0}
                        w='100%'
                        p={6}
                        justifyContent='center'
                        alignItems='center'
                     >
                        <VStack
                        >
                           <Flex
                              cursor={'pointer'}
                              px={12}
                              py={4}
                              fontWeight={'500'}
                              borderRadius={72}
                              bg='clubMaldivas'
                              textAlign='center'
                              color='white'
                              _hover={{ bg: 'blackAlpha.900', color: 'clubMaldivas', transition: '500ms', px: '10' }}
                           >
                              Clique aqui para falar com a nossa equipe e saber mais sobre essa oportunidade de ouro!
                           </Flex>
                        </VStack>
                     </Flex>
                  </Flex>
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

                           {
                              linkDisable == true ?
                                 <Link
                                    onClick={() => { RedirectContact(name, number) }}
                                    pointerEvents='none'
                                    target="_blank"
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
                                 :
                                 <Link
                                    onClick={() => { RedirectContact(name, number) }}
                                    pointerEvents='auto'
                                    target="_blank"
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
                           }
                        </VStack>

                     </PopoverBody>
                  </PopoverContent>
               </Portal>
            </Popover>






            <Hurry />

            {/* Botão com formulário para Whatsapp */}
            <Popover>
               <PopoverTrigger>
                  <Flex>
                     <Flex
                        my={0}
                        w='100%'
                        p={6}
                        justifyContent='center'
                        alignItems='center'
                     >
                        <VStack
                        >
                           <Flex
                              cursor={'pointer'}
                              px={[6, 12, 12]}
                              py={4}
                              fontWeight={'500'}
                              borderRadius={72}
                              bg='clubMaldivas'
                              textAlign='center'
                              color='white'
                              _hover={{ bg: 'blackAlpha.900', color: 'clubMaldivas', transition: '500ms', px: '10' }}
                           >
                              Clique aqui para falar com a nossa equipe e saber mais sobre essa oportunidade de ouro!
                           </Flex>
                        </VStack>
                     </Flex>
                  </Flex>
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

                           {
                              linkDisable == true ?
                                 <Link
                                    onClick={() => { RedirectContact(name, number) }}
                                    pointerEvents='none'
                                    target="_blank"
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
                                 :
                                 <Link
                                    onClick={() => { RedirectContact(name, number) }}
                                    pointerEvents='auto'
                                    target="_blank"
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
                           }
                        </VStack>

                     </PopoverBody>
                  </PopoverContent>
               </Portal>
            </Popover>


            {/* <FirstSession/>
            <SecondSession/>
            <ThirdSession/> */}
         </Container>
      </>
   )
}
