import React from "react";

function Button({ btntext }) {
  return (
    <button
      type="button"
      className="text-white bg-[#fccd0d] hover:bg-[#d4a80a] focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg md:text-lg text-sm px-4 py-2 text-center text-nowrap"
    >
      {btntext}
    </button>
  );
}

export default Button;
