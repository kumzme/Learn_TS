let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch:null=null;
let nothing:undefined=undefined;

let now:Date=new Date();
let colurs: string[] = ['1','2','3']
let abc: number[] = [1,2,3]
let t:boolean[] = [true,false,false]

class Car {}

let car:Car = new Car();

let point:{x:number;y:number } = {
      x:10,
      y:10
};
const logNumber:( i:number) => void = (i:number ) => {
      console.log(i)
};

//use Annotations

const json = '{"x":20,"y":20}';
const coordinates:{x:number;y:number} = JSON.parse(json);
console.log(coordinates);

//initialize later

let words =[1,2,3];
let foundw:boolean;
for(let i=0; i <words.length;i++){
      if(words[i] === 1){
            foundw =true;
      }
}

//variable whose type cant be interfered correctly

let numbers = [-10, -1,12];
let numberAboveZero: boolean|number =false;


for(let i=0; i<numbers.length; i++){
      if(numbers[i] > 0){
         numberAboveZero = numbers[i];
      }
}

