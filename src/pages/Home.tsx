import { ReactElement, useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Notes from "../components/Notes/Notes";

function Home(): ReactElement | null {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <section className="flex">
        <SideBar sidebarActive={isMenuOpen} />
        <div className="w-[100vw] flex justify-center bg-[#202124] ">
          <Notes />
        </div>
      </section>
    </>
  );
}

export default Home;
