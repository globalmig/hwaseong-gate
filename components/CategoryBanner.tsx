'use client';

import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryBanner() {

    const pathname = usePathname(); // ex: /about
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = CATEGORY_MAP[pathnameSplit[0]];

    const mainCategory = pathnameSplit[0];
    const subCategory = pathnameSplit[1];
    const categoryName = CATEGORY_MAP[mainCategory];
    const subcategoryName = categoryName?.categories?.find(c => c.url === subCategory)?.name || categoryName?.title;

    // category toggle
    const [mainToggle, setMainToggle] = useState<Boolean>(false);
    const [subToggle, setSubToggle] = useState<Boolean>(false);

    useEffect(() => {
        setMainToggle(false);
        setSubToggle(false);
    }, [pathname])

    return (
        <main className="category-main">
            <div>

                <div>
                    <Image src={category.banner} alt={`${category.title} banner`} width={2560} height={700} priority quality={100} />
                </div>

                <div>
                    <h1>{subcategoryName}</h1>
                </div>

                <div className="flex-left">
                    <div>
                        <Link href="/">
                            <Image src="/icons/home.png" alt="홈으로 이동" width={45} height={40} />
                        </Link>
                    </div>
                    <section className="display-flex">
                        <h4>{category.title}</h4>
                        <div>
                            <Image src="/icons/arrow_down.png" alt="카테고리 선택" onClick={() => { setMainToggle(!mainToggle); setSubToggle(false) }} width={33} height={16} />
                        </div>
                        <ul className={mainToggle ? "category-open" : ""}>
                            {Object.entries(CATEGORY_MAP).map(([key, c]) =>
                                <li key={key}><Link href={`/${key}/${c.categories[0].url}`} onClick={() => setMainToggle(false)}>{c.title}</Link></li>
                            )}
                        </ul>
                    </section>
                    <section className="display-flex">
                        <h4>{subcategoryName}</h4>
                        <div>
                            <Image src="/icons/arrow_down.png" alt="카테고리 선택" onClick={() => { setSubToggle(!subToggle); setMainToggle(false); }} width={33} height={16} />
                        </div>
                        <ul className={subToggle ? "category-open" : ""}>
                            {category.categories.map(sub =>
                                <li key={sub.name}><Link href={`/${mainCategory}/${sub.url}`} onClick={() => setSubToggle(false)}>{sub.name}</Link></li>
                            )}
                        </ul>
                    </section>
                </div>

            </div>
        </main>
    )
}