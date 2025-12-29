"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function MainSlide() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Slider {...settings} className="main-slider">
            <div>
                <div>
                    <Image src="/images/banner_1.jpg" alt="배너1" width={2560} height={942} priority quality={100} />
                </div>
                <div>
                    <h1>타이틀</h1>
                    <p>설명</p>
                    <button>
                        <Link href="/">자세히 보기</Link>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <Image src="/images/banner_2.jpg" alt="배너1" width={2560} height={942} priority quality={100} />
                </div>
                <div>
                    <h1>타이틀</h1>
                    <p>설명</p>
                    <button>
                        <Link href="/">자세히 보기</Link>
                    </button>
                </div>
            </div>
        </Slider>
    )
}