import { Flex, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Card } from "./card"
import { vistoProps, vistos } from "./vistos"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export function CarouselCards() {

    return (
        <Flex maxW={'100%'} >
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                navigation
                autoplay
                loop
            // onSlideChange={() => console.log('slide change')}
            >

                {vistos.map(visto => {
                    return (
                        <SwiperSlide key={visto.id}>
                            <Text h={0} ml={4000} color='clubDark'>.</Text>
                            <Card
                                key={visto.id}
                                id={visto.id}
                                icon={visto.icon}
                                name={visto.name}
                                title={visto.title}
                                backgroundSource={visto.backgroundSource}
                            />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </Flex>
    )

}