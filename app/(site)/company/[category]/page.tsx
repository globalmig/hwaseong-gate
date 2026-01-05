import Image from "next/image";

export default function CompanyPage() {
    return (
        <article className="company">
            <div>
                <div>
                    <Image src="/icons/logo.png" alt="로고" width={1536} height={1024} />
                </div>
                <h2>(주)화성게이트</h2>
                <h3>저희는 홀딩도어, 양개도어, 각종 철구조물의 제작·시공 및 홀딩도어 해체를 전문으로 하는 업체입니다.</h3>
                <ul>
                    <li>현장 구조와 사용 목적에 맞춰 도어 제작부터 설치까지 직접 진행하며, 공장, 상가, 주차장, 물류창고 등 다양한 현장에 대응하고 있습니다.</li>
                    <li>또한 철구조물 보강 및 기존 도어 해체·교체 작업까지 가능하여 공정에 맞춘 신속하고 안전한 시공을 제공합니다.</li>
                </ul>
            </div>
        </article>
    )
}