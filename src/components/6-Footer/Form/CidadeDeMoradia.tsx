import { FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { formData } from "../footerData"


export function CidadeDeMoradia({ register }: { register: UseFormReturn["register"] }) {

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
            {formData.cidadeDeMoradia}
         </FormLabel>

         <InputGroup>
            <InputLeftElement pointerEvents='none'>
               <BsFillHouseFill fontSize='1.4rem' color='gray' />
            </InputLeftElement>
            <Input
               type='text'
               placeholder='Digite sua cidade'
               {...register("CidadeDeMoradia")}
            />
         </InputGroup>
      </>
   )
}