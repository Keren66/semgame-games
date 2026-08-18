/* ============================================================
   Sem Game GmbH – semgame.games
   DE/EN Umschalter, Hero-Karussell, Header, Menü, Reveal
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    de: {
      "nav.home": "Start", "nav.games": "Spiele",
      "nav.about": "Über uns", "nav.careers": "Karriere",

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
      "game.cta": "Mehr erfahren",

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

      "careers.eyebrow": "Karriere",
      "careers.title": "Wir suchen kreative Köpfe",
      "careers.text": "Programmierung, Art, Design, Sound oder Production: Werde Teil eines Teams, das Spiele mit Herz macht.",
      "careers.cta": "Bewirb dich bei uns",


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
      "nav.home": "Home", "nav.games": "Games",
      "nav.about": "About", "nav.careers": "Careers",

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
      "game.cta": "Learn more",

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

      "careers.eyebrow": "Careers",
      "careers.title": "We are looking for creative minds",
      "careers.text": "Programming, art, design, sound or production: join a team that makes games with heart.",
      "careers.cta": "Apply to us",


      "footer.slogan": "We create worlds.",
      "footer.contact": "Contact",
      "footer.impressum": "Imprint",
      "footer.agb": "Terms",
      "footer.privacy": "Privacy",
      "footer.youth": "Youth protection",
      "footer.jobs": "Careers",
      "footer.rights": "All rights reserved."
    },
    /* ---------------- detail pages (games/*.html) ---------------- */
    _detail_de: {
      "detail.back": "\u2190 Zur\u00fcck zu allen Spielen",
      "detail.facts": "Auf einen Blick",
      "detail.genre": "Genre",
      "detail.platforms": "Plattformen",
      "detail.status": "Status",
      "detail.release": "Release",
      "detail.features": "Highlights",
      "detail.ctaText": "Fragen zu diesem Spiel? Schreib uns gerne.",
      "detail.ctaBtn": "Kontakt aufnehmen",
      "g.tag": "Open-World Action-Adventure",
      "g.desc": "Im Schwarzwald erwacht uraltes Licht. Erkunde eine lebendige Welt voller Legenden, stell dich gefallenen Rittern und lüfte das Geheimnis der Lumenwacht.",
      "g.long1": "Tief im Schwarzwald, wo das Tageslicht kaum durch die dichten Wipfel dringt, erwacht ein Licht, das älter ist als jede Legende. Als Hüterin der Lumenwacht übernimmst du ein Erbe, das seit Jahrhunderten vergessen ist – und das die Schatten, die zwischen den Wurzeln der Wälder lauern, wecken wird.",
      "g.long2": "Erkunde eine offene Welt voller überwucherter Ruinen, versteckter Lichtquellen und gefallener Ritter, die einst selbst zur Wacht gehörten. Jede Region des Waldes erzählt ihre eigene Geschichte – von verlassenen Wachtürmen bis zu den tiefen, leuchtenden Höhlen unter den Wurzeln.",
      "g.long3": "Das Geheimnis der Lumenwacht offenbart sich nur denen, die das Licht suchen. Sammle Fragmente vergessener Chroniken, stärke deine Kräfte und entscheide, ob das Licht einmal mehr über den Wald herrschen wird – oder für immer erlischt.",
      "g.f1": "Eine offene, lebendige Welt zum freien Erkunden",
      "g.f2": "Ein Licht-Schatten-Kampfsystem mit magischen Kräften",
      "g.f3": "Vollständig vertonte deutsche und englische Sprachausgabe",
      "g.f4": "Einzelspielerkampagne mit über 40 Stunden Spielzeit",
      "g.status": "Jetzt erhältlich",
      "g.tag": "Koop-Seeabenteuer",
      "g.desc": "Segel mit bis zu vier Freund:innen über die Nordsee, kapere Handelsschiffe und bezwinge die Kreaturen der Tiefe.",
      "g.long1": "Die Nordsee ruft – unbarmherzig, endlos, voll verborgener Reichtümer. Stelle deine Crew zusammen und hisse die Segel: Tidebreakers ist ein kooperatives Seeabenteuer, in dem jede Welle, jede Fahrt und jede Kaperung zählt.",
      "g.long2": "Plant gemeinsam eure Routen, navigiert durch Stürme und kapert Handelsschiffe, bevor die Patrouillen der Küstenwache euch finden. Unter euch warten Kreaturen der Tiefe, die nur die mutigsten Kapitäne je gesehen haben – und die eure gesamte Mannschaft fordern.",
      "g.long3": "Vom kleinen Kutter bis zum schweren Kaperschiff: Baue deine Flotte aus, rüste Kanonen und Segel aus und schreibe deine eigene Saga auf See – gemeinsam mit bis zu drei Freund:innen.",
      "g.f1": "Kooperatives Spiel für 1 bis 4 Spieler:innen",
      "g.f2": "Prozedural generierte Nordsee mit dynamischem Wetter",
      "g.f3": "Schiffbau, Handel und Seekämpfe in einer offenen Welt",
      "g.f4": "Regelmäßige kostenlose Inhalts-Updates",
      "g.status": "Öffentliche Beta",
      "g.tag": "Taktisches Rollenspiel",
      "g.desc": "In einem zerrissenen Königreich führt nur die Eiserne Garde durch die Finsternis. Stelle dein Regiment zusammen und entscheide über das Schicksal der Krone.",
      "g.long1": "Das Königreich ist zerbrochen, die Krone ohne Erbe, und die Lande zerfressen von Krieg und Verrat. In dieser Finsternis bleibt nur eine Hoffnung: die Eiserne Garde – und ihre neue Kommandantin. Du.",
      "g.long2": "Eisengarde ist ein taktisches Rollenspiel, in dem jede Entscheidung auf dem Schlachtfeld und jede Allianz am Hofe zählt. Stelle dein Regiment aus Söldnern, Adeligen und Geächteten zusammen, und führe sie in rundenbasierten Schlachten zum Sieg – oder in den Untergang.",
      "g.long3": "Deine Entscheidungen formen das Schicksal der Krone: Wem dienst du, wen verrätst du, und welcher Thronfolger wird am Ende regieren? Es gibt keinen richtigen Weg – nur deinen.",
      "g.f1": "Rundenbasierte taktische Schlachten mit tiefem Einheiten-System",
      "g.f2": "Verzweigte Kampagne mit mehreren Enden",
      "g.f3": "Charaktere, die dich lieben, hassen oder verraten",
      "g.f4": "Entwickelt mit Feedback aus der Community",
      "g.status": "In Entwicklung",
      "g.tag": "Rhythmus-Abenteuer",
      "g.desc": "In der Stadt der tausend Glocken wird Musik zur Waffe. Schmiede Klänge, meistere Rhythmen und erwecke die schlafende Maschinenstadt.",
      "g.long1": "Unter der Erde liegt die Stadt der tausend Glocken – erbaut aus Messing, Dampf und einem Herzschlag, der vor Jahrhunderten verstummte. Du bist die letzte Klangschmiedin, und nur du kannst sie wieder wecken.",
      "g.long2": "In Klangschmiede ist Musik mehr als ein Soundtrack: Sie ist dein Werkzeug, dein Schild und deine Waffe. Schmiede Klänge aus Rohmaterial, die du in der Stadt findest, und nutze Rhythmen, um Maschinen zu bewegen, Tore zu öffnen und Wächter zu besänftigen.",
      "g.long3": "Jeder Bezirk der Maschinenstadt hat seinen eigenen Klang. Finde ihn, meistere ihn – und lass die Stadt der tausend Glocken wieder läuten.",
      "g.f1": "Musik als zentrale Spielmechanik – keine rhythmischen Vorkenntnisse nötig",
      "g.f2": "Handgezeichnete Steampunk-Welt zum Erkunden",
      "g.f3": "Original-Soundtrack mit über 30 Stücken",
      "g.f4": "Ideal für kurze, entspannte Spielsessions",
      "g.status": "Jetzt erhältlich",
      "g.tag": "Märchenrätsel-Abenteuer",
      "g.desc": "In den Nebelwäldern des Nordens verschwinden Kinder. Begleite Elin auf der Suche nach ihrer Schwester – und den Geschichten, die der Nebel verbirgt.",
      "g.long1": "Im Dorf am Rande der Nebelwälder erzählt man sich Geschichten über die Kinder, die dort hineingingen und nie zurückkehrten. Als Elins kleine Schwester verschwindet, bleibt nur eines zu tun: hineinzugehen.",
      "g.long2": "Nebelkinder ist ein Märchenrätsel-Abenteuer, das dich in eine melancholische, handgemalte Welt entführt. Löse Rätsel mit Licht und Schatten, folge den Spuren der verschwundenen Kinder und entdecke, was der Nebel wirklich ist.",
      "g.long3": "Kein Kampf, kein Zeitdruck – nur du, der Nebel und eine Geschichte, die dich noch lange begleiten wird.",
      "g.f1": "Eine bewegende, gewaltfreie Geschichte über Verlust und Hoffnung",
      "g.f2": "Handgemalter Grafikstil wie aus einem Bilderbuch",
      "g.f3": "Über 50 Rätsel mit Licht, Schatten und Klang",
      "g.f4": "Spielzeit ca. 6–8 Stunden",
      "g.status": "Jetzt erhältlich",
      "g.tag": "Gemütliches Aufbauspiel",
      "g.desc": "Richte dein kleines Licht inmitten der Bäume ein. Bewirtschafte den Wald, pflege freundliche Wesen und finde Ruhe im Wechsel der Jahreszeiten.",
      "g.long1": "Waldlicht ist ein Ort zum Ankommen. Kein Ziel, kein Stress, kein Game Over – nur ein kleines Licht, das du inmitten der Bäume einrichtest, und ein Wald, der mit dir wächst.",
      "g.long2": "Pflanze Bäume, baue Beete an, sammle Pilze und beobachte, wie sich die Jahreszeiten verändern. Die freundlichen Wesen des Waldes kommen und gehen – manche bleiben, wenn du dich um sie kümmerst.",
      "g.long3": "Ob zehn Minuten am Abend oder ein ganzer Sonntag: Waldlicht ist das Spiel, zu dem du immer wieder zurückkehren kannst – und das dich jedes Mal willkommen heißt.",
      "g.f1": "Entspanntes Spiel ohne Druck, Fristen oder Scheitern",
      "g.f2": "Wald und Wesen wachsen mit jeder Spielsession",
      "g.f3": "Vier Jahreszeiten mit eigenem Licht und eigenem Klang",
      "g.f4": "Perfekt für Spieler:innen jeden Alters",
      "g.status": "In Entwicklung",
    },
    _detail_en: {
      "detail.back": "\u2190 Back to all games",
      "detail.facts": "At a glance",
      "detail.genre": "Genre",
      "detail.platforms": "Platforms",
      "detail.status": "Status",
      "detail.release": "Release",
      "detail.features": "Highlights",
      "detail.ctaText": "Questions about this game? Feel free to write to us.",
      "detail.ctaBtn": "Get in touch",
      "g.tag": "Open-World Action-Adventure",
      "g.desc": "Ancient light awakens in the Black Forest. Explore a living world full of legends, face fallen knights and uncover the secret of the Lumen Watch.",
      "g.long1": "In the heart of the Black Forest, where daylight barely breaks through the dense canopy, an ancient light awakens. As Keeper of the Lumen Watch, you inherit a legacy forgotten for centuries – and awaken the shadows that lurk between the roots of the woods.",
      "g.long2": "Explore an open world of overgrown ruins, hidden sources of light and fallen knights who once belonged to the Watch themselves. Every region of the forest tells its own story – from abandoned watchtowers to deep, glowing caverns beneath the roots.",
      "g.long3": "The secret of the Lumen Watch reveals itself only to those who seek the light. Gather fragments of forgotten chronicles, strengthen your powers and decide whether the light will rule the forest once more – or fade forever.",
      "g.f1": "An open, living world to explore freely",
      "g.f2": "A light-and-shadow combat system with magical powers",
      "g.f3": "Fully voiced German and English audio",
      "g.f4": "Single-player campaign with 40+ hours of gameplay",
      "g.status": "Available now",
      "g.tag": "Co-op Naval Adventure",
      "g.desc": "Sail the North Sea with up to four friends, seize trading ships and conquer the creatures of the deep.",
      "g.long1": "The North Sea calls – relentless, endless, full of hidden riches. Assemble your crew and hoist the sails: Tidebreakers is a cooperative sea adventure where every wave, every voyage and every seizure counts.",
      "g.long2": "Plan your routes together, navigate through storms and seize trading ships before the coast guard patrols find you. Below you, creatures of the deep await that only the boldest captains have ever seen – and that will test your entire crew.",
      "g.long3": "From a small cutter to a heavy privateer: build your fleet, upgrade cannons and sails and write your own saga at sea – together with up to three friends.",
      "g.f1": "Cooperative play for 1 to 4 players",
      "g.f2": "Procedurally generated North Sea with dynamic weather",
      "g.f3": "Shipbuilding, trade and naval combat in an open world",
      "g.f4": "Regular free content updates",
      "g.status": "Open Beta",
      "g.tag": "Tactical Role-Playing Game",
      "g.desc": "In a fractured kingdom, only the Iron Guard leads through the darkness. Assemble your regiment and decide the fate of the crown.",
      "g.long1": "The kingdom is broken, the crown without an heir, and the lands devoured by war and betrayal. In this darkness, only one hope remains: the Iron Guard – and its new commander. You.",
      "g.long2": "Eisengarde is a tactical role-playing game in which every decision on the battlefield and every alliance at court matters. Assemble your regiment from mercenaries, nobles and outcasts, and lead them to victory in turn-based battles – or to ruin.",
      "g.long3": "Your decisions shape the fate of the crown: whom do you serve, whom do you betray, and which heir will rule in the end? There is no right path – only yours.",
      "g.f1": "Turn-based tactical battles with a deep unit system",
      "g.f2": "Branching campaign with multiple endings",
      "g.f3": "Characters who love, hate or betray you",
      "g.f4": "Developed with community feedback",
      "g.status": "In development",
      "g.tag": "Rhythm Adventure",
      "g.desc": "In the city of a thousand bells, music becomes a weapon. Forge sounds, master rhythms and awaken the sleeping machine city.",
      "g.long1": "Beneath the earth lies the city of a thousand bells – built of brass, steam and a heartbeat that fell silent centuries ago. You are the last sound-smith, and only you can wake it again.",
      "g.long2": "In Klangschmiede, music is more than a soundtrack: it is your tool, your shield and your weapon. Forge sounds from raw materials you find in the city, and use rhythms to move machines, open gates and soothe guardians.",
      "g.long3": "Every district of the machine city has its own sound. Find it, master it – and let the city of a thousand bells ring again.",
      "g.f1": "Music as the core game mechanic – no rhythm experience needed",
      "g.f2": "A hand-drawn steampunk world to explore",
      "g.f3": "Original soundtrack with over 30 tracks",
      "g.f4": "Perfect for short, relaxed play sessions",
      "g.status": "Available now",
      "g.tag": "Fairy-Tale Puzzle Adventure",
      "g.desc": "Children disappear in the misty woods of the north. Follow Elin in search of her sister – and the stories the mist keeps hidden.",
      "g.long1": "In the village at the edge of the misty woods, stories are told about the children who went in and never returned. When Elin's little sister disappears, only one thing remains: to go in.",
      "g.long2": "Nebelkinder is a fairy-tale puzzle adventure that draws you into a melancholic, hand-painted world. Solve puzzles with light and shadow, follow the traces of the missing children and discover what the mist really is.",
      "g.long3": "No combat, no time pressure – just you, the mist and a story that will stay with you long after.",
      "g.f1": "A moving, non-violent story about loss and hope",
      "g.f2": "Hand-painted art style like a picture book",
      "g.f3": "Over 50 puzzles with light, shadow and sound",
      "g.f4": "Approx. 6–8 hours of gameplay",
      "g.status": "Available now",
      "g.tag": "Cozy Life Sim",
      "g.desc": "Set up your little light among the trees. Tend the forest, care for friendly creatures and find peace in the passing of the seasons.",
      "g.long1": "Waldlicht is a place to settle in. No goal, no stress, no game over – just a little light that you set up among the trees, and a forest that grows with you.",
      "g.long2": "Plant trees, build garden beds, gather mushrooms and watch the seasons change. The friendly creatures of the forest come and go – some stay if you take care of them.",
      "g.long3": "Whether ten minutes in the evening or a whole Sunday: Waldlicht is the game you can always return to – and that welcomes you every time.",
      "g.f1": "Relaxed play without pressure, deadlines or failure",
      "g.f2": "Forest and creatures grow with every play session",
      "g.f3": "Four seasons with their own light and sound",
      "g.f4": "Perfect for players of all ages",
      "g.status": "In development",
    },
    _contact_de: {
      "contact.title": "Kontakt",
      "contact.text": "Schreib uns einfach eine E-Mail – wir melden uns in der Regel innerhalb von 48 Stunden.",
      "contact.copy": "Adresse kopieren",
      "contact.copied": "Kopiert!",
      "contact.close": "Schlie\u00dfen",
    },
    _contact_en: {
      "contact.title": "Contact",
      "contact.text": "Just send us an email – we usually reply within 48 hours.",
      "contact.copy": "Copy address",
      "contact.copied": "Copied!",
      "contact.close": "Close",
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

  // detail pages (games/<slug>.html) extend the main dict with their own content
  var PAGE_SLUG = (location.pathname.match(/games\/([a-z]+)\.html/) || [null, null])[1];
  var detailDict = I18N["_detail_" + currentLang] || {};
  var contactDict = I18N["_contact_" + currentLang] || {};

  function pageTitleFor(lang) {
    if (!PAGE_SLUG) return TITLES[lang];
    var name = document.querySelector(".detail-title");
    return (name ? name.textContent + " – " : "") + "Sem Game GmbH";
  }

  function applyLang(lang) {
    currentLang = lang;
    var dict = I18N[lang];
    detailDict = I18N["_detail_" + lang] || {};
    contactDict = I18N["_contact_" + lang] || {};
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.title = pageTitleFor(lang);
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = META_DESC[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) { el.textContent = dict[key]; return; }
      if (detailDict[key] !== undefined) { el.textContent = detailDict[key]; return; }
      if (contactDict[key] !== undefined) el.textContent = contactDict[key];
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
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
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

  /* ---------------- Contact modal ---------------- */
  /* Replaces mailto: links with an in-page dialog (works on machines
     with no mail client configured) */
  var modal = null;
  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "contact-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML =
      '<div class="contact-modal-box">' +
        '<button type="button" class="contact-modal-x" data-contact-close aria-label="Close">&times;</button>' +
        '<h3 class="contact-modal-title" data-i18n="contact.title">Kontakt</h3>' +
        '<p class="contact-modal-text" data-i18n="contact.text"></p>' +
        '<div class="contact-modal-mail">' +
          '<span class="contact-modal-addr">contact@semgame.games</span>' +
        '</div>' +
        '<div class="contact-modal-actions">' +
          '<button type="button" class="btn btn-primary" data-contact-copy data-i18n="contact.copy">Adresse kopieren</button>' +
          '<button type="button" class="btn contact-modal-closebtn" data-contact-close data-i18n="contact.close">Schlie&szlig;en</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
    return modal;
  }
  function openContact(e) {
    if (e) e.preventDefault();
    ensureModal();
    applyContactTexts();
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeContact() {
    if (modal) modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function applyContactTexts() {
    if (!modal) return;
    modal.querySelector('[data-i18n="contact.title"]').textContent = contactDict["contact.title"] || "Kontakt";
    modal.querySelector('[data-i18n="contact.text"]').textContent = contactDict["contact.text"] || "";
    modal.querySelector('[data-contact-copy]').textContent = contactDict["contact.copy"] || "Copy address";
    modal.querySelector('.contact-modal-closebtn').textContent = contactDict["contact.close"] || "Close";
  }
  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest("a[href^='mailto:'], [data-contact]") : null;
    if (t) { openContact(ev); return; }
    if (modal && ev.target.closest && ev.target.closest("[data-contact-close]")) { closeContact(); return; }
    if (modal && ev.target === modal) { closeContact(); return; }
    if (modal && ev.target.closest && ev.target.closest("[data-contact-copy]")) {
      var btn = ev.target.closest("[data-contact-copy]");
      var done = function () {
        btn.textContent = contactDict["contact.copied"] || "Copied!";
        setTimeout(function () { btn.textContent = contactDict["contact.copy"] || "Copy address"; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText("contact@semgame.games").then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = "contact@semgame.games";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (err) {}
        document.body.removeChild(ta);
        done();
      }
    }
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") closeContact();
  });

  /* ---------------- Init ---------------- */
  applyLang(currentLang);
})();
