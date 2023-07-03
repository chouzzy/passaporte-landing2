import { Flex, Grid } from "@chakra-ui/react"
import { vistos } from "./vistos"



export function CardGrid() {

    return (
        <Grid
            gridTemplateColumns={'repeat(4,minmax(0, 1fr))'}
            gridTemplateRows={'repeat(2,minmax(0, 1fr))'}
            color='gray.800'
            gap={12}
        >
            {vistos.map(visto => {
                return (
                    <Flex
                        key={visto.id}
                        px={3}
                        pb={5}
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
                                fontSize='0.84rem'
                                fontWeight={'300'}
                                h='100%'
                            >
                                {visto.name}
                            </Flex>
                        </Grid>

                    </Flex>
                )
            })}
        </Grid>
    )
}