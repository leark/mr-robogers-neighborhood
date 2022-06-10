// Business Logic

function beepBoop(number) {
  if (Number(number)) {
    let result = [];
    for (let i = 0; i <= number; i++) {
      const numString = i.toString();
      const numArray = numString.split('');
      // initialize toBeAdded with current number
      let toBeAdded = i;
      for (let j = 0; j < numArray.length; j++) {
        // change toBeAdded if number contains 3 in any digit and break out of loop
        if (numArray[j] === '3') {
          toBeAdded = "Won't you be my neighbor?";
          break;
          // change toBeAdded if number contains 2
        } else if (numArray[j] === '2') {
          toBeAdded = 'Boop!';
          // change toBeAdded if number contains 1
        } else if (numArray[j] === '1') {
          toBeAdded = 'Beep!';
        }
      }
      result.push(toBeAdded);
    }
    return result;
  }
  return '';
}

// UI Logic

$(document).ready(function () {
  // when "Ask" button is clicked
  $('form#question-form').submit(function (event) {
    event.preventDefault();
    // clear the output div
    $('#outputDiv p').text('');

    // grab user input and print the result to output
    const userNumber = $('#userInput').val();
    $('#outputDiv p').text(beepBoop(userNumber));
  });
});
