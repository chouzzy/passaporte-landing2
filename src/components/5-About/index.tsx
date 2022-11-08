import { Container, Flex, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { AiOutlineCheck } from 'react-icons/ai'

const firstSessionData = {
   title:'Quem somos',
   history:
      <>
      <Text fontSize='0.9rem' fontWeight='300' lineHeight={1.5}>
         O Clube do Passaporte é um escritório migratório conceituado, com profissionais gabaritados, um espírito jovem e inovador. Acreditamos na desburocratização total dos processos para os nossos clientes, de modo a resolver as questões referentes à nacionalidade portuguesa de forma eficaz, precisa e transparente. Além disso, cuidamos dos processos de A a Z, com intuito de chegar ao resultado desejado rapidamente e sem qualquer trabalho para o cliente. <br></br> <br></br> Não obstante,  prezamos por sempre manter um canal de comunicação direto e aberto com o cliente com intuito de garantir segurança e tranquilidade  durante o  decorrer de nosso serviço.
      </Text>
      </>,
   missionTitle:'Missão',
   mission:<Text fontSize='0.9rem' fontWeight='300'>
      Ajudar o máximo de pessoas na busca de <b style={{color:'#4ca7a1'}}> novas oportunidades de vida </b>- tanto profissionais quanto pessoais - em solo português e europeu. 
      </Text>,
   valuesTitle:'Valores',
   values:<Text fontSize='0.9rem' fontWeight='300'>
      Inovação, eficiência, agilidade, transparência, foco no cliente e zelo pelos processos que estão sob nossa <b style={{color:'#4ca7a1'}}> responsabilidade. </b> 
      </Text>,
   list:[
   "Morar em qualquer país da União Europeia",
   "Trabalhar na Europa sem precisar de visto",
   "Passar a cidadania portuguesa para filhos, netos e demais descendentes",
   "Benefícios empresariais",
   "Descontos e até gratuidade para cursar o Ensino Superior na Europa",
   ]
}

export function About() {
   return (

      <Flex id='#quemSomos'w='100%' flexDir='column' py={[8,0,0,0]} px={[2,0,0,0]} color='gray.50'>
         {/* <Flex w='100%'>
            <Heading mx='auto' fontWeight='300' fontSize='1.6rem' color='clubAqua'> {firstSessionData.title} </Heading>
         </Flex> */}
      
         <Flex flexDir={['column','column','row', 'row']}  w='100%' alignItems='center' color='whiteAlpha.800'>

            <Flex flexDir={'column'} w='100%' textAlign='left' gap={2} p={[6,8,16]}>
               <Heading fontSize='1.6rem' fontWeight='300' color='clubAqua'>
                  {firstSessionData.title}
               </Heading> 
                  {firstSessionData.history}
               <Heading mt={4} fontSize='1.6rem' fontWeight='300' color='clubAqua'>
                  {firstSessionData.missionTitle}
               </Heading> 
                  {firstSessionData.mission}
               <Heading mt={4} fontSize='1.6rem' fontWeight='300' color='clubAqua'>
                  {firstSessionData.valuesTitle}
               </Heading> 
                  {firstSessionData.values}
            </Flex>
            
            <Flex w='100%'>
               <Image mx='auto' 
               bgGradient='linear(135deg, white, whiteAlpha.800)'
               boxShadow={"2xl"}
               p={4} borderRadius={24} maxW={'100%'} src='static/img/logo.png'/>
            </Flex>
         </Flex>
      </Flex>
   )
}