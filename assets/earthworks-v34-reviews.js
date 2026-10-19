/* Reviews-only preview. No network feeds, invented ratings or review submission. */
(function () {
  'use strict';
  const root = document.querySelector('.ew34-reviews');
  if (!root) return;
  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const widgets = [...root.querySelectorAll('[data-ew34-widget]')];
  widgets.forEach(widget => {
    const track = widget.querySelector('[data-ew34-track]');
    const cards = [...track.querySelectorAll('[data-ew34-card]')];
    const previous = widget.querySelector('[data-ew34-prev]');
    const next = widget.querySelector('[data-ew34-next]');
    const position = widget.querySelector('[data-ew34-position]');
    let frame;
    function metrics() {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 20;
      const step = (cards[0]?.getBoundingClientRect().width || track.clientWidth) + gap;
      return { step, visible: Math.max(1, Math.round((track.clientWidth + gap) / step)) };
    }
    function update() {
      const m = metrics();
      const first = Math.min(cards.length - m.visible, Math.max(0, Math.round(track.scrollLeft / m.step)));
      const last = Math.min(cards.length, first + m.visible);
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollWidth - track.clientWidth - track.scrollLeft <= 2;
      const label = `${first + 1}\u2013${last} of ${cards.length} sample reviews`;
      if (position.textContent !== label) position.textContent = label;
    }
    function move(direction) {
      track.scrollBy({ left: direction * metrics().step, behavior: reduceMotion() ? 'instant' : 'smooth' });
    }
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }, { passive: true });
    track.addEventListener('keydown', event => {
      if (event.target !== track) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        track.scrollTo({left: event.key === 'Home' ? 0 : track.scrollWidth, behavior: reduceMotion() ? 'instant' : 'smooth'});
      }
    });
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
    else window.addEventListener('resize', update, {passive:true});
    update();
  });

  const modal = root.querySelector('[data-ew34-modal]');
  if (!modal) return;
  const title = modal.querySelector('#ew34-modal-title');
  const avatar = modal.querySelector('[data-ew34-modal-avatar]');
  const stars = modal.querySelector('[data-ew34-modal-stars]');
  const copy = modal.querySelector('[data-ew34-modal-copy]');
  const gallery = modal.querySelector('[data-ew34-modal-gallery]');
  const image = modal.querySelector('[data-ew34-modal-image]');
  const count = modal.querySelector('[data-ew34-photo-count]');
  let opener = null, photos = [], photoIndex = 0;
  function renderPhoto() {
    if (!photos.length) return;
    image.src = photos[photoIndex];
    image.alt = `Sample website photo ${photoIndex + 1} of ${photos.length}; not customer review media`;
    count.textContent = `Sample photo ${photoIndex + 1} of ${photos.length}`;
  }
  function openReview(card, trigger) {
    opener = trigger;
    title.textContent = card.dataset.reviewName;
    avatar.textContent = card.querySelector('.ew34-avatar').textContent;
    const rating = Number(card.dataset.reviewRating) || 0;
    stars.textContent = '\u2605'.repeat(rating);
    stars.setAttribute('aria-label', `${rating} out of 5 stars, from the existing website testimonial`);
    copy.textContent = card.querySelector('.ew34-excerpt').textContent;
    try { photos = JSON.parse(card.dataset.reviewPhotos || '[]'); } catch (_) { photos = []; }
    photoIndex = 0;
    gallery.hidden = photos.length === 0;
    if (photos.length) renderPhoto();
    modal.showModal();
    document.documentElement.classList.add('ew34-modal-open');
    modal.querySelector('[data-ew34-modal-close]').focus({preventScroll:true});
  }
  root.addEventListener('click', event => {
    const trigger = event.target.closest('[data-ew34-more],[data-ew34-photos]');
    if (trigger) openReview(trigger.closest('[data-ew34-card]'), trigger);
  });
  modal.querySelector('[data-ew34-modal-close]').addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => {
    document.documentElement.classList.remove('ew34-modal-open');
    opener?.focus({preventScroll:true});
  });
  modal.addEventListener('click', event => {
    if (event.target !== modal) return;
    const rect = modal.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
  });
  function changePhoto(direction) {
    if (!photos.length) return;
    photoIndex = (photoIndex + direction + photos.length) % photos.length;
    renderPhoto();
  }
  modal.querySelector('[data-ew34-photo-prev]').addEventListener('click', () => changePhoto(-1));
  modal.querySelector('[data-ew34-photo-next]').addEventListener('click', () => changePhoto(1));
  modal.addEventListener('keydown', event => {
    if (gallery.hidden || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault(); changePhoto(event.key === 'ArrowRight' ? 1 : -1);
  });
})();
