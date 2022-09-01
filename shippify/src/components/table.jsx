import React from "react";

const Table = ({ vehicle, setVehicle, id_driver,setDriver,setEdit}) => {

  const handleClick = (obj) => {
    setVehicle(obj)
    setDriver(id_driver)
    setEdit(true)
  }

  return (
    <div>
      <div className="border-b border-gray-200 shadow">
        <table className="table-auto w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">Placa</th>
              <th className="px-6 py-2 text-xs text-gray-500">Modelo</th>
              <th className="px-6 py-2 text-xs text-gray-500">Tipo</th>
              <th className="px-6 py-2 text-xs text-gray-500">Capacidad</th>
              <th className="px-6 py-2 text-xs text-gray-500">Opciones</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {vehicle &&
              vehicle.map((obj) => (
                <tr key={obj.id}>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {obj.plate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {obj.model}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {obj.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {obj.capacity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <button>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      onClick={() => handleClick(obj)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
                          />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
