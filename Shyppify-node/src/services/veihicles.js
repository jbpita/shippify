const sequelize = require('../database/models/index').sequelize;
var initModels = require("../database/models/init-models");
var models = initModels(sequelize);

const services = {}

services.vehicleByDriver = async () => {
    let response = {}
    try {
        const list = await models.driver.findAll({
            include: [{
                model: models.vehicle,
                as: 'vehicles'
            }]
        })
        response.status = 200
        response.payload = {
            data: list,
            message: 'success'
        }
    } catch (error) {
        response.status = 400
        response.payload = {
            data: null,
            message: error
        }
    }

    return response;
}

services.createVehicle = async ({
    driver_id,
    plate,
    model,
    type,
    capacity
}) => {
    let response = {}

    try {
        const vehicle = await models.vehicle.create({
            driver_id,
            plate,
            model,
            type,
            capacity,
        },
            {
                fields: [
                    'driver_id',
                    'plate',
                    'model',
                    'type',
                    'capacity'
                ]
            }
        )

        response.status = 201
        response.payload = {
            data: vehicle,
            message: 'Creado correctamente'
        }
    } catch (error) {
        response.status = 400
        response.payload = {
            data: vehicle,
            message: error
        }
    }

    return response
}

services.updateVehicle = async ({
    id,
    driver_id,
    plate,
    model,
    type,
    capacity
}) => {
    let response = {}

    try {
        const vehicleUpdate = await models.vehicle.update({
            driver_id,
            plate,
            model,
            type,
            capacity
        },
            { where: { id } }
        )

        response.status = 201
        response.payload = {
            data: vehicleUpdate,
            message: 'Actualizado correctamente'
        }

        if (vehicleUpdate[0] === 0) {
            response.status = 401
            response.payload = {
                data: vehicleUpdate,
                message: 'No se puedo actualizar '
            }
        }

    } catch (error) {
        response.status = 400
        response.payload = {
            data: null,
            message: error
        }
    }
    return response
}

services.deleteVehicle = async ({ id }) => {
    let response = {}

    try {
        const vehicle = await models.vehicle.destroy({
            where: { id }
        })

        response.status = 200
        response.payload = {
            data: vehicle,
            message: "Eliminado correctamente"
        }

        if (vehicle === 0) {
            response.status = 405
            response.payload = {
                data: null,
                message: "Error al eliminar eliminar..."
            }
        }

    } catch (error) {
        response.status = 400
        response.payload = {
            data: null,
            message: error
        }
    }

    return response
}



module.exports = services

