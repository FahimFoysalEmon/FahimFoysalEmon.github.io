import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// White resume template (PDF) - independent from website theme
const colors = {
  bg: "#ffffff",
  surface: "#f8fafc",
  card: "#f3f4f6",
  border: "#e5e7eb",
  text: "#111827",
  textMuted: "#6b7280",
  accent: "#2563eb",
  accentLight: "#1d4ed8",
  emerald: "#059669",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg,
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 24,
  },
  topBand: {
    height: 4,
    backgroundColor: colors.accent,
    marginBottom: 16,
  },
  header: {
    marginBottom: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 6,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.emerald,
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "bold",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contactLink: {
    color: colors.accentLight,
    textDecoration: "none",
    fontSize: 9,
  },
  contactText: {
    color: colors.textMuted,
    fontSize: 9,
  },
  contactDot: {
    fontSize: 9,
    color: colors.border,
  },
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 9.2,
    color: colors.textMuted,
    lineHeight: 1.35,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  expTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.text,
  },
  expDate: {
    fontSize: 9,
    color: colors.textMuted,
  },
  expCompany: {
    fontSize: 10,
    color: colors.accentLight,
    marginBottom: 6,
  },
  expDesc: {
    fontSize: 9,
    color: colors.textMuted,
    lineHeight: 1.3,
  },
  coreStack: {
    fontSize: 8.8,
    color: colors.textMuted,
    marginTop: 6,
    lineHeight: 1.3,
  },
  highlightRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  highlightCard: {
    width: "48%",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    padding: 10,
  },
  highlightTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  highlightText: {
    fontSize: 8,
    color: colors.textMuted,
    lineHeight: 1.45,
  },
  skillsRow: {
    flexDirection: "row",
    gap: 24,
  },
  skillsCol: {
    flex: 1,
  },
  skillItem: {
    fontSize: 8.6,
    color: colors.textMuted,
    marginBottom: 3,
  },
  toolsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  toolTag: {
    fontSize: 8,
    backgroundColor: colors.card,
    color: colors.textMuted,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  projectCard: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 8.6,
    color: colors.textMuted,
    lineHeight: 1.28,
    marginBottom: 4,
  },
  projectTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  projectTag: {
    fontSize: 6.5,
    backgroundColor: colors.card,
    color: colors.textMuted,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  writingItem: {
    marginBottom: 6,
  },
  writingTitle: {
    fontSize: 8.6,
    fontWeight: "bold",
    color: colors.text,
  },
  writingLink: {
    fontSize: 8,
    color: colors.accentLight,
    textDecoration: "none",
  },
  footer: {
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  footerText: {
    fontSize: 7,
    color: colors.textMuted,
  },
  bullet: {
    fontSize: 8.6,
    color: colors.textMuted,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  projectHeading: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 2,
  },
  small: {
    fontSize: 8.6,
    color: colors.textMuted,
    marginBottom: 3,
    lineHeight: 1.3,
  },
});

const WEBSITE_URL = "https://github.com/FahimFoysalEmon";

const ResumeDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.topBand} />
      <View style={styles.header}>
        <Text style={styles.name}>Fahim Foysal Emon</Text>
        <Text style={styles.title}>Backend Software Engineer (Java, Spring Boot)</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Open to remote roles</Text>
        </View>
        <View style={styles.contactRow}>
          <Link src="mailto:fahim.foysal.emon@gmail.com" style={styles.contactLink}>
            fahim.foysal.emon@gmail.com
          </Link>
          <Text style={styles.contactDot}>•</Text>
          <Text style={styles.contactText}>+880 1683 149665</Text>
          <Text style={styles.contactDot}>•</Text>
          <Text style={styles.contactText}>Dhaka, Bangladesh</Text>
          <Text style={styles.contactDot}>•</Text>
          <Link src={WEBSITE_URL} style={styles.contactLink}>
            github.com/FahimFoysalEmon
          </Link>
          <Text style={styles.contactDot}>•</Text>
          <Link src="https://linkedin.com/in/emowzz" style={styles.contactLink}>
            linkedin.com/in/emowzz
          </Link>
        </View>
        <Text style={styles.coreStack}>
          Core Stack: Java, Spring Boot, Microservices, Postgres, MongoDB, Keycloak, AWS CloudWatch
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>
          Backend Engineer with nearly 5 years of experience building secure, scalable fintech systems with strong
          data consistency. Hands-on in transaction engines, add money flows, purchase/refund lifecycle, debit-credit
          ledgers, statement generation, IPN/webhook processing, and third-party API integration. Proven ownership of
          production-critical features, concurrency control, and mentoring junior developers.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <View style={styles.expHeader}>
          <Text style={styles.expTitle}>Backend Software Engineer</Text>
          <Text style={styles.expDate}>Jul 2021 - Present</Text>
        </View>
        <Link src="https://www.newroztech.com/" style={styles.expCompany}>
          Newroz Technologies Ltd.
        </Link>
        <Text style={styles.bullet}>• Built and maintained transaction-heavy financial systems with high reliability.</Text>
        <Text style={styles.bullet}>• Owned purchase engine, refund flow, add money/IPN logic, and debit-credit statement accuracy.</Text>
        <Text style={styles.bullet}>• Prevented race conditions and duplicate transaction issues with transactional safeguards.</Text>
        <Text style={styles.bullet}>• Mentored and supervised junior engineers while delivering production features.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fintech Highlights</Text>
        <View style={styles.highlightRow}>
          <View style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>Transaction Ownership</Text>
            <Text style={styles.highlightText}>
              End-to-end ownership of transaction engine, purchase/refund lifecycle, and add money flows.
            </Text>
          </View>
          <View style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>Data Consistency</Text>
            <Text style={styles.highlightText}>
              Strong duplicate prevention, concurrency-safe handling, and reliable debit-credit ledger accuracy.
            </Text>
          </View>
          <View style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>Reconciliation</Text>
            <Text style={styles.highlightText}>
              IPN/webhook processing with reconciliation and auditability for production payment workflows.
            </Text>
          </View>
          <View style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>External Integrations</Text>
            <Text style={styles.highlightText}>
              Deep third-party API work with banking, telecom, gateway, booking, and exchange platforms.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills & Technologies</Text>
        <View style={styles.skillsRow}>
          <View style={styles.skillsCol}>
            <Text style={styles.skillItem}>• Backend: Java, Spring Boot, REST APIs</Text>
            <Text style={styles.skillItem}>• Domain: Payments, Transaction Processing, Reconciliation</Text>
            <Text style={styles.skillItem}>• Security: OAuth2, Keycloak, JWT, Spring Security</Text>
            <Text style={styles.skillItem}>• Data: Postgres, MongoDB, MySQL</Text>
          </View>
          <View style={styles.skillsCol}>
            <Text style={styles.skillItem}>• Architecture: Microservices, Monolith</Text>
            <Text style={styles.skillItem}>• Tools: GitHub, Postman, Swagger, Jira</Text>
            <Text style={styles.skillItem}>• Monitoring: CloudWatch, LogHub</Text>
            <Text style={styles.skillItem}>• Collaboration: Requirement Analysis, Code Review, Mentoring</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.expTitle}>B.Sc. in Computer Science and Engineering</Text>
        <Text style={styles.expDesc}>
          United International University, Dhaka, Bangladesh | Graduated: January 2021
        </Text>
      </View>

    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.topBand} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Production Projects</Text>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Card-Selling (Iraq) | Nov 2024 - Present</Text>
          <Text style={styles.projectDesc}>
            Agent-based digital card platform with distributor/sub-distributor/SR hierarchy, virtual wallet distribution,
            purchase engine, refund flow, and debit-credit statement generation.
          </Text>
          <Text style={styles.bullet}>• Implemented commission and instant cashback logic based on configurable ranges.</Text>
          <Text style={styles.bullet}>• Built add money integration through FIB with webhook/IPN reconciliation.</Text>
          <Text style={styles.bullet}>• Maintained accuracy under heavy daily transaction loads.</Text>
          <Text style={styles.bullet}>• Supports thousands of card purchase transactions daily in production.</Text>
          <View style={styles.projectTags}>
            <Text style={styles.projectTag}>Java</Text>
            <Text style={styles.projectTag}>Spring Boot</Text>
            <Text style={styles.projectTag}>Postgres</Text>
            <Text style={styles.projectTag}>MongoDB</Text>
            <Text style={styles.projectTag}>Keycloak</Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>TEAMMART (Retail Card Platform) | Nov 2025 - Present</Text>
          <Text style={styles.projectDesc}>
            Retail digital card selling platform modeled after Card-Selling with simplified finance logic focused on
            wallet distribution, purchase/refund, statements, and reporting.
          </Text>
          <Text style={styles.bullet}>• Delivered debit-credit ledger consistency and monthly reporting reliability.</Text>
          <Text style={styles.bullet}>• Maintained transactional safety and performance for production usage.</Text>
          <View style={styles.projectTags}>
            <Text style={styles.projectTag}>Java</Text>
            <Text style={styles.projectTag}>Spring Boot</Text>
            <Text style={styles.projectTag}>Postgres</Text>
            <Text style={styles.projectTag}>MongoDB</Text>
            <Text style={styles.projectTag}>Monolith</Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>FastPay PayBill (Iraq Electricity) | Nov 2025 - Present</Text>
          <Text style={styles.projectDesc}>
            Electricity bill payment feature inside FastPay mobile wallet for both agent and personal users.
            Supports full payment (current outstanding) and partial payment (legacy debt).
          </Text>
          <Text style={styles.bullet}>• Maintained production service and handled refund and edge-case scenarios.</Text>
          <Text style={styles.bullet}>• Improved reliability of bill processing in microservice architecture.</Text>
          <Text style={styles.bullet}>• Powers both agent and personal bill payment use cases in the FastPay wallet.</Text>
          <View style={styles.projectTags}>
            <Text style={styles.projectTag}>Java</Text>
            <Text style={styles.projectTag}>Spring Boot</Text>
            <Text style={styles.projectTag}>MySQL</Text>
            <Text style={styles.projectTag}>Microservices</Text>
            <Text style={styles.projectTag}>LogHub</Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Hotel Booking (FIB App) | Jun 2024 - Dec 2024</Text>
          <Text style={styles.projectDesc}>
            Hotel booking feature within First Iraqi Bank app using TourVisio integration.
          </Text>
          <Text style={styles.bullet}>• Processed large external API responses into mobile-friendly JSON structures.</Text>
          <Text style={styles.bullet}>• Helped stabilize third-party integration and downstream response quality.</Text>
          <View style={styles.projectTags}>
            <Text style={styles.projectTag}>Java</Text>
            <Text style={styles.projectTag}>Spring Boot</Text>
            <Text style={styles.projectTag}>Postgres</Text>
            <Text style={styles.projectTag}>Microservices</Text>
            <Text style={styles.projectTag}>TourVisio API</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tools</Text>
        <View style={styles.toolsRow}>
          <Text style={styles.toolTag}>CloudWatch</Text>
          <Text style={styles.toolTag}>LogHub</Text>
          <Text style={styles.toolTag}>GitHub</Text>
          <Text style={styles.toolTag}>Postman</Text>
          <Text style={styles.toolTag}>Swagger</Text>
          <Text style={styles.toolTag}>Jira</Text>
          <Text style={styles.toolTag}>Jenkins</Text>
          <Text style={styles.toolTag}>Docker</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Experience</Text>
        <Text style={styles.projectHeading}>Dizli (E-commerce, non-production)</Text>
        <Text style={styles.small}>
          Built authentication and authorization flows including 2FA, registration, password reset, and account security.
        </Text>
        <Text style={styles.projectHeading}>GlobPay (Fintech, non-production)</Text>
        <Text style={styles.small}>
          Worked on beneficiary and country-level banking structures for cross-border transaction workflows.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Writing</Text>
        <View style={styles.writingItem}>
          <Text style={styles.writingTitle}>Understanding OAuth 2.0</Text>
          <Link src="https://medium.com/@fahim.foysal.emon/simplest-way-to-understand-oauth-2-0-be4e797ab9a" style={styles.writingLink}>
            medium.com/@fahim.foysal.emon
          </Link>
        </View>
      </View>

    </Page>
  </Document>
);

export default ResumeDocument;
