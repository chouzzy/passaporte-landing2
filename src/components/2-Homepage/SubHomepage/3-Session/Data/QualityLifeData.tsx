//

import { ListItem, ListIcon, List, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"

const qualityLifeData = {
    title: <> Por que existem tantos <span style={{color:'#1c928b'}}> brasileiros querendo ir para Portugal?</span> </>,
    slides: [
        
        {
            title: 'Segurança',
            info: <>
                Desde 2019 Portugal está nos top 7 países mais seguros do planeta, segundo o GPI (Global Peace Index)
                <br></br>
                O baixíssimo índice de criminalidade traz aquela sensação de paz, de deitar a cabeça no travesseiro tranquilo, sem medo do que possa acontecer a você e aos seus filhos. O que, infelizmente, não é uma realidade na maior parte do Brasil, onde as taxas de violência e homicídios crescem a cada ano. 
            </>
        },

        {
            title: 'Poder de Compra',
            info: <>
                O poder de compra de uma pessoa que mora em Portugal é, em média, 3x maior do que de uma pessoa que mora no Brasil. Ou seja, ao se mudar para lá, um brasileiro consegue comprar 3x mais coisas, trabalhando a mesma quantidade de tempo.
                <br></br>
                Um exemplo: Para comprar um iPhone novo aqui no Brasil, é preciso gastar em torno de 9 salários-mínimos. Já em Portugal, apenas 1,5 salário-mínimo é necessário para isso.

            </>
        },

        {
            title: 'Custos',
            info:<>
                <Text>

                Há diversos relatos de brasileiros que contam que conseguiram reduzir o seu custo de vida em 40% quando se mudaram para Portugal, isso porque:
                </Text>
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
                </>
        },

        {
            title: 'Empregos em abundância',
            info: <>
                Pesquisa realizada pela Davos mostra altas chances de uma recessão econômica mundial em 2023, o que pode prejudicar a situação de empregos aqui no Brasil de maneira indireta.
                <br></br>
                Como já foi falado acima, Portugal têm uma demanda muito alta de trabalhadores, o que significa que, apesar de poder ser impactado pela recessão, as oportunidades emprego lá são diversas.


            </>
        },

        {
            title: 'Possibilidade de Viajar muito barato',
            info: <>
                As passagens de Portugal para vários países da Europa são extremamente baratas. Existem rotas de Lisboa a Paris, por exemplo, que saem em torno de 15 Euros.
                <br></br>
                Esse fator atrai muitos brasileiros que, ao morar em Portugal, conseguem viajar pelo menos 2 vezes por ano para países como: Itália, França, Grécia, Espanha, entre muitos outros. E o melhor: Sem se comprometer financeiramente.

            </>
        },

        {
            title: 'Língua Portuguesa e Clima',
            info: <>
                Nós, brasileiros, já falamos o idioma nativo do país e, portanto, não precisamos passar por esse tipo de adaptação, que é muitas vezes bastante difícil.
                <br></br>
                Além disso, Portugal possui um clima mediterrâneo, em que os verões são quentes, mas não tão quentes que sejam desconfortáveis, enquanto os Invernos são suaves, com temperaturas amenas e pouca neve.


            </>
        },
    ]
}

const lines = [
    {
        id:1,image: 'static/img/qualityLife/safety.png', 
        title:qualityLifeData.slides[0].title, 
        info:qualityLifeData.slides[0].info
    },
    {
        id:2,image: 'static/img/qualityLife/moneypower.png', 
        title:qualityLifeData.slides[1].title, 
        info:qualityLifeData.slides[1].info
    },
    {
        id:3,image: 'static/img/qualityLife/savings.png', 
        title:qualityLifeData.slides[2].title, 
        info:qualityLifeData.slides[2].info
    },
    {
        id:4,image: 'static/img/qualityLife/job.png', 
        title:qualityLifeData.slides[3].title, 
        info:qualityLifeData.slides[3].info
    },
    {
        id:5,image: 'static/img/qualityLife/train.png', 
        title:qualityLifeData.slides[4].title, 
        info:qualityLifeData.slides[4].info
    },
    {
        id:6,image: 'static/img/qualityLife/beach.png', 
        title:qualityLifeData.slides[5].title, 
        info:qualityLifeData.slides[5].info
    },
 ]

 export {lines, qualityLifeData}