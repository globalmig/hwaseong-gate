"use client";
import Image from "next/image";
import Script from "next/script";

export default function Footer() {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <footer>
                <div>
                    <div onClick={handleScroll}>
                        <Image src="/icons/top.png" alt="맨 위로" width={56} height={56} />
                    </div>
                    <div>
                        <div className="flex-left">
                            <div>
                                <Image src="/icons/logo.png" alt="홀딩도어와 양개도어, EGI 휀스 제작 및 시공 전문 화성게이트" width={1536} height={1024} />
                            </div>
                            <h2 className="pc">(주)화성게이트</h2>
                        </div>

                        <div>
                            <ul>
                                <li>상호명 : (주)화성게이트</li>
                                <li>사업자번호 : 887-52-01098</li>
                                <li>대표자 : 김막봉</li>
                                <li>대표번호 : 010-2395-1592</li>
                                <li>팩스 : 0508-908-9464</li>
                                <li>주소 : 경기도 화성시 송산면 삼존리 655-1</li>
                            </ul>
                            <p>@2026 (주)화성게이트. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <Script
                src="//wsa.mig-log.com/wsalog.js"
                type="text/javascript"
                strategy="beforeInteractive"
            />
            <Script
                id="wsa-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            wsa.inflow("www.hwasung-gate.com");
            wsa_do(wsa);
          `
                }}
            />
        </>
    )
}