// React
import { useEffect, useState, useCallback } from "react";

export default function useSwiperViews() {
	const [views, setViews] = useState(0);
	const mq = {
		xs: '(max-width: 399px)',
	  sm: '(min-width: 400px)',
	  md: '(min-width: 640px)',
	  lg: '(min-width: 992px)',
	  xl: '(min-width: 1200px)',
	  xxl: '(min-width: 1600px)',
	}

	useEffect(() => {
		setSwiperViews();
		window.addEventListener("resize", setSwiperViews)

		return () => {
			window.removeEventListener("resize", setSwiperViews)
		}
	}, []);

	const setSwiperViews = useCallback(() => {
		let newViews = null;

		switch (true) {
			case window.matchMedia(mq.xxl).matches:
				newViews = 5
				break;

			case window.matchMedia(mq.xl).matches:
				newViews = 4
				break;

			case window.matchMedia(mq.md).matches:
			case window.matchMedia(mq.lg).matches:
				newViews = 3
				break;

			case window.matchMedia(mq.sm).matches:
			case window.matchMedia(mq.xs).matches:
				newViews = "auto"
				break;

			default:
				break;
		}

		if (newViews === views) return;

		setViews(newViews);
	}, []);

	return views;
}
