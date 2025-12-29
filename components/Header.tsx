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

    return (
            <header>
                <div>

                    <div className="display-flex">
                        <h2>
                            <Link href="/">화성게이트</Link>
                        </h2>
                        <div>
                            <div className="pc">
                                <ul className="display-flex">
                                    {Object.entries(CATEGORY_MAP).map(([key, c]) =>
                                        <li key={key} onMouseEnter={() => setIsHover(key)}>{c.title}</li>
                                    )}
                                </ul>
                                <div className={isHover ? "hover" : ""}>
                                    <div className="display-flex">
                                        {Object.entries(CATEGORY_MAP).map(([key, c]) =>
                                            <ul key={key}>
                                                {c.categories.map(c =>
                                                    <li>
                                                        <Link href={`/${key}/${c.url}`}
                                                            onClick={() => setIsHover(null)}>
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
                                    <Image src="/icons/close.png" alt="메뉴 닫기" width={38} height={38} />
                                </div>
                                <ul>
                                    {Object.entries(CATEGORY_MAP).map(([key, c]) => (
                                        <li key={key}>
                                            {/* main category */}
                                            <div className="display-flex" onClick={() => setOpenSub(openSub === key ? null : key)}>
                                                <p>{c.title}</p>
                                                <div>
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
                                                        }>{sub.name}</Link>
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