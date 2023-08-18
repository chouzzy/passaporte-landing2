import {
  FormLabel,
  InputGroup,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";

import { UseFormReturn } from "react-hook-form";
import { formacaoAcademicaData } from "../footerData";


export function FormacaoAcademica({
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
        {formacaoAcademicaData.title}
      </FormLabel>

      <InputGroup>
        <RadioGroup>
          <VStack
            alignItems="left"
            p={4}
            spacing={[1, 5]}
            direction={["column", "row"]}
          >

            {formacaoAcademicaData.radio.map((radio) => (
              <Radio key={radio.value} value={radio.value} {...register("FormaçãoAcademica")}>
                {radio.label}
              </Radio>
            ))}
          </VStack>
        </RadioGroup>
      </InputGroup>
    </>
  );
}
