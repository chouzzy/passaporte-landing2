//

import { ListItem, ListIcon, List, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"

const qualityLifeData = {
    title: <> Por que existem tantos <span style={{ color: '#1c928b' }}> brasileiros querendo ir para Portugal?</span> </>,
    slides: [

        {
            title: 'Segurança',
            info: <>
                Desde 2019 Portugal está nos top 7 países mais seguros do planeta, segundo o GPI (Global Peace Index).
                <br></br>
                O baixíssimo índice de criminalidade traz aquela sensação de paz, de deitar a cabeça no travesseiro tranquilo, sem medo do que possa acontecer a você e aos seus filhos.
            </>
        },

        {
            title: 'Poder de Compra',
            info: <>
                O poder de compra de uma pessoa que mora em Portugal é, em média, 3x maior do que de uma pessoa que mora no Brasil. Ou seja, ao se mudar para lá, um brasileiro consegue comprar em média 3x mais produtos, trabalhando a mesma quantidade de tempo.
                <br></br>
                Um exemplo: Para comprar um iPhone novo no Brasil é preciso gastar em torno de 9 salários-mínimos. Já em Portugal, apenas 1,5 salário-mínimo é necessário para isso.

            </>
        },

        {
            title: 'Custos',
            info: <>
                <Text>

                    Há diversos relatos de brasileiros que conseguiram reduzir o seu custo de vida em 40% quando se mudaram para Portugal, isso porque:
                </Text>
                <List spacing={3}>

                    <ListItem>
                        <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                        Não precisam pagar plano de saúde, já que o sistema público de lá funciona super bem;
                    </ListItem>
                    <ListItem>
                        <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                        Não necessitam pagar escola para seus filhos, pois o sistema de Educação também é excelente;
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
                Uma pesquisa realizada pela Davos mostra altas chances de uma recessão econômica mundial em 2023, o que pode prejudicar a situação de empregos no Brasil de maneira indireta.
                <br></br>
                Como já foi dito acima, Portugal têm uma demanda muito alta de trabalhadores, o que significa que, apesar de poder ser impactado pela recessão, as oportunidades emprego lá continuam sendo diversas.


            </>
        },

        {
            title: 'Possibilidade de viajar muito barato',
            info: <>
                As passagens de Portugal para vários países da Europa são extremamente baratas. Existem rotas de Lisboa a Paris, por exemplo, que saem em torno de 15 Euros.
                <br></br>
                Esse fator atrai muitos brasileiros que, ao morar em Portugal, conseguem viajar pelo menos duas vezes por ano para países como: Itália, França, Grécia, Espanha, entre muitos outros. E o melhor: sem se comprometer financeiramente.
            </>
        },

        {
            title: 'Língua portuguesa e Clima',
            info: <>
                Nós, brasileiros, já falamos o idioma nativo do país e, portanto, não precisamos passar pelo processo de aprender uma nova língua, que é muitas vezes bastante difícil.
                <br></br>
                Além disso, Portugal possui um clima mediterrâneo, em que os verões são quentes, mas não tão quentes que sejam desconfortáveis, enquanto os invernos são suaves, com temperaturas amenas e pouca neve.
            </>
        },
    ]
}

const lines = [
    {
        id: 1, image: 'static/img/qualityLife/safety.png',
        title: qualityLifeData.slides[0].title,
        info: qualityLifeData.slides[0].info,
        callToAction: 'Entre em contato com o Clube do Passaporte e descubra seu visto ideal'
    },
    {
        id: 2, image: 'static/img/qualityLife/moneypower.png',
        title: qualityLifeData.slides[1].title,
        info: qualityLifeData.slides[1].info,
        callToAction: 'Descubra o visto ideal para você'
    },
    {
        id: 3, image: 'static/img/qualityLife/savings.png',
        title: qualityLifeData.slides[2].title,
        info: qualityLifeData.slides[2].info,
        callToAction: 'Entre em contato para saber mais possibilidades'
    },
    {
        id: 4, image: 'static/img/qualityLife/job.png',
        title: qualityLifeData.slides[3].title,
        info: qualityLifeData.slides[3].info,
        callToAction: 'Descubra o visto ideal para você'
    },
    {
        id: 5, image: 'static/img/qualityLife/train.png',
        title: qualityLifeData.slides[4].title,
        info: qualityLifeData.slides[4].info,
        callToAction: 'Entre em contato com o Clube do Passaporte e descubra seu visto ideal'
    },
    {
        id: 6, image: 'static/img/qualityLife/beach.png',
        title: qualityLifeData.slides[5].title,
        info: qualityLifeData.slides[5].info,
        callToAction: 'Descubra o visto ideal para você'
    },
]

export { lines, qualityLifeData }