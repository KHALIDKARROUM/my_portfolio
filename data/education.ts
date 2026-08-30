export const education = [
  {
    degree: "Master's-level studies",
    field: 'Data Science & Information Systems Security',
    institution: undefined as string | undefined,
    location: 'Morocco',
    startYear: undefined as string | undefined,
    endYear: undefined as string | undefined,
    coursework: [] as string[],
  },
] as const;

export const educationConfigNotes = {
  institution: 'Add your university name in data/education.ts.',
  dates: 'Add your start and expected graduation years in data/education.ts.',
  coursework: 'Add only relevant coursework you can discuss in an interview.',
} as const;
