const grid = document.getElementById('grid');
const sendBtn = document.getElementById('sendBtn');
const reviewBtn = document.getElementById('reviewBtn');
const hint = document.getElementById('hint');
const out = document.getElementById('out');

const items = [
  "Beach","Beauty Salon","Grocery Store","Airport","Garage","Bedroom",
  "Camping","Kitchen","Park","Classroom","Country Fair","Diner",
  "Gas Station","Living Room","Drive-In Theater","Lake","School Bus","Drive-In Diner",
  "Record Store","Town Square","Train Station","Bowling Alley","Street Market","Dance Hall",
  "Toy Store","Tailor Shop","Route 66","Christmas","Birthday Party","Post Office",
  "TV Studio","Thanksgiving Day","Vacation","Ice Cream Truck","Roller Rink","Fourth of July"
];

items.forEach((t,i)=>{
  const l=document.createElement('label');
  l.className='cell';
  l.innerHTML=`<input type="checkbox" value="${t}"><span><strong>${i+1}.</strong> ${t}</span>`;
  l.querySelector('input').addEventListener('change',update);
  grid.appendChild(l);
});

function update(){
  const c=document.querySelectorAll('input[type="checkbox"]:checked').length;
  sendBtn.disabled = c!==5;
  hint.textContent = c<5 ? `Seleziona esattamente 5 voci (ne mancano ${5-c}).`
    : c===5 ? "Perfetto! Ora puoi premere INVIA."
    : `Hai selezionato ${c} voci: devono essere esattamente 5.`;
}

sendBtn.addEventListener('click',()=>{
  if(sendBtn.disabled) return;
  const v=[...document.querySelectorAll('input[type="checkbox"]:checked')].map(x=>x.value);
  out.textContent=`Hai selezionato: ${v.join(', ')}`;
});

reviewBtn.addEventListener('click',()=>{
  out.textContent="Grazie! (qui inseriamo il link della recensione)";
});

update();
