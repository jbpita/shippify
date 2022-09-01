const { vehicleByDriver, createVehicle, updateVehicle, deleteVehicle } = require("../services/veihicles")

const controller = {}

controller.index = (req, res) => {
    res.json({
        message: "Hello Word"
    })
}

controller.getListVehicleByDriver = async (req, res) => {
    const list = await vehicleByDriver()

    res.status(list.status).json(list.payload)
}

controller.createVehicle = async (req, res) => {
    const vehicle = await createVehicle(req.body)

    res.status(vehicle.status).json(vehicle.payload)
}

controller.updateVehicle = async (req, res) => {
    const vehicle = await updateVehicle(req.body)

    res.status(vehicle.status).json(vehicle.payload)
}

controller.deleteVehicle = async (req, res) => {
    const vehicle = await deleteVehicle(req.params)

    res.status(vehicle.status).json(vehicle.payload)
}

module.exports = controller