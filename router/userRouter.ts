import express from 'express'
import bcrypt from 'bcrypt'
import { body, validationResult } from 'express-validator'

import fieldValidation from '../middleware/fieldValidation'

const userRouter: express.Router = express.Router()
const saltRound = 10

userRouter.get('/',(req: express.Request, res: express.Response)=>{
  res.status(200).send(`<h3>Welcome to userRouter</h3>`)
})

userRouter.get('/test',(req: express.Request, res: express.Response)=>{
  res.status(200).send(`<h3>Welcome to userRouter test path</h3>`)
})

userRouter.post('/registration', fieldValidation ,
  
async(req: express.Request, res: express.Response)=>{
  let {name, email, password} = req.body
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    return  res.status(400).json({
      message: 'Oops, An error occured',
      errors: errors.array()
    })
  }

 try { const salt = await bcrypt.genSalt(saltRound)
  const hashedPassword = await bcrypt.hash(password, salt)

  res.status(200).json({
    data: {name, email},
    hashedPassword,
    message: 'You password was hashed successfully'
  })
} catch(err) {
    res.status(500).json({message: 'Internal server error', err})
}
})

export default userRouter;
