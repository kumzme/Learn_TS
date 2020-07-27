const drink = {
      color: 'brown',
      carbonated: true,
      sugar: 40
};
/* Array */
const pepsi2 = ['brown',true,80];
/* Tuple*/
const pepsi:[string,boolean,number] = ['brown',true,40];
/*Type Aliase */
type Drink = [string,boolean,number];
const pepsi1:Drink = ['brown',true,40];
const coca:Drink =['brown',true,100];
const sprint:Drink =['clear',true,80];
const tea:Drink =['b',false,10];

/*Tuple*/
const carspec:[number,number] = [400,3354];
/*object*/
const carStats = {
      horsepower: 400,
      weight:3354
};
