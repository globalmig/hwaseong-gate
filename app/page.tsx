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
              <h3><Link href="/inquire">현장 살펴보기</Link></h3>
              <div>
                  <Image src="/icons/more_white.png" alt="바로가기" width={16} height={29} />
              </div>
            </div>
            <p>(주)화성게이트의 기술력으로 완성된 시공 현장을 확인해보세요.</p>
          </section>
          <section>
            <div className="display-flex">
              <h3><Link href="/inquire">문의하기</Link></h3>
              <div>
                  <Image src="/icons/more_white.png" alt="바로가기" width={16} height={29} />
              </div>
            </div>
            <p>제품 및 시공 관련 견적을 문의할 수 있습니다.</p>
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
                  <h1>홀딩도어</h1>
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
                  <h1>양개도어</h1>
                  <p className={isHover === "double" ? "section-hover" : ""}>건설 현장이나 공장, 창고 등의 출입구에 설치되는 출입문입니다.</p>
                </div>
                <button>
                  <Link href="/business/B">MORE</Link>
                </button>
              </div>
            </section>
            <section onMouseEnter={() => setIsHover("pedestrain")} onMouseLeave={() => setIsHover(null)}>
              <div>
                <Image className={isHover === "pedestrain" ? "section-hover" : ""} src="/images/현장출입문_product.jpg" alt="현장 출입문" width={383} height={383} />
              </div>
              <div>
                <div>
                  <p>PEDESTRAIN DOOR</p>
                  <h1>보행자 출입문</h1>
                  <p className={isHover === "pedestrain" ? "section-hover" : ""}>현장의 작업자, 협력사, 방문 객 등이 안전하게 출입할 수 있는 쪽문입니다.</p>
                </div>
                <button>
                  <Link href="/business/A">MORE</Link>
                </button>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
