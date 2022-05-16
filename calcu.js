  
const Buttons = document.querySelectorAll('button');

const operatorButtons = document.querySelectorAll('.operator');


const deleteButton = document.querySelector('.deleteButton');

const allClearButton = document.querySelector('.all-clearButton');

const equalButton = document.querySelector('.equalButton');

const previousOperand = document.querySelector('.previousOperand');

const currentOperand = document.querySelector('.currentOperand');


Buttons.forEach(butn => {
	 butn.addEventListener('click',calculate);
	 
});

function calculate(){
	console.log('working');
	let buttonText = this.innerText;
	console.log(buttonText);

	if(buttonText==='AC')
	{
		previousOperand.innerText = "";
		currentOperand.innerText = "0";
		return
	}

	if(buttonText ==="DEL"){
		previousOperand.textContent=previousOperand.textContent.substr(0,previousOperand.textContent.length-1);
		return;
	}
	if(buttonText=== "="){
		currentOperand.textContent =eval(previousOperand.textContent) ;

	}
	else{
		previousOperand.textContent+=buttonText;
		return;
	}
}