import {BookOpen, Users, Compass, School} from "lucide-react";
import {
  hsMentor,
  socialPhoto,
  mentorshipPhoto,
  nvidiaPhoto,
  conf0,
  conf1,
  conf2,
  conf3,
  conf4,
} from "./assets";

// DATA STRUCTURE DEFINITIONS

export type TeamRole = {role: string; name: string; quote?: string; photo?: string; linkedin?: string; program?: string};

export type TeamSection = {
  name: string;
  color: string;
  light: string;
  border: string;
  isPresidents?: boolean;
  sharedQuote?: string;
  vps?: TeamRole[];
  members: TeamRole[];
};

export type ModalState = {
  member: TeamRole;
  subteam: string;
  color: string;
  isVP?: boolean;
} | null;

export type SponsorTier = "Gold" | "Silver" | "Bronze";

export type Sponsor = {
  letter: string;
  name: string;
  color: string;
  bg: string;
  tier: SponsorTier;
  x: string;
  y: string;
  delay: number;
};

// DATA

// page names to url paths
export const PAGE_TO_PATH: Record<string, string> = {
  home: "/",
  team: "/team",
  sponsors: "/sponsors",
  events: "/events",
  initiatives: "/initiatives",
  conference: "/conference",
  stories: "/stories",
};

// Key Initiative Groups
export const INITIATIVES = [
  {id: "PD", icon: BookOpen, title: "Professional Development", short: "Networking with industry leaders across tech, science & pharma"},
  {id: "Mentor", icon: Users, title: "Industry Mentorship", short: "Pairing undergraduates with experienced industry professionals"},
  {id: "HS", icon: School, title: "High School Outreach", short: "Inspiring the next generation through hands-on workshops"},
  {id: "CO", icon: Compass, title: "Community Outreach", short: "Advancing gender equity across the Greater Toronto Area"},
];

// Key Featured Wise Initiatives
export const MARQUEE_ITEMS = [
  "Professional Development", "Community Outreach", "Industry Mentorship",
  "High School Outreach", "Spilling the Tea", "Networking Events",
  "STEM Workshops", "Annual Conference", "Women in Tech",
];

// Stories of Wise Featured Quotes
export const STORIES = [
  {name: "Amy Wasik", role: "Head of Canada’s Google Cloud Support team", quote: "The more women you talk to…the more you realize that there’s a space for us.", initials: "AW", link: "https://medium.com/wiseuoft/the-2024-wise-national-conference-the-importance-of-self-advocacy-scientific-curiosity-and-62aca91ec5af"},
  {name: "Emily Dawe", role: "Chemical Engineering, Alumni", quote: "There’s a lot of exciting work in the energy industry right now and I think it’s really important to keep your options open so find out what you are passionate about. The best engineers are those that are really passionate about their subject matter.", initials: "ED", link: "https://medium.com/wiseuoft/in-conversation-with-dr-f59a42f76746"},
  {name: "Nina-F. Farac", role: "Chemical Engineering, Alumni", quote: "There is such excitement that comes with creating new materials and being the first to investigate them... You’re at the forefront of pushing boundaries for technical innovation.", initials: "NF", link: "https://medium.com/wiseuoft/catalysts-for-growth-a-journey-in-becoming-a-scientist-with-nina-f-farac-683648716d08"},
];
  

// Team Structure: see teamRole data structure definition above
export const TEAM_STRUCTURE: TeamSection[] = [
  {
    name: "Co-Presidents",
    isPresidents: true,
    color: "#7c3aed",
    light: "rgba(124,58,237,0.10)",
    border: "rgba(124,58,237,0.25)",
    // one quote shared on the presidents photo (their own quotes show in their modals)
    sharedQuote: "",
    members: [
      {role: "Co-President", name: "Eila Farnood", quote: "My Favourite Hobby: Baking!", photo:"",linkedin: "missing", program: "PEY, Engineering Science (Machine Intelligence)"},
      {role: "Co-President", name: "Sarvnaz Ale Mohammad", quote: "Advice to Incoming Members: My advice to an incoming member would be to attend as many events as possible and meet as many people in the community! It’s very inspiring to see so many passionate and dedicated leaders, and it’s a large part of what drew me to stay involved in WISE year after year", photo:"", linkedin:"missing", program: "4th year, Engineering Science, Machine Intelligence"}, 
    ],
 },
  {
    name: "Finance",
    color: "#1d4ed8",
    light: "rgba(29,78,216,0.08)",
    border: "rgba(29,78,216,0.22)",
    vps: [ {role: "VP Finance", name: "Sarah Wang", quote:"A Skill I Have: Walking REALLY quick with a VERY heavy bag", photo:"", linkedin:"https://ca.linkedin.com/in/sarah-wang-013768256", program:"3rd Year Industrial Engineering Student"},
          {role: "VP Finance", name: "Annie Vega Legarda", quote:"At the Top of My Bucket List: learn to knit and make a scarf!", photo:"", linkedin:"http://www.linkedin.com/in/anniepvl", program:"4th year, Industrial Engineering"} ],
    members: [
      {role: "Finance Director", name: "Sarina Hum", quote: "My Favourite Hobby: Playing sports 🏀🏐🏸🏊‍♀️", photo:"sarina_hum.jpg", linkedin:"http://linkedin.com/in/sarina-hum-813262374", program:"2nd year, Rotman Commerce Accounting Specialist, Economics and Computer Science Minor"},
      {role: "Finance Director", name: "Lisa Cao", quote:"Dream Job as a Kid: being a mermaid", photo:"lisa_cao.jpg", program:"3rd year, Math major, statistics and sociology minor"},
      {role: "Finance Director", name:"Grace Lin", quote:"A Fun Fact About Me: I really enjoy playing poker!", photo:"grace_lin.jpg", linkedin:"https://www.linkedin.com/in/grace-yf-lin/", program:"PEY, Industrial Engineering"},
      {role: "Finance Director", name:"Jhanvi Patel", quote:"My Current Dream Job: Cardiologist", photo:"", program:"3rd Year, Biology Major and Physiology and Immunology Minor"},
      {role: "Grants Director", name: "Hilary Kong", quote: "My Favourite Hobby: My favourite hobby is snowboarding!", photo:"hilary_kong.jpg", linkedin:"https://www.linkedin.com/in/hilary-kong-54917a34a", program:"4th Year, Mathematics & Physics Major, Statistics Minor"},
      {role: "Grants Director", name: "Shafia Zaki", quote: "I would love to do a semester abroad next year in London!", photo:"shafia_zaki.jpg", linkedin:"https://www.linkedin.com/in/shafia-zaki-38547b36a/", program:"2nd year, Mechanical Engineering"},
    
    ],
 },
  {
    name: "Internal",
    color: "#5b21b6",
    light: "rgba(91,33,182,0.08)",
    border: "rgba(91,33,182,0.22)",
    vps: [{role: "VP Internal", name: "Rachel Bhatia", quote:"Someone I Look Up To: Lindsay Tu", photo:"", linkedin:"http://www.linkedin.com/in/rachel-bhatia-1b4813251", program:"3rd year, Cell & Molecular Biology and Immunology Majors"},
         {role: "VP Internal", name: "Doyin Adeoya", quote:"My Favourite Hobby: Favourite hobby is hiking, I enjoy the views and rush you get from hiking max", photo:"", linkedin:"https://www.linkedin.com/in/doyin-adeoya/",program:"4th year, Cell and systems biology and Global Health"}],
    members: [
      {role: "Graduate Celebrations Director", name: "Nimra Tariq", quote:"My Current Dream Job: My dream Job is to become a therapist!", photo:"nimra_tariq.jpg", program:"4th year, Human Bio and Psychology Major"},
      {role: "Community Engagement & Culture Director",name: "Alia Djebali", quote:"At the Top of My Bucket List: I want to try sandboarding!", photo:"", linkedin:"http://linkedin.com/in/aliadjebali", program:"4th year, Biomedical Systems Engineering Science Student "},
      {role: "External Affairs Director", name: "Nyela Modrek", quote:"A Life Goal: Own a guinea pig", photo:"nyela_modrek.jpg", program:"3rd year, Cell & Molecular Biology Major, Immunology & Psychology Minors"},
      {role: "External Affairs Director", name: "Shrena Sribalan", quote:"My Current Dream Job: A career where I can combine engineering, healthcare, and technology to solve real-world problems, especially through healthcare consulting or health-tech.", photo:"", linkedin:"https://www.linkedin.com/in/shrenasribalan/", program:"2nd year, Industrial Engineering, AI, Engineering Business and Bioengineering minors"},
      {role: "External Affairs Director", name: "Hannah Li", quote:"Advice to Incoming Members: If you're an incoming member, make sure to talk to lots of people and make new friends! Don't be afraid to try new things :)", photo:"hannah_li.jpg", linkedin:"missing", program:"2nd year, Chemistry and Molecular Genetics Double Major"},
      {role: "External Affairs Director", name: "Megan Miao", quote:"A Life Goal: Increase accessibility and awareness surrounding women's reproductive healthcare!", photo:"megan_miao.jpg", program:"3rd year, Human Biology Major, Physiology and Women and Gender Studies Minor"},
      {role: "Alumni Director", name: "Lia Mitsui Campbell", quote:"A Life Goal: Travel to as many places as possible!", photo:"lia_mitsui_campbell.jpg", linkedin:"https://www.linkedin.com/in/lia-m-campbell/", program:"3rd year, Engineering Science (Robotics)"},
      {role: "Alumni Director", name: "Laaibah Khan", quote:"At the Top of My Bucket List: to go hiking in Switzerland!", photo:"", linkedin:"http://www.linkedin.com/in/laaibah-khan14", program:"3rd year, Mechanical Engineering + PEY, Minor in Bioengineering" },
      {role: "Advisor", name: "Diba Alam", quote:"A Life Goal: Travel to every country!", photo:"", linkedin:"https://www.linkedin.com/in/diba-alam", program:"4th year, Engineering Science, Major in Machine Intelligence, Minor in Robotics & Mechatronics, Engineering Business Certificate"},
    ],
 },
  {
    name: "Professional Development",
    color: "#0f766e",
    light: "rgba(15,118,110,0.08)",
    border: "rgba(15,118,110,0.22)",
    vps: [{role: "VP PD", name: "Samantha Hossain", quote: "My Favorite Hobby: being active and playing sports!", photo:"", linkedin:"https://www.linkedin.com/in/samantha-hossain-uoft", program: "4th year, Engineering Science - Electrical and Computer Engineering"}, 
          {role: "VP PD", name: "Cindy Stover", quote: "A Life Goal: opening up a cute cafe", photo:"", linkedin:"https://www.linkedin.com/in/cindy-stover-304370286/", program: "3rd year, Psychology Major, Physiology & Chemistry Minor"}],
    members: [
      
      {role: "Operations Director", name: "Clare Son", quote: "At the Top of My Bucket List: go to a Bruno Mars concert", photo:"clare_son.jpg", linkedin:"missing", program: "2nd year, Immunology & Neuroscience Majors, Physiology Minor"},
      {role: "Operations Director", name: "Nuzaira Habib", quote: "My Dream Job as a Kid: A doctor by day and a dancer by night", photo:"nuzaira_habib.jpg", linkedin:"missing", program: "4th Year, Engineering Science majoring in Robotics"},
      {role: "Operations Director", name: "Saanvi Tyagi", quote: "At the Top of My Bucket List: seeing the Northern Lights!!", photo:"", linkedin:"http://www.linkedin.com/in/saanvityagi", program: "2nd year, Computer Science Specialist, Statistics Minor"},
      {role: "Operations Director", name: "Kaylin Slewka", quote: "My Dream Job as a Kid: Veterinarian", photo:"kaylin_slewka.jpg", program: "3rd year, Astronomy & Physics Specialist"},
      {role: "Operations Director", name: "Radia Salam", quote: "My Dream Job as a Kid: a sports presented/broadcast anchor", photo:"radia_salam.jpg", linkedin:"http://www.linkedin.com/in/radia-salam-53b103216", program: "4th year, Statistics and Global Health double Majors"},
      {role: "Professional Mentorship Director", name: "Ana Luiza Queres Larieu", quote: "A Fun Fact About Me: I’ve got 14 stitches in my nose from a hide and seek game!", photo:"", linkedin:"http://www.linkedin.com/in/ana-luiza-larieu-95a6b6231", program: "3rd year, Biomedical Systems Engineering, Robotics and Mechatronics Minor"},
      {role: "Professional Mentorship Director", name: "Yashvi Shah", quote: "At the Top of My Bucket List: To see the floating lanterns in Thailand", photo:"yashvi_shah.jpg", linkedin:"https://www.linkedin.com/in/yashvishah15/", program: "2nd year, Computer Engineering"},
      {role: "Professional Mentorship Director", name: "Kimaya Mahajan", quote: "A Fun Fact About Me: I've got two blackbelts!", photo:"kimaya_mahajan.jpg", linkedin:"http://www.linkedin.com/in/kimaya-mahajan-9462b5313", program: "2nd year, Computer Engineering"},
    ],
 },
  {
    name: "Marketing",
    color: "#be185d",
    light: "rgba(190,24,93,0.08)",
    border: "rgba(190,24,93,0.22)",
    vps: [{role: "VP Marketing", name: "Saara Luthra", quote: "My Dream Job as a Kid: Architect", photo:"", linkedin:"https://www.linkedin.com/in/saara-luthra", program: "Co-op, Computer Science and Statistic Majors"}, 
          {role: "VP Marketing", name: "Sophia Keng", quote: "My Current Dream Job: design and build unique luxury homes!", photo:"sophia_keng.jpg", linkedin:"https://www.linkedin.com/in/sophiakeng", program: "3rd year, Mineral Engineering"}],
    members: [
      {role: "Stories of WISE Editor", name: "Annabel Liu", quote: "A Fun Fact About Me: I used to be a competitive dancer and my favourite styles are contemporary and ballet!", photo:"annabel_liu.jpg", linkedin:"https://www.linkedin.com/in/annabelliu05/", program: "PEY, Computer Engineering"},
      {role: "Internal Marketing Director", name: "Zara Munir", quote: "My Dream Job as a Kid: My dream job as a kid was to be a chef!", photo:"", linkedin:"https://www.linkedin.com/in/zara-munir-b16627354/", program: "3rd yea, Health & Disease Specialist, Immunology Minor"},
      {role: "Social Media Director", name: "Emma Zhai", quote: "My Dream Job as a Kid: My dream job as a kid was to be a judge!", photo:"emma_zhai.jpg", linkedin:"https://www.linkedin.com/in/emma-zhai-67a5b1349/", program: "3rd year, Neuroscience Major, Immunology and Chemistry Minors."},
      {role: "Stories of WISE Editor", name: "Safira Putri Erlangga", quote: "My Dream Job as a Kid: I wanted to a be a doctor or chef, but doing neither now:-)", photo:"", linkedin:"http://www.linkedin.com/in/safiraputrierlangga", program: "2nd year, Biotechnology Specialist, Chemistry & Business, Science and Entrepreneurship Minors"},
      {role: "WebDev Director", name: "Amee Bhavsar", quote: "At the Top of My Bucket List: I want to hike in South America and see a live volcano!!", photo:"amee_bhavsar.jpeg", linkedin:"https://www.linkedin.com/in/ameebhavsar/", program: "PEY, Computer Engineering, AI Minor"},
      {role: "Graphic Designer", name: "Dema Ganbat", quote: "My Current Dream Job: Something related to data science, an astronomer, i like doing graffiti style art, designing drawing, making my dreams come true, drawing or going to gym with my bf, wanna go to switzerland, be out of your comfort zone", photo:"dema_ganbat.jpg", program: "2nd year, Physics and Astronomy majors, Statistics minor"},
      {role: "Stories of WISE Editor", name: "Jennifer Chiou", quote: "My Favorite Hobby: I love creative writing and gymnastics!", photo:"", linkedin:"https://www.linkedin.com/in/jennifer-r-chiou/", program: "4th year, Computer Science Specialist, Writing & Rhetoric Minor"},
      {role: "Social Media Director", name: "Isabelle Suski", quote: "My Current Dream Job: pediatric anesthesiologist", photo:"", program: "3rd year, Human Biology Major, Immunology and Psychology Minors"},
      {role: "Newsletter and Relations Director", name: "Rowan Parkinson", quote: "A Skill I Have: I’ve been playing drums for 4 years", photo:"rowan_parkinson.jpg", linkedin:"https://www.linkedin.com/in/rowan-terra-parkinson/", program: "2nd year, Computer Science Specialist, Digital Humanities Minor"},
      {role: "Graphic Design Director", name: "Alsu Ovezova", quote: "At the Top of My Bucket List: At the top of my bucket list is hiking through Central Asia and getting to experience its incredible mountains and landscapes! 🏔️", photo:"", linkedin:"missing", program: "1st year, Kinesiology"},
      {role: "Social Media Director", name: "Xinran Xu", quote: "My Dream Job as a Kid: Becoming a vet and have a coffee/flower shop as a side hustle!", photo:"xinran_xu.jpg", linkedin:"missing", program: "2nd year, Chemical Engineering"},
      {role: "Photographer", name: "Victoria Bloda Sosa", quote: "At the Top of My Bucket List: Sky diving", photo:"", program: "3rd year, Political Science & Sociology"},
      {role: "PD Marketing Director", name: "Kae Lin Whiton", quote: "A Fun Fact About Me: I am a black belt in karate", photo:"kae_lin_whiton.jpg", linkedin:"https://www.linkedin.com/in/kae-lin-whiton-372573278/", program: "2nd year, Work and Organizational Management, minor in Digital Humanities and Book and Media Studies"},
      {role: "Graphic Designer", name: "Ariel Fischer", quote: "A Skill I Have: I love to sew!", photo:"", linkedin:"https://www.linkedin.com/in/ariel-fischer-/", program: "3rd year, Engineering Science (AERO)"},
      {role: "Marketing Advisor", name: "Maria Vetrici", quote: "My Favorite Hobby: biking!!!", photo:"", linkedin:"https://www.linkedin.com/in/mariavetrici/", program: "4th year, Civil Engineering"},
      {role: "Social Media Director", name: "Tessa Deki", quote: "A Fun Fact About Me: I used to live in Tokyo!", photo:"tessa_deki.jpg", linkedin:"missing", program: "3rd Year, Economics with Data Analytics & Psychology Majors"},
    ],
 },
  {
    name: "Outreach",
    color: "#b45309",
    light: "rgba(180,83,9,0.08)",
    border: "rgba(180,83,9,0.22)",
    vps: [{role: "VP Outreach", name: "Lindsay Tu", quote: "Someone I Look Up To: Rachel Bhatia", photo:"", linkedin:"https://www.linkedin.com/in/lindsay-tu-352b84300", program: "3rd year, Engineering Science (BME)"}, 
          {role: "VP Outreach", name: "Amanda Mongillo", quote: "At the Top of My Bucket List: Watch a rocket launch in person", photo:"", linkedin:"https://www.linkedin.com/in/amanda-mongillo-/", program: "3rd year, Aerospace Engineering"}],
    members: [
      {role: "HS Events Director", name: "Vanessa Lee", quote: "My Favourite Hobby: hiking 🏔️", photo:"", linkedin:"missing", program: "2nd Year, Mechanical Engineering"},
      {role: "HS Mentorship Director", name: "Sonya Singh", quote: "My Favourite Hobby: Rollerblading", photo:"sonya_singh.jpg", program: "4th year, Mechanical Engineering"},
      {role: "HS Events Director", name: "Monica Pacaba", quote: "A Fun Fact About Me: I LOVE music and love to play the piano and guitar in my spare time!", photo:"monica_pacaba.jpg", linkedin:"http://www.linkedin.com/in/monicapacaba", program: "1st year, Nursing"},
      {role: "HS Events Director", name: "Ritika (Ritz) Saha", quote: "My Favourite Hobby: Tennis🎾", photo:"ritika_saha.jpg", linkedin:"http://linkedin.com/in/ritika-saha-2b4b52280", program: "3rd year, Double Majoring in Stats and Math and minor in economics"},
      {role: "Special Events Director", name: "Mariam Amir", quote: "A Fun Fact About Me: I’ve taken 22 flights in the past 2 years (not counting connections)", photo:"mariam_amir.jpg", linkedin:"https://www.linkedin.com/in/mariam-amir-1180b9358", program: "3rd year, Human Biology Major, Psychology and Aging & Society Minors"},
      {role: "HS Mentorship Director", name: "Lauren McGuire", quote: "My Favourite Hobby: knitting", photo:"lauren_mcguire.jpg", linkedin:"https://www.linkedin.com/in/lauren-mcguire-969888298/", program: "2nd year, Immunology Specialist"},
      {role: "Special Events Director", name: "Abhisha Sakthievel", quote: "My Current Dream Job: Women’s Mental Health Researcher", photo:"abhisha_sakthievel.jpg", linkedin:"http://www.linkedin.com/in/abhisha-sakthievel", program: "2nd year, Health & Disease, Psychology Majors, Physiology Minor"},
      {role: "HS Mentorship Director", name: "Riana Khasanova", quote: "A Fun Fact About Me: I’m doing an Ironman 70.3 in May", photo:"", linkedin:"https://www.linkedin.com/feed/", program: "2nd year, EngSci"},
      {role: "HS Events Director", name: "Stephanie Florescu", quote: "My Favourite Hobby: Baking!!!", photo:"stephanie_florescu.jpg", program: "2nd year, Computer Engineering"},
      {role: "Special Events Director", name: "Prerana Manoj", quote: "missing", photo:"", program: "missing"},
      {role: "First Year Representative - HS Events", name: "Helena Gu", quote: "A Life Goal: A Life Goals try every boba shop in the world <3", photo:"", linkedin:"https://www.linkedin.com/in/hgyueyue/", program: "1st year, Electrical Engineering"},
    ],
 },
  {
    name: "Conference",
    color: "#89d0d7",
    light: "rgba(180,83,9,0.08)",
    border: "rgba(9, 180, 177, 0.22)",
    vps: [{role: "Conference Co-chair", name: "Jenny Yang", quote: "My Favourite Hobby: Climbing!", photo:"", linkedin:"https://www.linkedin.com/in/jenny-yang-5a52202a8/", program: "4th year, Computer Science & Biology Majors, Statistics Minor"}, 
          {role: "Conference Co-chair", name: "Elena Ding", quote: "At the Top of My Bucket List: Learning to skydive!", photo:"", linkedin:"https://www.linkedin.com/in/elena-ding-614831210/", program: "3rd year, Computer Science & Biology Majors"}],
    members: [
      {role: "Conference Operations Director", name: "Angela Zheng", quote: "My Favourite Hobby: drinking bubble tea!", photo:"angela_zheng.jpg", linkedin:"https://www.linkedin.com/in/angela-y-zheng", program: "2nd year, Computer Science Specialist, Physics Major, & Mathematics Minor"},
      {role: "Conference Operations Director", name: "Rebecca Lee", quote: "My Favourite Hobby: Spending time with friends!", photo:"rebecca_lee.jpg", linkedin:"http://www.linkedin.com/in/rebecca-lee-833932306", program: "2nd year, Industrial Engineering + PEY"},
      {role: "Conference Operations Director", name: "Nadira Barnes", quote: "My Dream Job as a Kid: Ballerina Chef", photo:"nadira_barnes.jpg", linkedin:"https://www.linkedin.com/in/nadira-barnes?utm_source=share_via&utm_content=profile&utm_medium=member_ios", program: "3rd year, Mechanical Engineering"},
      {role: "Conference Panels Director", name: "Alina Zheng", quote: "My Dream Job as a Kid: To travel the world and chart constellations", photo:"alina_zheng.jpg", linkedin:"http://www.linkedin.com/in/alina-zheng-b6204031a", program: "2nd year, Engineering Science"},
      {role: "Conference Panels Director", name: "Avani Yadav", quote: "My Dream Job as a Kid: astronaut", photo:"avani_yadav.jpg", linkedin:"missing", program: "4th year, Electrical & Computer Engineering"},
      {role: "Conference Panels Director", name: "Leya Susan Oommen", quote: "A Life Goal: work at a wildlife sanctuary", photo:"", linkedin:"https://www.linkedin.com/in/leya-oommen/", program: "PEY, Engineering Science BME"},
      {role: "Conference Outreach Director", name: "Eloise Lukmito", quote: "My Dream Job as a Kid: makeup salesperson", photo:"eloise_lukmito.jpg", linkedin:"https://www.linkedin.com/in/eloiselukmito", program: "2nd year, Molecular Genetics Specialist, Immunology Minor"},
      {role: "Conference Workshops Director", name: "Ana Diaz Garcia", quote: "My Dream Job as a Kid: to be an astronaut", photo:"", linkedin:"https://www.linkedin.com/in/ana-victoria-diaz-garcia/", program: "2nd year, Engineering Science"},
      {role: "Conference Workshops Director", name: "Clara Han", quote: "My Dream Job as a Kid: Hotel bed tester", photo:"", linkedin:"http://www.linkedin.com/in/clara-h-han", program: "4th year, Cell and Molecular Biology & Immunology Majors"},
      {role: "Conference Competitions Director", name: "Anya Mathur", quote:"missing"},
      {role: "Conference Competitions Director", name: "Nicole Dudar", quote: "My advice to incoming WISE members is[missing]", photo:"", linkedin:"http://www.linkedin.com/in/nicole-dudar", program: "3rd Year, Mechanical Engineering with minors in Mechatronics & Robotics and Engineering Business"},
      {role: "Conference Marketing Director", name: "Catherine Hou", quote: "My Dream Job as a Kid: An Astronaut!", photo:"catherine_hou.jpg", linkedin:"https://www.linkedin.com/in/catherine-hou-63141a398/", program: "2nd year, Mechanical Engineering"},
      {role: "Conference Marketing Director", name: "Sabaa Rashid", quote: "My Favourite Hobby: video calling with my cats back home!", photo:"sabaa_rashid.jpg", linkedin:"https://www.linkedin.com/in/sabaarashid/", program: "2nd year, Engineering Science, Intended Robotics Specialisation"},
      {role: "Conference Marketing Director", name: "Sylvia Xu", quote: "At the Top of My Bucket List: Going bungee jumping!", photo:"", linkedin:"http://www.linkedin.com/in/sylviax28/", program: "3rd year, Computer Science Major"},
      {role: "Conference Webmaster", name: "Hiya Thakkar", quote: "My Favourite Hobby: cafe hopping", photo:"hiya_thakkar.jpg", linkedin:"missing", program: "Co-op, Computer Science, Statistics"},
      {role: "First Year Representative - Conference Workshops", name: "Apple Yutong Wang", quote: "A Life Goal: To travel to most countries, try their food, and meet all types of people", photo:"", linkedin:"https://www.linkedin.com/in/yutong-wang-57b986319/", program: "1st year, Engineering science"},
  ],
 },
];

// ==== SPONSORS - About Our Sponsors page =====

// Sponsor List
export const SPONSORS: Sponsor[] = [
  {letter: "A", name: "Arcadis", color: "#2768c2", bg: "#d6f0e0", tier: "Gold", x: "5%", y: "8%", delay: 0},
  {letter: "AR", name: "Amazon Robotics", color: "#d8e653", bg: "#d6e8ff", tier: "Gold", x: "44%", y: "4%", delay: 0.6},
  {letter: "N", name: "Nvidia", color: "#81e81a", bg: "#e3efff", tier: "Silver", x: "78%", y: "10%", delay: 1.1},
  {letter: "O", name: "OPG", color: "#3c6e1f", bg: "#e3f2d5", tier: "Silver", x: "12%", y: "48%", delay: 0.3},
  {letter: "I", name: "Intuit", color: "#1f70c1", bg: "#deeeff", tier: "Silver", x: "55%", y: "42%", delay: 0.9},
  {letter: "A", name: "Autodesk", color: "#4a7c24", bg: "#eaf4d9", tier: "Bronze", x: "82%", y: "46%", delay: 0.4},
  {letter: "X", name: "Xylem", color: "#b41c1c", bg: "#fde3e3", tier: "Bronze", x: "3%", y: "76%", delay: 1.4},
  {letter: "C", name: "Cohere", color: "#5b21b6", bg: "#ede9fe", tier: "Bronze", x: "38%", y: "78%", delay: 0.7},
  {letter: "A", name: "AMD", color: "#8a5000", bg: "#fff0d4", tier: "Bronze", x: "72%", y: "76%", delay: 1.2},
];

// Sponsor Statistics 
export const SPONSOR_STATS = [
  {value: "15+", label: "Events Sponsored / Year"},
  {value: "500+", label: "Student Attendees"},
  {value: "20+", label: "Years of Community"},
  {value: "6", label: "Active Subteams"},
];


// ==== INITIATIVES - Initiatives page ====
export const INITIATIVE_DETAILS = [
  {
    id: "PD", icon: BookOpen, title: "Professional Development",
    photo: nvidiaPhoto, photoAlt: "WISE networking event",
    tagline: "Bridging academia and industry",
    description: "Our Professional Development initiative connects WISE members with leaders across tech, science, pharma, and engineering. Through hands-on panels, company tours, and skill-building sessions, members gain the confidence and connections they need to launch meaningful careers.",
    highlights: ["Industry speaker panels", "Company site visits", "Resume & interview workshops", "Networking nights"],
 },
  {
    id: "Mentor", icon: Users, title: "Industry Mentorship",
    photo: mentorshipPhoto, photoAlt: "WISE mentorship dinner",
    tagline: "Pairing students with professionals who get it",
    description: "We match undergraduate students one-on-one with experienced professionals from diverse STEM fields. Over the course of the year, pairs meet regularly to discuss career goals, navigate challenges, and build a relationship that often lasts well beyond graduation.",
    highlights: ["1-on-1 mentor matching", "Career goal mapping", "Industry-wide reach", "Year-long commitment"],
 },
  {
    id: "HS", icon: School, title: "High School Outreach",
    photo: hsMentor, photoAlt: "WISE high school workshop",
    tagline: "Inspiring the next generation",
    description: "WISE reaches into high schools across the GTA to introduce young women to STEM through hands-on workshops, mentorship panels, and campus visits. We want every student to see themselves as a future engineer or scientist before they ever apply to university.",
    highlights: ["GTA school workshops", "Campus visit days", "Peer mentorship panels", "STEM activity kits"],
 },
  {
    id: "CO", icon: Compass, title: "Community Outreach",
    photo:  socialPhoto, photoAlt: "WISE community event",
    tagline: "Advancing equity across the GTA",
    description: "Beyond campus, WISE partners with organizations and communities across the Greater Toronto Area to advance gender equity in STEM. From sponsoring local competitions to collaborating with nonprofits, we believe our impact should be felt city-wide.",
    highlights: ["Community partnerships", "Local STEM competitions", "Nonprofit collaborations", "Equity-focused events"],
 },
];

// ==== CONFERENCE - Conference page ====

// Scrolloing images group
export const CONFERENCE_GALLERY = [conf0, conf1, conf2, conf3, conf4];


export const OPPORTUNITY_CARDS = [
  {title: "Become a Member", desc: "Open to all UofT students.", cta: "Join Now"},
  {title: "Executive Team", desc: "The 2026-27 recruitment has completed. General member applications are open all year round!"},
];

// footer social links (shown on every page)
export const SOCIALS = [
  {name: "Instagram", url: "https://www.instagram.com/wiseuoft/"},
  {name: "LinkedIn", url: "https://www.linkedin.com/company/women-in-science-and-engineering-university-of-toronto-chapter/"},
  {name: "TikTok", url: "https://www.tiktok.com/@wiseuoft/"},
];
