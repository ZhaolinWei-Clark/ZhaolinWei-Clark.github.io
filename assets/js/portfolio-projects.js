/* Archive interactions retained; queries are scoped to the project page. */
(() => {
  const root = document.querySelector('.portfolio-projects');
  if (!root) return;
  const all = selector => [...root.querySelectorAll(selector)];
  const byId = id => root.querySelector('#' + CSS.escape(id));
  const lightbox = byId('lightbox');
  let returnFocus = null;
  let imageFocus = null;
  let previousOverflow = '';

  function toggleCat(id) {
    const section = byId(id), body = byId(id + '-body');
    const closed = section.classList.toggle('closed');
    body.style.maxHeight = closed ? '0px' : 'none';
    section.querySelector('.cat-hdr').setAttribute('aria-expanded', String(!closed));
    tick();
  }
  function openModal(id) {
    const modal = byId(id);
    if (!modal || !modal.classList.contains('pmodal-ov')) return;
    if (all('.pmodal-ov.open').length) return;
    returnFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    modal.inert = false;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.pmodal-x').focus({ preventScroll: true });
  }
  function closeM(id) {
    const modal = byId(id);
    if (!modal) return;
    if (lightbox.classList.contains('open')) lbClose();
    modal.classList.remove('open');
    modal.inert = true;
    document.body.style.overflow = previousOverflow;
    if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
  }
  function closeOut(event, id) { if (event.target === byId(id)) closeM(id); }
  function lbOpen(images, index) {
    const image = byId('lb-img');
    imageFocus = document.activeElement;
    image.src = images[index];
    const source = all('.pmodal-ov.open img').find(img => img.getAttribute('src') === images[index]);
    image.alt = source ? source.alt : 'Enlarged project image';
    lightbox.inert = false;
    lightbox.classList.add('open');
    lightbox.querySelector('.lb-close').focus({ preventScroll: true });
  }
  function lbClose() {
    lightbox.classList.remove('open');
    lightbox.inert = true;
    if (imageFocus && imageFocus.isConnected) imageFocus.focus({ preventScroll: true });
  }
  Object.assign(window, { toggleCat, openModal, closeM, closeOut, lbOpen, lbClose });

  function keyboardClick(element) {
    element.tabIndex = 0;
    element.setAttribute('role', 'button');
    element.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); element.click(); }
    });
  }
  all('.cat-body').forEach(body => { body.style.maxHeight = 'none'; });
  all('.cat-hdr').forEach(header => {
    keyboardClick(header);
    header.setAttribute('aria-expanded', 'true');
    header.setAttribute('aria-controls', header.closest('.cat').id + '-body');
  });
  all('.pmodal-hero[onclick], .pmodal-hero-duo img[onclick]').forEach(image => {
    keyboardClick(image);
    image.setAttribute('aria-label', 'Enlarge ' + (image.alt || image.querySelector('img')?.alt || 'project image'));
  });
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lbClose(); });
  document.addEventListener('keydown', event => {
    const active = lightbox.classList.contains('open') ? lightbox : root.querySelector('.pmodal-ov.open');
    if (!active) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      if (active === lightbox) lbClose(); else closeM(active.id);
    }
    if (event.key === 'Tab') {
      const controls = [...active.querySelectorAll('a[href],button,[tabindex="0"]')].filter(el => el.getClientRects().length && !el.closest('[inert]'));
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || !active.contains(document.activeElement))) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !active.contains(document.activeElement))) { event.preventDefault(); first?.focus(); }
    }
  });

  let activeFilter = null;
  all('.ftag').forEach(tag => {
    keyboardClick(tag);
    tag.setAttribute('aria-pressed', 'false');
    tag.addEventListener('click', () => {
      activeFilter = activeFilter === tag.dataset.f ? null : tag.dataset.f;
      all('.ftag').forEach(control => {
        const selected = control.dataset.f === activeFilter;
        control.classList.toggle('on', selected);
        control.setAttribute('aria-pressed', String(selected));
      });
      all('.card').forEach(card => card.classList.toggle('hidden', Boolean(activeFilter) && !card.dataset.tags.split(',').includes(activeFilter)));
      all('.cat').forEach(section => {
        if (section.querySelector('.card:not(.hidden)') && section.classList.contains('closed')) toggleCat(section.id);
      });
      tick();
    });
  });

  const categoryLinks = all('[data-cat]');
  function tick() {
    let active = categoryLinks[0]?.dataset.cat;
    categoryLinks.forEach(link => { if (byId(link.dataset.cat).getBoundingClientRect().top <= 110) active = link.dataset.cat; });
    categoryLinks.forEach(link => {
      const selected = link.dataset.cat === active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(() => { tick(); scheduled = false; }); }
  }, { passive: true });
  window.addEventListener('resize', tick);
  tick();

  // Additive direct links from selected work; legacy category anchors still work.
  function openLinkedProject() {
    const id = location.hash.slice(1);
    if (!id.startsWith('m-') || !byId(id)) return;
    const card = all('.card').find(item => item.querySelector('[aria-controls="' + id + '"]'));
    if (card) {
      if (card.closest('.cat').classList.contains('closed')) toggleCat(card.closest('.cat').id);
      card.scrollIntoView({ block: 'center' });
      card.querySelector('button').focus({ preventScroll: true });
    }
    openModal(id);
  }
  window.addEventListener('hashchange', openLinkedProject);
  openLinkedProject();
})();
