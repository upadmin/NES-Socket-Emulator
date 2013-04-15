var socket = io.connect('/');

socket.on('buttonUpdate', function(button, press) {
  var keyboardEvent = document.createEvent('KeyboardEvent');
  var initMethod = typeof keyboardEvent.iniKeyboardEvent !== 'undefined' ?
      "initKeyboardEvent" : "initKeyEvent";
  var action, key;

  if (press == 'down') {
    action = "keydown";
  }
  else {
    action = "keyup";
  }
  if (button == 'A') {
    console.log('A');
    key = 55;
  }
  else if (button == 'B') {
    key = 57;
  }
  else if (button == 'SELECT') {
    key = 49;
  }
  else if (button == 'START') {
    key = 51;
  }
  else if (button == 'UP') {
    key = 56;
  }
  else if (button == 'DOWN') {
    key = 50;
  }
  else if (button == 'LEFT') {
    key = 52;
  }
  else if (button == 'RIGHT') {
    key = 54;
  }

keyboardEvent[initMethod] (
    action,
    true,
    true,
    window,
    false,
    false,
    false,
    false,
    key,
    0
    );
document.dispatchEvent(keyboardEvent);
});
