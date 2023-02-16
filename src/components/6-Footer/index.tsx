import { Button, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Text, VStack } from "@chakra-ui/react";
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
        py={2}
        px={2}
      >
         <Flex w='100%' flexDir={'column'}>

            <VStack gap={8}>

               <HStack alignItems='center'>
                  <Image mx='auto' src='static/img/logo branco.png' maxW={10} alt='Logo do Clube do Passaporte'/>
                  <VStack spacing={-2} textTransform='uppercase'>
                     <Text fontSize='0.8rem'  fontWeight='400' mr='auto' color='white' textShadow='1px 1px 1px #00000050'> Clube do</Text>
                     <Text fontSize='1rem' fontWeight='400' color='clubAqua' textShadow='1px 1px 1px #00000050'> Passaporte</Text>
                  </VStack>
               </HStack>
               
               <Flex display='inline' mx='auto' fontWeight='300' fontSize='0.7rem' > 
                  desenvolvido por 
                  <Link href='https://awer.co' target="_blank" color='#F55F5E' _hover={{textDecoration: 'none' , color:'#729EA1'}}>
                     <Text display='inline' > awer.co </Text>
                  </Link>
               </Flex>

            </VStack>

         </Flex>
      </Flex>
   )
}