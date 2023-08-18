import { Checkbox, CheckboxGroup, FormLabel, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { checkBoxList, formData, ObjetivoEmPortugalRadioCheck } from "../footerData"

interface ObjetivoEmPortugalCheckBoxProps {
   objective: string;   // Add the objective prop
   setObjective: React.Dispatch<React.SetStateAction<string>>;   // Add the setObjective prop
   outrosTextArea: string;
   setOutrosTextArea: React.Dispatch<React.SetStateAction<string>>;
   register: UseFormReturn["register"];   // Add the register prop if needed
}

export function ObjetivoEmPortugal({ objective, setObjective, outrosTextArea, setOutrosTextArea, register }: ObjetivoEmPortugalCheckBoxProps) {

   // initialize state for checked items
   const [textBox, setTextBox] = useState(false);   

   const handleCheckboxChange = (event) => {

      const targetValue = event.target.value;
      const isChecked = event.target.checked;

      if (targetValue === 'Outro (especificar)') {
         setTextBox(!textBox)
      } else {
         setTextBox(false)
      }

   };

   const handleOutrosTextAreaChange = (event) => {
      const targetValue = event.target.value;

      setOutrosTextArea(targetValue)
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
            Qual das seguintes opções melhor descreve o seu objetivo em Portugal?
         </FormLabel>
         <InputGroup>
            <RadioGroup onChange={setObjective} value={objective}>
               <VStack
                  alignItems={'left'}
                  p={4}
                  spacing={[1, 5]}
                  direction={['column', 'row']}
               >
                  {/* FORMULÁRIO CheckBox */}
                  {ObjetivoEmPortugalRadioCheck.map(radioCheckItem => {
                     return (

                           <Radio
                              key={radioCheckItem.id}
                              value={radioCheckItem.item}
                              onChange={handleCheckboxChange}    // call onChange function
                              isRequired={false}
                              isChecked={objective.includes(radioCheckItem.item)}    // set isChecked prop to reflect state
                           >
                              {radioCheckItem.item}
                           </Radio>

                     )
                  })}

                  {textBox == true ?
                     <Textarea
                        bg='white'
                        color='black'
                        onChange={handleOutrosTextAreaChange}
                     >
                     </Textarea>
                     :
                     ''
                  }
               </VStack>
            </RadioGroup>
         </InputGroup >
      </>
   )
}