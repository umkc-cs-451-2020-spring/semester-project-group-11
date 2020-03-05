class TimeRoomViolation {
  constructor(time, room, course1, course2, weight) {
    this.time = time;
    this.room = room;
    this.course1 = course1;
    this.course2 = course2;
    this.weight = weight;
  }

  print_violation() {
    console.log(
      "Violation Type: Time-Room" +
        "\nCourse 1: " +
        this.course1.get_courseid() +
        "\nCourse 2: " +
        this.course2.get_courseid() +
        "\nTime: " +
        this.time +
        "\nRoom: " +
        this.room +
        "\nWeight: " +
        this.weight
    );
  }

  //   Getters & Setters
  get_type() {
    return this.type;
  }

  get_weight() {
    return this.weight;
  }

  set_type(type) {
    this.type = type;
  }

  set_weight(weight) {
    this.weight = weight;
  }
}

module.exports = TimeRoomViolation;
