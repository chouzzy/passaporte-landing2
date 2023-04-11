import { Button, Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";


export default function Contact() {

  const router = useRouter()
  const { name, number } = router.query

  useEffect(() => {

    const emailData = { name, number }
    console.log(emailData)

    if (name != undefined && number != undefined) {

      setTimeout(() => {

        fetch('/api/mail', {
          method: 'post',
          body: JSON.stringify(emailData)
        })

      }, 2000)

    }
  })

  return (
    <Container
      id='#Home'
      maxW='100vw'
      h='100vh'
      bgImage='static/img/bg-landing.png'
      bgPos={'center'}
      bgSize='cover'
      bgColor='clubDark'
      p='0' m='0'
      centerContent
    >
      <Flex
        flexDirection={'column'}
        justifyContent='center'
        align={'center'}
        gap={4}
        my={'auto'}
        maxW={['80vw', '80vw', '80vw']}
      >
        <Image src='static/img/logo branco.png' alt="logo" maxW={32} />

        <Heading color='gray.50' fontWeight={'300'} textAlign='center'>
          Ficamos felizes pelo seu interesse!
        </Heading>
        <Text color='gray.50' fontWeight={'400'} textAlign='center'>
          Clique abaixo para falar com um de nossos atendentes
        </Text>

        <Link
          href={`https://wa.me/5511930003574?text=Olá, tudo bem? Meu nome é ${name}, e meu número é ${number}. Acessei o site do Clube do Passaporte e gostaria de falar com um atendente.`}
          target='_blank'
          _hover={{ textDecoration: 'none' }}
        >
          <Flex
            bg='#25D366'
            fontSize='1.2rem'
            _hover={{ bg: 'clubMaldivas' }}
            borderRadius={6}
            gap={3}
            p={2}
            boxShadow='2px 2px 1px #000000bb'
          >
            <Text color='gray.50'> FALE CONOSCO </Text>
            <BsWhatsapp fontSize={'1.4rem'} color='white' />
          </Flex>
        </Link>
      </Flex>
    </Container>
  )
}
