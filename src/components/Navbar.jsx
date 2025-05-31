import { motion } from 'framer-motion';
import { useState } from 'react';

const planets = [
  { 
    name: 'About',
    orbit: 100,
    duration: 20,
    size: 45,
    type: 'mercury',
    startPosition: 0,
    description: 'Small rocky planet with a cratered surface'
  },
  { 
    name: 'Tech Stack',
    orbit: 150,
    duration: 25,
    size: 65,
    type: 'earth',
    startPosition: 72,
    description: 'Blue planet with oceans and continents'
  },
  { 
    name: 'Resume',
    orbit: 240,
    duration: 30,
    size: 50,
    type: 'mars',
    startPosition: 144,
    description: 'Red Planet with polar ice caps and dusty surface'
  },
  {
    name: 'Projects',
    orbit: 300,
    duration: 35,
    size: 110,
    type: 'jupiter',
    startPosition: 216,
    description: 'Giant gas planet with swirling clouds and storms'
  },
  { 
    name: 'Contact',
    orbit: 380,
    duration: 40,
    size: 63,
    type: 'neptune',
    startPosition: 288,
    description: 'Ice giant with deep blue color and high winds'
  },
];

const planetInfo = {
  mercury: {
    title: 'About',
    description: "Hi! I'm Ryan, a second-year student at the University of Notre Dame pursuing a degree in Computer Science alongside a minor in Engineering Corporate Practice. I am passionate about leveraging technology to solve complex problems in the finance and healthcare sectors and beyond. As an aspiring software/AI engineer, I am committed to continual learning and growth, tackling new challenges with creativity and determination.",
    currentRole: {
      title: 'Software Engineer Intern',
      company: 'Proteus, LLC',
      description: 'I am currently working at Proteus, LLC, a company that offers an alternative investment technology platform, providing access to professionally managed investment strategies from third-party managers for qualified investors. As part of the development team, I am contributing to several AI initiatives that will help streamline tedious investment processes.'
    },
    education: {
      school: 'University of Notre Dame',
      degree: 'B.S., Computer Science',
      graduation: 'May 2027'
    },
    details: [
      { label: 'Location', value: 'Cleveland, OH' },
      { label: 'Availability', value: 'Seeking Summer 2026 internship' },
      { label: 'Career Interests', value: 'Software or AI Engineering' },
      { label: 'Target Industries', value: 'Technology, Finance, or Healthcare'}
    ],
    personal: "Outside of my academic and professional pursuits, I'm an avid Cleveland sports fan. Whether it's the Cavs, Guardians, or (sadly) the Browns, I'm tuned into every game. I love all things rugby and, as a player, competed in 4 different countries (US, France, Japan, Netherlands). Apart from sports, I enjoy spending time outdoors—fishing on Lake Erie and taking my dog Charlie for walks in the Cleveland Metroparks."
  },
  earth: {
    title: 'Tech Stack',
    categories: [
      {
        name: 'Languages',
        items: [
          { name: 'Python', image: new URL('/tech-icons/Python.png', import.meta.url).href },
          { name: 'JavaScript', image: new URL('/tech-icons/JS.png', import.meta.url).href },
          { name: 'Java', image: new URL('/tech-icons/Java.png', import.meta.url).href }
        ]
      },
      {
        name: 'Web Development',
        items: [
          { name: 'HTML', image: new URL('/tech-icons/HTML.webp', import.meta.url).href },
          { name: 'CSS', image: new URL('/tech-icons/CSS.svg', import.meta.url).href }
        ]
      },
      {
        name: 'Libraries & Frameworks',
        items: [
          { name: 'Flask', image: new URL('/tech-icons/flask1.png', import.meta.url).href },
          { name: 'FastAPI', image: new URL('/tech-icons/FastAPI.png', import.meta.url).href },
          { name: 'LangChain', image: new URL('/tech-icons/langchain1.png', import.meta.url).href },
          { name: 'React', image: new URL('/tech-icons/React.png', import.meta.url).href }
        ]
      },
      {
        name: 'Tools & Technologies',
        items: [
          { name: 'Git', image: new URL('/tech-icons/git1.png', import.meta.url).href },
          { name: 'Anaconda', image: new URL('/tech-icons/Conda.png', import.meta.url).href },
          { name: 'VSCode', image: new URL('/tech-icons/VSCode.png', import.meta.url).href }
        ]
      }
    ]
  },
  mars: {
    title: 'Resume',
    sections: {
      experience: {
        title: 'Professional Experience',
        items: [
          {
            role: 'Intelligent Automation Intern',
            company: 'KeyBank',
            duration: 'Summer 2025',
            description: [
              'Incoming intern on the Contact Center as a Service (CCaaS) and Intelligent Automation team within the Contact Center, Voice and Chat Technology department'
            ]
          },
          {
            role: 'AI Engineer Intern',
            company: 'Proteus, LLC',
            duration: 'November 2024 - May 2025',
            description: [
              'Built and deployed a retrieval-augmented generation (RAG) system utilizing LangChain and Azure AI services to extract and summarize financial insights from internal documentation',
              'Automated the creation of investment reports by developing a FastAPI backend for the RAG system, reducing manual processing time by 95% and significantly accelerating decision-making workflows',
              'Currently building a machine learning recommendation model to match new investment opportunities with relevant investors based on historical investment patterns and sector exposure'
            ]
          }
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Notre Dame',
            duration: 'Expected May 2027',
            description: [
              'Minor: Engineering Corporate Practice',
              'Relevant Coursework: Calculus I, II, III, Linear Algebra and Differential Equations, Discrete Math, Data Structures, Database Concepts, Introduction to Data Science, Operating System Principles, Systems Programming, Computer Architecture'
            ]
          },
          {
            degree: 'High School Diploma',
            institution: 'Saint Ignatius High School',
            duration: 'May 2023',
            location: 'Cleveland, OH'
          }
        ]
      }
    }
  },
  jupiter: {
    title: 'Projects',
    projects: [
      {
        title: 'UFC Fight Predictor',
        date: 'Summer 2025',
        role: 'Developer',
        description: [
          'Web-scraped UFC fight statistics (e.g., fighter records, strikes, grappling metrics) to build a structured dataset',
          'Engineered an XGBoost model to predict fight outcomes, achieving 80% accuracy on validation data',
          'Designed the model interface for potential interactive predictions and explored deployment options using Flask'
        ]
      },
      {
        title: 'Portfolio Website',
        link: 'www.ryanputka.com',
        date: 'Spring 2025',
        role: 'Developer',
        description: [
          'Designed and developed a dynamic, outer space-themed portfolio website using HTML, CSS, and React',
          'Implemented responsive navigation and interactive elements, including animated planet section selectors'
        ]
      },
      {
        title: 'Medication Reminder Script',
        date: 'Winter 2024',
        role: 'Developer',
        description: [
          'Wrote a Python script that sends daily SMS reminders to a friend to take their medication',
          'Leveraged GitHub Actions for lightweight, serverless task automation and scheduling'
        ]
      }
    ]
  },
  neptune: {
    title: 'Contact',
    description: "Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.",
    email: 'rputka@nd.edu'
  }
};

const Sun = ({ hoveredTitle }) => {
  return (
    <div className="sun">
      <div className="sun-text">{hoveredTitle}</div>
    </div>
  );
};

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div 
      className="scroll-indicator"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path 
          d="M7 10L12 15L17 10" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

const Navbar = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [hoveredTitle, setHoveredTitle] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 20) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setShowScrollIndicator(true);
  };

  const handlePlanetHover = (planet) => {
    setHoveredPlanet(planet.name);
    setHoveredTitle(planet.name);
  };

  const handlePlanetLeave = () => {
    setHoveredPlanet(null);
    setHoveredTitle('');
  };

  const handleModalClose = () => {
    setSelectedPlanet(null);
    setShowScrollIndicator(true);
  };

  return (
    <>
      <div className="navbar">
        <div className="solar-system">
          <Sun hoveredTitle={hoveredTitle} />
          {planets.map((planet, index) => (
            <div 
              key={planet.name}
              className="planet-container" 
              style={{
                '--start-position': `${planet.startPosition}deg`,
                animation: `orbit ${planet.duration}s linear infinite`,
                zIndex: hoveredPlanet === planet.name ? 10 : 5
              }}
              onClick={() => handlePlanetClick(planet)}
              onMouseEnter={() => handlePlanetHover(planet)}
              onMouseLeave={handlePlanetLeave}
            >
              <motion.div
                className={`planet ${planet.type}`}
                style={{
                  '--orbit-radius': `${planet.orbit}px`,
                  position: 'absolute',
                  left: `${planet.orbit}px`,
                  top: '0',
                  width: `${planet.size}px`,
                  height: `${planet.size}px`,
                  transform: `translateX(-50%) translateY(-50%) rotate(-${planet.startPosition}deg)`,
                  cursor: 'pointer'
                }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                animate={{ 
                  scale: hoveredPlanet === planet.name ? 1.3 : 1
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className={`modal-overlay ${selectedPlanet ? 'active' : ''}`} onClick={handleModalClose}>
        <div 
          className="modal-container" 
          onClick={e => e.stopPropagation()}
          onScroll={handleScroll}
        >
          {selectedPlanet && (
            <div className="modal-content">
              <button className="modal-close" onClick={handleModalClose}>×</button>
              <h2>{planetInfo[selectedPlanet.type].title}</h2>
              
              {selectedPlanet.type === 'mercury' ? (
                <>
                  <p>{planetInfo[selectedPlanet.type].description}</p>
                  
                  <div className="section">
                    <h3>{planetInfo[selectedPlanet.type].currentRole.title} at {planetInfo[selectedPlanet.type].currentRole.company}</h3>
                    <p>{planetInfo[selectedPlanet.type].currentRole.description}</p>
                  </div>

                  <div className="section">
                    <h3>Education</h3>
                    <div className="education-details">
                      <p><strong>{planetInfo[selectedPlanet.type].education.school}</strong></p>
                      <p>{planetInfo[selectedPlanet.type].education.degree}</p>
                      <p>Expected Graduation: {planetInfo[selectedPlanet.type].education.graduation}</p>
                    </div>
                  </div>

                  <div className="details-grid">
                    {planetInfo[selectedPlanet.type].details.map((detail, index) => (
                      <div key={index} className="detail-item">
                        <h4>{detail.label}</h4>
                        <p>{detail.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="section">
                    <h3>Personal Interests</h3>
                    <p>{planetInfo[selectedPlanet.type].personal}</p>
                  </div>
                  {showScrollIndicator && <ScrollIndicator />}
                </>
              ) : selectedPlanet.type === 'earth' ? (
                <>
                  <p>{planetInfo[selectedPlanet.type].description}</p>
                  {planetInfo[selectedPlanet.type].categories.map((category, index) => (
                    <div key={index} className="tech-category">
                      <h3>{category.name}</h3>
                      <div className="tech-grid">
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="tech-item"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {showScrollIndicator && <ScrollIndicator />}
                </>
              ) : selectedPlanet.type === 'mars' ? (
                <>
                  <div className="pdf-preview">
                    <a href={new URL('/resume/resume.pdf', import.meta.url).href} target="_blank" rel="noopener noreferrer" className="pdf-container">
                      <img src={new URL('/resume/resume-preview.png', import.meta.url).href} alt="Resume Preview" className="pdf-thumbnail" />
                      <div className="pdf-overlay">
                        <span>View Full Resume</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  
                  {Object.entries(planetInfo[selectedPlanet.type].sections).map(([sectionKey, section]) => (
                    <div key={sectionKey} className="resume-section">
                      <h3>{section.title}</h3>
                      <div className="resume-items">
                        {section.items.map((item, index) => (
                          <div key={index} className="resume-item">
                            <div className="resume-item-header">
                              <h4>{item.role || item.degree}</h4>
                              <p className="company">{item.company || item.institution}</p>
                              <p className="duration">{item.duration}</p>
                              {item.location && (
                                <p className="location">{item.location}</p>
                              )}
                            </div>
                            {item.description && (
                              <ul className="resume-item-description">
                                {item.description.map((point, i) => (
                                  <li key={i}>{point}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {showScrollIndicator && <ScrollIndicator />}
                </>
              ) : selectedPlanet.type === 'jupiter' ? (
                <>
                  <p>{planetInfo[selectedPlanet.type].description}</p>
                  <div className="projects-grid">
                    {planetInfo[selectedPlanet.type].projects.map((project, index) => (
                      <div key={index} className="project-card">
                        <div className="project-header">
                          <h3>
                            {project.title}
                            {project.link && (
                              <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="project-link">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </a>
                            )}
                          </h3>
                          <div className="project-meta">
                            <span className="project-role">{project.role}</span>
                            <span className="project-date">{project.date}</span>
                          </div>
                        </div>
                        {Array.isArray(project.description) ? (
                          <ul className="project-description-list">
                            {project.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="project-description">{project.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  {showScrollIndicator && <ScrollIndicator />}
                </>
              ) : selectedPlanet.type === 'neptune' ? (
                <>
                  <p className="contact-intro">{planetInfo[selectedPlanet.type].description}</p>
                  <form 
                    action={`https://formsubmit.co/${planetInfo[selectedPlanet.type].email}`} 
                    method="POST"
                    className="contact-form"
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Your name"
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="your@email.com"
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea 
                        name="message" 
                        id="message"
                        rows="5"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      Send Message
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="send-icon"
                      >
                        <path 
                          d="M5 12L3 21L21 12L3 3L5 12ZM5 12L13 12" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <p>{planetInfo[selectedPlanet.type].description}</p>
                  <div className="planet-stats">
                    {planetInfo[selectedPlanet.type].stats.map((stat, index) => (
                      <div key={index} className="stat-item">
                        <h3>{stat.label}</h3>
                        <p>{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar; 