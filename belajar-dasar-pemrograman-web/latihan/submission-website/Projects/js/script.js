const list = document.getElementById('list');
const navLinks = document.getElementById('navLinks');
const close = document.getElementById('close');

// Ganti Icon ketika tombol List dikllik
changeIcon = (icon) => icon.classList.toggle('bi-x-lg');

// Jika Icon List diklik, maka tambahkan kelas .active di .nav-links
list.onclick = function()
{
  navLinks.classList.toggle('active');
};

document.addEventListener('click', function(e)
{
  if(!list.contains(e.target) && e.target.id !== 'navLinks')
  {
    navLinks.classList.remove('active');
    // Jika Navbar sudah tidak aktif, maka kembalikan Icon Close ke List
    close.classList.remove('bi-x-lg'); 
  };
});



// => Theme
let darkMode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'active');
}

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', null);
}

if(darkMode === 'active') enableDarkMode();

themeSwitch.addEventListener('click', () => {
  darkMode = localStorage.getItem('dark-mode');
  darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
});
