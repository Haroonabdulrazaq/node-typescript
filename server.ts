import http, {Server, IncomingMessage, ServerResponse} from 'http'
import os from 'os'

const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) =>{
  res.statusCode = 200
  // res.setHeader({name: 'Content-Type', value: 'text/html'} )
  res.setHeader('Content-Type', 'text/html' )
  // OS Module

let osData = {
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  homedir: os.homedir(),
  computerName: os.hostname(),
  upTime: os.uptime()
}
  res.end(`<pre>${JSON.stringify(osData.upTime)}</pre>`)
})

server.listen(port, hostname, () =>{
  console.log(`Listening at port http://${hostname}:${port}`);
})


