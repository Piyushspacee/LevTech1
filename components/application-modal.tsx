"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  programTitle: string
}

export function ApplicationModal({ isOpen, onClose, programTitle }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${programTitle}
Experience Level: ${formData.experience}
Message: ${formData.message}
      `.trim()

      const response = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: whatsappMessage,
          phone: "+919520947990",
          userName: formData.name,
        }),
      })

      if (response.ok) {
        const data = await response.json()

        if (data.whatsappLink) {
          window.open(data.whatsappLink, "_blank")
        }

        alert("Application submitted successfully! WhatsApp will open with your message.")
        setFormData({ name: "", email: "", phone: "", experience: "", message: "" })
        onClose()
      } else {
        alert("Error submitting application. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      alert("Error submitting application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-black">Apply Now</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
            <input
              type="text"
              value={programTitle}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level *</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <option value="">Select experience level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Tell us about your goals..."
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  )
}
