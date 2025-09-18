const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme
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
