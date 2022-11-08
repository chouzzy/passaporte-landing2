import { Flex, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { AiOutlineCheck } from 'react-icons/ai'

const firstSessionData = {
   title:'Veja portas se abrirem para você e sua família com a Cidadania Portuguesa',
   list:[
   "Morar em qualquer país da União Europeia",
   "Trabalhar na Europa sem precisar de visto",
   "Passar a cidadania portuguesa para filhos, netos e demais descendentes",
   "Benefícios empresariais",
   "Descontos e até gratuidade para cursar o Ensino Superior na Europa",
   ]
}

export function FirstSession() {
   return (
      <Flex  flexDir={['column','column','row', 'row']}  w='100%' alignItems='center'>

         <Flex flexDir={'column'} w='100%' textAlign='left' gap={8} p={[6,8,12]} color='whiteAlpha.800'>
            <Heading fontSize='1.8rem' fontWeight='300' color='clubAqua'>
               {firstSessionData.title}
            </Heading> 

            <List spacing={3} textAlign='left'>
               {firstSessionData.list.map( item => {
                  return (
                     <ListItem key={item} fontWeight='300'> <ListIcon fontSize='1.5rem' as={AiOutlineCheck} color='green.500' /> <Text display='inline'> {item} </Text> </ListItem>
                  )
               })}
            </List>
            
         </Flex>
         <Flex w='100%' p={[4,8,12]}>
            <Image mx='auto' maxW={['','80%','80%','80%']} src='static/img/bonde.jpg'/>
         </Flex>
      </Flex>
   )
}

