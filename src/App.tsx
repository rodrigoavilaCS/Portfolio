import {
  Github,
  Linkedin,
  Mail,
  User,
  Briefcase,
} from 'lucide-react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import StarField from './components/StarField';
import MeteorShower from './components/MeteorShower';

function App() {
  const skills = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: 'text-[#3776AB]',
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      color: 'text-[#092E20]',
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      color: 'text-[#092E20]',
    },
    {
      name: 'Maven',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
      color: 'text-[#3776AB]',
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: 'text-[#3776AB]',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'text-[#4479A1]',
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      color: 'text-[#3776AB]',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'text-[#3776AB]',
    },
  ];

  return (
    <div className="min-h-screen bg-deepSpace text-white relative overflow-hidden">
      <StarField />
      <MeteorShower />

      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter overflow-visible">
              <span className="inline-block bg-clip-text text-shadow bg-gradient-to-r animate-glow pb-[0.1em]">
                Rodrigo Avila
              </span>
            </h1>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 animate-float">
                Backend Developer
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 via-cyan-500 to-orange-600"></div>
            </div>
            <p className="text-xl md:text-2xl text-starWhite/90 mb-8 animate-fade-in opacity-0 [animation-delay:1000ms] max-w-2xl mx-auto leading-relaxed">
              Backend developer with a B.S. in Computer Science, dedicated 
              to turning complex problems into efficient, maintainable solutions.
            </p>
            <div className="flex gap-6 justify-center animate-fade-in opacity-0 [animation-delay:1200ms]">
              <a
                href="https://github.com/rodrigoavilaCS"
                className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
              >
                <Github className="w-6 h-6 group-hover:text-nebulaPink transition-colors" />
                <div className="absolute inset-0 rounded-full bg-nebulaPink/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigoavilaCS/"
                className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
              >
                <Linkedin className="w-6 h-6 group-hover:text-cosmicBlue transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cosmicBlue/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
              <a
                href="mailto:rodriavila1125@gmail.com"
                className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
              >
                <Mail className="w-6 h-6 group-hover:text-emerald-500 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 group">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-nebulaPink/20 to-cosmicBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/AboutMe.jpeg"
                  alt="Profile"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-bold/80 leading-relaxed">
                I'm a backend developer with a B.S. in Computer Science 
                from the University of Florida. I work with Java, Spring Boot, 
                and SQL to build scalable, reliable systems. I enjoy solving 
                problems, learning new things, and creating software that makes a difference.
                Some of my hobbies outside of tech include gaming, music, and racing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-deepSpace/50 border border-cosmicBlue/20 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <User className="w-6 h-6 mb-2 text-cosmicBlue group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-starWhite group-hover:text-cosmicBlue transition-colors">
                    Professional Experience
                  </h3>
                  <p className="text-starWhite/70">1+ Years</p>
                </div>
                <div className="group bg-deepSpace/50 border border-cosmicBlue/20 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Briefcase className="w-6 h-6 mb-2 text-cosmicBlue group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-starWhite group-hover:text-cosmicBlue transition-colors">
                    Projects
                  </h3>
                  <p className="text-starWhite/70">5+ Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="JobQuest"
              description="A gamified career development app that helps job seekers stay motivated 
              and track progress through interactive challenges and achievements."
              image="http://images.unsplash.com/photo-1698077689052-73daf0d5b10b?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={['Java', 'Spring Boot', 'MySQL']}
              //liveLink=""
              codeLink="https://github.com/rodrigoavilaCS/JobQuest"
            />
            <ProjectCard
              title="Bites & Brews Booking"
              description="An online booking platform that streamlines reservations and service 
              scheduling for a small bartending and charcuterie business."
              image="https://images.unsplash.com/photo-1616981733950-15dba222f13e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={['Java', 'Spring Boot', 'MySQL']}
              //liveLink=""
              codeLink="https://github.com/rodrigoavilaCS/Brews-Bites-Booking.git"
            />
            <ProjectCard
              title="UDLUnity"
              description="A social platform empowering teachers to collaborate and engage
              with inclusive and accessible computer science education resources."
              image="http://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={['Java', 'Spring Boot', 'H2']}
              //liveLink=""
              codeLink="https://github.com/rodrigoavilaCS/UDL4CS-Senior-Project"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-starWhite/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-cosmicBlue to-orange-500 text-transparent bg-clip-text mb-4">
                Rodrigo Avila
              </h3>
              <p className="text-starWhite/70 mb-4">
                Software Developer
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rodrigoavilaCS"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rodrigoavilaCS/"
                  className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rodriavila1125@gmail.com"
                  className="text-starWhite/70 hover:text-emerald-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <p className="text-starWhite/70 mb-2">
                Email: rodriavila1125@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-starWhite/10 pt-8 text-center">
            <p className="text-starWhite/50">
              &copy; {new Date().getFullYear()} Rodrigo A. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
