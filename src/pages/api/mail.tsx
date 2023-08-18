const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

   let sendTest = 0
   const body = JSON.parse(req.body)

   console.log(body)

   const message = `
E-mail recebido via visto.clubedopassaporte.com.br: \r
\r


Nome: ${body.Nome}\r

Email: ${body.Email}\r


Cidade de moradia:${body.CidadeDeMoradia}\r


Qual das seguintes opções melhor descreve o seu objetivo em Portugal?:${body.objective}\r
 ${body.outrosTextArea ? body.outrosTextArea : ''}\r


Pretende residir em Portugal por quanto tempo?: ${body.TempoDeResidenciaPretendido}\r



De imediato você iria para Portugal acompanhado com algum familiar ou amigo? 
${body.imediatamenteAcompanhado}\r

${body.imediatamenteAcompanhadoTextArea ? body.imediatamenteAcompanhadoTextArea : ''}\r



Disponibilidade financeira: Para fornecer uma recomendação adequada, precisamos entender sua renda mensal para cumprir os requisitos dos vistos. Selecione a faixa de renda mensal em que mais se aproxima da sua situação: 
${body.DisponibilidadeFinanceira}\r



Formação acadêmica/profissional:
${body['FormaçãoAcademica']}\r



Já visitou Portugal anteriormente? Se sim, quantas vezes?
${body.VisitouPortugalQuantasVezes}\r



Qual sua previsão ideal que você gostaria de se mudar para Portugal?
${body['PrevisãoDeMudançaParaPortugal']}\r



Você já iniciou algum processo para obtenção de visto ou cidadania portuguesa ou europeia anteriormente? Se sim, especifique o tipo de processo e o resultado obtido.
${body['Processo de visto foi iniciado']}\r



Você tem algum amigo ou familiar que reside atualmente de forma legalizada em Portugal?
${body.amigoFamiliarResidenteRadio}\r

${body['TemAmigoOuFamiliarResidente, sim, especificar:'] ? body['TemAmigoOuFamiliarResidente, sim, especificar:'] : ''}\r


`;



   const data = {
      to: 'clubedopassaporte@gmail.com',
      from: 'contato@awer.co',
      subject: `Contato via Landing Page - Vistos do Clube do Passaporte`,
      text: message,
      html: message.replace(/\r\n/g, '<br>')
   }

   await mail.send(data).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while (response[0].statusCode != 202) {
         setTimeout(mail.send(data), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
      .catch((error) => {
         console.error(error)
      })

   console.log('Finalizando processo...')
   res.status(200).json({ status: 'Ok' })
   // Criar lógica do If status not 200, retry
}