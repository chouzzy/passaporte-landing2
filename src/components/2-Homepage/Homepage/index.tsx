import { Container } from "@chakra-ui/react";
import { Navbar } from "../../1-Navbar";
import { VisaLanding } from "./Visa-landing";

interface HomepageProps {
   serviceOn: any,
   backPage?():any,
   servicePageData?:{
      title:string,
      text:string,
      serviceImage:string
   }
}

export function Homepage({serviceOn, backPage}:HomepageProps) { 

   return (
      <>
         <Container 
         id='#Home' 
         maxW='100vw' 
         bgImage='static/img/bg-landing.png' 
         bgPos={'center'} 
         bgSize='cover' 
         bgColor='clubDark' 
         p='0' m='0' 
         centerContent
         >

            <Navbar serviceOn={serviceOn} backPage={backPage}/>
            
            <VisaLanding/>
            
         </Container> 
      </>
   )
}