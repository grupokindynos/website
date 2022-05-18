import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";

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
      <Footer />
    </>
  );
}
