import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "What We Do", href: "/#what-we-do" },
  { name: "About Us", href: "/#about-us" },
  { name: "Contact", href: "/#contact" },
];

export const Header = () => {
  return (
    <Disclosure as="nav" className={"flex-shrink-0 w-full relative z-20 mt-4"}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="flex flex-row justify-end items-center p-2 rounded-md hover:text-high-emphesis focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="block w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex justify-between">
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src="/img/logo.png"
                        width="250"
                        height="76"
                        alt="Kindynos Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex flex-row justify-end uppercase items-center text-grey font-bold text-3xl">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className="text-sm mx-1.5 py-1 cursor-pointer hover:text-light-grey">
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden uppercase bg-blue">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-sm mx-0.5 px-1.5 py-1 text-grey cursor-pointer hover:text-grey uppercase block"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
