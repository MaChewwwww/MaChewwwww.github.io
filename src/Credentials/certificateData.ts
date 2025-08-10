export interface CertificateProvider {
  provider: string;
  type: 'certification' | 'seminar' | 'webinar';
  certificates: string[];
}

export const certificateData: CertificateProvider[] = [
  {
    provider: "Department of Information and Communications Technology",
    type: "certification",
    certificates: [
      "Programming for Beginners Using Python",
      "Programming for Intermediate Using Python",
      "Learn Basic Statistics with Python",
      "Analyze Data with Python",
      "Visualize Data with Python",
      "Build Python Web Apps with Flask",
      "Principles of Web Development",
      "Using HTML and CSS to Design a Website",
      "Basic Javascript for Web Development",
      "Developing a Static Website",
      "Digital Transformation 101",
      "Intermediate Level of Digital Transformation",
      "Advanced Level of Digital Transformation"
    ]
  },
  {
    provider: "FreeCodeCamp",
    type: "certification",
    certificates: [
      "Foundational C# with Microsoft"
    ]
  },
  {
    provider: "Core Research Foundation",
    type: "seminar",
    certificates: [
      "Are Schools Ready for the Cyberstorm? Building Resilience in a Globalized World"
    ]
  }
];
