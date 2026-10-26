/* Shop All: combined category filters with shareable URLs and existing sorting. */
(function () {
  'use strict';
  const grid = document.getElementById('productGrid');
  const filters = document.getElementById('shopAllFilters');
  if (!grid || !filters) return;
  const items = Array.from(grid.querySelectorAll('.dawn-product-grid__item'));
  const checks = Array.from(filters.querySelectorAll('input[name="category"]'));
  const validCategories = new Set(checks.map(input => input.value));
  const sort = document.getElementById('SortBy');
  const count = document.getElementById('productCount');
  const filterCount = document.getElementById('selectedCategoryCount');
  const empty = document.getElementById('emptyCollection');
  const clear = filters.querySelector('[data-clear-categories]');
  const panel = filters.querySelector('.dawn-facet__panel');
  const aliases = {
    mulch:'mulch-pine-straw', pinestraw:'mulch-pine-straw', bark:'mulch-pine-straw',
    'mulch-and-pine-straw':'mulch-pine-straw', 'mulch-pine':'mulch-pine-straw',
    soil:'soil-sand', sand:'soil-sand', 'soil-and-sand':'soil-sand',
    gravel:'gravel-decorative-stone', 'decorative-stone':'gravel-decorative-stone',
    'gravel-stone':'gravel-decorative-stone', 'gravel-and-decorative-stone':'gravel-decorative-stone',
    'palletised-stone':'palletized-stone',
    'erosion-control':'erosion-geotextiles', 'erosion-control-and-geotextiles':'erosion-geotextiles',
    'pipe-erosion':'storm-drainage', 'hdpe-pipe':'storm-drainage',
    'storm-and-drainage-pipe':'storm-drainage', 'additional-products-and-services':'additional'
  };
  const selectedCategories = () => checks.filter(input => input.checked).map(input => input.value);

  function positionPanel() {
    if (!filters.open) return;
    const summary = filters.querySelector('summary').getBoundingClientRect();
    const header = document.querySelector('.ew17-header')?.getBoundingClientRect();
    const actionBar = document.querySelector('.mobile-action-bar');
    const actionRect = actionBar?.getBoundingClientRect();
    const bottomEdge = actionBar && getComputedStyle(actionBar).display !== 'none'
      ? Math.min(innerHeight,actionRect.top) - 12 : innerHeight - 12;
    const topEdge = Math.max(12,header ? header.bottom + 12 : 12);
    const below = bottomEdge - summary.bottom - 6;
    const above = summary.top - topEdge - 6;
    const openAbove = below < 240 && above > below;
    panel.style.top = openAbove ? 'auto' : 'calc(100% + 6px)';
    panel.style.bottom = openAbove ? 'calc(100% + 6px)' : 'auto';
    panel.style.maxHeight = Math.max(0,Math.min(420,openAbove ? above : below)) + 'px';
  }

  function apply() {
    const selected = new Set(selectedCategories());
    items.forEach(item => { item.hidden = selected.size > 0 && !selected.has(item.dataset.category); });
    const visible = items.filter(item => !item.hidden);
    visible.sort((a,b) => {
      if (sort.value === 'alpha-asc') return (a.dataset.title || '').localeCompare(b.dataset.title || '');
      if (sort.value === 'alpha-desc') return (b.dataset.title || '').localeCompare(a.dataset.title || '');
      return Number(a.dataset.originalOrder || 0) - Number(b.dataset.originalOrder || 0);
    });
    visible.forEach(item => grid.appendChild(item));
    count.textContent = visible.length;
    filterCount.textContent = selected.size ? ` (${selected.size})` : '';
    empty.hidden = visible.length > 0;
    clear.disabled = selected.size === 0;
  }

  function readUrl() {
    const params = new URLSearchParams(location.search);
    const values = [...params.getAll('category'), ...params.getAll('filter')]
      .flatMap(value => value.split(','))
      .map(value => aliases[value] || value)
      .filter(value => validCategories.has(value));
    const selected = new Set(values);
    checks.forEach(input => { input.checked = selected.has(input.value); });
    const requestedSort = params.get('sort_by');
    sort.value = ['featured','alpha-asc','alpha-desc'].includes(requestedSort) ? requestedSort : 'featured';
    apply();
  }

  function updateUrl() {
    const url = new URL(location.href);
    url.searchParams.delete('category');
    url.searchParams.delete('filter');
    url.searchParams.delete('sort_by');
    selectedCategories().forEach(category => url.searchParams.append('category',category));
    if (sort.value !== 'featured') url.searchParams.set('sort_by',sort.value);
    if (url.href !== location.href) {
      try { history.pushState(null,'',url.href); } catch (_) { /* Local file previews still filter normally. */ }
    }
    apply();
  }

  checks.forEach(input => input.addEventListener('change',updateUrl));
  sort.addEventListener('change',updateUrl);
  clear.addEventListener('click',() => {
    checks.forEach(input => { input.checked = false; });
    updateUrl();
  });
  document.addEventListener('pointerdown',event => {
    if (filters.open && !filters.contains(event.target)) filters.open = false;
  });
  filters.addEventListener('keydown',event => {
    if (event.key === 'Escape') {
      filters.open = false;
      filters.querySelector('summary').focus();
    }
  });
  filters.addEventListener('toggle',positionPanel);
  window.addEventListener('resize',positionPanel,{passive:true});
  window.addEventListener('scroll',positionPanel,{passive:true});
  window.addEventListener('popstate',readUrl);
  readUrl();
})();
