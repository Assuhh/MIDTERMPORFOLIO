const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

hamburger.addEventListener('click', toggleSidebar);

