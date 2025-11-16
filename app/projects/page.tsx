"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactInquiryModal from "@/components/contact-inquiry-modal"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const projects = [
    {
      title: "360 Virtual Tour",
      category: "Web Development",
      description: "Interactive 360-degree virtual tour platform for real estate and property viewing",
      tech: ["React", "Three.js", "Node.js", "AWS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360-virtual-tour-8KYPy8d60wi7aUnJuXnXgSClHAJtpe.webp",
    },
    {
      title: "Analytics Dashboard",
      category: "Frontend",
      description: "Real-time data visualization dashboard for business intelligence",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analytics-dashboard-ZSximFi3VGLejntah9Zi2UFT6Gs5Yw.jpg",
    },
    {
      title: "Cloud Migration Service",
      category: "DevOps",
      description: "Successfully migrated legacy systems to AWS with zero downtime",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud-migration-UhWQIcq3pA2GZCzoLgvaXCe2dRklhZ.png",
    },
    {
      title: "CA Financial System",
      category: "Full Stack",
      description: "Comprehensive financial management system for chartered accountants with GST compliance",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ca-financial-system-dNaKlIiPlJBBpdCuzpowNYgxQpObfV.jpg",
    },
    {
      title: "Education Platform",
      category: "Full Stack",
      description: "Complete online learning platform with course management and student tracking",
      tech: ["MERN", "Stripe", "PostgreSQL", "AWS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/education-platform-t4BTNVD2rnMhbryvChElKAj24rqKok.jpg",
    },
    {
      title: "Lab Software",
      category: "Enterprise",
      description: "Laboratory information management system for sample tracking and reporting",
      tech: ["React", "Python", "PostgreSQL", "Docker"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lab-software-ZW5oWXORenjEgasKTa8Ki8ymw2Y7p0.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-center">
            Our <span className="text-teal-600">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Showcase of successful projects delivered to clients across industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-teal-100 p-8 rounded-lg hover:shadow-lg hover:border-teal-400 transition-all duration-300"
              >
                <div className="bg-teal-50 h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 mb-8 text-lg">Let's build something amazing together</p>
          <Button
            onClick={() => setIsContactOpen(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />

      <ContactInquiryModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
