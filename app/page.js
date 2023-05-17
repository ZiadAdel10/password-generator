import PasswordGenerator from "@/components/PasswordGenerator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-20 max-[1025px]:p-5">
      <PasswordGenerator />
    </main>
  );
}
