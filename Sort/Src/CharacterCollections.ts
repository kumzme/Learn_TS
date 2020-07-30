import {Sorter} from "./sorter";

export class CharacterCollections extends Sorter{

      constructor(public  data:string) {
            super();
      }

      get length():number{
            return this.data.length;
      }
      compare(leftindex:number, rightIndex:number):boolean{

            return (this.data[leftindex].toLowerCase() > this.data[rightIndex].toLowerCase());
      }
      swap(leftIndex:number,rightIndex:number):void{
      const charArry = this.data.split('');
      const lefthhand = charArry[leftIndex];
      charArry[leftIndex ] = charArry[rightIndex];
      charArry[rightIndex] = lefthhand;

      this.data= charArry.join('');
     }
}