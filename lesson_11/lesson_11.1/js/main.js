const tbody = document.getElementById("tbody");
let rows = "";

for (let i = 1; i <= 10; i++) {
  let row = `<tr><th scope="row">${i}</th>`;
  for (let j = 1; j <= 10; j++) {
    row += `<td>${i * j}</td>`;
  }
  row += `</tr>`;
  rows += row;
}

tbody.innerHTML = rows;
