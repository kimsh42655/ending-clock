const nameidForm = document.querySelector('#name-id-form');
const nameInput = document.querySelector('#name-id-form input:nth-of-type(1)');
const idInput = document.querySelector('#name-id-form input:nth-of-type(2)');
const enterClock = document.querySelector('#enter-clock');
const enterspan = document.querySelector('#enter-clock span:first-child');
const enterbutton = document.querySelector('#enter-clock span:last-child');

const HIDDEN_CLASS = 'hidden';
const NAME_KEY = 'name';
const ID_KEY = 'id';

function submitted(event){
    event.preventDefault();
    nameidForm.classList.add(HIDDEN_CLASS);
    const name = nameInput.value;
    const id = idInput.value;
    localStorage.setItem(NAME_KEY,name);
    localStorage.setItem(ID_KEY,id);
    paintenterclock(name, id);
}

function paintenterclock(name, id){
    const startday = new Date(parseInt(`20${id}`),2,1);
    const current = new Date();
    const interval = current.getTime() - startday.getTime();
    const day = Math.floor(interval/(1000*60*60*24));
    enterspan.innerText = `${name}님, 입학한지 ${day}일 째!`
    enterClock.classList.remove(HIDDEN_CLASS);
    enterbutton.addEventListener('click', reset);
}

function reset(){
    enterClock.classList.add(HIDDEN_CLASS);
    nameidForm.classList.remove(HIDDEN_CLASS);
    localStorage.clear();
}

const savedName = localStorage.getItem(NAME_KEY);
const savedID = localStorage.getItem(ID_KEY);

if(savedName === null){
    nameidForm.classList.remove(HIDDEN_CLASS);
    nameidForm.addEventListener('submit', submitted);
} else {
    paintenterclock(savedName, savedID);
}