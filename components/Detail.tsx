"use client";

import { CATEGORY_MAP } from "@/data/category";
import { PRODUCT } from "@/data/product";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Detail() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = CATEGORY_MAP[pathnameSplit[0]];
    const sub = pathnameSplit[1];
    const categoryFilter = category.categories.find(c => c.url === sub);
    const detail = PRODUCT.find(p => p.name === categoryFilter?.name);

    if (!detail) {
        return <div className="loading">정보를 불러오는 중입니다...</div>
    }

    return (
        <>
            <div>
                <section>
                    <div>
                        <p>{detail.name} 시공</p>
                    </div>
                </section>
                <div>
                    {detail.contents.map(c =>
                        <p key={c}>{c}</p>
                    )}
                    <div className="display-flex-flow">
                        <div>
                            <Image src={detail.img} alt={detail.name} width={1000} height={1000} />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <p>시공비</p>
                                    <p>별도 문의</p>
                                </li>
                                <li><p>재매입가</p>
                                    <p>별도 문의</p>
                                </li>
                                <li>
                                    <p>규격</p>
                                    <p>{detail.size}</p>
                                </li>
                                <li>
                                    <p>상태</p>
                                    <p>{detail.construction.state}</p>
                                </li>
                                <li>
                                    <p>기본수량</p>
                                    <p>{detail.construction.count}</p>
                                </li>
                                <li>
                                    <p>결제조건</p>
                                    <p>협의</p>
                                </li>
                                <li>
                                    <p>운반·장비</p>
                                    <p>포함</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>임대시공</p>
                                    <p>별도 문의</p>
                                </li>
                                <li>
                                    <p>임대일</p>
                                    <p>{detail.rental.date}</p>
                                </li>
                                <li>
                                    <p>보증금</p>
                                    <p>협의</p>
                                </li>
                                <li>
                                    <p>상태</p>
                                    <p>{detail.rental.state}</p>
                                </li>
                                <li>
                                    <p>기본수량</p>
                                    <p>{detail.rental.count}</p>
                                </li>
                                <li>
                                    <p>결제조건</p>
                                    <p>협의</p>
                                </li>
                                <li>
                                    <p>운반·장비</p>
                                    <p>포함</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section>
                    <div>
                        <p>보행자 출입문 설치</p>
                    </div>
                </section>
                <div>
                    <div>
                        <h4>쪽문 2M*1M 설치</h4>
                        <p>현장의 작업자, 협력사, 방문 객 등이 안전하게 출입할 수 있도록 별도로 쪽문을 설치해드립니다.</p>
                    </div>
                    <div className="display-flex">
                        <div>
                            <Image src="/images/보행자출입문_1.jpg" alt="보행자 출입문" width={1000} height={1000} />
                        </div>
                        <div>
                            <Image src="/images/보행자출입문_2.jpg" alt="보행자 출입문" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section>
                    <div>
                        <p>{detail.name} 시공 및 임대 해체</p>
                    </div>
                </section>
                <div>
                    <ul>
                        <li>
                            <p>재매입가</p>
                            별도 문의
                        </li>
                        <li>
                            <p>길이</p>
                            <p>{detail.width}</p>
                        </li>
                        <li>
                            <p>높이</p>
                            <p>{detail.height}</p>
                        </li>
                        <li>
                            <p>지역</p>
                            <p>전국</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <section>
                    <div>
                        <p>{detail.name} 현장 살펴보기</p>
                    </div>
                </section>
                <div>
                    {detail.detail.map(d =>
                        <section key={d.id}>
                            <h4>{d.name}</h4>
                            <div className="display-flex-flow">
                                {d.img.map(i =>
                                    <div key={i} className={d.img.length <= 1 ? "full" : ""}>
                                        <Image src={i} alt={d.name} width={1000} height={1000} />
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </>
    )
}