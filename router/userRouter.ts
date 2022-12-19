import express from 'express'

const userRouter: express.Router = express.Router()


userRouter.get('/',(req: express.Request, res: express.Response)=>{
  res.status(200).send(`<h3>Welcome to userRouter</h3>`)
})
userRouter.get('/test',(req: express.Request, res: express.Response)=>{
  res.status(200).send(`<h3>Welcome to userRouter test path</h3>`)
})

export default userRouter;
