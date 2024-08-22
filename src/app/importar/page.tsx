"use client";

import Header from "@/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Importar() {
  return (
    <>
      <Header />
      <div className="md:max-w-4xl max-w-md mx-auto mt-5 p-4">
        <div className="text-center text-3xl pb-10">
          Enviar um boleto para cloud
        </div>
        <div className="md:p-16 p-2 bg-green-100">
          <div className="border-2 border-dashed border-green-300 md:px-12 md:py-40 p-2 w-full">
            <div className="mb-5">
              <label
                htmlFor="Arquivo"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Escolha o arquivo
              </label>
              <input
                type="file"
                id="Arquivo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between">
              <div>
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span className="ml-1">
                  Envie arquivos de imagens, Pdf ou textos
                </span>
              </div>
              <button className="uppercase rounded bg-emerald-500 hover:bg-emerald-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 py-2 px-6 text-white">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className="ml-1">Enviar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
