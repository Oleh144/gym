import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

function Slider({ professionals }) {
	return (
		<div className="slider">
			<Swiper
				spaceBetween={50}
				loop={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
				modules={[Autoplay, Pagination]}>
				{professionals.map((professional) => {
					return (
						<SwiperSlide>
							<div className="slide">
								<img src={professional.photoUrl} alt="" />
								<div className="description">
									<div className="heading">
										<h2>
											{professional.fullName
												.split(" ")
												.map((word, index) => {
													return (
														<span
															key={index}
															style={{
																display:
																	"block",
															}}>
															{word}
														</span>
													);
												})}
										</h2>
										<p>{professional.position}</p>
									</div>
									<ul className="achievements">
										{professional.achievements.map(
											(achievement) => (
												<li key={achievement}>
													{achievement}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				{/* <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={trainer2} alt="" />
                        <div className={styles.description}>
                            <div className={styles.heading}>
                                <h2>Леонід Скидан</h2>
                                <p>тренер тренажерного залу</p>
                            </div>
                            <ul className={styles.achievements}>
                                <li>
                                    Майстер спорту України, чемпіон та
                                    багаторазовий призер чемпіонатів України з
                                    гирьового спорту
                                </li>
                                <li>
                                    Випускник Харківської державної академії
                                    фізичної культури
                                </li>
                                <li>Досвід роботи більше трьох років.</li>
                                <li>
                                    Виховав переможців і призерів обласних
                                    чемпіонатів з гирьового спорту.
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={trainer3} alt="" />
                        <div className={styles.description}>
                            <div className={styles.heading}>
                                <h2>Катерина Шакалова</h2>
                                <p>тренер з греплінгу та панкратіону</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={trainer4} alt="" />
                        <div className={styles.description}>
                            <div className={styles.heading}>
                                <h2>Анна фененко</h2>
                                <p>Тренер з тайського боксу та кікбоксингу</p>
                            </div>
                            <ul className={styles.achievements}>
                                <li>
                                    Дворазова чемпіонка світу з кікбоксингу та
                                    тайському боксу
                                </li>
                                <li>
                                    Багато разова чемпіонка України,
                                    межрегіональних, областних турнірів
                                </li>
                                <li>Майстер спорту з кікбоксингу ISKA</li>
                                <li>Кандидат в майстра спорту з боксу</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={trainer5} alt="" />
                        <div className={styles.description}>
                            <div className={styles.heading}>
                                <h2>Марк Шумкін</h2>
                                <p>Тренер з боксу</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={trainer6} alt="" />
                        <div className={styles.description}>
                            <div className={styles.heading}>
                                <h2>олексій смирнов</h2>
                                <p>професійний тренер, дієтолог</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={trainer7} alt="" />
                        <div className={styles.description}>
                            <div className={styles.heading}>
                                <h2>ДІАНА ВЕРНЕР</h2>
                                <p>
                                    тренер ВИЩОЇ КАТЕГОРІЇ, РЕАБІЛІТОЛОГ,
                                    ДІЄТОЛОГ
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
			</Swiper>
		</div>
	);
}

export default Slider;
