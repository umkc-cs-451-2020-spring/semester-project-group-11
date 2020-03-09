var Schedule = require("./Schedule");

var s = new Schedule();
s.add_course("CS451R", "Bingham", "1:00pm", "EDU 117");
s.add_course("CS441", "Hare", "1:00pm", "EDU 117");
s.add_course("CS101", "Bingham", "1:00pm", "Royall 202");
s.print_schedule();
s.print_schedule_violations();
