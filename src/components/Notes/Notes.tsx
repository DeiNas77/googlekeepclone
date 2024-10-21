import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";


function Notes() {
  return (
    <>
      <section className="">
        <div className="flex border border-[#9aa0a6]  w-[47vw] mt-[2rem] p-[.4rem] pr-[1rem] rounded-md gap-[1.5rem] items-center">
          <input
            type="text"
            placeholder="Crear una nota..."
            className=" w-[85%] placeholder:text-[#9aa0a6] p-[.3rem] bg-[#202124] outline-none text-[white]"
          />

          <FaRegSquareCheck className="text-[1.4rem] text-[#9aa0a6]" />
          <IoMdImage className="text-[1.8rem] text-[#9aa0a6]" />
        </div>
        <section className="flex flex-row place-items-center h-[70%]  justify-center">
          <div className="flex flex-col place-content-center items-center mt-[3rem]">
            <FaRegLightbulb className="text-[6rem] text-[#343637]" />
            <h1 className="mt-[2rem] text-[#9aa0a6] text-[1.4rem]">Las notas que agregues aparecerán aquí</h1>
          </div>
        </section>
      </section>
    </>
  );
}

export default Notes;
