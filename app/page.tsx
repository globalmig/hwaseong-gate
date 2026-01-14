"use client";
import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [isHover, setIsHover] = useState<string|null>(null);

  return (
    <>
      <main className="home-main">
        <div>
          <MainSlide />
        </div>
        <div>
          <section>
            <div className="display-flex">
              <h3><Link href="/processing/repair_insurance">수리 현장 살펴보기</Link></h3>
              <div>
                  <Image src="/icons/more_white.png" alt="홀딩도어 수리 바로가기" width={16} height={29} />
              </div>
            </div>
            <p>갑작스러운 홀딩도어 고장을 보험처리와 함께 해결해드립니다.</p>
          </section>
          <section>
            <div className="display-flex">
              <h3><Link href="/business/A">제품 살펴보기</Link></h3>
              <div>
                  <Image src="/icons/more_white.png" alt="홀딩도어 시공 바로가기" width={16} height={29} />
              </div>
            </div>
            <p>제품 및 시공 관련 제품을 확인해볼 수 있습니다.</p>
          </section>
        </div>
      </main>
      <article className="home-business">
        <div>
          <div>
            <h2>제품 안내</h2>
            <p>현장 구조와 사용 목적에 맞춰 제작·설치합니다.</p>
          </div>
          <div className="display-flex-flow">
            <section onMouseEnter={() => setIsHover("holding")} onMouseLeave={() => setIsHover(null)}>
              <div>
                <Image className={isHover === "holding" ? "section-hover" : ""} src="/images/홀딩도어_product.jpg" alt="홀딩도어" width={383} height={383} />
              </div>
              <div>
                <div>
                  <p>HOLDING DOOR</p>
                  <h2>홀딩도어</h2>
                  <p className={isHover === "holding" ? "section-hover" : ""}>대형 개구부에 적합한 접이식 구조로, 가장 대표적인 건설 현장 출입문입니다.</p>
                </div>
                <button>
                  <Link href="/business/A">MORE</Link>
                </button>
              </div>
            </section>
            <section onMouseEnter={() => setIsHover("double")} onMouseLeave={() => setIsHover(null)}>
              <div>
                <Image className={isHover === "double" ? "section-hover" : ""} src="/images/양개도어_product.jpg" alt="양개도어" width={383} height={383} />
              </div>
              <div>
                <div>
                  <p>DOUBLE DOOR</p>
                  <h2>양개도어</h2>
                  <p className={isHover === "double" ? "section-hover" : ""}>건설 현장이나 공장, 창고 등의 출입구에 설치되는 출입문입니다.</p>
                </div>
                <button>
                  <Link href="/business/B">MORE</Link>
                </button>
              </div>
            </section>
            <section onMouseEnter={() => setIsHover("egi")} onMouseLeave={() => setIsHover(null)}>
              <div>
                <Image className={isHover === "egi" ? "section-hover" : ""} src="/images/휀스_product.jpg" alt="EGI휀스" width={383} height={383} />
              </div>
              <div>
                <div>
                  <p>EGI FENCE</p>
                  <h2>EGI휀스</h2>
                  <p className={isHover === "egi" ? "section-hover" : ""}>건설, 공장, 공사 현장의 출입 관리와 안전을 확보할 수 있는 경계용 울타리입니다.</p>
                </div>
                <button>
                  <Link href="/business/C">MORE</Link>
                </button>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
