import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineCopy } from "react-icons/ai";
import { useContext } from "react";
import PasswordCtx from "@/Context/PasswordContext";

export default function Password() {
  const { isCopied, handleCopyClick, generatedPassword } =
    useContext(PasswordCtx);
  return (
    <>
      <div className="flex-between gap-20 bg-[#24232C] px-6 py-4">
        <h1>
          {generatedPassword === undefined
            ? alert("Check at least one of the boxes please!")
            : generatedPassword}
        </h1>
        <span
          onClick={handleCopyClick}
          className="text-[#A4FFAF] text-lg cursor-pointer"
        >
          {isCopied ? <IoCheckmarkDoneSharp /> : <AiOutlineCopy />}
        </span>
      </div>
    </>
  );
}
