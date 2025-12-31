"use client";
import Image from "next/image";

export default function Footer() {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer>
            <div>
                <div onClick={handleScroll}>
                    <Image src="/icons/top.png" alt="맨 위로" width={56} height={56} />
                </div>
                <div>
                    <div className="flex-left">
                        <div>
                            <Image src="/icons/logo.png" alt="로고" width={1536} height={1024} />
                        </div>
                        <h2>(주)화성게이트</h2>
                    </div>

                    <div>
                        <ul>
                            <li>상호명 : (주)화성게이트</li>
                            <li>사업자번호 : 887-52-01098</li>
                            <li>대표자 : 김막봉</li>
                            <li>대표번호 : 031-404-0035</li>
                            <li>팩스 : 031-404-0036</li>
                            <li>이메일 : sangduckst111@naver.com</li>
                            <li>주소 : 경기도 화성시 송산면 삼존리 655-1</li>
                            {/* <li>주소 : 경기도 안산시 단원구 중앙대로 415, 608호(신길동)</li> */}
                        </ul>
                        <p>@2026 화성게이트. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}