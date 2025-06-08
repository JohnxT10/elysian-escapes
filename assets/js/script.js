// Load review data
fetch('assets/js/reviews.json')
  .then(response => response.json())
  .then(testimonials => {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    container.innerHTML = testimonials.map((t, i) => `
      <div class="carousel-item${i === 0 ? ' active' : ''}">
        <div class="testimonial text-center">
          <img src="${t.image}" alt="Profile Picture of ${t.name}" class="rounded-circle mb-3 testimonial-image">
                    <div class="mb-2" style="color: #D4AF37; font-size: 1.2em;">${t.rating || ''}</div>
          <p>"${t.text}"</p>
          <p>- ${t.name}</p>
        </div>
      </div>
    `).join('');
  });

  // ===== NAVBAR COLLAPSE ON IN-PAGE LINK =====

    document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      // Only handle in-page anchors (href starts with #)
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
          document.querySelector('.navbar-collapse').classList.remove('show');
        }
      }
    });
  });