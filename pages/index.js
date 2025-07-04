import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Contents from "../components/contents";
import Image from "next/image";
import profilePic from "../public/screenshot.png";

export default function Example() {
  return (
    <>
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
        <div className="mx-auto max-w-7xl px-6 pb-2 pt-10 sm:pb-2 lg:flex lg:px-8 lg:pt-32 lg:pb-14 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                  Zigarettenautomat finden
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Zigarettenautomat in der Nähe
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ein praktischer und zuverlässiger Weg um Zigarettenautomaten in
              deiner Nähe zu finden
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/karte"
                className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Zigarettenautomaten Karte
              </a>
              <a 
                href="/automaten-aufstellen"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-lg ring-1 ring-inset ring-indigo-300 hover:bg-indigo-50 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Automat aufstellen
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
