/* Shared, idempotent button and icon setup for static and dynamically rendered pages. */
(function () {
  'use strict';
  const buttonSelector = [
    '.button', '.client-quote-button', '.client-bottom-cta__button',
    '.client-feature-card__button', '.ew17-quote', '.dawn-card__actions a',
    '.product-card-button', '.product-card-quote', '.shop-card__actions a',
    '.ew17-service-strip a', '.ew17-service-card__body>a',
    '.ew20-mega-service-link', '.ew20-service-help>a', '.ew21-button'
  ].join(',');
  const sandSelector = [
    '.client-bottom-cta__button','.dawn-card__actions .quote', '.product-card-quote',
    '.button--outline', '.button--ghost', '.ew17-service-strip a', '.ew20-mega-service-link'
  ].join(',');
  function normalize(scope) {
    const elements = [];
    if (scope.nodeType === 1 && scope.matches(buttonSelector)) elements.push(scope);
    if (scope.querySelectorAll) elements.push(...scope.querySelectorAll(buttonSelector));
    elements.forEach(button => {
      if (button.dataset.ew21Button === 'true') return;
      button.dataset.ew21Button = 'true';
      button.classList.add('ew21-button');
      if (!button.classList.contains('ew21-button--sand') && !button.classList.contains('ew21-button--green')) {
        button.classList.add(button.matches(sandSelector) ? 'ew21-button--sand' : 'ew21-button--green');
      }
      if (button.closest('.ew17-mega-menu,.ew17-service-card,.ew20-service-help')) button.classList.add('ew21-button--compact');
      const walker = document.createTreeWalker(button,NodeFilter.SHOW_TEXT);
      const texts = []; while (walker.nextNode()) texts.push(walker.currentNode);
      texts.forEach(node => {
        node.nodeValue = node.nodeValue.replace(/\s*[\u2192\u203a\u279c\u2794\u2197]\s*$/u,'');
        if (!node.nodeValue.trim() && node.parentElement !== button && ['B','SPAN'].includes(node.parentElement.tagName)) node.parentElement.classList.add('ew21-removed-arrow');
      });
    });
  }
  document.querySelectorAll('.ew17-utility-button[aria-label="Cart"] svg').forEach(svg => {
    svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');
    svg.innerHTML='<path d="M2.5 3.5h2.7L7.7 15.5h10.5l2.3-9H6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.6"/><circle cx="17.5" cy="20" r="1.6"/>';
  });
  normalize(document);
  new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(node => {if (node.nodeType === 1) normalize(node);}));
  }).observe(document.body,{childList:true,subtree:true});
})();

/* v22 shared enhancements */

(function(){
  const iconMap = {
    location:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"></circle></svg>',
    phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 4 5-2 3c2 3 3 4 6 6l3-2 5 4c-1 3-3 4-6 3C8 20 4 16 2 9 1 6 2 4 5 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    email:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"></rect><path d="m3 6 9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"></circle><path d="M12 7.7v4.8l3.1 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
  };
  function row(type, html){ return '<div class="ew21-contact-row"><span>'+iconMap[type]+'</span><span>'+html+'</span></div>'; }
  function splitLines(el){ return (el.innerHTML||'').split(/<br\s*\/?\s*>/i).map(s=>s.trim()).filter(Boolean); }
  function classify(line){
    const plain = line.replace(/<[^>]+>/g,'').trim();
    if (!plain) return '';
    if (/@/.test(plain)) return 'email';
    if (/Mon|Tue|Wed|Thu|Fri|Sat|Sun|AM|PM|hours?/i.test(plain)) return 'clock';
    if (/\d{3}[^\d]*\d{3}[^\d]*\d{4}/.test(plain)) return 'phone';
    return 'location';
  }
  function enhanceSimpleBlock(container, mainHtml, extraLines){
    if (!container || container.dataset.ew21Enhanced === '1') return;
    const rows = [];
    if (mainHtml) rows.push(row('location', mainHtml));
    (extraLines||[]).forEach(line => rows.push(row(classify(line)||'location', line)));
    container.innerHTML = '<div class="ew21-contact-list">'+rows.join('')+'</div>';
    container.dataset.ew21Enhanced = '1';
  }
  function enhanceLocationVisuals(){
    document.querySelectorAll('.location-visual__body').forEach(body => {
      if (body.dataset.ew21Enhanced === '1') return;
      const ps = body.querySelectorAll('p');
      if (ps.length < 2) return;
      const address = ps[0];
      const phone = ps[1];
      const email = ps[2];
      const addressLines = splitLines(address);
      address.innerHTML = '<div class="ew21-contact-list">' + row('location', addressLines.join('<br>')) + '</div>';
      phone.innerHTML = '<div class="ew21-contact-list">' + row('phone', phone.innerHTML) + '</div>';
      if (email) email.innerHTML = '<div class="ew21-contact-list">' + row('email', email.innerHTML) + '</div>';
      body.dataset.ew21Enhanced = '1';
    });
    document.querySelectorAll('.location-card__body').forEach(body => {
      if (body.dataset.ew21Enhanced === '1') return;
      const infoWrap = body.querySelector('div');
      const p = infoWrap && infoWrap.querySelector('p');
      if (!p) return;
      const lines = splitLines(p);
      if (!lines.length) return;
      const html = '<div class="ew21-mini-contact-list">' + row('location', lines.slice(0,2).join('<br>')) + (lines[2] ? row('clock', lines.slice(2).join('<br>')) : '') + '</div>';
      p.outerHTML = html;
      body.dataset.ew21Enhanced = '1';
    });
    document.querySelectorAll('.contact-detail').forEach(detail => {
      if (detail.dataset.ew21Enhanced === '1') return;
      const b = detail.querySelector('b');
      const p = detail.querySelector('p');
      if (!b && !p) return;
      const main = b ? b.innerHTML : '';
      const lines = p ? splitLines(p) : [];
      const block = document.createElement('div');
      block.className = 'ew21-contact-list';
      if (main) block.insertAdjacentHTML('beforeend', row(classify(main)==='phone' ? 'phone' : classify(main)==='email' ? 'email' : 'location', main));
      lines.forEach(line => block.insertAdjacentHTML('beforeend', row(classify(line)||'location', line)));
      if (p) p.remove();
      if (b) b.after(block);
      else detail.appendChild(block);
      detail.dataset.ew21Enhanced = '1';
    });
    // Footer contact text stays plain white per approved client direction.

  }
  function enhanceFooterBranding(){
    document.querySelectorAll('.client-footer__brand img').forEach(img => {
      const current = img.getAttribute('src') || 'assets/new-logo-transparent.png';
      img.setAttribute('src', current.replace(/(?:embedded_152aba7ec5e5\.webp|new-logo-transparent\.png)$/,'new-logo-transparent.png'));
      img.alt = 'Earth Works Landscape Supply';
    });
    const fb = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.2 0-5 1.8-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.7.3-1 1-1Z"></path></svg>';
    const ig = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="17.4" cy="6.6" r="1.15" fill="currentColor"/></svg>';
    const x = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 3H21l-6.4 7.3L22 21h-5.8l-4.5-6.4L6.1 21H3.3l6.9-7.8L3 3h5.8l4 5.8L18.2 3Zm-2 15.5h1.6L8.1 5.4H6.5l9.7 13.1Z"></path></svg>';
    document.querySelectorAll('.client-socials').forEach(social => {
      const anchors = Array.from(social.querySelectorAll('a'));
      const hrefs = [anchors[0]?.getAttribute('href') || '#', anchors[1]?.getAttribute('href') || '#', anchors[2]?.getAttribute('href') || '#'];
      social.innerHTML = '<a href="'+hrefs[0]+'" aria-label="Facebook">'+fb+'</a><a href="'+hrefs[1]+'" aria-label="Instagram">'+ig+'</a><a href="'+hrefs[2]+'" aria-label="X">'+x+'</a>';
    });
  }
  function run(){ enhanceLocationVisuals(); enhanceFooterBranding(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', run);
})();


/* V35: bind the existing wordmark interaction on product/collection pages that
   do not include the homepage's inline hover handler. Avoid duplicate listeners. */
(function () {
  'use strict';
  if (document.getElementById('earthworks-footer-wordmark-hover-follow')) return;
  document.querySelectorAll('.client-footer__wordmark').forEach(function (mark) {
    if (mark.dataset.ew35HoverBound) return;
    mark.dataset.ew35HoverBound = 'true';
    function setPoint(point) {
      var rect = mark.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mark.style.setProperty('--mx', Math.max(0,Math.min(100,((point.clientX-rect.left)/rect.width)*100))+'%');
      mark.style.setProperty('--my', Math.max(0,Math.min(100,((point.clientY-rect.top)/rect.height)*100))+'%');
    }
    mark.addEventListener('mouseenter', function (e) {mark.classList.add('is-hovering');setPoint(e);});
    mark.addEventListener('mousemove', setPoint);
    mark.addEventListener('mouseleave', function () {mark.classList.remove('is-hovering');});
    mark.addEventListener('touchstart', function (e) {
      var point = e.touches && e.touches[0];
      if (point) {mark.classList.add('is-hovering');setPoint(point);}
    }, {passive:true});
    mark.addEventListener('touchmove', function (e) {
      var point = e.touches && e.touches[0];if (point) setPoint(point);
    }, {passive:true});
    mark.addEventListener('touchend', function () {mark.classList.remove('is-hovering');});
    mark.addEventListener('touchcancel', function () {mark.classList.remove('is-hovering');});
  });
})();
