// React
import React from 'react';

// Librarys
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper } from "swiper/react";

// Hooks
import { useSwiperViews } from "@hooks";

// Utils
import Helper from "@utils/Helper";

SwiperCore.use([Autoplay]);

interface ContainerProps {
	spaceBetween: number,
	className: string,
  children: React.ReactNode,
}

const Carousel = (props: ContainerProps) => {
	const views = useSwiperViews();

	const aleatoryNumber = Helper.randomIntFromInterval(1, 5);
	const autoplayConfig = {
		delay: 1000 * aleatoryNumber,
		disableOnInteraction: false,
	}

  return (
    <Swiper
			grabCursor
			speed={2000}
			slidesPerView={views}
			spaceBetween={props.spaceBetween}
			className={props.className}
			autoplay={autoplayConfig}
		>
			{props.children}
		</Swiper>
  );
}

export default Carousel;
