import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-400 font-bold text-xl text-white flex justify-center items-center sticky top-0 z-0 ">
      {/* ^ Use 'text-white' for the text color */}
      <span className="p-4">Content Page</span>
    </div>
  );
}

export default Navbar;
