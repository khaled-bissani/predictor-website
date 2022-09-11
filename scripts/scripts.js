// Declare the generate button
const generateBtn = document.getElementById('generate-btn');
const boredBtn = document.getElementById('bored-btn');

// Declare all the placeholders
const dogPicture = document.getElementById('dog-picture');
const newGender = document.getElementById('gender-id');
const newAge = document.getElementById('age-id');
const newNationality = document.getElementById('nationality-id');
const newBored = document.getElementById('bored-id');
const ipAddress = document.getElementById('ip-address');

// Generate button event
generateBtn.addEventListener('click', generateAllValues);
boredBtn.addEventListener('click', generateBoredActivity);

// Call the function that show the dog image when refreshing the page
showDogImage();
// Call the function that give the Ip address
getIpClient();

// Generate values function
function generateAllValues() {
    // Declare the value of the text input
    const nameField = document.getElementById('name').value;
    // Declare gender's url
    var urlGender = 'https://api.genderize.io?name=' + nameField;
    // Declare age's url
    var urlAge = 'https://api.agify.io/?name=' + nameField
    // Declare nationality's url
    var urlNationality = 'https://api.nationalize.io/?name=' + nameField

    if (nameField == 0) {
        console.log('error');
        // Turn red if there no name in the text field
        document.getElementById('name').style.borderColor = 'red';
    }
    else {
        // Return to normal with a name in the text field
        document.getElementById('name').style.borderColor = '#CDCACA';
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
        // Fetch nationality
        fetch(urlNationality)
		.then(res => res.json())
		.then(data => {
			newNationality.innerHTML = `<p>${data.country[0].country_id}, ${data.country[1].country_id}</p> `
    });
    }
}

function generateBoredActivity() {
    fetch('https://www.boredapi.com/api/activity')
        .then(res => res.json())
        .then(data => {
            newBored.innerHTML = `<p>${data.activity}</p> `
        });
}

// Random dog image when reloading the website
function showDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dogPicture.innerHTML = `<img src=${data.message} alt="dog"/>`
            dogPicture.style.width='100%'
        });
}
// Display the current Ip using axios
async function getIpClient() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    ipAddress.innerHTML = "Current IP Address is " + response.data.ip;
  } catch (error) {
    console.error(error);
  }
}