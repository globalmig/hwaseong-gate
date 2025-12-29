import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <MainSlide />
        </div>
        <div className="flex-left">
          <section>
            <h3>타이틀</h3>
            <p>내용</p>
            <div>
              <Link href="/">
                <Image src="" alt="바로가기" width={100} height={20} />
              </Link>
            </div>
          </section>
          <section>
            <h3>타이틀</h3>
            <p>내용</p>
            <div>
              <Link href="/">
                <Image src="" alt="바로가기" width={100} height={20} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <article className="home-production">
        <div>
          <div>
            <h2>생산부문</h2>
            <p>내용</p>
          </div>
        </div>
      </article>
      <article className="home-production">
        <div>
          <div>
            <h2>건설부문</h2>
            <p>내용</p>
          </div>
        </div>
      </article>
      <div className="cs">
        <div>
          <h3>고객센터</h3>
          <p>평일 09:00 AM ~ 18:00 PM</p>
          <h1>연락처</h1>
          <h2>이메일</h2>
        </div>
      </div>
    </>
  );
}
