import React, { useEffect, useState } from "react";

const Form = ({ data, vehicle, edit, setData, setEdit }) => {
  const {
    id,
    plate,
    model,
    type,
    capacity,
    driver_id
  } = vehicle

  const [TitleForm, setTitleForm] = useState('Registra')
  const [values, setValues] = useState({
    id: 0,
    plate: '',
    model: '',
    type: '',
    capacity: '',
    driver_id: 0
  })

  useEffect(() => {
    let text = 'Registra'
    if (edit)
      text = 'Edita'
    setTitleForm(text)
  }, [edit])

  useEffect(() => {
    setValues({
     id,
     plate,
     model,
     type,
     capacity,
     driver_id
    })
  }, [vehicle])
  

  const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    if (edit) {
      const request = await fetch('http://localhost:3000/updateVehicle',{
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values),
      })
      const response = await request.json()
      //console.log(response.message)
      const listUpdated = data.map(obj => {
        if (obj.id === values.driver_id){
          let Aux = obj.vehicles.map(veh => (
                      veh.id === values.id ? {...veh,...values} : veh
                    ))
          obj.vehicles = Aux
        }
        return obj
      })
      console.log("lista actualizada : " , listUpdated)
      setData(listUpdated)
      localStorage.setItem('lista',JSON.stringify(listUpdated))
      setEdit(false)
      setValues({
        ...values,
        id: 0,
        plate: '',
        model: '',
        type: '',
        capacity: '',
      })
      return
    }else{
      const request = await fetch('http://localhost:3000/createVehicle',{
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            plate : values.plate,
            model : values.model,
            type : values.type,
            driver_id : values.driver_id,
            capacity: values.capacity
          }),
        })

      const response = await request.json()
      console.log(response)
      if (response.message === "Creado correctamente"){
        console.log("estoy")
        const listUpdated = data.map(obj => {
          console.log(obj.id,values)
          if (obj.id === Number(values.driver_id)){
            console.log("entre al if")
            obj.vehicles.push(response.data)
            console.log("Vehiculo creado : " , obj)
          }
          return obj
        })
        setData(listUpdated)
        localStorage.setItem('lista',JSON.stringify(listUpdated))
      }
      setValues({
        ...values,
        id: 0,
        plate: '',
        model: '',
        type: '',
        capacity: '',
      })
    }
  }

  return (
    <div className="w-auto px-10">
      <h2 className="font-black text-3xl text-center">Vehiculo</h2>

      <p className="text-lg mt-5 text-center mb-10">
        {TitleForm} tu{""}
        <span className="text-indigo-600 font-bold ">Vehiculo</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="plate"
            className="block text-gray-700 uppercase font-bold"
          >
            Placa
          </label>
          <input
            id="plate"
            name="plate"
            type="text"
            value={values.plate}
            required
            onChange={e => handleChange(e)}
            placeholder="Placa del Vehiculo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="model"
            className="block text-gray-700 uppercase font-bold"
          >
            Modelo
          </label>
          <input
            id="model"
            name="model"
            value={values.model}
            required
            onChange={e => handleChange(e)}
            type="text"
            placeholder="Nombre del Modelo del Vehiculo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="type"
            className="block text-gray-700 uppercase font-bold"
          >
            Tipo
          </label>
          <input
            id="type"
            name="type"
            type="text"
            onChange={e => handleChange(e)}
            value={values.type}
            required
            placeholder="Tipo de vehiculo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="capacity"
            className="block text-gray-700 uppercase font-bold"
          >
            Capacidad
          </label>
          <input
            id="capacity"
            name="capacity"
            value={values.capacity}
            required
            onChange={e => handleChange(e)}
            placeholder="Capacidad del vehiculo"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="driver"
            className="block text-gray-700 uppercase font-bold"
          >
            Conductor
          </label>
          <select
            name="driver_id"
            id="driver"
            onChange={e => handleChange(e)}
            required
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          >
            <option value="" disabled selected> Seleccione un conductor</option>
            {data &&
              data.map((obj) => 
                obj.id === vehicle.driver_id ?
                (<option
                  key={obj.id} 
                  selected
                  value={obj.id}>
                  {obj.first_name + " " + obj.last_name}
                </option>)
                :
               ( <option
                  key={obj.id} 
                  value={obj.id}>
                  {obj.first_name + " " + obj.last_name}
                </option>)
              )}
          </select>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
};

export default Form;
