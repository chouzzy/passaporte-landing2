import { Text } from "@chakra-ui/react"
import { Link as RSlink } from 'react-scroll'

const firstSessionData = {
    title: 'Oportunidade de Ouro',
    subtitle: <>  Portugal <span style={{ color: '#1c928b' }}> precisa urgentemente de trabalhadores </span> e, por isso, abriu uma grande oportunidade que praticamente qualquer brasileiro consegue aproveitar: um visto de trabalho que permite a ida para Portugal legalmente em busca de uma dessas milhares de vagas abertas, em diversas áreas.</>,
    list: [
        "Estudo Genealógico",
        "Aprovação comunitária em Portugal",
        "Aprovação do Governo Português",
        "Obtenção do passaporte e da cidadania",
    ]
}

const callToAction =
    <RSlink to="#contato" spy={true} smooth={true} offset={0} duration={1500}>
        <Text
            fontSize={['1.1rem']}
            textAlign='center'
            display={['','','inline','inline']}
            pl={1}
            _hover={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: 'clubMoss',
                transition: '500ms'
            }}
            color='#1c928b'
        >
            <br></br>
            Clique aqui e
            <b> receba nosso E-book completo</b>,
            com tudo o que um brasileiro precisa saber antes de migrar para Portugal!
        </Text>
    </RSlink>
const lines = [
    { id: 1, image: 'static/img/gen.jpg', text: '1º - Estudo genealógico', subText: 'Após o estudo, você receberá um livro completo com centenas de páginas descrevendo e comprovando a sua relação parental com um ancestral judeu.' },
    { id: 2, image: 'static/img/community.jpg', text: '2º - Aprovação comunitária em Portugal', subText: 'Subtitulo' },
    { id: 3, image: 'static/img/portugal.jpg', text: '3º - Aprovação do Governo Português', subText: 'Subtitulo' },
    { id: 4, image: 'static/img/passport.jpg', text: '4º - Obtenção do passaporte e da cidadania', subText: 'Subtitulo' },
]

export { firstSessionData, lines, callToAction }