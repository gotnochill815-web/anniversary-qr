// hearts.js — lightweight heart spawner
(function(){
  const container = document.getElementById('hearts-container');
  if(!container) return;

  function rand(min,max){ return Math.random()*(max-min)+min; }

  function spawnHeart(){
    const el = document.createElement('div');
    el.className = 'heart';

    const size = rand(18,36);
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.left = rand(6,94) + '%';
    el.style.top = (100 + rand(0,10)) + '%';

    const dur = rand(6,11);
    el.style.animation = `heartFloat ${dur}s linear forwards`;
    // occasional gentle scale pulse for variety
    if(Math.random() > 0.75){
      el.style.transition = `transform ${rand(1.5,3)}s ease-in-out`;
    }

    container.appendChild(el);

    setTimeout(()=> {
      if(el && el.parentNode) el.parentNode.removeChild(el);
    }, (dur*1000) + 200);
  }

  // spawn slowly so it's romantic not chaotic
  const timer = setInterval(()=> {
    const count = Math.random() > 0.85 ? 2 : 1;
    for(let i=0;i<count;i++) setTimeout(spawnHeart, Math.random()*350);
  }, 700);

  // optional small bursts
  const burst = setInterval(()=> {
    for(let i=0;i<5;i++) setTimeout(spawnHeart, i*140);
  }, 9000);

  window.addEventListener('beforeunload', ()=>{ clearInterval(timer); clearInterval(burst); });
})();
