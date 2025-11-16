"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ContactInquiryModal from "@/components/contact-inquiry-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Skill Up Program", href: "/skillup" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
{/* Logo */}
<Link href="/" className="flex items-center"> 
  <Image
    src="/logo1.png" // <-- This now matches your filename
    alt="LevTech Solutions Logo"
    width={160} // Adjust width
    height={40} // Adjust height
    priority
  />
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setIsContactOpen(true)
                setIsOpen(false)
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full mt-4"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>

      <ContactInquiryModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  )
}
