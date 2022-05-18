import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <div className="w-full bg-light-blue py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-7">
          <div className="px-24 md:px-20 xl:px-10">
            <Link href="/" passHref>
              <a>
                <Image
                  src="/img/logo.png"
                  width="150"
                  height="46"
                  alt="Kindynos Logo"
                />
              </a>
            </Link>
            <p className="text-xs w-4/5">
              Kindynos is a group of Mexican developers specialized in
              blockchain technology dedicated to find technical solutions for
              every need.
            </p>
          </div>
          <div className="px-24 md:px-20 xl:px-10">
            <h1 className="text-xl">Our Company</h1>
            <div className="my-4">
              <ul className="list-disc text-sm">
                <li className="my-1">
                  <Link href="/#home" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/#what-we-do" passHref>
                    <a>What We Do</a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/#about-us" passHref>
                    <a>About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-24 md:px-20 xl:px-10">
            <h1 className="text-xl">Our Services</h1>
            <div className="my-4">
              <ul className="list-disc text-sm">
                <li className="my-1">Blockchain Development</li>
                <li className="my-1">Smart Contracts Development</li>
                <li className="my-1">Mobile Apps</li>
                <li className="my-1">Web Apps and Dapps</li>
                <li className="my-1">Backend Services</li>
              </ul>
            </div>
          </div>
          <div className="px-24 md:px-20 xl:px-10">
            <h1 className="text-xl">Contact Us</h1>
            <div className="my-4 text-xs w-2/3">
              <p className="my-2">
                Valentin Gama #295, Col Del Valle. San Lu&iacute;s
                Potos&iacute;, San Lu&iacute;s Potos&iacute; CP 78200
              </p>
              <p className="my-2 text-blue">
                <a href="mailto:contact@kindynos.mx">contact@kindynos.mx</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue text-center text-white text-xs py-3">
        <p className="my-1">
          Created by Kindynos &copy; {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
        <p className="my-1">Made with &#10084;&#65039; from M&eacute;xico.</p>
      </div>
    </div>
  );
};
