import { Button, Center, Checkbox, CheckboxGroup, Divider, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { Map } from "./map";
import { checkBoxList, formData, subObjectiveQuestion, title } from "./footerData";
import { useRouter } from "next/router";
import { Email } from "./Form/Email";
import { Name } from "./Form/Name";
import { CidadeDeMoradia } from "./Form/CidadeDeMoradia";
import { ObjetivoEmPortugal } from "./Form/ObjetivoEmPortugal";
import { SubObjetivoEmPortugal } from "./Form/SubObjetivoEmPortugal";
import { TempoDeResidencia } from "./Form/TempoDeResidencia";
import { ImediatoAcompanhado } from "./Form/ImediatoAcompanhado";
import { DisponibilidadeFinanceira } from "./Form/DisponibilidadeFinanceira";
import { FormacaoAcademica } from "./Form/FormacaoAcademica";
import { VisitouPortugal } from "./Form/VisitouPortugal";
import { PrevisaoMudanca } from "./Form/PrevisaoMudanca";
import { ProcessoDeVistoIniciado } from "./Form/ProcessoDeVistoIniciado";
import { AmigoFamiliarResidente } from "./Form/AmigoFamiliarResidente";
import { SubObjetivoEmPortugalQ2 } from "./Form/SubObjetivoEmPortugalQ2";
import axios from "axios";





export function Footer() {

   const [color, setColor] = useState('clubMaldivas')

   const [disable, setDisable] = useState(false)

   const [sentText, setSentText] = useState('Enviar')

   const [objective, setObjective] = useState('');

   const [outrosTextArea, setOutrosTextArea] = useState('')

   const [subObjective, setSubObjetive] = useState({
      trigger: '',
      question: '',
      alternative: ''
   });

   const [subObjective2, setSubObjetive2] = useState({
      trigger: '',
      question: '',
      alternative: ''
   });

   const [selectedObjective, setSelectedObjective] = useState('')
   const [selectedObjective2, setSelectedObjective2] = useState('')

   const [imediatamenteAcompanhado, setImediatamenteAcompanhado] = useState('')
   const [imediatamenteAcompanhadoTextArea, setImediatamenteAcompanhadoTextArea] = useState('')

   const [amigoFamiliarResidenteRadio, setAmigoFamiliarResidenteRadio] = useState('')

   const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
   } = useForm()

   const router = useRouter()

   async function onSubmit(values) {
      setDisable(true)
      setColor('clubCigar')
      setSentText('Enviado ✔')
      const emailData = { ...values, objective, outrosTextArea, subObjective, selectedObjective, selectedObjective2, imediatamenteAcompanhado, imediatamenteAcompanhadoTextArea, amigoFamiliarResidenteRadio }

      await axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzMzA0MzQ1MjZkNTUzMjUxMzMi_pc", JSON.stringify(emailData))
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });

      return new Promise(() => {
         setTimeout(() => {
            fetch('/api/mail', {
               method: 'post',
               body: JSON.stringify(emailData)
            })
         }, 2000)

         if (typeof window !== "undefined") {
            router.push({
               pathname: "obrigado-whatsapp",
            })
         }
      })
   }

   useEffect(() => {

      if (objective === 'Trabalhar') {
         setSubObjetive(subObjectiveQuestion.trabalhar)
      }
      if (objective === 'Estudar') {
         setSubObjetive(subObjectiveQuestion.estudar)
      }
      if (objective === 'Empreender' || objective === 'Investir') {
         setSubObjetive(subObjectiveQuestion.independente)
      }

   }, [objective, selectedObjective])

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
         pt={12}
         px={2}
      >
         <Flex w='100%' flexDir={'column'}>
            <Heading
               mx='auto'
               textAlign={'center'}
               fontWeight='300'
               fontSize={['1.4rem', '1.8rem', '2.2rem']}
               px={4}
            >
               {title}
            </Heading>

         </Flex>

         <Flex flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'column-reverse']}>

            {/* MAPA */}
            <Map />

            <Flex
               id='#formulario'
               mx='auto' w='100%'
               justifyContent='center'
               px={[8, 8, 16, 16]}
               py={[8, 8, 16, 12]}
            >
               <FormControl isRequired>

                  <form onSubmit={handleSubmit(onSubmit)}>

                     {/* NOME */}
                     <Name register={register} />

                     {/* EMAIL */}
                     <Email register={register} />

                     {/* CidadeDeMoradia */}
                     <CidadeDeMoradia register={register} />


                     {/* TELEFONE */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='telephone'
                     >
                        {formData.number}
                     </FormLabel>

                     <InputGroup gap={1}>

                        {/* SELECT DDD ou DDI */}
                        <Select
                           isRequired
                           id='discagem'
                           w='300px'
                           _placeholder={{ color: 'black' }}
                           placeholder='Discagem'
                           {...register("discagem")}>
                           <option style={{ color: 'black' }}>DDD</option>
                           <option style={{ color: 'black' }}>DDI</option>
                        </Select>

                        {/* INPUT DO PREFIXO */}
                        <Input
                           isRequired={true}
                           type='tel'
                           w='180px'
                           minLength={2}
                           maxLength={3}
                           placeholder='DDD/DDI'
                           p={2}
                           {...register("prefixo")}
                        />

                        {/* INPUT DO NÚMERO */}
                        <Input
                           type='tel'
                           minLength={8}
                           maxLength={9}
                           placeholder='Ex: 912345678 ou 23456789'
                           {...register("Numero")}
                        />

                        {/* ICON DO TELEFONE */}
                        <InputRightElement pointerEvents='none'>
                           <BsTelephoneFill
                              fontSize='1.1rem'
                              color='gray'
                           />
                        </InputRightElement>

                     </InputGroup>

                     
                     {/* OBJETIVO EM PORTUGAL */}
                     <ObjetivoEmPortugal
                        objective={objective}
                        setObjective={setObjective}
                        outrosTextArea={outrosTextArea}
                        setOutrosTextArea={setOutrosTextArea}
                        register={register}
                     />

                     {/* SUBPERGUNTA OBJETIVO EM PORTUGAL*/}
                     {objective != '' ?
                        <>
                           <SubObjetivoEmPortugal
                              objective={objective}
                              subObjectiveContent={subObjective}
                              setSelectedObjective={setSelectedObjective}

                           />

                        </>
                        :
                        ''
                     }

                     {objective == 'Trabalhar' ?
                        <SubObjetivoEmPortugalQ2
                           objective={objective}
                           subObjectiveContent={subObjective}
                           setSelectedObjective={setSelectedObjective2}

                        />
                        :
                        ''
                     }

                     {/* TEMPO DE RESIDÊNCIA */}
                     <TempoDeResidencia
                        register={register}
                     />

                     {/* OBJETIVO EM PORTUGAL */}
                     <ImediatoAcompanhado
                        imediatamenteAcompanhado={imediatamenteAcompanhado}
                        setImediatamenteAcompanhado={setImediatamenteAcompanhado}
                        imediatamenteAcompanhadoTextArea={imediatamenteAcompanhadoTextArea}
                        setImediatamenteAcompanhadoTextArea={setImediatamenteAcompanhadoTextArea}
                        register={register}
                     />

                     {/* DISPONIBILIDADE FINANCEIRA */}
                     <DisponibilidadeFinanceira
                        register={register}
                     />

                     {/* FORMAÇÃO ACADEMICA */}
                     <FormacaoAcademica
                        register={register}
                     />

                     {/* VISITOU PORTUGAL */}
                     <VisitouPortugal
                        register={register}
                     />


                     {/* PREVISÃO DE MUDANÇA PARA PORTUGAL */}
                     <PrevisaoMudanca
                        register={register}
                     />

                     {/* INICIOU PROCESSO DE VISTO*/}
                     <ProcessoDeVistoIniciado
                        register={register}
                     />

                     {/* TEM AMIGO OU FAMILIAR EM PORTUGAL */}
                     <AmigoFamiliarResidente
                        register={register}
                        amigoFamiliarResidenteRadio={amigoFamiliarResidenteRadio}
                        setAmigoFamiliarResidenteRadio={setAmigoFamiliarResidenteRadio}
                     />


                     <Button
                        id='#submitButton'
                        borderRadius={3}
                        mt={8}
                        w='100%'
                        _hover={{
                           bg: 'clubCigar',
                           transition: '360ms'
                        }}
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


         {/* FOOTER */}
         <Flex w='100%'>
            <Flex display='inline' mx='auto' fontWeight='300' fontSize='0.7rem'>
               desenvolvido por
               <Link href='https://awer.co' target="_blank" color='#F55F5E' _hover={{ textDecoration: 'none', color: '#729EA1' }}>
                  <Text display='inline' > awer.co </Text>
               </Link>
            </Flex>
         </Flex>
      </Flex>
   )
}