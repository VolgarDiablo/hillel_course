class Student {
  constructor(firstName, secondName, birthDate, grades = []) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthDate = new Date(birthDate);
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const today = new Date();
    const birthDateThisYear = new Date(
      today.getFullYear(),
      this.birthDate.getMonth(),
      this.birthDate.getDate()
    );
    let age = today.getFullYear() - this.birthDate.getFullYear();

    if (today < birthDateThisYear) {
      age--;
    }

    return age;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    this.markAttendance(true);
  }

  absent() {
    this.markAttendance(false);
  }

  markAttendance(value) {
    const emptyIndex = this.attendance.findIndex((item) => item === null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = value;
    } else {
      console.log(
        "Массив відуванності заповнений, не можна додати новий запис"
      );
    }
  }

  getAttendanceRate() {
    const attended = this.attendance.filter((item) => item === true).length;
    const totalMarked = this.attendance.filter((item) => item !== null).length;
    return totalMarked === 0 ? 0 : attended / totalMarked;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }

  getAttendance() {
    return this.attendance;
  }
}

const student1 = new Student("Anton", "Іванов", "2000-10-13", [95, 92, 88, 99]);
student1.present();
student1.present();
student1.absent();

const student2 = new Student("Maria", "Петренко", "2001-05-23", [85, 80, 90]);
student2.present();
student2.present();
student2.present();

const student3 = new Student("Olena", "Коваль", "1999-11-30", [70, 65, 60]);
student3.absent();
student3.absent();
student3.present();

console.log(student1.getAge()); // Виведе вік Антона
console.log(student2.getAverageGrade()); // Виведе середній бал Марії
console.log(student3.summary()); // Виведе "Редиска!" для Олени

console.log(student1.summary()); // Виведе "Добре, але можна краще" або "Молодець!" залежно від оцінок та відвідувань
console.log(student1.getAttendance()); // Виведе масив відвідувань Антона

for (let i = 0; i < 23; i++) student2.present(); //Массив відуванності заповнений, не можна додати новий запис
