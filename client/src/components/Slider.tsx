import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import RaceVideo from './RaceVideo'

const StyledSwiper = styled(Swiper)`
    .swiper-pagination-bullet {
        background-color: white;
    }
    .swiper-button-next,
    .swiper-button-prev {
        color: white;
    }
`

const Slider = ({ className }: { className?: string }) => {
    return (
        <StyledSwiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                1260: {
                    slidesPerView: 2,
                },
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={className}
        >
            <SwiperSlide>
                <RaceVideo url='https://www.youtube.com/embed/1xDFTkPET4M' />
            </SwiperSlide>
            <SwiperSlide>
                <RaceVideo url='https://www.youtube.com/embed/MBFP6ecnQv4' />
            </SwiperSlide>
            <SwiperSlide>
                <RaceVideo url='https://www.youtube.com/embed/uLj0-ZIVDLw' />
            </SwiperSlide>
            <SwiperSlide>
                <RaceVideo url='https://www.youtube.com/embed/sfhLDlbLdao' />
            </SwiperSlide>
            <SwiperSlide>
                <RaceVideo url='https://www.youtube.com/embed/GlpwGUSZ4-0' />
            </SwiperSlide>
        </StyledSwiper>
    )
}

export default Slider
