(function(){
var b=document.getElementById('burger'),l=document.getElementById('links');
if(b&&l){b.addEventListener('click',function(){l.classList.toggle('open')});}
function get(){try{return localStorage.getItem('lang')||'en'}catch(e){return 'en'}}
function apply(g){
document.documentElement.lang=(g==='my')?'my':'en';
document.querySelectorAll('[data-en]').forEach(function(e){e.textContent=e.getAttribute('data-'+g)});
document.querySelectorAll('[data-l]').forEach(function(x){var on=x.getAttribute('data-l')===g;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});
try{localStorage.setItem('lang',g)}catch(e){}
}
document.querySelectorAll('[data-l]').forEach(function(x){x.addEventListener('click',function(){apply(x.getAttribute('data-l'))})});
apply(get());
})();
