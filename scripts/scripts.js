// Declare the generate button
const generateBtn = document.getElementById('generate-btn');
// Declare all the placeholders
const dogPicture = document.getElementById('dog-picture');
const newGender = document.getElementById('gender-id');
const newAge = document.getElementById('age-id');
const newNationality = document.getElementById('nationality-id');

// Generate button event
generateBtn.addEventListener('click', generateAllValues);
// Generate values function
function generateAllValues() {
    // Declare the value of the text input
    const nameField = document.getElementById('name').value;
    // Declare gender's url
    var urlGender = 'https://api.genderize.io?name=' + nameField;
    // Declare age's url
    var urlAge = 'https://api.agify.io/?name=' + nameField

    if (nameField == 0) {
        console.log('error');
    }
    else {
        // Fetch gender
        fetch(urlGender)
        .then(res => res.json())
        .then(data => {
            newGender.innerHTML = `<p>${data.gender}</p> `
        });
        // Fetch age
        fetch(urlAge)
		.then(res => res.json())
		.then(data => {
			newAge.innerHTML = `<p>${data.age}</p> `
		});
    }
        

}