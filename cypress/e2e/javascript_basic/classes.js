class Car {
    constructor(carname, model, year) {
        this.carname = carname
        this.model = model
        this.year = year
    }

    carAge() {  //function

        let date=new Date()
        return date.getFullYear()-this.year  //bu seneki yili dinamik olarak aliyoruz  ve aracin yapim yilini cikariyoruz
        //arabanin yasini bulmak icin simdiki zamandan üretim yili cikartilacak

    }
}

// var myCar=new Car('Seat','leon','2005') 2005 i tirnak icinde yazmasakta sorun yok yazdiriyor 
var myCar=new Car('Seat','leon',2005)
console.log(myCar.carname,myCar.model,myCar.year)

console.log('car age is : ', myCar.carAge())



