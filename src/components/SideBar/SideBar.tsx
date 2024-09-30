import { FaRegLightbulb } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { BiArchiveIn } from "react-icons/bi";
import { ReactElement } from "react";
type Props = {};

export default function SideBar({}: Props):ReactElement | null {
  return (
    <section className="inline-flex flex-col h-[90vh] bg-[#202124] gap-[1.7rem] pr-[1.3rem] pl-5 w-[5.5vw]  hover:w-[25vw] hover:rounded hover:transition-all ease-in-out duration-1000">
      <div className="pt-4">
        <FaRegLightbulb className="text-[1.4rem] text-[#9aa0a6]" />
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
