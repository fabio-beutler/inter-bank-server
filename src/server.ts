import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'

import globalErrors from './middlewares/globalErrors'
import routes from './routes'

createConnection()
  .then(async () => {
    const app = express()
    const port = process.env.PORT || 3333

    app.use(cors())
    app.use(express.json())
    app.use(routes)
    app.use(globalErrors)

    app.listen(port, () => console.log(`Server is listening on ${port}`))
  })
  .then(() => console.log('Connected to database'))
  .catch(error => console.log(error))
