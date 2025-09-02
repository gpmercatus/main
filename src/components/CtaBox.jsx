import React from "react";
import Button from "./Button";
function CtaBox() {
  return (
    <section className="w-full bg-[#2f3542] py-10 md:py-16">
      <div className="max-w-screen-2xl flex items-center justify-between md:flex-nowrap flex-wrap gap-5 mx-auto px-6 text-black dark:text-white text-center md:text-left">
        <div className="max-w-[900px] mx-auto">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Looking for a best advertising services for your business?
          </h4>
        </div>
        {/* <div className="mx-auto">
          <Button btntext="We are Here" />
        </div> */}
      </div>
    </section>
  );
}

export default CtaBox;
