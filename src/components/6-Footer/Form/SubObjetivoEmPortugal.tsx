import { Checkbox, CheckboxGroup, FormLabel, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { checkBoxList, formData, subObjectiveQuestionProps } from "../footerData"

interface SubObjetivoEmPortugalCheckBoxProps {
   objective: string
   subObjectiveContent: subObjectiveQuestionProps,
   setSelectedObjective: React.Dispatch<React.SetStateAction<string>>

}

export function SubObjetivoEmPortugal({ objective, subObjectiveContent, setSelectedObjective }: SubObjetivoEmPortugalCheckBoxProps) {

   // initialize state for checked items
   const [textBox, setTextBox] = useState(false);

   const handleCheckboxChange = (event) => {

      const targetValue = event.target.value;
      const isChecked = event.target.checked;

      setSelectedObjective(targetValue)

   }


   return (
      <>
         {/* OBJETIVO EM PORTUGAL */}
         <FormLabel
            fontWeight='400'
            pl={2}
            pt={4}
            mb={1}
            htmlFor='e-mail'
         >
            {subObjectiveContent.question}
         </FormLabel>
         <InputGroup>
            <RadioGroup>
               <VStack
                  alignItems={'left'}
                  p={4}
                  spacing={[1, 5]}
                  direction={['column', 'row']}
               >

                  <Radio
                     onChange={handleCheckboxChange}
                     value={'Sim'}
                  >
                     Sim
                  </Radio>
                  <Radio
                     onChange={handleCheckboxChange}
                     value={'Não'}
                  >
                     Não
                  </Radio>
                  <Radio
                     onChange={handleCheckboxChange}
                     value={subObjectiveContent.alternative}
                  >
                     {subObjectiveContent.alternative}
                  </Radio>

               </VStack>
            </RadioGroup>
         </InputGroup >
      </>
   )
}