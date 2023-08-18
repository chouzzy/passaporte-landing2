import {
  FormLabel,
  InputGroup,
  Radio,
  RadioGroup,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { UseFormReturn } from "react-hook-form";
import { amigoFamiliarResidente, formacaoAcademicaData } from "../footerData";



interface amigoFamiliarResidente {
  amigoFamiliarResidenteRadio: string;
  setAmigoFamiliarResidenteRadio: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormReturn["register"];   // Add the register prop if needed
}

export function AmigoFamiliarResidente({
  register,
  amigoFamiliarResidenteRadio,
  setAmigoFamiliarResidenteRadio
}: amigoFamiliarResidente) {


  const [textAreaAmigoFamiliarResidente, setTextAreaAmigoFamiliarResidente] = useState(false);

  const handleFamiliarResidenteChange = (event) => {
    const targetValue = event.target.value;

    setAmigoFamiliarResidenteRadio(targetValue)
    if (targetValue === "Sim.") {
      setTextAreaAmigoFamiliarResidente(!textAreaAmigoFamiliarResidente);
    } else {
      setTextAreaAmigoFamiliarResidente(false);
    }
  };

  return (
    <>
      {/* CidadeDeMoradia */}
      <FormLabel fontWeight="400" pl={2} pt={4} mb={1} htmlFor="first-name">
        {amigoFamiliarResidente.title}
      </FormLabel>

      <InputGroup>
        <RadioGroup>
          <VStack alignItems="left" p={4} spacing={[1, 5]} direction={["column", "row"]}>
            {amigoFamiliarResidente.radio.map((radio) => (
              <Radio
                key={radio.value}
                value={radio.value}
                {...register("TemAmigoOuFamiliarResidente", { required: true })}
                onChange={handleFamiliarResidenteChange}
              >
                {radio.label}
              </Radio>
            ))}

            {textAreaAmigoFamiliarResidente ? (
              <Textarea bg="white" color="black" {...register("TemAmigoOuFamiliarResidente, sim, especificar:")}>
              </Textarea>
            ) : (
              ""
            )}
          </VStack>
        </RadioGroup>
      </InputGroup>
    </>
  );
}
