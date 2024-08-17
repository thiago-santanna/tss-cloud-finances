"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

interface IRota {
  descricao: string;
  link: string;
}

export default function Header() {
  const searchParams = useSearchParams();
  const params = useParams();

  const pathname = usePathname();
  const rotaAtual = pathname.split("/")[1];

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log("url " + url);
    console.log("pathName " + pathname);
    console.log("Search " + searchParams);
    console.log("Params " + params);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams, params]);

  const renderMenuPrincipal = () => {
    return (
      <>
        <div className="cursor-pointer border-b-0 hover:text-slate-400 hover:border-b-green-400 hover:border-b-2">
          <Link href="/lancamentos">Lançamentos</Link>
        </div>

        <div className="cursor-pointer border-b-0 hover:text-slate-400 hover:border-b-green-400 hover:border-b-2">
          <Link href="/importar">Importar</Link>
        </div>
      </>
    );
  };

  const renderMenuVoltar = () => {
    return (
      <>
        <div className="cursor-pointer border-b-0 hover:text-slate-400 hover:border-b-green-400 hover:border-b-2">
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </>
    );
  };

  const renderMenuVoltarLogin = () => {
    return (
      <>
        <div className="cursor-pointer border-b-0 hover:text-slate-400 hover:border-b-green-400 hover:border-b-2">
          <Link href="/">Login</Link>
        </div>
      </>
    );
  };

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
          {rotaAtual === "dashboard"
            ? renderMenuPrincipal()
            : rotaAtual !== "cadastro"
            ? renderMenuVoltar()
            : renderMenuVoltarLogin()}
        </div>
      </header>
    </>
  );
}
