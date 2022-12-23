import express, { Request, Response, NextFunction } from 'express';

const appLogger =(req: Request, res: Response, next: NextFunction)=>{
  // url, method, data, time

  let data = {
      url: req.url,
      method: req.method,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    }
    console.log(data);
    next()
}

export default appLogger;