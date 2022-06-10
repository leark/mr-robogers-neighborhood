// Business Logic

function beepBoop(number) {
  let result = [];
  for (let i = 0; i <= number; i++) {
    const numString = i.toString();
    const numArray = numString.split('');
    let toBeAdded = i;
    for (let j = 0; j < numArray.length; j++) {
      if (numArray[j] === '3') {
        toBeAdded = "Won't you be my neighbor?";
        break;
      }
    }
    result.push(toBeAdded);
  }
  return result;
}

// UI Logic

$(document).ready(function () {
  $('form#question-form').submit(function (event) {
    event.preventDefault();
    $('#outputDiv p').text('');

    const userNumber = $('#userInput').val();
    $('#outputDiv p').text(beepBoop(userNumber));
  });
});

/*
Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
For example, all digits of the number 109 would be replaced with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
For example, all digits of the number 2099 would be replaced with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"
*/
