function setActive(element) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item === element) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }