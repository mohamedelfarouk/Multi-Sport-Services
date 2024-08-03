export class Booking{
    name:string;
    type:string;
    bookingDate:string;
    paymentStatus:string;
    cost:number;
    startTime :string;
    endTime:string;
    constructor(name:string,type:string,bookingDate:string,paymentStatus:string,cost:number,startTime:string,endTime:string){
        this.type=type;
        this.bookingDate=bookingDate;
        this.paymentStatus=paymentStatus;
        this.cost=cost;
        this.startTime=startTime;
        this.endTime=endTime;
        this.name=name;
    }
}