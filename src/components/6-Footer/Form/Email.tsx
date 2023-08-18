import { FormLabel, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormReturn } from "react-hook-form"
import { IoIosMail } from "react-icons/io"
import { formData } from "../footerData"


export function Email({ register }: { register: UseFormReturn["register"] }) {

   return (
      <>
         {/* EMAIL */}
         <FormLabel
            fontWeight='400'
            pl={2}
            pt={4}
            mb={1}
            htmlFor='e-mail'
         >
            {formData.email}
         </FormLabel>

         <InputGroup>

            {/* INPUT DO EMAIL */}
            <InputLeftElement pointerEvents='none'>
               <IoIosMail fontSize='1.4rem' color='gray' />
            </InputLeftElement>

            <Input type='mail' placeholder='Digite seu e-mail' {...register("Email")} />
         </InputGroup>
      </>
   )
}