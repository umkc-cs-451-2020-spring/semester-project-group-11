var Schedule = require("./Schedule");
var Professor = require("./Professor");

var s = new Schedule();

var p1 = new Professor(1, "Kendall", "Bingham");
var p2 = new Professor(2, "Brian", "Hare");
var p3 = new Professor(3, "Cindy", "Bingham");

s.add_course("CS451R", p1, 800, 50, "EDU 117");
s.add_course("CS441", p2, 1245, 115, "EDU 117");
s.add_course("CS101", p1, 1300, 115, "Royall 202");

s.add_marriage(p1, p3);

s.add_course("PHYS250", p3, 1400, 50, "Royall 221");

s.print_schedule();
s.print_schedule_violations();
