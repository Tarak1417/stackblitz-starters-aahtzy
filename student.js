let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

function sortStudents(testCase1) {
  students.sort((a, b) => {
    //  Sort by total marks
    const totalMarksDiff = b.chemistry + b.biology - (a.chemistry + a.biology);
    if (totalMarksDiff !== 0) {
      return totalMarksDiff;
    }

    //  Sort by biology marks
    const biologyMarksDiff = b.biology - a.biology;
    if (biologyMarksDiff !== 0) {
      return biologyMarksDiff;
    }

    //  Sort by date of birth (assuming it's in DD-MM-YYYY format)
    const dobA = new Date(a.dob.split('-').reverse().join('-'));
    const dobB = new Date(b.dob.split('-').reverse().join('-'));
    return dobA - dobB;
  });
}

sortStudents(testCase1);
console.log(testCase1);
