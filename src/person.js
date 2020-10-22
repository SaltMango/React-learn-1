console.log("person loaded");

export const isAdult = (age) => age > 18;
export const canDrink = (age) => age > 21;
const isSenior = (age) => age >= 55;

export default isSenior;
