import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-center">
            Get in <span className="text-teal-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <p className="text-gray-600">solutionslevtech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+919520947990</p>
                    <p className="text-gray-600">+919890124580</p>
                    <p className="text-gray-600 text-sm mt-1">Mon - Fri, 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-teal-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on complexity, typically ranging from 4-16 weeks.",
              },
              {
                q: "What's your support policy?",
                a: "We provide 24/7 support during project delivery and ongoing maintenance options.",
              },
              {
                q: "Can you work with existing codebases?",
                a: "We specialize in legacy system modernization and enhancement.",
              },
              {
                q: "How do you handle project changes?",
                a: "We use an agile approach with regular communication to adapt to changing requirements.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-black mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
