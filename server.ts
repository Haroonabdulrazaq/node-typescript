import express, {Request, response, Response} from 'express';
const app: express.Application = express()

import apiRouter from './router/apiRouter';
import appLogger from './middleware/appLogger';
import userRouter from './router/userRouter';

// configure express to receive form data
app.use(express.json())


const hostname: string = '127.0.0.1'
const port: number = 5000

// Router
app.get('/', (req: Request, res: Response)=>{
  res.setHeader('content-type', 'text/html')
   res.status(200).send(`<h3>Welcome to expressjs</h3>`)
})

app.use('/api', appLogger, apiRouter)
app.use('/user', userRouter)


app.listen( port, hostname,()=>{
  console.log(`Express Server is started at ${hostname}:${port}`);
})