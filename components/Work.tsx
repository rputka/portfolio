'use client'

import { motion } from 'framer-motion'
import { 
  DocumentArrowDownIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Work = () => {
  const workExperience = [
    {
      company: "KeyBank",
      position: "Software Engineer Intern",
      duration: "June 2025 - August 2025",
      location: "Cleveland, OH",
      description: "",
      achievements: [
        "Contributed to the development of several internal and customer-facing chatbots using Node.js and Dialogflow CX as part of an Agile development team",
        "Independently designed and developed a proof of concept AI PowerPoint generator that converts simple prompts and structured data into branded, enterprise-ready slide decks, reducing presentation creation time by ~75%",
        "Pitched the tool to KeyBank's Generative AI Executive Review Board, securing leadership interest for continued development and a potential enterprise-wide rollout to over 17,000 users",
        "Gained cross-functional insights by shadowing product managers, scrum masters, and business analysts, contributing to roadmap planning, user feedback integration, and agile ceremonies"
      ],
      technologies: ["Node.js", "Dialogflow CX", "Next.js", "Tailwind CSS", "Typescript", ".Net", "LLMs", "Agile Development"],
      color: "from-blue-500 to-purple-600"
    },
    {
      company: "Proteus Capital",
      position: "Software Engineer Intern",
      duration: "November 2024 - May 2025",
      location: "Remote",
      description: "",
      achievements: [
        "Developed an investment research platform using Python, FastAPI, JavaScript, and Azure AI Search, featuring secure authentication, document management, and AI-driven research report generation via Retrieval-Augmented Generation (RAG)",
        "Integrated multiple internal and external APIs while adhering to the Model-View-Controller (MVC) architecture for scalable and maintainable code",
        "Achieved a 95% reduction in document processing and report creation time, cutting turnaround from days to minutes and enhancing research efficiency"
      ],
      technologies: ["Python", "FastAPI", "JavaScript", "Azure AI Search", "MVC Architecture"],
      color: "from-green-500 to-teal-600"
    }
  ]

  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C#"] },
    { category: "Web & Frameworks", items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Tailwind"] },
    { category: "Cloud", items: ["Azure", "Google Cloud", "AWS"] },
    { category: "Product & Tools", items: ["JIRA", "GitHub", "GitLab", "Microsoft Office"] }
  ]

  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="section-header">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, showcasing growth, achievements, 
            and the impact I&apos;ve made at each step along the way.
          </p>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/RyanPutka-Resume.pdf"
            download="RyanPutka-Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 neon-glow group"
          >
            <DocumentArrowDownIcon className="h-6 w-6 group-hover:animate-bounce" />
            Download Full Resume
            <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.duration}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-primary-400/30 transition-all duration-500">
                {/* Company Info */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${job.color} opacity-20`}>
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{job.position}</h3>
                      <p className="text-primary-400 font-semibold text-lg">{job.company}</p>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="flex items-center gap-2 text-white/80 mb-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span className="font-medium">{job.duration}</span>
                    </div>
                    <p className="text-white/60">{job.location}</p>
                  </div>
                </div>

                {/* Description */}
                {job.description && (
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                )}

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-white/80 text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Technical Skills</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-4 text-center">
                {skillGroup.category}
              </h4>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center py-2 px-3 bg-white/5 rounded-lg text-white/80 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work