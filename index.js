import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

// (a) Home Team name for 2014 world cup final
const fourteenFinal = fifaData.filter(item => item["Year"] === 2014 && item["Stage"] === "Final")
console.log(fourteenFinal[0]["Home Team Name"])
// (b) Away Team name for 2014 world cup final
console.log(fourteenFinal[0]["Away Team Name"]) //using array from 1a
// (c) Home Team goals for 2014 world cup final
console.log(fourteenFinal[0]["Home Team Goals"])
// (d) Away Team goals for 2014 world cup final
console.log(fourteenFinal[0]["Away Team Goals"])
// (e) Winner of 2014 world cup final
console.log(fourteenFinal[0]["Win conditions"])

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    // const finalsData = data.filter(item => item["Stage"] === "Final")
    return data.filter(item => item["Stage"] === "Final")
};
//test
console.log(getFinals(fifaData))


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cbGetFinals) {
    const years = cbGetFinals.map(function(item){
        return `${item["Year"]}`
    })
    return years
};
//test
console.log(getYears(getFinals(fifaData)))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cbGetFinals) {
    const winners = cbGetFinals.map(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]) return item["Home Team Name"]
        else return item["Away Team Name"]
        // return Math.max(item["Home Team Goals"], item["Home Team Goals"])
        //currently returning winning score, could be interesting solution
    })
    return winners
};
//test
console.log(getWinners(getFinals(fifaData)))

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(cbGetWinners, cbGetYears) {
//     return `In ${cbGetYears[0]}, ${cbGetWinners[0]} won the world cup!`
// };
function getWinnersByYear(cbGetWinners, cbGetYears) {
    cbGetWinners.forEach(cbGetYears(item)){
        return `In ${cbGetYears[0]}, ${cbGetWinners[0]} won the world cup!`
    })
};
//test
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))))

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
