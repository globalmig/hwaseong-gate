'use client'
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

interface FormProps {
    company: string;
    name: string;
    phone: string;
    contents: string;
    privacy: false;
}

export default function InquireForm() {

    const router = useRouter();

    const [form, setForm] = useState<FormProps>({
        company: "",
        name: "",
        phone: "",
        contents: "",
        privacy: false
    });

    const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        const newValue =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : value;

        setForm(prev => ({
            ...prev,
            [name]: newValue,
        }));
    }, []);

    const onSubmitForm = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.company.trim()) {
            alert("업체명을 입력해주세요.")
            return;
        }

        if (!form.name.trim()) {
            alert("성함을 입력해주세요.");
            return;
        }

        if (!form.phone.trim()) {
            alert("연락처를 입력해주세요.");
            return;
        }

        if (!form.contents.trim()) {
            alert("문의내용을 입력해주세요.");
            return;
        }

        if (!/^[0-9]{10,11}$/.test(form.phone)) {
            alert("연락처는 숫자만 10~11자리로 입력해주세요.")
            return;
        }

        if (!form.privacy) {
            alert("개인정보 수집 및 이용 동의를 해주세요.");
            return
        }

        // SMS 
        try {
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                if (value !== null) formData.append(key, value as any);
            });

            const response = await fetch("/api/inquire", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert("문의가 정상적으로 접수되었습니다.");
                router.push("/");
                window.location.reload();
            } else {
                alert("문자 발송 중 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }

    }, [form]);

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="company"><h3 className="required">업체명</h3></label>
                    <input type="text" id="company" name="company" placeholder="업체명을 입력해주세요." onChange={onChangeForm} value={form.company} />
                </div>
                <div>
                    <label htmlFor="name"><h3 className="required">담당자 성함</h3></label>
                    <input type="text" id="name" name="name" placeholder="성함을 입력해주세요." onChange={onChangeForm} value={form.name} />
                </div>
                <div>
                    <legend><h3 className="required">연락처</h3></legend>
                    <div className="display-flex">
                        <input type="text" inputMode="numeric" id="phoneFront" name="phoneFront" maxLength={11} onChange={onChangeForm} value={form.phone} placeholder="연락처를 입력해주세요." />
                    </div>
                </div>

                <div>
                    <label htmlFor="contents"><h3>문의 내용</h3></label>
                    <textarea id="contents" name="contents" rows={7} placeholder="문의 내용을 입력해주세요." onChange={onChangeForm} value={form.contents} />
                </div>

                <div>
                    <label htmlFor=""><h3>개인 정보 수집 및 이용 동의</h3></label>
                    <div>
                        <p>아래의 개인 정보를 수집하며, 상담 외 다른 목적으로 사용되지 않습니다.</p>
                        <ul>
                            <li>- 수집 항목 : 업체명, 이름, 연락처, 문의 내용</li>
                            <li>- 수집 및 이용 목적 : 문의 상담 및 고객 응대</li>
                            <li>- 보유 기간 : 문의일로부터 1년간 보관 후 즉시 파기</li>
                            <li>- 수집 방법 : 홈페이지 문의 접수</li>
                        </ul>
                        <p>접수된 문의 내용은 SMS 발송을 통해 <span>[(주)화성게이트]</span> 담당자에게 실시간 전달됩니다.</p>
                        <p>개인정보 수집에 동의하지 않으실 경우, 상담 서비스 제공이 제한될 수 있습니다.</p>
                    </div>
                    <div className="display-flex">
                        <input type="checkbox" id="privacy" name="privacy" checked={form.privacy} onChange={onChangeForm} />
                        <label htmlFor="privacy"></label>
                        <p>개인 정보 수집 및 이용에 동의합니다.</p>
                    </div>
                </div>

                <button type="submit">문의 접수하기</button>

            </form>
        </>
    );
}
