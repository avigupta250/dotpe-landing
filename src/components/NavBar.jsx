import React from "react";
import { FaBars } from "react-icons/fa6";
const NavBar = () => {
  return (
    <nav className="w-full fixed md:block  h-[74px]">
      <div className=" flex justify-between bg-white md:bg-transparent items-center p-6">
        {/* Logo */}
        <div>
           <Logo/>
        </div>

        {/* Business Type And Company */}
        <div className="hidden gap-3 md:block text-[18px]  text-white ">
            <div className="flex gap-3">
            <button>Business Types</button>
            <button>Company</button>
            </div>
            
        </div>

        {/* Mobile view Button */}
        <div className= "opacity-100 md:opacity-0 ">
              <span><FaBars/></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

function Logo(){

    return <div className="flex items-center gap-2">
        <div className="w-7 relative h-7 rounded-[6px] justify-center bg-white ">
            <div className="flex gap-2">
                <span className="top-2 left-1 absolute  h-[6px] w-[6px] rounded-full bg-black text-black"></span>
                <span className="top-2 left-[17px] absolute h-[6px] w-[6px] rounded-full bg-black text-black"></span>
            </div>
            
        </div>
        <div className="text-[25px] text-white font-bold ">DotPe</div>
    </div>
}
