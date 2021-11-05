//Create Item

localStorage.setItem('UserName', 'Turnet');
localStorage.setItem('FirstName', 'Pablo');

//Get Item

console.log(localStorage.getItem('UserName'));
console.log(localStorage.getItem('FirstName'));

//Remove or Clear Items

localStorage.removeItem('UserName');
localStorage.clear();


//Notación JSON
const data = {
    Name: 'Steve',
    Age: 21
};
const userName = JSON.stringify(data);
localStorage.setItem('data', userName);
console.log(userName);
const getData = localStorage.getItem('data');
const userNameJSON = JSON.parse(getData);
console.log(`user: ${userNameJSON.Name}, age: ${userNameJSON.Age}`);