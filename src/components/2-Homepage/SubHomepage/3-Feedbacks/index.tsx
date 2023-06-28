import { Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { Link as RSlink } from 'react-scroll'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ebookButtonText, feedbackTitle, lines } from "./feedbacksData";


export function Feedbacks() {

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

   const slides = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 3 })

   return (
      <Flex
         id='#feedbacks'
         w='100%'
         bgImage='static/img/airplane-bg.png'
         bgRepeat={'no-repeat'}
         bgSize={'cover'}
         bgPos={'center'}
         bgColor='#000000fa'
         flexDir='column'
         justifyContent={'flex-start'}
         alignItems={'start'}
         py={12}
         px={[8, 8, 8, 12]}
         color='gray.50'>
         <Flex w='100%'>
            {feedbackTitle}
         </Flex>

         <Flex
            zIndex={0}
            w='100%'
            alignItems='center'
            flexDir='column'
            color='whiteAlpha.900'
         >
            <Flex maxW={'100%'}>
               <Swiper
                  spaceBetween={24}
                  slidesPerView={slides}
                  navigation
                  autoplay
                  loop
               // onSlideChange={() => console.log('slide change')}
               >

                  {lines.map(item => {
                     return (
                        <SwiperSlide key={item.id}>
                           <Text h={0} ml={4000} color='clubDark'>.</Text>
                           <LineItem image={item.image} text={item.text} subText={item.subText} />
                        </SwiperSlide>
                     )
                  })}

               </Swiper>
            </Flex>
            <Flex>
               <Flex
                  cursor={'pointer'}
                  p={[2, 2, 3]}
                  borderRadius={4}
                  bgGradient='linear(to-br, clubMaldivas, clubAqua)'
                  textAlign={'center'}
                  color='white'
                  _hover={{ bgGradient: 'linear(to-br, white, whiteAlpha.900)', color: 'clubAqua', transition: "300ms" }}
               >
                  <RSlink to="#contato" spy={true} smooth={true} offset={0} duration={1500}>
                     <Flex
                        fontWeight='300'
                        fontSize='1.2rem'
                     >

                        {ebookButtonText}
                     </Flex>
                  </RSlink>
               </Flex>
            </Flex>


         </Flex>

      </Flex>
   )
}




{/* <Popover>
<PopoverTrigger>

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
</Popover> */}