"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

export default function MainSlide() {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
    };

    return (
        <Slider ref={sliderRef} {...settings} className="main-slider">
            <div className="main-slider-item">
                <div>
                    <Image src="/images/banner_1.jpg" alt="배너1" width={2560} height={700} priority quality={100} />
                </div>
                <section>
                    <h1>(주)화성게이트</h1>
                    <p>현장 구조에 맞춰 철구조물을 제작·설치하는 전문 업체입니다.</p>
                    <button>
                        <Link href="/company/about">자세히 보기</Link>
                    </button>
                </section>
            </div>
            <div className="main-slider-item">
                <div>
                    <Image src="/images/banner_1.jpg" alt="배너1" width={2560} height={700} priority quality={100} />
                </div>
                <section>
                    <h1>홀딩도어</h1>
                    <p>현장 구조에 맞춰 제작·설치하는 대형 산업용 접이식 도어입니다.</p>
                    <button>
                        <Link href="/business/A">자세히 보기</Link>
                    </button>
                </section>
            </div>
            <div className="main-slider-item">
                <div>
                    <Image src="/images/banner_1.jpg" alt="배너1" width={2560} height={700} priority quality={100} />
                </div>
                <section>
                    <h1>양개도어</h1>
                    <p>건설현장 출입구에 설치되는 실용적인 양방향 개폐 도어입니다.</p>
                    <button>
                        <Link href="/business/B">자세히 보기</Link>
                    </button>
                </section>
            </div>
        </Slider>
    )
}