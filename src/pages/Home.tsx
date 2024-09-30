import { ReactElement } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Notes from "../components/Notes/Notes";

function Home(): ReactElement | null {
  return (
    <>
      <Header />
      <section className="flex">
        <SideBar />
        <div className="w-[100vw] flex justify-center bg-[#202124] ">
          <Notes />
        </div>
      </section>
    </>
  );
}

export default Home;
