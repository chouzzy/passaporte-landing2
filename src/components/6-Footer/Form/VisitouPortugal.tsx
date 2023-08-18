import { FormLabel, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { formData } from "../footerData"


export function VisitouPortugal({ register }: { register: UseFormReturn["register"] }) {

   return (
      <>
         {/* CidadeDeMoradia */}
         <FormLabel
            fontWeight='400'
            pl={2}
            pt={4}
            mb={1}
            htmlFor='first-name'
         >
            {formData.visitouPortugal}
         </FormLabel>

         <InputGroup>
            <Textarea
               bg={'white'}
               color='black'
               placeholder='Ex: Eu visitei Portugal 4 vezes, dessas quatro, duas em 2018'
               {...register("VisitouPortugalQuantasVezes")}
            />
         </InputGroup>
      </>
   )
}