import {Router} from 'express'
import {getEmpleado, getEmpleados, createEmpleado, updateEmpleado , deleteEmpleados} from '../controllers/empleado.controller.js'

const router = Router()
//Rutas

router.get('/empleados',getEmpleados)

router.get('/empleados/:id',getEmpleado)

router.post('/empleado',createEmpleado)

router.patch('/empleado/:id',updateEmpleado)

router.delete('/empleado/:id',deleteEmpleados)



export default router