import React from 'react'
import Table from './table'

const Card = ({data, setVehicle, setDriver, setEdit}) => {
  const { id, first_name , last_name, vehicles} = data
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl w-full'>
        <div className='h-2'>
            <h2 >{first_name + ' ' + last_name}</h2>
        </div>
        <div className='m-20 text-center'>
            <Table 
                vehicle={vehicles}
                id_driver={id}
                setVehicle={setVehicle}
                setDriver={setDriver}
                setEdit={setEdit}
            />
        </div>
    </div>
  )
}

export default Card