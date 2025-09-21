// Load stories dynamically
fetch('stories.json')
  .then(response => response.json())
  .then(stories => {
    const grid = document.getElementById('stories-grid');

    stories.forEach(story => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h2>${story.title}</h2>
        <p>${story.teaser}</p>
        <div class="tags">
          ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <button class="btn btn-primary" onclick="window.location.href='${story.page}'">Explore Story →</button>

      `;

      grid.appendChild(card);
    });
  });

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});
