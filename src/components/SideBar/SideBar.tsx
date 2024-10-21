import { FaRegLightbulb } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { BiArchiveIn } from "react-icons/bi";
import { ReactElement } from "react";

export default function SideBar({ sidebarActive }): ReactElement | null {

  const sideDesactive =
    "inline-flex flex-col h-[90vh] bg-[#202124] gap-[1.7rem] pr-[1.3rem] pl-5 w-[5.5vw] transition-all ease-in-out duration-500 ";
  const sideActive =
    "w-[25vw] rounded transition-all ease-in-out duration-500 inline-flex flex-col pr-[1.3rem] bg-[#202124] gap-[1.7rem] pr-[1.3rem] pl-5 h-[90vh]";

  return (
    <section className={sidebarActive ? sideActive : sideDesactive}>
      <div className="pt-4 flex flex-row">
        <FaRegLightbulb className="text-[1.4rem] text-[#9aa0a6]" />
        <span>Hola</span>
      </div>
      <div>
        <FaRegBell className="text-[1.4rem] text-[#9aa0a6]" />
      </div>
      <div>
        <LuPencil className="text-[1.4rem] text-[#9aa0a6]" />
      </div>
      <div>
        <BiArchiveIn className="text-[1.4rem] text-[#9aa0a6]" />
      </div>
      <div>
        <RiDeleteBin6Line className="text-[1.4rem] text-[#9aa0a6]" />
      </div>
      {/* <div className="pr-2">SideBar licencias de autor jajaja</div> */}
    </section>
  );
}
