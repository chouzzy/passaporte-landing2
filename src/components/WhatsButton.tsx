import { Flex, Link, Text } from "@chakra-ui/react";
import { WhatsappLogo } from "phosphor-react";
import { BsWhatsapp } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";


export default function WhatsButton() {
    return (
        <Link href='https://wa.me/5511930003573?text=Olá, tudo bem? Acessei o site do Clube do Passaporte e gostaria de falar com um atendente.' target="_blank">
        
        <Flex bg='#25D366' color="#fffafa"
        fontSize='1.8rem' borderRadius={'full'} p={4} 
        position='fixed'bottom={8} right={8}
        _hover={{ transition:' 400ms', fontSize:'2.4rem'}}
        cursor='pointer'>
            <BsWhatsapp/>
        </Flex>
        </Link>
    )
}