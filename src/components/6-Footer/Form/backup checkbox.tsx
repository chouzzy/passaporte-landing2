import { Checkbox, CheckboxGroup, FormLabel, Input, InputGroup, InputLeftElement, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { BsFillHouseFill } from "react-icons/bs"
import { checkBoxList, formData, ObjetivoEmPortugalCheckBox } from "../footerData"

interface ObjetivoEmPortugalCheckBoxProps {
   checkedItems: string[];   // Add the checkedItems prop
   setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;   // Add the setCheckedItems prop
   outrosTextArea: string;
   setOutrosTextArea: React.Dispatch<React.SetStateAction<string>>;
   register: UseFormReturn["register"];   // Add the register prop if needed
 }

export function ObjetivoEmPortugal({ checkedItems, setCheckedItems, outrosTextArea, setOutrosTextArea, register }: ObjetivoEmPortugalCheckBoxProps) {

    // initialize state for checked items
   const [textBox, setTextBox] = useState(false);    // initialize state for checked items


   const handleCheckboxChange = (event) => {

      const targetValue = event.target.value;
      const isChecked = event.target.checked;

      if(targetValue === 'Outro (especificar)') {
         setTextBox(!textBox)
      }

      if (isChecked) {
         setCheckedItems(prevState => [...prevState, targetValue]);
      } else {
         setCheckedItems(prevState => prevState.filter(item => item !== targetValue));
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
            <CheckboxGroup
               colorScheme='cyan'
            >
               <VStack
                  alignItems={'left'}
                  p={4}
                  spacing={[1, 5]}
                  direction={['column', 'row']}
               >
                  {/* FORMULÁRIO CheckBox */}
                  {ObjetivoEmPortugalCheckBox.map(checkBoxItem => {
                     return (
                        <Checkbox
                           key={checkBoxItem.id}
                           value={checkBoxItem.item}
                           onChange={handleCheckboxChange}    // call onChange function
                           isRequired={false}
                           isChecked={checkedItems.includes(checkBoxItem.item)}    // set isChecked prop to reflect state
                        >
                           {checkBoxItem.item}
                        </Checkbox>
                     )
                  })}

                  {textBox==true?
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
            </CheckboxGroup>
         </InputGroup>
      </>
   )
}