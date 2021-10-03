const prompt = require('prompt-sync')({ sigint: true });

let x = -4;
let y = -4;


while (true) {


  const choice = prompt('Which way do you want to go? [up] [down] [left] or [right]? ');


  if (choice === 'up') {
    console.log('You went up. Not there yet, dawg. Where to next: [up] [right] [left] [down]? ');
    y = y + 1;
  } 
  
  else if (choice === 'right') {
    console.log('You went right. Not there yet, dawg. Where to next: [up] [right] [left] [down]? ');
    x = x + 1;
  } 
  
  else if (choice === 'left') {
    console.log('You went left. Not there yet, dawg. Where to next: [up] [right] [left] [down]? ');
    x = x - 1;
  }  
  
  else if (choice === 'down') {
    console.log('You went right. Not there yet, dawg. Where to next: [up] [right] [left] [down]? ');
    y = y - 1;
  } 
  
  else {
    console.log('Try something else');
  }


  console.log('Your map coordinates:', y, 'left and', x, 'right');


  if (y === 2 && x === 2) {
    console.log('You have found a TurboMan action figure signed by Sinbad.');
  }
}