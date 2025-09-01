'use client'


import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  EyeIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      title: "KeyDeck",
      description: "AI-powered PowerPoint generator that creates professional presentations using Gemini AI and OpenXML SDK. Built with Next.js 15 and .NET 9, featuring dynamic content generation and automatic OneDrive integration.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js 15", ".NET 9", "Google Gemini AI", "Microsoft Graph API", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/rputka",
      featured: true,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "AI Portfolio Management Platform",
      description: "AI-powered portfolio management platform enabling users to track holdings, explore assets, simulate strategies, and receive tailored insights through interactive financial tools.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI API", "Alpha Vantage API", "Supabase"],
      github: "https://github.com/rputka",
      featured: true,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Apple MCP Server",
      description: "MCP server enabling seamless integration between Claude and Apple productivity apps, performing intelligent, context-aware actions across Apple's ecosystem.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Natural Language Processing", "API Integration"],
      github: "https://github.com/rputka",
      featured: true,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Stock Analysis Agent",
      description: "AI research agent that generates investment theses and SWOT analyses by scraping financial news, parsing SEC filings, and interpreting earnings reports.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "LangChain", "Google Gemini API", "Web Scraping"],
      github: "https://github.com/rputka",
      featured: false,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing professional experience and projects. Features animated gradient text effects, smooth scrolling, interactive components, and a clean glass-morphism design with professional contact forms.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/rputka",
      featured: false,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Homework Manager",
      description: "A sleek sticky note-style homework manager for personal use. Features class organization, assignment tracking with due dates, progress monitoring, and smart reset functionality with local storage persistence.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Local Storage", "Lucide React"],
      github: "https://github.com/rputka",
      featured: false,
      color: "from-yellow-500 to-orange-600"
    }
  ]



  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              <span className="section-header">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions 
            that demonstrate my expertise across the full development stack.
          </p>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mb-8">
          <a
            href="https://github.com/ryanputka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 neon-glow group"
          >
            <EyeIcon className="h-6 w-6 group-hover:animate-bounce" />
            View All Projects on GitHub
            <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Featured Projects */}
        <div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}>
                    <CodeBracketIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white/60 hover:text-primary-400 transition-colors duration-300"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-white/60 bg-white/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects