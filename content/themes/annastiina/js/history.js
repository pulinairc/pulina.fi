/**
 * #pulina channel history: timeline, sticky panel with week strips, line counter and the watercolour wash.
 * Content comes from the channel logs; see template-history.php.
 */
(() => {
  const timeline = document.getElementById('timeline');
  if (!timeline) {
    return;
  }
  const KIND = {
    meet: ['Miitti', '#ff8fc7'], game: ['Peli-ilta', '#ffb454'], bot: ['Botit', '#5ce1e6'], mod: ['Moderointi', '#ff7b7b'],
    site: ['Sivusto ja palvelut', '#8fb3ff'], record: ['Ennätys', '#7ee081'], talk: ['Kanavalla', '#c9a6ff'],
    star: ['Kohokohta', '#ffd166'],
  };
  const LINES = [718541, 1446103, 1356364, 1284393, 1047632, 479020, 536675, 836702, 563801, 289748, 226741, 311037, 621630, 568580, 399882, 371790, 255775, 189595, 287661];
  const TALKERS = [487, 867, 1160, 884, 928, 717, 737, 912, 751, 469, 378, 345, 419, 465, 483, 653, 223, 481, 438];
  const KICKS = [0, 73, 283, 111, 78, 127, 112, 132, 90, 44, 29, 9, 136, 58, 27, 153, 53, 32, 38];
  const E = (date, kind, text, lines) => ({ date, kind, text, lines });
  const DATA = [
    { years: '2008–2010', from: 2008, to: 2010, title: 'Kaveriporukan kanava', color: '#20ffa7',
      paras: [
        'Rolle ja mustikkasoppa perustivat #pulinan yhdistämällä pikkukanavat #rolleweb, #soppanen ja #kesämaa. Ensimmäiset tulijat olivat kavereita ja kavereiden kavereita: IRL-kavereita, lukiokavereita ja jyväskyläläisiä.',
        'Kanava eli myös ruudun ulkopuolella. Miittejä pidettiin Jyväskylän Kirkkopuistossa, Kauppakadulla ja Särkänniemessä, ja #pulina-paitoja tilattiin porukalla. Marraskuussa 2009 kanavalle tuli kummitus, botti, joka oppi puhumaan hyödyntäen kanavalle kirjoitettuja juttuja.',
        'Vuonna 2009 kanavalle kirjoitettiin 1 446 103 riviä, lähes 4 000 päivässä. Se on yhä kanavan vilkkain vuosi. Vuonna 2010 kanavalla kirjoitti 1 160 eri ihmistä.',
      ],
      top: [['mustikkasoppa', 461567], ['rolle', 243476], ['marko', 126798], ['fusil', 111018], ['wzardd', 98137]],
      events: {
        2008: [
          E('8.4.', 'mod', 'Kanava perustetaan kello 13.11, ja mustikkasoppa saa ensimmäiset opit.', [['13:15', 'Lantzi', 'saanko pyytää kavereita'], ['13:16', 'rolle', 'Lantzi: KAIKKI KAVERIT TÄNNE'], ['13:16', 'mustikkasoppa', 'uiii'], ['13:16', 'rolle', 'Uusia ihmisiä :)'], ['13:16', 'rolle', 'Ja kavereiden kaverit']]),
          E('9.4.', 'record', 'Kanavan toinen päivä: 8 189 riviä.'),
          E('heinäkuu', 'site', 'Pulinan ensimmäiset kotisivut.'),
          E('10.10.', 'mod', '18 potkua yhden päivän aikana.'),
          E('joulukuu', 'site', 'Ensimmäinen paitatilaus: t-paita 10,85 €, huppari 26,05 €.'),
        ],
        2009: [
          E('28.2.', 'record', '8 131 riviä päivässä.'),
          E('24.6.', 'record', '10 299 riviä päivässä, miittiä edeltävänä päivänä.'),
          E('25.6.', 'meet', 'Ensimmäinen miitti Jyväskylän Kirkkopuistossa.', [['13:39', 'mustikkasoppa', 'Joku miitti kirkkopuistoon?'], ['14:11', 'canfly', 'miittiä pystyyn ja kaikki kirkkopuistoon lusmuilemaan'], ['15:15', 'rolle', 'No nyt oltais kirkkopuistossa.'], ['15:17', 'rolle', 'Nyt kaikki kirkkopuistoon prkl.']]),
          E('5.9.', 'meet', 'Miitti Helsingissä.'),
          E('19.9.', 'meet', 'Miitti Jyväskylän Kauppakadulla.', [['00:41', 'Schitzophrenia', 'huomenna miitti yeah'], ['09:50', 'Hupakko', 'meil on jo 1/3 miittii tääl :D'], ['13:31', 'Yangsteri', 'miitti käynnissä jo?!']]),
          E('syyskuu', 'mod', 'Uusi op valitaan äänestämällä.'),
          E('marraskuu', 'meet', 'Miitti Turussa.'),
          E('marraskuu', 'site', 'Pulinaventti eli kanavan oma Ventrilo-palvelin.'),
          E('21.11.', 'bot', 'kummitus liittyy kanavalle.', [['21:01', 'rollepeikko', 'Moi kummitus.'], ['21:01', 'kummitus', 'Kääk rollepeikko 0.'], ['21:01', 'mustikkasoppa', 'Mitä vittua :D'], ['21:02', 'rollepeikko', 'Vois ehkä laittaa ettei vastaile jokaiseen :D'], ['21:02', 'mustikkasoppa', ':DDDDDDD']]),
          E('joulukuu', 'game', 'Triviaa pelataan kanavalla.'),
          E('27.12.', 'record', 'Kaikkien aikojen vilkkain päivä: 10 714 riviä.'),
        ],
        2010: [
          E('huhtikuu', 'bot', 'kummitus jakaa voicet aktiivisuuden mukaan.'),
          E('toukokuu', 'meet', 'Miitti Jyväskylän kuurojen kulttuuripäivillä.'),
          E('kesäkuu', 'site', 'Sivut siirtyvät osoitteeseen pulina.info, ja blogi avataan.'),
          E('kesäkuu', 'meet', 'Miitti Jyväskylän Pub Katseessa.'),
          E('14.8.', 'meet', 'Miitti Särkänniemessä.'),
          E('syyskuu', 'mod', 'Topicissa lukee: "Kanava on K-20. Ikärajaa ei valvo kukaan."'),
          E('3.10.', 'mod', 'Kaikkien aikojen potkuennätys: 30 potkua päivässä.', [['21:33', 'rolle', 'Melkein vois laittaa trigger-kickejä'], ['21:35', 'rolle', 'MIKSI SÄ OTIT BANNIT POIS'], ['22:17', 'tira', 'koht tulee kickbannia ässältä']]),
        ],
      } },
    { years: '2011–2012', from: 2011, to: 2012, title: 'Kanava kasvaa', color: '#5cc8ff',
      paras: [
        'Rivejä kertyi yhä yli 1 000 000 vuodessa, mutta äänessä olivat uudet ihmiset: fusil, samiy, helyes, aswang ja mynta. Rollen osuus riveistä putosi alkuvuosien 10–16 %:sta 1–3 %:iin, ja ylläpitoon tulivat fusil, speadfreak ja firewalker.',
        'Pulinalle avattiin keskustelufoorumi, ja osoite vaihtui pulina.infosta pulina.fi:hin. Voicen sai vain, jos oli tavannut opin, käynyt miitissä tai lähettänyt kuvan itsestään.',
      ],
      top: [['mustikkasoppa', 164560], ['fusil', 141528], ['samiy', 107226], ['helyes', 93010], ['aswang', 76501]],
      events: {
        2011: [
          E('tammikuu', 'site', 'Keskustelufoorumi avataan.'),
          E('26.2.', 'meet', 'Talvimiitti Jyväskylän Wilhelmiinan konditoriassa.'),
          E('maaliskuu', 'site', 'Osoitteeksi tulee pulina.fi.'),
          E('huhtikuu', 'meet', 'Miitti Helsingissä.'),
          E('25.4.', 'record', '8 186 riviä päivässä.'),
          E('16.7.', 'meet', 'Jyväskylämiitti.'),
        ],
        2012: [
          E('tammikuu', 'talk', 'Topicissa lukee: "Rilluttelijoiden oma kanava."'),
          E('helmikuu', 'talk', 'Topicissa lukee: "STOP ACTA".'),
          E('25.2.', 'meet', 'Miitti Helsingissä Assembly Winterin aikaan.'),
          E('28.3.', 'meet', 'Hangout-miitti Google+:ssa.'),
          E('5.4.', 'mod', 'Voicen saa vain opin tavannut tai miitissä käynyt.', [['00:14', 'rolle', 'dafis: Ootko muuten käyny miiteissä'], ['00:15', 'rolle', 'Ainoastaan opin tavanneet tai miiteissä käyneet tai pärstäkuvan lapulla lähettäneet saa voicet.']]),
          E('6.–8.4.', 'meet', '4-vuotismiitti Tampereella.', [['00:05', 'firewalker', 'huomenna tampereelle=)'], ['09:10', 'mustikkasoppa', 'Jape_: me mennää kohta tampereelle miittaa näitä pulinalaisia']]),
          E('2.6.', 'star', 'Machinae Supremacyn laulaja Robert Stjärnström liittyy Pulinan Google+ Hangout -miittiin ja oppii mustikkasopalta viittoman sanalle muumi.', [['01:10', 'incidence', 'Jei robert'], ['01:13', 'mustikkasoppa', 'MaSu laulaja tos meidän kanssa hangouttaa'], ['01:31', 'mustikkasoppa', 'MUUMIN ;D'], ['01:57', 'mustikkasoppa', 'opeta julkkikselle joku viittoma: check'], ['02:04', 'incidence', 'Robert Stjärnström @stjarnstrom: I now know sign language for “moomin” #beatthat']]),
        ],
      } },
    { years: '2013–2016', from: 2013, to: 2016, title: 'Miitit ja Telegram', color: '#a78bfa',
      paras: [
        'Vuonna 2013 rivimäärä puolittui, kun moni alkuaikojen pulisija hiljeni. Tilalle tuli uusi porukka: gerrye, kiizeli, safti, nefastos, pirta, drinn ja convulvau. Ylläpidosta huolehtivat fusil, samiy ja nicd.',
        'Miitit siirtyivät Helsinkiin ja Lahteen. Vuonna 2015 Pulina sai Telegram-ryhmän, ja Yle Silminnäkijä kävi kuvaamassa Rollea ja mustikkasoppaa. Samana vuonna rivejä kertyi taas 836 702.',
      ],
      top: [['mustikkasoppa', 152555], ['samiy', 110413], ['fusil', 104733], ['safti', 95307], ['kiizeli', 79836]],
      events: {
        2013: [
          E('tammikuu', 'site', 'Facebook-ryhmä perustetaan.'),
          E('tammikuu', 'meet', 'Assembly Summer -ryhmätilaus.'),
          E('10.7.', 'mod', '23 potkua päivässä.'),
        ],
        2014: [
          E('tammikuu', 'bot', 'Botit palaavat käyttöön.'),
          E('maaliskuu', 'site', 'pulina.fi-osoite uhkaa vanhentua.'),
          E('huhtikuu', 'site', 'pulina.fi uudistuu.'),
          E('17.5.', 'meet', 'Lahti-miitti.', [['01:32', 'gerry_', 'tulkaa huome irkkimiittivalvojaisiin klo 14 alkae :D'], ['09:08', 'gerry_', 'mä koittasin jossai välis nukkuu ehk ennen miittiä :D']]),
          E('5.7.', 'meet', 'Kesämiitti Helsingissä.'),
        ],
        2015: [
          E('1.4.', 'talk', 'Yle Silminnäkijä kuvaa Rollea ja mustikkasoppaa.', [['22:10', 'rolle', 'kiiZeli: Joo Yle Silminnäkijä kävi meillä eilen'], ['22:13', 'kiiZeli', '!muistuta kiiZeli "2015-4-30 16:00" silminnäkijä'], ['22:13', 'kummitus', 'kiiZeli: SINULLE ON LISÄTTY MUISTUTUS. AIKA: 2015-4-30 16:00, AIHE: "silminnäkijä"']]),
          E('toukokuu', 'meet', 'Miitti Tampereen Särkänniemessä.'),
          E('14.7.', 'mod', '19 potkua päivässä.'),
          E('31.7.', 'meet', 'Kesämiitti Helsingissä.', [['10:19', 'fusil', 'no tänää miitti'], ['10:19', 'fusil', '12.30 hki']]),
          E('joulukuu', 'site', 'Pulinan Telegram-ryhmä nousee topiciin.'),
        ],
        2016: [
          E('6.1.', 'meet', 'Loppiaismiitti Helsingin Kaislassa.'),
          E('27.1.', 'meet', 'Miitti Helsingin William K:ssa.'),
        ],
      } },
    { years: '2017–2019', from: 2017, to: 2019, title: 'Tuuliset vuodet, huumeluola-pulina', color: '#ff7a59',
      paras: [
        'Vuonna 2017 rivejä kertyi 289 748, ja ylläpitäjät olivat käytännössä poissa. Potkuja annettiin 44 vuonna 2017, 29 vuonna 2018 ja vain 9 vuonna 2019, vähemmän kuin koskaan ennen tai sen jälkeen.',
        'Kanavasta tuli huumeluola. Päihteistä puhuttiin avoimesti, ja huumeet mainittiin 2 kertaa niin usein kuin alkuvuosina. Moni vanha pulisija koki kanavan ahdistavaksi. Otteissa nimimerkit on vaihdettu.',
      ],
      top: [['mustikkasoppa', 96242], ['drinn', 60174], ['samiy', 46952], ['anicyna', 42251], ['convulvau', 28555]],
      events: {
        2017: [
          E('28.1.', 'meet', 'Oluthenkinen miitti Helsingissä.'),
          E('20.3.', 'talk', 'Yöllä puhutaan yliannostuksesta.', [['02:50', 'pulisija1', 'lyricaa sellanen määrä johon ois voinu kuolla, ja ku se lähti poistuu ni jatkoin stimulanttilinjalla, niin nuo kaksi tekijää aiheutti sen kohtauksen'], ['02:52', 'pulisija1', 'en tajunnu sitä vaa vedin summamutikas ja päälle viel lissää muita aineita.'], ['02:57', 'pulisija1', 'mut joo... tappavia huveja']]),
          E('19.5.', 'meet', 'Miitti Steelfestissä Hyvinkäällä.'),
          E('kesäkuu', 'site', 'Uusi Telegram-ryhmä.'),
        ],
        2018: [
          E('26.1.', 'meet', 'Oluthenkinen minimiitti Helsingin keskustassa.'),
          E('20.3.', 'meet', 'Pikamiitti Helsingin Kaislassa.'),
          E('8.4.', 'talk', 'Kanava täyttää 10 vuotta.', [['08:43', '@mustikkasoppa', 'Nyt ollaan virallisesti 10v. vanhoja puleja <3']]),
          E('21.4.', 'meet', '10-vuotisjuhlamiitti Jyväskylän Sohwissa.', [['01:03', 'convulVAU', 'mut nyt ihan kotona tenuttelen ku kato huomenna PULINAMIITTI'], ['12:46', 'mustikkasoppa', 'uuh illal miitti <3']]),
          E('9.12.', 'talk', 'Tavallinen ilta kanavalla.', [['22:06', 'pulisija2', 'ei sitä bentsokoukkua kannata huvikseen hommata'], ['22:07', 'pulisija3', 'saatanan narkit'], ['22:07', 'pulisija3', 'oispa pilveä'], ['22:07', 'pulisija4', 'oispa bentsoja'], ['22:07', 'pulisija5', 'oispa sieniä']]),
        ],
        2019: [
          E('helmikuu', 'talk', 'Topicissa muistetaan Matti Nykästä ja Olli Lindholmia.'),
          E('10.5.', 'talk', 'Iltapäivän aiheena MDMA ja LSD.', [['15:39', 'pulisija6', 'nuorempana tuli kans vähän viihteiltyä mutta aina oli kyl hyvä meno kun otti mdma:ta tai naksuja'], ['15:41', 'pulisija7', 'ite ainakin tilaan seuraavan kerran testerin ku jotain meinaan vetää ;D'], ['15:43', 'pulisija7', 'LSD vähän sama juttu']]),
          E('19.5.', 'talk', 'Uusi tulija hämmästyy.', [['23:01', 'pulisija8', 'Jestas. Täällähän puhutaan bentsoista ja opioideista.'], ['23:04', 'pulisija9', 'OISPA PIRII']]),
          E('28.12.', 'game', 'Peli-ilta: Command & Conquer: Red Alert 2.', [['01:10', '@rolle', 'kaamos kanssa rökitettiin tossa vika peli'], ['01:10', 'makinen', 'täytyy viritellä RA2 ni pääsee messiin ens kerralla'], ['01:12', 'kaamos', 'mut joo makinen paa ihmees viritellen, vitu hauska peli toi o']]),
          E('30.12.', 'game', 'Peli-ilta: Xonotic.'),
        ],
      } },
    { years: '2020–2022', from: 2020, to: 2022, title: 'COVID-19, koronavuosien aikainen #pulina', color: '#ffc857',
      paras: [
        'Koronakeväänä 2020 ihmiset palasivat koneiden ääreen, ja rivejä kertyi 621 630, 2 kertaa edellisvuotta enemmän. kummitus oppi komennon !corona, jolla sai maakohtaiset tartunnat, kuolemat ja parantuneet. Sitä käytettiin kanavalla 163 kertaa.',
        'Potkuja annettiin taas: 136 vuonna 2020, niistä 69 mustikkasoppan antamia. Huumepuhetta oli silti enemmän kuin koskaan. Vuonna 2022 kanava yhdistettiin Telegramiin ja Discordiin, ja säännöt nostettiin topiciin.',
      ],
      top: [['mustikkasoppa', 269685], ['ivy', 109929], ['sinppa', 89027], ['samiy', 84723], ['lapyo', 55030]],
      events: {
        2020: [
          E('2.1.', 'game', 'Pulinan oma Xonotic-palvelin.'),
          E('12.1.', 'game', 'Piirustuspeli skribbl.io pulinalaisten kesken.', [['01:15', '@rolle', 'mustikkasoppa: Kokkeillaa https://skribbl.io/?qC9aXovPUq'], ['01:15', 'kummitus', 'skribbl.io - Free Multiplayer Drawing & Guessing Game'], ['01:20', '@rolle', 'Ihan paska peli']]),
          E('13.2.', 'mod', 'Uudet säännöt.'),
          E('10.3.', 'bot', 'kummitus oppii komennon !corona.', [['15:45', '@rolle', '!corona finland'], ['15:45', 'kummitus', '😷 40(+7) ⚰️ 0() 👍 39 ☠️ 0.0%']]),
          E('12.3.', 'talk', 'Korona tulee puheenaiheeksi.', [['00:08', '+lapyo', 'oispa korona kaljaa korona'], ['06:00', 'AnReal', 'aamun korona, https://yle.fi/uutiset/3-11252849'], ['06:00', 'kummitus', 'Näyttelijä Tom Hanksilla koronavirustartunta | Yle Uutiset | yle.fi']]),
          E('18.3.', 'game', 'Xonotic-ilta kanavan omalla palvelimella.', [['00:30', 'snowfake', 'nyt korona-etätöissä oma kiljupönttö oiski kova peliliike']]),
          E('1.4.', 'bot', 'Suomessa 1 418 tartuntaa.', [['08:23', 'LM-', '!corona finland'], ['08:23', 'kummitus', 'Infected in Finland: 1,418 (+0), deaths: 17 (+0), recovered: 10, cases per million people: 256']]),
          E('1.5.', 'game', 'Liero-matsi vappuna.'),
          E('syyskuu', 'site', 'Etusivulle reaaliaikaiset päivän aktiivisimmat.'),
        ],
        2021: [
          E('helmikuu', 'site', 'Uusi paitatilaus.'),
          E('5.3.', 'game', 'Tietovisa #pulina.trivia alkaa.', [['22:08', '@mustikkasoppa', 'triviaa varmaan kohta?'], ['22:08', '+convulvau', 'miten tää triviahomma skulaa siis'], ['22:09', '@mustikkasoppa', 'toi trivia on #pulina.trivia kanavalla, siel vastataan suomeksi erilaisiin kysymyksiin :D']]),
          E('6.3.', 'bot', '!corona-komento poistetaan käytöstä.'),
          E('20.5.', 'bot', 'Uusia komentoja: !tee, !äijämatto, !randomjuttu, !hali ja !flippaa.'),
          E('7.8.', 'meet', 'Lahti-miitti Pikku-Veskussa.', [['09:41', 'ivy', 'mut kyl mä miittiin raahaudun'], ['11:12', '@samiy', 'hyvää miittiä teille']]),
        ],
        2022: [
          E('27.2.', 'talk', 'Topicissa otetaan kantaa Venäjän hyökkäykseen Ukrainaan.'),
          E('20.3.', 'site', 'pulina.fi:n koodi GitHubiin.'),
          E('8.4.', 'talk', 'Kanava täyttää 14 vuotta.'),
          E('16.4.', 'site', 'Silta Telegramiin ja Discordiin.', [['16:16', '@rolle', 'Mun on pakko koittaa tota telegram-siltaa :D MUTTA laitan omaan ryhmäänsä sen'], ['16:39', 'gatewaybot', '(discord) <Rolle> IRC-kanavalta Discordissa tämä viesti']]),
          E('1.12.', 'mod', 'Säännöt topiciin.'),
        ],
      } },
    { years: '2023–', from: 2023, to: 2026, title: 'Säännöt ja uusi alku', color: '#3bf0e4',
      paras: [
        'Joulukuussa 2023 otettiin uusi tatsi moderointiin. Puheoikeuden sai pyytämällä opeilta, joiksi tulivat Setsu ja t0iska. Rollen mukaan kanava oli muutamassa päivässä viihtyisämpi kuin edellisen 5 vuoden aikana yhteensä.',
        'Keväällä 2024 kanava avattiin taas kaikille, ja huumepuhe putosi alkuvuosien tasolle. kummituksesta tuli tekoäly. Vuonna 2026 kanavaa alkoi valvoa tekoälyllä toimiva Portsari, ja kanavalle rakennetaan omaa Pulina-appia.',
      ],
      top: [['mustikkasoppa', 150754], ['samiy', 98778], ['snowfake', 85680], ['scaha', 55171], ['setsu', 54634]],
      events: {
        2023: [
          E('8.4.', 'talk', 'Kanava täyttää 15 vuotta.'),
          E('10.12.', 'mod', 'Kanava moderoiduksi, voicet pyytämällä.', [['19:06', '@rolle', 'Näin tämä on ollut muutaman päivän aikana viihtyisämpi kuin viimeisen 5 vuoden aikana yhteensä'], ['19:11', '@rolle', 'Setsu saa päättää jos ei voicehommat toimikaan, ei muuta kun -m sitten vaan siinä kohtaa'], ['19:12', '@Setsu', 'apua paineet :D']]),
        ],
        2024: [
          E('18.3.', 'mod', 'Kanava avataan taas kaikille.', [['00:37', '+Kietu', 'no mie kirjottelin ilman voicea'], ['00:39', '@rolle', 'Autovoice on pop']]),
          E('17.10.', 'bot', 'kummituksesta ja Orvokista tulee tekoälyjä.', [['00:00', '@t0iska', 'hyvä kummitus!'], ['00:00', '+kummitus', 't0iska: Hyvä kummitus! Kiitos kehuista! Jos on jotain erityistä mielessäsi, olen täällä auttamassa!'], ['00:00', '@rolle', 'kummitus: Sun piti ottaa kehu vastaan, t0iska koitti kehua sua']]),
        ],
        2025: [
          E('3.7.', 'bot', 'kummitus oppii kanavan historian.', [['00:00', '+Nillidan', 'kummitus: oletko sovinistisika'], ['00:00', '+kummitus', 'Nillidan: Haha, enpä ole sovinistisika, vaan yritän vaan käyttää kieltä niin kuin se luonnostaan kulkee!']]),
          E('3.12.', 'bot', 'kummitus alkaa muistaa asioita itse.'),
          E('26.12.', 'mod', 'Spämmiaalto, kanava taas vain voicellisille.', [['01:32', 'tikar', 'ryan: what spam'], ['01:32', 'lagoonzil', 'ryan: what spam'], ['01:32', 'weedmaste', 'ryan: what spam'], ['01:32', 'rock', 'ryan: there is no spam Desecrator']]),
        ],
        2026: [
          E('11.11.', 'site', 'Pulina-app rakenteilla.'),
          E('12.11.', 'mod', 'Säännöt uudistetaan, mukaan tulee osio opeille.'),
          E('13.11.', 'mod', 'Portsari-järjestyksenvalvojabotti luodaan tehokkaampaa moderointia varten.', [['00:40', '@rolle', 'Huom opit t0iska mann mustikkasoppa, nimimerkki Portsari on moderoijabotti, joka toimii vähän älykkäämmällä AI:lla kuin kummitus'], ['12:02', '+BuddhaD', 'kummitus: alatko rähisemään ton Portsarin kanssa?'], ['12:02', '@kummitus', 'BuddhaD: Portsarilla on niin huono huumorintaju, ettei se edes huomaisi jos alkaisin sille aukomaan päätäni.']]),
        ],
      } },
  ];

  const WD = {"start":"2008-04-07","weeks":[34039,1605,0,3731,25117,12964,11988,7196,6226,7946,8297,6739,9905,8544,11759,11174,17940,15550,18978,20762,16388,17678,21748,15332,30300,33696,39245,24749,30718,39205,21052,20944,21082,21257,20619,18413,35962,32915,33045,28808,24602,19299,20472,19932,24358,33572,30420,26561,36238,30825,34316,27202,22296,22503,27235,32408,26099,23566,21532,19159,23963,23979,32969,51734,29017,25111,32889,22354,24116,29792,32806,29949,29103,32208,22099,22858,23273,22166,25778,26154,24349,30690,32871,21289,38389,25409,36584,24415,30601,34805,33927,39790,31567,27200,24385,25480,22031,27052,25824,32486,28657,26088,17622,22048,26147,19769,20575,20916,17105,17311,17865,27859,21337,25870,24893,24413,22793,27832,27405,20442,27328,23806,32511,26246,27409,29928,23551,33914,26168,32374,26870,41038,31682,24876,27639,20817,24379,27033,24955,30484,22252,24063,23288,29058,29796,25875,30420,26027,28507,19788,23292,32232,25815,25732,26184,21471,28843,28701,37190,39790,35744,26381,24566,27219,23424,28606,27349,29155,27402,22653,21264,21288,26624,26718,27311,24060,22306,23697,20175,18164,15536,20152,25969,25694,18539,19336,14064,14712,12317,16615,17767,21614,28932,22051,23815,18648,27104,22314,21081,18175,13556,14418,23892,20890,32185,21747,18678,32017,29656,24189,21946,16993,16520,19425,19949,17481,25417,15592,16515,16424,29719,27570,30262,23350,15567,15742,14557,15044,16345,10916,14430,18550,19360,21394,30416,24595,23043,26657,18539,18297,12934,12925,15244,13528,18188,18379,13311,13587,21274,14997,22626,15700,14309,11521,12099,15262,12556,9017,11009,9127,11466,10764,6671,10517,5918,8924,12676,8625,10493,4815,8370,6196,10226,9861,12821,10768,11172,10485,3581,9555,7729,4772,2900,0,0,0,2196,3548,5437,4213,4910,6888,6307,10667,11456,7216,10778,11876,8980,6324,12053,13105,9245,5422,5454,6009,5656,6587,4876,5416,6257,8583,7964,7634,6090,9870,15701,14630,12934,14987,13547,13165,12620,11419,9519,8510,11160,9895,11313,8834,8565,7730,12873,8755,9755,9495,9023,9307,9793,15813,14391,16558,12076,10871,12346,11673,11312,11297,12555,10806,13483,13343,10290,8557,11351,7408,12214,18665,14937,10143,9386,9970,10747,12843,19758,24769,23496,21471,20401,20765,18044,11848,14170,11887,12040,11565,10889,9387,14628,12930,22334,18012,12688,15818,14916,14999,16359,17843,18175,21686,30740,21152,12050,21486,21160,20121,17312,18033,19821,16236,21211,20580,14614,14948,15907,13376,16777,15554,15552,14233,19109,18107,16664,15586,13672,12577,12274,19890,14249,11398,12230,14323,11729,10632,10368,10670,12552,9868,9272,11075,12979,9778,7988,6783,8012,9779,8302,9970,7814,7221,5748,6371,7848,7119,5646,6782,6627,8300,8396,7009,8820,6686,6770,7225,6342,5738,6973,5967,6095,8390,4548,5276,7091,6908,6124,7656,5070,8675,5037,5372,6273,5881,6229,7101,5144,5458,6496,5753,5812,4532,4443,3852,2715,2169,3251,3563,5303,6206,5616,5641,5429,7055,6197,8121,5991,6507,6352,5182,5438,5115,2863,5058,4215,5103,6456,5094,3634,4527,3815,5095,3966,4430,4709,3013,4310,4281,3602,6172,4734,4439,2109,3747,2652,2608,5846,4324,3734,3951,4344,3933,2958,2254,3901,5146,3557,4958,3292,3347,4539,3456,3720,3810,4125,3615,4766,4955,3259,4887,5952,6579,5816,5739,6281,5537,4876,5623,5597,4318,4421,4595,5512,4092,5608,6638,6770,5814,5490,5171,4192,3672,2298,2761,3819,2996,3398,4032,4448,4922,6222,5822,7034,8410,5830,5600,6337,3733,3528,4736,7507,7702,7264,5524,5712,8772,6379,6095,5632,5663,6696,6191,4395,6653,7455,6798,6310,8032,6649,4696,7485,9729,9909,9635,12992,10569,9867,15259,15998,11405,11242,11295,6981,14765,17692,20917,9381,8762,8799,11338,4540,6987,7575,7207,10373,13844,7802,8243,9432,8506,11591,11915,16923,20897,11220,10981,10143,6441,7393,10515,9626,11631,16524,11235,13430,18398,15719,15331,13003,15318,14615,14323,12688,13453,14211,9836,7260,9075,12707,17513,12416,13881,8006,11713,15788,12973,13537,12777,10152,11036,7644,8329,8539,9755,7709,15862,24190,18170,13877,13186,11928,11090,9587,8699,9136,8198,9075,8123,8096,8279,9935,16044,11717,12613,10818,10669,12205,11538,8487,8430,6748,6715,6143,8402,9767,8235,7905,9580,8627,8026,6908,10810,12635,10945,10309,10383,15114,11439,13155,10877,9274,7421,7322,4773,4572,5191,5777,6776,6341,5125,6885,6053,7281,5828,4942,5692,5948,6947,5031,4714,5854,4163,5016,5961,5747,10880,8075,7506,5328,7015,6933,5745,6579,5624,11884,9259,11637,6694,9393,7825,9117,9273,6347,5927,4465,3794,4658,3499,4635,5011,5280,8636,6901,11225,7394,6629,8640,5569,5924,7806,7482,4420,5639,4745,7464,5831,6960,5400,5372,6065,7753,5830,5357,4585,8533,9352,7180,7283,10455,9055,8171,13640,10608,5064,5752,8844,10344,7715,7609,10545,9894,6161,8760,7771,10254,9080,5466,3757,6538,4318,3544,3119,2570,6728,6339,4395,8575,8251,6310,7409,5591,5924,5277,5233,3456,3878,4886,4023,3834,6191,3473,3251,3915,4475,5010,3177,2906,4183,3006,4007,4570,6203,6059,5919,7796,4271,2918,1864,1717,2385,2866,3959,4057,4627,5072,2804,3523,2572,2954,3713,3002,2090,2015,1744,1327,1619,2752,2037,1974,2975,2181,1819,2508,2179,3470,4823,2555,3985,2877,2303,2833,3360,3734,3656,3515,4865,4314,3547,3258,4043,4255,4048,3551,3775,4148,5822,4173,6767,5281,4793,3985,4869,5217,6800,4678,4455,8084,5473,6093,6832,6230,6335,6450,5896,7719,5725,10843,11656,14440,12082,13968,10099,8107,6362,5802,3850,5243,5226,3952,3517,2985,4206,5035,5703,5547,6730,5092,4755,4861,3905,4741,5084,2750,4433,4552,5605,5067,4730,6003,6204,6263,4538,9706]};
  const root = document.documentElement;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // In the console font a space is a whole character wide, so digit groups get a narrow gap
  const tight = n => fmt(n).replace(/\u00a0/g, '<span class="ts"></span>');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Weeks since Monday 7.4.2008
  const DAY = 864e5, start = new Date(WD.start + 'T00:00:00Z');
  const MONTHS = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'];
  const W = WD.weeks.map((n, i) => { const d = new Date(start.getTime() + i * 7 * DAY), y = d.getUTCFullYear(); return { i, n, y, m: d.getUTCMonth(), day: d.getUTCDate(), woy: Math.min(52, Math.floor((d - Date.UTC(y, 0, 1)) / DAY / 7)) }; });
  const cum = []; W.reduce((a, w) => (cum.push(a), a + w.n), 0);
  const TOTAL = cum[cum.length - 1] + W[W.length - 1].n;
  const maxWeek = Math.max(...W.map(w => w.n));
  const weekAt = v => { let lo = 0, hi = W.length - 1; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (cum[m] <= v) lo = m; else hi = m - 1; } return lo; };
  const eraOf = y => DATA.find(e => y >= e.from && y <= e.to);
  DATA.forEach(e => { const a = W.findIndex(w => w.y >= e.from), b = W.findIndex(w => w.y > e.to); e.start = cum[a]; e.end = b < 0 ? TOTAL : cum[b]; });

  // Nick colours: spaced around the colour wheel in order of first appearance
  const hues = new Map();
  const colorOf = nick => { const k = nick.replace(/^[@+]/, '').toLowerCase(); if (!hues.has(k)) hues.set(k, Math.round((hues.size * 137.508 + 340) % 360)); return `hsl(${hues.get(k)} 85% 72%)`; };
  const NICKS = ['mustikkasoppa', 'kummitu', 'rolle', 'fusil', 'samiy', 'helyes', 'aswang', 'mynta', 'speadfreak', 'firewalker', 'gerrye', 'kiizeli', 'safti', 'nefastos', 'pirta', 'drinn', 'convulvau', 'nicd', 'setsu', 't0iska', 'portsari', 'orvoki'];
  const nickRe = new RegExp(`(^|[^\\wåäö#])((${NICKS.join('|')})[\\wåäö:]*)`, 'gi');
  const rich = text => esc(text)
    .replace(/(^|[^\d.,\wåäö#-])(\d[\d ]*(?:,\d+)?(?:–\d+)?(?: %)?)(?![\d.]*\d|-)/g, (all, pre, num) => /^(19|20)\d\d$/.test(num) ? all : `${pre}<b class="num">${num}</b>`)
    .replace(nickRe, (all, pre, word, stem) => /web$/i.test(word) ? all : `${pre}<span class="nick" style="--c:${colorOf(stem === 'orvoki' ? 'orvokki' : stem === 'kummitu' ? 'kummitus' : stem)}">${word}</span>`)
    .replace(/(^|[\s(])(![a-zåäö]+)/g, '$1<code class="cmd">$2</code>');

  const ICON = {
    meet: '<path d="M12 21s6.5-6.300 6.500-11a6.500 6.500 0 0 0-13 0c0 4.700 6.500 11 6.500 11z"/><circle cx="12" cy="10" r="2.400"/>',
    game: '<path d="M7 9h10a4 4 0 0 1 3.900 4.800l-.6 2.600a2.300 2.300 0 0 1-3.900 1.100L14.800 16H9.200l-1.600 1.500a2.300 2.300 0 0 1-3.900-1.100l-.6-2.600A4 4 0 0 1 7 9z"/><path d="M8 11.500v3M6.500 13h3"/>',
    bot: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 10l3 2.500-3 2.500M13 15h3"/>',
    mod: '<path d="M12 3l7 2.700v5.300c0 4.600-3 7.800-7 9.500-4-1.700-7-4.900-7-9.500V5.700z"/>',
    site: '<circle cx="12" cy="12" r="8.500"/><path d="M3.500 12h17M12 3.500c2.600 2.400 2.600 14.600 0 17M12 3.500c-2.600 2.400-2.600 14.600 0 17"/>',
    record: '<path d="M5 20V11M10 20V5M15 20v-7M20 20V8"/>',
    talk: '<path d="M5 6h14a1.500 1.500 0 0 1 1.500 1.500v8A1.500 1.500 0 0 1 19 17h-7l-4.500 3.500V17H5a1.500 1.500 0 0 1-1.500-1.500v-8A1.500 1.500 0 0 1 5 6z"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  };
  const BARS = ['hsl(137 57% 70%)', 'hsl(137 57% 60%)', 'hsl(137 57% 50%)', 'hsl(137 57% 40%)', 'hsl(137 57% 30%)'];
  const lineHTML = ([t, n, x]) => { const mode = /^[@+]/.test(n) ? n[0] : '', name = n.replace(/^[@+]/, ''); return `<li><time>${t}</time><b style="color:${colorOf(name)}">&lt;${mode}${esc(name)}&gt;</b><span>${esc(x).replace(/(^|\s)(![a-zåäö]+)/g, '$1<code class="cmd">$2</code>')}</span></li>`; };

  // "8.4." -> "8. huhtikuuta, 2008", "6.–8.4." -> "6.–8. huhtikuuta, 2012", "heinäkuu" -> "Heinäkuu 2008"
  const MONTHS_OF = ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'];
  const whenOf = (d, y) => {
    const m = d.match(/^(\d+)\.(?:–(\d+)\.)?(\d+)\.$/);
    if (!m) return `${d[0].toUpperCase() + d.slice(1)} ${y}`;
    return `${m[1]}.${m[2] ? `–${m[2]}.` : ''} ${MONTHS_OF[m[3] - 1]}, ${y}`;
  };
  const eraHTML = e => {
    let rows = `<div class="row head"><div class="label"></div><div class="body"><h2><span class="chomp" aria-hidden="true"><i></i></span>${esc(e.title)}</h2></div></div><div class="row intro"><div class="label"></div><div class="body">${e.paras.map(p => `<p>${rich(p)}</p>`).join('')}</div></div>`;
    for (let y = e.from; y <= e.to; y++) {
      const i = y - 2008;
      rows += `<div class="row year"><div class="label">${y}</div><div class="body"><b class="num">${tight(LINES[i])}</b> riviä · <b class="num">${tight(TALKERS[i])}</b> irkkaajaa · <b class="num">${KICKS[i]}</b> potkua</div></div>`;
      (e.events[y] || []).forEach(ev => {
        const [name, color] = KIND[ev.kind];
        rows += `<div class="row event" style="--kind:${color}"><div class="label"></div><div class="body">
          <div class="kind"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[ev.kind]}</svg>${whenOf(ev.date, y)} - ${name}</div>
          <p class="text">${rich(ev.text)}</p>
          ${ev.lines ? `<figure class="log"><ol>${ev.lines.map(lineHTML).join('')}</ol></figure>` : ''}</div></div>`;
      });
    }
    rows += `<div class="row end"><div class="label"></div><div class="body"><div class="era-top"><h3>Kovimmat pulisijat ${e.years}</h3><ol>${e.top.map(([n, c], k) =>
      `<li><b>${esc(n)}</b><span class="value">${fmt(c)}</span><span class="bar"><span class="progress" style="width:${(c / e.top[0][1] * 100).toFixed(1)}%;background:${BARS[k]}"></span></span></li>`).join('')}</ol></div></div></div>`;
    return `<section class="era" style="--era:${e.color}" data-from="${e.start}" data-to="${e.end}">${rows}</section>`;
  };
  timeline.innerHTML = DATA.map(eraHTML).join('');

  // Week grid: a row per year, a tile per week
  const eventWeeks = new Map();
  DATA.forEach(e => Object.entries(e.events).forEach(([y, list]) => list.forEach(ev => {
    const m = ev.date.match(/^(\d+)\.(?:–\d+\.)?(\d+)\.$/); if (!m) return;
    const i = Math.floor((Date.UTC(+y, +m[2] - 1, +m[1]) - start) / DAY / 7);
    if (i >= 0 && i < W.length && !eventWeeks.has(i)) eventWeeks.set(i, { text: ev.text, color: KIND[ev.kind][1] });
  })));
  document.getElementById('weeks').outerHTML = (() => {
    const level = n => .3 + .175 * Math.min(4, Math.floor(Math.sqrt(n / maxWeek) * 5));
    const years = Array.from({ length: W[W.length - 1].y - 2007 }, (_, r) => 2008 + r);
    // A year has 52 or 53 Mondays; one column each, so every full year fills its strip
    const mondays = y => { let d = Date.UTC(y, 11, 31); while (new Date(d).getUTCDay() !== 1) { d -= DAY; } return Math.floor((d - Date.UTC(y, 0, 1)) / DAY / 7) + 1; };
    return `<div class="weeks" role="img" aria-label="Kanavan rivit viikoittain">${years.map(y => `<div class="yr" data-y="${y}"><span>${y}</span><div class="wk" style="grid-template-columns:repeat(${mondays(y)},minmax(0,1fr))">${
      W.filter(w => w.y === y).map(w => `<i data-i="${w.i}" style="grid-column:${w.woy + 1};--c:${eraOf(y).color};--a:${level(w.n).toFixed(2)}"></i>`).join('')}</div></div>`).join('')}</div>`;
  })();

  // Instant tooltip
  const tip = document.getElementById('tip');
  const grid = document.querySelector('.weeks');
  grid.addEventListener('pointerover', e => {
    const cell = e.target.closest('i[data-i]'); if (!cell) return;
    const w = W[+cell.dataset.i], ev = eventWeeks.get(w.i);
    tip.innerHTML = `<span>viikko ${w.woy + 1} / ${w.y}, alkaen ${w.day}.${w.m + 1}.</span>${w.n ? `<b>${fmt(w.n)} riviä</b>` : ''}${ev ? `<span style="color:${ev.color};font-family:var(--sans);font-size:14px">${esc(ev.text)}</span>` : ''}`;
    tip.hidden = false;
    const r = cell.getBoundingClientRect(), t = tip.getBoundingClientRect();
    tip.style.transform = `translate(${Math.round(Math.max(8, Math.min(innerWidth - t.width - 8, r.left + r.width / 2 - t.width / 2)))}px, ${Math.round(r.top - t.height - 10)}px)`;
  });
  grid.addEventListener('pointerout', () => { tip.hidden = true; });
  addEventListener('scroll', () => { tip.hidden = true; }, { passive: true });

  function odometer(el, digits = 8) {
    el.classList.add('odometer');
    el.innerHTML = Array.from({ length: digits }, (_, i) => `${i > 0 && (digits - i) % 3 === 0 ? `<span class="gap" data-before="${i}"></span>` : ''}<span class="slot"><span class="strip">${[...'0123456789'].map(d => `<span>${d}</span>`).join('')}</span></span>`).join('');
    const slots = [...el.querySelectorAll('.slot')], gaps = [...el.querySelectorAll('.gap')];
    let last = -1;
    return v => {
      v = Math.max(0, Math.min(TOTAL, Math.round(v)));
      if (v === last) return;
      last = v;
      const s = String(v).padStart(digits, '0');
      let lead = true;
      slots.forEach((slot, i) => { if (s[i] !== '0' || i === digits - 1) lead = false; slot.classList.toggle('lead', lead); slot.firstChild.style.transform = `translateY(-${s[i]}em)`; });
      gaps.forEach(g => g.classList.toggle('lead', slots[+g.dataset.before - 1].classList.contains('lead')));
      el.setAttribute('aria-label', `${fmt(v)} riviä`);
    };
  }
  function roller(el, length = 9) {
    el.classList.add('odometer');
    el.innerHTML = Array.from({ length }, () => `<span class="slot"><span class="strip">${[...'0123456789'].map(d => `<span>${d}</span>`).join('')}</span></span><span class="sep" hidden></span>`).join('');
    const slots = [...el.querySelectorAll('.slot')], seps = [...el.querySelectorAll('.sep')];
    return text => {
      el.setAttribute('aria-label', text);
      slots.forEach((slot, i) => {
        const ch = text[i], digit = ch >= '0' && ch <= '9';
        slot.hidden = !digit; seps[i].hidden = digit || ch === undefined;
        if (digit) slot.firstChild.style.transform = `translateY(-${ch}em)`;
        else if (ch !== undefined) seps[i].textContent = ch;
      });
    };
  }

  const set = odometer(document.querySelector('.odo')), setYears = roller(document.querySelector('.p-years'));
  const eras = [...timeline.querySelectorAll('.era')], cells = [...document.querySelectorAll('.wk i')], labels = [...document.querySelectorAll('.yr')];
  const eraEl = document.querySelector('.p-era'), monthEl = document.querySelector('.p-month'), prog = document.querySelector('.p-progress span');

  // Line colours: solid through each era, blending around every boundary
  function paintLine() {
    const BLEND = 140, stops = [], off = parseFloat(getComputedStyle(timeline, '::before').top) || 24;
    eras.forEach((el, i) => {
      const c = DATA[i].color, top = el.offsetTop - off, end = top + el.offsetHeight;
      stops.push(`${c} ${Math.round(i ? top + BLEND : 0)}px`, `${c} ${Math.round(i < eras.length - 1 ? end - BLEND : end)}px`);
    });
    timeline.style.setProperty('--stops', `linear-gradient(${stops.join(', ')})`);
  }
  // The stuck era ball eats the event dots that pass it; scrolling back up, a ghost brings them back
  const heads = [...timeline.querySelectorAll('.head')], events = [...timeline.querySelectorAll('.event')];
  let dotsY = [], sticky = false, stickTop = 0, chompOn = false, lastY = scrollY, chewTimer = null, activeHead = null;
  function measureDots() {
    dotsY = events.map(e => e.getBoundingClientRect().top + scrollY + 24);
    const bar = matchMedia('(max-width: 1100px)').matches ? document.querySelector('.panel').offsetHeight : 0;
    root.style.setProperty('--bar-h', `${bar}px`);
    sticky = getComputedStyle(heads[0]).position === 'sticky';
    stickTop = parseFloat(getComputedStyle(heads[0]).top) || 0;
    chompOn = !still && sticky;
  }
  // Ghosts rise from the bottom of the screen and chase the ball while scrolling back up
  const GHOST = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V11a8 8 0 0 1 16 0v11l-2.7-2-2.6 2-2.7-2-2.6 2-2.7-2z"/><circle cx="9" cy="11" r="2.4" fill="#fff"/><circle cx="15" cy="11" r="2.4" fill="#fff"/><circle cx="9" cy="10" r="1.1" fill="#1b2a6b"/><circle cx="15" cy="10" r="1.1" fill="#1b2a6b"/></svg>';
  const GHOST_COLORS = ['#ff5f6d', '#ff9ad5', '#5ce1e6', '#ffb454'];
  const pack = document.createElement('div');
  pack.className = 'ghosts';
  pack.setAttribute('aria-hidden', 'true');
  pack.innerHTML = GHOST_COLORS.map(c => `<span style="color:${c}">${GHOST}</span>`).join('');
  timeline.append(pack);
  const ghosts = [...pack.children];
  let homeTimer = null;
  function ghostsHome() {
    ghosts.forEach((g, k) => { g.style.transitionDelay = '0s'; g.style.transform = `translateY(${innerHeight + 60 + k * 40}px)`; });
  }
  function ghostsChase(lineX, y) {
    pack.style.left = `${lineX}px`;
    pack.classList.add('chase');
    ghosts.forEach((g, k) => { g.style.transitionDelay = `${k * .12}s`; g.style.transform = `translateY(${y + 48 + k * 40}px)`; });
    clearTimeout(homeTimer);
    homeTimer = setTimeout(ghostsHome, 1400);
  }
  ghostsHome();

  // A short blip per eaten dot. Browsers allow sound only after a click, tap or key press on the page
  let audio = null, lastBlip = 0, high = false;
  const wake = () => {
    if (!audio) { try { audio = new AudioContext(); } catch (e) { return; } }
    if (audio.state === 'suspended') audio.resume();
  };
  ['pointerdown', 'pointerup', 'touchend', 'keydown'].forEach(t => addEventListener(t, wake, { passive: true }));
  function blip() {
    if (!audio || audio.state !== 'running') return;
    const now = audio.currentTime;
    if (now - lastBlip < .07) return;
    lastBlip = now; high = !high;
    const o = audio.createOscillator(), g = audio.createGain(), f = high ? 520 : 380;
    o.type = 'square';
    o.frequency.setValueAtTime(f, now); o.frequency.exponentialRampToValueAtTime(f * .55, now + .09);
    g.gain.setValueAtTime(.0001, now); g.gain.exponentialRampToValueAtTime(.3, now + .01); g.gain.exponentialRampToValueAtTime(.0001, now + .12);
    o.connect(g).connect(audio.destination); o.start(now); o.stop(now + .13);
  }

  function chomp() {
    const tops = heads.map(h => h.getBoundingClientRect().top);
    heads.forEach((h, k) => { const stuck = sticky && tops[k] <= stickTop + 1 && tops[k] > stickTop - h.offsetHeight; if (h.classList.contains('stuck') !== stuck) h.classList.toggle('stuck', stuck); });
    if (!chompOn) { events.forEach(e => e.classList.remove('eaten')); return; }
    const head = heads.filter((h, k) => tops[k] <= stickTop + 1).pop() || heads[0];
    const r = head.querySelector('.chomp').getBoundingClientRect();
    const dy = scrollY - lastY; lastY = scrollY;
    let ate = false;
    // Eaten as soon as a dot touches the ball; back only once it is well below, where the ghosts are
    const eatAt = r.bottom + scrollY, backAt = eatAt + 90;
    events.forEach((e, k) => { const was = e.classList.contains('eaten'), eaten = dotsY[k] < eatAt || (was && dotsY[k] <= backAt); if (was !== eaten) { e.classList.toggle('eaten', eaten); ate = ate || eaten; } });
    if (ate && dy > 0) blip();
    if (dy < 0) { const t = timeline.getBoundingClientRect(); ghostsChase(t.left + parseFloat(getComputedStyle(timeline, '::before').left), r.top + r.height / 2); }
    else if (dy > 0) { clearTimeout(homeTimer); ghostsHome(); }
    if (activeHead && activeHead !== head) activeHead.classList.remove('chewing', 'up');
    activeHead = head;
    if (!dy) return;
    head.classList.add('chewing'); head.classList.toggle('up', dy < 0);
    clearTimeout(chewTimer);
    chewTimer = setTimeout(() => head.classList.remove('chewing'), 180);
  }
  paintLine();
  measureDots();
  const resized = new ResizeObserver(() => { paintLine(); measureDots(); });
  resized.observe(timeline);
  resized.observe(document.querySelector('.panel'));

  // Watercolour wash: slow noise in the era's colour over the navy ground, 12 frames a second, paused when hidden
  const wash = (() => {
    const canvas = document.getElementById('wash');
    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, antialias: false });
    if (!gl) { root.classList.add('no-webgl'); return null; }
    const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const fs = `precision highp float;
uniform vec2 res;uniform float t;uniform vec3 tint;uniform vec3 base;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int k=0;k<4;k++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/res;vec2 p=uv*vec2(res.x/res.y,1.)*1.6;
  vec2 q=vec2(fbm(p+vec2(0.,t*.03)),fbm(p+vec2(5.2,1.3)-t*.025));
  vec2 r=vec2(fbm(p+2.*q+vec2(1.7,9.2)+t*.02),fbm(p+2.*q+vec2(8.3,2.8)-t*.018));
  float d=fbm(p+2.4*r);
  float pool=smoothstep(.42,.78,d);
  float edge=(1.-smoothstep(.0,.035,abs(d-.6)))*.55;
  vec3 c=base+tint*(pool*.22+edge*.10);
  c=mix(c,base,smoothstep(.3,1.15,length(uv-vec2(.75,.8))));
  gl_FragColor=vec4(c,1.);
}`;
    const sh = (type, src) => { const x = gl.createShader(type); gl.shaderSource(x, src); gl.compileShader(x); return x; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { root.classList.add('no-webgl'); return null; }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = name => gl.getUniformLocation(prog, name);
    const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
    gl.uniform3fv(U('base'), rgb('#060d21'));
    const SCALE = .25;
    const size = () => { canvas.width = Math.round(innerWidth * SCALE); canvas.height = Math.round(innerHeight * SCALE); gl.viewport(0, 0, canvas.width, canvas.height); gl.uniform2f(U('res'), canvas.width, canvas.height); };
    size();
    let cur = rgb(DATA[0].color), target = cur.slice(), last = 0;
    const t0 = performance.now();
    const frame = now => {
      if (document.hidden) return;
      if (now - last < 80) { requestAnimationFrame(frame); return; }
      last = now;
      if (canvas.width !== Math.round(innerWidth * SCALE) || canvas.height !== Math.round(innerHeight * SCALE)) size();
      cur = cur.map((c, i) => c + (target[i] - c) * .15);
      gl.uniform3fv(U('tint'), cur);
      gl.uniform1f(U('t'), still ? 0 : (now - t0) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!still || Math.abs(cur[0] - target[0]) + Math.abs(cur[1] - target[1]) + Math.abs(cur[2] - target[2]) > .002) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) requestAnimationFrame(frame); });
    return { tint: hex => { target = rgb(hex); if (still) requestAnimationFrame(frame); } };
  })();

  let shownEra = null, shown = -1;
  const OVERVIEW = -2, last = W[W.length - 1];

  // Before the timeline starts the panel shows the whole history; reading then counts it up from the start
  function overview() {
    if (shown === OVERVIEW) return;
    shown = OVERVIEW; shownEra = null;
    set(TOTAL); setYears(`${W[0].y}–${last.y}`);
    monthEl.textContent = `${MONTHS[W[0].m]} ${W[0].y} – ${MONTHS[last.m]} ${last.y}`;
    eraEl.textContent = 'Koko historia';
    prog.style.width = '100%';
    root.style.setProperty('--glow', DATA[0].color); if (wash) wash.tint(DATA[0].color);
    cells.forEach(c => c.classList.remove('future', 'now'));
    labels.forEach(t => t.classList.remove('on'));
  }

  function update() {
    const mid = innerHeight * .45;
    let v = 0;
    if (eras[0].getBoundingClientRect().top > mid) { overview(); return; }
    const era = eras.find(s => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
    if (era) { const r = era.getBoundingClientRect(); v = +era.dataset.from + (mid - r.top) / r.height * (+era.dataset.to - +era.dataset.from); }
    else { const above = eras.filter(s => s.getBoundingClientRect().top <= mid); if (above.length) v = +above[above.length - 1].dataset.to - 1; }
    const i = weekAt(v), w = W[i], e = eraOf(w.y);
    set(v);
    prog.style.width = (v / TOTAL * 100).toFixed(2) + '%';
    if (e !== shownEra) {
      shownEra = e; setYears(e.years); eraEl.textContent = e.title; root.style.setProperty('--glow', e.color); if (wash) wash.tint(e.color);
      eraEl.classList.remove('swap'); void eraEl.offsetWidth; eraEl.classList.add('swap');
    }
    if (i === shown) return;
    const lo = Math.min(i, shown < 0 ? 0 : shown), hi = Math.max(i, shown < 0 ? cells.length - 1 : shown);
    for (let k = lo; k <= hi; k++) { cells[k].classList.toggle('future', k > i); cells[k].classList.toggle('now', k === i); }
    shown = i;
    monthEl.textContent = `${MONTHS[w.m]} ${w.y}`;
    labels.forEach(t => t.classList.toggle('on', +t.dataset.y === w.y));
  }
  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); chomp(); }); } }, { passive: true });
  addEventListener('resize', update);
  update();
  chomp();
  document.getElementById('story').classList.remove('is-loading');
})();
