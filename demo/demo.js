// Demo scenes for the store screenshots. The language comes from ?lang=pt|en|es, else the
// browser; the markup holds the Portuguese text and window.T the English and Spanish.
(function () {
  var langs = ['pt', 'en', 'es'];
  var asked = new URLSearchParams(location.search).get('lang');
  var lang = asked || (navigator.language || 'en').slice(0, 2).toLowerCase();
  if (langs.indexOf(lang) < 0) lang = 'en';
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[lang];
  var words = (window.T || {})[lang] || {};
  document.querySelectorAll('[data-t]').forEach(function (el) {
    var text = words[el.getAttribute('data-t')];
    if (text == null) return;
    if (el instanceof SVGElement) el.textContent = text; else el.innerHTML = text;
  });
  if (words.title) document.title = words.title;
  document.querySelectorAll('a[data-lang]').forEach(function (a) {
    a.href = a.getAttribute('href') + '?lang=' + (a.getAttribute('data-lang') || lang);
  });
  window.DEMO_LANG = lang;
})();
