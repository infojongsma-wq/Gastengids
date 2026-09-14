(function(){
  var KEY='gids-lang';
  function apply(l){
    document.body.setAttribute('data-lang',l);
    document.documentElement.setAttribute('lang',l);
    document.querySelectorAll('.lang [data-l]').forEach(function(b){
      b.setAttribute('aria-pressed', b.getAttribute('data-l')===l?'true':'false');
    });
  }
  var saved='nl';
  try{var v=localStorage.getItem(KEY); if(v==='nl'||v==='en') saved=v;}catch(e){}
  apply(saved);
  document.addEventListener('click',function(e){
    var b=e.target.closest('.lang [data-l]');
    if(b){var l=b.getAttribute('data-l'); apply(l); try{localStorage.setItem(KEY,l);}catch(e){} }
    var burg=e.target.closest('.burger');
    if(burg){document.getElementById('menu').classList.toggle('open');}
    var link=e.target.closest('#menu a');
    if(link){document.getElementById('menu').classList.remove('open');}
  });
  if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});}
})();