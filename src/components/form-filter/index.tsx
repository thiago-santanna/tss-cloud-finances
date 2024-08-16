export default function FormFilter() {
  return (
    <div className="container mx-auto py-4">
      <p className="font-bold text-xl">Selecione as informações</p>
      <form>
        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Titulo"
          />
          <input
            type="text"
            name="category"
            id="category"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Categoria"
          />
          <input
            type="date"
            name="date"
            id="date"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Data de Lançamento"
          />

          <button
            type="submit"
            className="py-2 px-8 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-700 disabled:opacity-50"
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
}
