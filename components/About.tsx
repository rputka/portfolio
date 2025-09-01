'use client'


import { 
  AcademicCapIcon, 
  MapPinIcon, 
  ClockIcon, 
  BriefcaseIcon,
  HeartIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const aboutItems = [
    {
      icon: AcademicCapIcon,
      title: "Education",
      content: "BS Computer Science",
      description: "University of Notre Dame, May 2027"
    },
    {
      icon: BriefcaseIcon,
      title: "Current Role",
      content: "Software Engineer Intern",
      description: "KeyBank, Cleveland, OH"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      content: "Cleveland, OH",
      description: "Open to remote and local opportunities"
    },
    {
      icon: ClockIcon,
      title: "Availability",
      content: "Open to Internships & Full-time",
      description: "Graduating May 2027"
    }
  ]

  const interests = [
    "Product Management",
    "Software Engineering",
    "AI Engineering", 
  ]

  const industries = [
    "Technology", 
    "Finance",
    "Healthcare",
    "E-Commerce",
    "Aerospace"
  ]

  const personalInterests = [
    "Cleveland Sports",
    "Golf",
    "Hiking",
    "Fishing",
    "Investing"
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              <span className="section-header">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a computer Science student at the University of Notre Dame with a strong foundation in software engineering and a passion for product management.
          </p>
        </div>

        {/* Main Introduction */}
        <div className="glass-effect rounded-2xl p-8 mb-12 border border-white/10 hover:border-primary-400/30 transition-all duration-300">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            During my recent internship with KeyBank&apos;s Conversational AI team, I contributed to the development of several client-facing chatbots. 
            Working within a large enterprise environment, I learned to navigate complex organizational structures and collaborated across multiple teams including product, engineering, and business stakeholders. 
            I also gained valuable cross-functional insights by shadowing product managers, scrum masters, and business analysts, understanding how large-scale projects are managed and delivered.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Previously, I interned at a small investment firm called Proteus Capital, where I built an AI-powered investment research platform from 
            the ground up. The lean team structure allowed me to wear multiple hats as developer, product manager, and technical architect, giving me 
            hands-on experience defining product specifications across the entire development lifecycle.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            These experiences have solidified my passion for product management—a field where I can leverage my technical background to inform 
            strategic decisions, bridge the gap between engineering and business goals, and ultimately deliver exceptional digital products.
          </p>
        </div>

        {/* Professional Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500/20 to-cyan-500/20 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-primary-400 font-medium mb-1">{item.content}</p>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Interests Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Career Interests */}
          <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <BriefcaseIcon className="h-6 w-6 text-primary-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Career Interests</h3>
            </div>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className="flex items-center text-white/80 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Target Industries */}
          <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <BuildingOfficeIcon className="h-6 w-6 text-primary-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Target Industries</h3>
            </div>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="flex items-center text-white/80 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  {industry}
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <HeartIcon className="h-6 w-6 text-primary-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Personal Interests</h3>
            </div>
            <div className="space-y-3">
              {personalInterests.map((interest, index) => (
                <div
                  key={interest}
                  className="flex items-center text-white/80 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About