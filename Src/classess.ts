class Vehicle {
     //color: string='red';

     constructor(public color:string) {

     }
      drive():void{
            console.log ('test');
      }
      protected ddd(): void{
            console.log('tytuyi');
     }
}

class Car extends Vehicle{
      constructor(public wheels: number, color: string) {
            super(color);
      }
      drive(): void {
            console.log('vroom');
      }
      startDriveProcess(): void{
            this.drive();
            this.ddd();
      }

}
const vehicle = new Vehicle('orange');
vehicle.drive();
console.log(vehicle.color);
const car = new Car(4,'red');
car.startDriveProcess();
