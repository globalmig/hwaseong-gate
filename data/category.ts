export const CATEGORY_MAP: { [key: string]: { title: string; banner: string; categories: { name: string, url: string, }[] } } = {
    company: {
        title: '회사소개',
        banner: "/images/about_banner.jpg",
        categories: [
            { name: "기업정보", url: "about", },
        ],
    },
    construction: {
        title: '건설부문',
        banner: "/images/construction_banner.jpg",
        categories: [
            { name: "건설1", url: "construction1", },
            { name: "건설2", url: "construction2", },
        ],
    },
    production: {
        title: '생산부문',
        banner: "/images/production_banner.jpg",
        categories: [
            { name: "생산1", url: "production1", },
            { name: "생산2", url: "production2", },
            { name: "생산3", url: "production3", },
        ],
    },
    inquire: {
        title: '문의하기',
        banner: "/images/inquire_banner.jpg",
        categories: [
            { name: "문의하기", url: "write", },
        ],
    },
};