//import { User }    from "../Src/User ";
//import { Company } from "../Src/Company ";

 export interface Mappable {
     location:  {
           lat:number;
           lng:number;
     };
     markerContent(): string;
     color:string;

}
export class CustomMap{
      private googleMap: google.maps.Map;

      constructor(divId:string) {
       this.googleMap = new google.maps.Map(document.getElementById(divId), {
             zoom:1,
             center:{
                   lat: 0,
                   lng: 0
                  }
            });
      }
     addMarker(mappable:Mappable):void {
        const marker =  new google.maps.Marker({
               map:this.googleMap,
               position:{
                     lat:mappable.location.lat,
                     lng:mappable.location.lng

               }
         });
        marker.addListener('click',() => {
              const infoWindow = new google.maps.InfoWindow({
                    content: mappable.markerContent()
              });

             infoWindow.open(this.googleMap, marker);
        })
     }
   /*  addMarker(mappable:User|Company):void{
       new google.maps.Marker({
             map:this.googleMap,
             position:{
                   lat:mappable.location.lat,
                   lng:mappable.location.long
             }
       })
     }
      addUserMaker(user:User):void{
            new google.maps.Marker({
                  map:this.googleMap,
                  position:{
                        lat: user.location.lat,
                        lng:user.location.long
                  }
            })

      }
      addCompanyMaker(company:Company):void{
            new google.maps.Marker({
                  map:this.googleMap,
                  position:{
                        lat: company.location.lat,
                        lng:company.location.long
                  }
            })
      }
     */

}