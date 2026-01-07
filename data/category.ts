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
            { name: "EGI휀스", url: "C", },
        ],
    },
    processing: {
        title: '홀딩도어 수리·보험처리',
        banner: "/images/processing_banner.jpg",
        categories: [
            { name: "홀딩도어 수리·보험처리", url: "repair_insurance", },
        ],
    },
};