import Image from "next/image";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { CardStack } from "./components/ui/card-stack";
import { Card } from "./components/ui/card";
import { Highlight } from "./components/ui/highlight";
import { HoverEffect } from "./components/ui/card-hover-effect";

const projects = [
  {
    title: "Video Summarization",
    description:
      "Summarizes any video containing speech using subtitles, Implemented 5 algorithms along with a combined Ensemble algorithm to improve the efficiency of the summarization.",
    link: "https://link.springer.com/chapter/10.1007/978-981-15-3514-7_1",
  },
  {
    title: "Centralized Research Data Repository for IIIT Allahabad",
    description:
      "Maintain a database of research papers published under the affiliation of IIIT Allahabad by Implementing scrapers for various research paper hosting websites to obtain data related to IIIT Allahabad",
    link: "#",
  },
  {
    title: "Datlizer",
    description:
      "Developed a visualisation tool by which anyone can connect to their database and visualise their data. Also Integrated ML which can be used to predict future results or classify the current state of the data.",
    link: "https://github.com/Datlizer",
  },
  {
    title: "Hack In The North Registration Portal",
    description:
      "Registration Portal built for India’s best Student Held Hackathon, HackInTheNorth. It had a user base of 2000+ students. Developed on top of Quill(An OpenSource Portal from MIT).",
    link: "#",
  },
  // {
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  // },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];

const EXPERIENCE = [
  {
    id: 0,
    name: "Teleparty",
    designation: "Full Stack Engineer",
    content: (
      <p>
        I have been working on adding Streaming services to our platform, <Highlight>I added Spotify</Highlight> which was the first
        audio service that was added to Teleparty.<br/><br/>
        Tech Stacks: React JS, Vanilla JS, Node JS
      </p>
    ),
  },
  {
    id: 1,
    name: "Scaler",
    designation: "Software Development Engineer 1,2",
    content: (
      <p>
        Worked and Led multiple projects across Scaler, Majorly worked on Growth aspects of Scaler.
        I also <Highlight>Implemented the whole Backend for Scaler Mobile App.</Highlight><br/><br/>
        Tech Stacks: React JS, Ruby on Rails, AWS
      </p>
    ),
  },
  {
    id: 2,
    name: "Deutsche Telekom",
    designation: "Software Development Engineer 1",
    content: (
      <p>
        Worked on the e-commerce platform called OneShop,
        Owner of <Highlight>Landing Page builder for OneShop</Highlight><br/><br/>
        Tech Stacks: React JS
      </p>
    ),
  },
  {
    id: 3,
    name: "UpWork",
    designation: "Freelance Developer",
    content: (
      <p>
        Worked on a <Highlight>LMS Platform</Highlight> including Admin side as well as Learner side.<br/><br/>
        Tech Stacks: React JS
      </p>
    ),
  },
];

const COLLEGE = {
  id: 0,
  name: "Indian Institute of Information Technology",
  designation: "2016-2020",
  content: (
    <p>
      Course: Information Technology <br/><br/>
      {/* Topics: DSA, Compilers, Computer Networks, Data Mining, Theory of Computation, AI <br/><br/> */}
      Achievements: Published Research Paper on Springer <Highlight><a href="https://link.springer.com/chapter/10.1007/978-981-15-3514-7_1">(Paper Link)</a></Highlight><br/><br/>
      CGPA: <Highlight>8.6</Highlight> <br/><br/>
    </p>
  ),
}

export default function Home() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Hello World! <br/> I am Aswin VB.
          </p>
        </div>
      </BackgroundGradientAnimation>
      <div className="experience">
        <CardStack items={EXPERIENCE} />
      </div>
      <div className="college">
        <Card card={COLLEGE} />
      </div>
      
      <div className="mt-8 mx-auto px-8">
        <div className="text-5xl text-center">My Projects</div>
        <HoverEffect items={projects} />
      </div>
      <div className="footer">
        <a href="https://twitter.com/aswinvb1">
          <Image
            src="/x.svg"
            alt="X Logo"
            width={100}
            height={24}
            priority
          />
        </a>
        <a href="https://github.com/aswinzz">
          <Image
            src="/github.png"
            alt="Github Logo"
            width={100}
            height={24}
            priority
          />
        </a>
        <a href="https://www.linkedin.com/in/aswin-vb-872b82152/">
          <Image
            src="/linkedin.svg"
            alt="Linkedin Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}
