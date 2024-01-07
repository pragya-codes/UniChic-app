// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
	return (
		<>
			<div className="container c-home">
				<div className="explore">
					<p>Explore all &rarr;</p>
					<img src="src\assets\explore.png" alt="explore page"></img>
				</div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide className="swiper-slide">
						<p>Men &rarr;</p>

						<img src="src\assets\shirts.jpg"></img>
					</SwiperSlide>

					<SwiperSlide className="swiper-slide">
						<p>Women &rarr;</p>
						<img src="src\assets\women.jpg"></img>
					</SwiperSlide>

					<SwiperSlide className="swiper-slide">
						<p>Jewllery &rarr;</p>
						<img src="src\assets\jewellery.jpg"></img>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
