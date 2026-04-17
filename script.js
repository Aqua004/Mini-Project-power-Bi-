// Simple smooth scroll
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#dashboard').scrollIntoView({
    behavior: 'smooth'
  });
});
