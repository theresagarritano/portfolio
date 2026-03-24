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

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#111111",
    backgroundColor: "#ffffff",
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 56,
    paddingRight: 56,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 24,
    borderBottom: "1 solid #dddddd",
    paddingBottom: 16,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 26,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  headerMeta: {
    fontSize: 10,
    color: "#555555",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#444444",
    marginBottom: 8,
    borderBottom: "0.5 solid #eeeeee",
    paddingBottom: 4,
  },
  summaryText: {
    fontSize: 10,
    color: "#333333",
    lineHeight: 1.6,
  },
  experienceItem: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  companyTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  period: {
    fontSize: 9,
    color: "#777777",
  },
  jobTitle: {
    fontSize: 9,
    color: "#555555",
    marginBottom: 4,
  },
  highlight: {
    fontSize: 9,
    color: "#444444",
    marginLeft: 10,
    marginBottom: 2,
    lineHeight: 1.5,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillTag: {
    fontSize: 9,
    color: "#333333",
    backgroundColor: "#f4f4f4",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 3,
  },
  educationItem: {
    marginBottom: 8,
  },
  educationInstitution: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  educationDetail: {
    fontSize: 9,
    color: "#555555",
  },
});

export function ResumeDocument({ data }: { data: ResumeData }) {
  return (
    <Document
      title={`${data.name} — Resume`}
      author={data.name}
      subject="Professional Resume"
    >
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.headerMeta}>
            {data.title} · {data.email} · {data.location}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summaryText}>{data.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.companyTitle}>{exp.company}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              {exp.highlights.map((h, j) => (
                <Text key={j} style={styles.highlight}>• {h}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsGrid}>
            {data.skills.map((skill, i) => (
              <Text key={i} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.educationItem}>
              <Text style={styles.educationInstitution}>{edu.institution}</Text>
              <Text style={styles.educationDetail}>{edu.degree}</Text>
              {edu.detail && <Text style={styles.educationDetail}>{edu.detail}</Text>}
            </View>
          ))}
        </View>

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certifications.map((cert, i) => (
              <Text key={i} style={styles.highlight}>• {cert}</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
