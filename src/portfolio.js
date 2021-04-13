/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Gaurav",
  logo_name: "Gaurav",
  nickname: "Software Engineer",
  subTitle:
    "A passionate individual who always seeks to work in a challenging environment for the sake of applying knowledge gained during engineering towards the success of an organisation.",
  resumeLink:
    "https://docs.google.com/document/d/1cqWE0yPKLMTH84RdSYrtAps37wQKHoYWC3zSclRAsSg/edit?usp=sharing",
  portfolio_repository: "https://github.com/gauravkr2506/myPortfolio",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/gauravkr2506",
  linkedin: "https://www.linkedin.com/in/gaurav-singh-359400a8/",
  gmail: "gauravkr2506@gmail.com",
  // gitlab: "https://gitlab.com/gauravkr2506",
  facebook: "https://www.facebook.com/profile.php?id=100004046457930",
  twitter: "https://twitter.com/Gaurav50138049",
  instagram: "https://www.instagram.com/gaurav.kr2506/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building web application front end using React",
        "⚡ Build and Develop mobile applications using React Native",
        "⚡ Build API using NodeJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/gauravkr2506",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://leetcode.com/gauravkr2506/",
    },

    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@gauravkr2506",
    },
  ],
};

const memories = {
  memoriesSection: [
    {
      title: "hi",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. APJ Abdul Kalam Technical University,Lucknow",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "new-images/aktu.png",
      alt_name: "AKTU",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      ],
      website_link: "https://aktu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Server Side Rendering with React and Redux",
      subtitle: "- Stephen Grider",
      logo_path: "new-images/react-ssr.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-dbcb067a-0318-44dd-83b3-0d839ddb64b0/",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Advanced Javascript",
      subtitle: "- Asim Hussain",
      logo_path: "new-images/advance-js.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-48651dc1-794d-44e0-8782-99326b5a1f9e/",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Complete React Hooks Course 2020: A - Z ( Scratch to React )",
      subtitle: "- Hamil Patel",
      logo_path: "new-images/react-hook.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-241503ea-3c0e-48b1-9a51-b20275bfca66/",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Master the Coding Interview: Data Structures + Algorithms",
      subtitle: "- Andrei Neagoie",
      logo_path: "new-images/ds-algo.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6dcd44cc-74de-48cf-b5d7-aa2dc545faa8/",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "React Native Projects",
      subtitle: "- Packt Publishing",
      logo_path: "new-images/react-native.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "Object-oriented Programming in JavaScript",
      subtitle: "- Mosh Hamedani",
      logo_path: "new-images/oojs.jpg",
      certificate_link: "https://www.udemy.com/certificate/UC-202A303R/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Summer Training",
  description: `I have done worked with few startups as Software Engineer, Frontend Developer. 
		  I have also worked with one well established company. I have also done 6 month summer
		  training in Android from Ducat, Noida.
Apart from company work, for sake of learning I also work on my own projects.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Application Developer",
          company: "Telus International",
          company_url: "https://www.telusinternational.com/",
          logo_path: "new-images/telus.png",
          duration: "Nov 2019 - Till Date",
          location: "Noida, Uttar Pradesh",
          description: `TELUS International is a subsidiary of TELUS, 
						a national telecommunications company in Canada. 
						TELUS International provides multilingual customer 
						service outsourcing and digital IT services to global clients.
						I am currently working on RPA project and building dashboard with
						React and NodeJS`,
          color: "#fc1f20",
        },

        ,
        {
          title: "Front End Developer",
          company: "Healthmug",
          company_url: "https://www.healthmug.com/",
          logo_path: "new-images/healthmug.jpg",
          duration: "May 2018 - Oct 2018",
          location: "Delhi",
          description: `Healthmug is an E-Commerce product based company, 
						there I work on technology like React and React-Native, 
						I have build there around 20 small scale mobile application for internal operation 
						 in the company, I have also build 1 big E-Commerce android
						mobile app with React-Native, I have also work on 1 React project for managing 
						distribution center of the company `,
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "Info Space Export",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "new-images/info-space-export.png",
          duration: "June 2017 - May 2018",
          location: "Gurgaon, Haryana",
          description: `Info Space Export was product based company, 
						which was mainly involved in building Poker Game.
						There I work on technology like Vanilla JS, PHP, PGSQL, Ionic3.
						I have done work there on three projects like Admin Panel for Poker Game, 
						Client for Poker Game and Mobile app for Poker Game, which was build in Ionic 3`,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Summer Training",
      experiences: [
        {
          title: "6 week Android Development Course",
          company: "Ducat",
          company_url: "https://www.ducatindia.com/",
          logo_path: "new-images/ducat.jpg",
          duration: "May 2016 - June 2016",
          // location: "Gurgaon, Haryana",
          description: `I have learn there how to build native android app, 
								  in 6 week training and also build a project Contact List using which we save contact on mobile app`,
          color: "#ee3c26",
        },
      ],
    },
    //   {
    // 	  title: "Volunteerships",
    // 	  experiences: [
    // 		//

    // 		  // {
    // 		  //  title: "Microsoft Student Partner",
    // 		  //  company: "Microsoft",
    // 		  //  company_url: "https://www.microsoft.com/",
    // 		  //  logo_path: "microsoft_logo.png",
    // 		  //  duration: "Aug 2019 - May 2020",
    // 		  //  location: "Hyderabad, Telangana",
    // 		  //  description:
    // 		  //      "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    // 		  //  color: "#D83B01",
    // 		  // },
    // 		  // {
    // 		  //  title: "Mozilla Campus Captain",
    // 		  //  company: "Mozilla",
    // 		  //  company_url: "https://www.mozilla.org/",
    // 		  //  logo_path: "mozilla_logo.png",
    // 		  //  duration: "Oct 2019 - May 2020",
    // 		  //  location: "Kurnool, Andhra Pradesh",
    // 		  //  description:
    // 		  //      "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    // 		  //  color: "#000000",
    // 		  // },
    // 		  // {
    // 		  //  title: "Developer Students Club Member",
    // 		  //  company: "DSC IIITDM Kurnool",
    // 		  //  company_url:
    // 		  //      "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    // 		  //  logo_path: "dsc_logo.png",
    // 		  //  duration: "Jan 2018 - May 2020",
    // 		  //  location: "Kurnool, Andhra Pradesh",
    // 		  //  description:
    // 		  //      "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    // 		  //  color: "#0C9D58",
    // 		  // },
    // 		  // {
    // 		  //  title: "Developer Program Member",
    // 		  //  company: "Github",
    // 		  //  company_url: "https://github.com/",
    // 		  //  logo_path: "github_logo.png",
    // 		  //  duration: "July 2019 - PRESENT",
    // 		  //  location: "Work From Home",
    // 		  //  description:
    // 		  //      "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
    // 		  //  color: "#181717",
    // 		  // },
    // 	  ],
    //   },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications with React and mobile application with React-Native.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "new-images/gaurav.jpg",
    description:
      "I am available on almost every social media. You can message me, I will try to reply within 24 hours.",
  },
  // blogSection: {
  //  title: "Blogs",
  //  subtitle:
  //      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //  link: "https://ashutoshhathidara.wordpress.com",
  //  avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //  title: "Address",
  //  subtitle:
  //      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //  avatar_image_path: "address_image.svg",
  //  // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },

  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9582760661",
  },
  emailSection: {
    title: "Email-id",
    subtitle: "gauravkr2506@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  memories,
};
