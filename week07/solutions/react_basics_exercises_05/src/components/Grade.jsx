function Grade({ gpa }) {
  const getLetterGrade = (gpa) => {
    if (gpa >= 97 && gpa <= 100) return 'A+';
    if (gpa >= 93 && gpa <= 96) return 'A';
    if (gpa >= 90 && gpa <= 92) return 'A-';
    if (gpa >= 87 && gpa <= 89) return 'B+';
    if (gpa >= 83 && gpa <= 86) return 'B';
    if (gpa >= 80 && gpa <= 82) return 'B-';
    if (gpa >= 77 && gpa <= 79) return 'C+';
    if (gpa >= 73 && gpa <= 76) return 'C';
    if (gpa >= 70 && gpa <= 72) return 'C-';
    if (gpa >= 67 && gpa <= 69) return 'D+';
    if (gpa >= 63 && gpa <= 66) return 'D';
    if (gpa >= 60 && gpa <= 62) return 'D-';
    if (gpa >= 0 && gpa <= 59) return 'F';
    return 'Invalid GPA';
  };

  return <span>{getLetterGrade(gpa)}</span>;
}

export default Grade;
