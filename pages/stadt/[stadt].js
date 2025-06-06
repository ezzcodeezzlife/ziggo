import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Contents from "../../components/contents";
import Image from "next/image";
import profilePic from "../../public/screenshot.png";
import Head from "next/head";

export default function Exasmple({ stadt }) {
  const canonicalUrl = `https://www.zigarettenautomatkarte.de/stadt/${stadt}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="relative isolate overflow-hidden bg-white">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-16 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <img
              className="h-11"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                  Zigarettenautomat finden
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Zigarettenautomat in{" "}
              {stadt.charAt(0).toUpperCase() + stadt.slice(1)}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ein praktischer und zuverlässiger Weg um Zigarettenautomaten in
              deiner Nähe zu finden
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/karte"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Zigarettenautomaten Karte
              </a>
              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Mehr Informationen <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <a href="/karte" className="block">
                  <Image
                    src={profilePic}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contents />
    </>
  );
}

export const getStaticPaths = async () => {
  const stadt = [
  "berlin",
  "hamburg",
  "münchen",
  "köln",
  "frankfurt",
  "stuttgart",
  "düsseldorf",
  "leipzig",
  "dortmund",
  "essen",
  "bremen",
  "dresden",
  "hannover",
  "nürnberg",
  "duisburg",
  "bochum",
  "wuppertal",
  "bielefeld",
  "bonn",
  "münster",
  "karlsruhe",
  "mannheim",
  "augsburg",
  "wiesbaden",
  "gelsenkirchen",
  "mönchengladbach",
  "braunschweig",
  "chemnitz",
  "kiel",
  "aachen",
  "halle",
  "magdeburg",
  "freiburg",
  "krefeld",
  "lübeck",
  "oberhausen",
  "erfurt",
  "mainz",
  "rostock",
  "kassel",
  "hagen",
  "saarbrücken",
  "hamm",
  "mülheim",
  "leverkusen",
  "osnabrück",
  "solingen",
  "ludwigshafen",
  "oldenburg",
  "neuss",
  "heidelberg",
  "paderborn",
  "darmstadt",
  "regensburg",
  "ingolstadt",
  "würzburg",
  "wolfsburg",
  "offenbach",
  "ulm",
  "heilbronn",
  "pforzheim",
  "göttingen",
  "bottrop",
  "trier",
  "recklinghausen",
  "reutlingen",
  "bremerhaven",
  "koblenz",
  "bergisch gladbach",
  "jena",
  "remscheid",
  "erlangen",
  "moers",
  "cottbus",
  "hildesheim",
  "salzgitter",
  "siegen",
  "gütersloh",
  "witten",
  "villingen-schwenningen",
  "würzburg",
  "flensburg",
  "gera",
  "schwerin",
  "zwickau",
  "konstanz",
  "dessau-roßlau",
  "neubrandenburg",
  "ravensburg",
  "bamberg",
  "bayreuth",
  "ludwigsburg",
  "landshut",
  "aschaffenburg",
  "lehrte",
  "gummersbach",
  "gießen",
  "herne",
  "weimar",
  "wismar",
  "plauen",
  "straubing",
  "friedrichshafen",
  "hameln",
  "wetzlar",
  "memmingen",
  "sindelfingen",
  "düren",
  "unna",
  "hanau",
  "velbert",
  "lingen",
  "frechen",
  "neumünster",
  "rotenburg",
  "esslingen",
  "kempten",
  "germering",
  "rüsselsheim",
  "rheine",
  "minden",
  "viersen",
  "lippstadt",
  "wismar",
  "bad homburg",
  "lörrach",
  "wilhelmshaven",
  "neu-ulm",
  "delmenhorst",
  "lüdenscheid",
  "herford",
  "lörrach",
  "meerbusch",
  "neubrandenburg",
  "schwäbisch gmünd",
  "aurich",
  "dormagen",
  "lörrach",
  "neuwied",
  "herten",
  "schwabach",
  "marburg",
  "langenfeld",
  "bad salzuflen",
  "alsdorf",
  "lüneburg",
  "coburg",
  "moers",
  "hameln",
  "grevenbroich",
  "hürth",
  "euskirchen",
  "stolberg",
  "detmold",
  "ahlen",
  "kerpen",
  "bergheim",
  "steinheim",
  "alsfeld",
  "offenburg",
  "uelzen",
  "cuxhaven",
  "nordhorn",
  "lünen",
  "hattingen",
  "marl",
  "ratingen",
  "castrop-rauxel",
  "arnsberg",
  "dessau",
  "dillenburg",
  "tübingen",
  "siegen",
  "rosenheim",
  "gummersbach",
  "lübbecke",
  "bünde",
  "brandenburg",
  "stralsund",
  "greifswald",
  "mühlheim",
  "neu-isenburg",
  "freising",
  "görlitz",
  "pirna",
  "hagen",
  "emden",
  "cloppenburg",
  "passau",
  "soltau",
  "neustadt",
  "gera",
  "olpe",
  "schweinfurt",
  "heidelberg",
  "norderstedt",
  "suhl",
  "bocholt",
  "meppen",
  "giessen",
  "riedstadt",
  "borken",
  "hennigsdorf",
  "forchheim",
  "peine",
  "backnang",
  "wermelskirchen",
  "landau",
  "böblingen",
  "esens",
  "hockenheim",
  "schwetzingen",
  "lingen",
  "osnabrück",
  "stadthagen",
  "kaufbeuren",
  "weiden",
  "mittweida",
  "wiesloch",
  "stendal",
  "sigmaringen",
  "bensheim",
  "wetzlar",
  "marsberg",
  "rheinfelden",
  "monheim",
  "lohne",
  "hameln",
  "saarlouis",
  "meinerzhagen",
  "löhne",
  "gladbeck",
  "beverungen",
  "solingen",
  "auerbach",
  "oberursel",
  "delbrück",
  "olching",
  "bünde",
  "waldshut-tiengen",
  "lingen",
  "buxtehude",
  "pfaffenhofen",
  "viersen",
  "moosburg",
  "langen",
  "dachau",
  "sangerhausen",
  "emmerich",
  "enger",
  "lehrte",
  "meerane",
  "wernigerode",
  "geldern",
  "garbsen",
  "salzgitter",
  "leinfelden-echterdingen",
  "mettmann",
  "neukirchen-vluyn",
  "naumburg",
  "herzogenaurach",
  "gardelegen",
  "bamberg",
  "rotenburg",
  "balingen",
  "vogtland",
  "wertheim",
  "torgau",
  "ludwigsfelde",
  "bad hersfeld",
  "gevelsberg",
  "wittenberge",
  "ludwigsburg",
  "schwerte",
  "pirmasens",
  "ludwigslust",
  "rheinberg",
  "friedberg",
  "groß-gerau",
  "trossingen",
  "senden",
  "lindau",
  "calw",
  "germersheim",
  "nürtingen",
  "bitburg",
  "kusel",
  "remscheid",
  "halberstadt",
  "blankenburg",
  "weinstadt",
  "aurich",
  "warendorf",
  "neubrandenburg",
  "elmshorn",
  "hameln",
  "altenburg",
  "papenburg",
  "ettlingen",
  "kitzingen",
  "neumarkt",
  "prenzlau",
  "witzenhausen",
  "lemgo",
  "naumburg",
  "vreden",
  "peine",
  "ibbenbüren",
  "gaggenau",
  "brandis",
  "selb",
  "dingolfing",
  "starnberg",
  "troisdorf",
  "ottobrunn",
  "zeitz",
  "mainburg",
  "tegel",
  "ottweiler",
  "landstuhl",
  "bünde",
  "eisleben",
  "brake",
  "arensburg",
  "vogtland",
  "friedrichsdorf",
  "haiger",
  "blankenburg",
  "nordenham",
   "berlin",
  "hamburg",
  "muenchen",
  "koeln",
  "frankfurt",
  "duesseldorf",
  "stuttgart",
  "leipzig",
  "dortmund",
  "bremen",
  "essen",
  "dresden",
  "nuernberg",
  "hannover",
  "duisburg",
  "wuppertal",
  "bochum",
  "bielefeld",
  "bonn",
  "mannheim",
  "karlsruhe",
  "muenster",
  "augsburg",
  "wiesbaden",
  "moenchengladbach",
  "gelsenkirchen",
  "aachen",
  "braunschweig",
  "kiel",
  "chemnitz",
  "magdeburg",
  "freiburg",
  "krefeld",
  "halle-saale",
  "mainz",
  "luebeck",
  "erfurt",
  "oberhausen",
  "rostock",
  "kassel",
  "hagen",
  "potsdam",
  "saarbruecken",
  "hamm",
  "oldenburg",
  "ludwigshafen",
  "muelheim",
  "leverkusen",
  "solingen",
  "osnabrueck",
  "darmstadt",
  "paderborn",
  "herne",
  "heidelberg",
  "neuss",
  "regensburg",
  "ingolstadt",
  "pforzheim",
  "wuerzburg",
  "offenbach",
  "fuerth",
  "heilbronn",
  "wolfsburg",
  "ulm",
  "goettingen",
  "bottrop",
  "reutlingen",
  "bremerhaven",
  "recklinghausen",
  "erlangen",
  "koblenz",
  "remscheid",
  "trier",
  "bergisch-gladbach",
  "jena",
  "salzgitter",
  "siegen",
  "moers",
  "kaiserslautern",
  "guetersloh",
  "hildesheim",
  "schwerin",
  "hanau",
  "esslingen",
  "flensburg",
  "gera",
  "cottbus",
  "dueren",
  "ludwigsburg",
  "witten",
  "iserlohn",
  "tuebingen",
  "villingenschwenningen",
  "giessen",
  "ratingen",
  "zwickau",
  "konstanz",
  "marl",
  "luenen",
  "worms",
  "minden",
  "velbert",
  "norderstedt",
  "delmenhorst",
  "neumuenster",
  "viersen",
  "rheine",
  "dorsten",
  "dessaurosslau",
  "wilhelmshaven",
  "troisdorf",
  "gladbeck",
  "bamberg",
  "arnsberg",
  "lueneburg",
  "detmold",
  "brandenburg",
  "castroprauxel",
  "marburg",
  "bayreuth",
  "bocholt",
  "aschaffenburg",
  "luedenscheid",
  "landshut",
  "lippstadt",
  "aalen",
  "herford",
  "dinslaken",
  "celle",
  "kerpen",
  "neuwied",
  "plauen",
  "kempten-allgaeu",
  "fulda",
  "weimar",
  "ruesselsheim",
  "grevenbroich",
  "rosenheim",
  "dormagen",
  "schwaebisch-gmuend",
  "offenburg",
  "friedrichshafen",
  "neuulm",
  "huerth",
  "bergheim",
  "sindelfingen",
  "herten",
  "neubrandenburg",
  "wesel",
  "garbsen",
  "unna",
  "langenfeld-rheinland",
  "euskirchen",
  "goeppingen",
  "hameln",
  "eschweiler",
  "stolberg-rheinland",
  "waiblingen",
  "meerbusch",
  "frankfurt-oder",
  "nordhorn",
  "sankt-augustin",
  "badenbaden",
  "greifswald",
  "pulheim",
  "lingen-ems",
  "bad-homburg-vor-der-hoehe",
  "goerlitz",
  "hilden",
  "langenhagen",
  "wetzlar",
  "stralsund",
  "bad-salzuflen",
  "schweinfurt",
  "neustadt",
  "hattingen",
  "ahlen",
  "bad-kreuznach",
  "passau",
  "kleve",
  "wolfenbuettel",
  "frechen",
  "menden-sauerland",
  "ibbenbueren",
  "elmshorn",
  "boeblingen",
  "gummersbach",
  "speyer",
  "rastatt",
  "peine",
  "ravensburg",
  "bad-oeynhausen",
  "loerrach",
  "heidenheim",
  "gronau-westf",
  "lahrschwarzwald",
  "cuxhaven",
  "emden",
  "willich",
  "frankenthal-pfalz",
  "bergkamen",
  "leonberg",
  "alsdorf",
  "oranienburg",
  "stade",
  "freising",
  "erftstadt",
  "rhedawiedenbrueck",
  "landau-in-der-pfalz",
  "hennef-sieg",
  "herzogenrath",
  "bornheim",
  "duelmen",
  "goslar",
  "bruchsal",
  "neunkirchen",
  "straubing",
  "soest",
  "singen-hohentwiel",
  "fellbach",
  "albstadt",
  "buende",
  "hof",
  "oberursel-taunus",
  "melle",
  "gotha",
  "dachau",
  "kaufbeuren",
  "filderstadt",
  "schwerte",
  "weinheim",
  "rottenburg",
  "bruehl",
  "lutherstadt-wittenberg",
  "rodgau",
  "erkelenz",
  "falkensee",
  "pinneberg",
  "neustadt",
  "bernau",
  "memmingen",
  "lehrte",
  "seevetal",
  "erkrath",
  "bietigheimbissingen",
  "wismar",
  "homburg",
  "kaarst",
  "heinsberg",
  "monheim",
  "borken",
  "eisenach",
  "gifhorn",
  "weiden-in-der-oberpfalz",
  "kirchheim-unter-teck",
  "kamen",
  "aurich",
  "schwaebisch-hall",
  "siegburg",
  "amberg",
  "nettetal",
  "laatzen",
  "dreieich",
  "buchholz-in-der-nordheide",
  "bensheim",
  "hueckelhoven",
  "schorndorf",
  "nordhausen",
  "freiberg",
  "eberswalde",
  "wunstorf",
  "leinfeldenechterdingen",
  "schwabach",
  "pirmasens",
  "coburg",
  "neumarkt-in-der-oberpfalz",
  "loehne",
  "buxtehude",
  "nuertingen",
  "voelklingen",
  "koenigswinter",
  "germering",
  "pirna",
  "ahaus",
  "lemgo",
  "wuerselen",
  "ansbach",
  "ostfildern",
  "mettmann",
  "kehl",
  "freital",
  "hofheim",
  "ilmenau",
  "koenigs-wusterhausen",
  "maintal",
  "backnang",
  "ettlingen",
  "niederkassel",
  "langen",
  "weissenfels",
  "haltern",
  "greven",
  "coesfeld",
  "kamplintfort",
  "bautzen",
  "saarlouis",
  "halberstadt",
  "wesseling",
  "stendal",
  "warendorf",
  "neuisenburg",
  "papenburg",
  "sinsheim",
  "tuttlingen",
  "beckum",
  "suhl",
  "fuerstenfeldbruck",
  "erding",
  "bitterfeldwolfen",
  "winsen-luhe",
  "meppen",
  "muehlhausenthueringen",
  "porta-westfalica",
  "cloppenburg",
  "ingelheim",
  "limburg",
  "emsdetten",
  "voerde-niederrhein",
  "st-ingbert",
  "bad-vilbel",
  "dietzenbach",
  "datteln",
  "balingen",
  "crailsheim",
  "hemer",
  "geldern",
  "rheinfelden-baden",
  "lage",
  "goch",
  "wedel",
  "juelich",
  "zweibruecken",
  "deggendorf",
  "korschenbroich",
  "steinfurt",
  "seelze",
  "biberach",
  "wermelskirchen",
  "ahrensburg",
  "kempen",
  "merseburg",
  "viernheim",
  "herrenberg",
  "leer",
  "kornwestheim",
  "barsinghausen",
  "stuhr",
  "vechta",
  "schwedtoder",
  "geesthacht",
  "radebeul",
  "forchheim",
  "uelzen",
  "bad-nauheim",
  "achim",
  "nienburgweser",
  "itzehoe",
  "wernigerode",
  "lampertheim",
  "naumburg-saale",
  "moerfeldenwalldorf",
  "fuerstenwaldespree",
  "weil",
  "neuruppin",
  "delbrueck",
  "merzig",
  "emmerich",
  "radolfzell",
  "altenburg",
  "georgsmarienhuette",
  "oererkenschwick",
  "ganderkesee",
  "rheinberg",
  "burgdorf",
  "bernburg-saale",
  "walsrode",
  "geestland",
  "hoyerswerda",
  "lohmar",
  "weyhe",
  "kreuztal",
  "bad-hersfeld",
  "rendsburg",
  "schoenebeck",
  "andernach",
  "werne",
  "neuburg",
  "bretten",
  "taunusstein",
  "haan",
  "oelde",
  "gevelsberg",
  "rietberg",
  "osterholzscharmbeck",
  "friedberg",
  "werl",
  "einbeck",
  "bad-zwischenahn",
  "winnenden",
  "friedberg-hessen",
  "schwandorf",
  "meschede",
  "wedemark",
  "gaggenau",
  "ennepetal",
  "emmendingen",
  "riesa",
  "waltrop",
  "griesheim",
  "blankenfeldemahlow",
  "baesweiler",
  "idaroberstein",
  "muehlheim",
  "mechernich",
  "ludwigsfelde",
  "toenisvorst",
  "saalfeldsaale",
  "bramsche",
  "meissen",
  "guestrow",
  "buehl",
  "vaihingen",
  "roedermark",
  "landsberg",
  "roesrath",
  "springe",
  "zeitz",
  "geilenkirchen",
  "unterschleissheim",
  "hattersheim",
  "kelkheim-taunus",
  "arnstadt",
  "garmischpartenkirchen",
  "kevelaer",
  "lohne-oldenburg",
  "hoexter",
  "reinbek",
  "henstedtulzburg",
  "schwelm",
  "koenigsbrunn",
  "wangen",
  "leichlingen-rheinland",
  "heppenheim-bergstrasse",
  "geislingen",
  "baunatal",
  "ehingen-donau",
  "grimma",
  "sundern-sauerland",
  "bad-neuenahrahrweiler",
  "wegberg",
  "northeim",
  "wiesloch",
  "strausberg",
  "teltow",
  "olching",
  "neukirchenvluyn",
  "verden-aller",
  "weinstadt",
  "werder-havel",
  "leimen",
  "hamminkeln",
  "butzbach",
  "rheinbach",
  "muehlacker",
  "luebbecke",
  "hennigsdorf",
  "hohen-neuendorf",
  "overath",
  "weiterstadt",
  "unterhaching",
  "zirndorf",
  "heiligenhaus",
  "achern",
  "neckarsulm",
  "kulmbach",
  "bingen",
  "wetter-ruhr",
  "selm",
  "remseck",
  "schloss-holtestukenbrock",
  "nordenham",
  "pfaffenhofen",
  "delitzsch",
  "geretsried",
  "lauf",
  "friedrichsdorf",
  "idstein",
  "aschersleben",
  "lindau-bodensee",
  "espelkamp",
  "verl",
  "horb",
  "sangerhausen",
  "waldkraiburg",
  "rinteln",
  "oehringen",
  "pfungstadt",
  "zittau",
  "st-wendel",
  "harsewinkel",
  "brilon",
  "roth",
  "markkleeberg",
  "petershagen",
  "helmstedt",
  "salzkotten",
  "obertshausen",
  "grossgerau",
  "schleswig",
  "eisenhuettenstadt",
  "bedburg",
  "syke",
  "waldshuttiengen",
  "wiehl",
  "norden",
  "stutensee",
  "rathenow",
  "warstein",
  "luedinghausen",
  "rottweil",
  "bad-oldesloe",
  "bad-honnef",
  "calw",
  "weingarten",
  "meiningen",
  "ellwangen-jagst",
  "meckenheim",
  "rudolstadt",
  "varel",
  "olpe",
  "schmallenberg",
  "mosbach",
  "plettenberg",
  "haren-ems",
  "starnberg",
  "wandlitz",
  "vaterstetten",
  "freudenstadt",
  "lennestadt",
  "sprockhoevel",
  "herzogenaurach",
  "bad-mergentheim",
  "isernhagen",
  "uebachpalenberg",
  "juechen",
  "koethen-anhalt",
  "leutkirch",
  "husum",
  "westerstede",
  "alfter",
  "limbachoberfrohna",
  "nagold",
  "ronnenberg",
  "doebeln",
  "senftenberg",
  "attendorn",
  "senden",
  "hann-muenden",
  "stassfurt",
  "sonneberg",
  "sehnde",
  "moormerland",
  "gersthofen",
  "riedstadt",
  "warburg",
  "quedlinburg",
  "gelnhausen",
  "kaltenkirchen",
  "neu-wulmstorf",
  "netphen",
  "weilheim-in-oberbayern",
  "bad-salzungen",
  "bad-kissingen",
  "salzwedel",
  "korbach",
  "bad-soden",
  "metzingen",
  "vreden",
  "wertheim",
  "rotenburg-wuemme",
  "dillenburg",
  "laupheim",
  "herdecke",
  "apolda",
  "ditzingen",
  "ueberlingen",
  "rastede",
  "bad-rappenau",
  "kitzingen",
  "ottobrunn",
  "wallenhorst",
  "lutherstadt-eisleben",
  "lengerich",
  "neusaess",
  "eppingen",
  "karben",
  "friesoythe",
  "edewecht",
  "quickborn",
  "stadthagen",
  "haar",
  "burg",
  "eislingenfils",
  "waghaeusel",
  "soltau",
  "eschborn",
  "muehldorf",
  "buedingen",
  "heide",
  "gardelegen",
  "aichach",
  "gauting",
  "rees",
  "bad-krozingen",
  "donaueschingen",
  "moessingen",
  "osterode",
  "sonthofen",
  "wipperfuerth",
  "glauchau",
  "versmold",
  "radevormwald",
  "zuelpich",
  "halle-westf",
  "lindlar",
  "eckernfoerde",
  "guenzburg",
  "schwetzingen",
  "ilsede",
  "hockenheim",
  "waldkirch",
  "stadtallendorf",
  "floersheim",
  "bueren",
  "spremberg",
  "zerbstanhalt",
  "germersheim",
  "karlsfeld",
  "wildeshausen",
  "elsdorf",
  "zossen",
  "panketal",
  "seligenstadt",
  "sondershausen",
  "grossumstadt",
  "westoverledingen",
  "xanten",
  "rheinstetten",
  "neufahrn",
  "puchheim",
  "schortens",
  "geseke",
  "werdau",
  "stadtlohn",
  "luckenwalde",
  "traunstein",
  "bad-waldsee",
  "wuelfrath",
  "dingolfing",
  "schifferstadt",
  "enger",
  "senden",
  "schramberg",
  "lichtenfels",
  "froendenbergruhr",
  "wachtberg",
  "duderstadt",
  "bruchkoebel",
  "hassloch",
  "coswig",
  "noerdlingen",
  "burgwedel",
  "herborn",
  "tettnang",
  "waren-mueritz",
  "schopfheim",
  "ochtrup",
  "neunkirchenseelscheid",
  "blieskastel",
  "wittmund",
  "steinhagen",
  "traunreut",
  "hoerstel",
  "lilienthal",
  "nidderau",
  "schwanewede",
  "meinerzhagen",
  "torgau",
  "uetze",
  "leinefeldeworbis",
  "neustrelitz",
  "telgte",
];

  const uniqueStadt = [...new Set(stadt)];

const paths = uniqueStadt.map((stadt) => ({ params: { stadt } }));

return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const stadt = params?.stadt;

  return {
    props: {
      stadt,
    },
  };
};
