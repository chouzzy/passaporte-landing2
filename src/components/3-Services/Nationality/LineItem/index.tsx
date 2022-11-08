import { Box, GridItem, Link, Text, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

interface LineItemProps {
   LineImage:string,
   LineName:string,
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
            <GridItem onClick={passLineData} _hover={{border:'1px solid #4ca7a1', transition:'400ms', boxShadow:'dark-lg', color:'gray.300'}} mx='auto' borderRadius={2} w='100%' 
            boxShadow='md' bgImage={LineImage} bgSize='cover' minH={96}
            bgPosition='center' position='relative' color='white'>

               <Box bg='clubAqua'  position='absolute' w='100%' left='0' right='0' letterSpacing={1.5} fontWeight='600'
               margin='auto' bottom='0'  fontSize='1.2rem' p={2}>
                  <VStack>
                  <Text align='center' textTransform='uppercase'>
                  {LineName}
                  </Text>
                  <Text align='center' fontSize={'1rem'} fontWeight={400} letterSpacing={0} textAlign='center'>
                     Caso você não tenha ascendência portuguesa próxima, mesmo assim você pode ter direito a cidadania!
                  </Text>


                  </VStack>
               </Box>

            </GridItem>
         </Slink>
      </GridItem>
   )
}