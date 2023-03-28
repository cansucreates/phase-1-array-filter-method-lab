// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
console.log(findMatching(drivers, "bobby"));

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
}

console.log(fuzzyMatch(drivers,"S"));

function matchName(drivers, string) {
   return drivers.filter(driver => driver.name === string);
    
}
console.log(matchName(drivers,"Sally"));