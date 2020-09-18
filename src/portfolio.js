/* Change this file to get your personal Porfolio */
 
// Website related settings
const settings = {
	isSplash: false,  // Change this to false if you don't want Splash screen.
   };
	
	
   //Home Page
   const greeting = {
	  title: "Gaurav",
	  logo_name: "Gaurav kr",
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
	  instagram: "https://www.instagram.com/gaurav.kr2506/"
   };
	
   const skills = {
	data: [
	  
	  {
		title: "Full Stack Development",
		fileName: "FullStackImg",
		skills: [
		  "⚡ Building web application front end using React",
		  "⚡ Build and Develop mobile applications using React Native",
		  "⚡ Build API using NodeJS"
		],
		softwareSkills: [
		  {
			skillName: "HTML5",
			fontAwesomeClassname: "simple-icons:html5",
			style: {
			  color: "#E34F26"
			}
		  },
		  {
			skillName: "CSS3",
			fontAwesomeClassname: "fa-css3",
			style: {
			  color: "#1572B6"
			}
		  },
		 
		  {
			skillName: "JavaScript",
			fontAwesomeClassname: "simple-icons:javascript",
			style: {
			  backgroundColor: "#000000",
			  color: "#F7DF1E"
			}
		  },
		  {
			skillName: "ReactJS",
			fontAwesomeClassname: "simple-icons:react",
			style: {
			  color: "#61DAFB"
			}
		  },
		  {
			skillName: "NodeJS",
			fontAwesomeClassname: "simple-icons:node-dot-js",
			style: {
			  color: "#339933"
			}
		  },
		  
		  
		]
	  },
	


	]
   };
	
	
   // Education Page
   const competitiveSites = {
	competitiveSites: [
	  {
		siteName: "HackerRank",
		iconifyClassname: "simple-icons:hackerrank",
		style: {
		  color: "#2EC866"
		},
	    profileLink: "https://www.hackerrank.com/gauravkr2506"
	  },
	  {
		siteName: "LeetCode",
		iconifyClassname: "simple-icons:leetcode",
		style: {
		  color: "#5B4638"
		},
	    profileLink: "https://leetcode.com/gauravkr2506/"
	  },
	
	  {
		siteName: "Hackerearth",
		iconifyClassname: "simple-icons:hackerearth",
		style: {
		  color: "#323754"
		},
		profileLink: "https://www.hackerearth.com/@gauravkr2506"
	  },
	  
	]
   }
	
   const memories = {
	memoriesSection:[
		{
			title:"hi",
		}
	]
   };
	
	
   const degrees = {
	degrees : [
	  {
		title: "Dr. APJ Abdul Kalam Technical University,Lucknow",
		subtitle: "B.Tech. in Computer Science & Engineering",
	  //   logo_path: "iiitk_logo.png",
	  //   alt_name: "IIITDM Kurnool",
		duration: "2013 - 2017",
		descriptions: [
		  "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
		 
		],
	    website_link: "https://aktu.ac.in/"
	  }
	]
   }
	
   const certifications = {
	  certifications: [
		  {
			  title: "Complete React Hooks Course 2020: A - Z ( Scratch to React )",
			  subtitle: "- Hamil Patel",
			  logo_path: "new-images/react-hook.jpg",
			  certificate_link:
			   "https://www.udemy.com/certificate/UC-241503ea-3c0e-48b1-9a51-b20275bfca66/",
			  alt_name: "Udemy",
			  color_code: "#8C151599"
		  },
		  {
			  title: "Master the Coding Interview: Data Structures + Algorithms",
			  subtitle: "- Andrei Neagoie",
			  logo_path: "new-images/ds-algo.jpg",
			  certificate_link:
			   "https://www.udemy.com/certificate/UC-6dcd44cc-74de-48cf-b5d7-aa2dc545faa8/",
			  alt_name: "Udemy",
			  color_code: "#00000099"
		  },
		  {
			  title: "React Native Projects",
			  subtitle: "- Packt Publishing",
			  logo_path: "new-images/react-native.jpg",
			  certificate_link:
			   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			  alt_name: "Udemy",
			  color_code: "#0C9D5899"
		  },
		  {
			title: "Object-oriented Programming in JavaScript",
			subtitle: "- Mosh Hamedani",
			logo_path: "new-images/oojs.jpg",
			certificate_link:
			 "https://www.udemy.com/certificate/UC-202A303R/",
			alt_name: "Udemy",
			color_code: "#1F70C199"
		},
		 
		 
	  ]
   };
	
	
   // Experience Page
   const experience = {
	  title: "Experience",
	  subtitle: "Work, Internship and Volunteership",
	  description:
		  "I have worked with many evolving startups as Developer, Designer and Software Architect. I have also worked with some well established companies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	  header_image_path: "experience.svg",
	  sections: [
		  {
			  title: "Work",
			  experiences: [
				  {
					  title: "Full Stack Developer",
					  company: "Avis e solutions",
					  // company_url: "https://legatohealthtech.com/",
					  logo_path: "avis.png",
					  // duration: "May 2018 - July 2018",
					  location: "Noida",
					  description:
						  "Avis e Solutions Pvt Ltd is a leading Telecom Products and Software solutions company providing solutions to the ITES, Corporates & Service Sectors. ",
					  color: "#0879bf",
				  },
				  // {
				  //  title: "Android and ML Developer",
				  //  company: "Muffito Incorporation",
				  //  company_url: "https://www.linkedin.com/company/muffito-inc/about/",
				  //  logo_path: "muffito_logo.png",
				  //  duration: "May 2018 - Oct 2018",
				  //  location: "Pune, Maharashtra",
				  //  description:
				  //      "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
				  //  color: "#9b1578",
				  // },
				  // {
				  //  title: "Android Developer",
				  //  company: "FreeCopy Pvt. Ltd.",
				  //  company_url: "https://www.linkedin.com/company/freecopy/about/",
				  //  logo_path: "freecopy_logo.png",
				  //  duration: "Nov 2017 - Dec 2017",
				  //  location: "Ahmedabad, Gujarat",
				  //  description:
				  //      "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
				  //  color: "#fc1f20",
				  // },
			  ],
		  },
		  {
			  title: "Internships",
			  experiences: [
				  {
					  title: "React Developer",
					  company: "Trinity App Labs",
					  company_url: "https://www.trinityapplab.com/",
					  logo_path: "trinity.png",
					  duration:  "Feb 2019 - July 2019",
					  // location: "Gurgaon, Haryana",
					  description:
								  "Trinity Mobile Lab is a Software Company engaged in developing end-to-end web and mobile based solutions serving Android and iOS platforms since 2013. As an expert mobile solution developer, the company architects web and mobile solutions and applications that help businesses grow primarily start-ups looking to build a tech-enabled business, medium and large brands looking for innovative mobile solutions to meet their business requirements. ",
					  color: "#ee3c26",
				  },
				  {
					  title: "Java Developer",
					  company: "Qandle:Smart HR for the Modern Workplace",
					  company_url:
						  "https://www.qandle.com/",
					  logo_path: "qandle.png",
					  duration: "May 2018 - July 2018",
					  // location: "Work From Home",
					  description:
						  "Qandle is a pure tech partner of 200+ forward looking organizations and it provides end to end HRMS solution for medium to large scale companies . It is amongst best 20 HR software solutions globally.",
					  color: "#0071C5",
				  },
			  ],
		  },
		  {
			  title: "Volunteerships",
			  experiences: [
				  {
					  title: "Google Explore ML Facilitator",
					  company: "Google",
					  company_url: "https://about.google/",
					  logo_path: "google_logo.png",
					  duration: "June 2019 - April 2020",
					  location: "Bangalore",
					  description:
						  "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
					  color: "#4285F4",
				  },
				  {
					title: "GHCI'20 SCHOLAR",
					company: "Anita B.org",
					company_url: "https://ghcindia.anitab.org/",
					logo_path: "education.svg",
					duration: "June 2019 - April 2020",
					// location: "Bangalore",
					description:
						"Grace Hopper Celebration India (GHCI) is the largest gathering of women technologists in Asia. At GHCI, the best minds and leaders in the industry come together to share their knowledge and shape the careers of thousands of women in technology.",
					color: "#4285F4",
				},

				  // {
				  //  title: "Microsoft Student Partner",
				  //  company: "Microsoft",
				  //  company_url: "https://www.microsoft.com/",
				  //  logo_path: "microsoft_logo.png",
				  //  duration: "Aug 2019 - May 2020",
				  //  location: "Hyderabad, Telangana",
				  //  description:
				  //      "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
				  //  color: "#D83B01",
				  // },
				  // {
				  //  title: "Mozilla Campus Captain",
				  //  company: "Mozilla",
				  //  company_url: "https://www.mozilla.org/",
				  //  logo_path: "mozilla_logo.png",
				  //  duration: "Oct 2019 - May 2020",
				  //  location: "Kurnool, Andhra Pradesh",
				  //  description:
				  //      "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
				  //  color: "#000000",
				  // },
				  // {
				  //  title: "Developer Students Club Member",
				  //  company: "DSC IIITDM Kurnool",
				  //  company_url:
				  //      "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
				  //  logo_path: "dsc_logo.png",
				  //  duration: "Jan 2018 - May 2020",
				  //  location: "Kurnool, Andhra Pradesh",
				  //  description:
				  //      "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
				  //  color: "#0C9D58",
				  // },
				  // {
				  //  title: "Developer Program Member",
				  //  company: "Github",
				  //  company_url: "https://github.com/",
				  //  logo_path: "github_logo.png",
				  //  duration: "July 2019 - PRESENT",
				  //  location: "Work From Home",
				  //  description:
				  //      "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
				  //  color: "#181717",
				  // },
			  ],
		  },
	  ],
   };
	
   // Projects Page
   const projectsHeader = {
	  title: "Projects",
	  description:
		  "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications.",
	  avatar_image_path: "projects_image.svg",
   };
	
	
   // Contact Page
   const contactPageData = {
	  contactSection: {
		  title: "Contact Me",
		  profile_image_path: "mee.jpg",
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
		  subtitle: "+91 8958596659",
	  },
	  emailSection: {
		  title:"Email-id",
		  subtitle:"goeltanya01@gmail.com",
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
   