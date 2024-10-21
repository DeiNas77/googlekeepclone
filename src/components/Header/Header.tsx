import { ReactElement } from "react";
import { TbSettings } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { IoApps } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import { RxViewHorizontal } from "react-icons/rx";
import logo from "../../assets/iconUser.png";

/* Components */
import HamburgerMenu from "./HamburgerMenu";

function Header({toggleMenu}): ReactElement | null {
  return (
    <>
      <nav className="bg-[#202124] p-[.6rem] flex justify-between items-center">
        <HamburgerMenu toggleMenu={toggleMenu}/>
        <section className="">
          <form action="" className="flex bg-slate-700 rounded-md pl-7">
            <IoIosSearch className="text-[#e8eaed] text-[1.4rem] relative top-[.9rem] right-[.9rem]" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-[48vw] h-[3rem] rounded-md  outline-none bg-slate-700"
            />
            <BsXLg className="text-[#e8eaed] text-[1.4rem] relative top-[.9rem] right-[.9rem]" />
          </form>
        </section>
        <section className="flex">
          <VscDebugRestart className="text-[#9aa0a6] text-[1.5rem] relative right-5  " />
          <RxViewHorizontal className="text-[#9aa0a6] text-[1.5rem]" />
          <TbSettings className="text-[#9aa0a6] text-[1.5rem] relative left-5" />
        </section>
        <section className="flex items-center gap-5 relative right-5 ">
          <IoApps className="text-[#e8eaed] text-[1.2rem]" />
          <img
            src={logo}
            alt=""
            className="w-[1.9rem] fill-transparent bg-transparent"
          />
        </section>
      </nav>
      <hr className=" text-[#9aa0a6] font-light" />
    </>
  );
}

export default Header;
