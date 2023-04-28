import { Flex, FormControl, Heading, Input, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";


export function VisaLanding() {

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

   const [data, setData] = useState({})
   const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
   const title = <> Essa é a chance de ouro para brasileiros irem  morar em um  <b style={{ color: '#4ca7a1', fontWeight: '300' }}> país de 1º Mundo </b> </>
   const ebookButtonText = <> <b> Clique </b> para receber o Ebook Essencial para ir p/ Portugal </>

   function handleVisaDetails(visaItem) {
      setData(visaItem)
      onToggle()
   }

   return (
      <Flex w='100%' minH={['60vh', '60vh', '40vh']}>
         <Flex w='100%' p={4} alignItems={'center'} justifyContent='center'>
            <VStack
               w={['100%', '88%', '88%', '88%']}
               p={[0, 0, 0, 4]}
               spacing={[24, 12, 12]}
            >

               <Heading
                  w='100%'
                  textAlign={'center'}
                  fontWeight='300'
                  fontSize={['2rem', '2.6rem', '2.6rem', '3.2rem']}
                  color='gray.50'
               >
                  {title}
               </Heading>


               <Popover>
                  <PopoverTrigger>
                     <Flex>
                        <Flex
                           cursor={'pointer'}
                           p={[2, 2, 3]}
                           borderRadius={4}
                           bgGradient='linear(to-br, clubMaldivas, clubAqua)'
                           boxShadow={'dark-lg'}
                           textAlign={'center'}
                           color='white'
                           _hover={{ bgGradient: 'linear(to-br, white, whiteAlpha.900)', color: 'clubAqua', transition: "300ms" }}
                        >
                           <Text
                              fontWeight='300'
                              fontSize='1.2rem'
                           >

                              {ebookButtonText}
                           </Text>
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
