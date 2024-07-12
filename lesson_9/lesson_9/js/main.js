let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Petter", salary: 2000 },
      { name: "Alex", salary: 1000 },
    ],
    internals: [{ name: "Jack", salary: 1200 }],
  },
};

function calculateSalaries(department) {
  let totalSalaries = 0;

  if (Array.isArray(department)) {
    for (let i = 0; i < department.length; i++) {
      totalSalaries += department[i].salary;
    }
  } else {
    for (let key in department) {
      if (department.hasOwnProperty(key)) {
        totalSalaries += calculateSalaries(department[key]);
      }
    }
  }

  return totalSalaries;
}

let totalSalaries = calculateSalaries(company);
console.log(totalSalaries);
