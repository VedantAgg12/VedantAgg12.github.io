const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = "☀️ Light Mode";
}

// Theme toggle
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem('theme', 'light');
  }
});