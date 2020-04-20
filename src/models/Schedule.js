import Professor from "./Professor";
import Course from "./Course";
import MarriageViolation from "./MarriageViolation";
import TimeProfessorViolation from "./TimeProfessorViolation";
import TimeRoomViolation from "./TimeRoomViolation";

export default class Schedule {
  constructor() {
    this.courses = [];
    this.violations = [];
  }

  add_course(id, professor, time, length, room, days) {
    let course = new Course(id, professor, time, length, room, days);
    let s = this;
    if (professor.is_married()) {
      // check if their spouse has a class scheduled within an hour of this class
      let check_spouse = professor.get_spouse();
      this.courses.forEach(function(item) {
        if (item.get_professor() == check_spouse) {
          s.check_marriage(course, item);
        }
      })
    }
    this.courses.forEach(function(item) {
      s.check_violations(course, item);
    });
    this.courses.push(course);
    // Check if professor is tenured, then determine if they are teaching too many classes
    if (professor.get_tenured()) {

    }
  }
  
  add_marriage(professor1, professor2) {
    professor1.add_marriage(professor2);
    professor2.add_marriage(professor1);
  }

  remove_marriage(professor) {
    if (professor.is_married()) {
      let spouse = professor.get_spouse();
      professor.remove_marriage();
      spouse.remove_marriage();
    }
    else {
      console.log("Professor " + professor.get_lastname() + " is not married.");
    }
  }

  check_violations(new_course, check_course) {
    let s = this;
    if (s.day_conflict(new_course, check_course)) {
      s.check_timeProfessor(new_course, check_course);
      s.check_timeRoom(new_course, check_course);
    }
  }

  check_timeProfessor(new_course, check_course) {
    if ((this.time_conflict(new_course, check_course) || 
      (this.time_conflict(check_course, new_course))) &&
      new_course.get_professor() == check_course.get_professor()
    ) {
      this.violations.push(
        new TimeProfessorViolation(
          new_course.get_professor(),
          new_course,
          check_course,
          3
        )
      );
    }
  }

  check_timeRoom(new_course, check_course) {
    if ((this.time_conflict(new_course, check_course) || 
      (this.time_conflict(check_course, new_course))) &&
      new_course.get_room() == check_course.get_room()
    ) {
      this.violations.push(
        new TimeRoomViolation(
          new_course.get_room(),
          new_course,
          check_course,
          3
        )
      );
    }
  }

  check_marriage(new_course, check_course) {
    if (this.time_conflict(new_course, check_course) || this.time_conflict(check_course, new_course)) {
      this.violations.push(
        new MarriageViolation(
          new_course.get_professor(),
          check_course.get_professor(),
          new_course,
          check_course,
          5 
        )
      );
    }
  }

  time_conflict(course1, course2) {
    if ((course1.get_start() == course2.get_start()) ||
      (course1.get_end() == course2.get_end()) ||
      ((course1.get_start() > course2.get_start()) && 
      (course1.get_start() < course2.get_end())) ||
      ((course1.get_end() > course2.get_start()) &&
      (course1.get_end() < course2.get_end()))) {
        return true;
    }
    return false;
  }

  day_conflict(course1, course2) {
    let conflict = false;
    course1.get_days().forEach(function(item1) {
      course2.get_days().forEach(function(item2) {
        if (item1 == item2) {
          conflict = true;
        }
      })
    })
    return conflict;
  }

  print_schedule() {
    this.courses.forEach(function(item) {
      console.log(item.print_course());
    });
  }

  print_schedule_violations() {
    if (this.violations.length > 0) {
      console.log("VIOLATIONS");
      console.log("==========");
      this.violations.forEach(function(item) {
        console.log(item.print_violation());
      });
    }
  }
}
