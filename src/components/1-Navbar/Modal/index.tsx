import { useDisclosure, Box, Button, Collapse, useBreakpointValue, Grid, GridItem, Image, Heading, Text, VStack, Flex, Link, HStack} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "../NavItem";
import { SocialMedia } from "./Social Media";


export function ModalMenu(ModalMenuProps) {

   const { isOpen, onToggle } = useDisclosure()

   return (
      <>
         <Button  w='50px' right='0' top='4' mr={[4,4,12,0,12]} fontSize='1.4rem' my={['','','','auto']} position='absolute' bg='datBlue' color='white' onClick={onToggle} _hover={{bg:'clubAqua'}} borderRadius='2'>
            <RiMenuLine/>
         </Button>
         <Collapse in={isOpen} animateOpacity>
            <Box
               w='100vw'
               color='datBlue'
               rounded='md'
               shadow='md'
            >
               <VStack  fontFamily='Heebo' fontSize='1.05rem' pt={4}>

                  {ModalMenuProps.navItems.map( item => {
                     return (
                        
                           <NavItem key={item.id} id={item.id} text={item.text} activeClass={item.active} navColor={item.color} 
                           serviceOn={ModalMenuProps.serviceOn} backPage={ModalMenuProps.backPage} offSet={item.offSet} modalToggle={onToggle}/>
                        
                     )
                  })}
                  <HStack p={2} fontSize='1.6rem' spacing={3} textAlign='center' borderBottom='1px solid #7cc3bb' w={['60vw','36vw','36vw']} justifyContent='center'>
                        {/* <SocialMedia mediaColor='gray.50' icon={<BsInstagram/>} mediaLink={ModalMenuProps.mediaLinks[0].instagram}/> */}
                        <SocialMedia tag='zap-tag' mediaColor='gray.50' icon={<RiWhatsappFill/>} mediaLink={ModalMenuProps.mediaLinks[3].whatsapp}/>
                  </HStack>
               </VStack>
            </Box>
         </Collapse>
         </>
      )}