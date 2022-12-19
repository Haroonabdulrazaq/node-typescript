import express from 'express'

const apiRouter: express.Router = express.Router()


apiRouter.get('/',(req: express.Request, res: express.Response)=>{
  res.status(200).send(`<h3>Welcome to apiRouter</h3>`)
})
apiRouter.get('/test',(req: express.Request, res: express.Response)=>{
  res.status(200).send(`<h3>Welcome to apiRouter test path</h3>`)
})

export default apiRouter;
