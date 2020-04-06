class MarriageViolation {
    constructor(professor1, professor2, course1, course2, weight) {
      this.professor1 = professor1;
      this.professor2 = professor2;
      this.course1 = course1;
      this.course2 = course2;
      this.weight = weight;
    }
  
    print_violation() {
      console.log(
        "Violation Type: Marriage" +
          "\nCourse 1: " +
          this.course1.get_courseid() +
          "\nCourse 2: " +
          this.course2.get_courseid() +
          "\nProfessor 1: " +
          this.professor1.get_fullname() +
          "\nProfessor 2: " +
          this.professor2.get_fullname() +
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
  
  module.exports = MarriageViolation;
  