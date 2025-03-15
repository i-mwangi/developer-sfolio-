/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Henry Mwangi",
  title: "Hi all, Henry",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with extensive experience in building innovative Web and Mobile applications using JavaScript, React.js, Node.js, React Native, and an array of other modern libraries and frameworks. Skilled in a wide range of fields, including Building Ai Staff, Machine Learning, Data Analysis, DevOps, and Blockchain, I thrive on creating seamless, efficient, and cutting-edge solutions tailored to diverse challenges."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sPp2XUz1F4oD6QeBYZYCFnbxpPfraWw7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/i-mwangi",
  linkedin: "https://www.linkedin.com/in/henry-mwangi-768b3b299",
  gmail: "mwangihenry336@gmail.com",
  gitlab: "https://gitlab.com/i-mwangi",
  twitter: "https://x.com/MwangiMuse", // Changed from "Twitter" to lowercase "twitter"
  medium: "https://medium.com/@mwangihenry336",
  stackoverflow: "https://stackoverflow.com/users/29978217/henry-mwangi",
  reddit: "https://www.reddit.com/user/DocumentFair4693/",
  // Instagram and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPER WHO LOVES TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Building AI Staff and intelligent virtual assistants"),
    emoji("⚡ Developing Machine Learning models for data-driven solutions"),
    emoji("⚡ Performing Data Analysis to extract valuable insights"),
    emoji("⚡ Implementing DevOps practices for continuous integration and deployment"),
    emoji("⚡ Creating Blockchain applications and smart contracts"),
    emoji("⚡ Building responsive web applications with modern frameworks"),
    emoji("⚡ Developing cross-platform mobile applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AI / Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
    {
      skillName: "DevOps",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jomo Kenyatta University of Agriculture and Technology",
      logo: require("./assets/images/jkuatLogo.webp"),
      subHeader: "Bcs.in Finance computing",
      duration: "September 2022 - 2027",
      desc: "currently developing trading models .",
      descBullets: [
        "Enthusisatic about the future of Quantum finance",
        
      ]
    },
    {
      schoolName: "Emobilis Mobile Technology Institute",
      logo: require("./assets/images/emobilisLogo.jpeg"),
      subHeader: "python,data science,django,flask,web development and mobile development",
      duration: "September 2023 - dec 2023",
      desc: "Valedictorian,Awarded the best project of the year.",
      descBullets: ["Built a mobile application that helps users to find the nearest hospital in case of an emergency."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "machine learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Blockchain",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Artisi",
      companylogo: require("./assets/images/artisiLogo.jpg"),
      date: "January 2025 – Present",
      desc: "Currently working as a software engineer at Artisi. I am responsible for developing and maintaining the company's software products, including web and mobile applications. I work closely with the design team to ensure that the software meets the company's business objectives and user needs. I am also involved in the development of new features and the improvement of existing ones .",
     
     
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Health Tech Platform",
      projectDesc: "Leveraging technology to provide affordable and accessible healthcare to all.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayaQbithealth.com/"
        }
        // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        " Selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@mwangihenry336/corrective-rag-is-a-common-technique-to-improve-rag-systems-cc4e479e430c",
      title: "Corrective RAG is a common technique to improve RAG systems",
      description:
        "Corrective RAG is a common technique to improve RAG systems"
    },
    {
      url: "https://medium.com/data-science-collective/the-complete-guide-to-building-your-first-ai-agent-its-easier-than-you-think-c87f376c84b2",
      title: "The Complete Guide to Building Your First AI Agent (It's Easier Than You Think)",
      description:
        "Building an AI agent for your application is easier than you think. Let's build your first AI Agent in less than 30 minutes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Ai Staff",
      subtitle: "Codelab at GDG DevFest Nairobi 2025",
      project_url: "https://github.com/i-mwangi/QbitTalksPDF",
      award_url: "https://x.com/MwangiMuse/status/1898738400913441197"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254 110 300 712",
  email_address: "mwangihenry336@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "https://x.com/MwangiMuse", // Removed the @ symbol as it's added automatically
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
