const textarea = document.getElementById("tekst");
const button = document.getElementById("btn");
const hint = document.getElementById("hint");

function getValue(input)
{
	input = input.replace("*-","*m").replace("/-","/m");
	if(input.indexOf("(") !== -1)
	{
		let index = input.lastIndexOf("(");
	    let indexEnd = input.indexOf(")",index);
		return getValue(input.slice(0,index) + getValue(input.slice(index+1,indexEnd)) + input.slice(indexEnd+1,input.length));
	}
	if(input.indexOf("+") !== -1)
	{
		let index = input.lastIndexOf("+");
		return getValue(input.slice(0,index)) + getValue(input.slice(index+1,input.length));
	}
	if(input.indexOf("-") !== -1)
	{
		let index = input.lastIndexOf("-");
		return getValue(input.slice(0,index)) - getValue(input.slice(index+1,input.length));
	}
	if(input.indexOf("*") !== -1)
	{
		let index = input.lastIndexOf("*");
		return getValue(input.slice(0,index)) * getValue(input.slice(index+1,input.length));
	}
	if(input.indexOf("/") !== -1)
	{
		let index = input.lastIndexOf("/");
		return getValue(input.slice(0,index)) / getValue(input.slice(index+1,input.length));
	}

	return Number(input.replace("m","-"));
}

function calculate() {
	let result = getValue(textarea.value.replace(" ","").replace("m","").replace(/(\d)\(/g, "$1*("));
	if(isNaN(result))
	{
		hint.textContent = "Błąd";
		return;
	}
	hint.textContent = result;
}

// Kliknięcie przycisku
button.addEventListener("click", calculate);

// Skrót: Ctrl+Enter / Cmd+Enter
textarea.addEventListener("keydown", (e) => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const modifier = isMac ? e.metaKey : e.ctrlKey;
  if (modifier && e.key === "Enter") calculate();
});
