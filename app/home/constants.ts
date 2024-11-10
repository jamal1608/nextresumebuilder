import { deepClone } from "../lib/parse-resume-from-pdf/deep-clone";
import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "../lib/redux/resumeSlice";
import { Resume } from "../lib/redux/types";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Ahmed Jamal",
    summary:
      "Web Developer By GIAIC  building exceptional products that people appriciate",
    email: "test@gmail.com",
    phone: "123-456-7890",
    location: "Karachi,Pakistan",
    url: "linkedin.com/in/ahmedjamal",
  },
  workExperiences: [
    {
      company: "ABC Company",
      jobTitle: "Full-Stack Web Developer",
      date: "May 2023 - Present",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      company: "DEF Organization",
      jobTitle: "Full-Stack Web Developer",
      date: "May 2023 - Nov 2024",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      company: "XYZ Company",
      jobTitle: "Front-end Web Developer",
      date: "May 2022 - May 2023",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  educations: [
    {
      school: "XYZ University",
      degree: "Bachelor of Science",
      date: "Sep 2018 - Aug 2022",
      gpa: "8.5",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  projects: [
    {
      project: "Project1",
      date: "Fall 2022",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      project: "Project2",
      date: "Spring 2023",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },     
  ],
  skills :
     {
    featuredSkills: [
      { skill: "Java SCRIPT", rating: 2 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 2 },
      {skill: "NEXT Js 14", rating: 2},
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  custom: {
    descriptions: [],
  },
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
};
