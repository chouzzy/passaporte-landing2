import { FormLabel, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { formData } from "../footerData"


export function ProcessoDeVistoIniciado({ register }: { register: UseFormReturn["register"] }) {

   return (
      <>
         {/* Previsao de mudança */}
         <FormLabel
            fontWeight='400'
            pl={2}
            pt={4}
            mb={1}
            htmlFor='first-name'
         >
            {formData.processoDeVistoIniciado}
         </FormLabel>

         <InputGroup>
            <Textarea
 
               bg={'white'}
               color='black'
               placeholder='Ex: Sim, iniciei o procsso de cidadania portuguesa em outubro de 2013, mas acabei desistindo.'
               {...register("Processo de visto foi iniciado")}
            />
         </InputGroup>
      </>
   )
}