import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Scube from "../Pages/Scube";
import Services from "../Pages/Services";
import WhyScube from "../Pages/WhyScube";
import TransformIcon from "@mui/icons-material/Transform";
import SchoolIcon from "@mui/icons-material/School";
import AdjustIcon from "@mui/icons-material/Adjust";
import BarChartIcon from "@mui/icons-material/BarChart";

export const pages = [
  <Scube />,
  <WhyScube />,
  <AboutUs />,
  <Services />,
  <Contact />,
];

export const displayPages = [
  "Scube",
  "Why Scube",
  "About Us",
  "Services",
  "Contact",
];

export const paths = ["/", "/why-scube", "/about-us", "/services", "/contact"];

export const SliderImages = ["/assets/2.png", "/assets/3.png", "/assets/4.png"];
export const SliderHeaders = [
  "One Size Does Not Fit All",
  "Private Tutoring",
  "SCube is Different",
];
export const SliderText = [
  "Students come from a variety of backgrounds, cultures, schools, and learning abilities, so we cannot think that one curriculum, or one pair of pants, can fit all.",
  "One-on-One (private) tutoring increases performance to around 98% in a standard classroom [Bloom,1984].",
  "Delivers Personalized teaching strategies to match each learner's learning style Merged FSLSM + Kolb's models (Scube Model)",
];

export const WhyScubeIcons = [
  <TransformIcon />,
  <SchoolIcon />,
  <AdjustIcon />,
  <BarChartIcon />,
];
export const WhyScubeHeaders = [
  "Shifting from Teaching to Learning",
  "Adaptive and Personalized learning",
  "Designed with Students at the Center",
  "Analytics and Academic Advising",
];
export const WhyScubeText = [
  "The focus is on supporting students during studying and Learning, no more memorization nor rote learning, but rather understanding and fun leaning",
  "No more private teachers.  The system plays the role of the private teacher and presents lessons customized and adapted differently for each student",
  "Learning is becoming fun.  No more tears, but only joy and fun",
  "Parents & Techers will have a close eye to the student's progress, while the system will offer auto academic advising",
];

export const performanceProgressbarTitles = [
  "Increased Efficacy",
  "Increased Efficiency",
  "Increased Engagement",
  "Reduced Cost",
];
export const performanceProgressbarValues = [30, 35, 80, 92];
export const performanceProgressbarColors = [
  "#fdc063",
  "#05c3cc",
  "#ff8b8b",
  "#ff904c",
];
