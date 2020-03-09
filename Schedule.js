var Course = require("./Course");
var TimeProfessorViolation = require("./TimeProfessorViolation");
var TimeRoomViolation = require("./TimeRoomViolation");

class Schedule {
  constructor() {
    this.courses = [];
    this.violations = [];
  }

  add_course(id, professor, time, room) {
    var course = new Course(id, professor, time, room);
    var s = this;
    this.courses.forEach(function(item) {
      s.check_violations(course, item);
    });
    this.courses.push(course);
  }

  check_violations(new_course, check_course) {
    var s = this;
    s.check_timeProfessor(new_course, check_course);
    s.check_timeRoom(new_course, check_course);
  }

  check_timeProfessor(new_course, check_course) {
    if (
      new_course.get_time() == check_course.get_time() &&
      new_course.get_professor() == check_course.get_professor()
    ) {
      this.violations.push(
        new TimeProfessorViolation(
          new_course.get_time(),
          new_course.get_professor(),
          new_course,
          check_course,
          3
        )
      );
    }
  }

  check_timeRoom(new_course, check_course) {
    if (
      new_course.get_time() == check_course.get_time() &&
      new_course.get_room() == check_course.get_room()
    ) {
      this.violations.push(
        new TimeRoomViolation(
          new_course.get_time(),
          new_course.get_room(),
          new_course,
          check_course,
          3
        )
      );
    }
  }

  print_schedule() {
    this.courses.forEach(function(item) {
      console.log(item.print_course());
    });
  }

  print_schedule_violations() {
    console.log("VIOLATIONS");
    console.log("==========");
    this.violations.forEach(function(item) {
      console.log(item.print_violation());
    });
  }
}

module.exports = Schedule;
