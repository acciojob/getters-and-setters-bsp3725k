//complete this code
class Person {
  constructor(name, age) {
    this._name = name; // Private property to store the name
    this._age = age; // Private property to store the age
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  // Method to log that the student is studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method to log that the teacher is teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
