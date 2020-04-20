import Schedule from "./Schedule";
import Professor from "./Professor";
let s = new Schedule();

let p1 = new Professor(1, "Kendall", "Bingham", false);
let p2 = new Professor(2, "Brian", "Hare", true);
let p3 = new Professor(3, "Cindy", "Bingham", false);

s.add_course("CS451R", p1, 1400, 50, "EDU 117", ["M", "W", "F"]);
s.add_course("CS441", p2, 1245, 145, "EDU 117", ["M", "W", "F"]);
s.add_course("CS101", p1, 1300, 115, "Royall 202", ["M", "R"]);

s.add_marriage(p1, p3);

s.add_course("PHYS250", p3, 800, 50, "Royall 221", ["M", "T", "W", "R"]);

s.print_schedule();
s.print_schedule_violations();
