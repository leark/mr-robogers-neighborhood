// Business Logic

function beepBoop(number, name, reverse) {
  if (Number(number)) {
    let result = [];
    // check if number is a negative number
    if (number < 0) {
      if (number < -100000) {
        return 'Please put in a number greater than -100000';
      }
      if (reverse) {
        // start i at 0 and count towards number
        for (let i = 0; i >= number; i--) {
          result.push(substitute(i, name));
        }
      } else {
        // start at number and count towards 0
        for (let i = number; i <= 0; i++) {
          result.push(substitute(i, name));
        }
      }
    } else {
      if (number > 100000) {
        return 'Please put in a number less than 100000';
      }
      if (reverse) {
        // start at number and count towards 0
        for (let i = number; i >= 0; i--) {
          result.push(substitute(i, name));
        }
      } else {
        // start at 0 and count towards number
        for (let i = 0; i <= number; i++) {
          result.push(substitute(i, name));
        }
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
  let result = number;
  for (let j = 0; j < numArray.length; j++) {
    // if number contains 3 in any digit then return text
    if (numArray[j] === '3') {
      if (name.length > 0) {
        return "Won't you be my neighbor, " + name + '?';
      } else {
        return "Won't you be my neighbor?";
      }
      // change result if number contains 2
    } else if (numArray[j] === '2') {
      result = 'Boop!';
      // change result if number contains 1
    } else if (numArray[j] === '1') {
      result = 'Beep!';
    }
  }
  return result;
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
