import express from 'express'
import { forgotPassword, resendOtp, resetpassword, userLogin, userSignup, VerifyResetOtp, verifyUserSignup } from '../Controller/userController.js'
const router=express.Router()
router.post('/login',userLogin)
router.post('/signup',userSignup).post('/verifySignup',verifyUserSignup).post('/resendOtp',resendOtp)
router.post('/forgotPassword',forgotPassword).post('/resetPassword',resetpassword).post('/verifyResetOtp',VerifyResetOtp)
export default router                                  