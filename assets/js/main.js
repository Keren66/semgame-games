/* ============================================================
   Sem Game GmbH – semgame.games
   DE/EN Umschalter, Hero-Karussell, Header, Menü, Reveal
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    de: {
      "nav.home": "Start", "nav.games": "Spiele", "nav.studio": "Studio",
      "nav.about": "Über uns", "nav.news": "News", "nav.careers": "Karriere",

      "hero.eyebrow": "Sem Game Studio · Indie-Games aus Deutschland",
      "hero1.kicker": "Open-World Action-Adventure",
      "hero1.tag": "Wo das Licht stirbt, beginnt dein Abenteuer.",
      "hero1.status": "Jetzt erhältlich",
      "hero1.desc": "Ein Open-World-Action-Adventure im Herzen des Schwarzwalds. Als Hüterin des Lichts trittst du den Schatten entgegen, die zwischen den Wurzeln der uralten Wälder erwachen. Erkunde eine lebendige Welt voller Legenden und lüfte das Geheimnis der Lumenwacht.",
      "hero1.cta1": "Mehr erfahren",
      "hero2.kicker": "Koop-Seeabenteuer",
      "hero2.tag": "Segel in den Sturm. Jede Welle zählt.",
      "hero2.status": "Öffentliche Beta",
      "hero2.desc": "Segel mit deiner Crew in den Sturm. Ein kooperatives Seeabenteuer über die Nordsee, in dem jede Welle zählt. Kapere Handelsschiffe, bezwinge die Kreaturen der Tiefe und entdecke vergessene Inseln.",
      "hero2.cta1": "Mehr erfahren",
      "hero3.kicker": "Taktisches Rollenspiel",
      "hero3.tag": "Schmiede dein Schicksal. Entscheide über die Krone.",
      "hero3.status": "In Entwicklung",
      "hero3.desc": "Ein zerrissenes Königreich. Eine letzte Garde. Schmiede dein Schicksal, stelle dein Regiment zusammen und entscheide über das Schicksal der Krone.",
      "hero3.cta1": "Mehr erfahren",

      "games.title": "Unsere Spiele",

      "game1.tag": "Open-World Action-Adventure",
      "game1.desc": "Im Schwarzwald erwacht uraltes Licht. Erkunde eine lebendige Welt voller Legenden, stell dich gefallenen Rittern und lüfte das Geheimnis der Lumenwacht.",
      "game1.status": "Jetzt erhältlich",
      "game2.tag": "Koop-Seeabenteuer",
      "game2.desc": "Segel mit bis zu vier Freund:innen über die Nordsee, kapere Handelsschiffe und bezwinge die Kreaturen der Tiefe.",
      "game2.status": "Öffentliche Beta",
      "game3.tag": "Taktisches Rollenspiel",
      "game3.desc": "In einem zerrissenen Königreich führt nur die Eiserne Garde durch die Finsternis. Stelle dein Regiment zusammen und entscheide über das Schicksal der Krone.",
      "game3.status": "In Entwicklung",
      "game4.tag": "Rhythmus-Abenteuer",
      "game4.desc": "In der Stadt der tausend Glocken wird Musik zur Waffe. Schmiede Klänge, meistere Rhythmen und erwecke die schlafende Maschinenstadt.",
      "game4.status": "Jetzt erhältlich",
      "game5.tag": "Märchenrätsel-Abenteuer",
      "game5.desc": "In den Nebelwäldern des Nordens verschwinden Kinder. Begleite Elin auf der Suche nach ihrer Schwester – und den Geschichten, die der Nebel verbirgt.",
      "game5.status": "Jetzt erhältlich",
      "game6.tag": "Gemütliches Aufbauspiel",
      "game6.desc": "Richte dein kleines Licht inmitten der Bäume ein. Bewirtschafte den Wald, pflege freundliche Wesen und finde Ruhe im Wechsel der Jahreszeiten.",
      "game6.status": "In Entwicklung",

      "studio.eyebrow": "Sem Studio",
      "studio.title": "Animation, die Geschichten erzählt",
      "studio.text": "Hinter jedem Spiel steckt eine Geschichte. Unser Animationsstudio erzählt sie in Bildern – vom Kurzfilm bis zur Cinematic, vom Storyboard bis zum finalen Frame.",
      "studio.cta": "Werde Teil des Studios",

      "about.eyebrow": "Vision · Über uns",
      "about.title": "Bei Sem Game schaffen wir Welten.",
      "about.v1t": "Kreativität zuerst",
      "about.v1d": "Unsere Spiele entstehen aus Leidenschaft und Neugier – nicht aus Marktforschung.",
      "about.v2t": "Gemeinsam stark",
      "about.v2d": "Vom ersten Konzept bis zum Release arbeiten wir als ein Team – und mit den besten Partnern der Branche.",
      "about.v3t": "Ein sicherer Hafen",
      "about.v3d": "Kreative brauchen Raum. Wir schaffen ein Umfeld, in dem Ideen wachsen dürfen – ohne Druck und ohne Eile.",
      "about.v4t": "Handwerk & Detail",
      "about.v4d": "Wir lieben das Handwerk: Animation, Musik, Erzählung – jedes Detail zählt.",
      "about.v5t": "Nachhaltig spielen",
      "about.v5d": "Wir denken langfristig: für unsere Spiele, unser Team und unseren Planeten.",
      "about.s1": "Gegründet", "about.s2": "Talente",
      "about.s3": "Titel & 1 Studio", "about.s4": "Spieler:innen",

      "careers.eyebrow": "Karriere",
      "careers.title": "Wir suchen kreative Köpfe",
      "careers.text": "Programmierung, Art, Design, Sound oder Production: Werde Teil eines Teams, das Spiele mit Herz macht.",
      "careers.cta": "Bewirb dich bei uns",

      "news.eyebrow": "Aktuelles",
      "news.title": "News",
      "news.n1": "Lumenwacht erscheint weltweit auf PC, PlayStation 5 und Xbox Series X|S",
      "news.n2": "Tidebreakers: Öffentliche Beta startet",
      "news.n3": "Klangschmiede jetzt auch auf Nintendo Switch",
      "news.n4": "Sem Game schließt neue Partnerschaft für den weltweiten Vertrieb",
      "news.n5": "Eisengarde für den Deutschen Computerspielpreis nominiert",
      "news.n6": "Nebelkinder ist erhältlich",

      "footer.slogan": "Wir schaffen Welten.",
      "footer.contact": "Kontakt",
      "footer.impressum": "Impressum",
      "footer.agb": "AGB",
      "footer.privacy": "Datenschutz",
      "footer.youth": "Jugendschutz",
      "footer.jobs": "Karriere",
      "footer.rights": "Alle Rechte vorbehalten."
    },

    en: {
      "nav.home": "Home", "nav.games": "Games", "nav.studio": "Studio",
      "nav.about": "About", "nav.news": "News", "nav.careers": "Careers",

      "hero.eyebrow": "Sem Game Studio · Indie Games from Germany",
      "hero1.kicker": "Open-World Action-Adventure",
      "hero1.tag": "Where the light dies, your adventure begins.",
      "hero1.status": "Available now",
      "hero1.desc": "An open-world action-adventure in the heart of the Black Forest. As Keeper of the Light, you stand against the shadows awakening between the roots of the ancient woods. Explore a living world full of legends and uncover the secret of the Lumen Watch.",
      "hero1.cta1": "Learn more",
      "hero2.kicker": "Co-op Naval Adventure",
      "hero2.tag": "Sail into the storm. Every wave counts.",
      "hero2.status": "Open Beta",
      "hero2.desc": "Sail into the storm with your crew. A cooperative sea adventure across the North Sea, where every wave counts. Seize trading ships, conquer the creatures of the deep and discover forgotten islands.",
      "hero2.cta1": "Learn more",
      "hero3.kicker": "Tactical Role-Playing Game",
      "hero3.tag": "Forge your destiny. Decide the fate of the crown.",
      "hero3.status": "In development",
      "hero3.desc": "A fractured kingdom. One last guard. Forge your destiny, assemble your regiment and decide the fate of the crown.",
      "hero3.cta1": "Learn more",

      "games.title": "Our Games",

      "game1.tag": "Open-World Action-Adventure",
      "game1.desc": "Ancient light awakens in the Black Forest. Explore a living world full of legends, face fallen knights and uncover the secret of the Lumen Watch.",
      "game1.status": "Available now",
      "game2.tag": "Co-op Naval Adventure",
      "game2.desc": "Sail the North Sea with up to four friends, seize trading ships and conquer the creatures of the deep.",
      "game2.status": "Open Beta",
      "game3.tag": "Tactical Role-Playing Game",
      "game3.desc": "In a fractured kingdom, only the Iron Guard leads through the darkness. Assemble your regiment and decide the fate of the crown.",
      "game3.status": "In development",
      "game4.tag": "Rhythm Adventure",
      "game4.desc": "In the city of a thousand bells, music becomes a weapon. Forge sounds, master rhythms and awaken the sleeping machine city.",
      "game4.status": "Available now",
      "game5.tag": "Fairy-Tale Puzzle Adventure",
      "game5.desc": "Children disappear in the misty woods of the north. Follow Elin in search of her sister – and the stories the mist keeps hidden.",
      "game5.status": "Available now",
      "game6.tag": "Cozy Life Sim",
      "game6.desc": "Set up your little light among the trees. Tend the forest, care for friendly creatures and find peace in the passing of the seasons.",
      "game6.status": "In development",

      "studio.eyebrow": "Sem Studio",
      "studio.title": "Animation that tells stories",
      "studio.text": "Behind every game is a story. Our animation studio tells it in pictures – from short films to cinematics, from storyboard to final frame.",
      "studio.cta": "Join the studio",

      "about.eyebrow": "Vision · About us",
      "about.title": "At Sem Game, we create worlds.",
      "about.v1t": "Creativity first",
      "about.v1d": "Our games grow from passion and curiosity – not from market research.",
      "about.v2t": "Strong together",
      "about.v2d": "From first concept to release, we work as one team – and with the best partners in the industry.",
      "about.v3t": "A safe harbor",
      "about.v3d": "Creatives need room. We create an environment where ideas are allowed to grow – without pressure and without haste.",
      "about.v4t": "Craft & detail",
      "about.v4d": "We love the craft: animation, music, storytelling – every detail matters.",
      "about.v5t": "Play sustainably",
      "about.v5d": "We think long-term: for our games, our team and our planet.",
      "about.s1": "Founded", "about.s2": "Talents",
      "about.s3": "Titles & 1 studio", "about.s4": "Players",

      "careers.eyebrow": "Careers",
      "careers.title": "We are looking for creative minds",
      "careers.text": "Programming, art, design, sound or production: join a team that makes games with heart.",
      "careers.cta": "Apply to us",

      "news.eyebrow": "Latest news",
      "news.title": "News",
      "news.n1": "Lumenwacht launches worldwide on PC, PlayStation 5 and Xbox Series X|S",
      "news.n2": "Tidebreakers: open beta begins",
      "news.n3": "Klangschmiede now on Nintendo Switch",
      "news.n4": "Sem Game signs new partnership for worldwide distribution",
      "news.n5": "Eisengarde nominated for the German Computer Games Award",
      "news.n6": "Nebelkinder is out now",

      "footer.slogan": "We create worlds.",
      "footer.contact": "Contact",
      "footer.impressum": "Imprint",
      "footer.agb": "Terms",
      "footer.privacy": "Privacy",
      "footer.youth": "Youth protection",
      "footer.jobs": "Careers",
      "footer.rights": "All rights reserved."
    }
  };

  var TITLES = {
    de: "Sem Game GmbH – Wir schaffen Welten",
    en: "Sem Game GmbH – We create worlds"
  };
  var META_DESC = {
    de: "Sem Game GmbH ist ein unabhängiges Spielestudio aus Deutschland. Wir entwickeln Lumenwacht, Tidebreakers, Eisengarde und weitere Spiele für PC, PlayStation, Xbox und Nintendo Switch.",
    en: "Sem Game GmbH is an independent game studio from Germany. We develop Lumenwacht, Tidebreakers, Eisengarde and more for PC, PlayStation, Xbox and Nintendo Switch."
  };

  var LANG_KEY = "semgame-lang";
  var currentLang = localStorage.getItem(LANG_KEY) || "de";
  if (I18N[currentLang] === undefined) currentLang = "de";

  function applyLang(lang) {
    currentLang = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.title = TITLES[lang];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = META_DESC[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  /* ---------------- Hero carousel ---------------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
  var dotsWrap = document.getElementById("heroDots");
  var counter = document.getElementById("heroCounter");
  var idx = 0, timer = null, INTERVAL = 6500;

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function updateCounter() {
    if (counter) counter.textContent = pad(idx + 1) + " / " + pad(slides.length);
  }

  if (slides.length > 0) {
    slides.forEach(function (_, i) {
      var d = document.createElement("button");
      d.setAttribute("role", "tab");
      d.setAttribute("aria-label", "Folie " + (i + 1));
      if (i === 0) d.classList.add("is-active");
      d.addEventListener("click", function () { goTo(i); restart(); });
      dotsWrap.appendChild(d);
    });
  }

  function goTo(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      s.classList.toggle("is-active", i === idx);
    });
    var dots = dotsWrap.children;
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("is-active", i === idx);
    }
    updateCounter();
  }

  function next() { goTo(idx + 1); }
  function prev() { goTo(idx - 1); }

  function start() {
    if (timer) return;
    timer = setInterval(next, INTERVAL);
  }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  var prevBtn = document.getElementById("heroPrev");
  var nextBtn = document.getElementById("heroNext");
  if (prevBtn) prevBtn.addEventListener("click", function () { prev(); restart(); });
  if (nextBtn) nextBtn.addEventListener("click", function () { next(); restart(); });

  var hero = document.getElementById("hero");
  if (hero) {
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    hero.addEventListener("touchstart", stop, { passive: true });
    hero.addEventListener("touchend", restart, { passive: true });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) start();

  /* ---------------- Header scroll state ---------------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Init ---------------- */
  applyLang(currentLang);
})();
