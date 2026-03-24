import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { renderToBuffer } from "@react-pdf/renderer";
import { ResumeDocument, type ResumeData } from "@/lib/resumeDocument";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 30;

const PROFESSIONAL_BACKGROUND = `
Name: Theresa Garritano
Title: Lead Product Designer
Location: Austin, TX
Email: theresagarritano@gmail.com

Experience:
- Lead Product Designer at Atlassian (Jun 2025 – Present, Remote) — Current role.
- Senior Product Designer at Realtor.com (Dec 2023 – Jun 2025, Austin, Hybrid) — Integral role in Listing Agent Products, one of the highest-functioning product areas. Partnered with PM and Engineering Lead across the full product lifecycle, shipping to 100 million unique users. Led design sprints, contributed to design system, and scaled design direction across functional areas.
- Staff Product Designer at Funsize (Sep 2021 – Dec 2023, Remote) — Bridged strategy and execution at a boutique product design agency. Delivered design for clients including Realtor.com (Wildfire Risk) and Volvo Cars (Webby nominee). Mentored designers and contributed to playbooks.
- Senior Product Designer at Funsize (Sep 2019 – Sep 2021, Austin) — Delivered UX strategy and interaction design across fintech, healthcare, and SaaS clients.
- Product Designer at BigCommerce (Apr 2017 – Mar 2019, Austin) — Full-stack product design for a leading e-commerce platform, focused on merchant-facing tools, conversion, and design system consistency.
- Product Designer at Base CRM / Zendesk Sell (May 2015 – Jan 2016, San Francisco Bay Area) — Contributed to core CRM workflows and mobile experience at an early-stage startup, later acquired by Zendesk.
- UX/UI Designer at Spiceworks (May 2014 – May 2015, Austin) — In-house UX/UI designer at an IT platform and community.
- UX/UI Designer & Front-End Developer at The Daily Dot (Jun 2013 – May 2014, Austin) — Design and front-end development for a digital media publication.

Skills: Figma, UX Research, Design Systems, Prototyping, Webflow, Human-Centered Design, Design Strategy, Cross-functional Leadership, Vibe Coding

Education:
- Rochester Institute of Technology — BFA, Graphic Design, Web Design & Development, Psychology (2009–2013), GPA 3.45

Certifications:
- Leading Complex Projects — IDEO (Jul 2024)
- Webflow Certification, Enterprise Partner (Jul 2023)
- Design Kit: The Course for Human-Centered Design — IDEO (Nov 2018)
- Atlassian Rovo Certified
`.trim();

export async function POST() {
  try {
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
        period: "Jun 2025 – Present",
        highlights: [
          "Lead product design at one of the world's leading enterprise software companies.",
        ],
      },
      {
        company: "Realtor.com",
        title: "Senior Product Designer",
        period: "Dec 2023 – Jun 2025",
        highlights: [
          "Integral designer for Listing Agent Products, one of the platform's highest-functioning product areas.",
          "Partnered with PM and Engineering from research through polished delivery, shipping to 100 million unique users.",
          "Led design sprints, facilitated workshops, contributed to design system, and scaled design direction across functional areas.",
        ],
      },
      {
        company: "Funsize",
        title: "Staff Product Designer",
        period: "Sep 2021 – Dec 2023",
        highlights: [
          "Bridged strategy and execution at a boutique product design agency (Inc. 5000, Texas #94).",
          "Delivered design for clients including Realtor.com and Volvo Cars (2x Webby nominee).",
          "Mentored designers, contributed to playbooks, and helped define agency-wide design processes.",
        ],
      },
      {
        company: "Funsize",
        title: "Senior Product Designer",
        period: "Sep 2019 – Sep 2021",
        highlights: [
          "Delivered UX strategy and interaction design across fintech, healthcare, and SaaS clients.",
          "Facilitated design sprints and research synthesis to rapidly validate product concepts.",
        ],
      },
      {
        company: "BigCommerce",
        title: "Product Designer",
        period: "Apr 2017 – Mar 2019",
        highlights: [
          "Designed merchant-facing tools for a leading e-commerce platform serving 60,000+ merchants.",
          "Led end-to-end design across multiple product launches including Facebook Marketplace and WordPress integrations.",
        ],
      },
      {
        company: "Base CRM (acquired by Zendesk)",
        title: "Product Designer",
        period: "May 2015 – Jan 2016",
        highlights: [
          "Contributed to core CRM workflows and mobile experience at an early-stage startup, later acquired by Zendesk.",
        ],
      },
      {
        company: "Spiceworks",
        title: "UX/UI Designer",
        period: "May 2014 – May 2015",
        highlights: [
          "In-house UX/UI designer at an IT platform and community serving millions of IT professionals.",
        ],
      },
      {
        company: "The Daily Dot",
        title: "UX/UI Designer & Front-End Developer",
        period: "Jun 2013 – May 2014",
        highlights: [
          "Design and front-end development for a digital media publication.",
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
      "Vibe Coding",
    ],
    education: [
      {
        institution: "Rochester Institute of Technology",
        degree: "BFA, Graphic Design, Web Design & Development, Psychology",
        detail: "2009 – 2013 · GPA 3.45 · AIGA, Gamma Epsilon Tau",
      },
      {
        institution: "Art Institute of Pittsburgh",
        degree: "Certificate of Completion, Interior Design",
        detail: "2008 · Selective Summer Studio Program",
      },
    ],
    certifications: [
      "Leading Complex Projects — IDEO (Jul 2024)",
      "Webflow Certification, Enterprise Partner (Jul 2023)",
      "Design Kit: The Course for Human-Centered Design — IDEO (Nov 2018)",
      "Atlassian Rovo Certified",
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
  } catch (err) {
    console.error("[generate-resume] error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
