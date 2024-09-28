const list = document.getElementById('list');
const nav = document.getElementById('navbar-nav');
const close = document.getElementById('close');

// Ganti Icon List ketika dikllik
changeIcon = (icon) => icon.classList.toggle('bi-x-lg');

// Jika Icon List diklik, maka tambahkan kelas .active di .navbar-nav
list.onclick = function()
{
  nav.classList.toggle('active');
};

document.addEventListener('click', function(e)
{
  if(!list.contains(e.target) && e.target.id !== 'navbar-nav')
  {
    nav.classList.remove('active');
    // Jika Navbar sudah tidak aktif, maka kembalikan Icon Close ke List
    close.classList.remove('bi-x-lg'); 
  };
});
