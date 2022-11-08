import { Box, Container, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Nationality } from "./Nationality";
import { Visa } from "./Visa";

interface ServicesProps {
   changePage: (lineData:any) => void
}

export function Services({changePage}: ServicesProps) { 
   return (
      
      <>
         <Container id='#services' maxW='100vw'
         bgPosition='center' bgSize='cover' p='0' m='0' centerContent>
            <Nationality changePage={changePage}/>
            <Visa changePage={changePage}/>
         </Container> 
      </>
   )
}