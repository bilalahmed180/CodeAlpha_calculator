let display = document.getElementById('display');

    function press(value) {
      display.textContent += value;
    }

    function clearDisplay() {
      display.textContent = '';
    }

    function backspace() {
      display.textContent = display.textContent.slice(0, -1);
    }

    function calculate() {
      try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
      } catch (e) {
        display.textContent = 'Error';
      }
    }