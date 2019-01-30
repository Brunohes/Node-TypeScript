import * as express from 'express'
const router: any = express.Router()

import Controller from '../controllers/Controller'

router.post('/', Controller.example)

export default router
