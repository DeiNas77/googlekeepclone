import { GiHamburgerMenu } from "react-icons/gi";

function HamburgerMenu({ toggleMenu }) {
  return (
    <section className="flex items-center gap-[.5rem] content-center relative left-5 ">
      <GiHamburgerMenu
        className="text-[#e8eaed] text-[1.2rem] relative right-2  cursor-pointer"
        onClick={toggleMenu}
      />
      <img
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        alt=""
        className="w-[2.5rem] relative left-1  bottom-[2.rem]"
      />
      <span className="font-sans text-[1.4rem] text-[#FFFFFFDE] font-normal ">
        Keep
      </span>
    </section>
  );
}

export default HamburgerMenu;
