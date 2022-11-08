import { Flex, Heading, Image, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react"
import { BsDashLg } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";


export function ThirdSession() {

   const firstSessionData = {
      title:'Como conseguir a Cidadania Portuguesa?',
      subtitle:<> O Clube do Passaporte conta com uma equipe de advogados e genealogistas especializados em pesquisar todas as suas raízes históricas judaicas e conseguir sua cidadania portuguesa. <br></br> Confira as etapas abaixo:</>,
      list:[
      "Estudo Genealógico",
      "Aprovação comunitária em Portugal",
      "Aprovação do Governo Português",
      "Obtenção do passaporte e da cidadania",
      ]}

   const lines = [
      {id:1,image: 'static/img/gen.jpg', text:'1º - Estudo genealógico', subText:'Após o estudo, você receberá um livro completo com centenas de páginas descrevendo e comprovando a sua relação parental com um ancestral judeu.'},
      {id:2,image: 'static/img/community.jpg', text:'2º - Aprovação comunitária em Portugal', subText:'Subtitulo'},
      {id:3,image: 'static/img/portugal.jpg', text:'3º - Aprovação do Governo Português', subText:'Subtitulo'},
      {id:4,image: 'static/img/passport.jpg', text:'4º - Obtenção do passaporte e da cidadania', subText:'Subtitulo'},
   ]

   const slides = useBreakpointValue({ base: 1, sm: 1, md: 1, lg: 1, xl: 1 })

   return (
      <Flex mt={12} flexDir={['column','column','row', 'row']}  w='100%' alignItems='center'>

         <Flex flexDir={'column'} w='100%' textAlign='left' gap={8} p={[6,8,12]} color='whiteAlpha.800'>
            <Heading fontSize='1.8rem' fontWeight='300' color='clubAqua'>
               {firstSessionData.title}
            </Heading>
            <Text>
               {firstSessionData.subtitle}
            </Text>

            <List spacing={3} textAlign='left'>
               {firstSessionData.list.map( item => {
                  return (
                     <ListItem key={item} fontWeight='300'> <ListIcon fontSize='1.5rem' as={BsDashLg} color='clubAqua' /> <Text display='inline'> {item} </Text> </ListItem>
                  )
               })}
            </List>
            
         </Flex>

         <Flex maxW={['100vw','100vw','50vw','50vw']} p={[4]} zIndex='0'>
            <Swiper
               spaceBetween={0}
               slidesPerView={slides}
               navigation
               autoplay
               loop
               // onSlideChange={() => console.log('slide change')}
            >

               {lines.map( item => {
                  return (
                     <SwiperSlide key={item.id}>
                        <Text h={0} ml={4000} color='clubDark'>.</Text>
                        <LineItem  image={item.image} text={item.text} subText={item.subText} />
                     </SwiperSlide>
                  )
               })}
            
            </Swiper>
         </Flex>
      </Flex>
   )
}