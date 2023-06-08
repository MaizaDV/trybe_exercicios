interface Person {
  name: string;
  info: string;
}

class Student implements Person {
  constructor(public name: string, public school: string) {}

  get info() {
    return `${this.name} estuda no colégio ${this.school}.`
  }
}

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string
    ) {}

    get info() {
    return `${this.name} leciona ${this.subject} no colégio ${this.school}.`
  }
}

function printInfo(person: Person): void {
  console.log(person.info);
}

const student = new Student('João', 'Batista');
const professor = new Professor('Maria', 'Marista', 'Sociologia');

printInfo(student);
printInfo(professor);
