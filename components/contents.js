import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import Script from "next/script";
import AdSense from "./AdSense";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Zigarettenautomat Karte", href: "/karte" },
];

const features = [
  {
    name: "Umfassende Datenbank",
    description:
      "Wir haben Informationen zu Tausenden von Zigarettenautomaten in ganz Deutschland.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Einfache Navigation",
    description:
      "Unsere interaktive Karte macht es einfach, den nächsten Zigarettenautomaten zu finden.",
    icon: ArrowPathIcon,
  },
  {
    name: "Immer Aktuell",
    description:
      "Unsere Datenbank wird ständig aktualisiert, um die genauesten Informationen zu liefern.",
    icon: ArrowPathIcon,
  },
  {
    name: "Kostenlos",
    description:
      "Unser Service ist völlig kostenlos zu nutzen. Finden Sie den nächsten Zigarettenautomaten ohne einen Cent zu bezahlen.",
    icon: LockClosedIcon,
  },
];

const faqs = [
  {
    id: 1,
    question: "Wie finde ich den nächstgelegenen Zigarettenautomaten?",
    answer:
      "Nutzen Sie einfach unsere interaktive Karte und wir zeigen Ihnen die nächstgelegenen Automaten an.",
  },
  {
    id: 2,
    question: "Wie aktuell sind die Informationen auf Ihrer Webseite?",
    answer:
      "Wir bemühen uns, unsere Datenbank so aktuell wie möglich zu halten und fügen ständig neue Automaten hinzu. Es kann jedoch vorkommen, dass ein Automat umgestellt oder entfernt wird, ohne dass wir davon Kenntnis erhalten.",
  },
  {
    id: 3,
    question: "Kostet es etwas, Ihren Service zu nutzen?",
    answer:
      "Nein, unser Service ist völlig kostenlos. Wir sind der Meinung, dass jeder den Zugang zu verlässlichen Informationen über Zigarettenautomaten haben sollte, ohne dafür bezahlen zu müssen.",
  },
];

const footerNavigation = {
  solutions: [
    { name: "Home", href: "/" },
    { name: "Karte", href: "/karte" },
    { name: "Git Invoice", href: "https://www.git-invoice.com/" },
  ],
  support: [
    {
      name: "Contact",
      href: "https://www.programming-helper.com/contact-and-privacy",
    },
  ],
  company: [
    {
      name: "Appsplosion",
      href: "https://www.programming-helper.com/contact-and-privacy",
    },
    {
      name: "CigaretteMap.com",
      href: "https://www.cigarettemap.com/",
    },
  ],
  legal: [
    {
      name: "Privacy",
      href: "https://www.programming-helper.com/contact-and-privacy",
    },
    {
      name: "Terms",
      href: "https://www.programming-helper.com/contact-and-privacy",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white" id="features">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"> </span>
            </a>
          </div>
          <div className="flex pt-8 lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"> </span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">


      {/* Ad Banner */}
<div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8 pb-16">
      <a href="https://zedaco.de/zigaretten/" className="block">
        <div className="relative w-full h-auto">
          {/* Desktop Banner - versteckt auf Mobilgeräten */}
          <img 
            src="/ad.jpg" 
            alt="Zigaretten online kaufen bei Zedaco" 
            className="hidden md:block w-full rounded-lg"
          />
          
          {/* Mobile Banner - versteckt auf Desktop */}
          <img 
            src="/ad2.jpg" 
            alt="Zigaretten online kaufen bei Zedaco" 
            className="block md:hidden w-full rounded-lg"
          />
        </div>
      </a>
    </div>




        {/* Feature section */}
        <div className="mx-auto mt-1 max-w-7xl pt-3 px-6 sm:mt-2 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Finden Sie Zigarettenautomaten in Ihrer Nähe
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Alles, was Sie brauchen, um den nächsten Zigarettenautomaten zu
              finden
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unsere umfangreiche Datenbank und interaktive Karte machen es
              einfach, Zigarettenautomaten in Ihrer Nähe zu finden. Egal, ob Sie
              zu Hause sind oder unterwegs, Sie können den nächsten
              Zigarettenautomaten in Sekundenschnelle finden.
            </p>
          </div>


          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl pb-8">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>


        <div className="flex justify-center items-center ">
  <AdSense />
</div>


        {/* FAQs */}
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

      
        <div className="flex justify-center items-center ">
  <AdSense />
</div>


        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vereinfachen Sie Ihre Suche.
              <br />
              Beginnen Sie noch heute, unsere Karte zu nutzen.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Mit unserer interaktiven Karte und umfangreichen Datenbank ist die
              Suche nach dem nächsten Zigarettenautomaten so einfach wie nie
              zuvor.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
  <a
    href="/karte"
    className="rounded-md bg-indigo-600 px-7 py-5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Los geht's
  </a>
</div>

          </div>
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        
      </main>

    
      <div className="flex justify-center items-center ">
  <AdSense />
</div>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
           
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
