import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      title: "EKYB (Electronic Know Your Business)",
      description: "Business documentation management platform with complete authentication and security systems.",
      tags: ["Spring Security", "OAuth", "REST APIs"]
    },
    {
      title: "IQDX",
      description: "Cryptocurrency trading platform with OKX integration, implementing sell/buy operations and admin panel.",
      tags: ["Crypto", "Microservices", "Spring Boot"]
    },
    {
      title: "FIB Booking",
      description: "Hotel booking system with integrated payment gateway for seamless reservations.",
      tags: ["Payment Gateway", "Booking System", "Spring Boot"]
    }
  ];

  const additionalProjects = [
    {
      title: "Dizli",
      description: "E-commerce platform enabling direct orders from Amazon, eBay, and iHub. Implemented complete authentication system.",
      tags: ["Authentication", "E-commerce", "Integration"]
    },
    {
      title: "GlobPay",
      description: "International payment platform facilitating transactions from Canada to Bangladesh.",
      tags: ["Payment Processing", "International Transfer", "Spring Boot"]
    },
    {
      title: "Card Selling Platform",
      description: "Platform for agents to sell gift cards and top-up services to users with comprehensive agent management.",
      tags: ["Agent System", "E-commerce", "Spring Boot"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#111] text-gray-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img 
            src="/mountain-view.jpg" 
            alt="Fahim Foysal" 
            className="w-48 h-48 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">Fahim Foysal Emon</h1>
            <p className="text-gray-400 mb-4">Software Engineer & Travel Enthusiast</p>
            <p className="text-gray-300 mb-4">
              A detail-oriented software engineer with 4 years of experience in Java and Spring Boot.
              Specialized in creating enterprise solutions and REST APIs in both Microservices and
              Monolithic architectures.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/FahimFoysalEmon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/emowzz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://medium.com/@fahim.foysal.emon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Technical Skills</h2>
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
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Featured Projects</h2>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-800 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}

            {showAllProjects && (
              <>
                {additionalProjects.map((project, index) => (
                  <div key={index} className="border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-800 rounded-md text-sm">{tag}</span>
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
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Technical Writing</h2>
          <div className="space-y-4">
            <a 
              href="https://medium.com/@fahim.foysal.emon/simplest-way-to-understand-oauth-2-0-be4e797ab9a"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Understanding OAuth 2.0</h3>
              <p className="text-gray-400">A comprehensive guide to understanding OAuth 2.0 authentication flow.</p>
            </a>
            <a 
              href="https://medium.com/@fahim.foysal.emon/builder-pattern-in-java-b15a5352f63c"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Builder Pattern in Java</h3>
              <p className="text-gray-400">Deep dive into the Builder design pattern and its implementation.</p>
            </a>
            <a 
              href="https://medium.com/@fahim.foysal.emon/abstract-factory-design-pattern-12db0532c6a5"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Abstract Factory Pattern</h3>
              <p className="text-gray-400">Exploring the Abstract Factory design pattern and its applications.</p>
            </a>
          </div>
        </div>

        {/* Travel */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Travel Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/bridge-photo.jpg" alt="Bridge adventure" className="rounded-lg w-full h-48 object-cover" />
            <img src="/mountain-relax.jpg" alt="Mountain relaxation" className="rounded-lg w-full h-48 object-cover" />
            <img src="/mountain-view.jpg" alt="Mountain view" className="rounded-lg w-full h-48 object-cover" />
          </div>
          <div className="mt-4 text-gray-400">
            <p>Explored all districts of Bangladesh and various parts of India including Darjeeling, Sikkim, Meghalaya, and Siliguri.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;