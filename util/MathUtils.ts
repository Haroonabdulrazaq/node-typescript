export class MathUtils {
  public static multiplicationTable(value: number):string {
    let temp: string = ''

    for(let i=1; i<=12; i++){
      temp += `${value} * ${i} = ${value * i}`
      temp += '\n'
    }
    
    return temp
  }
}