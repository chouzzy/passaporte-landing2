import { Box, Container, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navbar } from "../../1-Navbar";
import { Banner } from "../Banner";
import { ServicePage } from "../ServicePage";
import { SubHomepage } from "../SubHomepage";
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

export function Homepage({serviceOn, backPage, servicePageData}:HomepageProps) { 
   // useEffect( () => alert('Site em construção 🚜'),[])
   // const [background, setBackground] = useState('bg1')
   // const backgrounds = ['bg1', 'bg2', 'bg3']
   return (
      <>
         <Container id='#Home' maxW='100vw' bgImage='static/img/bg-landing.png' bgPos={'center'} bgSize='cover' bgColor='clubDark' p='0' m='0' centerContent>
         <Navbar serviceOn={serviceOn} backPage={backPage}/>
         {/* {serviceOn? <Banner/> 
         :
         <ServicePage servicePageData={servicePageData} backPage={backPage}/>
         } */}
         <VisaLanding/>
         </Container> 
      </>
   )
}