function gradingStudents(grades) {
  const newGrades = [];
  grades.forEach(grade => {
    if (grade < 38) newGrades.push(grade);
    else {
      let pushFlag = false;
      for (let i = 1; i <= 2; i++) {
        if ((grade + i) % 5 == 0) {
          newGrades.push(grade + i);
          pushFlag = true;
          break;
        }
      }
      if (!pushFlag) newGrades.push(grade);
    }
  });
  return newGrades;
}