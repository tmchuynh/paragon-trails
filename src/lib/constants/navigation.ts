import { BsQuestionCircle, BsQuestionCircleFill } from "react-icons/bs";
import { FaBuilding, FaRegBuilding } from "react-icons/fa";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { RiContactsFill, RiContactsLine } from "react-icons/ri";
import { Menu } from "../types/types";

export const about: Menu[] = [
  {
    title: "Testimonials",
    href: "/about_PCS/testimonials",
    description:
      "Hear directly from clients about the results we’ve helped them achieve.",
  },
  {
    title: "Our Origin Story",
    href: "/about_PCS/our_origin_story",
    description:
      "Stay informed with expert insights, industry trends, and company updates.",
  },
];

export const aboutFeaturedLinks: Menu[] = [
  {
    title: "About PCS",
    href: "/about_PCS",
    imageUrl:
      "https://img.freepik.com/premium-photo/back-view-female-coach-with-smartphone-pointing-financial-information-papers-hanging-blackboard-office_274679-8823.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
    description:
      "Discover our mission, values, and the story behind our brand.",
  },
  {
    title: "Read Our Blog",
    href: "/blogs",
    imageUrl:
      "https://img.freepik.com/free-photo/businessman-hands-typing-laptop-keyboard-real-time-4k-video-focus-hands-vertical-frame-freelancing-home-office-cup-tea-foreground-media-social-networks_166373-2124.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
    description:
      "Stay informed with expert insights, industry trends, and company updates",
  },
];

export const serviceCategories: Menu[] = [
  {
    title: "Overview",
    href: "/services",
    description:
      "Get a comprehensive look at the full range of services we provide.",
  },
  {
    title: "Our Amazing Past Projects",
    href: "/past_projects",
    description:
      "See how we’ve turned vision into reality through creative, impactful projects.",
  },
  {
    title: "How We Can Help You",
    href: "/services/how_we_can_help_you",
    description: "Our vision is to build more than just websites",
  },
  {
    title: "Web Development VS Web Design",
    href: "/services/how_we_can_help_you/web_development_vs_web_design",
    description:
      "Explore the differences between development and design—and why both matter.",
  },
];

export const serviceFeaturedLinks: Menu[] = [
  {
    title: "How to Represent Your Story",
    href: "/services/how_we_can_help_you/how_to_represent_your_story",
    imageUrl:
      "https://img.freepik.com/premium-photo/high-angle-view-hand-holding-text-paper_1048944-27370360.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
    description: "Empowering small businesses with enterprise-grade tools.",
  },
];

export const contact: Menu[] = [
  {
    title: "Get In Touch",
    href: "/get_in_touch",
    description:
      "Contact us directly with questions, feedback, or project ideas.",
  },
  {
    title: "FAQs",
    href: "/get_in_touch/frequently_asked_questions",
    description:
      "Browse frequently asked questions for quick answers and clarity.",
  },
  {
    title: "Become A Partner",
    href: "/get_in_touch/become_a_partner",
    description:
      "Learn about our partnership program and how you can get involved.",
  },
];

export const contactFeaturedLinks: Menu[] = [
  {
    title: "Let's Work Together",
    href: "/get_in_touch/lets_work_together",
    imageUrl:
      "https://img.freepik.com/premium-photo/close-up-business-team-works-sitting-office-desk-business-concept_160672-18279.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740",
    description:
      "Collaborate with us on building something impactful and meaningful.",
  },
];

export const dockNavigationMenu = [
  {
    name: "Home",
    href: "/",
    activeIcon: IoHome,
    inactiveIcon: IoHomeOutline,
  },
  {
    name: "Services",
    href: "/services",
    activeIcon: FaBuilding,
    inactiveIcon: FaRegBuilding,
  },
  {
    name: "FAQs",
    href: "/get_in_touch/frequently_asked_questions",
    activeIcon: BsQuestionCircleFill,
    inactiveIcon: BsQuestionCircle,
  },
  {
    name: "Contact",
    href: "/get_in_touch/lets_work_together",
    activeIcon: RiContactsFill,
    inactiveIcon: RiContactsLine,
  },
];

export const navbarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    dropdown: [
      {
        label: "Our Company",
        href: "/about",
      },
      {
        label: "Our Mission",
        href: "/about/mission",
      },
      {
        label: "Our Staff",
        href: "/about/our-staff",
      },
      {
        label: "Careers",
        href: "/about/careers",
      },
      {
        label: "Student Success Stories",
        href: "/about/student-success-stories",
      },
    ],
  },
  {
    label: "Overview",
    dropdown: [
      {
        label: "Why Learn How to Code?",
        href: "/overview",
      },
      {
        label: "Educational Philosophy",
        href: "/overview/philosophy",
      },
      {
        label: "In-Person vs Online",
        href: "/overview/modalities",
      },
      {
        label: "Technology Stack",
        href: "/overview/tech-stack",
      },
      {
        label: "Basic Technical Requirements",
        href: "/overview/technical-requirements",
      },
      {
        label: "Safety and Privacy",
        href: "/overview/safety-and-privacy",
      },
    ],
  },
  {
    label: "Programs",
    dropdown: [
      {
        label: "Overview",
        href: "/programs",
      },
      {
        label: "Curriculum Preview",
        href: "/programs/curriculum",
      },
      {
        label: "Course Roadmaps",
        href: "/programs/course-roadmaps",
      },
      {
        label: "Pricing Plans",
        href: "/programs/pricing-plans",
      },
      {
        label: "Summer Camps",
        href: "/programs/summer-camps",
      },
    ],
  },
  {
    label: "Course Catalog",
    href: "/programs/courses",
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Parent Guide",
        href: "/resources/parent-guide",
      },
      {
        label: "Student Guide",
        href: "/resources/student-guide",
      },
      {
        label: "Key Vocabulary Terms",
        href: "/resources/key-vocabulary-terms",
      },
      {
        label: "Parent Testimonials",
        href: "/resources/parent-testimonials",
      },
      {
        label: "Staff Testimonials",
        href: "/resources/staff-testimonials",
      },
      {
        label: "Student Testimonials",
        href: "/resources/student-testimonials",
      },
    ],
  },
  {
    label: "FAQs",
    href: "/frequently-asked-questions",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Enroll Now",
    href: "/enroll",
  },
];
