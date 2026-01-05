"use client";
import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    // isOpen : nav 열기
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // openSub : 서브열기
    const [openSub, setOpenSub] = useState<string | null>(null);
    // ishover : 피시메뉴 호버
    const [isHover, setIsHover] = useState<string | null>(null);
    const [isActive, setIsActive] = useState<string | null>(null);
    
    return (
            <header>
                <div>

                    <div className="display-flex">
                        <div>
                            <Link href="/" className="flex-left">
                            <div>
                                <Image src="/icons/logo.png" alt="홈으로 이동" width={1536} height={1024}/>
                            </div>
                            <h4>(주)화성게이트</h4>
                            </Link>
                        </div>
                        <div>
                            <div className={`pc ${isHover ? "hover" : ""}`}>
                                <ul className="display-flex">
                                    {Object.entries(CATEGORY_MAP).map(([key, c]) =>
                                        <li key={key} className={isActive === key ? "active" : ""} onMouseEnter={() => {setIsHover(key); setIsActive(key)}}>{c.title}</li>
                                    )}
                                </ul>
                                <div>
                                    <div className="display-flex" onMouseLeave={()=> {setIsHover(null); setIsActive(null)}}>
                                        {Object.entries(CATEGORY_MAP).map(([key, c]) =>
                                            <ul key={key}>
                                                {c.categories.map(c =>
                                                    <li key={c.name}>
                                                        <Link href={`/${key}/${c.url}`}>
                                                            {c.name}
                                                        </Link>
                                                    </li>
                                                )
                                                }
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <nav className={isOpen ? "nav-open" : ""}>
                                <div onClick={() => setIsOpen(false)}>
                                    <h2 className="pc">화성게이트</h2>
                                    <div>
                                        <Image src="/icons/close.png" alt="메뉴 닫기" width={38} height={38} />
                                    </div>
                                </div>
                                <ul>
                                    {Object.entries(CATEGORY_MAP).map(([key, c]) => (
                                        <li key={key}>
                                            {/* main category */}
                                            <div className="display-flex" onClick={() => setOpenSub(openSub === key ? null : key)}>
                                                <p>{c.title}</p>
                                                <div className="mo">
                                                    <Image
                                                        src="/icons/arrow_down.png"
                                                        alt="서브메뉴 열기"
                                                        width={22}
                                                        height={12}
                                                    />
                                                </div>
                                            </div>
                                            {/* sub category */}
                                            <ul className={openSub === key ? "sub-open" : ""}>
                                                {c.categories.map((sub) => (
                                                    <li key={sub.url}>
                                                        <Link href={`/${key}/${sub.url}`} onClick={() => {
                                                            setIsOpen(false); setOpenSub(null);
                                                        }
                                                        }>- {sub.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div onClick={() => setIsOpen(true)}>
                            <Image src="/icons/nav.png" alt="메뉴열기" width={35} height={29} />
                        </div>
                    </div>
                    <div className="black-bg" style={{display: isOpen ? "block" : "none"}}></div>

                </div>
            </header>
    )
}