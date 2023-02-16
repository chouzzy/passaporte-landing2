import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"


const qualityLifeIndexData = {
title:'Qualidade de vida',
subtitle:<> Devido a todos esses fatores abordados, podemos concluir que a qualidade de vida em Portugal deve ser excelente. E é exatamente isso que diversas pesquisas sugerem,  alguns poucos exemplos: </>,
info:<>
    <List spacing={3}>

    <ListItem>
        <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
        Não precisam pagar plano de saúde, já que o sistema público de lá funciona super bem
    </ListItem>
    <ListItem>
        <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
        Não necessitam pagar escola para seus filhos, pois o sistema de Educação também é excelente
    </ListItem>
    <ListItem>
        <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
        Além disso, existe a questão do poder de compra, que foi detalhado acima. 
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