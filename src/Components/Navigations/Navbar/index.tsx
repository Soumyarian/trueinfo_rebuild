import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full bg-gray-200 py-2 align-middle">
      <div className="flex-1 flex items-center">
        <div className="w-44 overflow-hidden mx-4">
          <img src="/Logo3.png" alt="imhh" width="100%" height="100%" />
        </div>
        <div className="text-2xl self-end">
          <h1>Hello</h1>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="">
          <button>login</button>
          <button>signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
