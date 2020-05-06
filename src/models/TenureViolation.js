export default class TenureViolation {
  constructor(professor, weight) {
    this.professor = professor;
    this.weight = weight;
  }

  print_violation() {
    return (
      "Violation Type: Tenured-Professor" +
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
