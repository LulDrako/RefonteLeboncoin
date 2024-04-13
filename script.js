document.addEventListener('DOMContentLoaded', (event) => {
  const options = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
       entry.target.style.display = 'block';
        } else {
        entry.target.style.opacity = 0;
        }});
  }, options);

  const topCategories = document.getElementById('top-categories');
  const postAd = document.getElementById('post-ad');

  observer.observe(topCategories);
  observer.observe(postAd);
});

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const items = document.querySelectorAll('.category-item');
  let currentIndex = 0;

  const scrollToItem = (index) => {
    items[index].scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    scrollToItem(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    scrollToItem(currentIndex);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');
  
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
        
    alert('Vous êtes connecté.');
    window.location.href = '/index.html';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const adForm = document.getElementById('ad-form');
  
  adForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert('Votre annonce a été déposée avec succès.');

    adForm.reset();
    window.location.href = '/index.html';
  });
});