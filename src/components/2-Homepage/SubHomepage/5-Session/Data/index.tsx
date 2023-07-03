import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"


const qualityLifeIndexData = {
    title: <> O problema é que <b>deixar para amanhã</b> pode ser <b> muito arriscado: </b></>,
    subtitle: <> Uma oportunidade que não pode ser adiada. Nos últimos tempos, o governo português tem facilitado a regularização da residência de brasileiros de todas as classes sociais, abrindo as portas para uma nova vida neste país encantador. </>,
    info: <>
        No entanto, é importante ter em mente que essa janela de oportunidade pode se fechar a qualquer momento. Deixar para amanhã pode ser arriscado, pois nunca sabemos quando as circunstâncias podem mudar.
        <br></br>
        <br></br>
        Portanto, aproveite agora essa chance única de construir um futuro promissor em Portugal, onde o encanto da cultura, a qualidade de vida e as possibilidades de crescimento estão ao seu alcance. Não perca essa oportunidade de ouro, pois não há garantias de que ela estará disponível no futuro.
        <br></br>

        

    </>,
    list: [
        "Estudo Genealógico",
        "Aprovação comunitária em Portugal",
        "Aprovação do Governo Português",
        "Obtenção do passaporte e da cidadania",
    ]
}

const lines = [
    { id: 1, image: 'static/img/gen.jpg', text: '1º - Estudo genealógico', subText: 'Após o estudo, você receberá um livro completo com centenas de páginas descrevendo e comprovando a sua relação parental com um ancestral judeu.' },
    { id: 2, image: 'static/img/community.jpg', text: '2º - Aprovação comunitária em Portugal', subText: 'Subtitulo' },
    { id: 3, image: 'static/img/portugal.jpg', text: '3º - Aprovação do Governo Português', subText: 'Subtitulo' },
    { id: 4, image: 'static/img/passport.jpg', text: '4º - Obtenção do passaporte e da cidadania', subText: 'Subtitulo' },
]

export { qualityLifeIndexData, lines }