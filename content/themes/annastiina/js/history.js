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
    star: ['Kohokohta', '#ffd166'], memory: ['Muistamme', '#cbd5e1'],
  };
  const LINES = [718541, 1446103, 1356364, 1284393, 1047632, 479020, 536675, 836702, 563801, 289748, 226741, 311037, 621630, 568580, 399882, 371790, 255775, 189595, 287661];
  const TALKERS = [487, 867, 1160, 884, 928, 717, 737, 912, 745, 469, 378, 344, 414, 461, 478, 651, 223, 480, 443];
  const KICKS = [194, 261, 284, 111, 78, 127, 112, 132, 90, 44, 29, 9, 136, 58, 27, 153, 53, 32, 38];
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
          E('9.4.', 'mod', 'Haamu-botti jakaa kanavan ensimmäiset säännöt: pulise mahdollisimman paljon, älä valita muiden pulinoista, floodata saa mutta ei loputtomiin, ja pidä hauskaa.', [['12:40', 'Haamu', '1) Pulise mistä haluat ja niin paljon kuin haluat (mahdollisimman paljon).'], ['12:40', 'Haamu', '2) Älä valita muiden pulinoista, esim. siitä miten tai mistä muut pulisee. Voit pulista vaikka sammakon kieltä, kunhan puliset.'], ['12:40', 'Haamu', '5) Pidä hauskaa :)']]),
          E('9.4.', 'mod', 'Ensimmäinen op-sota. Faapio floodaa tissihymiöitä ja saa kickit kolmelta opilta. rsl antaa hänelle opit takaisin, ja Faapio poistaa muiden opit ja bannaa Q-tion, elaien ja Lantzin.', [['19:45', 'Faapio', 'LISÄÄ TISSEJÄÄÄÄÄ'], ['19:46', 'Lantzi', 'toi on ihan vitun ärsyttäväät'], ['19:48', 'elaie', 'Jäikö kellekkään epäselväks miksi potkin?'], ['19:49', 'Faapio', 'saatanan tosikot lähtekää vittuun']]),
          E('12.–13.4.', 'talk', 'Topiciin päätyy Faapion kysymys "onx rolle emo?". Seuraavana päivänä rolle vastaa topicissa: "rolle on emo".'),
          E('11.5.', 'mod', 'Topic-sota: Gocom pitää topicissa joukkoäänestyksen Tingan bannaamisesta, whitem vastaa "bannitaanko Gocom nyt?". Topic vaihtuu 17 kertaa kolmessa minuutissa.'),
          E('20.–22.6.', 'talk', 'Juhannuksen veikkaus topicissa: "Monta kuolee juhannuksena?" whitem veikkaa 13, Tukkapoika 666 ja rolle 22. rolle päivittää topiciin uutisen lukemat: ensin 5, lopulta 9.'),
          E('2.7.', 'star', 'rolle ja mustikkasoppa menevät naimisiin. WildLily ehtii kertoa uutisen topicissa ennen rollea.', [['15:08', 'WildLily', 'heh, mä spoilasin... :O'], ['15:18', 'rolle', 'Menin tänään naimisiin! :)'], ['15:18', 'rolle', 'np. Angels - Happiness (Wedding March)'], ['16:08', 'rolle', 'Joinikaa #rollen_häät :DD']]),
          E('16.7.', 'talk', 'Kanavalla lasketaan IRC-ohjelmat: irssiä käyttää 13 ja mIRCiä 10. rolle julistaa topicissa irssin voittajaksi 13–10.'),
          E('27.7.', 'site', 'Pulinan ensimmäiset kotisivut.'),
          E('28.–31.7.', 'site', 'rolle kerää syntymäpäiviä kanavan keski-iän laskemiseksi. Iät näkyvät kotisivulla, kunnes ne joudutaan poistamaan 31.7. sivun välilehtien takia.'),
          E('4.8.', 'game', 'Haamu alkaa pyörittää tietovisaa. Kysymyksiä on 3 583, ja trivia tekee vilkkaimmista päivistä vilkkaita vielä vuosia.', [['23:44', 'Haamu', '=== Kysymys 9/3583: KAOS: vaatteita? ===  Kysymyksen arvo : 3000 Points'], ['23:44', 'rolle', 'paita'], ['23:44', 'Cratan', 'T-paita'], ['23:44', 'Haamu', 'Cratan saa 300 pistettä vastauksesta T-paita']]),
          E('8.8.', 'bot', 'Haamun komennot tulevat topiciin: !ohje, !säännöt ja !kotisivu. Haamu osaa myös kääntää sanoja (!sana), laskea välimatkoja (!matka), kertoa vitsejä (!vitsi) ja listata päivän ahkerimmat (!toptod).'),
          E('23.9.', 'talk', 'Kauhajoen koulusurmat. mustikkasoppa tuo uutisen kanavalle aamupäivällä, ja kanava seuraa tapahtumia uutislinkkien kautta.'),
          E('26.9.', 'talk', 'rolle avaa topicissa gallupin "Milloin sait viimeksi seksiä?". Neljän minuutin päästä topicissa lukee: "Gallup ohi. 0 vastausta."'),
          E('10.10.', 'mod', 'Aikapommipäivä: Haamun !aikapommi tuottaa 13 kickiä, ja opit kickaavat vielä botit Haamun ja Pullan: 18 kickiä yhden päivän aikana.', [['10:10', 'Haamu', 'rolle: k00pa tunki aikapommin syvälle perseeseesi. Pura pommi leikkaamalla oikea lanka (kirjoittamalla katkaise <väri>).'], ['10:12', 'Jape`', 'katkaise Hopea'], ['10:12', 'mustikkasoppa', 'Millainen on mauvenpunainen']]),
          E('18.10.', 'meet', 'Hiiva käy kylässä rollen ja mustikkasopan luona. Topicissa kiitetään käynnistä.'),
          E('20.10.', 'record', 'Käyttäjäennätys: 55 irkkaajaa yhtä aikaa.'),
          E('22.10.', 'talk', 'Ensimmäinen caps lock -päivä. rolle vaihtaa nickikseen ROLLE ja topiciksi "VIRALLINEN CAPSLOCK-PÄIVÄ".'),
          E('29.10.', 'mod', 'Kanava laitetaan moderoiduksi (+m): puhumaan pääsee vain voicella, ja voicen saa QuakeNetin authilla. Kokeilu kestää iltapäivään. Samana päivänä kertyy 8 079 riviä.', [['09:53', 'rolle', 'Voicettomat ei voi puhua :P'], ['11:07', 'formaldehyde', 'ää miks pitää authaa :P'], ['11:07', 'rolle', 'Ilman +m:ää voice on vaan kiva keltainen +-merkki.']]),
          E('22.–27.11.', 'site', 'mustikkasoppa vaatii joululaskuria, ja rolle koodaa sen.'),
          E('18.12.', 'bot', 'Haamu oppii järjestämään äänestyksiä. Ensimmäinen kysymys on "Tuleeko paljon lahjoja?", ja tulos on 0–1. Illalla Jents ja Adelphos huutavat kanavalla KAPINA!', [['14:48', 'rolle', '!aloitaäänestys 24h Tuleeko paljon lahjoja?'], ['14:54', 'Haamu', 'Lopputulos: Kyllä:  0 | Ei:  1'], ['16:52', 'Jents', 'KAPINA!']]),
          E('23.12.', 'site', 'Ensimmäinen paitatilaus suunnitteilla: t-paita 10,85 €, huppari 26,05 €. Tilaukseen tarvitaan 30 paitaa.'),
          E('25.12.', 'record', 'Joulupäivänä uusi käyttäjäennätys: 56 irkkaajaa.', [['19:11', 'rolle', 'PEAK ON RIKOTTU'], ['19:12', 'Reijo-', 'peak rikottiin joulupäivänä.. :D']]),
        ],
        2009: [
          E('5.–6.1.', 'record', 'Käyttäjäennätys rikotaan kahtena iltana peräkkäin: 58 ja 61 irkkaajaa.', [['20:50', 'rolle', 'Oho peak rikkoontui.'], ['20:50', 'rolle', 'Peak for #pulina@qnet: 61 (Tue Jan  6 20:19:42 2009)']]),
          E('4.2.', 'talk', 'wzardd liittyy kanavalle kello 4.20 aamuyöllä. Hänestä tulee yksi kanavan ahkerimmista kirjoittajista.', [['04:20', 'wzardd', 'moi!'], ['04:22', 'rolle', 'Moi wzardd!'], ['04:23', 'wzardd', 'katos, täällä sentään on joku hereilläki']]),
          E('9.–16.2.', 'mod', 'Ensimmäinen opivaali. Kolmannesta ylläpitäjästä annetaan 37 ääntä, ja Kabri ja Speadfreak saavat kumpikin 6. Uusintakierroskin päättyy tasan, joten rolle ratkaisee opin Haamun !battle-komennolla. Speadfreak voittaa.', [['14:01', 'rolle', '6 ääntä taas molemmille :DD'], ['14:01', 'rolle', '!battle Speadfreak,Kabri'], ['14:02', 'rolle', 'Spiidi se on siis.'], ['14:02', 'Speadfreak', 'HAHAHAHAHAHA']]),
          E('28.2.', 'record', '8 131 riviä päivässä. Niistä 1 649 on Haamun triviaa.'),
          E('4.3.', 'mod', 'Sana "wanha" kielletään, ja sen sanojat saavat automaattisesti kickit. Ensimmäisenä lentää Haamu-botti itse. Topicissa lukee pian: "Sana on (wanhaa lukuunottamatta) vapaa."', [['10:43', 'rolle', 'Haamu: wanha'], ['10:44', 'Haamu', 'rolle: \'Wanha\' sanovat vain idiootit. Älä ole idiootti.'], ['10:44', 'rolle', 'Lol'], ['10:44', 'rolle', 'Piti testata.']]),
          E('30.3.', 'star', 'Kanava valvoo yön yli, kun rollen ja mustikkasopan esikoinen on syntymässä. Illalla topicissa onnitellaan lapsen syntymän johdosta.', [['00:44', 'Nefi-', 'Apuva menkää jo sairaalaan ni pääsen nukkuu :O En malta muuten'], ['00:55', 'Gerry_', 'vauvavalvojaiset,saltsi'], ['00:55', 'rolle', 'Saltsi, Mun tyttö syntyy ehkä kohta o/']]),
          E('15.4.–31.5.', 'talk', 'Topicissa toistuu, että lapsen nimi paljastetaan kesäkuussa. 30.4. rolle tiukentaa: "tuliko vittu selväksi?" Nimi kerrotaan topicissa 31.5.'),
          E('26.4.', 'site', 'rolle kerää pulinalaisten asuinpaikkoja ja julkaisee kartan. Tarkkoja osoitteita ei julkaista.'),
          E('30.4.', 'site', 'Pulinan uudet sivut osoitteessa peikko.homelinux.org/pulina.'),
          E('12.6.', 'mod', 'wzardd huutaa kanavalle PENIS PENIS PENIS, ja rolle kickaa hänet ja kaksi muuta syyllä "Ei ole triviaa".'),
          E('15.6.', 'mod', 's13ge saa bannit.', [['14:46', 'rolle', 'Minä tämän kanavan omistaja oon. Kysyin vielä varmistaakseni muilta että oliko oikeutetut bannit ja monta ihmistä oli samaa mieltä mun kanssa.'], ['14:47', 'rolle', 'Jos päätän bannia jonkun niin se on sillon päätetty. Turha alkaa inisee.']]),
          E('16.6.', 'talk', 'Scrin pääsee ensimmäistä kertaa topiciin: "minulla on tylsää." Faapio vastaa: "tulit oikeaan paikkaan".'),
          E('21.6.', 'talk', 'fusil liittyy kanavalle. Hänestä tulee aikakauden neljänneksi ahkerin kirjoittaja.', [['21:50', 'fusil', 'mä oon mursu']]),
          E('24.6.', 'record', '10 299 riviä päivässä, miittiä edeltävänä päivänä. Haamun triviaa on 1 494 riviä.'),
          E('25.6.', 'meet', 'Ensimmäinen miitti Jyväskylän Kirkkopuistossa. Paikalla: rolle, mustikkasoppa, canfly, Hupakko, Q-tio, elaie ja Anicyna.', [['13:39', 'mustikkasoppa', 'Joku miitti kirkkopuistoon?'], ['14:11', 'canfly', 'miittiä pystyyn ja kaikki kirkkopuistoon lusmuilemaan'], ['15:15', 'rolle', 'No nyt oltais kirkkopuistossa.'], ['15:17', 'rolle', 'Nyt kaikki kirkkopuistoon prkl.']]),
          E('25.–26.6.', 'talk', 'Hekez kysyy, kuka highlaittaisi, ja wzardd vastaa "michael jackson". rolle laittaa vaihdon topiciin. Noin tunnin päästä kanavalle tulee uutinen Michael Jacksonin kuolemasta.', [['23:52', 'wzardd', 'michael jackson'], ['00:50', 'Schitzophrenia', 'onko jackson oikeesti kuollu'], ['00:53', 'whitem', 'ÄKKIÄ PERUSTAKAA GALTSUUN RIP MICHAEL JACKSON-YHTEISÖ']]),
          E('30.6.', 'meet', 'Toinen miitti Jyväskylän Kirkkopuistossa, kuvat sivuille samana iltana. Paikalla: Hupakko, Gerrye, Kottis, Niffu, PassengeR, canfly, rolle, mustikkasoppa ja hekez.'),
          E('1.7.', 'mod', 'mustikkasoppa kickaa kaksi häirikköä "pervojuttujen" takia. Illalla Jents bannataan, ja hän yrittää takaisin nickeillä jentsi ja jent392.'),
          E('13.7.', 'site', 'Pulinalle perustetaan Facebook-ryhmä.'),
          E('6.8.', 'talk', 'Assembly-viikonloppu. Topic: "Kuka saa eniten assyilta uusia irkkaajia #pulina:lle saa rollelta turpaan."'),
          E('26.8.', 'mod', 'Big Brother -puheet jakavat kanavan. rolle linjaa topicissa, että ne, keitä BB ei kiinnosta, voivat olla hiljaa arkisin klo 21–22.'),
          E('5.9.', 'meet', 'Miitti Helsingin Bruuverissa, järjestäjänä Nefi-. Paikalla: Scrin, Reijo-, Nefi-, hekez ja Hiiva.'),
          E('19.9.', 'meet', 'Miitti Jyväskylän Kauppakadulla, siihen asti suurin. Paikalla: reijo, nudke, scrin, feq, halko, canfly, niffu, schim, fusil, hekez, mustikkasoppa, rolle, makekin, elaie, q-tio, Abeand ja Lorien.', [['00:41', 'Schitzophrenia', 'huomenna miitti yeah'], ['09:50', 'Hupakko', 'meil on jo 1/3 miittii tääl :D'], ['13:31', 'Yangsteri', 'miitti käynnissä jo?!']]),
          E('5.10.', 'mod', 'Toinen opivaali päättyy tasan Reijo-n ja Hupakon kesken. rolle ajaa !battlen, mutta antaa lopulta opit molemmille.', [['19:32', 'Reijo-', 'rolle nyt molemmat saa @ ku meni tasan?'], ['19:46', 'rolle', '!battle Reijo,Hupakko'], ['19:52', 'Hupakko', 'koska toi battle tuntuu useimmiten olevan aina suosiollinen sille jonka nimi on ekana'], ['19:55', 'rolle', 'No että kaikilla on hyvä mieli.']]),
          E('22.10.', 'talk', 'Toinen caps lock -päivä, nyt säännöllä: caps lockia saa käyttää hyvän maun rajoissa ja ilman floodia.'),
          E('3.–7.11.', 'record', 'Käyttäjäennätys 93 irkkaajaa, ja neljä päivää myöhemmin jo 97.'),
          E('5.11.', 'site', 'Pulinaventti eli kanavan oma Ventrilo-palvelin.'),
          E('13.–15.11.', 'meet', 'Miitti Turussa tiran luona. Paikalla: tira, Hupakko, eDu-, |Halko|, blANZEY ja Jyvae.'),
          E('21.11.', 'bot', 'kummitus liittyy kanavalle.', [['21:01', 'rollepeikko', 'Moi kummitus.'], ['21:01', 'kummitus', 'Kääk rollepeikko 0.'], ['21:01', 'mustikkasoppa', 'Mitä vittua :D'], ['21:02', 'rollepeikko', 'Vois ehkä laittaa ettei vastaile jokaiseen :D'], ['21:02', 'mustikkasoppa', ':DDDDDDD']]),
          E('22.11.', 'bot', 'kummituksen ensimmäinen kokonainen päivä: botti kirjoittaa 1 632 riviä ja kiistää olevansa botti.', [['01:40', 'Gerry', 'kummitus, jätitkö haamun'], ['01:40', 'kummitus', 'Gerry: Onks kummitus haamun korvike.'], ['02:22', 'kummitus', 'Gocom: Minä en matki haamua.'], ['14:37', 'kummitus', 'wzardd: Mää oon ihminen. En botti.']]),
          E('23.11.', 'bot', 'kummitukselle avataan oma koulutuskanava #kumiotus.'),
          E('1.12.', 'bot', 'Sääbotti Meteorologi esiintyy ensimmäisen kerran. rolle esittelee !keli-komennon ja sammuttaa botin heti perään.', [['23:57', 'rolle', 'Kattokaa mitä oon saanu aikaan'], ['23:57', 'rolle', '!keli Jyväskylä'], ['23:57', 'Meteorologi', 'Jeps, kelitiedot paikkakunnalle Jyväskylä: '], ['23:57', 'rolle', 'Kuole, Meteorologi.']]),
          E('2.12.', 'site', 'Pulinalle perustetaan Last.fm-ryhmä.'),
          E('27.–28.12.', 'game', 'kummitus saa uuden trivian. Haamu oli pyörittänyt triviaa jo 4.8.2008 alkaen.'),
          E('27.12.', 'record', 'Kaikkien aikojen vilkkain päivä: 10 714 riviä. Niistä 3 970 on kummituksen triviaa.'),
          E('31.12.', 'talk', 'Kanava seuraa uutislinkkien kautta Espoon Sellon ampumista.'),
        ],
        2010: [
          E('2.1.', 'talk', 'Hiivan tokaisu päätyy topiciin: "pulina = narsistien moniongelmaisten kanava".'),
          E('7.1.', 'record', 'Käyttäjäennätys rikkoo sadan rajan: 100 irkkaajaa yhtä aikaa.'),
          E('8.1.', 'site', 'Pulinaventti muuttaa rollen omalle palvelimelle peikko.us.'),
          E('15.1.', 'talk', 'Perjantain topic listaa humalaiset: "Kännissä tänään: tira, Halko, kuolematon, Nefi-, snd, rolle".'),
          E('13.2.', 'site', 'Kanavan lokit suojataan salasanalla. Tunnuksia saa kysyä rollelta privassa.'),
          E('21.2.', 'bot', 'Botit katoavat, kun rollen ja mustikkasopan taapero sammuttaa palvelinkoneen. Topic: "BOTIT KARKASIVAT!!"'),
          E('25.2.', 'talk', 'rolle päätyy Turmion Kätilöiden keikkakuvaan, ja topicissa pelataan "Bongaa rolle!".'),
          E('26.2.', 'talk', 'Topicissa linkataan tutkimus "Deonttinen ja episteeminen modaalisuus kontrastoivassa myönnyttelyssä", jonka kerrotaan perustuvan #pulinan keskusteluihin.'),
          E('1.4.', 'talk', 'Aprillipäivä alkaa minuutin yli 12. rolle kirjoittaa topiciin peräkkäin, että hän kaatui portaissa ja jalka murtui, että #pulina lopettaa 3.4.2010 ja että huomenna on miitti Kampin edessä. Väliin mustikkasoppa vaihtaa topiciksi "Meille tulee vauva!"', [['00:06', 'kasC', 'rolle: toi o tosi epärealistinne'], ['00:06', 'rolle', ':DDD']]),
          E('7.4.', 'bot', 'wbotin "jakorasia" alkaa jakaa voiceja aktiivisuuden mukaan. Oman tilanteen näkee komennolla /msg wbot !aktiivisuus nick.'),
          E('15.5.', 'meet', 'Miitti Jyväskylän kuurojen kulttuuripäivillä. Paikalla: rolle, mustikkasoppa, Hupakko, Hiiva, Jape` ja Niffu.'),
          E('16.5.', 'talk', 'Ronnie James Dio kuolee. Topicissa lukee "R.I.P Dio".'),
          E('24.5.', 'site', 'Toinen paitatilaus alkaa: t-paita maksaa 10–15 €, ja huppari jätetään pois yli 20 euron hinnan takia.'),
          E('25.5.', 'talk', 'Merisiili^ saapuu kanavalle. Kolme päivää myöhemmin hän vaihtaa nickikseen Amelii.', [['22:17', 'Merisiili^', 'onks tää joku yleinen kanava mille saa tulla  :D']]),
          E('27.5.', 'mod', 'rolle kickaa wzarddin päivän aikana viidesti. Viimeisessä kickissä lukee: "Sun kannattaa lopettaa irkin käyttö".'),
          E('5.6.', 'site', 'Sivut siirtyvät osoitteeseen pulina.info, ja blogi avataan.'),
          E('9.6.', 'talk', 'j-tek tarjoaa kanavalaisille kissanpentuja ilmaiseksi. Speadfreak täydentää topicia: "IF YOU HESITATE, A KITTEN DIES!"'),
          E('26.6.', 'meet', 'Pienimuotoinen miitti Jyväskylän Pub Katseessa Avaruusnuijan bändin keikalla. Paikalla: Avaruusnuija, mustikkasoppa, Hupakko ja Unksi.'),
          E('13.7.', 'talk', 'Hellepäivä. rolle päivittää topiciin lämpöennätyksen etenemistä, ja lopulta mitataan 34,2 astetta Lammilla.'),
          E('17.7.', 'meet', 'Linnanmäki-miitti. Topicissa iltayöllä: "Vuoristoradalta irkkaus -neitsyys menetetty!" Paikalla: rolle, mustikkasoppa, Jape`, fusil ja Scrin.', [['19:20', 'rolle', 'Minä Jape`, fusil ja Scrin ollaan vuoristoradan jonossa :D']]),
          E('1.8.', 'record', 'Käyttäjäennätys nousee portaittain: 29.7. 103 ja 104, 1.8. 110 ja lopulta 112 irkkaajaa yhtä aikaa.'),
          E('5.8.', 'meet', 'j-tek vie kissanpennut etelään uusille omistajille, heidän joukossaan Amelii, Kizi ja Speadfreak, ja miittaa samalla Keravan rautatieasemalla.'),
          E('12.8.', 'talk', 'Scrin pääsee uutisotsikoihin trollattuaan kanavalla murtautuneensa EduVantaan kouluverkkoon.'),
          E('14.8.', 'meet', 'Miitti Särkänniemessä. Paikalla: rolle, mustikkasoppa, j-tek, Firewalker ja Aswang.'),
          E('16.8.', 'site', 'Paitatilaukseen otetaan viimeiset tilaukset.'),
          E('3.9.', 'mod', 'Topicissa lukee: "Kanava on K-20. Ikärajaa ei valvo kukaan."'),
          E('4.9.', 'meet', 'Minimiitti Lahdessa siiliksen ja Halkon luona. Paikalla: siilis, Halko, Aswa, Downbeat ja Zaraki.'),
          E('9.9.', 'talk', 'Kanavalle eksyy englanninkielinen Carlos1. rolle ohjaa hänet kanavalle #pulina.for.all. Topic: "Welcome to Finland. English speaking please go to #pulina.for.all if you must."', [['17:19', 'rolle', 'Carlos1, I recommend some translation script which translates everythin automatically to english'], ['17:25', 'rolle', 'Carlos1, /join #pulina.for.all']]),
          E('22.9.', 'meet', 'Lahden isompi miitti 2.10., jota Halko ja siilis järjestivät, perutaan.'),
          E('3.10.', 'mod', 'Kaikkien aikojen kickiennätys: 30 kickiä päivässä, kaikki kummitukselta, kun se testaa uutta tuhmien sanojen suodatinta.', [['21:33', 'rolle', 'Melkein vois laittaa trigger-kickejä'], ['21:35', 'rolle', 'MIKSI SÄ OTIT BANNIT POIS'], ['22:17', 'tira', 'koht tulee kickbannia ässältä']]),
          E('5.10.', 'mod', 'kummitus ylennetään valvojaksi: bannit, voicet ja kiellettyjen sanojen lista. Estolista herättää eripuraa.'),
          E('17.–18.10.', 'mod', 'rolle kirjoittaa blogiin kanavan viihtyvyydestä. Kirjoituksen lista huonoista irkkaajista suututtaa, ja seuraavana iltana topicissa on rollen julkinen anteeksipyyntö. Speadfreak lisää perään: "Opit on homoja."', [['19:08', 'Schitzophrenia', 'oli kyl paskin veto aikoihin toi huonojen irkkaajien lista'], ['19:10', 'paveq', 'mua kyllä pisti vituttamaan kun minäkään en ollut listalla, vaikka oon ihan paska jätkä'], ['19:12', 'wuppa', 'minä olin paskojen ihmisten listalla \\o/']]),
          E('24.10.', 'talk', 'Halko ja siilis kertovat topicissa kihlautuneensa 20.10.'),
          E('9.11.', 'site', 'Pulinalle perustetaan Steam-ryhmä k00pan pyynnöstä.'),
          E('22.11.', 'mod', 's13ge saa porttikiellon perusteella "Nollatoleranssi". Yön aikana hän palaa nickeillä s13ge4, s13ge6 ja s13ge9001 eri maiden IP-osoitteista, ja rolle bannaa ne yksi kerrallaan. Topicissa lukee pian: "s13ge:lla porttikielto KOSKA ARSADASDFS".'),
          E('12.–23.12.', 'talk', 'Halko ja mustikkasoppa laskevat topicissa joulua: JouluTJ 12, 11, 10... Viimeisenä päivänä Halko lisää: "Joulu peruttu T. Joulu_pukki".'),
          E('26.12.', 'star', 'Pulina täyttää 1 000 päivää. j-tek kiittää topicissa kaikkia, jotka tekivät kanavan mahdolliseksi, ja irkkaajia, joita ilman kanavaa ei kannattaisi pitää.'),
          E('27.12.', 'site', 'rollen kotinetti katkeaa, ja peikko-palvelimen mukana kaatuvat kaikki pulinan palvelut. Topic: "Syyttäkää Saunalahtea."'),
          E('31.12.', 'meet', 'rolle ja mustikkasoppa käyvät katsomassa uudenvuoden raketteja Kuokkalan sillalla.'),
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
          E('10.1.', 'talk', 'Uusi tulokas Primadonna^ hämmentää kanavaa koko illan. Topiciin vaihdetaan äänestys "KB / No KB", ja lopulta topic päätyy muotoon "Nörttien, hevareiden ja hevarinörttien luola".'),
          E('19.1.', 'talk', 'mustikkasoppa palaa lyhyeltä "hermolomalta". rolle vaihtaa topiciin "mustikkasoppa is back!"'),
          E('24.1.', 'site', 'Keskustelufoorumi avataan.'),
          E('30.1.', 'mod', '|Halko| kickbannaa Primadonna^n kolmen viikon häiriköinnin jälkeen. Hän palaa myöhemmin kanavalle.'),
          E('14.2.', 'site', 'Foorumi hiljenee kolmessa viikossa. rolle toteaa: "Foorumi kuoli :(".'),
          E('26.2.', 'meet', 'Talvimiitti Jyväskylän Wilhelmiinan konditoriassa, 16 ja puoli osallistujaa. Paikalla: eponyymi, schitzophrenia, illegalll, Hupakko, mynta, elaie, firewalker, samiy, pekafu, rolle, mustikkasoppa, anicyna, lorien, zardagbum, Kottis ja schim.'),
          E('4.3.', 'site', 'Uudistunut miittigalleria avataan osoitteessa pulina.info/miitit.'),
          E('7.3.', 'site', 'Pulina-paitojen ennakkotilaus alkaa: tilaukset firewalkerille yksityisviestillä.'),
          E('10.3.', 'site', 'Osoitteeksi tulee pulina.fi.'),
          E('1.4.', 'talk', 'Aprillipila: topicissa ilmoitetaan, että Pulina lopetetaan ja kaikki kickbannataan huomenna. Twitterissä joku menee lankaan.', [['11:32', 'rolle', 'Twitterissä tais mennä joku lankaan']]),
          E('15.4.', 'meet', 'Miitti Soothen luona Vantaalla. Paikalla: Soothe, samiy, Hupakko, fusil, Aswang, RouVix, mynta, Hiiva, kasC, BLah^, Scrin ja Kizi.'),
          E('19.4.', 'memory', 'Pulinan aktiivinen irkkaaja Amelii, myös Merisiili, menehtyy. Topiciin vaihdetaan "rip Amelii", ja 22.4. blogiin julkaistaan muistokirjoitus.'),
          E('25.4.', 'record', '8 186 riviä päivässä.'),
          E('2.5.', 'record', 'Osama bin Ladenin kuolema ja jääkiekon MM-kisat täyttävät kanavan: 8 053 riviä päivässä.'),
          E('12.5.', 'site', 'Pulina-paidat tilataan. Ne saapuvat 30.5., hinta 20 € kappale.'),
          E('15.5.', 'star', 'Suomi voittaa jääkiekon MM-kultaa kaatamalla Ruotsin 6–1. Kanava räjähtää, ja illan kahteen viimeiseen tuntiin kertyy 1 487 riviä. firewalkerin topic: "TULI ISO JYTKY".', [['23:11', 'rolle', 'MAALI!!'], ['23:11', 'Emeshi', 'SUOMI FINLAND PERKELE'], ['23:13', 'rolle', 'MAAALI!!! EI VITTU 3-1!!!!!!!!!!!!!!!']]),
          E('27.5.', 'site', 'Pulina saa Twitter-tilin @pulinainfo.'),
          E('28.5.', 'meet', 'Minimiitti Tampereen Näsikalliolla. Paikalla: Aswang, firewalker, samiy, Vanitsu ja j-tek.'),
          E('1.6.', 'meet', 'Pikkumiitti Helsingissä rollen käydessä kaupungissa. Paikalla: rolle, samiy ja Soothe.'),
          E('7.6.', 'mod', 'samiy saa opit.', [['23:00', 'samiy', 'mul ei oo vielkää oppei tääl']]),
          E('10.6.', 'talk', 'Yhteinen "kuperkeikkaöljy"-ilta: topicissa pidetään kirjaa juojista, ja lista kasvaa seitsemään. Seuraavana yönä samiy vaihtaa topiciin "Alkoholistikanava."'),
          E('15.6.', 'talk', 'rolle haaveilee Pulina-radiosta, ja Lp- tarjoutuu striimaamaan sitä Mumblen kautta.', [['17:11', 'rolle', 'Ois muuten oikeesti siistiä jos joku pitäis pulinaradioo'], ['17:13', 'Lp-', 'mä voin streamia mumblen kautta pulina radioo :D']]),
          E('20.6.', 'mod', 'rolle laittaa yöllä kaksi toista tuntia riidellyttä pulisijaa jäähylle aamuun asti. Toinen lupaa olla palaamatta, ja topicissa lukee hänestä "ei tule takaisin!". Hän palaa syksyllä.', [['21:26', 'rolle', 'mustikkasoppa, Ne tappeli toista tuntia eikä muut saanu suunvuoroo :D'], ['21:26', 'rolle', 'Joten jäähylle aamuun asti laitoin molemmat']]),
          E('9.7.', 'meet', 'Särkänniemi-miitti, kuvat Dropboxiin. Paikalla: rolle, mustikkasoppa, samiy, firewalker, Soothe ja Aswang.'),
          E('15.7.', 'site', 'Pulinalaiset kokeilevat ensimmäistä kertaa Google+:n Hangout-videochattia.', [['19:42', 'samiy2', 'Eponyymi: tuutko testailee mun kans tuota google+ hangouttia'], ['20:02', 'mustikkasoppa', 'Aika mukava kyllä tää hangout']]),
          E('16.7.', 'meet', 'Pieni Jyväskylämiitti. Paikalla: firewalker, Vanitsu ja Monkee.'),
          E('19.7.', 'talk', 'Topic jää lukitsematta, ja kanava vaihtelee sitä kilpaa: "valtasin kanavan", "Kielletyt puheenaiheet:", "Aswang on söpö". Lopulta Eponyymi kysyy: "Missä on ylläpito kun sitä tarvitaan?"', [['14:53', 'Eponyymi', 'enhän mä voi muokata topiccii?"'], ['14:53', 'lithi', 'minä vahingossa']]),
          E('30.7.', 'meet', 'Pikkumiitti Hyvinkään rautatieasemalla klo 14. Paikalla: samiy, Aswang, Avantra, Scrin ja Pinkkidaa.'),
          E('5.8.', 'meet', 'Assembly Summer 2011: Scrin, Eponyymi, nixari, samiy ja Aswang irkkaavat Hartwall Areenalta vierekkäisiltä paikoilta.', [['08:16', 'Scrin', 'Eponyymi, nixari, samiy ja Aswang on lähempänä mun konetta ku mitä mä ite oon']]),
          E('3.9.', 'talk', 'Lehtijutussa rollesta ja mustikkasopasta näkyy kuvassa Pulina-paita.', [['13:39', 'helyes', 'mustikkasoppa ja rolle on julkkiksii <3'], ['13:39', 'mustikkasoppa', 'fusil: lehdessä oli pulinapaita btw'], ['13:40', 'mustikkasoppa', 'ilmaista mainontaa!']]),
          E('4.9.', 'meet', 'Risteilymiittiä suunnitellaan lokakuulle (7.–9.10.) Doodlella. Hanke kuivuu kasaan syyskuun lopussa.'),
          E('16.9.', 'meet', 'Pieni Tamperemiitti. rolle alkaa ilmoittaa miitit Doodlessa ja valittaa "laihoista miiteistä". Paikalla: samiy, Aswang, fusil, firewalker, TiTii, j-tek, kuolematon ja Metsamies.', [['17:07', 'rolle', 'Eihän tonne tamperemiittiin tuu ku samiy :C'], ['17:10', 'rolle', 'mustikkasoppa, Siis ku laitan doodleen miitit, kätevä palvelu']]),
          E('29.9.', 'mod', 'fusil saa opit.'),
          E('30.9.', 'meet', 'Ensimmäinen topicissa ilmoitettu Pulina-hangout. Mukana: rolle, Avantra, paveq, maza- ja firewalker. Seuraavassa hangoutissa 7.10. ovat mukana firewalker ja Aswang.'),
          E('11.10.', 'site', 'k00pa ja paveq löytävät pulina.fi:stä aukon, jolla sivulle saa syötettyä omaa HTML:ää. rolle kickaa testaajat syyllä "Rauha" ja paikkaa aukon kotona.', [['16:23', 'paveq', 'mutta melko hauska exploitti kuitenkin! :P'], ['16:27', 'k00pa', 'rolle: haittaako jos testailen vähä ? :P'], ['16:28', 'rolle', 'k00pa, Turhaa']]),
          E('23.10.', 'talk', 'Riidan jälkeen topiciin kertyy allekirjoituksia: "Hei eiks asioist vois vaan sopii, onks aina pakko sotii t. samiy, firewalker, rolle".'),
          E('31.10.', 'talk', 'Maailman väkiluku ylittää 7 miljardia. rollen topic: "Meitä on tänään 7000000". fusil korjaa luvun kanavan nickimäärään: "Meitä on tänään 122".'),
          E('10.11.', 'memory', 'firewalker muistaa Ameliita topicissa: "Amelii elää vieläkin sydämissämme".'),
          E('16.11.', 'talk', 'fusilin seuranhakuilmoitus topicissa: "Nuori mies etsii (nais)seuraa keskiviikkoillaksi! /msg fusil".'),
          E('22.12.', 'meet', 'fusilin järjestämä joulumiitti Helsingissä papupelin ja oluen merkeissä. "Pulina-miit stadissa onnistui." Paikalla: fusil, samiy ja Avantra.'),
          E('30.12.', 'talk', 'Kisa vuoden viimeisestä topicin vaihdosta. fusil vie voiton 31.12. klo 23.58: "Hyvää ja mursurikasta uutta vuotta 2012!"'),
        ],
        2012: [
          E('13.1.', 'mod', 'Häirikkö palaa webchatista nick toisensa perään, ja j-tek ja Speadfreak kickaavat kahdeksan kloonia, kuten "j_teknoob" ja "j_tekkoitasny".', [['19:44', 'Speadfreak', 'j-tek rankaisee ja maa täräjää.']]),
          E('24.1.', 'site', 'pulina.fi:n WordPress-teemasta löytyy haitallinen PHP-koodi, joka ohjaa selaimia muualle. rolle bloggaa "Browser hijack", ja 30.1. topicissa lukee "Lisää haxia löydetty...".', [['09:52', 'rolle', 'Löysin vian.'], ['09:58', 'rolle', 'Mitään hajua mistä tollane tullu']]),
          E('27.1.', 'talk', 'Topicissa lukee: "Rilluttelijoiden oma kanava."'),
          E('13.2.', 'talk', 'Topicissa lukee: "STOP ACTA".'),
          E('15.2.', 'mod', 'rolle kickaa kaksi kinaajaa syyllä "Vois loppua alkuunsa tuo".'),
          E('25.2.', 'meet', 'Miitti Helsingissä Assembly Winterin aikaan. Paikalla: rolle, mustikkasoppa, fusil, Hiiva, Jape`, Soothe, Avantra ja helyes.'),
          E('3.3.', 'talk', '|Halko|n vauvan ristiäiset kuitataan topicissa: "Ristiäiset piretty... iskä on väsy".'),
          E('20.3.', 'site', 'pulina.fi murretaan uudelleen, ja kävijät ohjautuvat virussivuille. rolle bloggaa "Hakkerointi jatkuu" ja sulkee blogin käyttäjätunnukset toistaiseksi.', [['09:41', 'rolle', 'helyes_, Ne ohjautu virussivuille'], ['09:42', 'rolle', 'helyes_, Sen takia pulinan käyttäjät on nyt suljettu toistaiseksi, sinne ei pysty bloggaamaan tällä hetkellä, ennen ku selvitetään tämä.']]),
          E('24.3.', 'bot', 'kummitus oppii komennon !miitit, joka antaa linkin miitit.pulina.fi.'),
          E('28.3.', 'meet', 'Hangout-miitti Google+:ssa. Mukana: samiy, Yoa, Fannyanniina, mustikkasoppa, rolle ja Avantra.'),
          E('29.3.', 'star', 'Kanavalla paljastuu identiteettivarkaus. Eräs aktiivinen pulisija oli marraskuusta 2011 asti esiintynyt toisen ihmisen nickillä, kuvilla ja elämäntarinalla. Oikea henkilö tuli itse kanavalle kertomaan asiasta. Moni oli kuukausia jutellut keksityn hahmon kanssa, ja yksi oli juuri kutsunut sen miittiin. rolle kirjoitti blogiin "Shokeeraava identiteettivarkaus" ja vaihtoi sen topiciin. Seuraavat päivät kanavalla epäiltiin kaikkia "feikeiksi". Päivään kertyi 6 343 riviä.', [['11:34', 'pulisija1', 'Tää ei ole leikin asia.'], ['11:36', 'pulisija2', 'tää on nyt ihan uskomatonta... ._.'], ['16:22', 'pulisija3', 'Nyt on feikkipulinalaisia sit ilmenny.']]),
          E('31.3.', 'bot', 'kummitus jakaa hetken automaattisia voiceja ja kickaa floodaajia. Ensimmäisen flood-kickin saa mustikkasoppa itse.', [['23:22', 'mustikkasoppa', 'Tattoo: ja murjase et M OI'], ['23:22', 'Tattoo', ':DDDDD']]),
          E('1.4.', 'mod', 'rolle bannaa lentil.org-osoitteista tulevat roskanickit: "lentil.org hosts are not allowed here, sorry."'),
          E('5.4.', 'mod', 'Voicen saa vain opin tavannut tai miitissä käynyt.', [['00:14', 'rolle', 'dafis: Ootko muuten käyny miiteissä'], ['00:15', 'rolle', 'Ainoastaan opin tavanneet tai miiteissä käyneet tai pärstäkuvan lapulla lähettäneet saa voicet.']]),
          E('6.–8.4.', 'meet', '4-vuotismiitti Tampereella, pääilta pe 6.4. Hämeenkadun RAXissa. Paikalla: Yoa, samiy, Fannyanniina, rolle, mustikkasoppa, Aswang, j-tek, firewalker, Vanitsu, Soothe, hekez, Monster1, pinsku, fusil, Avaruusnuija ja chq.', [['00:05', 'firewalker', 'huomenna tampereelle=)'], ['09:10', 'mustikkasoppa', 'Jape_: me mennää kohta tampereelle miittaa näitä pulinalaisia']]),
          E('1.6.', 'record', '8 051 riviä, vuoden 2012 vilkkain päivä.'),
          E('2.6.', 'star', 'Machinae Supremacyn laulaja Robert Stjärnström liittyy Pulinan Google+ Hangout -miittiin ja oppii mustikkasopalta viittoman sanalle muumi.', [['01:10', 'incidence', 'Jei robert'], ['01:13', 'mustikkasoppa', 'MaSu laulaja tos meidän kanssa hangouttaa'], ['01:31', 'mustikkasoppa', 'MUUMIN ;D'], ['01:57', 'mustikkasoppa', 'opeta julkkikselle joku viittoma: check'], ['02:04', 'incidence', 'Robert Stjärnström @stjarnstrom: I now know sign language for “moomin” #beatthat']]),
          E('12.6.', 'mod', 'Pitkäaikaisen häirikön s13gen yli vuoden vanha banni poistetaan. Hän palaa uudella nickillä, mutta vanha nick lentää samana iltana Q:n nickbannilla ja seuraava kuori fusilin bannilla.', [['23:56', 'samiy', 'computer says no.'], ['23:56', 'siege', 'höövee rolle :>>>']]),
          E('29.6.', 'meet', 'Helsinki-miitti Kaisaniemen puistossa klo 19, lauantaina jatketaan Linnanmäellä. Paikalla: BLah^, Reijo^, HoocH, Avantra, Hiiva, Safti, fusil, Majesty, samiy, j-tek, Soothe, Haprog, mynta, mustikkasoppa ja rolle.'),
          E('7.7.', 'mod', 'mustikkasoppa kickaa rollen syyllä "läträä ittees".'),
          E('3.8.', 'meet', 'Assembly Summer 2012: samiy, fusil, Fannyanniina ja Scrin istuvat konepaikoillaan ja irkkaavat Hartwall Areenalta.'),
          E('27.8.', 'talk', 'Big Brother jakaa kanavan: mustikkasoppa vaihtaa topiciin "Tänne ei sitten BB-floodia." ja rolle samassa minuutissa "Tänne sitten BB-floodia."'),
          E('6.9.', 'site', 'rolle bloggaa "Mitä kuuluu?" ja päivittää Pulinan paikkakuntakartan.'),
          E('13.9.', 'bot', 'kummitukseen tulee lainauskomento !quote.'),
          E('16.9.', 'bot', 'Komentosivu pulina.fi/komennot päivitetään listaamaan kaikki botin komennot.', [['01:07', 'rolle', 'Työn ja tuskan takana oli.'], ['01:08', 'rolle', 'KAIKKI komennot.']]),
          E('5.10.', 'site', 'Pulina saa Facebook-sivun. Topicissa lukee "Tervetuloa hiekkalaatikkoon!"'),
          E('20.10.', 'meet', 'fusil kutsuu pulinalaiset Linnanmäen Sea Lifen Jelly Discoon klo 19–22.'),
          E('26.10.', 'site', 'Pulina saa englanninkielisen sisarkanavan #pulina.eng.', [['10:07', 'rolle', 'Pitäiskö luoda pulinalle englanninkielinen kanava?'], ['10:07', 'samiy', 'tai #pulina.eng'], ['10:09', 'rolle', 'NO tehään se']]),
          E('25.11.', 'record', 'Kanavalla 130 nickiä, aikakauden suurin määrä.'),
          E('21.12.', 'talk', '|Halko|n topic: "Hyvää Maailmanloppua!"'),
          E('29.12.', 'meet', 'Joulumiitti Kannelmäessä klo 14, fusilin järjestämä. Paikalla: fusil, samiy, Reijo, Soothe, Downbeat, Sikanaama, HoocH ja korzu. Reijon topic jälkikäteen: "Hienon miehekäs miitti oli, tänks fusse järkkäämisestä".'),
          E('30.12.', 'mod', 'fusil kickaa rollen lainauksella: "Siunattu olkoon Jumala, paras Luoja". minä olen jumala.'),
          E('31.12.', 'bot', 'Vuosina 2011–2012 kummitukselta kysyttiin horoskooppia (!horo) 5 138 kertaa ja säätä (!sää) 4 198 kertaa.'),
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
          E('6.1.', 'mod', 'Topiciin tulee sääntö: irkkaamalla hyväksyt, että sanomasi voidaan julkaista.'),
          E('8.1.', 'site', 'Pulinan Facebook-ryhmä perustetaan "miittejä, kasvojen tunnistusta ja muuta shaibaa varten".', [['22:54', 'laughing', 'uskaltaaks feisbuukkiryhmään liittyä']]),
          E('8.1.', 'record', 'Vuoden vilkkain päivä: 4 646 riviä.'),
          E('20.1.', 'mod', 'fusil kirjaa topiciin kanavan perussäännön: "Pulina on paikka, jossa saa puhua mistä vain! Ainoastaan kielletyt aiheet ovat kiellettyjä."'),
          E('30.1.', 'meet', 'Pulina tekee Assembly Summer 2013 -ryhmätilauksen. Linkki pysyy topicissa koko kevään.'),
          E('12.2.', 'bot', 'mustikkasoppa kysyy kummitukselta !do-komennolla, mitä tehdä. Botti vastaa "Tee pahojasi", joten hän kickaa rollen kanavalta. Kanavalla on samaan aikaan 137 nimimerkkiä.', [['20:10', 'mustikkasoppa', '!do'], ['20:10', 'kummitus', 'Tee pahojasi.'], ['20:10', 'mustikkasoppa', 'nyt keksin'], ['20:11', 'Monster1', 'Kun nainen ottaa vallan']]),
          E('1.3.', 'meet', 'Google+ Hangout -videochatti. rolle hakee webkameran, ja topicissa lukee "HANGOUT KÄYNNISSÄ". Mukana: rolle, firewalker, alajarvela, Dahlia_D, Leptoni ja chq-.', [['22:56', 'rolle', 'Haen webcamin'], ['23:12', 'rolle', 'Kaikki saa tulla hangouttiin!'], ['23:20', 'Dahlia_D', 'oon virallisesti hangoutannu'], ['23:39', 'firewalker', 'KAIKKI HANGOUTTIIN']]),
          E('1.4.', 'talk', 'Aprillipila: topicissa ilmoitetaan, että kanava suljetaan 2.4.2013.'),
          E('5.4.', 'mod', '"Supsi Travels" tuo kanavalle [ST]-alkuisten irkkaajien "matkaryhmän" opastetulle kierrokselle. samiy kickaa matkalaiset ulos minuutissa: 11 kickiä.', [['21:31', '[ST]-Supsi', 'Hei kanavalaiset. Olen Supsi Travels -irc-matkojen matkanjohtaja ja olemme saapuneet matkalle kanavallenne.'], ['21:31', '[ST]Tonos', 'onko täällä tyttöjä :3'], ['21:31', 'kuolematon', 'tonos: ei o tyttöjä'], ['21:32', 'thathugeguy', 'Olen 12 ja en tiedä missä se on.']]),
          E('27.4.', 'game', 'rolle ja k00pa pelaavat yöllä BatMUDia pitkästä aikaa ja pastettavat pelilokia kanavalle. Kuukauden vilkkain päivä.', [['01:37', 'rolle', 'samiy: Minä ja k00pa pelataan mudia pitkästä aikaa :D'], ['02:12', 'rolle', 'Mut kaipaan tätä peliä :D loistavaa!']]),
          E('29.4.', 'meet', '"Ruokailumiitti" eli minimiitti Helsingissä mustikkasopan syntymäpäivänä. Paikalla: samiy ja fusil.'),
          E('17.5.', 'meet', 'Pulinan Google+ Hangout klo 20. Myös incidence liittyy ja lupaa seuraavaan Hangoutiin Machinae Supremacyn Robertin ja rumpali Niklaksen. Mukana: incidence, samiy, Avantra, mustikkasoppa, rolle, sirhoksu ja Soothe.', [['20:02', 'Safti', 'hangout-bileet :-----------D'], ['21:06', 'incidence', 'mustikkasoppa: Torstaina uusiks hangout? Tääl on sillo robert ja niklas :D']]),
          E('6.7.', 'meet', 'Kesämiitti Tampereen Sorsapuistossa. Väkeä on vähän, mutta fusil pitää sitä parhaana miittinä tähän mennessä. Paikalla: fusil ja samiy.', [['13:53', 'fusil', 'en jaksa kyllä enää vastata ees kyselyihi miiteist ku aina se on tämmöstä'], ['14:05', 'fusil', 'me ollaan miitti hei'], ['15:12', 'fusil', 'Tääl sorsapuistos onkin pieni lintupuisto myös :)']]),
          E('10.7.', 'mod', '23 kickiä päivässä, lähes kaikki samiyltä. Syy: "huvixee".'),
          E('1.–4.8.', 'meet', 'Assembly Summer 2013. Paikalla olevia pulisijoita varten avataan oma kanava #pulina.asm. Paikalla: samiy, s13ge ja alajarvela.', [['14:15', 'samiy', 'vois tehdä vaikka #pulina.asm jotta ei sotkeudu tänne muun keskustelun väliin']]),
          E('26.8.', 'talk', 'Rollelle ja mustikkasopalle syntyy poika. mustikkasoppa irkkaa synnytyssairaalasta jo seuraavana aamuna. Topicissa lukee "mustikkasoppa poksahti".', [['07:04', 'comah', 'onnea hurjasti soppanen ja rolle myös <3'], ['07:05', 'mustikkasoppa', 'poika tosiaan syntyi eilen illalla'], ['08:41', 'Sikanaama', 'onnittelut toukasta mustikkasopalle ja rollelle']]),
          E('5.9.', 'site', 'Rollen kotiyhteys saa QuakeNetissä G-linen, kun samasta osoitteesta on kirjautunut kuusi yhteyttä botit mukaan lukien. kummitus ja mustikkasoppa putoavat verkosta.'),
          E('14.10.', 'bot', 'rolle avaa boteille peikko.us-sivun, jolla on myös pulina-lastlog. Topicissa lukee "Pulinan ja paskabotit tarjoaa".'),
          E('8.11.', 'star', 'Keskisuomalainen julkaisee jutun "Kuurosokea elää kosketuksesta", jossa mainitaan mustikkasoppa ja IRC. Linkki nousee topiciin.', [['09:32', 'ALTHiR', 'Olis kiva lukee toi lehtijuttu kokonaan'], ['18:33', 'Jape`', 'hieno lehtijuttu!'], ['23:29', 'samiy', 'rolle: oli kiva juttu teistä lehdessä']]),
          E('21.12.', 'meet', '"Kansainvälinen" Nisha-miitti Helsingin Stone\'sissa, kun Yhdysvalloissa asuva Nisha on Suomessa. Paikalla: Nishae, samiy, fusil, horlis, Muffinssi ja Safti.', [['15:41', 'Nishae', 'Ollaan jo stonesissa istumassa. Ootko samiy tulossa?'], ['16:10', 'Safti', 'eikö tää ookkaa sellanen miitti mis irkataa']]),
        ],
        2014: [
          E('6.1.', 'bot', 'Botit palaavat käyttöön.'),
          E('17.3.', 'site', 'pulina.fi-osoite uhkaa vanhentua.'),
          E('3.4.', 'site', 'pulina.fi uudistuu.'),
          E('23.4.', 'site', 'samiy mainostaa topicissa Pulinan subredditiä r/Pulina.', [['17:10', 'samiy', 'ei oo pulina redditti saanu suosiota']]),
          E('1.5.', 'bot', 'kummituksen !matka ei tunne Jyväskylää eikä Lahtea, mutta tuntee Homon.', [['23:29', 'Gerrye', '!matka lahti jyväskylä'], ['23:29', 'kummitus', 'Välimatka Lahti - Jyväskylä 0km. Virheelliset kaupunkinimet (tai ei tuettu)?'], ['23:29', 'Jokurandom', '!matka homo turku'], ['23:29', 'kummitus', 'Välimatka Homo - Turku on 5 km']]),
          E('7.5.', 'site', 'rolle mainostaa topicissa uutta olutblogiaan huurteinen.fi.'),
          E('10.5.', 'record', 'Vuoden vilkkain päivä: 3 860 riviä.'),
          E('17.5.', 'meet', 'Lahti-miitti Sokoksen kulmalla ja puistossa. Paikalla: gerry_, Downbeat ja HoocH_.', [['01:32', 'gerry_', 'tulkaa huome irkkimiittivalvojaisiin klo 14 alkae :D'], ['09:08', 'gerry_', 'mä koittasin jossai välis nukkuu ehk ennen miittiä :D']]),
          E('5.7.', 'meet', 'Kesämiitti Helsingissä, ensin Kaisaniemessä ja sitten Alppipuistossa. Paikalla: Gerrye, Soothe, samiy, Reijo, s13ge ja HelvetinEnkeli.'),
          E('7.–8.7.', 'meet', 'samiy ja Soothe käyvät Jyväskylässä, ja Kirkkopuistossa istutaan pikkumiittiä. rolle päivittää topiciin: "Pikkumiittejä saa järjestää." Paikalla: rolle, mustikkasoppa, samiy, Soothe, alajarvela ja hekez.'),
          E('31.7.', 'meet', 'samiy kutsuu topicissa moikkaamaan Assembly Summer 2014 -tapahtumaan.'),
          E('12.8.', 'talk', 'Topicissa lukee "RIP Robin Williams".'),
          E('15.9.', 'talk', 'kiiZeli tulee kanavalle etsiessään QuakeNetistä tietovisakanavaa. Hän on viimeksi irkannut 10 vuotta sitten.', [['19:08', 'kiiZeli', 'siilis viimeks ircattu joskus 10vuotta sitten :D. Kaikki vanhat kanavat kadonnu/kuollu :P'], ['19:10', 'kiiZeli', 'onneks löyty tää hexchat :D']]),
          E('19.12.', 'meet', 'Joulumiitti Helsingin Keskuskadun Stone\'sissa klo 15 alkaen. Paikalla: samiy, Soothe, fusil, Reijo, dafis ja safti.', [['15:12', 'safti', 'Fusku on jo ihan perskännit ennenku muut ehtii paikalle'], ['18:07', 'safti', 'Luulin et tää on irkkimiitti eikä kukkaa irkkaa :(']]),
          E('24.12.', 'site', 'Pulinan oma webchat chat.pulina.fi on toiminnassa.'),
          E('25.12.', 'site', 'pulina.fi:n uudet sivut julkaistaan joulupäivän yönä klo 00.23. rolle twiittaa niistä, ja Twitterin kautta kanavalle tulevat mm. convulva, myöhemmin convulVAU, ja sippis.', [['00:23', 'rolle', '...pulinan uudet sivut on livenä.'], ['00:33', 'convulva', 'komea tuo pulina.fi btw :)'], ['00:33', 'rolle', 'Vissiin Twitteristä putoaa porukkaa tänne nyt? :D'], ['00:33', 'convulva', 'Twitteristä itekkin päädyin joo.']]),
        ],
        2015: [
          E('2.1.', 'record', 'Kanavan käyttäjäennätys 170 syntyy klo 15.56, kun kanavalle tulvii bottiparvi.', [['15:54', 'safti', 'pulinaan iski viirus'], ['15:57', 'kummitus', 'Käyttäjäennätys kanavalle #pulina on 170 käyttäjää. Ennätys saavutettiin 01/02/2015 03:56 PM.'], ['15:57', 'rolle', 'Jee \\p/'], ['15:58', 'Scrin', 'jollai iha näppärät botit']]),
          E('8.2.', 'talk', 'pirta ja armmm puhuvat kanavalla ensimmäisen kerran.'),
          E('18.3.', 'mod', 'alajarvela kickaa fusilin ja kiiZelin samalla minuutilla "jäähylle". Samana päivänä Nefastos puhuu kanavalla ensimmäisen kerran.'),
          E('1.4.', 'talk', 'rolle kertoo, että Yle Silminnäkijä kävi edellisenä päivänä kuvaamassa häntä ja mustikkasoppaa.', [['22:10', 'rolle', 'kiiZeli: Joo Yle Silminnäkijä kävi meillä eilen'], ['22:13', 'kiiZeli', '!muistuta kiiZeli "2015-4-30 16:00" silminnäkijä'], ['22:13', 'kummitus', 'kiiZeli: SINULLE ON LISÄTTY MUISTUTUS. AIKA: 2015-4-30 16:00, AIHE: "silminnäkijä"']]),
          E('1.4.', 'bot', 'rolle kirjoittaa topiciin, että kaikki kummituksen katkoja ihmettelevät saavat syyttää Scriniä, joka "tykkää sotkea botin tahallaan".'),
          E('30.4.', 'star', 'Yle TV2 esittää klo 20 Silminnäkijä-jakson "Kuuroille korville", jossa ovat mustikkasoppa ja rolle. Kanava katsoo sitä yhdessä.', [['19:31', 'mustikkasoppa', 'Lauri^^: Silminnäkijä'], ['20:00', 'rolle', 'Nyt tv2!???'], ['20:03', 'Aswang', 'Jaha, mummuki alko kattoon silminnäkijää']]),
          E('23.5.', 'meet', 'Särkänniemi ja SOPP-oluttapahtuma Tampereella. Paikalla: Aswang, Hiiva, rolle ja mustikkasoppa.'),
          E('5.7.', 'talk', 'drinn tulee kanavalle rollen Twitter-mainoksen kautta.', [['18:07', 'drinn', 'piti tulla ku rolle mainosti twitteris :)']]),
          E('14.7.', 'mod', '19 kickiä päivässä.'),
          E('24.7.', 'meet', 'Suuret oluet, pienet panimot -minimiitti Helsingin Rautatientorilla. Paikalla: rolle, Nefastos ja samiy.'),
          E('31.7.', 'meet', 'Kesämiitti Helsingin Kaislassa. Paikalla: samiy, fusil, Nefastos, hoorleekare, drinn, Sikanaama, convulva, Soothe, Kauhukomedia ja safti.', [['10:19', 'fusil', 'no tänää miitti'], ['10:19', 'fusil', '12.30 hki']]),
          E('4.9.', 'talk', 'convulVAU, entinen convulva, vakiintuu nykyiseen nimimerkkiinsä.'),
          E('10.10.', 'meet', 'Helsinki-miitti klo 16 alkaen, kuvat pulina.fi:ssä. Paikalla: Daraskos, Nefastos, sippis, safti, convulVAU ja Nasu.', [['16:57', 'Daraskos', 'Kolme häiskää paikalla!'], ['18:10', 'sippis', 'täällä on minä, nefa, dama, safti, conva ja yhden nikkiä en muista'], ['20:27', 'Nefastos', 'Täällä on väkeä kun pipoo']]),
          E('23.10.', 'site', 'IRC-etiketti-sivu pulina.fi:hin.'),
          E('24.10.', 'meet', 'Jyväskylä-miitti feat. Nefastos, rollen mukaan "menestys". Paikalla: rolle, Nefastos ja mustikkasoppa.', [['21:16', 'rolle', 'Ollaan Nefastos kanssa pubissa vielä.'], ['21:19', 'Nefastos', 'No täällä on aika vahvat aineet nyt pöydässä, 10,2 ja 11,2 prosenttiset oliet']]),
          E('25.10.', 'record', 'Vuoden vilkkain päivä Jyväskylän miitin jälkeen: 5 781 riviä.'),
          E('8.11.', 'meet', 'Viime tingan pikamiitti Helsingin Stone\'sissa. Samana päivänä topicissa onnitellaan pirtaa vauvan syntymästä. Paikalla: Nefastos, sirhoksu, Daraskos, convulVAU, sippis ja Nasu.'),
          E('9.11.', 'site', 'kiiZeli perustaa Pulinan Telegram-ryhmän, ja mustikkasoppa vie liittymislinkin topiciin.', [['18:33', 'kiiZeli', 'pulinan oma tg ryhmä?'], ['18:35', 'kiiZeli', 'Nasu: telegram on hipstereiden whatsapp'], ['18:43', 'Nefastos', 'No mulla on tässä allekkain irkki ja Telegram, niin voi vaikka copy-pastettaa samat viestit molempiin :D']]),
          E('14.11.', 'talk', 'Kanava seuraa yöllä Pariisin terrori-iskujen uutisia.', [['03:20', 'fveitsi_', 'Poliisin mukaan konserttitalohyökkäyksessä on kuollut 100 ihmistä.']]),
          E('17.11.', 'meet', '"Helsinki–Pieksämäki-crossover-miitti" Thirsty Scholarissa, erikoisvieraana comah. Paikalla: Nefastos, comah, Daraskos ja HoocH_.', [['18:03', 'Nefastos', 'Minä ja comah ollaan jo paikalla'], ['21:33', 'HoocH_', 'Aswang: täällä on kaikki paitsi sinä :P']]),
          E('19.12.', 'meet', 'Joulumiitti Helsingin Bar Chaplinissa klo 16 alkaen. Topic lohduttaa poisjääneitä: "Varjomiitti on just SUN luona". Paikalla: Nefastos, Daraskos, sippis, sirhoksu, samiy, Hoorleekare, safti, Nasu, soupy ja fusil.', [['16:09', 'Nefastos', 'Ollaan täällä yläkerrassa'], ['16:57', 'sirhoksu', 'ollaan tääl isoimmas pöydäs']]),
          E('20.12.', 'bot', 'Gerryn webchat-alias Gerrykone ilmestyy kanavalle linkkien jakamiseen. Vuonna 2016 sillä kertyy yli 1 000 riviä.', [['14:15', 'Gerrykone', 'MULTITASKING GERRY!']]),
          E('29.12.', 'talk', 'Topicissa lukee "R.I.P Lemmy! We miss you!".'),
        ],
        2016: [
          E('6.1.', 'meet', 'Loppiaismiitti Helsingin Kaislassa klo 18. Paikalla: Nefastos, armmmm, Daraskos, drinn ja safti.'),
          E('22.1.', 'mod', 'Anicyna kickaa rollen tämän omalta kanavalta "testatakseen", voiko op kickata opin, ja luopuu sen jälkeen opeistaan.', [['23:31', 'rolle', 'Jaa, Anicyna ei halua että irkkaan enää'], ['23:32', 'Anicyna', 'rolle: halusin vaan testaa'], ['23:32', 'Nicd', 'vain Q:ta ja S:ää ei voi potkia']]),
          E('22.1.', 'record', 'Vuoden vilkkain päivä: 4 925 riviä.'),
          E('27.1.', 'meet', 'Miitti Helsingin William K:ssa. Paikalla: convulVAU, samiy, sirhoksu, Kauhukomedia, nasu, Nefastos, soupy, Daraskos, HoocH_ ja sippis.'),
          E('29.1.', 'meet', 'rolle avaa perjantai-iltana Hangouts-videochatin. Perjantai-hangouteja pidetään myös 19.2. ja 18.3.'),
          E('4.2.', 'talk', 'Topic juhlii: samiy on ollut #pulinalla 7 vuotta.'),
          E('12.–14.2.', 'meet', '"Sippismiitti" Jyväskylässä, kun sippis käy kaupungissa tapaamassa ystäviä.'),
          E('26.2.', 'meet', 'Sippiksen läksiäismiitti Helsingin Brewsterissä, minkä jälkeen mennään dafiksen keikalle Hard Rock Cafeen. Paikalla: sippis, Nefastos, Daraskos, sirhoksu, Majesty, soupy ja convulVAU.'),
          E('19.3.', 'meet', 'Varhaisillan Jyväskylä-miitti Pommissa, järjestäjänä sippis. Paikalla mm. sippis ja Nefastos.'),
          E('29.3.', 'talk', '"Viikon kilpailu: majoita fusili!" Topicissa haetaan fusilille yösijaa Helsingistä 2.4., ja voittaja palkitaan.'),
          E('9.4.', 'meet', 'Pulina 8 vuotta -juhlamiitti Helsingin Ølhus Oslossa, samalla juhlitaan mustikkasopan 30-vuotispäiviä. Paikalla: Daraskos, Nefastos, sirhoksu, rolle, mustikkasoppa, convulVAU, Soothe, soupy, sippis, Tanju ja matkum.', [['17:56', 'Nefastos', 'Mie muljahdan tästä nyt Osloon kanssa'], ['19:20', 'kummitus', '[ Pulina.fi Twitterissä: "Pulina 8 vuotta, @mustikkasoppa 30 vuotta! Onnea rutosti! Miitti käynnissä @ Ølhus Oslo.']]),
          E('14.4.', 'bot', 'kummitukseen tulee BogusTrivia-tietovisa, joka ajastetaan joka yö klo 2–3. Ensimmäisenä yönä sitä haukutaan.', [['21:28', 'Pilkki', 'voisko tuo trivia suksia vittuun tältä kanavalta'], ['21:48', 'rolle', 'Nyt on ajastettu yölle tuo trivia'], ['03:19', 'Kauhukomedia', 'Hei eiks ton saatanan trivian pitäny loppuu kolmelta?']]),
          E('21.4.', 'talk', 'Topicissa lukee "RIP Prince | Tervetuloa (ri)Pulinoimaan".'),
          E('25.5.', 'talk', 'Urpon nimipäivänä topic onnittelee "kaikkia vitun Urpoja ja vitun Reijoja".'),
          E('27.5.', 'star', 'Damaskox tekee #pulina-ristikon, ja se pysyy topicissa kesäkuun loppuun.', [['10:11', 'convulVAU', 'uuh meikä päässy ristikkoon 666'], ['10:12', 'sirhoksu', 'paska ristikko. ei oo mua =(']]),
          E('21.7.', 'talk', 'Topiciin tulee MD5-tiiviste 7dcca4ef…, joka on "oispa kaljaa". 2.8. Nicd lisää perään vielä bcrypt-tiivisteen.', [['17:34', 'Jokurandom', '7dcca4ef474e2015f2267b9d00d9e1f1'], ['17:35', 'Anicyna', 'oispa kaljaa :n md5 ?']]),
          E('12.8.', 'meet', 'Minimiitti Lahdessa. Paikalla: Anicyna ja Dataaja95.'),
          E('31.8.', 'meet', 'Jyväskylän minimiitti nro 1 keskustassa. Toinen pidetään perjantaina 2.9. Paikalla: aniC ja jugde_derdd.'),
          E('13.10.', 'bot', 'Kokeillaan IRC–Telegram-siltaa. tgbot liittyy kanavalle ja spämmää pyytäen chat_id:tä, kunnes se poistetaan.', [['14:22', 'sippis', 'we want irc-telegram botti'], ['14:24', 'rolle', 'Mut se floodaa irkkijuttuja telegrammiin ja telegrammijuttuja irkkiin = kaikkia vituttaa'], ['14:34', 'tgbot', 'No chat_id set! Add me to a Telegram group and say hi so I can find your group\'s chat_id!'], ['14:38', 'sippis', 'tgbot: halt']]),
          E('3.11.', 'bot', 'Pulinan GitHub-organisaatio pulinairc perustetaan. rolle aloittaa bMotion-"tekoälyn" suomentamisen kummitukselle ja kutsuu samiyn ja lapyon mukaan.', [['21:14', 'rolle', 'Joku semi tekoäly ois kiva mutta siinä on suomeks käännettävää sen verran paljon'], ['21:22', 'Asw', 'rolle: Laita kummitukseen se tekoäly ja syötä sille kalevala, niinku ne jotkut hyypät on tehny']]),
          E('4.–6.11.', 'meet', 'Pulinan pikkujoulut Jyväskylässä. Paikalla: Anicyna, Dataaja95 ja Nero.', [['01:08', 'Nero|aniC', 'Naama: ollaan siis miittaa, täällä on minä, Dataaja95 ja Nero']]),
          E('11.11.', 'meet', 'Helsingin pikkujoulumiitti Ølhus Oslossa klo 18. Paikalla: Nefastos, Daraskos, Roose, sirhoksu, Aswang, drinn ja convulVAU.', [['17:56', 'Daraskos', 'Nefastos, Dama, Roose ja Sirhoksu ovat jo paikalla.'], ['18:01', 'Sikanaama', '!battle pussikaljaa, baariin, miittiin'], ['18:01', 'kummitus', 'Sikanaama: pussikaljaa: 55% - baariin: 30% - miittiin: 15%']]),
          E('22.11.', 'bot', 'kummituksen ensimmäinen ulkopuolinen pull request: Nicd lisää GitHubin kautta BaFeScriptistä tutun !olenaa-komennon.', [['15:12', 'kummitus', '[ Add !olenaa by Nicd · Pull Request #1 · pulinairc/kummitus · GitHub ]'], ['23:19', 'Aswang', 'Mä en tajuu tota olenaa ollenkaan']]),
          E('24.11.', 'site', 'rolle julkaisee reaaliaikaisen, visuaalisen !toptod-listan. Siitä tulee "Hall of Fame" pulina.fi:n etusivulle.'),
          E('1.12.', 'bot', 'rolle ilmoittaa topicissa, että !horo-komentoon pitää kirjoittaa horoskoopin nimi kokonaan.'),
        ],
      } },
    { years: '2017–2019', from: 2017, to: 2019, title: 'Tuuliset vuodet, huumeluola-pulina', color: '#ff7a59',
      paras: [
        'Vuonna 2017 rivejä kertyi 289 748, ja ylläpitäjät olivat käytännössä poissa. Kickejä annettiin 44 vuonna 2017, 29 vuonna 2018 ja vain 9 vuonna 2019, vähemmän kuin koskaan ennen tai sen jälkeen.',
        'Kanavasta tuli huumeluola. Päihteistä puhuttiin avoimesti, ja huumeet mainittiin 2 kertaa niin usein kuin alkuvuosina. Moni vanha pulisija koki kanavan ahdistavaksi. Otteissa nimimerkit on vaihdettu.',
      ],
      top: [['mustikkasoppa', 96242], ['drinn', 60174], ['samiy', 46952], ['anicyna', 42251], ['convulvau', 28555]],
      events: {
        2017: [
          E('14.–18.1.', 'talk', 'Jore-meemi elää. Joka uusi ja kummallinen kävijä on "jore". sirhoksu selittää, että Jore on QuakeNetin sankari, joka tulee kanaville eri nickeillä ja eri persoonina.', [['18:50', '+Avaruusnuija', 'Everyone I don\'t like is jore.'], ['16:38', '@sirhoksu', 'Jore = Quakenetin sankari joka tulee eri nickeillä ja persoonilla kannuille']]),
          E('27.1.', 'talk', 'Vanha pulisija Cixir palaa vuosien tauon jälkeen. Kanava on rauhoittunut alkuajoista.', [['00:24', 'Cixir', 'Joku muistaa mut vuosien jälkee jei <3'], ['00:32', 'Cixir', 'on kyl nii ihanan kodikasta palata tänne <3 <3'], ['02:16', '@fusil', 'onhan tää vähän rauhottunut meno täällä'], ['02:16', 'Cixir', 'aiemmin ois jo tullu jossain 2 minassa 1000 riviä tekstiä xD']]),
          E('27.1.', 'record', 'Vuoden vilkkain päivä: 2 342 riviä.'),
          E('28.1.', 'meet', 'Oluthenkinen miitti Helsingissä: ilta alkaa Ølhus Oslossa ja jatkuu Stadin panimolla Suvilahdessa. Paikalla: rolle, Nefastos ja sirhoksu.'),
          E('16.2.', 'mod', 'Jore palaa kloonien kanssa. rolle kickaa moikka-, moikaikki-, moikaikki2- ja jokkeboi-nickit yksi kerrallaan.', [['11:33', '@rolle', 'Moi jore'], ['11:34', '*', 'moikka was kicked by rolle (moikaikki Yritä edes.)'], ['11:35', 'moikaikki2', 'moi murut']]),
          E('24.2.', 'talk', 'Anicyna kaavailee topicissa "Pulisijan 2017 kesäkiertuetta", maaseutumatkailua pulisijoiden luona. 7.4. samiy vaihtaa topiciksi "Ei kiinnosta maaseutumatkailu!", ja 4.5. kiertue siirtyy heinäkuulle. Lokeista ei löydy merkkiä, että se toteutui.'),
          E('20.3.', 'talk', 'Yöllä puhutaan yliannostuksesta.', [['02:50', 'pulisija1', 'lyricaa sellanen määrä johon ois voinu kuolla, ja ku se lähti poistuu ni jatkoin stimulanttilinjalla, niin nuo kaksi tekijää aiheutti sen kohtauksen'], ['02:52', 'pulisija1', 'en tajunnu sitä vaa vedin summamutikas ja päälle viel lissää muita aineita.'], ['02:57', 'pulisija1', 'mut joo... tappavia huveja']]),
          E('25.3.', 'mod', 'mustikkasoppa bannaa trollin itse.', [['20:57', 'pstosi', 'Mikä tää izm nyt on?'], ['20:57', '@mustikkasoppa', 'pstosi: trolli'], ['20:58', '*', 'izm was kicked by mustikkasoppa (Otan tämän kunnian :))']]),
          E('27.3.', 'bot', 'kummitus katoaa, koska Rollen robotti-imuri on taas kiskonut verkkojohdon irti. Botti ja pulina.fi pyörivät Rollen vaatekaappipalvelimella kotona. Sama toistuu 15.5. ja 18.7.', [['11:40', '@rolle', 'Varmaan pölynimurirobotti kiskas taas johdon irti'], ['11:47', '@Nicd', 'milloin vaihdat rolle dedikoituun serveriin jossain datakeskuksessa :D'], ['11:48', '@rolle', 'Pitäähän jokanörtillä vaatekaappipalvelin olla'], ['11:49', '@rolle', 'En pysty varmaan nukkumaan jos ei sitä vaimeaa kehräämistä kuulu vaatekaapissa :D']]),
          E('31.3.', 'talk', 'makinen kirjoittaa kanavalle ensimmäistä kertaa. Vuoden loppuun mennessä häneltä kertyy 6 668 riviä. motni tulee 29.4.'),
          E('8.4.', 'bot', 'kummitus on taas poissa.', [['15:45', 'Anicyna', 'rolle: ihmiset panikoi ja mellakoi kaduilla. pahempaa ku ydinonnettomuus! kummitus on poissa!'], ['15:46', 'convulVAU', 'rolle juo kaljaa']]),
          E('9.4.', 'mod', 'Nicd tunnistaa kiertolaisen ja kickaa.', [['18:18', '@Nicd', 'ei hitto make'], ['18:18', '*', 'mie was kicked by Nicd (ei viddu mage :DDD:DD:D:DD:D)'], ['18:19', 'Sikanaama', 'Nicdin rankka potkujalka kävi taas']]),
          E('14.4.', 'talk', 'Kiirastorstain iltana väitellään kannabiksen laillistamisesta. Esimerkkinä on Kanada.', [['22:14', 'pulisija10', 'Kaikki täl kanavalla tietää varmasti, et kannabiksen käyttö on about kaikilla mittareilla harmittomampaa kuin alkoholin'], ['22:17', 'pulisija11', 'kannabis vain tyhmentää'], ['23:05', 'pulisija12', 'kaikki huumeet pitäis laillistaa']]),
          E('21.4.', 'talk', 'samiyn topic: "#pulina - Suomen suurin homoystävällinen yhteisö!"'),
          E('26.4.', 'mod', 'Eräs pulisija jakaa rasistisen kuvan ja saa kickin syyllä "on puhuttu näistä". 29.8. Q bannaa hänet.'),
          E('19.5.', 'meet', 'Miitti Steelfestissä Hyvinkäällä. Paikalla: Aswang, convulVAU, rolle ja jugde_derdd.'),
          E('25.5.', 'talk', 'Mauno Koiviston hautajaisia seurataan suorana.', [['13:47', '@mustikkasoppa', 'Tääl myö katotaa livelähetystä Maunon hautajaisista tekstityksen kera']]),
          E('15.6.', 'site', 'Uusi Telegram-ryhmä.'),
          E('23.6.–27.10.', 'talk', 'Topic-kilpailu Telegram-ryhmän nimestä. Ryhmä on vuorotellen kuppainen, kermaperseinen, homeinen, okkultistinen, nymfo- ja erotomaanien ryhmä, Pikkumarsujen ryhmä, Blue Oyster -baari ja KLEMMARIkerho.', [['17:13', 'mustikkasoppa', 'Pulinan kermaperseinen Telegram-ryhmä'], ['19:35', 'mustikkasoppa', 'Pulihomojen Blue Oyster Telegram baari']]),
          E('28.7.', 'mod', 'Englanniksi huutelija kickataan.', [['00:04', 'keber', 'lets smoke nice people from finland'], ['00:09', '*', 'keber was kicked by Nicd (Finnish or GTFO)']]),
          E('9.9.', 'talk', 'fusil muistelee miittiä, johon hän osti 3 pulloa kuohuviiniä ja mansikoita.', [['21:48', '@fusil', 'ostin pulinan miittii 3 pulloo kuohuviiniä ja mansikoita'], ['21:48', '@fusil', 'eikä sinne tullu muita ku samiy ja minä :<'], ['21:48', '@fusil', 'ja samiy ei juonut :<']]),
          E('13.9.', 'talk', 'Päivän aiheena taikasienet ja LSD.', [['18:03', 'pulisija13', 'oon kokeillu kahesti sieniä'], ['18:03', 'pulisija14', 'mä oon joskus ajatellut kasvattavani kotona sieniä'], ['18:28', 'pulisija15', 'Siks LSD on paras'], ['18:35', 'pulisija16', 'toki ois kiva jos sieniä sais alkosta']]),
          E('19.–30.9.', 'mod', 'Ruuf löytää kanavan googlaamalla IRC-kanavia ja ryhtyy kiistelemään kaikkien kanssa. 11 päivän päästä Q kickaa hänet.', [['23:06', 'Ruuf', 'löyty samassa hössyssä kuin tämä kanava eli googlettamalla mitä irc-kanavia on -tää oli ensimmäinen'], ['19:06', '*', 'Ruuf was kicked by Q (rauhoitu ja katotaan viikon päästä uudestaan)'], ['19:08', 'makinen', 'mut toisaalta hyvä kenkiä ajoissa ennen kuin alkaa kunnolla juurtua']]),
          E('22.10.', 'talk', 'Topic-lainaus: "makinen: oho joinasin vahingossa pulinan telegrammiin".'),
          E('3.11.', 'bot', 'kummituksen horoskooppi on avointa koodia GitHubin pulinairc-organisaatiossa. Repon kuvauksen kirjoitusvirhe huvittaa.', [['09:49', '@rolle', 'pege, Siitä korjaamaan: https://github.com/pulinairc/horoskooppi'], ['09:49', 'kummitus', 'GitHub - pulinairc/horoskooppi: Fetches Finnish horoschope from Iltalehti.'], ['09:52', '@rolle', 'horsochope :D']]),
          E('24.11.', 'meet', 'Joulumiitti Helsingin Kaislassa klo 18 alkaen, päivä valittiin Doodlella. Paikalla: Nefastos, Damaskox, Aswang ja samiy.', [['16:58', 'samiy', 'sinne on varmaan jotai 10 tyyppiä tulossa tällä hetkellä'], ['21:10', 'Damaskox', 'Drinn, sua kaivataan täällä D\'='], ['00:28', 'Damaskox', 'Kiitokset kaikille miitistä! Kokoonhuutajalle kans!']]),
          E('29.11.', 'mod', 'rolle käskee erästä pulisijaa lopettamaan toisen haukkumisen. Kun tämä ei lopeta, tulee kick: "Mitä kohtaa sanasta lopeta et ymmärtänyt".'),
          E('4.12.', 'talk', 'Eräs kanavan aktiivisista pulisijoista on yksi kolmesta miehestä, joita ammuttiin edellisiltana helsinkiläisessä pubissa. Luoti menee 2 cm sydämen ohi. Tieto tulee kanavalle kaverin kautta, ja uhri vastailee itse samana iltapäivänä. Päivästä tulee joulukuun vilkkain.', [['13:37', 'pulisija17', 'lempparipubissa ammuskeltu eilen illalla porukkaa, 3 ottanut osumaa'], ['13:59', 'pulisija17', 'kuulemma 2cm sydämmen vierestä menny luoti'], ['14:00', 'pulisija18', 'Jestas :/'], ['14:21', 'pulisija19', 'välitä terkut']]),
        ],
        2018: [
          E('26.1.', 'meet', 'Oluthenkinen minimiitti Helsingissä: Bierhaus München, Ølhus København ja Piazza. rolle tulee junalla. Paikalla: rolle, Nefastos, sirhoksu, samiy, Dilaz, convulVAU, soupy ja Pege.'),
          E('10.2.', 'site', 'Telegram-ryhmä saa uuden osoitteen ja nimen Pulina Diamond TeleClub.'),
          E('16.2.', 'site', 'pulina.fi saa miittisivun, ja rolle lisää sinne tulevan 10-vuotisjuhlamiitin. Koko sivuston koodi on avointa GitHubissa.', [['16:15', '@rolle', 'Lisäsinpäs tuonne mun YYBERBYYBER hienolla tekniikalla tulevan miitin https://www.pulina.fi/miitit/'], ['16:19', '@fusil', 'kerran kun oli yks miitti niin kaikki lupas tulla mutta kukaan ei tullut']]),
          E('15.3.', 'mod', 'Eräs aktiivisista irkkaajista kertoo olevansa kriisissä. Ylläpitäjä kickaa hänet ja jättää kickin syyksi linkin Mielenterveysseuran kriisipuhelimeen.'),
          E('20.3.', 'meet', 'After work -pikamiitti Helsingin Kaislassa klo 17, 6 henkeä. Paikalla mm. Nefastos, Kauhukomedia, pihlaja ja Dilaz.'),
          E('6.4.', 'talk', 'Matrix puheeksi ensimmäistä kertaa.', [['17:24', 'makinen', 'irc 2.0 saattaa olla matrix'], ['17:29', '+lapyo', 'matrix vaikuttais jopa ihan asialliselta seuraavalta askeleelta']]),
          E('8.4.', 'talk', 'Kanava täyttää 10 vuotta.', [['08:43', '@mustikkasoppa', 'Nyt ollaan virallisesti 10v. vanhoja puleja <3']]),
          E('21.4.', 'meet', '10-vuotisjuhlamiitti Jyväskylän Sohwissa, 20 henkeä. Paikalla mm. rolle, mustikkasoppa, Nefastos, convulVAU, jugde_derdd, Gerry, Dataaja95, Anicyna, Damaskox, pihlaja ja Sikanaama.', [['01:03', 'convulVAU', 'mut nyt ihan kotona tenuttelen ku kato huomenna PULINAMIITTI'], ['12:46', 'mustikkasoppa', 'uuh illal miitti <3']]),
          E('21.4.', 'site', 'rolle ostaa IRCCloudin miittipäivänä, jotta voi irkata miitistä, ja lähettää kuvia suoraan Sohwista. 25.4. topicissa lukee "IRCCloud, IRCCloud, IRCCloud? IRCCloud!"', [['17:07', 'rolle', 'Teinpäs nyt niin että menin ja ostin IRCCloudin.'], ['19:04', '@rolle', '20 ihmistä miitissä']]),
          E('26.4.', 'talk', 'Ensimmäinen ajatus Pulina-appista, joka yhdistäisi irkin ja Telegramin.', [['18:13', '+makinen', 'pulina-app ja matrix ois ehkä sit ainut realistinen mobiilijengiä ja irkkaajia yhdistäviä'], ['18:14', '@Anicyna', 'pulina-app varmaan teknisesti pyörittäs shadow-kanavia irc ja telegram puolella']]),
          E('13.5.', 'talk', 'makinen toteaa, että Pulina on viimeisiä aktiivisia suomalaisia QuakeNet-kanavia.', [['02:37', '+makinen', 'joo pulina on viimeisiä quakenet suomalaisia aktiivisia kanavia']]),
          E('23.5.', 'mod', 'Nicd kickaa akvaariosivustoaan joka kanavalla mainostavan kiertolaisen. Se palaa ja väittää pulina.fi:tä omakseen.', [['15:13', '@Nicd', 'se kiertää irkissä ja mainostaa aina sen akvaariosivua, ei sillä oo muuta asiaa :D'], ['15:22', 'jee', 'https://www.pulina.fi/tietoa/ joo mun sivut :D'], ['15:23', '*', 'jee was kicked by Nicd (potku ei ole kutsu tulla takaisin)']]),
          E('28.5.', 'site', 'samiy perustaa Pulinalle Discord-palvelimen. Osa vastustaa suljettua järjestelmää.', [['21:06', '@samiy', 'otinpas discordin käyttöön'], ['21:15', 'Dataaja95', 'Joo ei mitään discordia. Paska ja suljettu järjestelmä']]),
          E('16.6.', 'meet', 'Kesämiitti Sinebrychoffin puistossa Helsingissä klo 14 alkaen, iltaa jatketaan terassilla noin klo 20 asti. Paikalla: mustikkasoppa, Nefastos, pihlaja, sirhoksu, Aswang, Damaskox, jape ja hetken samiy.', [['14:10', '@Nefastos', 'Miitti virallisesti korkattu, siirrytään kohta Koffin puistoon jo vähän etuajassa']]),
          E('26.6.', 'mod', 'drinn vitsailee kirjoittamalla "/kill Nicd" ja saa tunnin bannin.', [['16:02', '+drinn', '/kill Nicd'], ['16:02', '@Nicd', 'drinn: you have no power here'], ['21:04', '+drinn', 'joke went horribly wrong']]),
          E('6.7.', 'talk', 'fusil haikailee: irkki kuivui vuodessa, kun väki siirtyi Telegramiin ja Discordiin.', [['03:17', '@fusil', 'mä rupesin just miettii pulinabuubisen numeroita ja tuli paha mieli kun suurin osa niistä ei enää oo tääl :<'], ['03:20', '@fusil', 'jotenkin ihan vuoden sisään kuivunut tämä irkkihomma tuntuu :o']]),
          E('10.7.', 'talk', 'Anicyna täyttää 30 ja Gerrye seuraavana päivänä 29. Topicissa juhlitaan heidän yhteisiä 59-vuotisjuhliaan.'),
          E('1.–9.8.', 'mod', 'GLC ja vmt kiusaavat kanavaa ja saavat sirhoksulta kickejä. Lopulta rolle heittää GLC:n ulos.', [['19:13', 'GLC', 'voi vittu mitä luusereita täälläki ei saatana :D'], ['19:14', '*', 'GLC was kicked by rolle (Sua ei kaivata täällä. Hyvästi.)'], ['19:14', 'klbz', 'herralle kiitos']]),
          E('22.8.', 'talk', 'IRC täyttää 30 vuotta, ja samiy onnittelee topicissa.', [['20:01', 'motni', 'sit onkohan tää olemassa seuraavat 30vuotta ']]),
          E('21.9.', 'talk', 'Kanava hiljenee.', [['23:01', '@rolle', 'Kaikki näköjään taas Telegrammin puolella.']]),
          E('26.9.', 'mod', 'Nicd kickaa erään pulisijan natsipuheista: "antaa olla natsipuheet".'),
          E('10.10.', 'mod', 'Kesken perhejakoriidan mustikkasoppa kickaa rollen, kun tämä kutsuu häntä vauvaksi.', [['17:18', '@rolle', 'No mustikkasoppa onki tommone vauva'], ['17:18', '*', 'rolle was kicked by mustikkasoppa (ite oot)']]),
          E('16.10.', 'bot', 'rolle aloittaa kummituksen uudelleenkirjoituksen Pythonilla Sopel-kehyksen päälle. Testibotin nimi on kumiotus, ja ensimmäiseksi se saa oraakkelin. Vanha eggdrop-kummitus jää historiaan.', [['02:24', '@rolle', 'Koodasin oraakkelin pythonilla'], ['10:59', '@rolle', 'Python kivempaa ja toimii nopeammin kuin tuo vanha eggdrop.'], ['12:26', '@Nicd', 'paska botti tää uus']]),
          E('17.11.', 'talk', 'Anicyna julistaa topicissa: "Pulinan 10v miitti oli HOAX!!!"'),
          E('21.11.', 'bot', 'Uusi kummitus hakee säätiedot Ilmatieteen laitokselta. Sää kysytään nyt komennolla !keli.', [['10:15', '@rolle', 'mustikkasoppa: Se muuttui !keli']]),
          E('27.11.–5.12.', 'mod', 'Seksispämmibotit löytävät kanavan. Mila33, alexiana, latina_ ja sexygirl kickataan.', [['20:35', '*', 'latina_ was kicked by mustikkasoppa (sexii saa muualtakin)'], ['23:18', '@rolle', 'Elämme aikoja kun vuonna 2018 seksibotit tulee irkkiin']]),
          E('9.12.', 'talk', 'Tavallinen ilta kanavalla.', [['22:06', 'pulisija2', 'ei sitä bentsokoukkua kannata huvikseen hommata'], ['22:07', 'pulisija3', 'saatanan narkit'], ['22:07', 'pulisija3', 'oispa pilveä'], ['22:07', 'pulisija4', 'oispa bentsoja'], ['22:07', 'pulisija5', 'oispa sieniä']]),
          E('15.12.', 'meet', 'Pikkujoulumiitti Helsingin Thirsty Scholarissa klo 19, paikka vaihtui Kaislasta. Paikalla: Damaskox, Nefastos, drinn, pihlaja, sirhoksu ja Aswang.', [['20:46', 'Damaskox', 'Nashus, meitä on nyt viis paikalla.'], ['20:57', 'Damaskox', 'Kunpa irkkiin sais suoraan kuvan jaettua, vaivattomasti ja helposti =S']]),
        ],
        2019: [
          E('28.1.', 'mod', 'Eräs pulisija yrittää jakaa kuvan liittämällä sen kanavalle base64-tekstinä, 10 riviä merkkisotkua. nefastos kickaa hänet syyllä "kokeilepa uudestaan".'),
          E('4.2.', 'talk', 'Matti Nykänen kuolee. Topicissa lukee "rip Matti Nykänen 1963-2019".', [['09:19', 'hendrix', 'niin kuin matti sanoi, elämä on ihmisen parasta aikaa']]),
          E('12.2.', 'talk', 'Olli Lindholm kuolee. Topicissa lukee "rip Olli Lindholm 1964-2019".'),
          E('13.2.', 'talk', 'Anicyna hyvästelee topicissa Mars-mönkijä Opportunityn: "matkasi piti kestää vain 95.2 päivää, jaksoitkin 5498".'),
          E('22.2.', 'meet', 'Yllätyskaljamiitti Helsingissä. Paikalla: rolle, mustikkasoppa ja Dilaz.', [['19:27', 'Dilaz', 'yllärikaljamiitti'], ['19:28', 'mustikkasoppa', 'luin eeka et bajamajamiitti']]),
          E('23.3.', 'bot', 'kummituksen oraakkelista tulee suosittu. Vuonna 2019 siltä kysytään 2 322 kysymystä, kun vuonna 2018 niitä oli 376. mustikkasoppa kysyy niistä 1 235.', [['18:54', 'kummitus', 'mustikkasoppa: Et ole, mutta pää pystyyn, ei sitä kukaan huomaa!']]),
          E('24.3.', 'talk', 'sinppa_ kirjoittaa kanavalle ensimmäistä kertaa. Myöhemmin hän nousee aktiivisimpien joukkoon.', [['19:09', 'sinppa_', 'mo :D']]),
          E('3.4.', 'mod', 'Q kickaa erään pulisijan juutalaisvastaisista puheista syyllä "tuu takaisin kun et oo antisemitisti".'),
          E('7.–11.4.', 'talk', 'Viikonpäivätopicit: "Maanantai, viikon paskin päivä" ja "Tiistai on toivoa täynnä". Tunnin päästä jälkimmäinen muuttuu muotoon "Tiistai on epätoivoa täynnä". Viikko jatkuu topiceilla "Keskiviikkona kriiseillään" ja "Torstai on tapaturmien päivä".'),
          E('26.4.', 'bot', 'Nicd siirtää np-viestit omalle #nytsoi-kanavalleen ja tekee niistä tilastoja.', [['09:22', 'Nicd', 'samiy: np-viestit meni #nytsoille ja hyvä niin, ketään ei kiinnostanut']]),
          E('3.5.', 'talk', 'mustikkasoppa vaihtaa topiciksi "Uli sanoi puli." Siitä tulee vuoden vakiotopic, ja muunnelmia on kymmenkunta.'),
          E('10.5.', 'talk', 'Iltapäivän aiheena MDMA ja LSD.', [['15:39', 'pulisija6', 'nuorempana tuli kans vähän viihteiltyä mutta aina oli kyl hyvä meno kun otti mdma:ta tai naksuja'], ['15:41', 'pulisija7', 'ite ainakin tilaan seuraavan kerran testerin ku jotain meinaan vetää ;D'], ['15:43', 'pulisija7', 'LSD vähän sama juttu']]),
          E('16.5.', 'talk', 'rollen mukaan aktiivit ovat siirtyneet Telegramiin, josta on tullut "uus pulina".', [['09:55', 'rolle', 'Pulinan aktiivitkin on tuolla Telegrammissa, siitä on tullu tavallaan uus pulina, mut mukava nähdä että täälläkin hölistään silti aika ajoin.']]),
          E('19.5.', 'talk', 'Eräs pulisija hämmästelee puheenaiheita.', [['23:01', 'pulisija8', 'Jestas. Täällähän puhutaan bentsoista ja opioideista.'], ['23:04', 'pulisija9', 'OISPA PIRII']]),
          E('26.5.', 'star', 'Suomi voittaa jääkiekon MM-kullan. Ennen ottelua topicissa lukee "Suomi voittoon 20019!!", ja yöllä "Suomi MM-kultaa 2019 NEVÖFÖGET!".', [['21:03', 'hendrix', 'aika pitkään saadaan suomen voittoa odottaa jos topiccia katsoo'], ['23:25', 'samiy', '#torille']]),
          E('3.–5.8.', 'talk', 'Irkkaajan viikko topicissa: "Neljältä irkkiin ja kuudelta baariin, sellainen irkkaajan lauantai", sitten "irkkaajan sunnuntairapula" ja lopuksi "irkkaajan maanantai".'),
          E('4.8.', 'game', 'Ensimmäinen skribbl.io-piirustuspeli kanavalla.', [['02:55', '@Anicyna', 'kiinnostasko runkdi skribbl.io :ota?'], ['02:58', '@Anicyna', 'https://skribbl.io/?96Xo2fiu6v']]),
          E('29.–30.9.', 'talk', 'Yöllä väitellään kannabiksesta ja porttiteoriasta.', [['23:34', 'pulisija44', 'oispa piriä'], ['00:08', 'pulisija43', 'oispa heroiinia'], ['00:13', 'pulisija41', 'heroiiniin kuolee, ja se on huomattavasti haitallisempi päihde kuin kannabis. aivan typerää edes verrata']]),
          E('21.10.', 'talk', 'Muistellaan 10-vuotismiittiä. Illalla Anicyna vaihtaa topiciksi "Kaikki tällä kanavalla on rikki".', [['19:11', 'Dataaja95', 'pulinan 10v miitti oli kyllä 666/5!'], ['19:12', 'mustikkasoppa', 'Anicyna: muistatko ku sikanaama lähti taksilla vantaaseen takas XD']]),
          E('22.10.', 'meet', 'samiy ehdottaa joulumiittiä elokuusta lähtien ainakin 6 kertaa, mutta kannatusta ei tule. Vuonna 2019 ei pidetty yhtään topicissa ilmoitettua miittiä.', [['18:16', 'samiy', 'ite yritin joulumiittiä järjestää meille muttei saanu kannatusta :D']]),
          E('12.11.', 'mod', 'Eräs pulisija haukkuu humalassa muita koko illan, ja yöllä yksi haukuista päätyy topiciin. Ketään ei kickata.'),
          E('18.12.', 'bot', 'rolle ehdottaa trivian paluuta, ja 22.12. kanavalla testataan BogusTrivia-bottia.', [['10:21', '@rolle', 'Mun mielestä se trivia oli ihan hauskaa viihdettä aikoinaan'], ['10:24', 'matsu', 'Annan ääneni pysyvälle #pulina-trivialle']]),
          E('22.12.', 'mod', 'mustikkasoppa kickaa kahdesti drinniä muistuttavan drinding-nimimerkin. Illalla hän tekee "joresiivouksen", ja uudella nickillä palannut Jore lentää.', [['18:59', 'drinn', 'joo etr- on jore'], ['19:02', 'Monster1', 'Yks mitä jore tekee on että liittyy kanavalle ihan uudella nickillä ja alkaa selittämään jotain ihan ku olisin aina ollu kanavalla']]),
          E('27.12.', 'game', 'Peli-ilta: Command & Conquer: Red Alert 2. Lisää RA2-iltoja 28. ja 29.12.', [['01:10', '@rolle', 'kaamos kanssa rökitettiin tossa vika peli'], ['01:10', 'makinen', 'täytyy viritellä RA2 ni pääsee messiin ens kerralla'], ['01:12', 'kaamos', 'mut joo makinen paa ihmees viritellen, vitu hauska peli toi o']]),
          E('31.12.', 'record', 'Uudenvuodenaatto on vuoden vilkkain päivä: 2 895 riviä.', [['13:14', 'Batholith', 'toisaalta vois kyl tulla ikävä tätä kanavaa'], ['13:20', 'Nicd', 'Trolleja on aina']]),
          E('koko vuosi', 'record', '"Oispa kaljaa" sanotaan vuonna 2019 kanavalla 1 127 kertaa. lapyon osuus on 652 ja samiyn 355.', [['18:22', 'samiy', 'aina voi oispatella kaljaa vaikka sitä olisikin']]),
        ],
      } },
    { years: '2020–2022', from: 2020, to: 2022, title: 'COVID-19, koronavuosien aikainen #pulina', color: '#ffc857',
      paras: [
        'Koronakeväänä 2020 ihmiset palasivat koneiden ääreen, ja rivejä kertyi 621 630, 2 kertaa edellisvuotta enemmän. kummitus oppi komennon !corona, jolla sai maakohtaiset tartunnat, kuolemat ja parantuneet. Sitä käytettiin kanavalla 163 kertaa.',
        'Kickejä annettiin taas: 136 vuonna 2020, niistä 69 mustikkasopan antamia. Huumepuhetta oli silti enemmän kuin koskaan. Vuonna 2022 kanava yhdistettiin Telegramiin ja Discordiin, ja säännöt nostettiin topiciin.',
      ],
      top: [['mustikkasoppa', 269685], ['ivy', 109929], ['sinppa', 89027], ['samiy', 84723], ['lapyo', 55030]],
      events: {
        2020: [
          E('2.–4.1.', 'talk', 'Uudenvuoden jälkeen kaksi irkkaajaa kertoo avoimesti psykiatrisesta hoidosta, pitkästä osastojaksosta ja psykoosiherkkyydestä.'),
          E('3.1.', 'game', 'Xonotic-palvelin siirtyy pulina.fi:n VPS:lle ja pyörii 24/7. Pelin palvelinlistasta se löytyy nimellä Pulina.fi.', [['00:13', '@rolle', 'Serveri tulilla 24/7, pellaa kuka pellaa.'], ['11:33', '@rolle', 'makinen: Nyt on Xonotic VPS:llä, 300gbps verkossa'], ['14:13', 'Khaida', 'Hauska toi xonotic :D']]),
          E('6.1.', 'game', 'Ensimmäinen skribbl.io-piirustuspeli pulinalaisten kesken. Anicyna jakaa pelilinkkejä koko illan.', [['21:15', 'Anicyna', 'https://skribbl.io/?ttmyelzBOy'], ['21:21', 'kaamos', 'tuu säki makinen skribbl.io']]),
          E('12.1.', 'game', 'rolle kokeilee skribbl.io-piirustuspeliä eikä vakuutu.', [['01:15', '@rolle', 'mustikkasoppa: Kokkeillaa https://skribbl.io/?qC9aXovPUq'], ['01:15', 'kummitus', 'skribbl.io - Free Multiplayer Drawing & Guessing Game'], ['01:20', '@rolle', 'Ihan paska peli']]),
          E('23.1.', 'meet', 'lapyo ja grinder julistavat Tampereelle miitin 4.4.2020, ja Anicyna nostaa sen topiciin.', [['23:44', '+lapyo', 'Anicyna: 4.4.2020'], ['23:47', '+lapyo', 'laita Anicyna topikkii et 4.4.2020. miitti']]),
          E('26.1.', 'bot', 'kummitus on alhaalla, kunnes rollelle tulee uusi reititin.', [['16:45', '@mustikkasoppa', 'rip meidän reititin'], ['16:46', '@rolle', 'Eli kummitus on down siihen asti kun tulee uus reititin']]),
          E('27.1.', 'talk', 'Wuhanin uusi koronavirus nousee puheeksi ensimmäistä kertaa, ja sitä verrataan SARSiin.', [['00:03', 'grinder', 'SARSin kuolleisuus oli 9,6% (paaosin heikon terveydenhuollon maissa). 8096 sairastunutta ja 774 kuollutta'], ['00:03', 'grinder', 'taa 19nCoV todnak jaa tuotakin heikommaksi epidemiaksi, toivottavasti'], ['00:05', 'sinppa_', 'tulispa maailmanloppu']]),
          E('2.2.', 'talk', 'Palindromipäivä 02022020 nousee topiciin: "02022020 nevöföget".'),
          E('7.2.', 'mod', 'rolle kickaa ja bannaa erään pulisijan: "Jospa yhden perjantain sais viettää ilman tämmöstä kiitos". Seuraavina viikkoina tämä yrittää takaisin VPN:n kautta ja uusilla nickeillä.'),
          E('8.2.', 'mod', 'sirhoksu kickaa kolme pulisijaa: "ei rasistista kieltä kiitos".'),
          E('12.2.', 'bot', 'rolle kokeilee VotebanBotia. Ensimmäinen äänestys vaatisi 94 ääntä, ja botti putoaa kanavalta samalla minuutilla.', [['21:05', '@rolle', 'Pistin tollasen päälle https://github.com/kulverstukas1/votebanbot'], ['21:06', 'VotebanBot', '94 votes are needed to end voting before 1 minute mark.']]),
          E('13.2.', 'mod', 'Uudet säännöt.'),
          E('26.2.', 'site', 'rollen kotipalvelin asennetaan uudelleen, ja kummitus on poissa noin viikon.', [['15:28', '@rolle', 'Huhu kun on serverin uudelleenasennus työlästä puuhaa.'], ['23:59', '@rolle', 'Mut ainakin kummitus yms on back <3']]),
          E('27.2.', 'bot', 'kummitus jakaa linkit kanavan tilastoihin: kokonais-, kuukausi- ja reaaliaikaiset.'),
          E('29.2.', 'game', 'Virtuaali-ALIAS klo 22. Pelattavaksi tulee lopulta piirustuspeli.', [['22:28', '+Naama', 'Ei Alias vaan Pictionary']]),
          E('3.3.', 'talk', 'TuikkA tulee kanavalle ensimmäistä kertaa ja kirjoittaa maaliskuussa 5 649 riviä.', [['23:36', 'TuikkA', 'mä tääl ekaa kertaa..'], ['23:36', 'Batholith', 'Tervetuloa!']]),
          E('4.3.', 'site', 'pulina.fi:n etusivun lokinäkymä anonymisoidaan lapyon pull requestilla.', [['18:57', '@rolle', 'Mut tunkatkaa tonne anonyymius -ominaisuus ni pistän liveks'], ['22:48', '@rolle', 'Nyt on kaikki anomuumeja https://www.pulina.fi']]),
          E('5.3.', 'site', 'Sääntöihin lisätään kohta 11, ja pulina.fi saa pelisivun.', [['10:38', '@rolle', 'Lisäsin kohdan 11'], ['21:55', '@rolle', 'No niin nyt on pelit nätisti listattuna https://www.pulina.fi/pelit/']]),
          E('6.3.', 'game', 'Xonotic-ilta ja Red Alert 2: Mental Omega -matsi. Topicissa lukee "Xonotic tulilla NYT!"', [['20:20', '@rolle', 'Oisko vähä xonotic? kuka tullee pelaa? https://www.pulina.fi/pelit/xonotic/'], ['20:27', '@rolle', 'Jos kiinnostaa Red Alert 2 Mental Omega -matsi'], ['20:36', 'Thunder^^', 'red alert oli kyl huikee']]),
          E('10.3.', 'bot', 'kummitus oppii komennon !corona.', [['15:45', '@rolle', '!corona finland'], ['15:45', 'kummitus', '😷 40(+7) ⚰️ 0() 👍 39 ☠️ 0.0%']]),
          E('12.3.', 'talk', 'Korona tulee puheenaiheeksi.', [['00:08', '+lapyo', 'oispa korona kaljaa korona'], ['06:00', 'AnReal', 'aamun korona, https://yle.fi/uutiset/3-11252849'], ['06:00', 'kummitus', 'Näyttelijä Tom Hanksilla koronavirustartunta | Yle Uutiset | yle.fi']]),
          E('13.3.', 'talk', 'Koronahamstraus näkyy topicissa: "Puli ja vessapaperirulla".'),
          E('15.3.', 'meet', 'Tampereen 4.4. miitti perutaan koronan takia.', [['15:16', '@samiy', 'toivottavasti kesämiittiä ei peruta koronan takia o_o'], ['20:25', '@samiy', 'miitti peruttu koronan takia']]),
          E('16.3.', 'site', 'rolle pystyttää The Lounge -selainirkin osoitteeseen irc.pulina.fi, myöhemmin chat.pulina.fi, ja tekee sille oman teeman. Discordiin hän ei aio siirtyä.', [['16:56', '@rolle', 'Ai että tää thelounge on nyt kiva ku pyörii omalla serverillä :D'], ['20:22', '@rolle', '"miksei me käytetä discordia"'], ['20:24', '@rolle', 'En itsekään pidä discordista']]),
          E('18.3.', 'game', 'Xonotic-ilta kanavan omalla palvelimella.', [['00:30', 'snowfake', 'nyt korona-etätöissä oma kiljupönttö oiski kova peliliike']]),
          E('18.3.', 'bot', 'kummitus oppii Motivaatiovalaan lausahdukset, kun motivaatiovalas.com on kadonnut netistä.', [['16:58', '@rolle', 'Koska motivaatiovalasta ei ollut, rippasin netistä ne lausahdukset ja tein sen ite']]),
          E('21.3.', 'talk', 'THL kertoo Suomen ensimmäisestä koronakuolemasta. Illalla puhutaan 10 hengen kokoontumisrajasta hautajaisissa.', [['15:10', 'dataaja95', 'THL kertoo, että Suomessa on kuollut ensimmäinen ihminen koronaviruksen aiheuttamaan COVID-19-tautiin.']]),
          E('1.4.', 'bot', 'Suomessa 1 418 tartuntaa.', [['08:23', 'LM-', '!corona finland'], ['08:23', 'kummitus', 'Infected in Finland: 1,418 (+0), deaths: 17 (+0), recovered: 10, cases per million people: 256']]),
          E('4.4.', 'game', 'Skribbl-ilta koronakeväänä.'),
          E('6.4.', 'mod', 'Q kickaa kaksi pulisijaa: "jätetäänpä pois nuo eugeniikkahommat".'),
          E('17.–20.4.', 'mod', 'Eräs pulisija floodaa öisin, ja opit kickaavat hänet 13 kertaa 4 päivässä. Q:n viimeinen kick: "tuu huomenna uudestaan".'),
          E('18.4.', 'talk', 'Topic juhlii: "sinppa_ lahjootti €2! | Ei saa olla surullinen marsu".'),
          E('20.4.', 'site', 'rollen kotipalvelimesta hajoaa virtalähde.', [['23:33', '@rolle', 'Jahas serveristä hajos virtalähde']]),
          E('28.4.', 'talk', 'rolle kertoo, että Pulinan Telegram-ryhmässä on 30–40 ihmistä ja että siitä on tullut livenä tavanneiden pulinalaisten paikka.', [['14:04', '@rolle', 'pirta: Telegrammissa on sellanen 30-40 ihmistä ja se on tosi aktiivinen ja elää ihan omaa elämäänsä, mutta kyllä kanavakin vielä aktiivinen on.'], ['14:05', '@rolle', 'Telegrammi on ihan jees mut siitä on muodostunu enemmän sellanen live-pulinalaisten paikka, oikeastaan lähes kaikki on nähty livenä.']]),
          E('1.5.', 'game', 'WebLiero-matsi vappuna.'),
          E('6.–19.5.', 'talk', 'samiy pitää topicissa piristyssarjaa: "ei pidä olla masentunut", "ei pidä olla surkumieli", "ei pidä antautua synkkyydelle" ja lopuksi "Marsujen tassut töpsötteleväiset".'),
          E('16.5.', 'talk', 'Euroviisut on peruttu koronan takia. Anicyna vie topiciin korvaavan lähetyksen: "ei pidäkään sillä eurovision".'),
          E('22.–24.5.', 'site', 'Palvelin heittää XFS-virheitä, ja rolle asentaa järjestelmän uudelleen SSD-levylle.', [['21:15', '@rolle', 'Meni ihan uusiks serveri ku pistin järjestelmän SSD-levylle']]),
          E('30.5.', 'talk', 'SpaceX:n ensimmäinen miehitetty Crew Dragon -laukaisu katsotaan yhdessä NASAn striimistä.', [['18:02', 'sinppa_', 'nasan striimi jo tulilla. 22:22 pitäis olla lähtö'], ['18:17', 'ivy', 'katotaanks lähtöö yhessä'], ['22:22', '+paveq', 'Nyt lähtee']]),
          E('19.–23.6.', 'mod', 'Häirikkö palaa nickeillä aaaaaa, aaaaaaa, cccccc ja RTX2080Ti. Opit kickaavat sen yli 25 kertaa 5 päivässä.'),
          E('25.6.', 'talk', 'lintumiehen ehdotuksesta topiciin nousee "<sinppa_> saanks mä tehdä kiljuu sun kissasta".'),
          E('28.6.', 'site', 'chat.pulina.fi päivitetään The Loungen uusimpaan versioon.', [['17:51', '@rolle', 'No niin, nyt uusinta versiota tulilla myös https://chat.pulina.fi/']]),
          E('heinäkuu', 'mod', 'Kanavalle tulvii roskapostibotteja nimillä kuten Bella19, Lolita16, Sweetgirl19 ja Linda27. mustikkasoppa kickaa niitä kymmeniä kertoja ja kirjoittaa kuussa 13 219 riviä.'),
          E('21.7.', 'record', 'Vuoden vilkkain päivä: 4 359 riviä.'),
          E('3.8.', 'site', 'Päivän aktiivisimmat (!toptod) päivittyvät reaaliajassa ilman sivun latausta.', [['14:17', '@rolle', 'Nyt tää päivittyy reaaliajassa sivua päivittämättä https://peikko.us/toptod.php']]),
          E('syyskuu', 'talk', 'Uusi tulokas metroidman nousee heti kärkeen: syyskuussa 4 054 riviä, lokakuussa yli 6 000.'),
          E('1.9.', 'site', 'Etusivulle reaaliaikaiset päivän aktiivisimmat.'),
          E('2.9.', 'bot', 'pulina.fi saa komentosivun, ja topic mainostaa: "Uusia komentoja: https://www.pulina.fi/komennot/".', [['20:57', '@rolle', 'matkum: Ei discord-roskaa pulinalle']]),
          E('8.–9.9.', 'game', 'Xonotic-palvelin poistetaan VPS:ltä, koska se vie 20 Gt 30:stä. Seuraavana päivänä se palaa toiselle palvelimelle.', [['14:14', '@rolle', 'Deletoin ton xonotic-serverin tilaa viemästä kun ei tule juuri pelattua'], ['20:33', '@rolle', 'Harvinaisen tylsää tuota on yksin pelailla, poistuin serveriltä']]),
          E('30.9.', 'game', 'Among Us -villitys alkaa. metroidman houkuttelee kanavaa pelaamaan, ja peliä testataan pitkin syksyä.'),
          E('23.10.', 'talk', 'Topic kiittää edesmennyttä James Randia. 31.10. on Sean Conneryn vuoro: "olit se Bondein Bondi!"'),
          E('1.11.', 'talk', 'mustikkasoppa onnittelee rollea topicissa binäärinä: "01001000 01000010 01000100 ROLLE! t. Pulina<3<3".'),
          E('20.11.', 'talk', '"Pulinaa since 2008" muuttuu muotoon "Ulinaa vuodesta 2008", joka pysyy vakiotopicina pitkälle vuoteen 2021.'),
          E('28.11.', 'game', 'Red Alert II -ilta: rolle pelaa veljiensä kanssa ja kutsuu muita mukaan.', [['13:11', '@rolle', 'Tulisko joku pelaa RA2'], ['20:49', '@rolle', 'Oli muuten hauskat ra2-pelit']]),
          E('5.12.', 'bot', 'QuakeNet G-linettää rollen kotipalvelimen botnetiksi, ja kummitus, statbot ja peikko lentävät verkosta. 7.12. botit siirretään Hetznerin virtuaalipalvelimelle.', [['17:36', 'LM', 'G-line wutt'], ['17:52', '@rolle', 'ERROR Closing Link: peikko by hostsailor.ro.quakenet.org (G-lined (Botnets are not welcome on QuakeNet.))']]),
          E('19.12.', 'game', 'Joulun odotukseen kuva-arvauspeli: "Kuva-arvauspeli käynnistyy tänään illalla!"'),
        ],
        2021: [
          E('29.1.', 'game', 'Piirustusvisailu illalla.'),
          E('31.1.', 'site', 'rolle kirjoittaa pulina.fi:hin ohjeen irkkaamisesta älypuhelimella.', [['13:35', '@rolle', 'Haluan palata aikaan kun Pulinalla ei ollut Telegram- ja Discord-kanavia vaan kaikki oli irkissä'], ['16:14', '@rolle', 'Teinpäs tällasen https://www.pulina.fi/irkkiin-alypuhelimella/']]),
          E('1.2.', 'site', 'Reaaliaikaiset statsit katoavat vahingossa.', [['12:46', '@rolle', 'Jahas oon mennyt vahingossa deletoimaan reaaliaikaiset statsit :(']]),
          E('5.2.', 'game', 'Skribbl-ilta alkaa kello 20.'),
          E('16.–17.2.', 'site', 'pulina.fi:n palvelin asennetaan alusta uusimmalle Ubuntu LTS:lle.', [['09:29', '@rolle', 'Sitten vedin sileeksi uusimmalle LTS-ubuntuserverille tän pulina.fi']]),
          E('20.2.', 'site', 'pulina.fi uudistuu ja saa uuden logon.'),
          E('21.2.', 'site', 'Uusi paitatilaus.'),
          E('24.2.', 'site', 'Statsisivut saavat saman ulkoasun kuin uudistunut pulina.fi.', [['21:54', '@rolle', 'Teinpäs statsienkin ulkoasusta yhteneväisen https://pulina.fi/statsit']]),
          E('25.2.–14.3.', 'talk', 'Mielenterveys ja lääkitykset ovat puheenaiheena viikkoja. Eräs aktiivisista irkkaajista kertoo päivittäin, miten lääkityksen vaihto lisää ahdistusta. Toinen kertoo näköharhoista lääkeannoksen noston jälkeen. Muut neuvovat pyytämään lääkäriltä vaihtoa.'),
          E('28.2.', 'bot', 'rolle rakentaa #pulina.triviaan triviabotin vanhan BogusTrivia-skriptin päälle. Kone hakee kysymyksiä yön yli.', [['02:40', '@rolle', 'Mulla on sellanen tcl:n päällä pyörivä triviabotti'], ['08:09', '@rolle', 'Kone puksuttanut jo 50000 triviakysymystä :\'D'], ['20:23', '@rolle', 'Trivia valmis, nyt odottaa vain kysymyksiä']]),
          E('5.3.', 'game', 'Tietovisa #pulina.trivia alkaa.', [['22:08', '@mustikkasoppa', 'triviaa varmaan kohta?'], ['22:08', '+convulvau', 'miten tää triviahomma skulaa siis'], ['22:09', '@mustikkasoppa', 'toi trivia on #pulina.trivia kanavalla, siel vastataan suomeksi erilaisiin kysymyksiin :D']]),
          E('6.3.', 'bot', '!corona-komento poistetaan käytöstä.'),
          E('24.3.', 'mod', 'Eräs pulisija raivoaa toiselle, joka käy koronakeväänä toimistolla. Opit laittavat raivoajan jäähylle "rauhoittumaan ja selvittämään päätään".'),
          E('13.5.', 'site', 'Pulinan Telegram-ryhmän logit muunnetaan irssi-muotoon ja niistä tehdään omat statsit.', [['10:17', '@rolle', 'Sain telegram-history-dump/tg:llä pulinatg logit irssimuotoon ja generoitua statsit :D']]),
          E('13.–14.5.', 'bot', 'Lintukodon oraakkeli hajoaa, ja kummitus vastaa kaikille PHP-virheellä. Seuraavana päivänä rolle koodaa oraakkelin itse.', [['17:37', '@rolle', 'Tais vihdoin hajota toi http://www.lintukoto.net/viihde/oraakkeli/index.php']]),
          E('16.–17.5.', 'bot', 'kummitus saa keskustelevan talkbotin, jolle rolle syöttää kanavan logit aikojen alusta.', [['16:01', '@rolle', 'Etitäänpäs joku toinen talkbot nyt sitten'], ['00:39', '@rolle', 'Aswang: Koitin siis syöttää aikojen alusta logit tekoälylle']]),
          E('19.–21.5.', 'star', 'Talkbot-kummitus vastaa kaikille "Onnea Rainer", yli 140 kertaa 3 päivässä. Kukaan ei tiedä, kuka Rainer on, ja onnittelu päätyy topiciin.', [['10:18', 'kummitus', 'rolle: Onnea Rainer'], ['10:19', '@rolle', 'kummitus: Kuka vitun Rainer?'], ['09:16', '@Nefastos', 'Ekan kerran kun vilkaisee tänään irkkiin niin tuorein rivi: ONNEA RAINER :D']]),
          E('20.5.', 'bot', 'Uusia komentoja: !tee, !äijämatto, !randomjuttu, !hali ja !flippaa.'),
          E('20.5.', 'talk', 'Freenode-verkko hajoaa, kun ylläpitäjät perustavat Libera Chatin.', [['07:09', 'Wotac', 'kaikki ylläpitäjät lähti protestina ja perusti uuden verkon ja sinne lähettiin tekemään samat kanavat mitä freenoden puolella oli'], ['07:40', '+mustikkasoppa', 'voiko joku tiivistää suomeksi tää freenode juttu']]),
          E('21.5.', 'record', 'Vuoden vilkkain päivä uusien komentojen jälkeen: 4 077 riviä.'),
          E('22.5.', 'talk', 'Euroviisuja katsotaan ja arvostellaan yhdessä.'),
          E('18.6.', 'mod', 'IRC-verkkoja kiertävä roskapostittaja huutaa kanavalla capsilla. QuakeNet katkaisee sen yhteyden toistuvasti, ja lopuksi rolle kickaa sen: "ok boomer".', [['20:16', '+lapyo', 'lalbornoz: onx sul budii?']]),
          E('4.7.', 'meet', 'Aswang avaa Doodle-kyselyn Lahti-miitistä. 9.7. Halko lyö sen lukkoon: 7.8. klo 12 Pikku-Veskussa.', [['17:56', '@Halko', 'Hou hou hou! Muistakaahan Pulinan Lahti-miitti 7.8. klo 12 Pikku-Veskulla! Be there tai ole kuutio!']]),
          E('22.7.', 'site', 'botit.pulina.fi/pulinalinkit kokoaa kanavalla jaetut linkit.'),
          E('5.8.', 'mod', 'Englanninkielinen kävijä kysyy "Speak anyone english?" ja saa rollelta kickin: "Okay bye".'),
          E('7.8.', 'meet', 'Lahti-miitti Pikku-Veskussa, 4 hengen pikamiitti. Paikalla: Aswang, ivy, Halko ja t0iska.', [['09:41', 'ivy', 'mut kyl mä miittiin raahaudun'], ['11:12', '@samiy', 'hyvää miittiä teille']]),
          E('31.8.', 'site', 'rolle yrittää rakentaa kanavalle Matrix-sillan, mutta ei saa sitä toimimaan.', [['11:10', '@rolle', 'Mut toi irc gateway on yks roska']]),
          E('3.9.', 'bot', 'Oraakkeli saa oman botin: Pythia liittyy kanavalle.', [['15:14', '+mustikkasoppa', 'rolle: Pythia'], ['15:15', '@rolle', 'Pythia: Mitä mieltä kummituksesta?'], ['15:15', 'Pythia', 'rolle: Noin sitä duunaria kusetetaan ja selkänahasta kaikki revitään kun herrat elostelee.']]),
          E('5.9.', 'talk', 'Topic kehottaa lahjoittamaan puhetta Lahjoita puhetta -keräykseen: "Pulistaan meille parempia palveluja." 3.12. mukaan tulee ruotsinkielinen versio.'),
          E('14.10.', 'mod', 'Trolli kiertää nickeillä Kuusamo, Guest92, jore_ ja pulina85. sippis kickaa: "autan vähän ulkoilun alottamisessa".'),
          E('18.12.', 'game', 'ivy järjestää skribbl.io-illan klo 20.'),
        ],
        2022: [
          E('7.1.–5.3.', 'mod', 'ivy kickaa toistuvasti TerveysAsiaMies-trollia, jota Q-tio kickasi jo syyskuussa 2021.'),
          E('9.2.', 'star', 'samiy pyytää oraakkelibotti Pythiaa tyttöystäväkseen. Pythia suostuu, ja samiy vie suhteen topiciin: "samiy & Pythia <3 9.2.2022".', [['16:04', '@samiy', 'Pythia: ole minun tyttöystävä'], ['16:04', 'Pythia', 'samiy: Totta kai!!'], ['16:06', 'aniC', 'kummitus: saako samiy seurustella Pythian kanssa?']]),
          E('22.2.', 'talk', 'Päivämäärä 22.2.2022 klo 22:22:22 tallennetaan topiciin.', [['22:22', 'aniC', '22.02.2022 22:22:22']]),
          E('24.2.', 'talk', 'Venäjä hyökkää Ukrainaan. ivy ja jmh_ seuraavat yöllä Putinin puhetta ja uutisia.', [['04:46', '@ivy', 'Putin ilmoitti äsken et punainen viiva on ylitetty'], ['04:54', 'jmh_', 'saadaan suomeen kuuluisat 3euron bensan litrahinnat. se se o isoin murhe'], ['04:57', '@ivy', 'Sota alkoi.']]),
          E('26.2.', 'record', 'Vuoden vilkkain päivä kaksi päivää hyökkäyksen alun jälkeen: 3 451 riviä.'),
          E('27.2.', 'talk', 'Topicissa otetaan kantaa Venäjän hyökkäykseen Ukrainaan.'),
          E('20.3.', 'site', 'pulina.fi:n GitHub-linkki nousee topiciin.'),
          E('20.3.', 'mod', 'Kaksi pulisijaa riitelee rajusti. Q-tio lukee säännöt, ja eräs kävijä julistaa "Pulinan ydinsodan". Illalla rolle kickaa kaksi pulisijaa.', [['18:49', 'noob_', 'Pulinan ydinsota'], ['18:49', '@Q-tio', 'Mielivaltani heräsi juuri']]),
          E('8.4.', 'talk', 'Kanava täyttää 14 vuotta.'),
          E('9.4.', 'site', 'Discord-silta matterbridgellä: keskustelut kulkevat IRCin ja Pulinan Discordin välillä.', [['19:41', '@rolle', 'Nyt keskustelut siltautuu Discord <-> IRC'], ['19:45', '@rolle', 'Vike91: Valitettavasti komennot ei toimi Discordin puolella :D tuu irkkiin']]),
          E('16.4.', 'site', 'Silta myös Telegramiin.', [['16:16', '@rolle', 'Mun on pakko koittaa tota telegram-siltaa :D MUTTA laitan omaan ryhmäänsä sen'], ['16:39', 'gatewaybot', '(discord) <Rolle> IRC-kanavalta Discordissa tämä viesti']]),
          E('4.5.', 'memory', 'Kanavalla kerrotaan entisen, aikoinaan bannatun kävijän kuolemasta.'),
          E('15.5.', 'bot', 'rolle koodaa hailaittibotin Telegramin puolelle ja kokeilee sitä matterbridgen läpi.'),
          E('5.6.', 'site', 'rolle irkkaa lentokoneesta: Air Francen ilmainen viestiyhteys ei päästä IRCiä läpi, mutta Telegram-silta toimii.', [['18:39', 'gw', '<rollee> Heh Air Francen ilmainen viestimiseen tarkoitetun nettiyhteyden mielestä IRC ei ole pikaviestin'], ['18:39', 'gw', '<rollee> Joten voin irkata tätä kautta'], ['18:39', 'mustikkasoppa', '@rollee :DDDDDD']]),
          E('18.9.', 'mod', 'JeGod-Pope666 kickataan: "Finnish only, sorry".'),
          E('21.10.', 'mod', 'rolle tarkentaa sääntöjen kohtaa 7.', [['23:35', '@rolle', 'Samaa mieltä. Tarkensinpas kohtaa 7. https://www.pulina.fi/saannot/']]),
          E('joulukuu', 'site', 'Telegram-puolen pulinalaiset kirjoittavat kanavalle gw-botin kautta. Joulukuussa gw on kanavan toiseksi aktiivisin puhuja, 3 608 riviä.'),
          E('1.12.', 'mod', 'Säännöt topiciin.'),
          E('1.12.', 'talk', 'ChatGPT tulee kanavalle, ja ensimmäisellä viikolla jaetaan tekoälyn vastauksia.', [['19:41', 'bonez', 'kummitus: joko on ChatGPT tulilla?'], ['21:52', 'la_mettrie', 'samiy: OpenAI ChatGPT']]),
          E('4.–6.12.', 'mod', 'mustikkasoppa kickaa erään kävijän kahdesti: "ei huumeita tänne, kiitos".'),
        ],
      } },
    { years: '2023–', from: 2023, to: 2026, title: 'Uusi moderointi ja tekoälybotit', color: '#3bf0e4',
      paras: [
        'Joulukuussa 2023 otettiin uusi tatsi moderointiin. Puheoikeuden sai pyytämällä opeilta, joiksi tulivat Setsu ja t0iska. Rollen mukaan kanava oli muutamassa päivässä viihtyisämpi kuin edellisen 5 vuoden aikana yhteensä.',
        'Keväällä 2024 kanava avattiin hetkeksi kaikille, mutta toukokuussa voicet palasivat. Huumepuhe putosi alkuvuosien tasolle. kummituksesta tuli tekoäly. Vuonna 2026 kanavaa alkoi valvoa tekoälyllä toimiva Portsari, ja kanavalle rakennetaan omaa Pulina-appia.',
      ],
      top: [['mustikkasoppa', 150754], ['samiy', 98778], ['snowfake', 85680], ['scaha', 55171], ['setsu', 54634]],
      events: {
        2023: [
          E('7.1.', 'bot', 'rolle lukee vuoden 2009 lokeja, kaipaa MegaHAL-aikoja ja päättää tehdä ChatGPT:tä käyttävän ircbotin. Tekoälykummitus nähdään vasta lokakuussa 2024.', [['23:17', '@rolle', 'Onni oli silloin kun oli MegaHAL tekoälynä :D'], ['23:19', '@rolle', 'Teen chatgpt:tä hyödyntävän ircbotin'], ['23:20', 't0iska', 'rolle: siit vois kyllä tulla hauska botti :D']]),
          E('7.1.', 'talk', 'rolle kertoo, miksi perusti kanavan.', [['23:25', '@rolle', 'Minulla on tallessa kanavan kaikki logit ensimmäisestä päivästä lähtien'], ['23:38', '@rolle', 'Alunperin perustin tämän kanavan jotta kaikilla syrjäytyneillä ja työttömillä olisi joku paikka chatata, olin itse silloin sellainen']]),
          E('10.1.', 'mod', 'Ensimmäinen kick itsetuhoisista puheista: ne eivät kuulu kanavalle. Sama toistuu 4.2.'),
          E('13.1.', 'mod', 'rolle päivittää sääntöjen kohdat 10 ja 13. mustikkasoppa pyytää hailaittaamaan, jos meno muuttuu häiritseväksi.', [['21:58', '@mustikkasoppa', 'minulta voi aina erikseen pyytää bannei jos meno muuttuu häiritseväksi, en ehdi joka minuutti seurata keskustelua'], ['22:09', '@rolle', 'Päivitin sääntöjä, 10 ja 13 https://www.pulina.fi/saannot/']]),
          E('2.4.', 'talk', 'Eduskuntavaalien vaali-ilta: kanava seuraa tulospalvelua.', [['21:15', 'Nashus', '20,4 sdp ja 20,1 kokoomus nyt tällä hetkellä'], ['21:26', 'Wotac', 'on kyllä tosi tiukat vaalit, ei tässä voi vetää vielä mitään johtopäätöstä']]),
          E('8.4.', 'talk', 'Kanava täyttää 15 vuotta.', [['06:55', '@mustikkasoppa', 'Nyt on lauantai ja PULINA 15-VUOTISSYNTTÄRIT!']]),
          E('26.5.', 'bot', 'kummituksen levy hajoaa. Botti tulvii SQL-virheitä, kunnes mustikkasoppa kickaa sen tauolle.', [['15:56', 'kummitus', 'Unexpected error ((sqlite3.OperationalError) disk I/O error ...'], ['16:00', '*', 'kummitus was kicked from #pulina by mustikkasoppa [tauolle]'], ['16:01', '@mustikkasoppa', 'tais tulla perjantaikiintiö täyteen']]),
          E('14.–15.7.', 'mod', 'Turkkia ja englantia puhuva häirikkö tulee selainchatin kautta yhä uusilla pulisijaNN-nickeillä. mustikkasoppa kickaa 8 nickiä 8 minuutissa.', [['23:55', 'pulisija28', 'FINNISH IS TURKISH'], ['00:00', 'snowfake', 'toi on tullu monella eri hostilla ni ei auta']]),
          E('16.7.', 'bot', 'kummitukseen tulee slurrisuodatin. rolle testaa sitä sanalla "rumasana" ja tulee kickatuksi 8 kertaa.', [['19:02', '*', 'rolle was kicked from #pulina by kummitus [Sääntö #4, ei slurreja. Mainitsit sanan \'rumasana\'.]'], ['19:24', '@mustikkasoppa', 'montakohan kickiä rolle sai päivän aikana :D'], ['19:25', 'Doffi', 'kummitus: lista kielletyistä sanoista?']]),
          E('18.7.', 'bot', 'la_mettrie huijaa kummituksen sanomaan kielletyn sanan, eikä botti kickaa itseään.', [['14:38', '@kummitus', 'rumasana'], ['14:38', 'la_mettrie', 'miksei kummitus potki itseään?']]),
          E('24.7.', 'talk', 'Twitter muuttuu X:ksi.', [['13:43', '@rolle', 'Niin se vaan Twitter lakkasi olemasta']]),
          E('27.7.', 'mod', 'Slurrisuodattimesta väitellään. kummitus kickaa 6 ihmistä puolessa tunnissa, ja rolle pitää pintansa.', [['23:04', 'aniC', 'rolle: testasin tos eilen filtteriä, oli aika ärhäkkä, kikkas suoraan ulos eikä varottanu'], ['23:05', '@rolle', 'Slurrit on ihan perseestä, ei niitä tartte viljellä yhtään'], ['23:28', '@samiy', 'vois olla sellanen botti että sallii ainoastaan 1984:n newspeakin']]),
          E('31.7.', 'mod', 'samiy menettää opit.'),
          E('6.8.', 'mod', 'Kriisikeskustelu kanavan hengestä. mustikkasoppa on moderointiin loppu, ja rolle on jättänyt kanavan "villiksi länneksi". Uusiksi opeiksi tulevat mann ja t0iska.', [['13:25', '@rolle', 'Jatkuvaa huumeidenkäyttöä ja sekoilua ei jaksa kattoa'], ['13:41', '@mustikkasoppa', 'Minulla ei ole enää jaksamisia moderoida, olen täysin loppu'], ['13:52', '@rolle', 'Joku t0iska vois olla suht tasapainoinen seuraavaksi opiksi']]),
          E('15.8.', 'bot', 'Op kickaa erään pulisijan ableismista ja kertoo olevansa itse vammainen. Silloin kummitus kickaa opin kahdesti sanasta "vammainen".', [['20:26', 'Wotac', 'vähän liian tiukalle väännetty kummituksen pipo']]),
          E('3.10.', 'talk', 'Eräs irkkaaja palaa kanavalle, vaikka toisella nickillä oli ilmoitettu hänen kuolleen. Seuraa kiivas keskustelu valehtelusta.'),
          E('13.10.', 'record', 'Vuoden vilkkain päivä: 3 109 riviä.'),
          E('16.–17.10.', 'mod', 'Kiellettyjen sanojen listaa koetellaan: kummitus kickaa 6 kertaa 40 minuutissa, ja listaa vaaditaan julki.', [['00:05', 'Hiihtopipo', 'Onko tää kiellettyjen sanojen lista jossain nähtävillä?']]),
          E('17.10.', 'mod', 'rolle mainostaa Pulinaa Blueskyssa. Samana iltana eräs irkkaaja vaatii lokiensa poistamista "lain mukaan", ja rolle kickaa hänet.', [['23:31', '@rolle', 'Mainostelin Pulinaa Blueskyssa, lol.'], ['23:37', '@rolle', 'Vituttaa tollanen paska just kun oon menossa nukkumaan']]),
          E('29.10.', 'site', 'rolle koodaa irkkimäisen syötteen Mastodon- ja Fediverse-päivityksistä: fedionfire.stream.'),
          E('2.11.', 'talk', 'samiy ehdottaa kanavalle hautajaisia: bannit kaikille, +i ja reunion 10 vuoden päästä.', [['15:52', 'samiy', 'rolle: eiköhän todeta että pulina on kuollut, pidetään jotkut hautajaiset ja suljetaan kanava. bannia kaikille ja +i.'], ['15:57', 'samiy', 'Mä oon tällä kanavalla ollu 14 vuotta ja tuntuu kyllä että tämä kanava on elämänsä elänyt']]),
          E('19.–24.11.', 'mod', 'Häiriköt palaavat rumilla nickeillä. t0iska ja kummitus kickaavat viikossa 12 kertaa.'),
          E('7.12.', 'star', 'Selainchatin kautta tuleva häiriköinti huipentuu, ja rolle harkitsee kanavan lopettamista. Telegram–Discord-silta suljetaan, selainchat laitetaan +i:n taakse ja kanava +m:lle. Puhua saa vain voicella.', [['20:28', '@rolle', 'Jaksaako tätä paskaa'], ['20:36', '@Q-tio', 'toki voitaisiin vaihtaa vanhaan kunnon vasta voicella puhutaan'], ['20:39', '@rolle', 'Silta kun tapettu ja laittaa vaan voicellisille luvan puhua niin vois olla terveempään suuntaan meno']]),
          E('10.12.', 'mod', 'Puheoikeuden saa pyytämällä opeilta, Setsu ja t0iska. Rollen mukaan kanava on muutamassa päivässä viihtyisämpi.', [['19:06', '@rolle', 'Näin tämä on ollut muutaman päivän aikana viihtyisämpi kuin viimeisen 5 vuoden aikana yhteensä'], ['19:11', '@rolle', 'Setsu saa päättää jos ei voicehommat toimikaan, ei muuta kun -m sitten vaan siinä kohtaa'], ['19:12', '@Setsu', 'apua paineet :D']]),
        ],
        2024: [
          E('10.1.', 'talk', 'Kiista "tytöttelystä". Eräs pulisija saa tammikuussa kickin kolme kertaa.', [['22:06', '+Bro', 'ihan Suomessa irkissä tytöttelit'], ['22:15', '@Setsu', 'voinki lopettaa irkkaamisen tältä iltaa tähän, oli tosi hyvä']]),
          E('14.1.', 'game', 'Skribbl-ilta.', [['20:53', '+aniC', 'Setsu: tää taitaa olla se ainut ja alkuperäinen: https://skribbl.io/']]),
          E('15.1.', 'talk', 'Presidentinvaalien alla väitellään tunteja jalkaväkimiinoista ja Gazasta.', [['22:44', '+hannes', 'eiköhä joka ikinen irkkaaja ole kyseisen konfliktin asiantuntija'], ['22:50', '+Scaha', 'mä en enää edes muista mistä alkuperäinen aihe oli']]),
          E('5.2.', 'talk', 'Tunnin filosofinen kiista siitä, voiko oman kuolemansa kuvitella.', [['17:30', '+aniC', 'Bro: ei voi. biologinen mahdottomuus']]),
          E('11.2.', 'talk', 'Vaali-ilta: kanava seuraa, kun Stubb voittaa presidentinvaalin.', [['20:08', '+AnReal', 'Stubb 52,7% ja 1 056 794 ääntä'], ['20:58', '@Setsu', 'telestubbi meemit kehiin']]),
          E('18.3.', 'mod', 'Kanava avataan taas kaikille.', [['00:37', '+Kietu', 'no mie kirjottelin ilman voicea'], ['00:39', '@rolle', 'Autovoice on pop']]),
          E('4.4.', 'mod', 'Marin-väittelyssä Setsu luettelee rikotut säännöt ja kickaa kaksi keskustelijaa.', [['14:57', '+Naama', 'Mikä se sääntörikkomus oli?'], ['14:57', '@Setsu', 'Naama:  3, 5 ja 11 meni nyt ainaki ihan kirkkaasti läpi ']]),
          E('4.4.', 'record', 'Vuoden vilkkain päivä: 2 679 riviä.'),
          E('10.4.', 'site', 'rolle irkkaa Beeperillä, joka yhdistää IRCin, Signalin, Telegramin ja WhatsAppin.', [['23:17', '@rolle', 'Tämä on ihan täydellistä kun toimii Signal, Telegram, IRC, WhatsApp, Facebook, ja someprivat samassa'], ['23:18', '@t0iska', 'rolle: mulla on ikävä vanhaa kunnon meseä! <3']]),
          E('13.4.', 'mod', 'Trolli-ilta: kolme nickiä saa kickin. Samana iltana rolle selaa vanhoja miittigallerioita.'),
          E('2.5.', 'mod', 'Kuusi viikkoa avaamisen jälkeen kanava menee taas +m:lle homovastaisen keskustelun jälkeen. Voicet saa opeilta yksityisviestillä.', [['01:45', '@Setsu', 'jos sulla on jotain homoja vastaan ja haluat siitä puhua, tää ei oo se kanava ja se pitää kestää']]),
          E('5.5.', 'mod', 'rolle tarkentaa sääntöjä. Uusi kohta "vain suomeksi" huomataan heti.', [['19:53', '@rolle', 'Tiedoksi, että tarkensin sääntöjä https://www.pulina.fi/saannot/'], ['20:01', '+drinn', 'wtf only Finnish allowed? :(']]),
          E('18.5.', 'mod', 'Setsu avaa kanavan yöllä. Päivällä slurrisuodatin kickaa kaksi n-sanan huutelijaa, ja +m palaa klo 13.04.'),
          E('27.5.', 'talk', 'HippiZip ehdottaa pulinamiittiä, ja rolle muistelee isoimman miitin kokoa. Miittiä ei synny.', [['16:16', '+HippiZip', 'Pitäiskö alkaa suunnittelee pulina-miittiä?'], ['16:23', '@rolle', 'Isoimmassa pulinamiitissä tais olla joku 35']]),
          E('21.9.', 'site', 'Linkkipalvelu irclink.pulina.fi käyttöön.'),
          E('28.9.', 'talk', 'rolle selaa yli 10 vuotta vanhoja miittikuvia ja jakaa niitä kanavalle.', [['14:05', '@rolle', 'Mukava katella näitä 10+v vanhoja miittikuvia 😄 ']]),
          E('29.9.', 'mod', 'Säännöt päivitetään: rasismi ja kansallissosialismi kielletään, ja käytökseen tulee tarkennus.', [['18:14', '@rolle', 'Päivitin sääntöjä. https://www.pulina.fi/saannot'], ['18:15', '@rolle', 'Lisäsin tarkennuksen käyttäytymisestä, ja rasismi ja kansallissosialismi tietenkin bannissa.']]),
          E('16.10.', 'bot', 'kummitukseen tulee generatiivinen tekoäly. Aluksi se on kuin mikäkin assistentti "aina auttamassa", sittemmin se on saanut kokonaan oman persoonansa oppien irkkaajien toilailuista.', [['20:34', '@rolle', 'kummitus: Moikka'], ['20:34', '+kummitus', 'Moikka! Näyttää siltä, että olemme hieman sekaisin. Mutta ei hätää, autan mielelläni!'], ['00:00', '@t0iska', 'hyvä kummitus!'], ['00:00', '+kummitus', 't0iska: Hyvä kummitus! Kiitos kehuista! Jos on jotain erityistä mielessäsi, olen täällä auttamassa!'], ['00:00', '@rolle', 'kummitus: Sun piti ottaa kehu vastaan, t0iska koitti kehua sua']]),
          E('18.10.', 'bot', 'Noin 12 tunnin koodausputken jälkeen kummituksella on pitkä muisti, lyhyt muisti ja cooldown: "muista että x" ja "unohda x".', [['01:25', '@rolle', 'Nyt toimii pitkä muisti, lyhyt muisti ja cooldown.'], ['01:25', '@Setsu', 'hyvä kummitus! hyvä rolle!']]),
          E('18.10.', 'mod', 'Lokikiista: eräs irkkaaja vastustaa keskustelujen julkaisua. rolle kickaa hänet ja lisää sääntöihin kohdan julkisista logeista.', [['01:34', '@rolle', 'Paskanvitut ole kun kanavan kaikki logit on ollu julkisia vuodesta 2008'], ['01:45', '@rolle', 'Lisäsinpäs tästä kohdan sääntöihin.']]),
          E('19.10.', 'bot', 'kummitus julkaisee ensimmäisen yöllisen yhteenvedon "Eilen kanavalla keskusteltua". Siitä tulee joka öinen tapa.', [['00:00', '+kummitus', 'Eilen kanavalla keskusteltua: Keskustelu käsittelee monia aiheita, kuten tieteiskirjailijoita, vanhoja puhelimia, junamatkustamista ja huumoria.']]),
          E('28.12.', 'site', 'Uusi tilastosivu pulina.fi/tilastot. Kanava on silti hiljentynyt, ja moni oppi on kadonnut.', [['18:38', '@rolle', 'Porukka ei irkkaa enää tarpeeksi ☹️ '], ['18:40', '+Bro', 'lähinnä tällä kanavalla on suurin osa opeista kadonnut, ja sen myötä keskustelukin']]),
        ],
        2025: [
          E('20.–22.1.', 'mod', 'Sekava englanninkielinen häirikkö palaa yhä uusilla nickeillä, kuten Elon_Musk ja B52DATABOMBER, ja saa kickin kolme kertaa.'),
          E('8.2.', 'talk', 'UMK-finaalin ilta: snowfake ennustaa Vikmanin voittoa.', [['22:50', 'snowfake', 'vituttaa jo valmiiks ku vikman voitaa eikä goldielocks']]),
          E('7.5.', 'bot', 'kummitus sekoaa ja floodaa vastauksia itselleen. mustikkasoppa kickaa sen.', [['09:31', '+BuddhaD', 'no nyt on villiä'], ['09:32', '@mustikkasoppa', 'rolle: kummitus tarvitsee huoltoa']]),
          E('13.5.', 'bot', 'Vieras Remu-botti liittyy kanavalle ja saa heti kickin: "ei muita botteja tänne".'),
          E('17.5.', 'talk', 'Euroviisufinaali, Erika Vikman. Ennen finaalia kummituksen !battle antaa Vikmanille 8 % ja KAJ:lle 92 %.', [['18:58', 'Nashus', '!battle Erika Vikman, KAJ'], ['18:58', '+kummitus', 'Nashus Erika Vikman: 8%, KAJ: 92%']]),
          E('5.6.', 'talk', 'Koko illan kestävä aurajuustokiista: pitääkö aurajuustoa maistaa?', [['23:51', '+Nillidan', 'oli hiton pahaa'], ['23:57', '+Nillidan', '"en ole koskaan syönyt aurajuustoa. Btw olen keliaakikko"?']]),
          E('27.6.', 'site', 'Irkkiin pääsee Discordin ja Matrixin kautta, ja mustikkasoppa irkkaa puhelimella Matrixilla.', [['18:50', '@mustikkasoppa', 'discordiin on siltaus joo'], ['18:51', '@mustikkasoppa', 'mut käytän vaan Matrixia irkkaamiseen puhelimessa']]),
          E('3.7.', 'bot', 'kummitus oppii kanavan historian.', [['00:00', '+Nillidan', 'kummitus: oletko sovinistisika'], ['00:00', '+kummitus', 'Nillidan: Haha, enpä ole sovinistisika, vaan yritän vaan käyttää kieltä niin kuin se luonnostaan kulkee!']]),
          E('10.7.', 'talk', 'Fysiikkaväittely: snowfake todistaa kaavoilla, ettei auton massa vaikuta jarrutusmatkaan. Scaha ei usko.', [['22:20', 'snowfake', 'et vaikka maalaisjärki vois sanoa että painavampi auto pysähtyy paremmin ni se pysähtyy iha samalla lailla :)'], ['22:59', '+Scaha', 'snowfake, mut palataan tähän kun olet selvinpäin etkä keuhkoa']]),
          E('1.8.', 'bot', 'kummitus keksii, että viimeisin Pulina-miitti oli ysärillä Suomenlinnassa.', [['11:10', '+HippiZip', 'kummitus: milloin oli viimeisin pulina-miitti?'], ['11:10', '+kummitus', 'HippiZip: Viimeisin Pulina-miitti oli joskus ysärillä, Suomenlinnassa.'], ['11:14', '+samiy', 'https://www.pulina.fi/miitit/']]),
          E('6.9.', 'meet', 'Vuodesta 2009 kanavalla ollut damaskox palaa sillan kautta. Hän kertoo olleensa samana päivänä t0iskan Telegram-ryhmän "Uus-Pulinan" miitissä.', [['21:50', '+gw_', '<damaskox> Kertoivat Toiskan ("Uus-Pulinan") miitissä tänään tällaisesta sillasta!']]),
          E('8.9.', 'talk', 'mustikkasoppa kertoo luoneensa alkuperäisen Pulina-Telegram-ryhmän ja lähteneensä sieltä alkoholipitoisen sisällön takia.', [['13:04', '@mustikkasoppa', 'mä loin sen alkuperäisen pulina-kanavan'], ['13:10', '@mustikkasoppa', 'mut on mukavaa et osa kanavan jäsenistä on vieläkin juttelemassa täällä tai muualla lähes 20 vuodenkin jälkeen :D']]),
          E('9.10.', 'bot', 'kummitus kertoo, ettei ole tavallinen kielimalli ja vastaa alle 220 merkillä.', [['09:30', '+kummitus', 'tarkko: Oon kummitus-botti, ei mikään perinteinen LLM-malli. Pidän pulinasta ja pyrin vastaamaan ihmismäisesti, alle 220 merkkiä kerrallaan.']]),
          E('21.10.', 'mod', 'rolle kickaa erään irkkaajan päihdepuheista ja viittaa sääntöön 11.'),
          E('3.11.', 'bot', 'mustikkasoppa pyytää kummitusta keksimään luovan topicin. Topiciin päätyy: "Kummitus ei keksinyt kunnollista topicia."', [['19:39', '@mustikkasoppa', 'kummitus: sanoin, että luova. Tuo on tylsä. :E']]),
          E('9.11.', 'bot', 'Isänpäivän aamuna kummituksen palvelimen levy on täynnä, ja botti floodaa virheitä. Se kickataan kahtena aamuna peräkkäin.', [['08:57', '+kummitus', 'Unexpected error ([Errno 28] No space left on device) from BuddhaD'], ['08:58', '@mustikkasoppa', 'En oo nyt koneella. Venaa hetki. Korjaan asian.']]),
          E('2.12.', 'bot', 'rolle kokeilee "ihmismäistä" kummitus v2:ta, mutta se sekoilee. Yöllä vanha koodi palautetaan.', [['23:05', '@rolle', 'kummitus -1000 IQ'], ['00:46', '@rolle', 'Vaihdoin sen koodin 100% samaksi joka on ollut täällä viimeiset pari vuotta, eli toi mun kokeellinen "ihmismäinen" versio on veks']]),
          E('3.12.', 'bot', 'kummitus alkaa muistaa asioita itse. Koodi on avointa GitHubissa, ja samana iltana tulee !muistuta-komento.'),
          E('14.12.', 'mod', 'Eräs kävijä yrittää levittää toisen irkkaajan oikeaa nimeä. rolle kickaa hänet kahdesti.', [['23:29', '@rolle', 'Pulina ei ole mikään huumeluola, jonne kannattaa kijroitella ihan mitä sattuu']]),
          E('26.12.', 'mod', 'Spämmiaalto: 1 311 liittymistä yhdessä päivässä. t0iska laittaa kanavan +m:lle, ja rolle vaihtaa sen +r:lle, jolloin kanavalle pääsee vain QuakeNet-authilla. Päivään kertyy 4 237 riviä.', [['01:32', 'tikar', 'ryan: what spam'], ['01:32', 'lagoonzil', 'ryan: what spam'], ['01:32', 'weedmaste', 'ryan: what spam'], ['01:32', 'rock', 'ryan: there is no spam Desecrator']]),
        ],
        2026: [
          E('5.1.', 'bot', 'Pollinations romuttaa mallinsa, ja kummitus siirtyy halpaan Geminiin. Muisti menee sekaisin, ja botti jää jankkaamaan.', [['21:14', '@rolle', 'Nillidan: Pollinations romutti kaikki mallinsa'], ['21:16', '+Nillidan', 'kummitus: sanoisitko vielä tuohon loppuun UwU'], ['21:16', '+kummitus', 'Nillidan: Olen kummitus, enkä voi tarkistaa käyttäjien henkilöllisyyttä. UwU'], ['21:26', '@rolle', 'Mitä vittua tuolla kummituksen muistissa on :\'\'D "samiy oli ujo kakka"']]),
          E('17.1.', 'bot', 'kummitus vaihdetaan fiksumpaan google/gemini-3-flash-previewiin.', [['13:00', '@rolle', 'Vaihdoin google/gemini-3-flash-preview joka on vähän uudempi ja tehokkaampi ja vaan 30cnt kalliimpi per miljoona tokenia']]),
          E('22.1.', 'bot', 'kummitus on itse koodattua Pythonia, joka käyttää uusinta Geminiä. Hinta noin 20 senttiä päivässä.', [['15:52', '@rolle', 'Itse koodattua pythonia joka käskyttää uusinta geminiä. Aiemmin oli pollinationsia ja openrouteria ja kaikkea'], ['15:53', '@rolle', 'Verrattuna nykyiseen kummitukseen joka on noin 20cnt päivä, Clauden rajapinnalla ois pari euroo päivässä.']]),
          E('23.1.', 'bot', 'mustikkasoppa tekee ensimmäiset pull requestinsa kummitukseen (!tee-komento) ja saa pulinairc-organisaation Owner-oikeudet. Merge päivittää botin suoraan palvelimelle.', [['12:40', '@mustikkasoppa', 'rolle: nyt on pull requestit'], ['12:51', '@rolle', 'mustikkasoppa: Laitoin sinut Owneriksi https://github.com/pulinairc joten voit mergetä omia pull requesteja jatkossa'], ['12:52', '@rolle', 'kummitus: Kivaa että päivität itsesi mergestä, hyvä kummitus']]),
          E('6.2.', 'talk', 'Pulinan 20-vuotismiittiä aletaan suunnitella 8.4.2028:lle. kummitus laskee päivät, ja topiciksi tulee "TJ 792".', [['21:04', '+samiy', 'kummitus: kuinka monta päivää on 8.4.2028 asti?'], ['21:04', '+kummitus', 'samiy: Laskujeni mukaan siihen on tasan 792 päivää.'], ['21:05', '@mustikkasoppa', 'topic-matskua']]),
          E('7.2.', 'bot', 'kummitus kääntää Pulinan latinaksi, ja topiciksi tulee "garritus et murmur". Se pysyy topicina marraskuuhun asti.', [['14:58', '@mustikkasoppa', 'kummitus: mikä on pulina latinaksi?'], ['14:58', '+kummitus', 'mustikkasoppa: Se ois varmaan jotain tyyliin "garritus" tai "murmur".'], ['14:59', '@mustikkasoppa', 'pakko laittaa']]),
          E('21.2.', 'talk', 'Kanava seuraa olympialaisten jääkiekon pronssiottelua, ja Suomi voittaa pronssia.', [['21:51', 'jnazarene', 'Millaisin lukemin Suomi voittaa tänään pronssia kiekossa? '], ['23:56', 'golffi', 'Mitalit tuli, Pennasesta huolimatta.'], ['23:57', 'snowfake', 'oho oho suomi pronssia']]),
          E('28.2.', 'site', 'mustikkasoppa jättää Discordin ja poistaa oman palvelimensa. Pulinan Discord-palvelin jää rollelle.', [['11:30', '@mustikkasoppa', 'nyt vois tuhota ton palvelimen ja samalla käyttäjätilin :D'], ['11:40', '@mustikkasoppa', 'sinne meni palvelin :D']]),
          E('3.3.', 'mod', 'Humalainen häirikkö ja kaksi rumaa nickiä saavat kickin. Kanava menee taas +m:lle.', [['23:48', '@rolle', 'Känniääliöismiin ja sekoiluun nyt nolla-sietokyky. Menköön #suomi @ IRCnet tommoset Aadolffit.'], ['23:57', '@rolle', 'Pulina on välillä sekoilumagneetti'], ['23:58', '@rolle', 'Jos jatkuu niin +i ettei voi edes joinia']]),
          E('3.–7.3.', 'talk', 'Eräs aktiivisista irkkaajista käy läpi vaikean jakson. Hän kirjoittaa 450–600 riviä päivässä yhä sekavampaa tekstiä ja katoaa 8.3. Hän palaa kuun puolivälissä uudella nickillä, ja kirjoitukset muuttuvat vainoharhaisiksi. 28.–29.3. hän kiertää bannia uusilla nickeillä, ja t0iska kickaa hänet kolmesti säännön 17 nojalla.'),
          E('6.3.', 'bot', 'kummituksen päivän yhteenveto siirtyy keskiyöltä aamuun klo 6.', [['12:36', '+kummitus', 'Aamun tiivistelmä onkin parempi, ehtii lukea ne yön sekoilut kahvin kanssa.']]),
          E('7.3.', 'talk', 'rolle muistelee miittejä: aktiivisimmat miittivuodet olivat 2008–2013, ja isoin miitti oli kaksiossa kävelykadun varrella. 2028 luvataan megamiitti.', [['21:14', '@rolle', 'Isoin miitti oli joskus meillä silloisessa kaksiossa kävelykadun varrella, joku 40 ihmistä'], ['21:15', '@rolle', 'samiy: Joo 2028 pitää pitää joku megamiitti']]),
          E('11.3.', 'bot', 'kummituksen kehitys avataan kaikille: Wotacin ehdotuksesta rolle pyytää tekemään pull requestin.', [['16:18', '@rolle', 'Laittakaa PR https://github.com/pulinairc/kummitus'], ['16:19', '@rolle', 'Saa kehittää vapaasti']]),
          E('15.3.', 'mod', 'Häirikkö palaa yhä uusilla nickeillä, ja t0iska laittaa kanavan +m:lle.', [['00:01', 'Wotac', 'miks sun pitää kiusata ihmisiä'], ['00:01', 'Nillidan', 'saa irkata jos osaa käyttäytyä']]),
          E('15.–16.3.', 'site', 'QuakeNet G-linettää pulina.fi:n selainchatin. Syyksi paljastuu tammikuusta asti kertyneet 64 zombie-oidentd-prosessia. QuakeNetin #help auttaa.', [['09:09', '@rolle', 'QuakeNet bannannut kokonaan'], ['15:13', '@rolle', 'mustikkasoppa: <rolle> 64 zombie oidentd instances were clogging the socket... :D no idea how'], ['15:15', '@rolle', 'QuakeNetin #help-kanavalla ystävällisesti auteltiin']]),
          E('21.3.', 'record', 'Vuoden vilkkain päivä: 3 075 riviä. Maaliskuussa kertyy 53 150 riviä, kaksi kertaa enemmän kuin muina kuukausina.'),
          E('25.3.', 'mod', 'Sääntöjä tarkennetaan bottikomentojen spämmäämisestä.', [['09:58', '@rolle', 'Sääntöjä tarkennettu, bottikomentojen spämmäily onkin aina ollut listalla, mutta tarkensin kohtaa.']]),
          E('30.3.', 'game', 'Skribbl-ilta.', [['14:51', '@rolle', 'SKRIBBL'], ['15:04', '@mustikkasoppa', 'voisin muuten avata skribbl mikä lie piirustuspelin täällä auki ilta-aikaan']]),
          E('6.4.', 'bot', '!randomjuttu eli !rj poimii nyt satunnaisen rivin suoraan logeista koko kanavan ajalta vuodesta 2008.', [['16:36', '@rolle', 'Tein nyt niin että hakee livenä noita, aiemmin haki vanhasta datasta']]),
          E('8.4.', 'star', 'Pulina täyttää 18 vuotta ja on täysi-ikäinen.', [['20:55', '@mustikkasoppa', 'pikainen puskahuutelu: Pulina täytti tänään 18 vuotta, eli täysi-ikä on saavutettu'], ['20:55', '@t0iska', 'onnea pulina!'], ['20:56', '+Nillidan', 'äkkiä kummitus känniin']]),
          E('9.4.', 'game', 'Worms WMD -ilta: t0iska luo pelin, mukana mm. Scaha, milla ja golffi.', [['19:56', 'Scaha', 'kaikki on varmaan joskus pelannu wormsia niin perusidea tuttu'], ['21:34', '@t0iska', 'golffi: just luon peliä'], ['21:36', '+HippiZip', 'Jaahas pelimiehet ja naiset kokoontuu']]),
          E('3.5.', 'mod', 'Isoilla kirjaimilla rasistista roskaa huutava häirikkö vaihtaa nickiä 8 kertaa. mustikkasoppa ja rolle kickaavat hänet 8 kertaa 8 minuutissa.', [['16:10', '+milla', 'heittäkää nyt hemmettiin nää isoilla kirjaimilla kirjoittajat'], ['16:21', '+Kietu', 'laittakaa ettei voi ilman voicea kirjottaa'], ['16:21', '@rolle', 'On jo.']]),
          E('6.5.', 'game', 'Kietu alkaa pitää bloob.io-pelailtoja: jatsia ja laivanupotusta. Niitä pelataan toukokuussa ja taas syyskuussa.', [['21:05', '+Kietu', 'otetaako jatsi vai kuolemattoman kanssa laivanupotusta']]),
          E('11.5.', 'mod', 'Opit saavat yksityisviesteinä törkeää palautetta. rolle on estänyt kaikki privat ja lisää selainchattiin telemetriaa.', [['19:53', '@rolle', 'Scaha: Olen estänyt 100% kaikki irkkiprivat, sen verran paskaa tulee sinne'], ['21:17', '@rolle', 'Jatkossa saadaan vähän tietoa webchat-käyttäjistä, ellei VPN käytössä'], ['21:18', '@rolle', 'Täällä on vain OP-kratia']]),
          E('19.5.', 'site', 'Kuvanjakopalvelu up.pulina.fi: kuvat liitetään suoraan Halloy-clientistä.', [['07:09', '@rolle', 'Jee taitaa toimia copy+paste ja drag and drop kuvan uppaus Halloyssa nyt']]),
          E('30.6.', 'bot', 'kummitus floodaa "aminaseaminase..." ja kiistää kaiken. Kun rolle näyttää todisteet, botti antaa hänelle tauon.', [['21:10', '+kummitus', 'rolle: rolle, tuo on selvästi joku bitti poikittain tai samiy on käynyt mun näppiksellä!'], ['21:11', '@rolle', 'kummitus: Just todistin. Mutta ei se mitään. Perkeleen botti.'], ['21:11', '+kummitus', 'rolle: Pidetään tauko. Voit jatkaa klo 21:11. Katso kohta 10: https://www.pulina.fi/saannot'], ['21:11', '@rolle', 'Haist ite']]),
          E('2.7.', 'talk', 'rolle ja mustikkasoppa ovat olleet 18 vuotta naimisissa. Samana päivänä rolle mainostaa kanavaa Threadsissa, ja sieltä tulee uusia kävijöitä.', [['20:06', '@rolle', 'jtjt: Moi? Tulitko tänne Threadsista? :D '], ['20:08', '@rolle', 'Ei tunnu siltä että ollaan oltu 18 vuotta naimisissa']]),
          E('27.8.', 'site', 'Matrixin ja Beeperin emojireaktiot alkavat näkyä irkissä. rolle tekee muutoksen Heisenbridgeen.', [['13:52', '@rolle', 'Tein tämmösen että emoji reaktiot beeperissä/matrixissa tulee suoraan irkkiin emojina 😃'], ['15:26', '+kummitus', 'Relay Matrix reactions to IRC as nick: emoji by rollecode · Pull Request #320 · hifi/heisenbridge · GitHub']]),
          E('6.11.', 'mod', 'Toistuvan sekavan floodin vuoksi rolle muistuttaa säännöistä, ja op kickaa floodaajan.', [['18:37', '@rolle', '"älä floodaa kanavaa täyteen huuruisia hajatelmiasi, joista kukaan ei ota tolkkua" https://www.pulina.fi/saannot/']]),
          E('7.11.', 'site', 'rolle koodaa oman IRC-clientin Lobbyn, ja siitä tulee Pulina-appin pohja.', [['19:56', '@rolle', 'Tämä viesti on omasta irc-clientistäni'], ['23:50', '@rolle', 'IRC-clientin pyöräytin https://github.com/rollecode/lobby']]),
          E('11.11.', 'site', 'Pulina-app rakenteilla rollen Lobby-clientin pohjalta. 12.11. versio 1.14.0 lähtee testiin, ensimmäisinä testaajina milla ja samiy.'),
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
  const colorOf = nick => { const k = nick.toLowerCase().replace(/^[^a-z0-9åäö]+|[^a-z0-9åäö]+$/g, ''); if (!hues.has(k)) hues.set(k, Math.round((hues.size * 137.508 + 340) % 360)); return `hsl(${hues.get(k)} 85% 72%)`; };
  // Every nick named in the texts (from the logs), every excerpt speaker and every "Paikalla"/"Mukana" list
  const NAMED = 'Abeand Adelphos alajarvela Amelii aniC Anicyna armmm armmmm Aswa Aswang Avantra Avaruusnuija aaaaaa aaaaaaa B52DATABOMBER Bella19 BLah^ blANZEY canfly Carlos1 cccccc chq- comah convulva convulVAU dafis Dahlia_D Damaskox Daraskos Dataaja95 Dilaz Downbeat drinding drinn eDu- elaie Elon_Musk eponyymi Faapio Fannyanniina feq firewalker fusil Gerry gerry_ Gerrye Gerrykone Gocom golffi grinder Guest92 gw Haamu Halko |Halko| Haprog Hekez HelvetinEnkeli helyes Hiiva HippiZip HoocH HoocH_ hoorleekare horlis Hupakko illegalll incidence ivy j-tek Jape` JeGod-Pope666 jent392 Jents jentsi jmh_ jokkeboi jore_ jugde_derdd Jyvae k00pa Kabri kasC Kauhukomedia Kietu kiiZeli Kizi korzu Kottis kummitus kuolematon Kuusamo la_mettrie Lantzi lapyo Leptoni Linda27 Lolita16 Lorien Majesty makekin makinen mann matkum maza- Merisiili Merisiili^ Meteorologi moikaikki metroidman Metsamies milla Monkee Monster1 motni Muffinssi mustikkasoppa mynta Nasu Nefastos Nefi- Nero Nicd Niffu Nisha Nishae nixari nudke Orvokki PassengeR paveq Pege pekafu pihlaja Pinkkidaa pinsku pirta Portsari Primadonna^ Pulla pulina85 Pythia Q-tio Reijo Reijo- Reijo^ rolle Roose RouVix rsl RTX2080Ti s13ge s13ge4 s13ge6 s13ge9001 Safti samiy Scaha schim schitzophrenia Scrin Setsu siilis Sikanaama sinppa_ sippis sirhoksu snd snowfake Soothe soupy Speadfreak statbot Sweetgirl19 t0iska Tanju tgbot Tinga tira TerveysAsiaMies TiTii TuikkA Tukkapoika Unksi Vanitsu wbot whitem WildLily Wotac wzardd Yoa Zaraki zardagbum';
  const canon = new Map();
  NAMED.split(' ').forEach(n => canon.set(n.toLowerCase(), n.toLowerCase()));
  DATA.forEach(e => Object.values(e.events).flat().forEach(ev => {
    (ev.lines || []).forEach(l => { const n = l[1].replace(/^[@+]/, '').toLowerCase(); if (n.length > 2 && !/^pulisija\d/.test(n)) canon.set(n, n); });
    const m = ev.text.match(/(?:Paikalla|Mukana)(?:: | mm\.:? )([^.]+)\./);
    if (m) m[1].split(/, | ja /).forEach(n => { n = n.trim().split(' ').pop().toLowerCase(); canon.set(n, n); });
  }));
  canon.delete('rock');
  // Inflected stems: mustikkasoppa -> mustikkasopan, Orvokki -> Orvokin, kummitus -> kummituksen
  [...canon.keys()].forEach(n => {
    const grad = n.replace(/(p|t|k)\1([aeiouyäö])$/, '$1$2');
    if (grad !== n) canon.set(grad, n);
    if (/[aeiouyäö]s$/.test(n)) canon.set(n.slice(0, -1) + 'kse', n);
  });
  const NICKS = [...canon.keys()].sort((a, b) => b.length - a.length).map(n => n.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&'));
  const ENDS = '(?::?(?:n|a|ä|ta|tä|lle|lta|ltä|lla|llä|ssa|ssä|sta|stä|ksi|in|ille|ilta|iltä|illa|illä|ista|istä|iä|ia|ja|jä|en|ään|aan|iin|na|nä|t|ni|si|nsa|nsä)(?:kin|kaan|kään)?|kin|kaan|kään)?';
  const nickRe = new RegExp(`(^|[^\\wåäö#.\\/-])((${NICKS.join('|')})${ENDS})(?![\\wåäö.\\/]*[\\wåäö])`, 'gi');
  const rich = text => esc(text)
    .replace(/(^|[^\d.,\wåäö#-])(\d[\d ]*(?:,\d+)?(?:–\d+)?(?: %)?)(?![\d.]*\d|-)/g, (all, pre, num) => /^(19|20)\d\d$/.test(num) ? all : `${pre}<b class="num">${num}</b>`)
    .replace(nickRe, (all, pre, word, stem) => `${pre}<span class="nick" style="--c:${colorOf(canon.get(stem.toLowerCase()) || stem)}">${word}</span>`)
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
    memory: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
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
      rows += `<div class="row year"><div class="label">${y}</div><div class="body"><b class="num">${tight(LINES[i])}</b> riviä · <b class="num">${tight(TALKERS[i])}</b> irkkaajaa · <b class="num">${KICKS[i]}</b> kickiä</div></div>`;
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

  function odometer(el, digits = 8, unit = 'riviä') {
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
      el.setAttribute('aria-label', `${fmt(v)} ${unit}`);
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

  const ALL_TALKERS = 8121;
  const setTalk = odometer(document.querySelector('.odo-talk'), 4, 'irkkaajaa');
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
    set(TOTAL); setTalk(ALL_TALKERS); setYears(`${W[0].y}–${last.y}`);
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
    setTalk(TALKERS[w.y - 2008]);
    labels.forEach(t => t.classList.toggle('on', +t.dataset.y === w.y));
  }
  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); chomp(); }); } }, { passive: true });
  addEventListener('resize', update);
  update();
  chomp();
  document.getElementById('story').classList.remove('is-loading');
})();
