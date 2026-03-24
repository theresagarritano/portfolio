import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { renderToBuffer } from "@react-pdf/renderer";
import { ResumeDocument, type ResumeData } from "@/lib/resumeDocument";

export const dynamic = "force-dynamic";

const PROFESSIONAL_BACKGROUND = `
Name: Theresa Garritano
Title: Lead Product Designer
Location: Austin, TX
Email: theresagarritano@gmail.com

Experience:
- Lead Product Designer at Atlassian (current) — Leading product design for enterprise collaboration tools used by millions worldwide. Driving design strategy, systems thinking, and cross-functional alignment across complex product surfaces.
- Senior Product Designer at Realtor.com — Designed consumer-facing search and listing experiences for one of the largest real estate platforms in the US.
- Product Designer at Funsize — Worked at a boutique product design agency delivering UX strategy and interaction design for clients across industries.
- Product Designer at BigCommerce — Designed merchant-facing tools for a leading e-commerce platform, focused on improving conversion and usability.
- Product Designer at Base CRM — Early design team member at a sales CRM startup, contributing to core workflows and the mobile experience.

Skills: Figma, UX Research, Design Systems, Prototyping, Webflow, Human-Centered Design

Education:
- Rochester Institute of Technology, College of Imaging Arts & Sciences

Certifications:
- Human-Centered Design, IDEO
- Webflow Enterprise Partner
`.trim();

export async function POST() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Resume generation is not configured." },
      { status: 503 }
    );
  }

  const client = new Anthropic({ apiKey });

  // Generate AI summary
  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `You are writing a professional resume summary for the following designer. Write a compelling 3–4 sentence professional summary in first person. Be specific, confident, and highlight seniority and impact. Do not use filler phrases like "passionate" or "results-driven." Return only the summary text, no preamble.

${PROFESSIONAL_BACKGROUND}`,
      },
    ],
  });

  const summaryContent = message.content[0];
  const summary =
    summaryContent.type === "text"
      ? summaryContent.text
      : "Lead Product Designer with a decade of experience shaping complex digital products.";

  const resumeData: ResumeData = {
    name: "Theresa Garritano",
    title: "Lead Product Designer",
    email: "theresagarritano@gmail.com",
    location: "Austin, TX",
    summary,
    experience: [
      {
        company: "Atlassian",
        title: "Lead Product Designer",
        period: "2022 – Present",
        highlights: [
          "Lead design strategy for enterprise collaboration tools used by millions of teams worldwide.",
          "Drive cross-functional alignment across product, engineering, and research on complex multi-surface initiatives.",
          "Establish and evolve design system patterns that scale across the Atlassian product portfolio.",
        ],
      },
      {
        company: "Realtor.com",
        title: "Senior Product Designer",
        period: "2020 – 2022",
        highlights: [
          "Designed consumer-facing search and listing experiences on one of the US's largest real estate platforms.",
          "Led end-to-end design for high-traffic features, improving engagement and conversion metrics.",
        ],
      },
      {
        company: "Funsize",
        title: "Product Designer",
        period: "2018 – 2020",
        highlights: [
          "Delivered UX strategy and interaction design for clients across fintech, healthcare, and SaaS.",
          "Facilitated design sprints and research synthesis to rapidly validate product concepts.",
        ],
      },
      {
        company: "BigCommerce",
        title: "Product Designer",
        period: "2016 – 2018",
        highlights: [
          "Designed merchant-facing tools for a leading e-commerce platform with focus on usability and conversion.",
        ],
      },
      {
        company: "Base CRM",
        title: "Product Designer",
        period: "2014 – 2016",
        highlights: [
          "Early design team member contributing to core CRM workflows and mobile experience.",
        ],
      },
    ],
    skills: [
      "Figma",
      "UX Research",
      "Design Systems",
      "Prototyping",
      "Webflow",
      "Human-Centered Design",
      "Design Strategy",
      "Cross-functional Leadership",
    ],
    education: [
      {
        institution: "Rochester Institute of Technology",
        degree: "College of Imaging Arts & Sciences",
      },
    ],
    certifications: [
      "Human-Centered Design — IDEO",
      "Webflow Enterprise Partner",
    ],
  };

  const pdfBuffer = await renderToBuffer(
    <ResumeDocument data={resumeData} />
  );

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Theresa-Garritano-Resume.pdf"',
    },
  });
}
