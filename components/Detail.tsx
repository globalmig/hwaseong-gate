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
                    <p>{detail.contents}</p>
                    <div className="display-flex">
                        <div>
                            <Image src={detail.img} alt={detail.name} width={600} height={400} />
                        </div>
                        <div>
                            <ul>
                                <li><span>시공비</span>별도 문의</li>
                                <li><span>재매입가</span>별도 문의</li>
                                <li><span>규격</span>{detail.size}</li>
                                <li><span>상태</span>{detail.construction.state}</li>
                                <li><span>기본수량</span>{detail.construction.count}</li>
                                <li><span>결제조건</span>협의</li>
                                <li><span>운반·장비</span>포함</li>
                            </ul>
                            <ul>
                                <li><span>임대시공</span>별도 문의</li>
                                <li><span>임대일</span>{detail.rental.date}</li>
                                <li><span>보증금</span>협의</li>
                                <li><span>상태</span>{detail.rental.state}</li>
                                <li><span>기본수량</span>{detail.rental.count}</li>
                                <li><span>결제조건</span>협의</li>
                                <li><span>운반·장비</span>포함</li>
                            </ul>
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
                        <li><span>재매입가</span>별도 문의</li>
                        <li><span>길이</span>{detail.size}</li>
                        <li><span>높이</span>{detail.size}</li>
                        <li><span>지역</span>전국</li>
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
                    {detail.detail.map(d=>
                        <section key={d.id}>
                            <h3>{d.name}</h3>
                            <div className="display-flex-flow">
                                {d.img.map(i =>
                                    <div>
                                    <Image src={i} alt={d.name} width={300} height={300}/>
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