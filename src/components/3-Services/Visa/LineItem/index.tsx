import { Flex, GridItem, Image, Link, Text } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

interface LineItemProps {
   LineImage:string,
   LineName:any,
   columns:number[],
   lineData:{
      title:any,
      text:any,
      serviceImage:any
   }
   changePage: (lineData:any) => void
}


export function LineItem({LineImage, LineName, columns, lineData, changePage}:LineItemProps) { 

   function passLineData() {
      changePage(lineData)
   }
   return (
         
      <GridItem w='100%' colSpan={columns} cursor='pointer'>
         <Slink to={'#Home'}>
            <GridItem onClick={passLineData} mx='auto' w='100%' h='100%' _hover={{color:'clubMaldivas', transition: '300ms'}} bgSize='cover' bgPosition='center' py={[4,4,2,2]}>
               
               <Image src={LineImage} mx='auto'  _hover={{outline:'1px solid #4ca7a1', transition:'400ms', boxShadow:'dark-lg'}} boxSize={[32,40,40,48]} borderRadius={'100%'} objectFit='cover'/>
               
               <Flex maxW={72} py={2} justifyContent={'center'} mx='auto'
               fontSize={['0.8rem','0.8rem','1rem','1.1rem']}>
               {LineName}
               </Flex>

            </GridItem>
         </Slink>
      </GridItem>
   )
}