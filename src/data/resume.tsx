import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Joswin Emmanuel",
  initials: "JE",
  url: "https://github.com/joswinemmanuel",
  location: "Kottayam, Kerala",
  locationLink: "https://www.google.com/maps/place/Kottyam",
  description:
    "Enthusiastic Programmer. Aspiring to be a Software Developer. I love technology and I am really amazed to see how it changes the world.",
  summary:
    "I embarked on my journey in computer science in 2019, starting with [Senior School in Computer Science](/#education). Now, as a final-year [Computer Science Engineering](/#education) student, I m pursuing an [Honors degree in Computer Security](/#education) along with a [Minor degree in VLSI and Embedded Systems](/#education). Alongside academics, I&apos;ve gained [valuable industry experience by working with companies during college](#work). My passion for programming and development has driven me to [achieve milestones such as winning hackathons and excelling in various competitions](/#achievements). In my free time, I channel my creativity into [exciting side projects](#projects), further fueling my enthusiasm for innovation.",
  avatarUrl: "/joswin.png ",
  skills: [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "PHP",
    "C",
    "C++",
    "Java",
    "Flutter",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "joswinemmanuel2002@gmail.com",
    tel: "+91 9526547119",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/joswinemmanuel",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joswin-emmanuel-752904228",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/JoswinEmmanuel",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@joswinemmanuel",
        icon: Icons.youtube,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:joswinemmanuel2002@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CSI SJCET",
      badges: [],
      href: "https://csisjcet.netlify.app/",
      location: "Remote",
      title: "Technical Mentor",
      logoUrl: "/csi.jpg",
      start: "Oct 2024",
      end: "Present ",
      description:
        "As a Technical Mentor at CSI SJCET, I guided students in kickstarting their programming journeys, conducting workshops on Python, Flask, Git, GitHub, Web Development, and more. I delivered motivational sessions to inspire students and provided guidance on building impactful resumes, GitHub profiles, LinkedIn, and other public portfolios. I also offered one-on-one support to address individual doubts, ensuring personalized mentorship to help students showcase their skills and grow confidently in their technical pursuits.",
    },
    {
      company: "Pupilfirst",
      badges: [],
      href: "https://www.pupilfirst.org/",
      location: "Remote",
      title: "Web Developer Trainee",
      logoUrl: "/pupilfirst.jpg",
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        "Selected for the prestigious GDC AI Workforce program by Pupilfirst, I underwent extensive training in modern web development tools like Tailwind CSS, Node.js, TypeScript, React etc. Collaborating on real-world projects with expert mentorship, I honed my practical skills in web development and AI, gaining invaluable hands-on experience in cutting-edge technologies.",
    },
    {
      company: "CareStack",
      href: "https://carestack.com/",
      badges: [],
      location: "Remote",
      title: "Product Engineer Intern",
      logoUrl: "/carestack.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description:
        "During my internship at CareStack as a Product Engineer, I had an enriching experience that pushed me beyond my comfort zone and fostered both professional and personal growth. I designed a modular reporting framework for CareStack s analytics platform using Telerik Reporting, enhancing efficiency and scalability. This framework streamlined the creation and customization of reports across diverse data modules, optimizing reporting operations and delivering impactful insights.",
    },
    {
      company: "TinkerHub SJCET",
      href: "https://tinkerhub.org/",
      badges: [],
      location: "Pala, Kerala",
      title: "Co-lead",
      logoUrl: "/tinkerhub_sjcet_logo.jpg",
      start: "Feb 2022",
      end: "Jan 2024",
      description:
        "Being a part of TinkerHub, one of the most vibrant technical communities at SJCET, was a transformative experience. As the lead, I honed my leadership, decision-making, and communication skills while fostering meaningful connections with like-minded individuals. I spearheaded initiatives, organized technical events and workshops, and inspired numerous students to embark on their coding journeys. My role involved making critical decisions and charting the future direction of TinkerHub at SJCET, leaving a lasting impact on the community.",
    },
  ],
  education: [
    {
      school: "St. Joseph s College of Engineering and Technology, Palai",
      href: "https://sjcetpalai.ac.in/",
      degree: "Bachelor of Technology in Computer Science Engineering - CGPA: 9.1",
      logoUrl: "/sjcet.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Joseph s College of Engineering and Technology, Palai",
      href: "https://sjcetpalai.ac.in/",
      degree: "Bachelor of Technology Honors in Computer Security",
      logoUrl: "/sjcet.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Joseph s College of Engineering and Technology, Palai",
      href: "https://sjcetpalai.ac.in/",
      degree: "Bachelor of Technology Minor in VLSI and Embedded Systems",
      logoUrl: "/sjcet.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "De Paul Public School - CBSE",
      href: "https://www.depaulnh.ac.in/",
      degree: "Senior School, Computer Science - Grade: 95.2%",
      logoUrl: "/depaul.png",
      start: "2021",
      end: "2020",
    },
    {
      school: "De Paul Public School - CBSE",
      href: "https://www.depaulnh.ac.in/",
      degree: "Secondary School - Grade: 95%",
      logoUrl: "/depaul.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "ReachOut",
      href: "https://github.com/joswinemmanuel/ReachOut",
      dates: "Mar 2024 - Jun 2024",
      active: true,
      description:
        "A comprehensive mental health support platform for college students, offering various mental health support tools like journaling, mood tracking with recommendations, a chatbot, counselor appointment booking, feedback, and more.",
      technologies: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "jQuery",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/ReachOut",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "ReachOutDemo.mp4",
    },
    {
      title: "Web Genie",
      href: "https://github.com/joswinemmanuel/WEB-GENIE",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Web Genie is an innovative browser automation tool that transforms natural language commands into actions, leveraging AI-powered techniques to simplify web interactions and enhance productivity without manual coding.",
      technologies: [
        "Typescript",
        "React",
        "AI SDK",
        "LLM",
        "Web Extension",
        "IndexedDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/WEB-GENIE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/WebGenieDemo.mp4",
    },
    {
      title: "AquaQuest",
      href: "https://github.com/joswinemmanuel/AquaQuest",
      dates: "Sep 2024 - 18 hours",
      active: true,
      description:
        "Smart India Hackathon prelims First Prize winning project. A visual novel game designed to educate the next generation on the importance of water conservation and the different water conservation techniques in a creative and interactive storytelling approach.",
      technologies: [
        "Python",
        "Ren Py",
        "Audacity",
        "Photoshop",
        "Game Development",
        "Visual Novel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/AquaQuest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "AquaQuestDemo.mp4",
    },
    {
      title: "SmartLock",
      href: "https://github.com/joswinemmanuel/SmartLock",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "SmartLock is an Arduino-based RFID access control system with GPS location tracking, providing secure authentication through RFID cards and real-time validation via a server.",
      technologies: [
        "Arduino",
        "C++",
        "AT Commands",
        "HTML",
        "CSS",
        "Python",
        "Flask",
        "jQuery",
        "SQLite",
        "Shadcn UI",
        "ThinkSpeak",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/SmartLock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/SmartLockDemo.mp4",
    },
    {
      title: "GitHub Repo Filter",
      href: "https://github-repo-filter.onrender.com",
      dates: "Sep 2023 - Nov 2023",
      active: true,
      description:
        "A GitHub Repository Filter web app built using the Flask framework in Python. It allows users to filter the most starred GitHub repositories by programming language and navigate directly to the repository via a link button.",
      technologies: [
        "Python",
        "Flask",
        "Javascript",
        "HTML",
        "CSS",
        "Github API",
      ],
      links: [
        {
          type: "Website",
          href: "https://github-repo-filter.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Github-Repo-Filter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/GitHubRepoFilter.mp4",
    },
    {
      title: "Python Quiz App",
      href: "https://joswinemmanuel.github.io/Python-Quiz-App/",
      dates: "Mar 2023 - May 2023",
      active: true,
      description:
        "Python Quiz App, built with Flutter, offers an interactive and responsive platform to test Python knowledge, featuring engaging quizzes and a user-friendly design for an enjoyable learning experience.",
      technologies: [
        "Dart",
        "Flutter",
        "Android Studio",
        "Visual Studio Code",
        "App Development",
      ],
      links: [
        {
          type: "Website",
          href: "https://joswinemmanuel.github.io/Python-Quiz-App/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Python-Quiz-App-Code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "PythonQuizApp.mp4",
    },
    {
      title: "Connect Four",
      href: "https://joswinemmanuel.github.io/Connect-Four-jQuery/",
      dates: "Feb 2023",
      active: true,
      description:
        "The classic two-player game of Connect Four, where players compete to connect four dots in a straight line horizontally, vertically, or diagonally to win. Provided a responsive, interactive interface for an engaging experience.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://joswinemmanuel.github.io/Connect-Four-jQuery/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Python-Quiz-App-Code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "ConnectFour.mp4",
    },
    {
      title: "Image Target",
      href: "https://github.com/joswinemmanuel/Unity/tree/main/Image_Target",
      dates: "Jun 2022",
      active: true,
      description:
        "Image Target is a project built using Unity and the Vuforia Engine. It detects and tracks images by comparing natural features from the camera feed with a target database. Once the target is identified, an AR object is projected.",
      technologies: [
        "C#",
        "Unity",
        "Vuforia Engine",
        "Augmented Reality",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Unity/tree/main/Image_Target",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "ImageTargeting.mp4",
    },
  ],

  achievements: [
    {
      title: "Smart India Hackathon prelims",
      href: "https://www.linkedin.com/posts/joswinemmanuel_python-renpy-unity-activity-7242463172366909440-wpiQ?utm_source=share&utm_medium=member_desktop",
      dates: "1st Place",
      active: true,
      description:
        "A visual novel game designed to educate the next generation on the importance of water conservation and the different water conservation techniques in a creative and interactive storytelling approach.",
      technologies: [
        "Python",
        "RenPy",
        "Game Development",
        "Visual Novel",
        "Audacity",
        "Photoshop",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_python-renpy-unity-activity-7242463172366909440-wpiQ?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/AquaQuest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sih2.jpg",
      video: "",
    },

    {
      title: "Internship at CareStack",
      href: "https://carestack.com/",
      dates: "Product Engineer",
      active: true,
      description:
        "Selected as one of nine interns from over a thousand plus applicants after rigorous interview rounds, this internship was a transformative experience. It provided me with valuable insights into corporate life and equipped me with essential skills to thrive as a software developer, shaping both my technical and professional growth.",
      technologies: [
        "C#",
        ".NET",
        "Angular",
        "Azure",
        "SQL Server",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_my-internship-at-carestack-as-a-product-engineer-activity-7236327040981819394-iHuf?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/carestack_team.jpg",
      video: "",
    },
    {
      title: "Kaleidoscope IT Talks",
      href: "https://youtu.be/p1e2ErwWjoQ?si=oxE9TsoVrW4gd9dU",
      dates: "Best Performer",
      active: true,
      description:
        "I delivered a talk at Kaleidoscope IT Talks, organized by the Computer Society of India (CSI), earning the Best Performer title. I simplified AR, VR, MR and XR concepts, showcasing how these technologies open doors to new realities beyond the physical world.",
      technologies: [
        "C#",
        "Unity",
        "Vuforia",
        "VR",
        "AR",
        "MR",
        "XR",
        "Game Development",
        "Image Targeting",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_unity-vuforia-extendedreality-activity-6987336555820445696-ngE_?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/p1e2ErwWjoQ?si=oxE9TsoVrW4gd9dU",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Unity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/XR.jpg",
      video: "",
    },
    {
      title: "Programming, DSA using Python, IIT Madras, NPTEL",
      href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS70S2397032709014737",
      dates: "Topper",
      active: true,
      description:
        "I ranked in the Top 5% in Programming, Data Structures and Algorithms with Python, gaining deep knowledge of Python and its application in solving DSA problems effectively.",
      technologies: [
        "Python",
        "Programming",
        "Data Structures and Algorithms",
        "Problem Solving",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_iitmadras-python-dsa-activity-6986696330987393024-lO9i?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/NPTEL-DSA-Python",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NPTEL.jpg",
      video: "",
    },
    {
      title: "Python 101",
      href: "https://www.linkedin.com/posts/joswinemmanuel_python-activity-6947903018084220928-z7mw?utm_source=share&utm_medium=member_desktop",
      dates: "1st Place",
      active: true,
      description:
        "I won my first competition, Python 101, early in my college journey. It included a three-day workshop followed by a live coding and debugging competition, where I showcased my Python skills and emerged victorious.",
      technologies: [
        "Python",
        "Programming",
        "Data Structures and Algorithms",
        "Problem Solving",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_python-activity-6947903018084220928-z7mw?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/Python101.jpg",
      video: "",
    },
    {
      title: "ForkIt",
      href: "https://www.linkedin.com/posts/joswinemmanuel_forkit-winner-activity-6947903495559593984--ZpA?utm_source=share&utm_medium=member_desktop",
      dates: "Winner",
      active: true,
      description:
        "ForkIt was a GitHub program featuring a two-day workshop that provided in-depth knowledge of Git and GitHub. The program concluded with a competition where participants have to forke the main repository and make valuable contributions",
      technologies: [
        "GitHub",
        "Git",
        "Open Source Contribution",
        "Programming",
        "Development",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_forkit-winner-activity-6947903495559593984--ZpA?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/forkit.jpg",
      video: "",
    },
  ],
} as const;
