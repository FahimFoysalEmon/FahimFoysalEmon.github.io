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

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:fahim.foysal.emon@gmail.com?subject=Message from ${
      emailForm.name
    }&body=${encodeURIComponent(emailForm.message)}%0A%0AFrom: ${
      emailForm.email
    }`;
    window.location.href = mailtoLink;
  };

  const featuredProjects = [
    {
      title: "EKYB (Electronic Know Your Business)",
      description:
        "Business documentation management platform with complete authentication and security systems.",
      tags: ["Spring Security", "OAuth", "REST APIs"],
    },
    {
      title: "IQDX",
      description:
        "Cryptocurrency trading platform with OKX integration, implementing sell/buy operations and admin panel.",
      tags: ["Crypto", "Microservices", "Spring Boot"],
    },
    {
      title: "FIB Booking",
      description:
        "Hotel booking system with integrated payment gateway for seamless reservations.",
      tags: ["Payment Gateway", "Booking System", "Spring Boot"],
    },
  ];

  const additionalProjects = [
    {
      title: "Dizli",
      description:
        "E-commerce platform enabling direct orders from Amazon, eBay, and iHub. Implemented complete authentication system.",
      tags: ["Authentication", "E-commerce", "Integration"],
    },
    {
      title: "GlobPay",
      description:
        "International payment platform facilitating transactions from Canada to Bangladesh.",
      tags: ["Payment Processing", "International Transfer", "Spring Boot"],
    },
    {
      title: "Card Selling Platform",
      description:
        "Platform for agents to sell gift cards and top-up services to users with comprehensive agent management.",
      tags: ["Agent System", "E-commerce", "Spring Boot"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-gray-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/photos/mypicture.jpg"
            alt="Fahim Foysal"
            className="w-48 h-48 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">Fahim Foysal Emon</h1>
            <p className="text-gray-400 mb-1">
              Software Engineer & Travel Enthusiast
            </p>
            <p className="text-blue-500 mb-1">
              fahim.foysal.emon@gmail.com
            </p>
            <p className="text-gray-300 mb-4 leading-7">
              A detail-oriented software engineer with 4 years of experience in
              Java and Spring Boot. Specialized in creating enterprise solutions
              and REST APIs in both Microservices and Monolithic architectures.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/FahimFoysalEmon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/emowzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://medium.com/@fahim.foysal.emon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Java & Spring Boot</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Microservices Architecture</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>REST APIs</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>Spring Security & Keycloak</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>OAuth 2.0 & JWT</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-500" />
                <span>React & Thymeleaf</span>
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Featured Projects
          </h2>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
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

            {showAllProjects && (
              <>
                {additionalProjects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
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
        </div>

        {/* Blog Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Technical Writing
          </h2>
          <div className="space-y-4">
            <a
              href="https://medium.com/@fahim.foysal.emon/simplest-way-to-understand-oauth-2-0-be4e797ab9a"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Understanding OAuth 2.0</h3>
              <p className="text-gray-400">
                A comprehensive guide to understanding OAuth 2.0 authentication
                flow.
              </p>
            </a>
            <a
              href="https://medium.com/@fahim.foysal.emon/builder-pattern-in-java-b15a5352f63c"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Builder Pattern in Java</h3>
              <p className="text-gray-400">
                Deep dive into the Builder design pattern and its
                implementation.
              </p>
            </a>
            <a
              href="https://medium.com/@fahim.foysal.emon/abstract-factory-design-pattern-12db0532c6a5"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Abstract Factory Pattern</h3>
              <p className="text-gray-400">
                Exploring the Abstract Factory design pattern and its
                applications.
              </p>
            </a>
          </div>
        </div>

        {/* Travel */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Travel Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="/photos/mountain1.jpg"
              alt="Bridge adventure"
              className="rounded-lg w-full h-56 object-cover"
            />
            <img
              src="/photos/mountain2.jpg"
              alt="Mountain relaxation"
              className="rounded-lg w-full h-56 object-cover"
            />
            <img
              src="/photos/mountain3.png"
              alt="Mountain view"
              className="rounded-lg w-full h-56 object-cover"
            />
          </div>
          <div className="mt-4 text-gray-400">
            <p>
              Explored all districts of Bangladesh and various parts of India
              including Darjeeling, Sikkim, Meghalaya, and Siliguri.
            </p>
          </div>
        </div>

        <div id="contact" className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-4 space-y-4 text-gray-100">
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
                <p className="text-blue-500">Mirpur DOHS</p>
              </div>
            </div>
          </div>

          <div className="col-span-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
                  value={emailForm.name}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
                  value={emailForm.email}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
                  value={emailForm.message}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
