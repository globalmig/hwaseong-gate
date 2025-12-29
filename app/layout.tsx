import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: '화성게이트',
  description: '',
  openGraph: {
    title: '화성게이트',
    description: '',
    url: 'https://www..com',
    siteName: '화성게이트',
    images: [
      {
        url: 'https://www..com/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '화성게이트',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': '',
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
        <Footer/>
      </body>
    </html>
  );
}
