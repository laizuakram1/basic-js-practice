// convert feet to inches

function feetToInch(feet){
    let calculateFeet = feet * 12;
    return calculateFeet;
}
let totalInches = feetToInch(5);
console.log(totalInches);


// convert centimeter to meter 

function centimeterToMeter(centrimeter){
    let calculateMeter = centrimeter * 0.01;
    return calculateMeter;
}
let totalMeter = centimeterToMeter(110);
console.log(totalMeter);



// paper Requirement for book


function paperRequirements(page1, page2, page3){
    let book1 = page1 * 100;
    let book2 = page2 * 200;
    let book3 = page3 * 300;
    let Pages = book1 + book2 + book3;

    return Pages;
}
let totalPages = paperRequirements(3, 2, 6);
console.log(totalPages); 


// find long charecter friend name in array 

let myFriends = ['rana', 'biplop', 'jhankar', 'mahbub']

function bestFriend(array){
    let longName = '';
  for(let element of myFriends){
      if(element.length > longName.length){
          longName = element;
      }
  }
  return longName;
}
let bestName = bestFriend(myFriends);
console.log(bestName);