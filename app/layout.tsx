import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cs from "@/components/Cs";

export const metadata: Metadata = {
  title: '화성게이트 | 공장·창고·상가 철구조물 제작·시공 전문',
  description: '홀딩도어·양개도어·EGI 휀스 제작 및 시공 전문. 공장·창고·상가 맞춤 공사 상담 010-2395-1592',
  keywords: [
  "화성게이트",
  "전국 철구조물",
  "전국 공장 공사",
  "홀딩도어",
  "양개도어",
  "EGI 휀스",
  "창고 공사",
  "상가 공사",
  "철 구조물 제작",
  "철 구조물 시공",
],
  openGraph: {
    title: '화성게이트',
    description: '홀딩도어·양개도어·EGI 휀스 제작 및 시공 전문. 공장·창고·상가 맞춤 공사 상담 010-2395-1592',
    url: 'https://www.hwasung-gate.com',
    siteName: '화성게이트',
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
  verification: {
    other: {
      'naver-site-verification': '7ecd9823a517761b72fc885441b415af9a35a319',
    }
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Cs />
        <Footer />
      </body>
    </html>
  );
}
