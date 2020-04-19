class Course {
  constructor(id, professor, start, length, room) {
    this.courseid = id;
    this.professor = professor;
    this.start = start;
    this.length = length;
    this.end = start + length;
    this.room = room;
  }

  print_course() {
    console.log(
      "Course: " +
        this.courseid +
        "\nProfessor: " +
        this.professor.get_lastname() +
        "\nStart Time: " +
        this.print_time(this.start) +
        "\nEnd Time: " +
        this.print_time(this.end) +
        "\nRoom: " +
        this.room
    );
  }

  print_time(time) {
    var str = (time / 100).toFixed(2);
    var split = str.split('.');
    
    if (parseInt(split[1]) >= 60) {
      time += 40;
      return this.print_time(time);
    }

    if (time < 1200) {
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

  get_start() {
    return this.start;
  }

  get_end() {
    return this.end;
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
