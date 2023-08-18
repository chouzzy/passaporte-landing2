import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";

import { UseFormReturn } from "react-hook-form";
import { BsFillHouseFill } from "react-icons/bs";
import { formData, tempoDeResidenciaData } from "../footerData";


export function TempoDeResidencia({
  register,
}: {
  register: UseFormReturn["register"];
}) {
  return (
    <>
      {/* CidadeDeMoradia */}
      <FormLabel
        fontWeight="400"
        pl={2}
        pt={4}
        mb={1}
        htmlFor="first-name"
      >
        {tempoDeResidenciaData.title}
      </FormLabel>

      <InputGroup>
        <RadioGroup>
          <VStack
            alignItems="left"
            p={4}
            spacing={[1, 5]}
            direction={["column", "row"]}
          >

            {tempoDeResidenciaData.radio.map((radio) => (
              <Radio key={radio.value} value={radio.value} {...register("TempoDeResidenciaPretendido")}>
                {radio.label}
              </Radio>
            ))}
          </VStack>
        </RadioGroup>
      </InputGroup>
    </>
  );
}
