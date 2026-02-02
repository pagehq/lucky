const grid = document.getElementById('grid');
const out = document.getElementById('out');
const sendBtn = document.getElementById('sendBtn');

// crea 36 checkbox: TEST1..TEST36
for (let i = 1; i <= 36; i++) {
  const label = document.createElement('label');
  label.className = 'cell';

  const cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.name = 'test';
  cb.value = `TEST${i}`;
  cb.id = `test_${i}`;

  const text = document.createElement('span');
  text.textContent = `TEST${i}`;

  label.appendChild(cb);
  label.appendChild(text);
  grid.appendChild(label);
}

// click INVIA (placeholder)
sendBtn.addEventListener('click', () => {
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')]
    .map(x => x.value);

  out.textContent = checked.length
    ? `Hai selezionato: ${checked.join(', ')}`
    : 'Nessuna selezione.';
});
