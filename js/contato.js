// FAQ Accordion for Contact Page
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      // Close all
      faqItems.forEach(i => {
        i.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer').classList.remove('open');
        i.classList.remove('open');
      });

      // Open clicked (if it wasn't already open)
      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
        item.classList.add('open');
      }
    });
  });
});
