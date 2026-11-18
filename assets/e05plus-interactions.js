(()=>{
 const section=document.querySelector('[data-e05-focus]');if(!section)return;
 const image=section.querySelector('[data-e05-image]'),title=section.querySelector('[data-e05-title]'),description=section.querySelector('[data-e05-description]'),label=section.querySelector('[data-e05-label]');
 const buttons=[...section.querySelectorAll('[data-e05-tab]')];let timer;
 buttons.forEach(button=>button.addEventListener('click',()=>{
  clearTimeout(timer);buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  const update=()=>{image.src=button.dataset.image;image.alt=button.dataset.alt;title.textContent=button.dataset.title;description.textContent=button.dataset.copy;label.textContent=button.dataset.label;image.classList.remove('is-switching')};
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){update();return}image.classList.add('is-switching');timer=setTimeout(update,160);
 }));
})();
