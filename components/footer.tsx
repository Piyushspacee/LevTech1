import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { ArrowRight, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
{/* Company Info */}
<div>
  <Image
    src="/logo1.png" // This is the path to your new transparent logo
    alt="LevTech Solutions Logo"
    width={180} // Adjust this width as needed
    height={45} // Adjust this height as needed
    className="mb-2" // Adds a little space below the logo
  />
  <p className="text-sm text-gray-400">Delivering training and consulting for tech careers.</p>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-teal-400">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                  Web Development
              </li>
              <li>
                  Cloud Solutions
              </li>
              <li>
                  SkillUp Progrm
              </li>
                <li>
                  AWS Services                
              </li>
                            <li>
                  Mobile Development
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <a href="mailto:solutionslevtech@gmail.com" className="hover:text-teal-400">
                  solutionslevtech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a href="tel:+919520947990" className="hover:text-teal-400">
                  +919520947990
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a href="tel:+919890124580" className="hover:text-teal-400">
                  +919890124580
                </a>
              </div>
            </div>
            <a
  href="https://www.linkedin.com/in/levtech-solutions-llp-9ba7aa388"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-sm hover:text-teal-400 mt-2" // <-- FIXED!
>
  <Linkedin size={18} className="text-teal-300" />
  <span>LinkedIn</span>
</a>
            <p className="text-sm mt-4">Join our Skill Up Program today</p>
            <a href="/skillup" className="text-teal-400 hover:text-teal-300 flex items-center gap-2 text-sm mt-2">
              Explore Now <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 LevTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
