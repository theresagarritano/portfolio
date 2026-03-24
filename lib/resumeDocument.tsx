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

const ACCENT = "#111111";
const MUTED = "#777777";
const BODY = "#333333";
const LIGHT_RULE = "#e8e8e8";
const SIDEBAR_BG = "#f7f7f7";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: BODY,
    backgroundColor: "#ffffff",
    lineHeight: 1.5,
  },

  // ── Header ──────────────────────────────────────────
  header: {
    backgroundColor: ACCENT,
    paddingTop: 32,
    paddingBottom: 28,
    paddingLeft: 48,
    paddingRight: 48,
  },
  headerName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 28,
    color: "#ffffff",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 11,
    color: "#cccccc",
    letterSpacing: 0.3,
    marginBottom: 8,
  },
  headerMeta: {
    fontSize: 8.5,
    color: "#aaaaaa",
    letterSpacing: 0.2,
  },

  // ── Body (two columns) ──────────────────────────────
  body: {
    flexDirection: "row",
    flex: 1,
  },

  // ── Sidebar ─────────────────────────────────────────
  sidebar: {
    width: "34%",
    backgroundColor: SIDEBAR_BG,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 20,
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarSectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7.5,
    color: ACCENT,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: `1 solid ${LIGHT_RULE}`,
  },
  skillItem: {
    fontSize: 9,
    color: BODY,
    marginBottom: 5,
    paddingLeft: 8,
  },
  educationItem: {
    marginBottom: 10,
  },
  educationInstitution: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: ACCENT,
    marginBottom: 1,
  },
  educationDegree: {
    fontSize: 8.5,
    color: BODY,
    lineHeight: 1.4,
    marginBottom: 1,
  },
  educationDetail: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.4,
  },
  certItem: {
    fontSize: 8.5,
    color: BODY,
    marginBottom: 6,
    lineHeight: 1.4,
  },

  // ── Main column ──────────────────────────────────────
  main: {
    width: "66%",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 28,
    paddingRight: 36,
  },
  mainSection: {
    marginBottom: 18,
  },
  mainSectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7.5,
    color: ACCENT,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: `1 solid ${LIGHT_RULE}`,
  },
  summaryText: {
    fontSize: 9.5,
    color: BODY,
    lineHeight: 1.6,
  },

  // ── Experience ───────────────────────────────────────
  expItem: {
    marginBottom: 12,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  expCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: ACCENT,
  },
  expPeriod: {
    fontSize: 8,
    color: MUTED,
    marginTop: 1,
  },
  expTitle: {
    fontSize: 8.5,
    color: MUTED,
    fontFamily: "Helvetica-Oblique",
    marginBottom: 3,
  },
  expBullet: {
    fontSize: 8.5,
    color: BODY,
    lineHeight: 1.45,
    marginBottom: 2,
    paddingLeft: 8,
  },
});

// Bullet helper (react-pdf doesn't support list-style)
function Bullet({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 2 }}>
      <Text style={{ fontSize: 8.5, color: MUTED, width: 10, paddingTop: 0.5 }}>›</Text>
      <Text style={[styles.expBullet, { paddingLeft: 0, flex: 1 }]}>{text}</Text>
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
      <Page size="LETTER" style={styles.page}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.headerName}>{data.name}</Text>
          <Text style={styles.headerTitle}>{data.title}</Text>
          <Text style={styles.headerMeta}>
            {data.email}{"   ·   "}{data.location}
          </Text>
        </View>

        {/* ── Two-column body ── */}
        <View style={styles.body}>

          {/* ── Sidebar ── */}
          <View style={styles.sidebar}>

            {/* Skills */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Skills</Text>
              {data.skills.map((skill, i) => (
                <View key={i} style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ fontSize: 8.5, color: MUTED, width: 10 }}>›</Text>
                  <Text style={{ fontSize: 9, color: BODY, flex: 1 }}>{skill}</Text>
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Education</Text>
              {data.education.map((edu, i) => (
                <View key={i} style={styles.educationItem}>
                  <Text style={styles.educationInstitution}>{edu.institution}</Text>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  {edu.detail && (
                    <Text style={styles.educationDetail}>{edu.detail}</Text>
                  )}
                </View>
              ))}
            </View>

            {/* Certifications */}
            {data.certifications.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarSectionTitle}>Certifications</Text>
                {data.certifications.map((cert, i) => (
                  <Text key={i} style={styles.certItem}>{cert}</Text>
                ))}
              </View>
            )}

          </View>

          {/* ── Main column ── */}
          <View style={styles.main}>

            {/* Summary */}
            <View style={styles.mainSection}>
              <Text style={styles.mainSectionTitle}>Summary</Text>
              <Text style={styles.summaryText}>{data.summary}</Text>
            </View>

            {/* Experience */}
            <View style={styles.mainSection}>
              <Text style={styles.mainSectionTitle}>Experience</Text>
              {data.experience.map((exp, i) => (
                <View key={i} style={styles.expItem} wrap={false}>
                  <View style={styles.expHeader}>
                    <Text style={styles.expCompany}>{exp.company}</Text>
                    <Text style={styles.expPeriod}>{exp.period}</Text>
                  </View>
                  <Text style={styles.expTitle}>{exp.title}</Text>
                  {exp.highlights.map((h, j) => (
                    <Bullet key={j} text={h} />
                  ))}
                </View>
              ))}
            </View>

          </View>
        </View>

      </Page>
    </Document>
  );
}
