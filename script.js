const textarea = document.getElementById("tekst");
const button = document.getElementById("btn");
const hint = document.getElementById("hint");

function getValue(input)
{
	if(input.indexOf("+") !== -1)
	{
		let index = input.indexOf("+");
		return getValue(input.slice(0,index)) + getValue(input.slice(index+1,input.length));
	}
	if(input.indexOf("-") !== -1)
	{
		let index = input.indexOf("-");
		return getValue(input.slice(0,index)) - getValue(input.slice(index+1,input.length));
	}
	if(input.indexOf("*") !== -1)
	{
		let index = input.indexOf("*");
		return getValue(input.slice(0,index)) * getValue(input.slice(index+1,input.length));
	}
	if(input.indexOf("/") !== -1)
	{
		let index = input.indexOf("/");
		return getValue(input.slice(0,index)) / getValue(input.slice(index+1,input.length));
	}

	return Number(input);
}

function calculate() {
	let result = getValue(textarea.value);
	if(isNaN(result))
	{
		hint.textContent = "Błąd";
		return;
	}
	hint.textContent = getValue(textarea.value);
}

// Kliknięcie przycisku
button.addEventListener("click", calculate);

// Skrót: Ctrl+Enter / Cmd+Enter
textarea.addEventListener("keydown", (e) => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const modifier = isMac ? e.metaKey : e.ctrlKey;
  if (modifier && e.key === "Enter") calculate();
});
