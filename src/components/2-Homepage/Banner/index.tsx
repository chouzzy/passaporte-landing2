import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { SlideItem } from "./SlideItem";
export function Banner() { 
   // useEffect( () => alert('Site em construção 🚜'),[])
 
   const titles = [
      <Flex key='0' display='inline'> 
         <Flex display='inline'>O futuro na Europa nunca esteve tão </Flex> 
         <Flex display='inline' color='clubMaldivas'> próximo de você. </Flex> 
      </Flex>  ,
      <Flex key='1' display='inline'>
         Está preparado para
      <Flex display='inline' color='clubMaldivas'> mudar de vida? </Flex> 
      </Flex>,
      <Flex key='2' display='inline' color='clubMaldivas'>
         Você em Portugal
      <Flex display='inline' color='white'> com praticidade e agilidade </Flex> 
      </Flex>,
   ]
   const buttonNames = ['Descubra se você é elegível', 'Clique e saiba mais!', 'Clique e descubra!' ]
   const buttonTags = ['#contato', '#contato', '#contato' ]

   const lines = [
      {id:1,image: 'static/img/clubmedia/bg1.png', text:titles[0], subText:buttonNames[0]},
      {id:2,image: 'static/img/clubmedia/bg2.png', text:titles[1], subText:buttonNames[1]},
      {id:3,image: 'static/img/clubmedia/bg3.png', text:titles[2], subText:buttonNames[2]},
   ]

   return (
      <Flex w='100%' h='100%'>
         <Flex maxW={'100%'} h='100%' zIndex='0'>
            <Swiper
               spaceBetween={0}
               slidesPerView={1}
               navigation
               autoplay
               loop
               // onSlideChange={() => console.log('slide change')}
            >

               {lines.map( item => {
                  return (
                     <SwiperSlide key={item.id}>
                        <Text h={0} ml={4000} color='clubDark'>.</Text>
                        <SlideItem key={item.id} image={item.image} text={item.text} subText={item.subText} />
                     </SwiperSlide>
                  )
               })}
            
            </Swiper>
         </Flex>
      </Flex>
   )
}