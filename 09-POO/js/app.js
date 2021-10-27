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
}

const person1 = new Job('Pablo', 24, ['Arquitecto', 'Doctor'], 10000, 'Gerente');
const person2 = new Job('Leidy', 19, ['Ingeniero', 'Instructor'], 3000, 'Desarrollador de Software');
const person3 = new Job('Daniel', 21, ['Talento Humano'], 2000, 'Recursos Humanos');

console.log(person1.getBiography());
console.log(person2.getBiography());
console.log(person3.getBiography());