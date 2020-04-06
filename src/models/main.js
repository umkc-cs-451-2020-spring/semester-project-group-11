var Schedule = require("./Schedule");
var Professor = require("./Professor");

var s = new Schedule();

var p1 = new Professor(1, "Kendall", "Bingham");
var p2 = new Professor(2, "Brian", "Hare");
var p3 = new Professor(3, "Cindy", "Bingham");

s.add_course("CS451R", p1, 1230, "EDU 117");
s.add_course("CS441", p2, 0845, "EDU 117");
s.add_course("CS101", p1, 1515, "Royall 202");

s.add_marriage(p1, p3);

s.add_course("PHYS250", p3, 1230, "Royall 221");

s.print_schedule();
s.print_schedule_violations();
