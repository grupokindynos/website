import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <div
        id="home"
        className="px-20 bg-no-repeat bg-center h-[571px]"
        style={{
          backgroundImage: "url('/img/hero.png')",
          backgroundSize: "1340px, 571px",
        }}
      >
        <h1 className="pt-8 lg:pt-32 lg:pl-36 text-4xl lg:text-6xl">
          IT Services & <br /> Solutions with <br /> Kindynos
        </h1>
        <p className="hidden lg:inline-block lg:mt-4 lg:pl-36">
          Technical solutions for every business model
        </p>
        <div className="mt-48 lg:pl-36 lg:mt-8 cursor-pointer">
          <Link passHref href="/#contact">
            <div
              className={
                "w-[150px] rounded-full border-2 shadow shadow-blue bg-blue border-blue text-white"
              }
            >
              <div className="flex flex-row items-center justify-center text-2xl">
                <div className="py-2">
                  <p>Start Now</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div id="what-we-do">
        <h1 className="text-center text-4xl mt-4">What we can do</h1>
        <p className="text-center text-lg mt-4 mx-4">
          On Kindynos we believe that we can deploy a secure and optimized
          solution for every technical need
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-3 px-20 md:px-48 mt-8 gap-10">
          <div className="p-5">
            {" "}
            <Image src="/img/cross-platform-app.png" width="80" height="80" />
            <h1 className="text-2xl">Cross Platform Apps</h1>
            <p className="mt-2">
              Single apps for all environments. Browser oriented apps that can
              be used on mobile or desktop.
            </p>
          </div>
          <div className="p-5 shadow-lg	">
            {" "}
            <Image src="/img/webapps.png" width="80" height="80" />
            <h1 className="text-2xl">Web Apps</h1>
            <p className="mt-2">
              Web oriented apps for specific and dedicated tasks.
            </p>
          </div>
          <div className="p-5">
            {" "}
            <Image src="/img/blockchain.png" width="80" height="80" />
            <h1 className="text-2xl">Blockchain</h1>
            <p className="mt-2">
              From smart contracts to public or private blockchains for every
              business model.
            </p>
          </div>
        </div>
        <div
          id="home"
          className="px-20 bg-no-repeat bg-center h-[295px] lg:-mt-7"
          style={{
            backgroundImage: "url('/img/divider.png')",
            backgroundSize: "1340px, 295px",
          }}
        />
      </div>
      <div id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-5">
            <div className="flex flex-row justify-center">
              <Image
                layout="fixed"
                src="/img/about.png"
                width="400px"
                height="370px"
              />
            </div>
          </div>
          <div className="p-5">
            <p className="text-center text-4xl mt-4 text-blue">About Us</p>
            <h1 className="text-center text-4xl mt-4">Technical Solutions</h1>
            <p className="w-2/3 text-center mx-auto mt-4">
              Founded in 2017, Kindynos is a group of developers committed to
              find technical solutions for every business model.
            </p>
            <p className="w-2/3 text-center mx-auto mt-4">
              All our work is perfectly crafted for every need.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
