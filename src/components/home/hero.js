import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100 grid lg:grid-cols-3 md:grid-cols-1 pt-8">
        <div className="flex justify-end">
          <StaticImage
            src="../../images/hero.png"
            alt="picture of michael"
            className="h-[25rem] w-[25rem] hidden lg:block"
          />
        </div>

        <div className="mt-8 lg:mx-0 col-span-2  text-center lg:text-left">
          <h1 className="text-7xl font-extrabold">
            Michael <br />
            Asnake
          </h1>
          <br />
          <h2 className="text-3xl font-thin text-center lg:text-left">
            Mobile engineer with over 5 years of <br />
            experience in building robust flutter <br />
            and native mobile applications
          </h2>
          <button class="bg-primary py-4 px-6 my-4 rounded-full font-bold">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="lg:hidden bg-gray-100 flex justify-center">
        <StaticImage
          src="../../images/hero.png"
          alt="picture of michael"
          className="h-[25rem] w-[25rem] bg:green-500"
        />
      </div>
    </>
  );
};

export default Hero;
