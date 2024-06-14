// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarksKm = 225000000;
let distanceToTheMoonKm = 384400;
let milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarksKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof milesPerKilometer);
// Calculate a space mission below
let miles2Mars = distanceToMarksKm * milesPerKilometer;
const hours2Mars = miles2Mars / shuttleSpeedMph;
const days2Mars = hours2Mars / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttleName + "will take" + days2Mars + "days to reach Mars.");
//Determinationwill take332.67857142857144days to reach Mars.
// Calculate a trip to the moon below
let miles2Moon = distanceToTheMoonKm * milesPerKilometer;
const hours2Moon = miles2Moon / shuttleSpeedMph;
const days2Moon = hours2Moon / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttleName + "will take" + days2Moon + "days to reach the Moon.");