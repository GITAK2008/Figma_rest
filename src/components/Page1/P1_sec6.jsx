import "../Page1/P1_secc6.scss"
import { Photo } from "../../Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
export default function App(){
    return(
        <>
            <section className="Sec6">
                <div className="Sec6_cen">
                    <h1>Our customers say</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                   >
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.raz}></img>
                        <h1>Alla Basta</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.dva}></img>
                        <h1>Olivia</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.tri}></img>
                        <h1>Mia</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.four}></img>
                        <h1>Leo</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.five}></img>
                        <h1>Amelia</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.six}></img>
                        <h1>Lily</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photo.seven}></img>
                        <h1>Ava</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                    <div className="Peoples">
                        <img src={Photo.user}></img>
                    </div>
                </div>
            </section>
        </>
    )
}
