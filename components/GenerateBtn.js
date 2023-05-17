import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import PasswordCtx from "@/Context/PasswordContext";
export default function GenerateBtn() {
  const { isButtonDisabled, generatePassword, handleDisability } =
    useContext(PasswordCtx);
  return (
    <div onClick={handleDisability} className="w-full">
      <button
        disabled={isButtonDisabled}
        onClick={generatePassword}
        className="w-full bg-[#A4FFAF] btn hover:bg-[#A4FFAF] flex-center gap-3 text-[#18171f] disabled:text-[#A4FFAF] p-2"
      >
        Generate
        <span>
          <AiOutlineArrowRight />
        </span>
      </button>
    </div>
  );
}
