import { Box, Container, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { About } from "../../5-About";
import { FirstSession } from "./1-Session";
import { SecondSession } from "./2-Session";
import { ThirdSession } from "./3-Session";
import { Feedbacks } from "./4-Feedbacks";
import { Namidia } from "./5-Namidia";


export function SubHomepage() {
   return (
      
      <>
         <Container maxW='100vw' bgPosition='center' bgSize='cover' p='0' m='0' centerContent bgGradient='linear(135deg,#0f0f0f, #343434, #0f0f0f)' gap={8}>
            <Feedbacks/>
            <Namidia/>
            {/* <FirstSession/>
            <SecondSession/>
            <ThirdSession/> */}
         </Container> 
      </>
   )
}