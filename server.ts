import http, {Server, IncomingMessage, ServerResponse, request} from 'http'


const hostname: string = '127.0.0.1'
const port: number = 5000

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) =>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json' )

  res.end(`<pre></pre>`)

})



server.listen(port, hostname, () =>{
  console.log(`Listening at port http://${hostname}:${port}`);
})


