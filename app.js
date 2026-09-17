const nameInput = document.querySelector('#nameInput');
const name = document.querySelector('#userName');
const setupCard = document.querySelector('#setupCard');
const storedName = localStorage.getItem('rahaf-user-name');
if (storedName) { name.textContent = storedName; nameInput.value = storedName; setupCard.classList.add('hidden'); }
document.querySelector('#saveName').addEventListener('click', () => {
  const value = nameInput.value.trim();
  if (!value) return nameInput.focus();
  name.textContent = value; localStorage.setItem('rahaf-user-name', value); setupCard.classList.add('hidden');
});
document.querySelector('#closeSetup').addEventListener('click', () => setupCard.classList.add('hidden'));
document.querySelectorAll('.prayer-strip button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.prayer-strip .active').classList.remove('active'); button.classList.add('active');
  document.querySelector('#nextPrayer').textContent = `صلاة ${button.querySelector('span').textContent}`;
}));
