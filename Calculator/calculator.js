const display = document.getElementById("display");

function appendToDisplay(input){
	if (display.value === "Error") {
        display.value = "";
    }

	const lastChar = display.value.slice(-1);

	if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(input)) {
		display.value = display.value.slice(0, -1) + input;
	} else {
		display.value += input;
		display.scrollLeft = display.scrollWidth;
	}
}

function clearDisplay(){
	display.value = "";
}

function calculate(){
	try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
            alert("Can't divide by zero.");
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}