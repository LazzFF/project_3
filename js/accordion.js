const accButtons = document.querySelectorAll('.accordion-button');
function toggleAccordion() {
    this.classList.toggle('active');
  
    const content = this.nextElementSibling;
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
  
  accButtons.forEach(button => button.addEventListener('click', toggleAccordion));