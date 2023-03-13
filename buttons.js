const container = document.getElementById('container');

function createButtons(numButtons) {
  // Bereken het aantal rijen en kolommen
  const numRows = Math.ceil(numButtons / 5);
  const numCols = 5;
  
  // Maak de HTML-string voor de buttons
  let html = '';
  for (let i = 0; i < numRows; i++) {
    html += '<div class="row">';
    for (let j = 0; j < numCols; j++) {
      const buttonIndex = i * numCols + j + 1;
      html += `<button class="button" id="button-${buttonIndex}">${buttonIndex}</button>`;
    }
    html += '</div>';
  }
  
  // Voeg de HTML toe aan de container
  container.innerHTML = html;
  
  // Voeg event listeners toe aan elke button
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('red');
    });
  });
}

// Maak 30 buttons
createButtons(30);
