import { useContext } from "react";
import PasswordCtx from "@/Context/PasswordContext";

export default function PasswordStrength() {
  const { range } = useContext(PasswordCtx);
  let strength;
  if (range < 6) {
    strength = "Weak";
  } else if (range < 8) {
    strength = "Medium";
  } else if (range <= 10) {
    strength = "Strong";
  }
  return (
    <div className="flex-between bg-[#18171F] p-2">
      <span>Strength</span>
      <span>{strength}</span>
    </div>
  );
}
