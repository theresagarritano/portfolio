import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export type Experience = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  degree: string;
  detail?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  experience: Experience[];
  skills: string[];
  education: Education[];
  certifications: string[];
};

// Site palette — dark theme matching the website
const BLACK   = "#050505";
const CYAN    = "#00f2fe";
const FORE    = "#f0ede8";
const BODY    = "#b0ada8";
const MUTED   = "#666662";
const RULE    = "#1e1e1e";
const WHITE   = "#050505"; // page bg = site bg

const PAD_H = 52;
const PAD_V = 44;

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: BODY,
    backgroundColor: WHITE,
    paddingTop: PAD_V,
    paddingBottom: PAD_V,
    paddingLeft: PAD_H,
    paddingRight: PAD_H,
    lineHeight: 1.5,
  },

  // ── Header ──────────────────────────────────────
  header: {
    marginBottom: 28,
  },
  // Thin cyan top rule — site's accent color used as a decorative bar
  topRule: {
    height: 2,
    backgroundColor: CYAN,
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 7.5,
    fontFamily: "Helvetica",
    color: CYAN,
    letterSpacing: 2.8,
    marginBottom: 6,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 30,
    color: FORE,
    letterSpacing: -0.3,
    lineHeight: 1,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
  contactText: {
    fontSize: 8.5,
    color: MUTED,
    letterSpacing: 0.2,
  },
  contactSep: {
    fontSize: 8.5,
    color: CYAN,
    marginLeft: 7,
    marginRight: 7,
  },
  headerRule: {
    height: 0.75,
    backgroundColor: RULE,
    marginTop: 20,
  },

  // ── Section ──────────────────────────────────────
  section: {
    marginBottom: 22,
  },
  sectionLabel: {
    fontSize: 7,
    fontFamily: "Helvetica",
    color: CYAN,
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  // ── Summary ──────────────────────────────────────
  summaryText: {
    fontSize: 10,
    color: BODY,
    lineHeight: 1.65,
    maxWidth: 480,
  },

  // ── Experience ────────────────────────────────────
  expItem: {
    marginBottom: 14,
    paddingBottom: 14,
    borderBottom: `0.5 solid ${RULE}`,
  },
  expItemLast: {
    marginBottom: 14,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  expCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: FORE,
    letterSpacing: 0.1,
  },
  expPeriod: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 0.3,
  },
  expTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Oblique",
    color: MUTED,
    letterSpacing: 0.1,
    marginBottom: 5,
  },

  // ── Bullets ───────────────────────────────────────
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletMark: {
    fontSize: 8,
    color: CYAN,
    width: 12,
    marginTop: 1,
  },
  bulletText: {
    fontSize: 9,
    color: BODY,
    lineHeight: 1.5,
    flex: 1,
  },

  // ── Bottom grid (skills / edu / certs) ────────────
  bottomGrid: {
    flexDirection: "row",
    gap: 0,
    borderTop: `0.75 solid ${RULE}`,
    paddingTop: 20,
    marginTop: 4,
  },
  gridCol: {
    flex: 1,
    paddingRight: 20,
  },
  gridColLast: {
    flex: 1,
  },
  gridLabel: {
    fontSize: 7,
    fontFamily: "Helvetica",
    color: CYAN,
    letterSpacing: 2.5,
    marginBottom: 9,
  },
  gridItem: {
    fontSize: 9,
    color: BODY,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  gridItemMuted: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.4,
    marginBottom: 1,
  },
  gridItemBold: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: FORE,
    marginBottom: 1,
  },
  eduBlock: {
    marginBottom: 9,
  },
});

function Bullet({ text }: { text: string }) {
  return (
    <View style={s.bulletRow}>
      <Text style={s.bulletMark}>—</Text>
      <Text style={s.bulletText}>{text}</Text>
    </View>
  );
}

export function ResumeDocument({ data }: { data: ResumeData }) {
  return (
    <Document
      title={`${data.name} — Resume`}
      author={data.name}
      subject="Professional Resume"
    >
      <Page size="LETTER" style={s.page}>

        {/* ── Header ── */}
        <View style={s.header}>
          <View style={s.topRule} />
          <Text style={s.eyebrow}>{data.title.toUpperCase()}</Text>
          <Text style={s.name}>{data.name}</Text>
          <View style={s.contactRow}>
            <Text style={s.contactText}>{data.email}</Text>
            <Text style={s.contactSep}>·</Text>
            <Text style={s.contactText}>{data.location}</Text>
          </View>
          <View style={s.headerRule} />
        </View>

        {/* ── Summary ── */}
        <View style={s.section}>
          <Text style={s.sectionLabel}>SUMMARY</Text>
          <Text style={s.summaryText}>{data.summary}</Text>
        </View>

        {/* ── Experience ── */}
        <View style={s.section}>
          <Text style={s.sectionLabel}>EXPERIENCE</Text>
          {data.experience.map((exp, i) => {
            const isLast = i === data.experience.length - 1;
            return (
              <View key={i} style={isLast ? s.expItemLast : s.expItem} wrap={false}>
                <View style={s.expHeader}>
                  <Text style={s.expCompany}>{exp.company}</Text>
                  <Text style={s.expPeriod}>{exp.period}</Text>
                </View>
                <Text style={s.expTitle}>{exp.title}</Text>
                {exp.highlights.map((h, j) => (
                  <Bullet key={j} text={h} />
                ))}
              </View>
            );
          })}
        </View>

        {/* ── Bottom grid: Skills / Education / Certifications ── */}
        <View style={s.bottomGrid}>

          <View style={s.gridCol}>
            <Text style={s.gridLabel}>SKILLS</Text>
            {data.skills.map((skill, i) => (
              <Text key={i} style={s.gridItem}>{skill}</Text>
            ))}
          </View>

          <View style={s.gridCol}>
            <Text style={s.gridLabel}>EDUCATION</Text>
            {data.education.map((edu, i) => (
              <View key={i} style={s.eduBlock}>
                <Text style={s.gridItemBold}>{edu.institution}</Text>
                <Text style={s.gridItem}>{edu.degree}</Text>
                {edu.detail && <Text style={s.gridItemMuted}>{edu.detail}</Text>}
              </View>
            ))}
          </View>

          <View style={s.gridColLast}>
            <Text style={s.gridLabel}>CERTIFICATIONS</Text>
            {data.certifications.map((cert, i) => (
              <Text key={i} style={[s.gridItem, { marginBottom: 6 }]}>{cert}</Text>
            ))}
          </View>

        </View>

      </Page>
    </Document>
  );
}
