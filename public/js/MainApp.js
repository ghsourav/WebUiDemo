$(document).ready(function () {
  $('.sidenav').sidenav();
  ScrollReveal().reveal('.brown-text',{delay:400});

});


window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
sr.reveal('.animate-bottom-1400', {
  origin: 'bottom',
  duration: 1400,
  distance: '25rem',
  delay: 700
});

