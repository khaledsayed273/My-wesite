import { useEffect, useRef, useState } from 'react'
import { Card, Button } from '@heroui/react'

const projects = [
  {
    title: 'Masno3',
    description: 'Handmade marketplace connecting Egyptian artisans with customers, offering unique handmade products across multiple categories.',
    tech: 'Next.js, Fastify',
    image: '/src/imeges/masno3.png',
    link: 'https://www.masno3.com'
  },
  {
    title: 'Shahin',
    description: 'Online furniture marketplace offering a wide range of high-quality home furniture with a seamless shopping experience.',
    tech: 'Next.js, Fastify',
    image: '/src/imeges/shahin.png',
    link: 'https://www.shahin-furniture.com/'
  },
  {
    title: 'Golden Chef',
    description: 'Official website for the Golden Chef Festival, an international culinary competition bringing together talented chefs from around the world.',
    tech: 'Html, Php',
    image: '/src/imeges/golden Chef.webp',
    link: 'https://golden-chef.megatron-soft.com/ar'
  },
  {
    title: 'Amir',
    description: 'Personal portfolio website developed for Amir Ashour, designed to showcase personal information, services, achievements, and featured projects in a clean and modern layout.',
    tech: 'Next.js, Php',
    image: '/src/imeges/amir.png',
    // link: 'https://www.amir-furniture.com/'
  },
  {
    title: 'Government Project',
    description: 'Responsive event venue platform providing information about halls, events, services, and online reservations',
    tech: 'Next.js, Php',
    image: '/src/imeges/government.png',
    // link: 'https://www.government-furniture.com/'
  },

]



const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Redux Toolkit', 'RTK Query', 'React Router Dom', 'MUI',
  'Node.js', 'Fastify', 'Express', 'REST API', 'JWT Auth',
  'SQL', 'MongoDB', 'Prisma', 'Git', 'Docker'
]

/* (Blob component removed — orange blob decorations were dropped from the design) */

function Page() {
  const skillsRef = useRef(null)
  const [skillsInView, setSkillsInView] = useState(false)

  useEffect(() => {
    const el = skillsRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full">
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pb-20 pt-24">
        {/* Decorative layer from the Figma "Animated" frame */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
          <div className="absolute left-4 top-[10%] text-[clamp(4rem,13vw,9.5rem)] font-black leading-[0.9] tracking-tight text-ghost">
            Full
            <br />
            Stack
            <br />
            Developer
          </div>
          {/* 30x30 floating squares — as measured in the Figma hero (teal upper, orange mid) */}
          <span
            className="accent-dot animate-dot absolute left-[60%] top-[20%] h-7 w-7 bg-accent"
            style={{ animationDelay: '-1.2s' }}
          />
          <span
            className="accent-dot animate-dot absolute left-[73%] top-[42%] h-7 w-7 bg-warm"
            style={{ animationDelay: '-2.2s' }}
          />
          <span
            className="accent-dot animate-dot absolute bottom-[16%] right-[10%] h-3 w-3 bg-accent"
            style={{ animationDelay: '-3.4s' }}
          />
        </div>

        <div className="container relative mx-auto">
          <p className="text-lg text-muted">Hello I am Khaled Sayed,</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-normal leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            Full Stack <span className="text-accent">Developer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted">
            Passionate about crafting end-to-end web experiences — from React/Next.js frontends to Fastify/Node.js backends and SQL databases. Let&apos;s build something amazing together.
          </p>
          <div className="mt-8">
            <a href="#contact" className="inline-block">
              <Button className="bg-accent text-accent-foreground">Contact me</Button>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-surface px-6 py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
          <span className="accent-dot animate-dot absolute right-[18%] top-16 h-3 w-3 bg-accent" />
        </div>
        <div className="container relative mx-auto">
          <h2 className="text-4xl font-black text-foreground md:text-5xl">About Me</h2>
          <div className="mt-3 h-1 w-16 bg-accent" />
          <p className="mt-6 max-w-3xl text-lg leading-7 text-foreground">
            Full-Stack Developer experienced in building modern, scalable web applications using React.js, Next.js, TypeScript, Node.js, and Fastify. Skilled in developing complete solutions across frontend and backend, with a focus on clean architecture, performance, usability, and maintainable code.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-7 text-muted">
            I have worked as a full-stack developer at Etrevago and Xtech. During my time at Etrevago, I gained valuable experience in developing dynamic web applications across the stack. At Xtech, I have been contributing to innovative projects and further honing my skills in React.js, Next.js, Node.js, Fastify, and modern web development practices. I am committed to delivering high-quality, user-friendly solutions and am eager to collaborate on new projects.
          </p>
        </div>
      </section>

      <section id="skills" className="relative overflow-hidden bg-background px-6 py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
          <span className="accent-dot animate-dot absolute right-[10%] top-20 h-7 w-7 bg-warm" style={{ animationDelay: '-1.8s' }} />
          <span className="accent-dot animate-dot absolute left-[8%] bottom-24 h-3 w-3 bg-accent" />
        </div>
        <div className="container relative mx-auto">
          <h2 className="text-4xl font-black text-foreground md:text-6xl">
            Skills
            <br />
            And
            <br />
            Tools
          </h2>
          <div className="mt-3 h-1 w-16 bg-accent" />
          <p className="mt-6 max-w-3xl text-lg font-semibold text-foreground">
            Skills and tools
          </p>
          <p className="mt-2 max-w-3xl text-base text-muted">
            Lifelong Learner of Full-Stack Development Best Practices, Committed to Staying Up-to-Date with the Latest Trends
          </p>
          <div ref={skillsRef} className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className={`pill-reveal ${skillsInView ? 'in-view' : ''}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="skill-pill rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground">
                  {skill}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative overflow-hidden bg-surface px-6 py-24">
        <div className="container relative mx-auto">
          <h2 className="text-3xl font-medium text-foreground">Explore My Projects</h2>
          <div className="mt-3 h-1 w-16 bg-accent" />
          <p className="mt-6 max-w-3xl text-base text-muted">
            Click on each project to discover my projects and see how I&apos;ve overcome challenges and created innovative solutions. From improving website performance to enhancing user experiences, I have a proven track record of turning ideas into reality.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Card.Content className="gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.description ? (
                    <p className="text-base text-muted">{project.description}</p>
                  ) : (
                    <p className="text-base text-muted italic">Description coming soon.</p>
                  )}
                  {project.tech ? (
                    <p className="text-sm text-muted">Technologies: {project.tech}</p>
                  ) : null}
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="secondary" className="mt-2 w-fit self-start">
                        View project
                      </Button>
                    </a>
                  ) : null}
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-background px-6 py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
          <span className="accent-dot animate-dot absolute right-[12%] top-[62%] h-4 w-4 bg-accent" style={{ animationDelay: '-1s' }} />
        </div>
        <div className="container relative mx-auto">
          <h2 className="text-4xl font-black text-foreground md:text-6xl">Contacts</h2>
          <div className="mt-3 h-1 w-16 bg-accent" />
          <p className="mt-6 max-w-3xl text-base text-foreground/80">
            I&apos;m excited to work with you to create innovative and impactful web solutions. Contact me to discuss your project requirements and explore how we can collaborate.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Card.Content className="items-center gap-3 text-center">
                <i className="fa-solid fa-phone text-2xl text-accent" />
                <p className="text-xl font-semibold text-foreground">01145645014</p>
              </Card.Content>
            </Card>
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Card.Content className="items-center gap-3 text-center">
                <i className="fa-solid fa-envelope text-2xl text-accent" />
                <p className="text-xl font-semibold text-foreground">khaledsayed273@gmail.com</p>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page