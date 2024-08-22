import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterCircleDollar } from "@fortawesome/free-solid-svg-icons";

export default function FormFilter() {
  return (
    <div className="container mx-auto p-4">
      <p className="font-bold text-lg">Selecione as informações</p>
      <form>
        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700 w-full"
            placeholder="Titulo"
          />
          <input
            type="text"
            name="category"
            id="category"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700 w-full"
            placeholder="Categoria"
          />
          <input
            type="date"
            name="date"
            id="date"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700 w-full"
            placeholder="Data de Lançamento"
          />

          <button
            type="submit"
            className="uppercase rounded bg-emerald-500 hover:bg-emerald-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 py-2 px-8 text-white w-full"
          >
            <FontAwesomeIcon icon={faFilterCircleDollar} />
            <span className="ml-1">Filtrar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
