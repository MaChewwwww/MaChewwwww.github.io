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
      "First Year - 2nd Semester: 1.33 GWA - President's Lister"
    ],
    positions: [
      "BSIT 1-1: Public Relation Officer",
      "BSIT 2-1: Auditor",
      "CommITs: Backend Developer"
    ],
    achievements: [
      "Iskolar ni Gob (Rizal) - Nina Ynares"
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