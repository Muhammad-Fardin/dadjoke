const button = document.getElementsByClassName('.button');
const jokeP = document.querySelector('.joke');

// for loading a random dad joke as soon as page loads
document.addEventListener('DOMContentLoaded', getJoke);

// async function for getting a joke when button is clicked 
async function getJoke() {
     const jokeData = await fetch(` https://icanhazdadjoke.com/`, {
          headers: {
               'Accept': 'application/json'
          }
     }).then(data => data.json())
          .then(obj => jokeP.innerHTML = obj.joke)
}