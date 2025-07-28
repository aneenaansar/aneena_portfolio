// Simple fade-in animation on load
window.addEventListener('load', () => {
    document.querySelector('.hero').style.opacity = 1;
  });
  

// work page script 

  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
  
      const category = btn.getAttribute('data-filter');
      workItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  