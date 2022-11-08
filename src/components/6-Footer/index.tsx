import { Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export function Footer() {

   const formData = {
      title:'SEJA UMA CONSULTORA',
      name:'Nome',
      number:'Telefone',
      email:'E-mail',
      buttonText:'Enviar'
   }

   const [states, setStates] = useState([])
   const [cities, setCities] = useState([])
   const [able, setAble] = useState(true)

   let emailData = {}

   let [city, setCity] = useState('')
   let [service, setService] = useState('')

useEffect(() => {
   const fetchServices = async () => {
     const servicesList = [
      {name: 'Visto'},
      {name: 'Cidadania'},
      {name: 'Ainda não decidi'},
     ]

     let servicesListPivot = []

     servicesList.map(item => {
         servicesListPivot.push(item.name)})
     setStates(servicesListPivot.sort());
   }

   const fetchServiceTypes = async (service) => {
   if (service !=( Object.keys(service).length === 0) ) {
      let serviceTypeList = []
      if (service == 'Visto') {
         serviceTypeList = [
            {name: 'Visto D1'},
            {name: 'Visto D2'},
            {name: 'Visto D3'},
            {name: 'Visto D4'},
            {name: 'Visto D5'},
            {name: 'Visto D6'},
            {name: 'Visto D7'}
      ]} else if (service == 'Cidadania') {
         serviceTypeList = [
            {name: 'Via Direta'},
            {name: 'Sefardita'},
            {name: 'Ainda não decidi'},
         ]
      } else if (service == 'Ainda não decidi' ) {
         serviceTypeList = [{name: 'Ainda não decidi'}]
   }
      let serviceTypeListPivot = []

      serviceTypeList.map(item => {
          serviceTypeListPivot.push(item.name)})
      setCities(serviceTypeListPivot.sort());
   };
   }

   fetchServices();
   fetchServiceTypes(service)
 }, [service]);

useEffect( () => {
   if ((service != '' )) {
      setAble(false)
   } else {
      setAble(true)
   }
}, [service])

const [disable, setDisable] = useState(false)
const [color, setColor] = useState('clubMaldivas')
const [sentText, setSentText] = useState('Enviar')

const {
   handleSubmit,
   register,
   formState: { errors, isSubmitting },
 } = useForm()

 function onSubmit(values) {
   setDisable(true)
   setColor('clubCigar')
   setSentText('Enviado ✔')
   emailData = {...values, service}
   return new Promise(() => {
     setTimeout(() => {
      fetch('/api/mail', {
         method:'post',
         body:JSON.stringify(emailData)
      })
    }, 2000)
   })
 }



   return (
      <Flex
        id='#contato'
        w='100%'
        bg='#0f0f0f'
        color='gray.50'
        fontFamily='Heebo'
        bgRepeat='repeat-x'
        flexDir="column"
        justifyContent='center'
        py={8}
        px={2}
      >
         <Flex w='100%'>
            <Heading mx='auto' fontWeight='300' fontSize='1.8rem'> Fale conosco </Heading>
         </Flex>
         <Flex w='100%' flexDir={['column','column','row', 'row']}>

            {/* MAPA */}
            <Flex w='100%' justifyContent='center' p={[8,8,16,16]} flexDir='column' gap={4}>
               <iframe style={{outline:'3px solid #4ca7a1 '}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.949187259931!2d-46.6922740853838!3d-23.57026836780559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce570b2e36ff85%3A0x509c26d9fd87396f!2sAv.%20Brg.%20Faria%20Lima%2C%201485%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-002!5e0!3m2!1spt-BR!2sbr!4v1665495720920!5m2!1spt-BR!2sbr" width="100%" height="360px" loading="lazy"/>
               <VStack>
                  <Text>Avenida Faria Lima 1485 - Torre Norte, 2º andar - Pinheiros, São Paulo - SP, 01452-002</Text>
               </VStack>
            </Flex>

            {/* FORM */}
            <Flex id='#formulario' w='100%'justifyContent='center' px={[8,8,16,16]} py={[8,8,16,12]}>
            <FormControl isRequired>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='first-name'> {formData.name}</FormLabel>
                  <Input p={2} placeholder='Digite seu nome' {...register("Nome")} />
                  
                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='telephone'> {formData.number}</FormLabel>
                  <InputGroup gap={1}>
                  <Select isRequired id='discagem' w='300px'  _placeholder={{color:'black'}}  onChange={ (e) => setService(e.target.value)}  placeholder='Discagem'
                  {...register("discagem")}>
                           <option style={{ color: 'black' }}>DDD</option>
                           <option style={{ color: 'black' }}>DDI</option>
                  </Select>
                  <Input isRequired={true} type='tel' w='180px' minLength={2} maxLength={3} placeholder='DDD/DDI' p={2} {...register("prefixo")} />
                  <Input type='tel' minLength={8} maxLength={9} placeholder='Ex: 912345678 ou 23456789' {...register("Numero")} />
                  <InputRightElement pointerEvents='none'>
                     <BsTelephoneFill fontSize='1.1rem' color='gray' />
                  </InputRightElement>
                  </InputGroup>

                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> {formData.email}</FormLabel>
                  <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                     <IoIosMail fontSize='1.4rem' color='gray' />
                  </InputLeftElement>
                  <Input type='mail' placeholder='Digite seu e-mail' {...register("Email")} />
                  </InputGroup>

                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> Serviço desejado</FormLabel>
                  <InputGroup>
                  <Select id='country'  _placeholder={{color:'#1c928b'}}  onChange={ (e) => setService(e.target.value)}  placeholder='Selecione o tipo do serviço'>
                     {states.map(item => {
                        return (
                           <option style={{ color: 'black' }} key={item}>{item}</option>
                     )})}
                  </Select>
                  <Select isDisabled={able} id='city' onChange={ (e) => setCity(e.target.value)} placeholder='Detalhe do serviço' {...register("Detalhe do serviço")}>
                        {cities.map(item => {

                           return (
                              <option style={{ color: 'black' }} key={item}>{item}</option>
                        )})}
                  </Select>
                  </InputGroup>
                     <Button
                     borderRadius={3}
                     mt={8}
                     w='100%'
                     _hover={{bg:'clubCigar',
                     transition:'360ms'}}
                     mx='auto'
                     cursor='pointer'
                     bg={color}
                     disabled={disable}
                     type='submit'
                     color='white'
                     >
                        {sentText}
                     </Button>
                  </form>
               </FormControl>
            </Flex>
         </Flex>
         <Flex w='100%'>
            <Flex display='inline' mx='auto' fontWeight='300' fontSize='0.7rem'> 
               desenvolvido por 
               <Link href='https://awer.co' target="_blank" color='#F55F5E' _hover={{textDecoration: 'none' , color:'#729EA1'}}>
                  <Text display='inline' > awer.co </Text>
               </Link>
            </Flex> 
         </Flex>
      </Flex>
   )
}