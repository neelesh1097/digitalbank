document.addEventListener('DOMContentLoaded', function(){
  var navBar = document.querySelector('.navbar');
  var toggle = document.querySelector('.menu-toggle');
  if(!toggle || !navBar){ return; }

  var img = toggle.querySelector('img');
  var isOpen = false;

  function openMenu(){
    navBar.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    if(img){ img.src = './images/icon-close.svg'; img.alt = 'Close menu'; }
    isOpen = true;
  }

  function closeMenu(){
    navBar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if(img){ img.src = './images/icon-hamburger.svg'; img.alt = 'Open menu'; }
    isOpen = false;
  }

  toggle.addEventListener('click', function(){
    if(isOpen){ closeMenu(); } else { openMenu(); }
  });

  // Close on escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && isOpen){ closeMenu(); }
  });
});

