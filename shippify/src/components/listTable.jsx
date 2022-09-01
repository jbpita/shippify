import { useEffect, useState } from 'react'
import Card from './card'
import Form from './form'

const ListTable = () => {
  const [data, setData] = useState([])
  const [vehicle, setVehicle] = useState({})
  const [driver, setDriver] = useState({})
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    const getVehicleDriver = async () => {
      let list = JSON.parse(localStorage.getItem('lista')) ?? null

      if (list == null) {
        console.log('entre')
        const vehicle = await fetch('http://localhost:3000/vehicleByDriver')
        const json = await vehicle.json()
        list = json.data
        localStorage.setItem('lista', JSON.stringify(list))
      }
      
      setData(list)
    }

    getVehicleDriver()
  }, [])


  return (
    <div className="md:flex w-full ">
      <div className='w-auto flex-1 sm:w-full'>
        <Form
          data={data}
          vehicle={vehicle}
          edit={edit}
          setEdit={setEdit}
          setData={setData}
        />
      </div>
      <div className='w-auto flex-1 sm:w-full md:h-screen overflow-y-scroll'>
        {data && data.map((obj) => (
          <Card
            key={obj.id}
            data={obj}
            setVehicle={setVehicle}
            setDriver={setDriver}
            setEdit={setEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default ListTable
