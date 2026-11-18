(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const elements=[...document.querySelectorAll('.section-head,.cards > .card,.process article,.contact > div,.section > .eyebrow,.section > h2,.section > .cards,.section > .pill')];
  if(!elements.length)return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.1,rootMargin:'0px 0px -25px 0px'});
  elements.forEach(el=>{el.classList.add('reveal');const siblings=el.parentElement?.children;const index=siblings?Array.prototype.indexOf.call(siblings,el):0;el.style.setProperty('--reveal-delay',`${Math.min(index,3)*90}ms`);observer.observe(el)});
  document.documentElement.classList.add('motion-ready');
})();
