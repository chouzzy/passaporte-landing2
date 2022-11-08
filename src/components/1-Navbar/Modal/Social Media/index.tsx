import { Text, Link} from "@chakra-ui/react"
import { ReactElement } from "react";
import { IconBaseProps } from "react-icons";


interface mediaProps {
   tag?:string,
   mediaLink:string,
   mediaColor:string
   icon:ReactElement
}

export function SocialMedia({mediaLink, mediaColor, icon, tag}:mediaProps) {
   return (
      <>
         <Link className={tag} href={mediaLink} target='_blank'  _hover={{textDecoration:'none'}}>
               <Text color={mediaColor} _hover={{transition:'360ms'}} textAlign='center'>
                  {icon}
               </Text>
         </Link>
      </>
      )}