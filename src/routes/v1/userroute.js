import express from 'express'
import { create ,signIn,isAuthenticated } from '../../controllers/usercontroller.js'

const router = express.Router()  

router.post('/signup',create);
router.post('/signin',signIn)

router.get('/isAuthenticated',isAuthenticated)

export default router 