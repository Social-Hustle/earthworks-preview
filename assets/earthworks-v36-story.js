/* About Us: full client story in an accessible, scrollable dialog. */
(function () {
  'use strict';
  const dialog = document.getElementById('ew36-story-modal');
  const trigger = document.querySelector('[data-ew36-story-open]');
  if (!dialog || !trigger) return;
  const close = dialog.querySelector('[data-ew36-story-close]');
  const scroll = dialog.querySelector('.ew36-modal-scroll');
  const title = dialog.querySelector('#ew36-modal-title');
  let previousFocus = null;
  let backdropDown = false;

  function outsideContent(event) {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom;
  }

  trigger.addEventListener('click', function () {
    if (dialog.open) return;
    previousFocus = document.activeElement;
    dialog.showModal();
    document.documentElement.classList.add('ew36-story-is-open');
    scroll.scrollTop = 0;
    title.focus({preventScroll:true});
  });
  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('pointerdown', function (event) {
    backdropDown = event.target === dialog && outsideContent(event);
  });
  dialog.addEventListener('click', function (event) {
    if (backdropDown && event.target === dialog && outsideContent(event)) dialog.close();
    backdropDown = false;
  });
  // Native dialog handles Escape, background inertness, and keyboard focus containment.
  dialog.addEventListener('close', function () {
    document.documentElement.classList.remove('ew36-story-is-open');
    if (previousFocus && previousFocus.isConnected) previousFocus.focus({preventScroll:true});
  });
})();
