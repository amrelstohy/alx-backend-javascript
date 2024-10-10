interface Student {
    firstName: string,
    lastName: string,
    age: Number,
    location: string
}

let s1 : Student = {
    firstName: 'a',
    lastName: 'b',
    age: 21,
    location: 'c'
}
let s2 : Student = {
    firstName: 'd',
    lastName: 'e',
    age: 33,
    location: 'f'
}

let arr : Student[] = [s1, s2]

// Use Vanilla JavaScript to render a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

arr.forEach((student) => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);