import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cs from "@/components/Cs";

export const metadata: Metadata = {
  title: '(주)화성게이트',
  description: '공장, 상가, 창고 등 현장 구조에 맞춘 각종 철구조물을 제작 및 시공, 해체를 전문으로 하고 있습니다.',
  openGraph: {
    title: '(주)화성게이트',
    description: '홀딩도어, 양개도어, EGI휀스 제작 및 시공, 해체 전문 업체',
    url: 'https://www.hwasung-gate.com',
    siteName: '(주)화성게이트',
    images: [
      {
        url: 'https://www.hwasung-gate.com/images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: '(주)화성게이트',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': '7ecd9823a517761b72fc885441b415af9a35a319',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Cs/>
        <Footer/>
      </body>
    </html>
  );
}
