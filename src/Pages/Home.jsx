import React from "react";
import Button from "../components/Button";
import Revenuecuate from "../assets/Revenue-cuate.png";
function Home() {
  return (
    <>
      <div id="home" className="w-full bg-white text-black pt-16">
        <div className="max-w-screen-2xl flex gap-8 items-center flex-wrap md:flex-nowrap justify-between mx-auto px-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-6 text-center md:text-left py-6 lg:py-0">
            <p className="max-w-[450px] mx-auto md:mx-0 text-[18px] text-gray-500 font-semibold">
              For all your offline advertising needs
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-bold leading-tight">
              Your Trusted <br />
              Partner In{" "}
              <span className="border-b-8 border-[#fccd0d] border-opacity-70">
                Modern
              </span>{" "}
              Advertising
            </h1>

            {/* <p className="max-w-[450px] mx-auto md:mx-0 text-[18px] text-gray-500 font-semibold">
              Streamline your accounting processes, gain financial insights, and
              make data-driven decisions with us.
            </p> */}
            {/* <div>
              <Button btntext="Get Started" />
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Revenuecuate}
              alt="Business illustration"
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
