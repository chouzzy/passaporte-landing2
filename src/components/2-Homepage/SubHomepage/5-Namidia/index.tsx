import { Container, Flex, Heading, Image, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";

const mediaItems = [
    'Busca pela cidadania portuguesa fica mais sofisticada e encontra milhares de brasileiros com direito',
    'Descendentes de judeus sefarditas correm por nacionalidade em Portugal antes de nova regra',
    'Com regras mais flexíveis, aumenta a busca de brasileiros por dupla cidadania portuguesa',
    'Dobra número de brasileiros descendentes de judeus atrás de cidadania portuguesa, diz agência',
    'Análise: É possível sair do precipício',
    'Quanto custa se mudar para fazer home office em Portugal',
    'Descendentes de judeus sefarditas correm por nacionalidade em Portugal antes de nova regra',
    'Com regras mais flexíveis, aumenta a busca de brasileiros por dupla cidadania portuguesa',

]

const links = [
    'https://blogs.oglobo.globo.com/portugal-giro/post/busca-pela-cidadania-portuguesa-fica-mais-sofisticada-e-encontra-milhares-de-brasileiros-com-direito.html',
    'https://www1.folha.uol.com.br/mundo/2022/05/descendentes-de-judeus-sefarditas-correm-por-nacionalidade-em-portugal-antes-de-nova-regra.shtml?fbclid=IwAR1AMGOqO4xLEG5Pj2spTiL32J4LoVDp2ztMDxl51OY8TSQY7YZBbexrrt0',
    'https://m.cbn.globoradio.globo.com/media/audio/377242/com-regras-mais-flexiveis-aumenta-busca-de-brasile.htm',
    'https://www1.folha.uol.com.br/colunas/monicabergamo/2022/01/dobra-numero-de-brasileiros-descendentes-de-judeus-atras-de-cidadania-portuguesa-diz-agencia.shtml',
    'https://www.correiobraziliense.com.br/opiniao/2022/07/5019484-analise-e-possivel-sair-do-precipicio.html',
    'https://www.terra.com.br/economia/dinheiro-em-dia/quanto-custa-se-mudar-para-fazer-home-office-em-portugal,097c851c7a214821b83a3df67f3df2146ftt2pt6.html',
    'https://br.financas.yahoo.com/noticias/descendentes-judeus-sefarditas-correm-por-221300594.html',
    'https://www.gazetasp.com.br/mundo/como-se-mudar-para-portugal-um-guia-para-quem-busca-cidadania/1111712/',
]

const namidiaTitle =  <Heading mx='auto' fontWeight='300' fontSize='1.6rem' color='gray.50' > 
            Na mídia
            </Heading>

const namidiaSubtitle = <Text mx='auto' maxW={'80vw'} fontWeight='300' fontSize='1.1rem' color='gray.50'> 
            Nos últimos anos, fomos reconhecidos e referenciados pelos <b style={{color:'#1c928b'}}> grandes veículos brasileiros de imprensa</b>, fruto de um trabalho sério, transparente e com <b style={{color:'#1c928b'}}>qualidade.</b>
            </Text>

const lines = [
    {id:0,image: 'static/img/oglobo.jpg', text:mediaItems[0], newsLink:links[0]},
    {id:1,image: 'static/img/folha.png', text:mediaItems[1], newsLink:links[1]},
    {id:2,image: 'static/img/cbn.png', text:mediaItems[2], newsLink:links[2]},
    {id:3,image: 'static/img/folha.png', text:mediaItems[3], newsLink:links[3]},
    {id:4,image: 'static/img/correiobrasiliense.jpg', text:mediaItems[4], newsLink:links[4]},
    {id:5,image: 'static/img/terra.jpg', text:mediaItems[5], newsLink:links[5]},
    {id:6,image: 'static/img/yahoo.png', text:mediaItems[6], newsLink:links[6]},
    {id:7,image: 'static/img/gazetasp.png', text:mediaItems[7], newsLink:links[7]},
 ]

 
 export function Namidia() {
    const slides = useBreakpointValue({ base: 1, sm: 2, md: 4, lg: 5, xl: 5 })
    
    return (
      <Flex id='#namidia'w='100%' flexDir='column' py={[8,0,0,8]} px={[2,0,0,0]} color='gray.900'>
         <Flex w='100%' flexDir={'column'} gap={8}>
            {namidiaTitle}
            {namidiaSubtitle}
         </Flex>
      
         <Flex flexDir={['column','column','row', 'row']} zIndex={0} w='100%' alignItems='center' color='whiteAlpha.800'>
                <Flex maxW={'100%'} p={12}>
                    <Swiper
                    spaceBetween={12}
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
                                <LineItem  image={item.image} text={item.text} newsLink={item.newsLink} />
                            </SwiperSlide>
                        )
                    })}
                    
                    </Swiper>
                </Flex>
         </Flex>
      </Flex>
   )
}