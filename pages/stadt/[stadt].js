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
  "nordenham"
];

  const paths = stadt.map((stadt) => ({ params: { stadt } }));

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
