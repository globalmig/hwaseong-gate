"use client";

import { PROCESSING } from "@/data/product";
import Image from "next/image";

export default function Processing() {

    if (!PROCESSING) {
        return <div className="loading">정보를 불러오는 중입니다...</div>
    }

    return (
        <>
            {PROCESSING.map(p =>
                <section key={p.id}>
                    <div>
                        <div>
                            <p>{p.name}</p>
                        </div>
                    </div>
                    <div className="display-flex-flow">
                        {
                            p.img.map(i =>
                                <div key={i}>
                                    <Image src={i} alt={p.name} width={1000} height={1000} />
                                </div>
                            )
                        }
                    </div>
                </section>
            )}
        </>
    )
}