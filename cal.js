

let display = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            display.value = screenValue;
        }
        else if (buttonText == '=') {
            display.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            display.value = screenValue;
        }

    })
}

