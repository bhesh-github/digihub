import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const MySwiper = () => {
	return (
		<Swiper
			spaceBetween={10}
			slidesPerView={3.5}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide style={{ backgroundColor: 'red' }}>Slide 1</SwiperSlide>
			<SwiperSlide style={{ backgroundColor: 'red' }}>Slide 2</SwiperSlide>
			<SwiperSlide style={{ backgroundColor: 'red' }}>Slide 3</SwiperSlide>
			<SwiperSlide style={{ backgroundColor: 'red' }}>Slide 4</SwiperSlide>
		</Swiper>
	);
};

export default MySwiper;
