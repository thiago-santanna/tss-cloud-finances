"use client";

import Card from "@/components/card";
import FormFilter from "@/components/form-filter";
import Header from "@/components/header";
import SimpleTable from "@/components/simple-table";
import { TituloCardPNG } from "@/models/tituloCard";

export default function Dashboard() {
  function getPNGPorTitulo(titulo: TituloCardPNG): string {
    return titulo;
  }

  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center gap-2 px-4
        md:flex-row md:justify-between md:container md:mx-auto md:h-32"
        style={{ marginTop: "-70px" }}
      >
        <Card
          titulo="Entradas"
          pngPath={getPNGPorTitulo(TituloCardPNG.Entrada)}
          valor={1000}
          bgColor="#deece4"
          fontColor="initial"
        />
        <Card
          titulo="Saídas"
          pngPath={getPNGPorTitulo(TituloCardPNG.Saida)}
          valor={100}
          bgColor="#deece4"
          fontColor="initial"
        />
        <Card
          titulo="Total"
          pngPath={getPNGPorTitulo(TituloCardPNG.Total)}
          valor={900}
          bgColor="#84CC16"
          fontColor="white"
        />
      </div>

      <FormFilter />

      <div className="text-2xl font-bold pl-1">Lançamentos filtrados</div>

      <SimpleTable />
    </>
  );
}
