class TimeProfessorViolation {
  constructor(time, professor, course1, course2, weight) {
    this.time = time;
    this.professor = professor;
    this.course1 = course1;
    this.course2 = course2;
    this.weight = weight;
  }

  print_violation() {
    console.log(
      "Violation Type: Time-Professor" +
        "\nCourse 1: " +
        this.course1.get_courseid() +
        "\nCourse 2: " +
        this.course2.get_courseid() +
        "\nTime: " +
        this.time +
        "\nProfessor: " +
        this.professor +
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

module.exports = TimeProfessorViolation;
