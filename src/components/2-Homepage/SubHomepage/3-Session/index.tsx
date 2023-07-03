import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";
import { Link as RSlink } from 'react-scroll'
import { qualityLifeData, lines } from "./Data/QualityLifeData";
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
                                    <Flex justifyContent={'center'} alignItems='center'>
                                        <RSlink to="#contato" spy={true} smooth={true} offset={0} duration={1500}>

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
                                                    {item.callToAction}
                                                </Text>

                                            </Flex>
                                        </RSlink>
                                    </Flex>
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
