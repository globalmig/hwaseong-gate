export const CATEGORY_MAP: { [key: string]: { title: string; banner: string; categories: { name: string, url: string, }[] } } = {
    company: {
        title: '회사소개',
        banner: "/images/about_banner.jpg",
        categories: [
            { name: "기업정보", url: "about", },
        ],
    },
    business: {
        title: '제품안내',
        banner: "/images/business_banner.jpg",
        categories: [
            { name: "홀딩도어", url: "A", },
            { name: "양개도어", url: "B", },
        ],
    },
    processing: {
        title: '홀딩도어 수리·보험처리',
        banner: "/images/processing_banner.jpg",
        categories: [
            { name: "홀딩도어 수리·보험처리", url: "repair_insurance", },
        ],
    },
    // production: {
    //     title: '생산부문',
    //     banner: "/images/production_banner.jpg",
    //     categories: [
    //         { name: "생산1", url: "production1", },
    //         { name: "생산2", url: "production2", },
    //         { name: "생산3", url: "production3", },
    //     ],
    // },
    inquire: {
        title: '문의하기',
        banner: "/images/inquire_banner.jpg",
        categories: [
            { name: "문의하기", url: "write", },
        ],
    },
};