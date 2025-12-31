
interface DetailProps{
        id: number,
        name: string,
        contents: string,
        size: string,
        construction: {
            state: string,
            count: string
        },
        rental: {
            date: string,
            state: string,
            count: string
        },
        img: string,
        site: string[],
        detail: {id: number, name: string, img: string[]}[]
}

export const PRODUCT : DetailProps[] = [
    {
        id: 1,
        name: "홀딩도어",
        contents: "대형 개구부에 적합한 접이식 구조로 , 가장 대표적인 건설 현장 출입문입니다.공간 활용과 내구성이 뛰어나며, 넓은 출입구를 쉽게 개방하고 닫을 수 있어 편리한 개폐와 보안성에도 좋습니다.",
        size: "길이: 6M~20M, 높이: 6M / 길이: 4M~6M, 높이: 2.4M",
        construction: {
            state: "신제품",
            count: "10M 이상",
        },
        rental: {
            date: "1일~48개월",
            state: "중고품",
            count: "10M 이상",
        },
        img: "/images/홀딩도어_product.jpg",
        site: [
            "/images/홀딩도어_현장1.jpg",
            "/images/홀딩도어_현장1.jpg",
        ],
        detail: [
            {
                id: 1,
                name: "화성 장안면 레이저 가공 공장 출입문 설치",
                img: [
                    "/images/화성_장안면_홀딩1.jpg",
                    "/images/화성_장안면_홀딩2.jpg",
                    "/images/화성_장안면_홀딩3.jpg",
                    "/images/화성_장안면_홀딩4.jpg",
                    "/images/화성_장안면_홀딩5.jpg",
                    "/images/화성_장안면_홀딩6.jpg",
                ]
            }, {
                id: 2,
                name: "부천 소사 DL 건설 현장",
                img: [
                    "/images/부천DL_홀딩1.jpg",
                ]
            }, {
                id: 3,
                name: "홍은동 두산건설 현장 홀딩도어",
                img: [
                    "/images/홍은동_두산건설_홀딩1.jpg",
                ]
            },
        ]
    }, {
        id: 2,
        name: "양개도어",
        contents: "건설 현장이나 공장, 창고 등의 출입구에 설치되는 출입문으로, 좌우로 개폐되는 구조를 가지고 있습니다. 출입이 잦은 넓은 공간에 출입구를 효율적으로 관리할 수 있습니다.",
        size: "길이: 4M~6M, 높이: 2.4M",
        construction: {
            state: "신제품",
            count: "10M 이상",
        },
        rental: {
            date: "1일~48개월",
            state: "중고품",
            count: "10M 이상",
        },
        img: "/images/양개도어_product.jpg",
        site: [
            "/images/양개도어_현장1.jpg",
            "/images/양개도어_현장1.jpg",
        ],
        detail: [
            {
                id: 1,
                name: "",
                img: [
                    "/images/양개도어_상세1.jpg",
                    "/images/양개도어_상세2.jpg",
                    "/images/양개도어_상세3.jpg",
                    "/images/양개도어_상세4.jpg",
                ]
            },
        ]
    },
]