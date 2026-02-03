import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  Send,
  LayoutList,
  Cloud,
  Bot,
} from "lucide-react";

export default function App(): JSX.Element {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Keep mailto as fallback for quick contact. Consider replacing with a serverless function later.
    const mailtoLink = `mailto:fahim.foysal.emon@gmail.com?subject=Message from ${emailForm.name || "Website Visitor"
      }&body=${encodeURIComponent(emailForm.message)}%0A%0AFrom: ${emailForm.email || "noreply"
      }`;
    window.location.href = mailtoLink;
  };

  const featuredProjects = [
    {
      title: "Card Selling & Wallet — Fintech Transaction Engine",
      description:
        "Secure agent-based card selling and wallet system: onboarding, top-ups, IPN-based bank reconciliation, purchase flows, and agent settlement.",
      highlights: [
        "Idempotent IPN handler for bank callbacks; transactional rollback & audit trails",
        "Commission engine and instant cashback; role-based settlement",
        "Statement generation (debit/credit, balance history) for agents and end-users",
      ],
      tags: ["Transaction Engine", "Commission", "Cashback", "IPN", "Spring Boot"],
    },
    {
      title: "EKYB (Electronic Know Your Business)",
      description:
        "Business documentation & KYC system with secure auth, document verification, and audit logging for compliance.",
      highlights: ["OAuth2 + Keycloak integration", "Document validation workflows", "Audit trails for regulators"],
      tags: ["Security", "Compliance", "OAuth2", "KYC"],
    },
    {
      title: "Hotel & Flight Booking — TourVisio & Payment Gateway",
      description:
        "3rd‑party API integration with TourVisio for hotel/flight booking inside a banking app; payment gateway and IPN-based reconciliation.",
      highlights: [
        "TourVisio API integration (retries, error handling, idempotency)",
        "Payment gateway flow and IPN reconciliation for reliable settlement",
      ],
      tags: ["3rd‑Party API", "Payment Gateway", "IPN", "Banking App"],
    },
  ];

  const additionalProjects = [
    {
      title: "Crypto Trading Integration (OKX)",
      description:
        "3rd‑party exchange integration for buy/sell flows; ledger updates and eventual consistency across microservices.",
      highlights: ["OKX API integration", "Microservices", "Resilient order processing", "Settlement & audit logging"],
      tags: ["3rd‑Party API", "Crypto", "Microservices", "Settlement"],
    },
    {
      title: "E-commerce Integrations (Amazon, eBay, iHub)",
      description:
        "Order orchestration via 3rd‑party APIs; tracking, reconciliation, and auth for multi-channel orders.",
      highlights: ["Multi-provider API integration", "Order tracking", "Reconciliation"],
      tags: ["3rd‑Party API", "E-commerce", "Reconciliation"],
    },
    {
      title: "Global Payable Platform",
      description:
        "Cross-border payment flows, FX handling, and KYC between Canada and Bangladesh; 3rd‑party remittance providers.",
      highlights: ["Cross-border payments", "KYC integration", "FX & settlement"],
      tags: ["Cross-border", "Payments", "KYC", "3rd‑Party API"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#071021] text-gray-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header / Hero */}
        <header className="flex flex-col md:flex-row items-start gap-6">
          <img
            src="/photos/mypicture.jpg"
            alt="Fahim Foysal"
            className="w-[170px] h-[220px] rounded-lg object-cover object-top border-2 border-blue-600"
          />


          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">Fahim Foysal Emon</h1>
                {/* <hr color="light"></hr> */}
                <p className="text-gray-300 flex items-center gap-2 flex-wrap">
                  Backend Software Engineer — Fintech & Payments
                  <span className="px-2 py-1 text-xs bg-emerald-700/80 text-emerald-100 rounded font-medium">Open to remote roles</span>
                </p>

                <p className="mt-2 text-sm text-gray-400 leading-6 max-w-xl">
                  I design and build secure, compliant financial systems: transaction
                  engines, banking add money, purchase flows, commission & instant cashback,
                  statement generation, and debit/credit ledgers. Deep experience with
                  mobile wallet & banking backends, IPN reconciliation, and 3rd‑party
                  API integration. 4.5+ years in production fintech. I mentor and supervise
                  junior developers in my team. Open to remote senior backend roles.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="px-3 py-2 bg-emerald-600 rounded-md text-white text-sm hover:bg-emerald-500 font-medium"
                  >
                    I&apos;m open to Fintech opportunities
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-700"
                  >
                    Download Resume
                  </a>

                  <a
                    href="https://github.com/FahimFoysalEmon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>

                  {/* <span className="h-6 w-px bg-gray-700 mx-3" aria-hidden /> */}

                  <a
                    href="https://www.linkedin.com/in/emowzz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-600 border border-blue-700"
                  >
                    <Linkedin size={16} />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a
                    href="https://medium.com/@fahim.foysal.emon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700"
                    aria-label="Medium"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Medium</span>
                  </a>
                </div>
              </div>

              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-400">Currently at</p>
                <a href="https://www.newroztech.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-400 hover:underline">Newroz Technologies Ltd.</a>
                <p className="mt-2 text-sm text-gray-400">Location</p>
                <p className="font-medium">Mirpur DOHS, Dhaka, Bangladesh</p>
                <p className="mt-2 text-sm text-gray-400">Email</p>
                <p className="text-blue-400">fahim.foysal.emon@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Fintech Highlights */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Fintech Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
              <h3 className="text-lg font-semibold">Secure Payments</h3>
              <p className="text-gray-400 mt-2 text-sm">
                OAuth2 & Keycloak for authentication, strict audit logs and
                role-based access in financial flows.
              </p>
              <ul className="mt-3 text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>IPN handlers for payment validation.</li>
                <li>Add Money, Send Money flow, how it works under the hood.</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
              <h3 className="text-lg font-semibold">Transaction Reliability</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Transaction engine, how a transaction engine works in the system.
                
              </p>
              <ul className="mt-3 text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>Validates request, reserves balance, and processes atomic updates</li>
                <li>Calculates commissions and finalizes ledger entries with guaranteed consistency</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
              <h3 className="text-lg font-semibold">Sales Analytics & Performance</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Automated reporting and performance tracking that drives agent incentives
                and business insights.
              </p>
              <ul className="mt-3 text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>Daily & monthly total sales aggregation for agents</li>
                <li>Dynamic account level upgrades based on monthly performance</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
              <h3 className="text-lg font-semibold">Statements, Ledgers & 3rd‑Party APIs</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Debit/credit ledgers, statement generation, and reliable integrations
                with banks and payment providers.
              </p>
              <ul className="mt-3 text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>Statement generation (debit/credit, balance history)</li>
                <li>3rd‑party API integration: banking, gateways, booking services</li>
                <li>Idempotent callbacks, retries, and reconciliation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Java & Spring Boot (Fintech systems)</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Payments / IPN</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Transaction Engine</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Security: OAuth2, Keycloak, JWT</span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Microservice / Monolith Architecture</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Datastores: Postgres, Mongo</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>CI/CD, Docker basics</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>React (basic frontend)</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>3rd‑party API integration (banking, gateways, exchanges)</span>
              </p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Tools I Use Day to Day</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <span className="flex flex-col items-center gap-1.5 group" title="LogHub">
              <LayoutList size={28} className="text-gray-400 group-hover:text-gray-200" />
              <span className="text-sm text-gray-400">LogHub</span>
            </span>
            <span className="flex flex-col items-center gap-1.5 group" title="CloudWatch">
              <Cloud size={28} className="text-amber-400/90 group-hover:text-amber-400" />
              <span className="text-sm text-gray-400">CloudWatch</span>
            </span>
            <a href="https://github.com/FahimFoysalEmon" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
              <Github size={28} className="text-gray-400 group-hover:text-gray-200" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">GitHub</span>
            </a>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
              <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" className="w-9 h-9 rounded opacity-90 group-hover:opacity-100" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Postman</span>
            </a>
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group" title="AWS">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" alt="AWS" className="w-9 h-9 opacity-90 group-hover:opacity-100" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">AWS</span>
            </a>
            <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
              <img src="https://cdn.simpleicons.org/jira/0052CC" alt="Jira" className="w-9 h-9 opacity-90 group-hover:opacity-100" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Jira</span>
            </a>
            <a href="https://cursor.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group" title="Cursor AI">
              <Bot size={28} className="text-violet-400/90 group-hover:text-violet-400" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Cursor AI</span>
            </a>
            <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
              <img src="https://cdn.simpleicons.org/jenkins/007EC6" alt="Jenkins" className="w-9 h-9 opacity-90 group-hover:opacity-100" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Jenkins</span>
            </a>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
              <img src="https://cdn.simpleicons.org/docker/2499ED" alt="Docker" className="w-9 h-9 opacity-90 group-hover:opacity-100" />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Docker</span>
            </a>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Featured Projects (Fintech-first)</h2>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors bg-gray-900"
              >
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                {project.highlights && (
                  <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1 mb-3">
                    {project.highlights.map((h, hi) => (
                      <li key={hi}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {showAllProjects && (
              <>
                {additionalProjects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors bg-gray-900"
                  >
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-2">{project.description}</p>
                    {project.highlights && (
                      <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1 mb-3">
                        {project.highlights.map((h, hi) => (
                          <li key={hi}>{h}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="w-full py-2 px-4 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors flex items-center justify-center gap-2"
            >
              {showAllProjects ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  See More Projects <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        </section>

        {/* Blog Posts */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Technical Writing</h2>
          <div className="space-y-4">
            <a
              href="https://medium.com/@fahim.foysal.emon/simplest-way-to-understand-oauth-2-0-be4e797ab9a"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Understanding OAuth 2.0</h3>
              <p className="text-gray-400">A comprehensive guide to understanding OAuth 2.0 authentication flow.</p>
            </a>
            <a
              href="https://medium.com/@fahim.foysal.emon/builder-pattern-in-java-b15a5352f63c"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Builder Pattern in Java</h3>
              <p className="text-gray-400">Deep dive into the Builder design pattern and its implementation.</p>
            </a>

            <a
              href="https://medium.com/@fahim.foysal.emon/abstract-factory-design-pattern-12db0532c6a5"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Abstract Factory Design Pattern</h3>
              <p className="text-gray-400">Simple understanding of Abstract Design Pattern</p>
            </a>



          </div>
        </section>

        {/* Extracurricular */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Extracurricular</h2>
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-gray-300">
            <p className="text-sm leading-6">
              Along with my team, I’ve organised and run multiple tours for the company in both{' '}
              <span className="text-gray-200">India</span> and{' '}
              <span className="text-gray-200">Bangladesh</span> — helping the squad unwind, bond, and explore together.
            </p>
          </div>
        </section>

        {/* Travel (kept but minimized) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Travel Adventures</h2>
          <p className="text-gray-300 mb-4">
            I’ve always felt that traveling refreshes my mind in a way nothing else can. It gives me space to breathe, think, and return with a clearer perspective.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <figure className="rounded overflow-hidden">
              <img src="/photos/mountain1.jpg" alt="Bridge adventure" className="w-full h-48 object-cover" />
              <figcaption className="mt-2 text-sm text-gray-400">Seeing the sun rising behind the mountain - Lachung, Sikkim, India (2022)</figcaption>
            </figure>

            <figure className="rounded overflow-hidden">
              <img src="/photos/mountain2.jpg" alt="Mountain relaxation" className="w-full h-48 object-cover" />
              <figcaption className="mt-2 text-sm text-gray-400">On the way to Zero Point, near China border - Zero Point, Sikkim, India (2022)</figcaption>
            </figure>

            <figure className="rounded overflow-hidden">
              <img src="/photos/mountain3.png" alt="Mountain view" className="w-full h-48 object-cover" />
              <figcaption className="mt-2 text-sm text-gray-400">On the way to double decker root bridge - Meghalaya, India</figcaption>
            </figure>

            <figure className="rounded overflow-hidden">
              <img src="/photos/ctg1.jpeg" alt="Travel selfie" className="w-full h-48 object-cover" />
              <figcaption className="mt-2 text-sm text-gray-400">The royal Chattagram City behind me - Tiger Hill, Chittagong, Bangladesh (2023)</figcaption>
            </figure>

            <figure className="rounded overflow-hidden">
              <img src="/photos/mountain5.jpeg" alt="Placeholder 5" className="w-full h-48 object-cover" />
              <figcaption className="mt-2 text-sm text-gray-400">Beautiful Freedom Beach - Phuket, Thailand (2025)</figcaption>
            </figure>

            <figure className="rounded overflow-hidden">
              <img src="/photos/sea1.jpeg" alt="Placeholder 6" className="w-full h-48 object-cover" />
              <figcaption className="mt-2 text-sm text-gray-400">Snorkeling in Andaman Sea, near Maya Bay - Koh Phi Phi Island, East Krabi, Thailand</figcaption>
            </figure>
          </div>
        </section>


        {/* Contact */}
        <section id="contact" className="grid grid-cols-12 gap-10 items-center mb-10">
          <div className="lg:col-span-4 col-span-12 space-y-4 text-gray-100">
            <div className="flex items-center gap-5">
              <Phone size={24} />
              <div className="flex flex-col items-start gap-1">
                <p className="text-[20px]">Phone / WhatsApp</p>
                <p className="text-blue-500">+8801683149665</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Mail size={24} />
              <div className="flex flex-col items-start gap-1">
                <p className="text-[20px]">Email</p>
                <p className="text-blue-500">fahim.foysal.emon@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <MapPin size={24} />
              <div className="flex flex-col items-start gap-1">
                <p className="text-[20px]">Address</p>
                <p className="text-blue-500">Mirpur DOHS, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-xl font-semibold mb-2 text-gray-100">Get in Touch</h2>
            <p className="text-gray-400 text-sm mb-4">Hiring for Fintech, payments, or backend? I&apos;m open to remote roles — reach out below or via LinkedIn.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-auto lg:w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-auto lg:w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-auto lg:w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                />
              </div>

              <button type="submit" className="w-auto lg:w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
