import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Darius Simsonas",
  initials: "DS",
  location: "Vilnius, Lithuania",
  locationLink: "https://www.google.com/maps/place/Vilnius",
  about: "Senior Data Engineer specializing in modern cloud data platforms.",
  summary:
    "Senior data engineer with 7+ years of experience in SQL, Python, and Azure cloud technologies. Experienced in designing, developing, and maintaining enterprise-scale data warehouse and lakehouse solutions. Strong focus on performance, reliability, and modern data platforms.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8759354?&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Vilnius University",
      degree: "Bachelor's Degree in Information Management",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Baltic Amadeus",
      link: "",
      badges: [
        "Microsoft Fabric",
        "Azure Databricks",
        "SQL",
        "Spark",
        "Azure Cloud",
        "Data Factory",
        "Power BI",
      ],
      title: "Data Analyst -> Data Engineer -> Senior Data Engineer",
      start: "2019.12",
      end: null,
      description:
        "Worked across multiple retail and finance data platform projects, progressing from Data Analyst to Senior Data Engineer while delivering on-prem data warehouse, cloud data warehouse, and cloud lakehouse solutions.",
      highlights: [
        "Project #5, Cloud Data Lakehouse, Retail: migrated a legacy solution to Microsoft Fabric and implemented data warehouse best practices",
        "Project #4, Cloud Data Lakehouse, Retail: architected and optimized Azure Data Factory and Databricks pipelines, improving processing efficiency and storage design",
        "Project #3, Cloud Data Lakehouse, Finance: built resilient Azure Databricks solutions, used DLT to streamline ELT, and optimized complex SQL workloads",
        "Project #2, Cloud Data Warehouse, Retail: built a warehouse solution using Azure SQL Database, Azure Storage, and Azure Data Factory, including monitoring and Power BI reporting support",
        "Project #1, On-Prem Data Warehouse, Project and Sales, 2020.01-2021.12: migrated legacy BI solutions from Power Query to SSIS, applied dimensional modeling and incremental loads, unified Power BI reporting, and reduced load time from over 1 hour to 20 minutes",
      ],
    },
    {
      company: "Soltus",
      link: "",
      badges: ["SQL", "SSIS", "MS SQL Server", "SSAS", "SSRS", "Power BI"],
      title: "BI Developer",
      start: "2019.06",
      end: "2020.12",
      description:
        "Supported legacy BI solutions for more than four clients and built custom reports in Power BI.",
      highlights: [
        "Supported legacy BI solutions using SSIS and SSAS",
        "Built custom reports in Power BI",
      ],
    },
    {
      company: "Helso Lithuania",
      link: "",
      badges: ["SQL", "R", "MS SQL Server", "Power BI"],
      title: "Data Analyst",
      start: "2017.01",
      end: "2019.06",
      description:
        "Developed DWH solutions, BI dashboards, and analytical reporting for logistics, sales, and finance teams.",
      highlights: [
        "Developed DWH solutions and BI reports using Power BI",
        "Created ad hoc reports for logistics, sales, and finance teams",
        "Automated markdown reports delivered by email",
        "Built BI dashboards using Power BI and R Shiny web applications",
        "Implemented ML use cases including customer segmentation, market basket analysis, and time series forecasting",
      ],
    },
    {
      company: "Lietuvos Draudimas",
      link: "",
      badges: ["R", "Machine Learning", "NLP", "Excel"],
      title: "Junior Customer Insights Analyst",
      start: "2016",
      end: "2017",
      description:
        "Worked on NLP and machine learning use cases, including sentiment analysis, topic modeling, and automated free-text classification in Lithuanian.",
      highlights: [
        "Worked on natural language processing tasks including sentiment analysis and topic modeling",
        "Implemented automated free-text classification in Lithuanian using supervised machine learning",
        "Automated Excel reports using R",
      ],
    },
  ],
  skills: [
    "SQL",
    "Python",
    "Spark",
    "Azure Cloud",
    "Databricks",
    "Microsoft Fabric",
    "Data Architecture",
    "DevOps",
  ],
  certifications: [
    {
      name: "Microsoft Azure Solutions Architect Expert",
      url: "https://learn.microsoft.com/en-us/users/dariussimsonas-9644/credentials/2287d4b183ea2ce4",
      date: "2022",
    },
      {
      name: "Microsoft DevOps Engineer Expert",
      url: "https://learn.microsoft.com/en-us/users/dariussimsonas-9644/credentials/a240b7cade3dc68b",
      date: "2026",
    },
      {
      name: "Microsoft Fabric Data Engineer Associate",
      url: "https://learn.microsoft.com/en-us/users/dariussimsonas-9644/credentials/eed2090f175a7871",
      date: "2025",
    },
      {
      name: "Microsoft Azure Administrator Associate",
      url: "https://learn.microsoft.com/en-us/users/dariussimsonas-9644/credentials/e764d0e7ba35f1d0",
      date: "2022",
    },
      {
      name: "Databricks Developer for Apache Spark 3.0",
      url: "https://credentials.databricks.com/ac02c3a1-378a-456d-985b-7aa9474cbe33#acc.OZnXqcvM",
      date: "2022",
    },
      {
      name: "Microsoft Fabric Analytics Engineer Associate",
      url: "https://learn.microsoft.com/en-us/users/dariussimsonas-9644/credentials/d81c9f261a3baf93",
      date: "2024",
    },
      {
      name: "PCEP Python Programmer",
      url: "https://verify.openedg.org/?id=TYrz.qwnj.LSMn",
      date: "2025",
    },
  ],
} as const;
