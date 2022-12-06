import http, {Server, IncomingMessage, ServerResponse} from 'http'
import os from 'os'
import fs from 'fs'
import path from 'path'
import { StringUtil } from './util/StringUtil'
import { MathUtils } from './util/mathUtils'

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

  // FS module
  // fs.readFile(path.join(__dirname, 'data', 'notes.txt'), (err, data)=>{
  //   if(err) {throw err } // "Oops! an error occured"
  //   fs.writeFile(path.join(__dirname, 'data', 'data.txt'), data, (err)=>{
  //     if(err) throw err
  //     console.log('Data is written sucessfully');
  //     res.end(`<pre>Data is written sucessfully</pre>`)
  //   })
  // })

  fs.readFile(path.join(__dirname, 'server.ts'), (err, data)=>{
    if(err) throw err
    fs.writeFile(path.join(__dirname, 'backup.ts'), data, (err)=>{
      if(err) throw err

      res.end(`<pre>Code Backup sucessfully</pre>`)
    })
  })

    // StringUtil

  let customerName:string = 'UiBrains'
  let length:number = StringUtil.printLength(customerName)

  let triangleName:string = 'Memorylane'
  let result:string = StringUtil.printTriangle(triangleName)

  let myNumber:number = 12
  let answer:string = MathUtils.multiplicationTable(myNumber)

})



server.listen(port, hostname, () =>{
  console.log(`Listening at port http://${hostname}:${port}`);
})


