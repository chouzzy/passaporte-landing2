import { Checkbox, CheckboxGroup, FormLabel, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { checkBoxList, formData, imediatoAcompanhadoData } from "../footerData"

interface ImediatoAcompanhadoCheckBoxProps {
   imediatamenteAcompanhado: string;   // Add the objective prop
   setImediatamenteAcompanhado: React.Dispatch<React.SetStateAction<string>>;   // Add the setObjective prop
   imediatamenteAcompanhadoTextArea: string;
   setImediatamenteAcompanhadoTextArea: React.Dispatch<React.SetStateAction<string>>;
   register: UseFormReturn["register"];   // Add the register prop if needed
}

export function ImediatoAcompanhado({ 
   imediatamenteAcompanhado,
   setImediatamenteAcompanhado,
   imediatamenteAcompanhadoTextArea,
   setImediatamenteAcompanhadoTextArea,
   register }: ImediatoAcompanhadoCheckBoxProps) {

   // initialize state for checked items
   const [textBox, setTextBox] = useState(false);

   const handleCheckboxChange = (event) => {

      const targetValue = event.target.value;
      const isChecked = event.target.checked;

      if (targetValue === 'Sim (especifique, por favor)') {
         setTextBox(!textBox)
      } else {
         setTextBox(false)
      }

   };

   const handleOutrosTextAreaChange = (event) => {
      const targetValue = event.target.value;

      setImediatamenteAcompanhadoTextArea(targetValue)
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
           { imediatoAcompanhadoData.title}
         </FormLabel>
         <InputGroup>
            <RadioGroup onChange={setImediatamenteAcompanhado} value={imediatamenteAcompanhado}>
               <VStack
                  alignItems={'left'}
                  p={4}
                  spacing={[1, 5]}
                  direction={['column', 'row']}
               >
                  {/* FORMULÁRIO CheckBox */}
                  {imediatoAcompanhadoData.radio.map(radioCheckItem => {
                     return (

                        <Radio
                           key={radioCheckItem.id}
                           value={radioCheckItem.item}
                           onChange={handleCheckboxChange}    // call onChange function
                           isRequired={false}
                           isChecked={imediatamenteAcompanhado.includes(radioCheckItem.item)}    // set isChecked prop to reflect state
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