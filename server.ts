import http, {Server, IncomingMessage, ServerResponse} from 'http'
import { StringUtil } from './util/StringUtil'
import { MathUtils } from './util/mathUtils'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) =>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html' )

  // StringUtil

  let customerName:string = 'UiBrains'
  let length:number = StringUtil.printLength(customerName)

  let triangleName:string = 'Memorylane'
  let result:string = StringUtil.printTriangle(triangleName)

  let myNumber:number = 12
  let answer:string = MathUtils.multiplicationTable(myNumber)

  res.end(answer)

})



server.listen(port, hostname, () =>{
  console.log(`Listening at port http://${hostname}:${port}`);
})


