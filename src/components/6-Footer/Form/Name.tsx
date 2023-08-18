import { FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { UseFormReturn } from "react-hook-form"
import { BsFillPersonFill } from "react-icons/bs"
import { formData } from "../footerData"


export function Name({ register }: { register: UseFormReturn["register"] }) {

   return (
      <>
         {/* NOME */}
         <FormLabel
            fontWeight='400'
            pl={2}
            pt={4}
            mb={1}
            htmlFor='first-name'
         >
            {formData.name}
         </FormLabel>

         <InputGroup>
            <InputLeftElement pointerEvents='none'>
               <BsFillPersonFill fontSize='1.4rem' color='gray' />
            </InputLeftElement>
         <Input
            type='name'
            placeholder='Digite seu nome'
            {...register("Nome")}
         />
         </InputGroup>
      </>
   )
}