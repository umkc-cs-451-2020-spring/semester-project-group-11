export default class TimeProfessorViolation {
  constructor(professor, course1, course2, weight) {
    this.professor = professor;
    this.course1 = course1;
    this.course2 = course2;
    this.weight = weight;
  }

  print_violation() {
    return (
      "Violation Type: Time-Professor" +
      "\nCourse 1: " +
      this.course1.get_courseid() +
      " (" +
      this.course1.print_time(this.course1.get_start()) +
      " - " +
      this.course1.print_time(this.course1.get_end()) +
      ")" +
      "\nCourse 2: " +
      this.course2.get_courseid() +
      " (" +
      this.course2.print_time(this.course2.get_start()) +
      " - " +
      this.course2.print_time(this.course2.get_end()) +
      ")" +
      "\nProfessor: " +
      this.professor.get_fullname() +
      "\nWeight: " +
      this.weight
    );
  }

  //   Getters & Setters
  get_weight() {
    return this.weight;
  }

  set_weight(weight) {
    this.weight = weight;
  }
}
