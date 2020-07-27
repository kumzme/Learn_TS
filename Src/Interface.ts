interface Reportable {
/*  name: string;
  year:Date;
  broken:boolean;
  /*
 */
  summary():string;

}
const oldcivic = {
  name: 'civic',
  year:new Date(),
  broken:true,
  summary():string {
        return `name: $(this.name}`;
  }
};

const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar:40,
  summary(): string{
     return ` drink has ${this.sugar}` ;
  }
};
const printSummary = (item:Reportable):void =>{
/*  console.log(` name: ${vehicle.name} `);
  console.log(` year: ${vehicle.year}`);
  console.log(` broken: ${vehicle.broken}`); */
  console.log(` summary: ${item.summary()}`);
  };

 printSummary(oldcivic);
 printSummary(drink1);