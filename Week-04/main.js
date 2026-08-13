import { Ticket } from './ticketlogic.js';
const traveller = {
    name: "Yuvasree",
    age: 19,
    berthPreference: "Lower"
};
const myTicket = new Ticket(traveller, 1200, 12626);
myTicket.printTicket();
