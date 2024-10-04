// === Toggle Button ===
const list = document.getElementById('list');
const navLinks = document.getElementById('nav-links');
const close = document.getElementById('close');

changeIcon = (icon) => icon.classList.toggle('bi-x-lg');

list.onclick = function()
{
  navLinks.classList.toggle('active');
};

document.addEventListener('click', function(e)
{
  if(!list.contains(e.target) && e.target.id !== 'nav-links')
  {
    navLinks.classList.remove('active');
    close.classList.remove('bi-x-lg'); 
  };
});





// === Switch Theme ===
let darkMode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => 
{
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'active');
};

const disableDarkMode = () =>
{
  document.body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', null);
};

if(darkMode === 'active') enableDarkMode();

themeSwitch.addEventListener('click', () =>
{
  darkMode = localStorage.getItem('dark-mode');
  darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
});