// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl4rilzThoLJVk7FZl0MxjMMJsXoddcSk",
    authDomain: "neupe-a9a18.firebaseapp.com",
    databaseURL: "https://neupe-a9a18-default-rtdb.firebaseio.com",
    projectId: "neupe-a9a18",
    storageBucket: "neupe-a9a18.appspot.com",
    messagingSenderId: "144694315183",
    appId: "1:144694315183:web:3785d4bae1f7675d6e6c5a",
    measurementId: "G-57MF8X77FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

// Get a reference to the 'users' node
const usersRef = ref(database, 'users');

// Function to add user data to the database
function addScoreToDatabase() {
  // Get user input from the form
  const nameInput = document.getElementById('nameInput');
  const points = document.getElementById('pointsForDB');
  const name = nameInput.value;
  const score = parseInt(points.innerHTML);
  nameInput.setAttribute('disabled', true);

  // Validate input (optional)
  // if (!name || isNaN(score)) {
  //   alert('Please enter a valid name and age.');
  //   return;
  // }

  // Write data to the database
  push(usersRef, {
    name: name,
    score: score
  })
  .then(() => {
    console.log('Data written successfully!');
    nameInput.setAttribute('placeholder', 'success!')
    // Clear input fields after successful submission
    nameInput.value = '';
  })
  .catch(error => {
    console.error('Error writing data:', error);
    nameInput.setAttribute('placeholder', 'error writing data')
  });
}

// Add an event listener to the form submission
const form = document.getElementById('nameInput');
form.addEventListener('keydown', (event) => {
  if(event.keyCode == 13 ){
    let x = document.getElementById("nameInput");
    if(x == ""){
      return;
    }
    let userName = x.value;
    userName = userName.trim();
    addScoreToDatabase();
}
  
});
