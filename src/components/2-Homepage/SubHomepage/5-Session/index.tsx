import { Box, Flex, FormControl, Heading, Image, Input, Link, List, ListIcon, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import { Link as RSlink } from 'react-scroll'
import { BsDashLg, BsWhatsapp } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { qualityLifeIndexData } from "./Data";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export function Hurry() {
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
