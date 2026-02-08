import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const colors = {
  accent: "#2563eb",
  accentDark: "#1d4ed8",
  emerald: "#059669",
  slate: "#334155",
  slateLight: "#64748b",
  slateDark: "#0f172a",
  bgLight: "#f8fafc",
  border: "#e2e8f0",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  // Top accent band
  topBand: {
    height: 6,
    backgroundColor: colors.accent,
    marginBottom: 0,
  },
  content: {
    padding: 32,
    paddingTop: 24,
  },
  // Header
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.slateDark,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 13,
    color: colors.slateLight,
    marginBottom: 6,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.emerald,
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 14,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "bold",
  },
  contactGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    rowGap: 6,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  contactLink: {
    color: colors.accent,
    textDecoration: "none",
    fontSize: 9,
  },
  contactText: {
    fontSize: 9,
    color: colors.slateLight,
  },
  contactLabel: {
    fontSize: 8,
    color: colors.slateLight,
    marginRight: 4,
    opacity: 0.9,
  },
  // Section
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.slateDark,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  summary: {
    fontSize: 10,
    color: colors.slateLight,
    lineHeight: 1.55,
  },
  // Experience
  expRow: {
    marginBottom: 14,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  },
  expTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.slateDark,
  },
  expDate: {
    fontSize: 9,
    color: colors.slateLight,
  },
  expCompany: {
    fontSize: 10,
    color: colors.accent,
    marginBottom: 6,
  },
  expDesc: {
    fontSize: 9,
    color: colors.slateLight,
    lineHeight: 1.45,
  },
  // Highlights
  highlightGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  highlightCard: {
    width: "48%",
    backgroundColor: colors.bgLight,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
    padding: 10,
    marginBottom: 8,
  },
  highlightTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.slateDark,
    marginBottom: 4,
  },
  highlightText: {
    fontSize: 8,
    color: colors.slateLight,
    lineHeight: 1.4,
  },
  // Skills
  skillsGrid: {
    flexDirection: "row",
    gap: 24,
  },
  skillsCol: {
    flex: 1,
  },
  skillItem: {
    fontSize: 9,
    color: colors.slateLight,
    marginBottom: 5,
  },
  // Tools
  toolsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  toolTag: {
    fontSize: 8,
    backgroundColor: colors.bgLight,
    color: colors.slateDark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  // Projects
  projectCard: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.slateDark,
    marginBottom: 4,
  },
  projectDesc: {
    fontSize: 9,
    color: colors.slateLight,
    lineHeight: 1.45,
    marginBottom: 8,
  },
  projectTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  projectTag: {
    fontSize: 7,
    backgroundColor: colors.bgLight,
    color: colors.slateLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  // Writing
  writingItem: {
    marginBottom: 8,
  },
  writingTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.slateDark,
  },
  writingLink: {
    fontSize: 8,
    color: colors.accent,
    textDecoration: "none",
  },
  // Footer
  footer: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  footerText: {
    fontSize: 8,
    color: colors.slateLight,
  },
});

const WEBSITE_URL = "https://fahimfoysalemon.github.io";

const ResumeDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Accent band */}
      <View style={styles.topBand} />

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Fahim Foysal Emon</Text>
          <Text style={styles.title}>Backend Software Engineer — Fintech & Payments</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Open to remote roles</Text>
          </View>
          <View style={styles.contactGrid}>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactText}>fahim.foysal.emon@gmail.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactText}>+880 1683 149665</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Location</Text>
              <Text style={styles.contactText}>Mirpur DOHS, Dhaka, Bangladesh</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Portfolio</Text>
              <Link src={WEBSITE_URL} style={styles.contactLink}>
                fahimfoysalemon.github.io
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>LinkedIn</Text>
              <Link src="https://linkedin.com/in/emowzz" style={styles.contactLink}>
                linkedin.com/in/emowzz
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>GitHub</Text>
              <Link src="https://github.com/FahimFoysalEmon" style={styles.contactLink}>
                github.com/FahimFoysalEmon
              </Link>
            </View>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>
            I design and build secure, compliant financial systems: transaction engines, banking add money,
            purchase flows, commission & instant cashback, statement generation, and debit/credit ledgers.
            Deep experience with mobile wallet & banking backends, IPN reconciliation, and 3rd‑party API
            integration. 4.5+ years in production fintech. I mentor and supervise junior developers.
            Currently at Newroz Technologies Ltd. Open to remote senior backend roles.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.expRow}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>Backend Software Engineer</Text>
              <Text style={styles.expDate}>Present</Text>
            </View>
            <Link src="https://www.newroztech.com/" style={styles.expCompany}>
              Newroz Technologies Ltd.
            </Link>
            <Text style={styles.expDesc}>
              Building fintech systems: transaction engines, purchase flows with commission & cashback,
              IPN-based reconciliation, agent platforms. Mentor junior developers. Tech: Java, Spring Boot,
              Postgres, microservices, OAuth2/Keycloak.
            </Text>
          </View>
        </View>

        {/* Fintech Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fintech Highlights</Text>
          <View style={styles.highlightGrid}>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>Secure Payments</Text>
              <Text style={styles.highlightText}>
                OAuth2 & Keycloak, IPN handlers, Add Money / Send Money flows.
              </Text>
            </View>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>Purchase Flow, Commission & Cashback</Text>
              <Text style={styles.highlightText}>
                End-to-end purchase flow, commission engine, instant cashback, role-based settlement.
              </Text>
            </View>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>Statements & Ledgers</Text>
              <Text style={styles.highlightText}>
                Debit/credit ledgers, statement generation, audit trails.
              </Text>
            </View>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>3rd‑Party APIs</Text>
              <Text style={styles.highlightText}>
                Bank, gateway, exchange integrations; idempotent callbacks, retries, reconciliation.
              </Text>
            </View>
          </View>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillsCol}>
              <Text style={styles.skillItem}>• Java & Spring Boot (Fintech systems)</Text>
              <Text style={styles.skillItem}>• Payments / IPN / Transaction Engine</Text>
              <Text style={styles.skillItem}>• Security: OAuth2, Keycloak, JWT</Text>
              <Text style={styles.skillItem}>• Microservice / Monolith Architecture</Text>
            </View>
            <View style={styles.skillsCol}>
              <Text style={styles.skillItem}>• Datastores: Postgres, Mongo</Text>
              <Text style={styles.skillItem}>• CI/CD, Docker</Text>
              <Text style={styles.skillItem}>• React (basic frontend)</Text>
              <Text style={styles.skillItem}>• 3rd‑party API integration</Text>
            </View>
          </View>
        </View>

        {/* Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tools</Text>
          <View style={styles.toolsRow}>
            <Text style={styles.toolTag}>LogHub</Text>
            <Text style={styles.toolTag}>CloudWatch</Text>
            <Text style={styles.toolTag}>GitHub</Text>
            <Text style={styles.toolTag}>Postman</Text>
            <Text style={styles.toolTag}>AWS</Text>
            <Text style={styles.toolTag}>Jira</Text>
            <Text style={styles.toolTag}>Cursor AI</Text>
            <Text style={styles.toolTag}>Jenkins</Text>
            <Text style={styles.toolTag}>Docker</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2 - Projects */}
    <Page size="A4" style={styles.page}>
      <View style={styles.topBand} />
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Card Selling & Wallet — Fintech Transaction Engine</Text>
            <Text style={styles.projectDesc}>
              Secure agent-based card selling and wallet: onboarding, top-ups, IPN-based bank reconciliation,
              purchase flows, agent settlement. Idempotent IPN handler, commission engine, instant cashback,
              statement generation (debit/credit).
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>Transaction Engine</Text>
              <Text style={styles.projectTag}>Commission</Text>
              <Text style={styles.projectTag}>Cashback</Text>
              <Text style={styles.projectTag}>IPN</Text>
              <Text style={styles.projectTag}>Spring Boot</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>EKYB (Electronic Know Your Business)</Text>
            <Text style={styles.projectDesc}>
              Business documentation & KYC with OAuth2 + Keycloak, document validation, audit trails for regulators.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>Security</Text>
              <Text style={styles.projectTag}>Compliance</Text>
              <Text style={styles.projectTag}>OAuth2</Text>
              <Text style={styles.projectTag}>KYC</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Hotel & Flight Booking — TourVisio & Payment Gateway</Text>
            <Text style={styles.projectDesc}>
              3rd‑party TourVisio API for hotel/flight booking in banking app; payment gateway and IPN reconciliation.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>3rd‑Party API</Text>
              <Text style={styles.projectTag}>Payment Gateway</Text>
              <Text style={styles.projectTag}>IPN</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Crypto Trading Integration (OKX)</Text>
            <Text style={styles.projectDesc}>
              3rd‑party exchange integration, ledger updates, microservices, settlement & audit logging.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>3rd‑Party API</Text>
              <Text style={styles.projectTag}>Crypto</Text>
              <Text style={styles.projectTag}>Microservices</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Global Payable Platform</Text>
            <Text style={styles.projectDesc}>
              Cross-border payments, FX, KYC between Canada and Bangladesh; 3rd‑party remittance providers.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>Cross-border</Text>
              <Text style={styles.projectTag}>Payments</Text>
              <Text style={styles.projectTag}>KYC</Text>
            </View>
          </View>
        </View>

        {/* Technical Writing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Writing</Text>
          <View style={styles.writingItem}>
            <Text style={styles.writingTitle}>Understanding OAuth 2.0</Text>
            <Link src="https://medium.com/@fahim.foysal.emon/simplest-way-to-understand-oauth-2-0-be4e797ab9a" style={styles.writingLink}>
              medium.com/@fahim.foysal.emon
            </Link>
          </View>
          <View style={styles.writingItem}>
            <Text style={styles.writingTitle}>Builder Pattern in Java</Text>
            <Link src="https://medium.com/@fahim.foysal.emon/builder-pattern-in-java-b15a5352f63c" style={styles.writingLink}>
              medium.com/@fahim.foysal.emon
            </Link>
          </View>
        </View>

        {/* Extracurricular */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Extracurricular</Text>
          <Text style={styles.summary}>
            Organised multiple company tours with my team in both India and Bangladesh — helping the squad
            unwind, bond, and explore together.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>fahim.foysal.emon@gmail.com</Text>
          <Text style={styles.footerText}>+880 1683 149665</Text>
          <Link src={WEBSITE_URL} style={[styles.footerText, { color: colors.accent }]}>
            fahimfoysalemon.github.io
          </Link>
          <Link src="https://linkedin.com/in/emowzz" style={[styles.footerText, { color: colors.accent }]}>
            linkedin.com/in/emowzz
          </Link>
          <Link src="https://github.com/FahimFoysalEmon" style={[styles.footerText, { color: colors.accent }]}>
            github.com/FahimFoysalEmon
          </Link>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
