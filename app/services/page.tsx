"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactInquiryModal from "@/components/contact-inquiry-modal"
import { ArrowRight, Code2, Globe, Cloud, Server, Brain, Database, Settings, Smartphone } from "lucide-react"

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const services = [
    {
      icon: Code2,
      title: "Software Applications",
      description: "Custom desktop and web applications built with modern technologies",
      details: "Scalable, maintainable applications tailored to your business needs.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, high-performance websites with modern UX/UI",
      details: "From landing pages to complex web applications, we build it right.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Architecture, migration, and optimization on the cloud",
      details: "AWS, Azure, or GCP - we help you architect and migrate at scale.",
    },
    {
      icon: Server,
      title: "AWS Services",
      description: "Infrastructure as code, CI/CD pipelines, monitoring, and more",
      details: "Complete AWS ecosystem setup and management.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions and ML model development",
      details: "Implement intelligent systems powered by machine learning.",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Design, optimization, and migration of databases",
      details: "SQL, NoSQL, and cloud-native database solutions.",
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management",
      details: "Streamline your development workflow with modern DevOps practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      details: "iOS, Android, and React Native development expertise.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-center">
            Our <span className="text-teal-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Comprehensive solutions to accelerate your tech projects and career growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-teal-100 p-8 rounded-lg hover:shadow-lg hover:border-teal-400 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-gray-700 font-medium">{service.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your requirements and goals" },
              { step: "02", title: "Planning", desc: "Create detailed roadmap and timeline" },
              { step: "03", title: "Execution", desc: "Build with quality and precision" },
              { step: "04", title: "Support", desc: "Continuous support and optimization" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{item.step}</div>
                <h3 className="font-bold text-lg mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 text-lg">Let's discuss how we can help your project succeed</p>
          <Button
            onClick={() => setIsContactOpen(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full"
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />

      <ContactInquiryModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
