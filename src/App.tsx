// import React, { useState } from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Code2,
//   ChevronDown,
//   ChevronUp,
//   Server,
//   Cloud,
//   Terminal,
//   Phone,
//   MapPin,
//   Send,
// } from "lucide-react";

// function App() {
//   const [showAllProjects, setShowAllProjects] = useState(false);

//   const [emailForm, setEmailForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const mailtoLink = `mailto:fahim.foysal.emon@gmail.com?subject=Message from ${
//       emailForm.name
//     }&body=${encodeURIComponent(emailForm.message)}%0A%0AFrom: ${
//       emailForm.email
//     }`;
//     window.location.href = mailtoLink;
//   };

//   const featuredProjects = [
//     {
//       title: "Card Selling & Wallet — Fintech Transaction Engine",
//       description:
//         "Designed and implemented a secure agent-based card selling and wallet system handling agent onboarding, top-ups, IPN-based bank reconciliations and transactional flows.",
//       tags: ["Wallet", "IPN", "Agent System", "Transactions"],
//       details: [
//         "Built idempotent IPN handler for bank callbacks",
//         "Implemented transactional rollback strategies and audit trails",
//         "Role-based agent commission & settlement engine",
//       ],
//     },
//     {
//       title: "EKYB (Electronic Know Your Business)",
//       description:
//         "Business documentation & KYC system with secure flows, document verification and audit trails.",
//       tags: ["KYC / EKYB", "Compliance", "Spring Security"],
//     },
//     {
//       title: "Cryptocurrency Trading Platform",
//       description:
//         "High-throughput trading platform integrated with OKX and custom settlement flows; includes role-based admin and audit logging.",
//       tags: ["Crypto", "Microservices", "Trading / Settlement"],
//     },
//     {
//       title: "Booking Services - TourVisio API Integrations for Banking App",
//       description:
//         "Booking & payments platform with integrated payment gateway and IPN-based reconciliation for reliable bookings.",
//       tags: ["Payment Gateway", "IPN / Reconciliation", "Spring Boot"],
//     },
//   ];

//   const additionalProjects = [
//     {
//       title: "E-commerce Based Platform, Sells Amazon, Ebay and iHub Products",
//       description:
//         "E-commerce platform enabling direct orders from Amazon, eBay, and iHub. Implemented complete authentication system.",
//       tags: ["Authentication", "E-commerce", "Integration"],
//     },
//     {
//       title: "Global Payable Platform",
//       description:
//         "International payment platform facilitating transactions from Canada to Bangladesh.",
//       tags: ["Payment Processing", "International Transfer", "Spring Boot"],
//     },

//   ];

//   return (
//     <div className="min-h-screen bg-[#111] text-gray-200 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto space-y-12">
//         {/* Profile */}
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           <img
//             src="/photos/mypicture.jpg"
//             alt="Fahim Foysal"
//             className="w-48 h-48 rounded-lg object-cover"
//           />
//           <div>
//             <h1 className="text-3xl font-bold mb-2">Fahim Foysal Emon</h1>
//             <p className="text-gray-400 mb-1">
//               Backend Software Engineer — Fintech & Payments Specialist
//             </p>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="px-2 py-1 bg-blue-800 text-blue-200 rounded">Fintech</span>
//               <span className="px-2 py-1 bg-green-800 text-green-200 rounded">Payments</span>
//               <span className="px-2 py-1 bg-indigo-800 text-indigo-200 rounded">Security</span>
//             </div>
//             <p className="text-gray-400 mb-1">
//               Currently working as a Backend (Java) Software Engineer at{" "}
//               <a
//                 href="https://www.newroztech.com/"
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Newroz Technologies Ltd.
//               </a>
//             </p>

//             <div>
//               <p className="inline-block text-gray-400">Drop email to -{"> "}</p>
//               <p className="inline-block text-blue-500 ml-2">
//                 fahim.foysal.emon@gmail.com
//               </p>
//             </div>
//             <p className="text-gray-300 mb-4 leading-7">
//               A detail-oriented backend engineer with 4+ years building
//               fintech systems: payment gateways, IPN-based reconciliation,
//               transactional engines, secure OAuth2/JWT flows, and KYC/transaction
//               auditing. I design reliable, auditable systems used in
//               high-risk financial flows.
//             </p>
//             <div className="flex gap-3 mb-4">
//               <a
//                 href="#contact"
//                 className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
//               >
//                 I'm open to remote Fintech roles
//               </a>
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 border border-gray-700 rounded text-gray-200 hover:border-blue-500"
//               >
//                 Download Resume
//               </a>
//             </div>
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/FahimFoysalEmon"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/emowzz/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="https://medium.com/@fahim.foysal.emon"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white"
//               >
//                 <ExternalLink size={20} />
//               </a>
//               <a
//                 href="#contact"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Tools */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-gray-100">Tools</h2>
//           <div className="grid grid-cols-3 sm:grid-cols-7 gap-4 items-center">
//             <div className="flex flex-col items-center gap-2">
//               <img src="https://cdn.simpleicons.org/docker/2499ED" alt="Docker" className="w-10 h-10" />
//               <span className="text-sm text-gray-300">Docker</span>
//             </div>

//             <div className="flex flex-col items-center gap-2">
//               <img src="https://cdn.simpleicons.org/jenkins/007EC6" alt="Jenkins" className="w-10 h-10" />
//               <span className="text-sm text-gray-300">Jenkins</span>
//             </div>

//             <div className="flex flex-col items-center gap-2 text-gray-300">
//               <Server size={32} className="text-gray-200" />
//               <span className="text-sm">LogHub</span>
//             </div>

//             <div className="flex flex-col items-center gap-2 text-gray-300">
//               <Cloud size={32} className="text-yellow-400" />
//               <span className="text-sm">CloudWatch</span>
//             </div>

//             <div className="flex flex-col items-center gap-2 text-gray-300">
//               <Terminal size={28} className="text-violet-400" />
//               <span className="text-sm">IntelliJ IDEA</span>
//             </div>

//             <div className="flex flex-col items-center gap-2 text-gray-300">
//               <Code2 size={28} className="text-cyan-400" />
//               <span className="text-sm">VS Code</span>
//             </div>

//             <div className="flex flex-col items-center gap-2 text-gray-200">
//               <Github size={28} />
//               <span className="text-sm text-gray-300">GitHub</span>
//             </div>

//             <div className="flex flex-col items-center gap-2">
//               <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" className="w-10 h-10 rounded" />
//               <span className="text-sm text-gray-300">Postman</span>
//             </div>

//             <div className="flex flex-col items-center gap-2">
//               <img src="https://cdn.simpleicons.org/jira/0052CC" alt="Jira" className="w-10 h-10" />
//               <span className="text-sm text-gray-300">Jira</span>
//             </div>
//           </div>
//         </div>

//         {/* Skills */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-gray-100">
//             Technical Skills
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Java & Spring Boot</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Microservices Architecture</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>REST APIs</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Postgres SQL</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Payment Gateways & IPN</span>
//               </p>
//             </div>
//             <div className="space-y-2">
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Spring Security & Keycloak</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>OAuth 2.0 & JWT</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>React & Thymeleaf</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Mongo DB</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Code2 size={16} className="text-blue-500" />
//                 <span>Financial Workflows & Reconciliation</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Fintech Highlights */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-gray-100">
//             Fintech Highlights
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//               <li>Designed IPN-based reconciliation for payment providers to ensure settlement matching.</li>
//               <li>Implemented secure OAuth2/JWT flows and Spring Security for multi-tenant services.</li>
//               <li>Built transactional purchase engine handling agent → client flows with complete audit trails.</li>
//               <li>Integrated payment gateways and fraud checks with end-to-end logging and tracing.</li>
//             </ul>
//             <div className="space-y-2 text-gray-300">
//               <p>Selected outcomes:</p>
//               <p>- Reduced failed settlement cases by ~30% via IPN reconciliation improvements.</p>
//               <p>- Processed thousands of transactions daily in production microservices.</p>
//               <p>- End-to-end tracing and auditing for regulatory and compliance reporting.</p>
//             </div>
//           </div>
//         </div>

//         {/* Projects */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-gray-100">
//             Featured Projects
//           </h2>
//           <div className="space-y-6">
//             {featuredProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
//               >
//                 <h3 className="font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-3">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-2 py-1 bg-gray-800 rounded-md text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 {project.details && (
//                   <ul className="mt-2 text-gray-300 list-disc list-inside">
//                     {project.details.map((d: string, i: number) => (
//                       <li key={i}>{d}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}

//             {showAllProjects && (
//               <>
//                 {additionalProjects.map((project, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
//                   >
//                     <h3 className="font-semibold mb-2">{project.title}</h3>
//                     <p className="text-gray-400 mb-3">{project.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tags.map((tag, tagIndex) => (
//                         <span
//                           key={tagIndex}
//                           className="px-2 py-1 bg-gray-800 rounded-md text-sm"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}

//             <button
//               onClick={() => setShowAllProjects(!showAllProjects)}
//               className="w-full py-2 px-4 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors flex items-center justify-center gap-2"
//             >
//               {showAllProjects ? (
//                 <>
//                   Show Less <ChevronUp size={16} />
//                 </>
//               ) : (
//                 <>
//                   See More Projects <ChevronDown size={16} />
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Blog Posts */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-gray-100">
//             Technical Writing
//           </h2>
//           <div className="space-y-4">
//             <a
//               href="https://medium.com/@fahim.foysal.emon/simplest-way-to-understand-oauth-2-0-be4e797ab9a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
//             >
//               <h3 className="font-semibold mb-2">Understanding OAuth 2.0</h3>
//               <p className="text-gray-400">
//                 A comprehensive guide to understanding OAuth 2.0 authentication
//                 flow.
//               </p>
//             </a>
//             <a
//               href="https://medium.com/@fahim.foysal.emon/builder-pattern-in-java-b15a5352f63c"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
//             >
//               <h3 className="font-semibold mb-2">Builder Pattern in Java</h3>
//               <p className="text-gray-400">
//                 Deep dive into the Builder design pattern and its
//                 implementation.
//               </p>
//             </a>
//             <a
//               href="https://medium.com/@fahim.foysal.emon/abstract-factory-design-pattern-12db0532c6a5"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
//             >
//               <h3 className="font-semibold mb-2">Abstract Factory Pattern</h3>
//               <p className="text-gray-400">
//                 Exploring the Abstract Factory design pattern and its
//                 applications.
//               </p>
//             </a>
//           </div>
//         </div>

//         {/* Travel */}
//         <div>
//           <h2 className="text-xl font-semibold mb-2 text-gray-100">
//             Travel Adventures
//           </h2>
//           <p className="text-gray-300 mb-4">Oh! I travel to keep my mind fresh — little trips, big stories.</p>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             <figure className="rounded overflow-hidden">
//               <img src="/photos/mountain1.jpg" alt="Bridge adventure" className="w-full h-40 object-cover" />
//               <figcaption className="mt-2 text-sm text-gray-400">Seeing the sun rising behind the mountain - Lachung, Sikkim, India (2022)</figcaption>
//             </figure>

//             <figure className="rounded overflow-hidden">
//               <img src="/photos/mountain2.jpg" alt="Mountain relaxation" className="w-full h-40 object-cover" />
//               <figcaption className="mt-2 text-sm text-gray-400">On the way to Zero Point, near China border - Zero Point, Sikkim, India (2022)</figcaption>
//             </figure>

//             <figure className="rounded overflow-hidden">
//               <img src="/photos/mountain3.png" alt="Mountain view" className="w-full h-40 object-cover" />
//               <figcaption className="mt-2 text-sm text-gray-400">On the way to double decker root bridge - Meghalaya, India</figcaption>
//             </figure>

//             <figure className="rounded overflow-hidden">
//               <img src="/photos/ctg1.jpeg" alt="Travel selfie" className="w-full h-40 object-cover" />
//               <figcaption className="mt-2 text-sm text-gray-400">The royal Chattagram Cith behind me - Tigar Hill, Chittagong, Bangladesh (2023)</figcaption>
//             </figure>

//             <figure className="rounded overflow-hidden">
//               <img src="/photos/mountain5.jpeg" alt="Placeholder 5" className="w-full h-40 object-cover" />
//               <figcaption className="mt-2 text-sm text-gray-400">Beautiful freedom beach - Phuket, Thailand (2025)</figcaption>
//             </figure>

//             <figure className="rounded overflow-hidden">
//               <img src="/photos/sea1.jpeg" alt="Placeholder 6" className="w-full h-40 object-cover" />
//               <figcaption className="mt-2 text-sm text-gray-400">Snorkeling in Andaman Sea, Near Maya Bay - Koh Phi Phi Island, East Krabis , Thailand</figcaption>
//             </figure>
//           </div>

//           <div className="mt-4 text-gray-400">
//             <p>
//               Explored most of the districts of Bangladesh, visited India twice (including Darjeeling, Sikkim, Meghalaya, and Siliguri),
//               and travelled to Thailand — Phi Phi, Phuket, Krabi.
//             </p>
//           </div>
//         </div>

//         <div
//           id="contact"
//           className="grid grid-cols-12 gap-10 items-center mb-10"
//         >
//           <div className="lg:col-span-4 col-span-12 space-y-4 text-gray-100">
//             <div className="flex items-center gap-5">
//               <Phone size={24} />
//               <div className="flex flex-col items-start gap-1">
//                 <p className="text-[20px]">Phone / WhatsApp</p>
//                 <p className="text-blue-500">+8801683149665</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-5">
//               <Mail size={24} />
//               <div className="flex flex-col items-start gap-1">
//                 <p className="text-[20px]">Email</p>
//                 <p className="text-blue-500">fahim.foysal.emon@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-5">
//               <MapPin size={24} />
//               <div className="flex flex-col items-start gap-1">
//                 <p className="text-[20px]">Address</p>
//                 <p className="text-blue-500">Mirpur DOHS, Dhaka, Bangladesh</p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-8 col-span-12">
//             <h2 className="text-xl font-semibold mb-4 text-gray-100">
//               Get in Touch
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-400 mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   required
//                   className="w-auto lg:w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
//                   value={emailForm.name}
//                   onChange={(e) =>
//                     setEmailForm({ ...emailForm, name: e.target.value })
//                   }
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-400 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   required
//                   className="w-auto lg:w-full px-2 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
//                   value={emailForm.email}
//                   onChange={(e) =>
//                     setEmailForm({ ...emailForm, email: e.target.value })
//                   }
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-400 mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   required
//                   rows={4}
//                   className="w-auto lg:w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
//                   value={emailForm.message}
//                   onChange={(e) =>
//                     setEmailForm({ ...emailForm, message: e.target.value })
//                   }
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-auto lg:w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors"
//               >
//                 Send Message <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



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

  // Put fintech-first projects (emphasize outcomes and responsibilities)
  const featuredProjects = [
    {
      title: "Card Selling & Wallet — Fintech Transaction Engine",
      description:
        "Designed and implemented a secure agent-based card selling and wallet system handling agent onboarding, top-ups, IPN-based bank reconciliations and transactional flows.",
      highlights: [
        "Built idempotent IPN handler for bank callbacks",
        "Implemented transactional rollback strategies and audit trails",
        "Role-based agent commission & settlement engine",
      ],
      tags: ["Financial Systems", "Transaction Safety", "IPN", "Spring Boot"],
    },
    {
      title: "EKYB (Electronic Know Your Business)",
      description:
        "Business documentation management with secure authentication, KYC flows and audit logging to meet compliance needs.",
      highlights: ["OAuth2 + Keycloak integration", "Document validation workflows"],
      tags: ["Security", "Compliance", "OAuth2"],
    },
    {
      title: "Hotel and Flight Booking & Payment Gateway",
      description:
        "Calling third party API like TourVisio for Hotel and Flight booking service and payment gateway including it.",
      tags: ["Payments", "Retries", "Hotel Booking"],
    },
  ];

  const additionalProjects = [
    {
      title: "Crypto Trading Integration",
      description:
        "Integrated exchange (OKX) to enable buy/sell flows and ledger updates with eventual consistency across services.",
      highlights: ["Exchange integration", "Microservices architecture", "Resilient order processing"],
      tags: ["Crypto", "Microservices", "Resilience"],
    },
    {
      title: "E-commerce Integrations",
      description:
        "Order orchestration to proxy orders to Amazon/eBay/iHub with tracking and reconciliation features.",
      tags: ["Integrations", "E-commerce", "Reconciliation"],
    },
    {
      title: "Global Payable Platform",
      description:
        "Cross-border payment flows and FX handling between Canada and Bangladesh with KYC checks.",
      tags: ["Cross-border", "Payments", "KYC"],
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
                <p className="text-gray-300">
                  Backend Software Engineer — Fintech
                  {/* <span className="ml-4 px-2 py-1 text-xs bg-emerald-700 rounded">Open to remote</span> */}
                </p>

                <p className="mt-2 text-sm text-gray-400 leading-6 max-w-xl">
                  I design and build secure, compliant financial systems: transaction
                  engines, IPN reconciliations, OAuth2-based auth & agent platforms. Have deep understanding in both Mobile Wallet and Banking transactional engine, about how it works.
                  4+ years of production experience delivering high-throughput
                  services for fintech products. Open to remote senior backend roles.
                </p>

                <div className="mt-3 flex items-center gap-3">
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

                  {/* <span className="ml-4 px-2 py-1 text-xs bg-emerald-700 rounded">Open to remote</span> */}
                </div>
              </div>

              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Mirpur DOHS, Dhaka Bangladesh</p>
                <p className="mt-2 text-sm text-gray-400">Email</p>
                <p className="text-blue-400">fahim.foysal.emon@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Fintech Highlights */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Fintech Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <span>Microservice / Monolith Architecture</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Security: OAuth2, Keycloak, JWT</span>
              </p>
            </div>

            <div className="space-y-2">
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
                <span>Scalable API Design & Backend Architecture</span>
              </p>
            </div>
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
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-2">{project.description}</p>
                    {project.highlights && (
                      <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                        {project.highlights.map((h, hi) => (
                          <li key={hi}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="hidden md:block text-sm text-gray-400">
                    {project.tags.map((t, ti) => (
                      <span
                        key={ti}
                        className="block px-2 py-1 bg-gray-800 rounded-md mb-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
                    <p className="text-gray-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-800 rounded-md text-sm"
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
            <h2 className="text-xl font-semibold mb-4 text-gray-100">Get in Touch</h2>
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
