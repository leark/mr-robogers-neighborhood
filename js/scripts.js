// Business Logic

function beepBoop(number, name, reverse) {
  if (Number(number)) {
    let result = [];
    if (reverse) {
      // we start i at number and count backwards
      for (let i = number; i >= 0; i--) {
        result.push(substitute(i, name));
      }
    } else {
      // start i at 0 and count up towards number
      for (let i = 0; i <= number; i++) {
        result.push(substitute(i, name));
      }
    }
    return result;
  }
  return '';
}

// Utility Logic

// substitues number to text if it matches predetermined condition
function substitute(number, name) {
  const numString = number.toString();
  const numArray = numString.split('');
  // initialize toBeAdded with current number
  let toBeAdded = number;
  for (let j = 0; j < numArray.length; j++) {
    // change toBeAdded if number contains 3 in any digit and break out of loop
    if (numArray[j] === '3') {
      if (name.length > 0) {
        return "Won't you be my neighbor, " + name + '?';
      } else {
        return "Won't you be my neighbor?";
      }
      // change toBeAdded if number contains 2
    } else if (numArray[j] === '2') {
      return 'Boop!';
      // change toBeAdded if number contains 1
    } else if (numArray[j] === '1') {
      return 'Beep!';
    }
  }
  return toBeAdded;
}

// UI Logic

$(document).ready(function () {
  // when "Ask" button is clicked
  $('form#question-form').submit(function (event) {
    event.preventDefault();
    // fade out the old result
    $('#outputDiv').fadeOut(function () {
      // clear the output div
      $('#outputDiv p').text('');

      // grab user input and print the result to output
      const userName = $('#userInputName').val();
      const userNumber = $('#userInputNumber').val();
      const reverse = $('input:checkbox[name=userInputReverse]:checked').prop(
        'checked'
      );
      $('#outputDiv p').text(beepBoop(userNumber, userName, reverse));
      // fade in the result
      $('#outputDiv').fadeIn();
    });
  });
});
