// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<div className="container c-home">
				<div className="explore">
					<Link to="/shop" className="link">
						<p>Explore all &rarr;</p>
					</Link>
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
						<Link
							to="/shop?category=men's clothing"
							className="link"
						>
							<p>Men &rarr;</p>
						</Link>

						<img src="src\assets\shirts.jpg"></img>
					</SwiperSlide>

					<SwiperSlide className="swiper-slide">
						<Link
							to="/shop?category=women's clothing"
							className="link"
						>
							<p>Women &rarr;</p>
						</Link>
						<img src="src\assets\women.jpg"></img>
					</SwiperSlide>

					<SwiperSlide className="swiper-slide">
						<Link to="/shop?category=jewelery" className="link">
							<p>Jewllery &rarr;</p>
						</Link>
						<img src="src\assets\jewellery.jpg"></img>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
