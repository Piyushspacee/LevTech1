"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactInquiryModal from "@/components/contact-inquiry-modal"
import { ArrowRight, CheckCircle2, Code2, Globe, Cloud, Server } from "lucide-react"
import { Counter } from "@/components/counter"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                <span className="text-teal-600">Enterprise Consulting</span> & Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                LevTech Solutions provides expert consulting for enterprise-grade software development, cloud
                infrastructure, and digital transformation. We deliver custom solutions that solve complex business
                challenges while offering upskilling programs to strengthen your team.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Enterprise-Grade Consulting & Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Industry-Expert Architects & Consultants</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Proven Solutions Deployed in Production</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full"
                >
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-full bg-transparent"
                  >
                    View Services
                  </Button>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <img
                src="/team-meeting-office-professional.jpg"
                alt="Team working together in office"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-teal-700 mb-2">
                <Counter end={35} suffix="+" />
              </div>
              <div className="text-gray-700">Client Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-700 mb-2">
                <Counter end={200} suffix="+" />
              </div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-700 mb-2">
                <Counter end={5} suffix="+" />
              </div>
              <div className="text-gray-700">Years experienced team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive training programs and professional services designed to accelerate your tech career
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Software Applications",
                description: "Custom desktop and web apps tailored to your workflows.",
              },
              {
                icon: Globe,
                title: "Websites",
                description: "High-performance, responsive websites with modern UX.",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Architect, migrate, and optimize on the cloud.",
              },
              {
                icon: Server,
                title: "AWS Services",
                description: "AWS setup, infrastructure as code, CI/CD, monitoring.",
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-teal-100 p-8 rounded-lg hover:shadow-lg hover:border-teal-400 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="text-teal-600 font-semibold hover:underline flex items-center justify-center gap-2"
            >
              View More Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to transform your career?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Join hundreds of professionals who have upskilled and launched their tech careers with us.
          </p>
          <a href="/skillup">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full">
              Explore Skill Up Program <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />

      <ContactInquiryModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
