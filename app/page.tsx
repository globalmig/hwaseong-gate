import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="home-main">
        <div>
          <MainSlide />
        </div>
        <div>
          <section>
            <h3>현장 살펴보기</h3>
            <p>(주)화성게이트의 기술력으로 완성된 시공 현장을 확인해보세요.</p>
            <div>
              <Link href="/">
                <Image src="/icons/arrow.png" alt="바로가기" width={100} height={20} />
              </Link>
            </div>
          </section>
          <section>
            <h3>문의하기</h3>
            <p>제품 및 시공 관련 견적을 문의할 수 있습니다.</p>
            <div>
              <Link href="/inquire">
                <Image src="/icons/arrow.png" alt="바로가기" width={100} height={20} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <article className="home-business">
        <div>
          <div>
            <h2>제품 안내</h2>
            <p>현장 구조와 사용 목적에 맞춰 제작·설치됩니다.</p>
          </div>
          <div className="display-flex-flow">
            <section>
              <div>
                <Image src="/images/box.jpg" alt="홀딩도어" width={380} height={380} />
              </div>
              <div>
                <div>
                  <p>홀딩도어 영문</p>
                  <h1>홀딩도어</h1>
                  <p>설명</p>
                </div>
                <button>
                  <Link href="/business/A">MORE</Link>
                </button>
              </div>
            </section>
            <section>
              <div>
                <Image src="/images/box.jpg" alt="양개도어" width={380} height={380} />
              </div>
              <div>
                <div>
                  <p>홀딩도어 영문</p>
                  <h1>홀딩도어</h1>
                  <p>설명</p>
                </div>
                <button>
                  <Link href="/business/B">MORE</Link>
                </button>
              </div>
            </section>
            <section>
              <div>
                <Image src="/images/box.jpg" alt="현장 출입문" width={380} height={380} />
              </div>
              <div>
                <div>
                  <p>홀딩도어 영문</p>
                  <h1>홀딩도어</h1>
                  <p>설명</p>
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
