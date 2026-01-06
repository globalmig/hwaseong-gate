import { NextResponse } from "next/server";
import { SolapiMessageService } from "solapi";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const company = formData.get("company");
        const name = formData.get("name");
        const phone = formData.get("phone");
        const contents = formData.get("contents");

        const apiKey = process.env.SOLAPI_API_KEY!;
        const apiSecret = process.env.SOLAPI_API_SECRET!;
        const apinumber = process.env.SOLAPI_API_NUMBER!;

        const messageService = new SolapiMessageService(apiKey, apiSecret);

        const message = `
[문의 접수]

업체명: ${company}
담당자: ${name}
연락처: ${phone}
문의 내용: ${contents}
`.trim();

        const sendResult = await messageService.sendOne({
            to: apinumber,
            from: apinumber,
            text: message,
            subject: "[문의 접수]",
        });

        return NextResponse.json({ success: true, sendResult });

    } catch (error: any) {
        console.error("발송 실패:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}