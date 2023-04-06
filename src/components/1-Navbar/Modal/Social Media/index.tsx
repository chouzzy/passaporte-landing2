import { Link, Flex, Text, VStack, FormControl, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

interface mediaProps {
   tag?: string,
   mediaLink: string,
   mediaColor: string
   icon: ReactElement
}

export function SocialMedia({ mediaLink, mediaColor, icon, tag }: mediaProps) {

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
            <Popover>
               <PopoverTrigger>
                  <Flex flexDir={'row'} alignItems='center' gap={2} color={mediaColor} _hover={{ color: 'clubAqua', transition: '360ms' }} textAlign='center'>
                     <Text fontSize='1.2rem' mt={2.5}>
                        Fale conosco!
                     </Text>
                     {icon}
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
         </>
      )
   }
