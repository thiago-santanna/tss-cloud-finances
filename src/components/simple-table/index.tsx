export default function SimpleTable() {
  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Titulo
            </th>
            <th scope="col" className="px-6 py-3">
              Preço
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Data
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">R$ 2.999,00</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">16/08/2024</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">R$ 2.999,00</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">16/08/2024</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">R$ 2.999,00</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">16/08/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
