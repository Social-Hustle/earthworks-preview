(function(){
const map={
  '#category/mulch-pine':'collections/mulch-and-pine-straw/index.html',
  '#category/gravel-sand':'collections/gravel-and-decorative-stone/index.html',
  '#category/soil-blends':'collections/soil-and-sand/index.html',
  '#category/decorative-stone':'collections/gravel-and-decorative-stone/index.html',
  '#category/firewood':'collections/all/index.html',
  '#supplies':'collections/all/index.html',
  '#reviews':'pages/reviews/index.html',
  '#about':'pages/about-us/index.html',
  '#contact':'pages/contact-us/index.html',
  '#quote':'contact-us/index.html#contact-form',
  '#home?section=faq':'pages/faq/index.html'
};
document.addEventListener('click',e=>{
  const a=e.target.closest('a');
  if(!a)return;
  const h=a.getAttribute('href')||'';
  if(map[h]){e.preventDefault();location.href=map[h];return;}
  if(h.startsWith('#product/')){
    e.preventDefault();
    location.href='products/'+h.split('/')[1]+'/index.html';
    return;
  }
  if(h.startsWith('#quote?product=')){
    e.preventDefault();
    location.href='contact-us/index.html?product='+encodeURIComponent(decodeURIComponent(h.split('=')[1]||''))+'#contact-form';
  }
},true);
})();
window.addEventListener('DOMContentLoaded',()=>{
  const home=document.querySelector('[data-nav="home"]');
  if(home) home.classList.add('active');
});
