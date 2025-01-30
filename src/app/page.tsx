import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Highlight } from "./components/ui/hero-highlight";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./components/ui/card";
import ContactForm from "./components/contact-form";
import HeroSection from "./components/hero-section";

const outfit = Outfit({ subsets: ["latin"] });

const TechnicalSkills = {
  "Frontend Development": {
    "React.js / Next.js": "90%",
    "HTML/CSS": "85%",
    "JavaScript": "85%",
  },
  "Backend Development": {
    "Node.js": "85%",
    "Python": "80%",
    "Ruby": "75%",
  },
  "DevOps & Tools": {
    "Git": "85%",
    "AWS": "80%",
    "Docker": "75%",
  }
};

const WorkExperience = [
  {
    title: "Senior Software Engineer",
    company: "Teleparty",
    period: "2023 - Present",
    points: [
      "Integrated multiple streaming services to the platform",
      "Developed first audio service (Spotify) integration",
      "Worked on core platform features"
    ]
  },
  {
    title: "Software Engineer L1, L2",
    company: "Scaler",
    period: "2021 - 2023",
    points: [
      "Led multiple growth-focused projects",
      "Developed the Backend for Scaler Mobile App",
      "Developed key service modules related to Scaler"
    ]
  },
  {
    title: "Software Engineer",
    company: "Deutsche Telekom",
    period: "2020 - 2021",
    points: [
      "Built Multi-Tenant CMS for OneShop",
      "Developed Page Builder feature",
      "Implemented a Google Chart implementation"
    ]
  }
];

const FeaturedProjects = [
  {
    title: "Pull Sense",
    description: "An AI powered Pull Request Reviewer",
    tags: ["Next JS", "Bun", "Supabase", "Clerk"],
    link: "https://pullsense.com",
  },
  {
    title: "Fit All In One",
    description: "An all in one fitness app",
    tags: ["React Native", "Bun", "Supabase"],
    link: "#",
  },
  {
    title: "Video Mash",
    description: "A video summarization tool using ML",
    tags: ["Pythin", "Django"],
    link: "https://github.com/aswinzz/VideoMash",
  }
];

const Testimonials = [
  {
    name: "John Doe",
    role: "CTO, Tech Partner",
    content: "Exceptional problem-solving abilities and technical expertise. A valuable asset to any development team.",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    content: "Excellent communication skills and always delivers high-quality work on time.",
    rating: 5
  },
  {
    name: "Robert Johnson",
    role: "Senior Developer",
    content: "Great team player with strong technical knowledge. Helped improve our development processes.",
    rating: 5
  }
];

export default function Home() {
  return (
    <main className={`min-h-screen bg-white text-gray-900 ${outfit.className}`}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Software Engineer & Problem Solver</h3>
            <p className="text-gray-600">
              With 5 years of professional experience in software development, I
              specialize in building scalable web software applications. My passion is to build
              efficient, maintainable, and user-friendly solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="pt-6">
                <h4 className="font-bold text-2xl">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="pt-6">
                <h4 className="font-bold text-2xl">20+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(TechnicalSkills).map(([category, skills]) => (
            <Card key={category} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(skills).map(([skill, percentage]) => (
                  <div key={skill} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span>{skill}</span>
                      <span>{percentage}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded">
                      <div 
                        className="bg-blue-600 rounded h-2" 
                        style={{ width: percentage }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {WorkExperience.map((job, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>
                  <span className="text-blue-600">{job.company}</span>
                  <span className="text-gray-600 ml-2">• {job.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-gray-600">{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FeaturedProjects.map((project, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={project.link} className="text-blue-600 hover:text-blue-700">
                  View Project →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400">{testimonial.content}</p>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Let's discuss your project or just say hello! I'm always open to new
                  opportunities and interesting collaborations.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    aswinvb.aswin6@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Bangalore, India
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link 
                    href="https://twitter.com/aswinvb1" 
                    target="_blank"
                    className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group hover:bg-blue-100 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-600 group-hover:text-blue-700"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="https://github.com/aswinzz" 
                    target="_blank"
                    className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group hover:bg-blue-100 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-600 group-hover:text-blue-700"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  </Link>

                  <Link 
                    href="mailto:aswinvb.aswin6@gmail.com"
                    className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group hover:bg-blue-100 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-600 group-hover:text-blue-700"
                      fill="currentColor"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <ContactForm />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Copyright Section */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-100">
        <div className="flex flex-col items-center justify-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Aswin VB. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
