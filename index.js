/********************************************************* 
	Gets the values from first name and last name
	inputs and greets the user
**********************************************************/
function testPrint ()  {
	// prepare function
	const firstName = getInputTextFromId('firstNameInput');
	const lastName = getInputTextFromId('lastNameInput');
	
	if (firstName && lastName) { 
		setTextToElementId('printedTextOutput','Hello, ' + firstName + ' ' + lastName);	
		
		// reset to default value
		setTextToElementId('firstNameInput' , '');
		setTextToElementId('lastNameInput' , '');
	}		
}

/* Helper Functions */
function getInputTextFromId(id) { 
	return inputText = document.getElementById(id).value;
}  

function setTextToElementId(id, text) { 
	const element = document.getElementById(id);
	element.innerHTML = text;
	element.value = text;
}