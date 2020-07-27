import {formatWithOptions} from "util";

const add = (a:number,b:number) =>{
      return  a+b ;
};

const sub =(a:number,b:number):number => {
      return  a-b;
}
function divide(a:number,b:number):number {
      return a/b;
}
const multiply = function(a:number,b:number):number {
      return a* b;
}

const logger = (message:string):void =>{
      console.log(message);
}

const throwError = (message:string): never =>{

      throw new Error(message);
};

const throwNewerror = (message:string):string =>{
      if(!message){
            throw new Error(message);
      }
      return message;
};

const todayWeather = {
      date: new Date(),
      weather:'sunny'
}

const logWeather1 = (forecast:{date:Date,weather:string}): void =>{
      console.log(forecast.date);
      console.log(forecast.weather);

};
const logWeather = ({date,weather}:{date:Date,weather:string}): void =>{
  console.log(date);
  console.log(weather);

};
//ES2015

logWeather(todayWeather);

