"use client";

import { PasswordProvider } from "@/Context/PasswordContext";
import PasswordForm from "./PasswordForm";
import Password from "./Password";
import CharacterLength from "./CharacterLength";
import GenerateBtn from "./GenerateBtn";
import PasswordStrength from "./PasswordStrength";

export default function PasswordGenerator() {
  return (
    <div className="flex-v gap-9">
      <PasswordProvider>
        <Password />

        <div className="flex-v gap-5 bg-[#24232C] px-6 py-4">
          <CharacterLength />
          <PasswordForm />
          <PasswordStrength />
          <GenerateBtn />
        </div>
      </PasswordProvider>
    </div>
  );
}
