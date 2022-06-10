// Business Logic

function beepBoop(number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    if (i === 3) {
      result.push("Won't you be my neighbor?");
    } else {
      result.push(i);
    }
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
