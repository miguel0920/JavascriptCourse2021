//Class Example

class Person {
    constructor(name, age, occupations = []) {
        this.name = name;
        this.age = age
        this.occupations = occupations;
    }

    getBiography() {
        let biography = `${this.name} tiene ${this.age} años, trabajo : `;
        this.occupations.forEach((job) => {
            biography += `${job}, `;
        });
        return biography;
    }
}

class Job extends Person {
    constructor(name, age, occupations = [], salary, job) {
        super(name, age, occupations);
        this.salary = salary;
        this.job = job;
    }

    getBiography() {
        return `${super.getBiography()}trabaja como ${this.job} con salario ${this.salary}`;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}

const person1 = new Job('Pablo', 24, ['Arquitecto', 'Doctor'], 1000, 'Gerente');
const person2 = new Job('Leidy', 19, ['Ingeniero', 'Instructor'], 3000, 'Desarrollador de Software');
const person3 = new Person('Daniel', 21, ['Talento Humano'], 2000, 'Recursos Humanos');

console.log(person1.getBiography());
console.log(person2.getBiography());
console.log(person3.getBiography());
person1.salary = 2500;
console.log(person1.salary);

//Getter and Setter

const date = {
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value;
    }
};
date.location = 'Washington';
console.log(date.location);