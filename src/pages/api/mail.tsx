const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req,res) => {
   let sendTest = 0
   const body = JSON.parse(req.body)
   
   const message = `
   E-mail recebido via clubedopassaporte.com.br: \r\n\r\n
   Nome: ${body.Nome}\r\n
   Número: ${body.discagem}:(${body.prefixo}) ${body.Numero}\r\n
   Email: ${body.Email}\r\n
   Serviço desejado: ${body.service}\r\n
   Tipo de serviço: ${body['Detalhe do serviço']}\r\n
   `;
   const data = {
      to:'clubedopassaporte@gmail.com',
      from: 'contato@awer.co',
      subject: `Contato via Site - Clube do Passaporte`,
      text: message,
      html: message.replace(/\r\n/g,'<br>')
   }


   await mail.send(data).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })
   const message2 = 
   `Olá ${body.Nome} ☺ \r\n \r\n O Clube do Passaporte agradece o seu contato, retornaremos o mais breve possível!`

   const data2 = {
      to:`${body.Email}`,
      from: 'contato@awer.co',
      subject: `Contato via Site - Clube do Passaporte`,
      text: message2,
      html: message2.replace(/\r\n/g,'<br>')
   }

   await mail.send(data2).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data2), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })

   console.log('Finalizando processo...')
   res.status(200).json({status: 'Ok'})
   // Criar lógica do If status not 200, retry
}