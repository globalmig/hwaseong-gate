
interface DetailProps {
    id: number,
    name: string,
    contents: string[],
    size: string,
    width: string,
    height: string,
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
    detail: { id: number, name: string, img: string[] }[]
}

export const PRODUCT: DetailProps[] = [
    {
        id: 1,
        name: "홀딩도어",
        contents: [
            "홀딩도어는 대형 개구부에 적합한 접이식 구조로, 가장 대표적인 건설 현장 출입문입니다.",
            "공간 활용과 내구성이 뛰어나며, 넓은 출입구를 쉽게 개방하고 닫을 수 있어 편리한 개폐와 보안성에도 좋습니다."
        ],
        size: "길이: 6M~20M, 높이: 6M / 길이: 4M~6M, 높이: 2.4M",
        width: "6M~20M",
        height: "6M",
        construction: {
            state: "신제품",
            count: "10M 이상",
        },
        rental: {
            date: "1일~48개월",
            state: "중고품",
            count: "10M 이상",
        },
        img: "/images/화성_장안면_홀딩1.jpg",
        site: [
            "/images/홀딩도어_현장1.jpg",
            "/images/홀딩도어_현장1.jpg",
        ],
        detail: [
            {
                id: 1,
                name: "화성 장안면 레이저 가공 공장 출입문",
                img: [
                    "/images/화성_장안면_홀딩1.jpg",
                    "/images/화성_장안면_홀딩2.jpg",
                    "/images/화성_장안면_홀딩3.jpg",
                    "/images/화성_장안면_홀딩4.jpg",
                    "/images/화성_장안면_홀딩5.jpg",
                    "/images/화성_장안면_홀딩6.jpg",
                    "/images/화성_장안면_홀딩7.jpg",
                    "/images/화성_장안면_홀딩8.jpg",
                ]
            }, {
                id: 2,
                name: "부천 소사 DL 건설 현장",
                img: [
                    "/images/부천DL_홀딩.jpg",
                ]
            }, {
                id: 3,
                name: "홍은동 두산건설 현장 홀딩도어",
                img: [
                    "/images/홍은동_두산건설_홀딩.jpg",
                ]
            },
        ]
    }, {
        id: 2,
        name: "양개도어",
        contents: ["양개도어는 건설 현장이나 공장, 창고 등의 출입구에 설치되는 출입문으로, 좌우로 개폐되는 구조를 가지고 있습니다.",
            "출입이 잦은 넓은 공간에 출입구를 효율적으로 관리할 수 있습니다."
        ],
        size: "길이: 4M~6M, 높이: 2.4M",
        width: "4M~6M",
        height: "2.4M",
        construction: {
            state: "신제품",
            count: "10M 이상",
        },
        rental: {
            date: "1일~48개월",
            state: "중고품",
            count: "10M 이상",
        },
        img: "/images/양개도어_thumnail.jpg",
        site: [
            "/images/양개도어_현장1.jpg",
            "/images/양개도어_현장1.jpg",
        ],
        detail: [
            {
                id: 1,
                name: "양개도어 설치 작업",
                img: [
                    "/images/양개도어_상세1.jpg",
                    "/images/양개도어_상세2.jpg",
                ]
            }, {
                id: 2,
                name: "양개 쪽문(2M*2M) 설치 작업",
                img: [
                    "/images/쪽문1.jpg",
                    "/images/쪽문2.jpg",
                ]
            },
        ]
    }, {
        id: 3,
        name: "가설 EGI휀스",
        contents: [
            "가설 EGI휀스는 건설 현장이나 공장, 공사 구간 등에서 임시로 설치되는 안전 및 경계용 울타리입니다.",
            "출입 관리와 안전 확보에 효과적이며, 공사장 주변의 통행자와 작업자를 보호합니다."
        ],
        size: "1M~4M",
        width: "1.8M, 2M, 2.4M, 3M, 4M",
        height: "1M~2.2M",
        construction: {
            state: "신제품",
            count: "10M 이상",
        },
        rental: {
            date: "1일~48개월",
            state: "중고품",
            count: "10M 이상",
        },
        img: "/images/휀스_thumnail.jpg",
        site: [
            "/images/휀스_현장1.jpg",
            "/images/휀스_현장1.jpg",
        ],
        detail: [
            {
                id: 1,
                name: "가설 EGI휀스 설치 작업",
                img: [
                    "/images/휀스_상세1.jpg",
                    "/images/휀스_상세2.jpg",
                    "/images/휀스_상세3.jpg",
                ]
            },
        ]
    },
]

export const PROCESSING = [
    {
        id: 1,
        name: "인천 검단 DL현장 보험 처리 문짝 교체 작업",
        img: [
            "/images/인천검단DL현장_1.jpg",
            "/images/인천검단DL현장_2.jpg",
            "/images/인천검단DL현장_3.jpg",
            "/images/인천검단DL현장_4.jpg",
        ]
    },
    {
        id: 2,
        name: "청주 기둥 트러스 보험 처리 교체 작업",
        img: [
            "/images/청주기둥_1.jpg",
            "/images/청주기둥_2.jpg",
            "/images/청주기둥_3.jpg",
            "/images/청주기둥_4.jpg",
            "/images/청주기둥_5.jpg",
            "/images/청주기둥_6.jpg",
            "/images/청주기둥_7.jpg",
            "/images/청주기둥_8.jpg",
        ]
    },
    {
        id: 3,
        name: "인천 서구 보험 처리",
        img: [
            "/images/인천서구_1.jpg",
            "/images/인천서구_2.jpg",
            "/images/인천서구_3.jpg",
            "/images/인천서구_4.jpg",
            "/images/인천서구_5.jpg",
            "/images/인천서구_6.jpg",
            "/images/인천서구_7.jpg",
            "/images/인천서구_8.jpg",
        ]
    },
]