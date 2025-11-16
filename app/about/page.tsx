import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const team = [
    { name: "Founder & Lead", role: "Full-Stack Developer", expertise: "MERN, AWS, DevOps" },
    { name: "Tech Lead", role: "Cloud Architect", expertise: "AWS, Infrastructure, Scaling" },
    { name: "Lead Trainer", role: "Educator", expertise: "MERN, Web Dev, Mentoring" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-center">
            About <span className="text-teal-600">LevTech</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Building exceptional tech products and training the next generation of developers
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                At LevTech Solutions, we are a team of passionate developers and technologists dedicated to delivering
                world-class software solutions. We have successfully undertaken numerous projects across various
                industries, helping businesses transform their digital presence.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we are expanding our impact by launching our Skill Up Program. Our mission is to bridge the gap
                between theoretical knowledge and practical industry demands. We provide hands-on, 45-day intensive
                training programs designed to equip aspiring developers with real-world skills needed to succeed in the
                tech industry.
              </p>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Our Values</h3>
              <div className="space-y-4">
                {["Excellence", "Integrity", "Hands-on Learning", "Community", "Innovation"].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-teal-100">
              <h3 className="text-2xl font-bold text-black mb-4">Project Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Started as a startup just 1.5 years ago, LevTech has rapidly grown to successfully deliver 35+ projects
                for clients across industries. From custom software development to complex web applications, we have
                consistently delivered solutions that exceed client expectations and drive measurable business impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-teal-100">
              <h3 className="text-2xl font-bold text-black mb-4">Skill Up Initiative</h3>
              <p className="text-gray-700 leading-relaxed">
                Recognizing the need for practical tech education, we launched the Skill Up Program to mentor and train
                the next generation of developers. Through our intensive 45-day programs, we transform passionate
                individuals into job-ready professionals with hands-on experience in cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "35+", label: "Successful Projects" },
              { number: "200+", label: "Happy Clients" },
              { number: "500+", label: "Skill Up Graduates" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
