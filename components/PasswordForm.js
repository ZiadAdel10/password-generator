import { useContext } from "react";
import PasswordCtx from "@/Context/PasswordContext";

export default function PasswordForm() {
  const {
    handleLowercaseCheck,
    handleUppercaseCheck,
    handleHasNumbersCheck,
    handleHasSymbolsCheck,
  } = useContext(PasswordCtx);
  return (
    <>
      <div className="flex item-center gap-3">
        <input type="checkbox" onChange={() => handleUppercaseCheck()} />
        <label>Include Uppercase Letters</label>
      </div>
      <div className="flex item-center gap-3">
        <input type="checkbox" onChange={() => handleLowercaseCheck()} />
        <label>Include Lowercase Letters</label>
      </div>
      <div className="flex item-center gap-3">
        <input type="checkbox" onChange={() => handleHasNumbersCheck()} />
        <label>Include Numbers</label>
      </div>
      <div className="flex item-center gap-3">
        <input type="checkbox" onChange={() => handleHasSymbolsCheck()} />
        <label>Include Symbols</label>
      </div>
    </>
  );
}
