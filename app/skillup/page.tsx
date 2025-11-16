"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle2, Users, Briefcase, Target } from "lucide-react"
import { useState } from "react"
import { ApplicationModal } from "@/components/application-modal"

export default function SkillUpPage() {
  const programs = [
    {
      title: "Web Development Skill Up",
      duration: "45 Days",
      level: "Beginner to Intermediate",
      description: "Master HTML, CSS, JavaScript, React, and full-stack web development",
      highlights: ["Live projects", "Industry mentors", "Job placement support"],
    },
    {
      title: "UI/UX Design Skill Up",
      duration: "45 Days",
      level: "Beginner to Intermediate",
      description: "Learn design principles, Figma, prototyping, and user-centered design",
      highlights: ["Portfolio projects", "Design mentors", "Industry best practices"],
    },
    {
      title: "RPA (Robotic Process Automation)",
      duration: "45 Days",
      level: "Intermediate",
      description: "Automate business processes using UiPath, Blue Prism, and Python",
      highlights: ["Real automation projects", "RPA tools expertise", "Career advancement"],
    },
    {
      title: "Data Science Skill Up",
      duration: "45 Days",
      level: "Intermediate",
      description: "Python, data analysis, machine learning, and data visualization",
      highlights: ["Real datasets", "ML projects", "Analytics tools"],
    },
    {
      title: "AWS Cloud Solutions",
      duration: "45 Days",
      level: "Intermediate",
      description: "AWS fundamentals, EC2, S3, Lambda, and cloud architecture",
      highlights: ["AWS certification prep", "Hands-on labs", "Cloud projects"],
    },
  ]

  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState("")

  const handleApplyClick = (programTitle: string) => {
    setSelectedProgram(programTitle)
    setIsApplicationOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-center">
            Skill Up <span className="text-teal-600">Program</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Intensive, hands-on 45-day training programs to launch your tech career
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Mentors",
                desc: "Learn from industry professionals with years of experience",
              },
              { icon: Briefcase, title: "Real Projects", desc: "Build actual products and add them to your portfolio" },
              { icon: Target, title: "Job Ready", desc: "100% practical curriculum focused on market demands" },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4">
                  <benefit.icon className="w-12 h-12 text-teal-600 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-black">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our 45-Day Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white border-2 border-teal-100 p-8 rounded-lg hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">{program.title}</h3>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                </div>
                <p className="text-teal-600 font-semibold mb-3">{program.duration}</p>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-3 mb-6">
                  {program.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => handleApplyClick(program.title)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-teal-100">Graduates</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-teal-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Upskill?</h2>
          <p className="text-gray-600 mb-8 text-lg">Join our next cohort and transform your career</p>
          <Button
            onClick={() => handleApplyClick("Skill Up Program")}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full"
          >
            Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
        programTitle={selectedProgram}
      />

      <Footer />
    </div>
  )
}
