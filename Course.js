class Course {
  constructor(id, professor, time, room) {
    this.courseid = id;
    this.professor = professor;
    this.time = time;
    this.room = room;
    this.violations = [];
  }

  add_violation(type, weight) {
    this.violations.push(new Violation(type, weight));
  }

  print_course() {
    console.log(
      "Course: " +
        this.courseid +
        "\nProfessor: " +
        this.professor +
        "\nTime: " +
        this.time +
        "\nRoom: " +
        this.room
    );
  }

  // Getters & Setters
  get_courseid() {
    return this.courseid;
  }

  get_professor() {
    return this.professor;
  }

  get_time() {
    return this.time;
  }

  get_room() {
    return this.room;
  }

  set_courseid(id) {
    this.courseid = id;
  }

  set_professor(professor) {
    this.professor = professor;
  }

  set_time(time) {
    this.time = time;
  }

  set_room(room) {
    this.room = room;
  }
}

module.exports = Course;
