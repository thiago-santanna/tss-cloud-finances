import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-green-900 h-40 container mx-auto px-4 flex justify-between items-start pt-4">
        <Image
          src="/logo.svg"
          alt="Logo Finances"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <div className="flex gap-4 text-slate-100">
          <div className="cursor-pointer border-b-0 hover:text-slate-400 hover:border-b-green-400 hover:border-b-2">
            Lançamentos
          </div>
          <div className="cursor-pointer border-b-0 hover:text-slate-400 hover:border-b-green-400 hover:border-b-2">
            Importar
          </div>
        </div>
      </header>
    </>
  );
}
