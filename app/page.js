import Image from "next/image";
import Password from "@/components/Password";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Password />
    </main>
  );
}
