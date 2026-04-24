import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, website, whatYouDo, need } = await req.json();

  if (!name || !email || !need || !company || !whatYouDo) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "GoodSites Mockup Request <onboarding@resend.dev>",
    to: "andru.adrianto@gmail.com",
    replyTo: email,
    subject: `Mockup request — ${company} (${name})`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111">
        <h2 style="margin-bottom:4px">New free mockup request</h2>
        <p style="color:#777;font-size:13px;margin-top:0">Submitted via goodsites.com.au</p>
        <hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0"/>
        <table style="width:100%;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#999;width:160px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#999">Business</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>
          <tr><td style="padding:8px 0;color:#999">Website</td><td style="padding:8px 0;font-weight:600">${website || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#999;vertical-align:top">What they do</td><td style="padding:8px 0">${whatYouDo}</td></tr>
          <tr><td style="padding:8px 0;color:#999">Goal</td><td style="padding:8px 0;font-weight:600">${need}</td></tr>
          <tr><td style="padding:8px 0;color:#999">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${email}" style="color:#111">${email}</a></td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
