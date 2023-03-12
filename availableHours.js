function findAvailableHours(person1Hours, person2Hours) {
  let availableHours = [];
  let i = 0;
  let j = 0;

  while (i < person1Hours.length && j < person2Hours.length) {
    const start1 = person1Hours[i][0];
    const end1 = person1Hours[i][1];
    const start2 = person2Hours[j][0];
    const end2 = person2Hours[j][1];

    // Check if there is an overlap between the two available hours
    if (end1 >= start2 && end2 >= start1) {
      const start = Math.max(start1, start2);
      const end = Math.min(end1, end2);
      availableHours.push([start, end]);
    }

    // Move to the next available hour for the person who has the earliest end time
    if (end1 < end2) {
      i++;
    } else {
      j++;
    }
  }

  return availableHours;
}

const person1Hours = [
  [9, 12],
  [14, 17],
  [20, 21],
];
const person2Hours = [
  [10, 11],
  [13, 15],
  [16, 19],
];
const availableHours = findAvailableHours(person1Hours, person2Hours);
console.log("availableHours: ", availableHours);
