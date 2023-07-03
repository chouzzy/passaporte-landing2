import { Flex, Heading, Text } from "@chakra-ui/react";
import { UserCircle } from "phosphor-react";


const feedbacks = [
    '“O trabalho especializado de genealogia do Clube do Passaporte é algo que vai além de um trabalho de busca documental, pois trata-se de conhecer mais de si através do legado de seus antepassados. Conhecer suas gerações passadas é como conhecer mais sobre si mesmo, e isso é exatamente o que a equipe de busca tem proporcionado a mim e a meus familiares.”',
    '“Gostei muito de fazer a minha cidadania com o Clube do Passaporte. Eles foram muito pacientes para me explicar todas as fases do processo, rápidos na hora de responder e me avisaram sobre cada passo que era feito. Eu recomendo muito a empresa porque além de oferecerem um serviço eficiente, eles explicam sobre as origens da lei dos judeus sefaraditas e buscam ajudar na procura de documentos, independentemente do quão antigos eles sejam. Foram transparentes e trabalharam de maneira eficiente, mesmo com as dificuldades da pandemia.”',
    'Depois de muitas explicações, buscas de mercado e perguntas, decidi fazer a cidadania portuguesa de minha família com o Clube do Passaporte. Sempre tive um atendimento personalizado com profissionais extremamente competentes que respondem super-rápido todas as questões sobre o processo, além de sempre me deixarem atualizada de todos os procedimentos e como são feitos! Recomendo o Clube do Passaporte sem pensar meia vez!!!',
    'O Clube do Passaporte foi uma ótima surpresa em meus planos de obter um visto para morar em Portugal. Desde o primeiro momento sempre agiram com transparência e atenderam com cordialidade, conduzindo o processo de maneira eficiente, permitindo que eu tivesse meu visto de forma célere e sem nenhum tipo de contratempo.'
]

const feedbackTitle = (
    <Heading mx='auto' fontWeight='300' fontSize='1.6rem' color='gray.50'>
        Relatos de <b style={{ color: '#7cc3bb' }}>nossos clientes</b>
    </Heading>
);

const ebookButtonText = (
    <Text>
        Entre em contato com o Clube do Passaporte e <b> descubra seu  visto ideal!</b>
    </Text>
);

const lines = [
    {
        id: 1, 
        image: 'static/img/bg-feedback.png', 
        text: feedbacks[0], 
        subText: <Flex alignItems={'center'} gap={1}> <UserCircle weight="light" size={32} /> Felipe </Flex>
    },
    {
        id: 2, 
        image: 'static/img/bg-feedback.png', 
        text: feedbacks[1], 
        subText: <Flex alignItems={'center'} gap={1}> <UserCircle weight="light" size={32} /> Daniel </Flex>
    },
    {
        id: 3, 
        image: 'static/img/bg-feedback.png', 
        text: feedbacks[2], 
        subText: <Flex alignItems={'center'} gap={1}> <UserCircle weight="light" size={32} /> Faride </Flex>
    },
    {
        id: 4, 
        image: 'static/img/bg-feedback.png', 
        text: feedbacks[3], 
        subText: <Flex alignItems={'center'} gap={1}> <UserCircle weight="light" size={32} /> Paula </Flex>
    },
]

export {feedbacks, feedbackTitle, ebookButtonText, lines}