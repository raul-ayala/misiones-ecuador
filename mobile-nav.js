/* Misiones Ecuador — mobile burger menu.
   Injected into <body> (not the header) so React re-renders never wipe it.
   Labels are authored in Spanish so i18n.js translates them like any other node. */
(function () {
  var BP = 820;
  var LINKS = [
    { href: 'quienes-somos.dc.html', label: 'Quiénes somos' },
    { href: 'que-hacemos.dc.html', label: 'Qué hacemos' },
    { href: 'impacto.dc.html', label: 'Nuestro impacto' },
    { href: 'sumate.dc.html', label: 'Súmate' },
    { href: 'blog.dc.html', label: 'Blog' }
  ];

  var isOpen = false, btn, sheet, bars = [], items = [], scrollY = 0;

  function css() {
    if (document.getElementById('me-burger-css')) return;
    var s = document.createElement('style');
    s.id = 'me-burger-css';
    s.textContent =
      '#me-burger{display:none}' +
      '@media (max-width:' + BP + 'px){' +
        'header a[href="donar.dc.html"],header a[href*="paypal.com"]{display:none !important}' +
        'header [data-me-lang]{margin-right:50px !important}' +
        '#me-burger{display:flex}' +
      '}' +
      '@media (prefers-reduced-motion: reduce){#me-sheet,#me-sheet *{transition:none !important}}';
    document.head.appendChild(s);
  }

  function headerBox() {
    var h = document.querySelector('header');
    return h ? h.getBoundingClientRect() : { top: 0, height: 78 };
  }

  function placeBtn() {
    if (!btn) return;
    var b = headerBox();
    var pad = window.innerWidth <= 600 ? 20 : 24;
    btn.style.top = Math.max(8, Math.round(b.top + b.height / 2 - 21)) + 'px';
    btn.style.right = pad + 'px';
    // white bars over the hero photo, dark once the bar turns solid
    var solid = isOpen || onLightHeader();
    var col = solid ? '#143356' : '#FFFFFF';
    bars.forEach(function (bar) { bar.style.background = col; });
  }

  function onLightHeader() {
    var h = document.querySelector('header');
    if (!h) return true;
    if (h.hasAttribute('data-nav')) return h.getAttribute('data-solid') === '1';
    return true; // internal pages: white bar
  }

  function build() {
    if (document.getElementById('me-burger')) return;
    css();

    btn = document.createElement('button');
    btn.id = 'me-burger';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Menú');
    btn.setAttribute('aria-expanded', 'false');
    btn.style.cssText = 'position:fixed;z-index:120;width:42px;height:42px;border:none;background:transparent;' +
      'cursor:pointer;padding:0;align-items:center;justify-content:center;flex-direction:column;gap:5px;';
    for (var i = 0; i < 3; i++) {
      var bar = document.createElement('span');
      bar.style.cssText = 'display:block;width:24px;height:2px;border-radius:2px;background:#FFFFFF;' +
        'transition:transform .34s cubic-bezier(.2,.7,.2,1),opacity .22s ease,background .3s ease;';
      btn.appendChild(bar);
      bars.push(bar);
    }
    btn.addEventListener('click', function () { isOpen ? close() : open(); });
    document.body.appendChild(btn);

    sheet = document.createElement('div');
    sheet.id = 'me-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.style.cssText = 'position:fixed;inset:0;z-index:110;display:flex;flex-direction:column;' +
      'justify-content:center;padding:96px 28px 40px;' +
      'background:radial-gradient(125% 110% at 50% 30%, #2E79C0 0%, #235F9E 55%, #1B5189 100%);' +
      'opacity:0;visibility:hidden;transform:translateY(-14px);' +
      'transition:opacity .38s cubic-bezier(.2,.7,.2,1),transform .38s cubic-bezier(.2,.7,.2,1),visibility 0s .38s;';

    var nav = document.createElement('nav');
    nav.style.cssText = 'display:flex;flex-direction:column;gap:2px;';
    LINKS.forEach(function (l) {
      var a = document.createElement('a');
      a.href = l.href;
      a.textContent = l.label;
      a.style.cssText = "font-family:'Block Berthold','Montserrat',sans-serif;font-size:clamp(30px,9vw,44px);" +
        'line-height:1.12;text-transform:uppercase;letter-spacing:.01em;color:#FFFFFF;text-decoration:none;' +
        'padding:6px 0;opacity:0;transform:translateY(14px);' +
        'transition:opacity .4s ease,transform .4s cubic-bezier(.2,.7,.2,1);';
      a.addEventListener('click', close);
      nav.appendChild(a);
      items.push(a);
    });
    sheet.appendChild(nav);

    var foot = document.createElement('div');
    foot.style.cssText = 'margin-top:34px;display:flex;flex-direction:column;gap:18px;align-items:flex-start;' +
      'opacity:0;transform:translateY(14px);transition:opacity .4s ease,transform .4s cubic-bezier(.2,.7,.2,1);';

    var donate = document.createElement('a');
    donate.href = 'donar.dc.html';
    donate.textContent = 'Donar';
    donate.style.cssText = 'display:inline-flex;align-items:center;background:#FFCB04;color:#1A1A1A;font-weight:700;' +
      "font-family:'Montserrat',sans-serif;font-size:16px;padding:15px 32px;border-radius:999px;text-decoration:none;";
    donate.addEventListener('click', close);
    foot.appendChild(donate);
    sheet.appendChild(foot);
    sheet._foot = foot;
    document.body.appendChild(sheet);

    paintLangs();
    placeBtn();
    window.addEventListener('resize', placeBtn, { passive: true });
    window.addEventListener('scroll', placeBtn, { passive: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen) close(); });
  }

  function paintLangs() {
    // the header's own EN/ES control stays visible on mobile; nothing to paint here
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    scrollY = window.scrollY || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = -scrollY + 'px';
    document.body.style.width = '100%';

    sheet.style.visibility = 'visible';
    sheet.style.transition = 'opacity .38s cubic-bezier(.2,.7,.2,1),transform .38s cubic-bezier(.2,.7,.2,1)';
    void sheet.offsetWidth;
    sheet.style.opacity = '1';
    sheet.style.transform = 'none';

    items.forEach(function (el, i) {
      el.style.transitionDelay = (90 + i * 48) + 'ms';
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    if (sheet._foot) {
      sheet._foot.style.transitionDelay = (90 + items.length * 40) + 'ms';
      sheet._foot.style.opacity = '1';
      sheet._foot.style.transform = 'none';
    }

    bars[0].style.transform = 'translateY(7px) rotate(45deg)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    btn.setAttribute('aria-expanded', 'true');
    placeBtn();
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;

    items.forEach(function (el) { el.style.transitionDelay = '0ms'; el.style.opacity = '0'; el.style.transform = 'translateY(14px)'; });
    if (sheet._foot) { sheet._foot.style.transitionDelay = '0ms'; sheet._foot.style.opacity = '0'; sheet._foot.style.transform = 'translateY(14px)'; }

    sheet.style.transition = 'opacity .3s ease,transform .3s cubic-bezier(.4,0,.6,1),visibility 0s .3s';
    sheet.style.opacity = '0';
    sheet.style.transform = 'translateY(-14px)';
    sheet.style.visibility = 'hidden';

    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
    btn.setAttribute('aria-expanded', 'false');

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
    placeBtn();
  }

  function start() {
    build();
    // the header mounts with the DC render, so retry until it exists
    var tries = 0;
    var t = setInterval(function () {
      if (document.querySelector('header') || ++tries > 40) { placeBtn(); clearInterval(t); }
    }, 120);
    window.addEventListener('storage', paintLangs);
    window.addEventListener('message', function (e) { if (e.data && e.data.type === 'me-lang') paintLangs(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
