import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"


const qualityLifeIndexData = {
    title: <> O problema é que <b>deixar para amanhã</b> pode ser <b> muito arriscado: </b></>,
    subtitle: <> Ocorre que, por ser uma oportunidade única de ir morar em um país de primeiro mundo que possui todos os benefícios citados acima, já existem muitos brasileiros interessados e, inclusive, aplicando para o visto.  </>,
    info: <>
        Com o alto número de interessados, especialistas estimam que essa oportunidade não deve durar muito já que, em alguns anos ou mesmo meses, Portugal terá conseguido suprir a sua necessidade de novas pessoas por lá.
        <br></br>
        <br></br>
        É justamente por isso que 2023 é o ano ideal para realizar essa mudança. Se houver um planejamento desde já, e com as informações corretas, as suas chances de sucesso em Portugal são altíssimas!
        <br></br>
        <br></br>
        Então, para quem se interessa por essa oportunidade de ouro e deseja ter uma vida de cidadão de primeiro mundo, nós preparamos um e-book que vai te guiar durante a sua jornada para Portugal.

        

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