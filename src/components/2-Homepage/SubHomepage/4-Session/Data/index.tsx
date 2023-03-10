import { Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"


const qualityLifeIndexData = {
title:'Qualidade de Vida',
subtitle:<> Devido a todos esses fatores abordados, podemos concluir que a qualidade de vida em Portugal é incrível. E é exatamente isso que diversas pesquisas sugerem, alguns exemplos: </>,
info:<>
    <List spacing={3}>

    <ListItem display='flex' alignItems={'center'}>
        <ListIcon fontSize={'xl'} as={IoMdCheckmarkCircle} color='green.500' />
        <Flex display='inline'> Ocupa o topo do Ranking da Working Millennial Index: “Melhores países para se viver e trabalhar” (24º posição); </Flex>
    </ListItem>
    <ListItem display='flex' alignItems={'center'}>
        <ListIcon fontSize={'xl'} as={IoMdCheckmarkCircle} color='green.500' />
        <Flex display='inline'> Eleito o 1º país em qualidade de vida para estrangeiros, segundo a revista Insider; </Flex>
    </ListItem>
    <ListItem display='flex' alignItems={'center'}>
        <ListIcon fontSize={'xl'} as={IoMdCheckmarkCircle} color='green.500' />
        <Flex display='inline'> Eleito o melhor país para se viver pela Forbes; </Flex>
    </ListItem>
    <ListItem display='flex' alignItems={'center'}>
        <ListIcon fontSize={'xl'} as={IoMdCheckmarkCircle} color='green.500' />
        <Flex display='inline'> É o 6º país com o menor o Índice de Desigualdade da União Europeia; </Flex>
    </ListItem>
    <ListItem display='flex' alignItems={'center'}>
        <ListIcon fontSize={'xl'} as={IoMdCheckmarkCircle} color='green.500' />
        <Flex display='inline'> É classificado como o 17º país com melhor Índice de Segurança Internacional da Economist Intelligence Unit (EIU). </Flex>
    </ListItem>
    </List>
    </>,
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

export{qualityLifeIndexData, lines}