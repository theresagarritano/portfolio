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

// ─── Theme System ────────────────────────────────────────────────────────────

type Theme = {
  name: string;
  bg: string;
  fg: string;         // name + company
  body: string;       // paragraph text
  muted: string;      // dates, italic titles
  accent: string;     // eyebrow labels + bullets
  rule: string;       // divider lines
  headerBg?: string;  // if set, renders a solid header block
  headerFg?: string;  // text inside solid header block
  fontBase: "Helvetica" | "Courier";
  fontBold: "Helvetica-Bold" | "Courier-Bold";
  fontItalic: "Helvetica-Oblique" | "Courier-Oblique";
};

const THEMES: Theme[] = [
  // 1. Noir — matches the website (dark, cyan)
  {
    name: "Noir",
    bg: "#050505", fg: "#f0ede8", body: "#b0ada8", muted: "#555552",
    accent: "#00f2fe", rule: "#1c1c1c",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 2. Chalk — white body, solid black header band
  {
    name: "Chalk",
    bg: "#ffffff", fg: "#111111", body: "#444444", muted: "#999999",
    accent: "#111111", rule: "#e8e8e8",
    headerBg: "#111111", headerFg: "#ffffff",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 3. Navy & Gold
  {
    name: "Navy",
    bg: "#0b1622", fg: "#e8e3d8", body: "#8a8880", muted: "#4a4844",
    accent: "#d4a830", rule: "#182030",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 4. Terminal — Courier mono, hot pink
  {
    name: "Terminal",
    bg: "#0d0d0d", fg: "#e8e8e8", body: "#aaaaaa", muted: "#555555",
    accent: "#ff007f", rule: "#222222",
    fontBase: "Courier", fontBold: "Courier-Bold", fontItalic: "Courier-Oblique",
  },
  // 5. Arctic — white, deep blue, electric blue accent
  {
    name: "Arctic",
    bg: "#f8fbff", fg: "#0a1628", body: "#3a4a5c", muted: "#8a9aac",
    accent: "#1d6ef5", rule: "#dce6f0",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 6. Ember — very dark, orange-red accent
  {
    name: "Ember",
    bg: "#120a06", fg: "#f2e8df", body: "#9a8880", muted: "#5a4840",
    accent: "#ff5c2b", rule: "#241410",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 7. Slate — cool dark blue-gray, teal accent
  {
    name: "Slate",
    bg: "#151c28", fg: "#dce4f0", body: "#8090a8", muted: "#485870",
    accent: "#2dd4bf", rule: "#1e2a3a",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 8. Ash — light warm gray, deep charcoal, indigo accent
  {
    name: "Ash",
    bg: "#f2f0ed", fg: "#1a1816", body: "#4e4a46", muted: "#9a9690",
    accent: "#4f46e5", rule: "#dddbd8",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 9. Onyx — near-black, white fg, magenta pink accent
  {
    name: "Onyx",
    bg: "#111111", fg: "#f5f5f5", body: "#aaaaaa", muted: "#666666",
    accent: "#e040fb", rule: "#202020",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 10. Sand — warm off-white, dark brown, amber accent
  {
    name: "Sand",
    bg: "#fdf8f0", fg: "#1c1208", body: "#5a4e3c", muted: "#a09080",
    accent: "#d97706", rule: "#e8e0d0",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 11. Violet — deep purple, lavender accent
  {
    name: "Violet",
    bg: "#100820", fg: "#ece8f5", body: "#8878a8", muted: "#4a3860",
    accent: "#a78bfa", rule: "#1e1030",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
  // 12. Studio — white, solid cyan header band
  {
    name: "Studio",
    bg: "#ffffff", fg: "#050505", body: "#444444", muted: "#888888",
    accent: "#050505", rule: "#eeeeee",
    headerBg: "#00f2fe", headerFg: "#050505",
    fontBase: "Helvetica", fontBold: "Helvetica-Bold", fontItalic: "Helvetica-Oblique",
  },
];

function pickTheme(): Theme {
  return THEMES[Math.floor(Math.random() * THEMES.length)];
}

// ─── Style factory ───────────────────────────────────────────────────────────

function makeStyles(t: Theme) {
  const PAD_H = 50;
  const PAD_V = 42;
  const isCourier = t.fontBase === "Courier";

  return StyleSheet.create({
    page: {
      fontFamily: t.fontBase,
      fontSize: isCourier ? 8.5 : 9.5,
      color: t.body,
      backgroundColor: t.bg,
      // No padding when using a solid header block (Chalk theme)
      paddingTop: t.headerBg ? 0 : PAD_V,
      paddingBottom: PAD_V,
      paddingLeft: t.headerBg ? 0 : PAD_H,
      paddingRight: t.headerBg ? 0 : PAD_H,
      lineHeight: 1.5,
    },

    // ── Solid block header (Chalk) ──
    headerBlock: {
      backgroundColor: t.headerBg ?? t.bg,
      paddingTop: 32,
      paddingBottom: 28,
      paddingLeft: PAD_H,
      paddingRight: PAD_H,
      marginBottom: 0,
    },
    headerBlockEyebrow: {
      fontSize: 7.5,
      fontFamily: t.fontBase,
      color: t.headerBg ? (t.accent === t.headerBg ? "#aaaaaa" : t.accent) : t.accent,
      letterSpacing: 2.8,
      marginBottom: 6,
    },
    headerBlockName: {
      fontFamily: t.fontBold,
      fontSize: 30,
      color: t.headerFg ?? t.fg,
      letterSpacing: -0.2,
      lineHeight: 1,
      marginBottom: 10,
    },
    headerBlockMeta: {
      fontSize: 8.5,
      color: t.headerFg ? "rgba(255,255,255,0.55)" : t.muted,
      letterSpacing: 0.2,
    },
    headerBlockSep: {
      fontSize: 8.5,
      color: t.headerFg ? "rgba(255,255,255,0.3)" : t.accent,
      marginLeft: 6,
      marginRight: 6,
    },
    bodyPad: {
      paddingLeft: PAD_H,
      paddingRight: PAD_H,
      paddingTop: 24,
    },

    // ── Rule header (all other themes) ──
    topRule: {
      height: 2,
      backgroundColor: t.accent,
      marginBottom: 22,
    },
    eyebrow: {
      fontSize: 7.5,
      fontFamily: t.fontBase,
      color: t.accent,
      letterSpacing: 2.8,
      marginBottom: 6,
    },
    name: {
      fontFamily: t.fontBold,
      fontSize: 30,
      color: t.fg,
      letterSpacing: isCourier ? 0 : -0.3,
      lineHeight: 1,
      marginBottom: 10,
    },
    contactRow: { flexDirection: "row", alignItems: "center" },
    contactText: { fontSize: 8.5, color: t.muted, letterSpacing: 0.2 },
    contactSep: { fontSize: 8.5, color: t.accent, marginLeft: 7, marginRight: 7 },
    headerRule: { height: 0.75, backgroundColor: t.rule, marginTop: 20 },

    // ── Sections ──
    section: { marginBottom: 20 },
    sectionLabel: {
      fontSize: 7,
      fontFamily: t.fontBase,
      color: t.accent,
      letterSpacing: 2.5,
      marginBottom: 9,
    },
    summaryText: {
      fontSize: isCourier ? 8.5 : 10,
      color: t.body,
      lineHeight: 1.65,
      maxWidth: 490,
    },

    // ── Experience ──
    expItem: {
      marginBottom: 13,
      paddingBottom: 13,
      borderBottom: `0.5 solid ${t.rule}`,
    },
    expItemLast: { marginBottom: 13 },
    expHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 2,
    },
    expCompany: {
      fontFamily: t.fontBold,
      fontSize: 10,
      color: t.fg,
      letterSpacing: 0.1,
    },
    expPeriod: { fontSize: 8, color: t.muted, letterSpacing: 0.3 },
    expTitle: {
      fontSize: 9,
      fontFamily: t.fontItalic,
      color: t.muted,
      marginBottom: 5,
    },

    // ── Bullets ──
    bulletRow: { flexDirection: "row", marginBottom: 3 },
    bulletMark: { fontSize: 8.5, color: t.accent, width: 13, marginTop: 0.5 },
    bulletText: { fontSize: isCourier ? 8.5 : 9, color: t.body, lineHeight: 1.45, flex: 1 },

    // ── Bottom grid ──
    bottomGrid: {
      flexDirection: "row",
      borderTop: `0.75 solid ${t.rule}`,
      paddingTop: 18,
      marginTop: 4,
    },
    gridCol: { flex: 1, paddingRight: 18 },
    gridColLast: { flex: 1 },
    gridLabel: {
      fontSize: 7,
      fontFamily: t.fontBase,
      color: t.accent,
      letterSpacing: 2.5,
      marginBottom: 8,
    },
    gridItem: { fontSize: 9, color: t.body, marginBottom: 4, lineHeight: 1.4 },
    gridItemMuted: { fontSize: 8.5, color: t.muted, lineHeight: 1.4, marginBottom: 1 },
    gridItemBold: {
      fontFamily: t.fontBold,
      fontSize: 9,
      color: t.fg,
      marginBottom: 1,
    },
    eduBlock: { marginBottom: 9 },
  });
}

// ─── Components ───────────────────────────────────────────────────────────────

function Bullet({ text, styles }: { text: string; styles: ReturnType<typeof makeStyles> }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletMark}>—</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

export function ResumeDocument({ data }: { data: ResumeData }) {
  const theme = pickTheme();
  const styles = makeStyles(theme);
  const useBlockHeader = !!theme.headerBg;

  const ExperienceList = () => (
    <>
      {data.experience.map((exp, i) => {
        const isLast = i === data.experience.length - 1;
        return (
          <View key={i} style={isLast ? styles.expItemLast : styles.expItem} wrap={false}>
            <View style={styles.expHeader}>
              <Text style={styles.expCompany}>{exp.company}</Text>
              <Text style={styles.expPeriod}>{exp.period}</Text>
            </View>
            <Text style={styles.expTitle}>{exp.title}</Text>
            {exp.highlights.map((h, j) => (
              <Bullet key={j} text={h} styles={styles} />
            ))}
          </View>
        );
      })}
    </>
  );

  const BottomGrid = () => (
    <View style={styles.bottomGrid}>
      <View style={styles.gridCol}>
        <Text style={styles.gridLabel}>SKILLS</Text>
        {data.skills.map((skill, i) => (
          <Text key={i} style={styles.gridItem}>{skill}</Text>
        ))}
      </View>
      <View style={styles.gridCol}>
        <Text style={styles.gridLabel}>EDUCATION</Text>
        {data.education.map((edu, i) => (
          <View key={i} style={styles.eduBlock}>
            <Text style={styles.gridItemBold}>{edu.institution}</Text>
            <Text style={styles.gridItem}>{edu.degree}</Text>
            {edu.detail && <Text style={styles.gridItemMuted}>{edu.detail}</Text>}
          </View>
        ))}
      </View>
      <View style={styles.gridColLast}>
        <Text style={styles.gridLabel}>CERTIFICATIONS</Text>
        {data.certifications.map((cert, i) => (
          <Text key={i} style={[styles.gridItem, { marginBottom: 6 }]}>{cert}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <Document
      title={`${data.name} — Resume`}
      author={data.name}
      subject={`Professional Resume · ${theme.name} edition`}
    >
      <Page size="LETTER" style={styles.page}>

        {useBlockHeader ? (
          // ── Chalk: solid dark header band ──
          <>
            <View style={styles.headerBlock}>
              <Text style={styles.headerBlockEyebrow}>{data.title.toUpperCase()}</Text>
              <Text style={styles.headerBlockName}>{data.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.headerBlockMeta}>{data.email}</Text>
                <Text style={styles.headerBlockSep}>·</Text>
                <Text style={styles.headerBlockMeta}>{data.location}</Text>
              </View>
            </View>
            <View style={styles.bodyPad}>
              <View style={[styles.section, { marginTop: 4 }]}>
                <Text style={styles.sectionLabel}>SUMMARY</Text>
                <Text style={styles.summaryText}>{data.summary}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>EXPERIENCE</Text>
                <ExperienceList />
              </View>
              <BottomGrid />
            </View>
          </>
        ) : (
          // ── All other themes: top-rule header ──
          <>
            <View style={{ marginBottom: 28 }}>
              <View style={styles.topRule} />
              <Text style={styles.eyebrow}>{data.title.toUpperCase()}</Text>
              <Text style={styles.name}>{data.name}</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactText}>{data.email}</Text>
                <Text style={styles.contactSep}>·</Text>
                <Text style={styles.contactText}>{data.location}</Text>
              </View>
              <View style={styles.headerRule} />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>SUMMARY</Text>
              <Text style={styles.summaryText}>{data.summary}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>EXPERIENCE</Text>
              <ExperienceList />
            </View>

            <BottomGrid />
          </>
        )}

      </Page>
    </Document>
  );
}
