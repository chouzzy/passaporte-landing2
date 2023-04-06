import { Flex, Input, VStack, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, FormControl, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";
import { qualityLifeData, lines } from "./Data/QualityLifeData";
import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";

export function LifeQuality() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [linkDisable, SetLinkDisable] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (name.length > 1 && number.length > 10) {
            SetLinkDisable(false)
        } else {
            SetLinkDisable(true)
        }
    }, [name, number])

    function RedirectContact(name, number) {

        if (typeof window !== "undefined") {
           router.push({
              pathname: "obrigado-whatsapp",
              query: {
                 name: name,
                 number: number
              }
           })
        }
        return
     }

    return (
        <Flex id='#qualityLifeData'
            w='100%'
            bg='white'
            flexDir='column' px={0} pt={6}
            color='gray.50'
        >

            <Flex
                w='100%'
                gap={6}
                flexDir='column'
                alignItems='center'
                zIndex={0}
                color='whiteAlpha.800'
            >

                <Flex
                    w='100%'
                    my={4}
                    p={4}
                >
                    <Heading
                        mx='auto'
                        textAlign={'center'}
                        fontWeight='300' fontSize='2rem'
                        color='#1c928b'

                    >
                        {qualityLifeData.title}
                    </Heading>
                </Flex>

                <Flex w={'100%'} mx='auto' flexDir='column' boxShadow='1px 1px 1px #000000'>

                    {lines.map(item => {
                        return (
                            <Flex my={1} gap={2} flexDir='column' key={item.id}>

                                <LineItem
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    info={item.info}
                                />

                                {item.id < 6 ?
                                    <Popover>
                                        <PopoverTrigger>
                                            <Flex justifyContent={'center'} alignItems='center'>
                                                <Flex
                                                    cursor={'pointer'}
                                                    py={[2, 2, 2]}
                                                    px={[4, 4, 6]}
                                                    borderRadius={18}

                                                    bgColor='clubDarkBlue'
                                                    boxShadow={'dark-lg'}
                                                    textAlign={'center'}
                                                    color='clubAqua'
                                                    _hover={{ bgColor: 'clubAqua', color: 'white', transition: "1000ms" }}
                                                >
                                                    <Text
                                                        fontWeight='400'
                                                        fontSize='0.9rem'
                                                        textTransform='uppercase'
                                                    >
                                                        Clique aqui para falar conosco
                                                    </Text>

                                                </Flex>
                                            </Flex>
                                        </PopoverTrigger>

                                        <Portal>
                                            <PopoverContent bg='#0f1d27' border='none' p={2} m={2} borderRadius={2}>
                                                <PopoverArrow bg='#0f1d27' border='none' />
                                                <PopoverCloseButton color='white' fontSize='0.9rem' p={6} _hover={{ color: 'clubMaldivas' }} />
                                                <PopoverBody>

                                                    <VStack spacing={3}>

                                                        <Flex color='white' fontWeight={400}>
                                                            Por favor, preencha as seguintes informações:
                                                        </Flex>

                                                        <FormControl isRequired>
                                                            <Input type='name' onChange={(e) => { setName(`${e.target.value}`) }} my={1} variant='outline' bg='white' placeholder='Nome' />
                                                            <Input type='number' onChange={(e) => { setNumber(`${e.target.value}`) }} my={1} variant='outline' bg='white' placeholder='DDD + número, ex: 11999998888' />
                                                        </FormControl>

                                                        {
                                                            linkDisable == true ?
                                                                <Link
                                                                    onClick={() => { RedirectContact(name, number) }}
                                                                    pointerEvents='none'
                                                                    target="_blank"
                                                                    _hover={{ textDecoration: 'none' }}>
                                                                    <Flex
                                                                        bg='#25D366'
                                                                        _hover={{ bg: 'clubMaldivas' }}
                                                                        borderRadius={2}
                                                                        gap={3}
                                                                        p={2}
                                                                        boxShadow='2px 2px 1px #000000bb'
                                                                    >
                                                                        <Flex color='white'>Falar conosco </Flex>
                                                                        <BsWhatsapp fontSize={'1.4rem'} color='white' />
                                                                    </Flex>
                                                                </Link>
                                                                :
                                                                <Link
                                                                    onClick={() => { RedirectContact(name, number) }}
                                                                    pointerEvents='auto'
                                                                    target="_blank"
                                                                    _hover={{ textDecoration: 'none' }}>
                                                                    <Flex
                                                                        bg='#25D366'
                                                                        _hover={{ bg: 'clubMaldivas' }}
                                                                        borderRadius={2}
                                                                        gap={3}
                                                                        p={2}
                                                                        boxShadow='2px 2px 1px #000000bb'
                                                                    >
                                                                        <Flex color='white'>Falar conosco </Flex>
                                                                        <BsWhatsapp fontSize={'1.4rem'} color='white' />
                                                                    </Flex>
                                                                </Link>
                                                        }
                                                    </VStack>

                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                    :
                                    ""
                                }
                            </Flex>
                        )
                    })}

                </Flex>
            </Flex>
        </Flex>
    )
}
