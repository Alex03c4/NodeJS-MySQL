import express from 'express'
import empleadoRoutes from './routes/empleado.routes.js'
import indexRouter from './routes/index.routes.js'

const app = express()

app.use(express.json())

//Rutas
app.use(indexRouter)
app.use('/api', empleadoRoutes)

// 404
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not Found'
  })  
})

export default app;