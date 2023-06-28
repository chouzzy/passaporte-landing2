import { Flex, Grid } from "@chakra-ui/react"
import { vistoProps, vistos } from "./vistos"


export function Card(visto: vistoProps) {
    return (
        <>
            <Flex
                key={visto.id}
                maxW={254}
                h='100%'
                mx='auto'
                px={5}
                pb={2}
                borderRadius={2}
                flexDir={'column'}
                bg='gray.100'

                border='1px solid #00000044'
                boxShadow='lg'

                _hover={{
                    transition: '300ms',
                    bg: 'clubAquaClean',
                    transform: 'scale(1.08)',
                    color: 'white',
                    cursor: 'pointer'
                }}
            >

                <Grid h='100%' templateRows={'repeat(2, 1fr)'} textAlign={'center'} justifyContent={'center'} gap={8}>
                    <Flex
                        gridRowStart={1}
                        gridRowEnd={2}
                        justifyContent={'center'}
                        alignItems='center'
                        flexDir={'column'}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        fontSize={'1rem'}
                        fontWeight='500'
                        borderBottom='1px solid #00000033'
                    >
                        {visto.icon}
                        {visto.title}
                    </Flex>

                    <Flex
                        gridRowStart={2}
                        gridRowEnd={3}
                        textAlign={'center'}
                        fontSize='0.9rem'
                        fontWeight={'300'}
                        h='100%'
                    >
                        {visto.name}
                    </Flex>
                </Grid>

            </Flex>
        </>
    )
}