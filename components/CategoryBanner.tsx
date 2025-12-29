'use client';

import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryBanner() {
    const pathname = usePathname(); // ex: /about
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = CATEGORY_MAP[pathnameSplit[0]];

    const mainCategory = pathnameSplit[0];
    const subCategory = pathnameSplit[1];
    const categoryName = CATEGORY_MAP[mainCategory];
    const subcategoryName = categoryName?.categories?.find(c => c.url === subCategory)?.name || categoryName?.title;


    return (
        <main>
            <div>

                <div>
                    <Image src={category.banner} alt={`${category.title} banner`} width={2560} height={700} priority quality={100} />
                </div>

                <div>
                    <h1>{category.title}</h1>
                </div>

                <div>
                    <div>
                        <Link href="/">
                            <Image src="/icons/home.png" alt="홈으로 이동" width={45} height={40} />
                        </Link>
                    </div>
                    <div className="display-flex">
                        <h1>{category.title}</h1>
                        <div>
                            <Image src="/icons/arrow_down.png" alt="카테고리 선택" width={33} height={16} />
                        </div>
                        <div>
                            <ul>
                                {Object.entries(CATEGORY_MAP).map(([key, c]) =>
                                    <li key={key}><Link href={`/${key}/${c.categories[0].url}`}>{c.title}</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="display-flex">
                        <h1>{subcategoryName}</h1>
                        <div>
                            <Image src="/icons/arrow_down.png" alt="카테고리 선택" width={33} height={16} />
                        </div>
                        <div>
                            <ul>
                                {category.categories.map(sub =>
                                    <li key={sub.name}><Link href={`/${mainCategory}/${sub.url}`}>{sub.name}</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}