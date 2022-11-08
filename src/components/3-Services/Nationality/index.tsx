import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack, Link } from "@chakra-ui/react";
import { LineItem } from "./LineItem";
import { Modal } from "./Modal";
import {Link as Slink} from 'react-scroll'

interface NationalityProps {
   changePage: (lineData:any) => void
}

export function Nationality({changePage}: NationalityProps) { 

   const lines = [
   {image:'static/img/sefarad.jpg', name:'Sefaradita', cols:[4,4,2,2], 
   lineData:{mode:'nationality',title: 'Sefaradita', text: 
   <Flex display='inline'>
      A partir do final do século XV a Península Ibérica foi palco de uma perseguição sem precedentes em face de povos não-cristãos, em especial os judeus, que culminou em milhares de pessoas cruelmente mortas e outras milhares forçosamente convertidas ao cristianismo. Centenas de anos depois, em 2015, Portugal aprovou uma lei que permite a concessão de cidadania portuguesa para todos os descendentes de judeus perseguidos durante esse período, chamado de Inquisição. E como isso pode afetar você? Estima-se que mais da metade da população brasileira possui alguma ascendência de perseguidos pela Inquisição, mesmo que nunca tenham ouvido falar sobre tal ascendência ou sobre qualquer parentesco com judeus, o que pode incluir pessoas com sobrenomes comuns à população brasileira, como Nóbrega, Rodrigues, Oliveira, Batista, Albuquerque e centenas de outros!
      <br></br> <br></br>

      A Inquisição perdurou por mais de 300 anos em Portugal, trazendo efeitos observáveis até os dias de hoje. Milhões de pessoas foram forçadas a abandonarem a sua fé e suas crenças, para evitarem perseguições, torturas e até execuções, levando milhares de pessoas à conversão forçada ao Cristianismo e à adoção de sobrenomes que são típicos da população brasileira nos dias atuais. Como forma de reparação histórica, em 2015 foi aprovado o Decreto-Lei 30-A/2015, propiciando o direito à cidadania portuguesa a todos os descendentes de judeus perseguidos neste período, os chamados judeus sefaraditas. Assim, milhões de brasileiros são elegíveis, mesmo que a ancestralidade nunca tenha sido conhecida.
      <br></br> <br></br>

      O processo exige que uma comunidade judaica reconhecida pelo governo português certifique a ascendência sefaradita do requerente. Para tanto, o Clube do Passaporte conta com um time de especialistas em genealogia, que trabalham na elaboração de um relatório completo, fazendo a conexão com o ancestral perseguido no período da Inquisição. O relatório possui centenas de páginas, descrevendo e comprovando a sua ancestralidade com um judeu sefaradita, que pode chegar até dezenas de gerações. Este estudo é uma verdadeira herança familiar fantástica é submetido para análise e certificação da comunidade judaica, levando sempre em consideração a vasta experiência que temos na submissão de relatórios para estas instituições, com centenas de clientes já certificados.
      <br></br> <br></br>

      De forma prévia ao início do relatório e quaisquer submissões, fazemos uma análise preliminar, chamada de análise de viabilidade. A partir do fornecimento de alguns documentos e informações, nossa equipe de especialistas faz uma análise criteriosa, de modo a garantir a maior assertividade possível em termos de ascendência sefaradita e de aprovação da comunidade judaica. É por esta razão que temos orgulho de ostentar 100% de aprovações e certificações na comunidade judaica!
      <br></br> <br></br>

      Nós tratamos de tudo para você, até o final do processo, quando o cliente recebe o seu assento de nascimento português, equivalente à cidadania portuguesa e pode usufruir de todos os benefícios de ser um cidadão europeu! 
      <br></br> <br></br>

      A lei que concede o direito à cidadania portuguesa para descendentes de sefaraditas exige que o solicitante tenha provas de conexão com Portugal. Porém, não se preocupe, pois o Clube do Passaporte orienta o cliente acerca da melhor maneira de conseguir essas provas de conexão e obter a sua cidadania.
      <br></br> <br></br>

      Por fim, caso você seja praticante da religião judaica atualmente e com ascendência de países do norte da África e do Oriente Médio, como Líbano, Síria, Turquia, entre outros, você também tem direito à cidadania portuguesa, havendo algumas especificidades no processo, que também são tratadas diretamente com o nosso time especializado!
      <br></br> <br></br>

      Ficou interessado? Quer aproveitar essa chance de conseguir a cidadania portuguesa e ainda fazer incríveis descobertas sobre a história da sua família por dezenas de gerações?
   <Text display='inline' color='clubMaldivas' _hover={{cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> Entre em contato conosco e saiba mais. </Slink> </Text>
   </Flex>, 
   serviceImage:'static/img/sefarad.jpg'}},

   {image:'static/img/passport.jpg', name:'Via Direta', cols:[4,4,2,2], 
   lineData:{mode:'nationality',title: 'Título 2 - What is Lorem Ipsum?', text: 'texto 2 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-2.jpg'}},
]
   const textData = {
      title:<Flex display='inline'> Nacionalidade e <Flex display='inline' color='clubMaldivas'>Cidadania</Flex></Flex>,
      subtitle:
      <Flex display='inline' mx='auto'> Conte conosco para
      <Flex display='inline' color='clubMaldivas'> abrir as portas </Flex>
      de Portugal e da Europa para você, sua família e seus descendentes!
      </Flex>
   }

   return (
      <>
      
      <Flex
      id='#nationality'
      w='100%'
      fontFamily='Heebo'
      bgRepeat='repeat-x'
      flexDir="column"
      justifyContent='center'
      py={8}
      >
         <Heading fontWeight='300' textAlign='center' mt={4} mb={2} w='100%' textTransform='uppercase'>
            {textData.title}
         </Heading>
         <Flex fontWeight='400' textAlign='center' mb={4} w='100%'>
            {textData.subtitle}
         </Flex>

         
         <SimpleGrid
         textAlign='center'
         columns={4}
         p={[4,4,4,12]}
         gap={[4,4,8,12]}
         >
            <LineItem key={lines[0].name} changePage={changePage} LineImage={lines[0].image} LineName={lines[0].name} lineData={lines[0].lineData} columns={lines[0].cols}/>

            <Modal key={lines[1].name} changePage={changePage} LineImage={lines[1].image} LineName={lines[1].name} lineData={lines[1].lineData} columns={lines[1].cols}/>
         </SimpleGrid>

      </Flex>
      </>
   )
}