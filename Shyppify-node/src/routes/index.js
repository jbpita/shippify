const { Router } = require('express')
const controller = require('../controllers')
const router = Router()

router.get('/', controller.index)
router.get('/vehicleByDriver', controller.getListVehicleByDriver)

router.post('/createVehicle', controller.createVehicle)
router.put('/updateVehicle', controller.updateVehicle)

router.delete('/deleteVehicle/:id', controller.deleteVehicle)
module.exports = router