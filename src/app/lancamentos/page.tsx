"use client";

import Header from "@/components/header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

export default function Lancamentos() {
  const [bgColorEnt, setBgColorEnt] = useState("bg-transparent");
  const [bgColorSai, setBgColorSai] = useState("bg-transparent");

  const handleClickEnt = () => {
    setBgColorSai("bg-transparent");
    setBgColorEnt(
      bgColorEnt === "bg-transparent" ? "bg-green-100" : "bg-transparent"
    );
  };

  const handleClickSai = () => {
    setBgColorEnt("bg-transparent");
    setBgColorSai(
      bgColorSai === "bg-transparent" ? "bg-red-200" : "bg-transparent"
    );
  };

  return (
    <>
      <Header />

      <form className="md:max-w-xl max-w-sm mx-auto mt-5 p-4">
        <div className="text-2xl mb-4">Lançamentos</div>
        <div className="mb-5">
          <label
            htmlFor="titulo"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Título
          </label>
          <input
            type="titulo"
            id="titulo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="nome@tsswebapps.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="preco"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Preço
          </label>
          <input
            type="number"
            id="preco"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Data"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Data lançamento
          </label>
          <input
            type="date"
            id="Data"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Tipo do lançamento (D/C)
        </label>
        <div className="mb-5 flex justify-between gap-2">
          <div
            className={`${bgColorEnt} flex gap-1 justify-center rounded-md p-4 border-2 border-gray-500 w-1/2 cursor-pointer`}
            onClick={handleClickEnt}
          >
            <Image
              src={"/entradas.png"}
              alt="Logo Finances"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <span className="font-light ">Entrada</span>
          </div>
          <div
            className={`${bgColorSai} flex gap-1 justify-center rounded-md p-4 border-2 border-gray-500 w-1/2 cursor-pointer`}
            onClick={handleClickSai}
          >
            <Image
              src={"/saidas.png"}
              alt="Logo Finances"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <span className="font-light ">Saídas</span>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="cars"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Escolha uma categoria
          </label>

          <select
            name="cars"
            id="cars"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="volvo">Cartão de Crédito</option>
            <option value="saab">Moradia</option>
            <option value="mercedes">Empréstimos</option>
            <option value="audi">ETC</option>
          </select>
        </div>

        <button
          type="submit"
          className="uppercase rounded bg-emerald-500 hover:bg-emerald-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 py-2 px-8 text-white w-full "
        >
          <Link href={"/"}>
            <FontAwesomeIcon icon={faFloppyDisk} />
            <span className="ml-1">Salvar</span>
          </Link>
        </button>
      </form>
    </>
  );
}
