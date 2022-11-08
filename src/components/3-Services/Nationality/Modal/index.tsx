import { Box, Collapse, Flex, GridItem, Link, Text, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

interface LineItemProps {
   LineImage:string,
   LineName:string,
   columns:number[],
   lineData:{
      title:any,
      text:any,
      serviceImage:any
   }
   changePage: (lineData:any) => void
}

const lines = [
   {image:'static/img/son.jpg', name:'Filhos de Português', cols:[4,4,2,2], 
   lineData:{mode:'nationality', title: 'Filhos de Português', text: 
   <Flex display='inline'>Caso o seu pai ou sua mãe tenham a cidadania portuguesa, pois um dos dois é nato de Portugal, ou porque adquiriu a cidadania por atribuição durante a vida, por conta da ancestralidade com um português (por exemplo, se o seu pai/mãe é neto(a) ou filho(a) de português), você também tem o direito à cidadania portuguesa. <br></br> <br></br>  Os filhos de portugueses, quando seus progenitores tiveram suas cidadanias emitidas no momento de nascimento ou de forma posterior, por conta da ancestralidade próxima portuguesa, têm, de forma incontroversa, o direito à cidadania portuguesa. Para tanto, é claro, existe a necessidade de emitir e apostilar uma série de documentos ainda no Brasil. Além disso, é importante realizar alguns procedimentos em Portugal, como a transcrição de casamento de seus pais para, assim, realizar o pedido de sua cidadania.Esses procedimentos podem parecer um pouco complicados à primeira vista, mas nós do Clube do Passaporte contamos com especialistas com vasta experiência, que ajudam você nessa importante conquista da cidadania portuguesa. <br></br><br></br> Ficou interessado, 
   <Text display='inline' color='clubMaldivas' _hover={{cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>entre em contato conosco!</Slink> </Text>
   </Flex>, 
   serviceImage:'static/img/son.jpg'}},

   {image:'static/img/vo.jpg', name:'Netos de português', cols:[4,4,2,2], 
   lineData:{mode:'nationality', title: 'Netos de português', text: 
   <Flex display='inline'>Caso um de seus quatro avós seja português, você também tem o direito à cidadania de forma direta, ou seja, podemos pular a geração de seu progenitor e realizar a cidadania diretamente para você!<br></br> <br></br>  Os netos de portugueses também têm o direito à cidadania portuguesa. Para tanto, é necessário angariar uma série de documentos familiares que vinculam você ao seu avô(ó) português(a), bem como realizar todos os procedimentos solicitados pelo governo português, dentro dos moldes estipulados, para realização do pedido com segurança e tranquilidade do deferimento. <br></br><br></br> Caso você tenha um dos seus avós português, 
   <Text display='inline' color='clubMaldivas' _hover={{cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>entre em contato conosco para saber mais!</Slink> </Text>
   </Flex>, 
   serviceImage:'static/img/vo.jpg'}},

   {image:'static/img/bisavo.jpg', name:'Bisnetos de português', cols:[4,4,2,2], 
   lineData:{mode:'nationality', title: 'Bisnetos de português', text: 
   <Flex display='inline'>A lei portuguesa não abrange de forma direta a possibilidade de aquisição da cidadania portuguesa para bisnetos de portugueses Contudo, esse procedimento é possível realizando os dois processos, primeiro para o neto do português e, uma vez seu pai/mãe se tornando português, logo na sequência você, como filho, pode realizar o processo e conseguir a cidadania!<br></br> <br></br>Você é bisneto de português?
   <Text display='inline' color='clubMaldivas' _hover={{cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> Clique aqui.</Slink> </Text>
   </Flex>, 
   serviceImage:'static/img/bisavo.jpg'}},
   
   {image:'static/img/couple.jpg', name:'Casamento ou união estável', cols:[4,4,2,2], 
   lineData:{mode:'nationality', title: 'Cidadania portuguesa pelo casamento ou pela união estável', text: 
   <Flex display='inline'>Caso você seja casado com um português(a) por mais de 6 anos, você também tem o direito à cidadania portuguesa. A notícia fica ainda melhor caso vocês tenham um filho pequeno, pois o tempo diminui pela metade e, com 3 anos de casamento, você já pode solicitar a sua cidadania!<br></br> <br></br>
   Entre em contato conosco e 
   <Text display='inline' color='clubMaldivas' _hover={{cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> saiba mais.</Slink> </Text>
   </Flex>, 
   serviceImage:'static/img/couple.jpg'}},
]

export function Modal({LineImage, LineName, columns, lineData, changePage}:LineItemProps) { 
   const { isOpen, onToggle } = useDisclosure({
      defaultIsOpen:true
   })

   function passLineData(lineData) {
      changePage(lineData)
   }
   return (
         <>
            <GridItem onClick={onToggle} _hover={{border:'1px solid #4ca7a1', transition:'400ms', boxShadow:'dark-lg', color:'gray.300'}} cursor='pointer' colSpan={columns} mx='auto' borderRadius={2} w='100%' 
            boxShadow='md' bgImage={LineImage} bgSize='cover' minH={96}
            bgPosition='center' position='relative' color='white'>

               <Box bg='clubAqua'  position='absolute' w='100%' left='0' right='0' letterSpacing={1.5} fontWeight='600'
               margin='auto' bottom='0'  fontSize='1.2rem' p={2}>
                  <Text align='center' textTransform='uppercase'>
                     {LineName}
                  </Text>
                  <Text align='center' fontSize={'1rem'} fontWeight={400} letterSpacing={0} textAlign='center'>
                     (Escolha uma das opções acima)
                  </Text>
               </Box>

            
            <Collapse in={isOpen} animateOpacity>
            <VStack justifyContent='center' minH={80} bg='#34343470' spacing={6}>
               {lines.map(item => {
                  return (
                  <Slink to={'#Home'} key={item.name}>
                     <Box
                        w={60}
                        mx='auto'
                        onClick={() => {passLineData(item.lineData)}}
                        color='gray.50'
                        bg='clubAqua'
                        rounded='md'
                        shadow='md'
                        p={2}
                        borderRadius={1}
                        _hover={{bg:'clubDark', transition:'400ms'}}
                     >
                        <Text> {item.name} </Text>
                     </Box>
                  </Slink>
                  )
               })}
            </VStack>
            </Collapse>
            </GridItem>
         </>
   )
}