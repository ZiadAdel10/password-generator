import { useContext } from "react";
import PasswordCtx from "@/Context/PasswordContext";

export default function CharacterLength() {
  const { range, minRange, maxRange, handleNewRange } = useContext(PasswordCtx);
  return (
    <>
      <div className="flex item-center gap-20">
        <span>Character Length</span>
        <span>{range}</span>
      </div>
      <input
        type="range"
        min={minRange}
        max={maxRange}
        value={range}
        onChange={handleNewRange}
        style={{
          background: `linear-gradient(to right, #A4FFAF ${
            ((parseInt(range) - minRange) * 100) / (maxRange - minRange)
          }%, #ccc 0px`,
        }}
      />
    </>
  );
}
