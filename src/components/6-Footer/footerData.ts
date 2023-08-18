
export interface subObjectiveQuestionProps {
    trigger: string,
    question: string,
    alternative: string
}

const checkBoxList = [
    'Estudar em Portugal',
    'Trabalhar com contrato ou promessa de trabalho em Portugal',
    'Empreender em Portugal',
    'Trabalhar de forma remota como nômade digital em Portugal',
    'Procurar oportunidades de trabalho em Portugal',
    'Participar de programas de voluntariado em Portugal',
    'Possuo rendimentos passivos',
    'Também quero trazer minha família para viver em Portugal'
];

const title = 'Descubra seu visto ideal, e ainda receba "O Guia para brasileiros em Portugal"'
const formData = {
    title: 'FALE COM O CLUBE DO PASSAPORTE',
    name: 'Nome',
    email: 'E-mail',
    cidadeDeMoradia: 'Cidade de moradia',
    visitouPortugal:'Já visitou Portugal anteriormente? Se sim, quantas vezes?',
    previsaoParaMudarParaPortugal: 'Qual sua previsão ideal que você gostaria de se mudar para Portugal?',
    processoDeVistoIniciado: 'Você já iniciou algum processo para obtenção de visto ou cidadania portuguesa ou europeia anteriormente? Se sim, especifique o tipo de processo e o resultado obtido.',
    number: 'Telefone',
    movingDate: 'Quando você pretende mudar para Portugal?',
    movingReason: 'Descreva de forma sucinta o motivo pelo qual você quer imigrar para Portugal e o porquê você selecionou a opção acima.',
    buttonText: 'Enviar'
}

const ObjetivoEmPortugalRadioCheck = [
    { id: '#work', item: 'Trabalhar' },
    { id: '#study', item: 'Estudar' },
    { id: '#invest', item: 'Investir' },
    { id: '#entrepeneurship', item: 'Empreender' },
    { id: '#other', item: 'Outro (especificar)' },
]

const subObjectiveQuestion = {
    trabalhar: {
        trigger: 'Trabalhar',
        question: 'Se você deseja trabalhar em Portugal, você já possui oferta de emprego de uma empresa portuguesa?',
        alternative: 'Ainda estou procurando emprego.'
    },
    independente: {
        trigger: 'Empreender',
        question: 'Se você pretende trabalhar de forma independente (autônomo/freelancer), você já possui contrato ou proposta de prestação de serviços para empresas em Portugal?',
        alternative: 'Ainda estou procurando oportunidades.'
    },
    estudar: {
        trigger: 'Estudar',
        question: 'Se você escolheu "Estudar" como seu objetivo em Portugal, você já possui a carta de aceite da faculdade ou curso em Portugal?',
        alternative: 'Quero procurar um curso para estudar e residir legalmente em Portugal. '
    }
}

// TEMPO DE RESIDENCIA
const tempoDeResidenciaRadioValues = [
    { value: "Menos de um ano", label: "Menos de um ano" },
    { value: "Mais de um ano", label: "Mais de um ano" },
    { value: "Indeterminado", label: "Indeterminado" },
];

const tempoDeResidenciaData = {
    title: "Pretende residir em Portugal por quanto tempo?",
    radio: tempoDeResidenciaRadioValues
}


// IMEDIATAMENTE ACOMPANHADO
const imediatoAcompanhadoRadioCheck = [
    { id: '#yes', item: 'Sim' },
    { id: '#no', item: 'Não' }
]

const imediatoAcompanhadoData = {
    radio: imediatoAcompanhadoRadioCheck,
    title: 'De imediato você iria para Portugal acompanhado com algum familiar ou amigo?'

}

const disponiblidadeFinanceiraData = {
    title: 'Disponibilidade financeira: Para fornecer uma recomendação adequada, precisamos entender sua renda mensal para cumprir os requisitos dos vistos. Selecione a faixa de renda mensal em que mais se aproxima da sua situação:',
    radio: [
        { value: "Entre mil a três mil reais. ", label: "Entre mil a três mil reais. " },
        { value: "Entre três mil a cinco mil reais", label: "Entre três mil a cinco mil reais" },
        { value: "Entre cinco mil a oito mil reais. ", label: "Entre cinco mil a oito mil reais. " },
        { value: "Entre oito mil a doze mil reais. ", label: "Entre oito mil a doze mil reais. " },
        { value: "Mais de doze mil reais. ", label: "Mais de doze mil reais. " }
    ]
}

const formacaoAcademicaData = {
    title: 'Formação acadêmica/profissional:',
    radio: [
        { value: "Não tenho formação acadêmica ou profissional. ", label: "Não tenho formação acadêmica ou profissional. " },
        { value: "Ensino médio ou equivalente.", label: "Ensino médio ou equivalente." },
        { value: "Ensino técnico ou profissionalizante. ", label: "Ensino técnico ou profissionalizante. " },
        { value: "Ensino superior completo ou em curso. ", label: "Ensino superior completo ou em curso. " }
    ]
}
const amigoFamiliarResidente = {
    title: 'Você tem algum amigo ou familiar que reside atualmente de forma legalizada em Portugal?',
    radio: [
        { value: "Sim.", label: "Sim. (especifique, por favor)." },
        { value: "Não", label: "Não" },
     
    ]
}


export {
    formData,
    checkBoxList,
    title,
    ObjetivoEmPortugalRadioCheck,
    subObjectiveQuestion,
    tempoDeResidenciaData,
    imediatoAcompanhadoData,
    disponiblidadeFinanceiraData,
    formacaoAcademicaData,
    amigoFamiliarResidente
}