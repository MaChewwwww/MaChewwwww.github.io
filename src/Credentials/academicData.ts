export interface AcademicRecord {
  institution: string;
  period: string;
  details: string[];
  achievements?: string[];
  positions?: string[];
}

export const academicData: AcademicRecord[] = [
  {
    institution: "Polytechnic University of the Philippines",
    period: "2023 - Present",
    details: [
      "Second Year - 1st Semester: 1.57 GWA - Dean's Lister",
      "Second Year - 2nd Semester: 1.46 GWA - President's Lister",
      "First Year - 1st Semester: 1.29 GWA - President's Lister",
      "First Year - 2nd Semester: 1.33 GWA - President's Lister",
      "Rank 3 Among Overall BSIT First Year Students",
      "Iskolar ni Gob (Rizal) - Nina Ynares"
    ],
    positions: [
      "BSIT 1-1: Public Relation Officer",
      "BSIT 2-1: Auditor",
      "CommITs A.Y. 2024-2025: Backend Developer",
      "Google Developer Group: Web-Dev Department Member"
    ],
    achievements: [
      "ProtoHype Hackathon - 1st Place (IT Month 2025)",
    ]
  },
  {
    institution: "Valley High Academy - TVL ICT Strand",
    period: "2021 - 2023",
    details: [
      "Grade 12: 96 GWA - With High Honors",
      "Grade 11: 91 GWA - With Honors"
    ],
    achievements: [
      "Representative of VHA in Montalban Gender and Development Seminar",
      "2nd Place at Quiz Bee 2022",
      "2nd Place at Spelling Bee 2023"
    ]
  }
];