import { Rocket, Code2, MonitorSmartphone, Sparkles, Settings } from "lucide-react";
import { Instagram, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-12 font-sans">
      {/* Hero Section */}
      <header className="relative text-center mb-32 py-36 px-6 bg-gradient-to-br from-indigo-950 via-gray-900 to-indigo-950 rounded-3xl overflow-hidden shadow-2xl isolate">
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-repeat"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold text-indigo-300 tracking-tight drop-shadow-xl leading-tight">
            FikrCode
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Web & App Development Studio — Turning your ideas into scalable, beautiful digital products using the latest technologies and pixel-perfect design.
          </p>
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a href="#services" className="bg-indigo-500 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-600 transition font-semibold">
              Explore Services
            </a>
            <a href="mailto:fikrcode@outlook.com" className="border border-indigo-400 text-indigo-300 px-6 py-3 rounded-xl hover:bg-indigo-500 hover:text-white transition font-semibold">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
          From startups to enterprises, we help build powerful websites and mobile apps that solve real problems with modern tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard Icon={MonitorSmartphone} title="Web Development" description="We design and develop fast, secure, and responsive websites using React, Next.js, and Tailwind CSS." />
          <ServiceCard Icon={Code2} title="Mobile Apps" description="Cross-platform mobile apps built with React Native or Flutter, optimized for performance and UX." />
          <ServiceCard Icon={Settings} title="Custom Software" description="Fully tailored business solutions like dashboards, internal tools, and client portals." />
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-5xl mx-auto text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          Every project is unique — but we follow a proven, collaborative process to bring your ideas to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <ProcessStep title="1. Discovery" description="We start by understanding your vision, goals, and requirements." />
          <ProcessStep title="2. Design" description="We craft clean, intuitive UI/UX prototypes for feedback and approval." />
          <ProcessStep title="3. Development" description="We build with the latest frameworks, keeping performance in mind." />
          <ProcessStep title="4. Delivery & Support" description="Launch, monitor, and improve — we stay with you post-launch." />
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="max-w-5xl mx-auto text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          A glimpse into the projects we've built — combining functionality, design, and performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PortfolioCard title="Startup Landing Page" tech="React, Tailwind, Netlify" />
          <PortfolioCard title="E-Commerce Dashboard" tech="Next.js, PostgreSQL, Stripe API" />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
        <p className="text-gray-400 mb-4 text-lg">
          FikrCode is a creative development studio based in Jordan. We're a small team of developers, designers, and strategists passionate about clean code and intuitive interfaces.
        </p>
        <p className="text-gray-400 text-lg">
          Whether you’re launching a new product or modernizing legacy systems, we’ve got the expertise to help.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-10 text-center text-sm text-gray-500">
        <p className="mb-4">&copy; {new Date().getFullYear()} FikrCode. All rights reserved.</p>
        <div className="flex justify-center gap-8 mb-4 text-indigo-400">
          <a href="https://www.instagram.com/fikr.code/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-300 transition">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a href="https://www.linkedin.com/company/107742319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-300 transition">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="mailto:fikrcode@outlook.com" className="flex items-center gap-2 hover:text-indigo-300 transition">
            <Mail className="w-4 h-4" /> Email Us
          </a>
        </div>
        <p className="mb-2">
          🌐 <a href="https://fikrcode.online" className="text-indigo-400 hover:underline transition" target="_blank" rel="noopener noreferrer">fikrcode.online</a>
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({ Icon, title, description }) {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-6 rounded-2xl shadow-md group">
      <div className="flex items-center justify-center mb-4">
        <Icon className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <h3 className="text-xl font-bold text-indigo-300 mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

function ProcessStep({ title, description }) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-lg font-semibold text-indigo-300 mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function PortfolioCard({ title, tech }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
      <h4 className="text-xl font-bold text-indigo-300 mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">Tech Used: {tech}</p>
    </div>
  );
}

export default App;
