import Course from "./Course";
import MarriageViolation from "./MarriageViolation";
import TimeProfessorViolation from "./TimeProfessorViolation";
import TimeRoomViolation from "./TimeRoomViolation";
import TenureViolation from "./TenureViolation";

export default class Schedule {
  constructor() {
    this.courses = [];
    this.violations = [];
    this.name = ''
  }

  add_course(id, professor, time, length, room, days) {
    let course = new Course(id, professor, time, length, room, days);
    this.courses.push(course);
  }

  processCourseViolations(course) {
    let professor = course.professor
    let courses = this.courses.filter(other => other.courseid !== course.courseid) // courses to check against

    courses.forEach((item) => {
      this.check_violations(course, item);
    })

    // Marriage hour apart constraint
    if (professor.spouse !== null) {
      let hourBehind = course.start - 100
      let hourAhead = course.end + 100
      let nearCourses = courses.filter(course => {
        let startedWithinHour = course.start > hourAhead && course.start < hourBehind
        let endedWithinHour = course.end > hourBehind && course.end < hourAhead
        return startedWithinHour || endedWithinHour
      })

      nearCourses.forEach(near => {
        // Spouse works near
        // @todo violation duplication
        if (near.professor.id === professor.spouse.id)
          this.violations.push(new MarriageViolation(near.professor, professor, near, course, 3))
      })
    }

    // Check if professor is tenured, then determine if they are teaching too many classes
    if (professor.get_tenured()) {
      // Check if the time is between the 10 and 3, if it is then there's an issue
      if (course.start < 1000 || course.end > 1500)
        this.violations.push(new TenureViolation(professor, 3));

      // Update days
      let profCourses = this.courses.filter(course => course.professor.id === professor.id);
      let profDays = profCourses.reduce((days, course) => {
        course.days.forEach(day => days.add(day))
        return days
      }, new Set())
      professor.update_days(profDays)

      if (professor.get_num_days() > 2) {
        this.violations.push(new TenureViolation(professor, 4));
      }
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
    } else {
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
    if (
      (this.time_conflict(new_course, check_course) ||
        this.time_conflict(check_course, new_course)) &&
      new_course.get_professor() == check_course.get_professor()
    ) {
      this.violations.push(
        new TimeProfessorViolation(
          new_course.get_professor(),
          new_course,
          check_course,
          5
        )
      );
    }
  }

  check_timeRoom(new_course, check_course) {
    if (
      (this.time_conflict(new_course, check_course) ||
        this.time_conflict(check_course, new_course)) &&
      new_course.get_room() == check_course.get_room()
    ) {
      this.violations.push(
        new TimeRoomViolation(
          new_course.get_room(),
          new_course,
          check_course,
          5
        )
      );
    }
  }

  check_marriage(new_course, check_course) {
    if (
      this.time_conflict(new_course, check_course) ||
      this.time_conflict(check_course, new_course)
    ) {
      this.violations.push(
        new MarriageViolation(
          new_course.get_professor(),
          check_course.get_professor(),
          new_course,
          check_course,
          3
        )
      );
    }
  }

  time_conflict(course1, course2) {
    if (
      course1.get_start() == course2.get_start() ||
      course1.get_end() == course2.get_end() ||
      (course1.get_start() > course2.get_start() &&
        course1.get_start() < course2.get_end()) ||
      (course1.get_end() > course2.get_start() &&
        course1.get_end() < course2.get_end())
    ) {
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
      });
    });
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

  get_violations() {
    this.courses.forEach(course => this.processCourseViolations(course))
    let str_violations = [];
    this.violations.forEach(function(item) {
      str_violations.push(item.print_violation());
    });
    return str_violations;
  }
}
