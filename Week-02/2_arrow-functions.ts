function calculateTotalTraditional(price: number, taxRate: number): number {
    return price + (price*taxRate);
}
const calculateTotalArrow=(price: number, taxRate: number): number => {
    return price+(price*taxRate);
}
const getWelcomeMessage=(theatre: string): string => `Welcometo ${theatre} Cinemas!`;
const ticketPrice: number=500;
const gstRate: number=0.25;
console.log(getWelcomeMessage("PVR"));
const total1=calculateTotalTraditional(ticketPrice, gstRate);
console.log(`Total(Traditional): ${total1}`);
const total2=calculateTotalArrow(ticketPrice, gstRate);
console.log(`Total(Arrow): ${total2}`);
