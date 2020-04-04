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
        this.professor.get_lastname() +
        "\nTime: " +
        this.print_time() +
        "\nRoom: " +
        this.room
    );
  }

  print_time() {
    var str = (this.time / 100).toFixed(2).toString();
    var split = str.split('.');
    if (this.time < 1200) {
      var suffix = "am"
    }
    else {
      if (split[0] != 12) {
        split[0] -= 12
      }
      var suffix = "pm"
    }
    return split[0] + ":" + split[1] + suffix;
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
