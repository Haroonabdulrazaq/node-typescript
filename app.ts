const courseName:string = 'Backend web dev'
console.log(courseName);


let printNumber =(start: number, end: number): void =>{
  let temp: string = ''
  if(start > end){
    console.log('Inavlid start or end Number');
    return
  }
   for(let i=start; i<= end; i++){
    temp += `${i} `
  }
  console.log(temp);
  
}

printNumber(20, 8)