(()=>{
 document.querySelectorAll('[data-product-viewer]').forEach(viewer=>{
  const picture=viewer.querySelector('.experience-image');
  const title=viewer.querySelector('[data-view-title]');
  const description=viewer.querySelector('[data-view-description]');
  const counter=viewer.querySelector('[data-view-counter]');
  const buttons=[...viewer.querySelectorAll('[data-view-index]')];
  let transitionTimer;
  buttons.forEach((button,index)=>button.addEventListener('click',()=>{
   const update=()=>{picture.src=button.dataset.image;picture.alt=button.dataset.alt;title.textContent=button.dataset.title;description.textContent=button.dataset.description;counter.textContent=`0${index+1} / 0${buttons.length}`;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));picture.classList.remove('changing')};
   clearTimeout(transitionTimer);
   if(matchMedia('(prefers-reduced-motion: reduce)').matches){update();return}
   picture.classList.add('changing');transitionTimer=setTimeout(update,160);
  }));
 });
})();
