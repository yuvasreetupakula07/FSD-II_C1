import{Ticket} from './ticketlogic.js';
import {Passenger} from './passengers.js';
const traveller: Passenger={
    name: "Yuvasree",
    age: 19,
    berthPreference: "Lower"
};
const myTicket=new Ticket(traveller,1200,12626);
myTicket.printTicket();