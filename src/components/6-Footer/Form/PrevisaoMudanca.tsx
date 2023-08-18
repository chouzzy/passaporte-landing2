import { FormLabel, InputGroup, Textarea } from "@chakra-ui/react"
import { UseFormReturn } from "react-hook-form"
import { formData } from "../footerData"


export function PrevisaoMudanca({ register }: { register: UseFormReturn["register"] }) {

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
            {formData.previsaoParaMudarParaPortugal}
         </FormLabel>

         <InputGroup>
            <Textarea
               bg={'white'}
               color='black'
               placeholder='Ex: Pretendo me mudar no próximo verão'
               {...register("PrevisãoDeMudançaParaPortugal")}
            />
         </InputGroup>
      </>
   )
}