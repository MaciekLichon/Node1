const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Daniel', 'Maciek', 'Filip'];
const femaleNames = ['Marta', 'Dorota', 'Agnieszka', 'Matylda'];
const lastNames = ['Nowak', 'Stach', 'Polak', 'Norek'];

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const peopleArray = [];

for (i = 0; i <= 20; i++) {

  const gender = randChoice(genders);
  let firstName = '';
  if (gender === 'M') {
    firstName = randChoice(maleNames);
  } else if (gender === 'F') {
    firstName = randChoice(femaleNames);
  };
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (78 - 18) + 18);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
  };

  peopleArray.push(person);

};

const people = JSON.stringify(peopleArray);

fs.writeFile('outputfile.txt', people, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
