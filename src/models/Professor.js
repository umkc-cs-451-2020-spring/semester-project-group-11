export default class Professor {
    constructor(id, firstname, lastname, tenured) {
        this.id = id;
        this.first = firstname;
        this.last = lastname
        this.spouse = null;
        this.married = false;
        this.tenured = tenured;
        this.monday = false;
        this.tuesday = false;
        this.wednesday = false;
        this.thursday = false;
        this.friday = false;
        this.saturday = false;
        this.sunday = false;
    }

    update_days(days) {
        days.forEach(function(item) {
            if (item == "M") {
                this.monday = true;
            }
            else if (item == "T") {
                this.tuesday = true;
            }
            else if (item == "W") {
                this.wednesday = true;
            }
            else if (item == "R") {
                this.thursday = true;
            }
            else if (item == "F") {
                this.friday = true;
            }
            else if (item == "SA") {
                this.saturday = true;
            }
            else if (item == "SU") {
                this.sunday = true;
            }
        })
    }

    get_num_days() {
        let num_days = 0;
        if (this.monday) {
            num_days++;
        }
        if (this.tuesday) {
            num_days++;
        }
        if (this.wednesday) {
            num_days++;
        }
        if (this.thursday) {
            num_days++;
        }
        if (this.friday) {
            num_days++;
        }
        if (this.saturday) {
            num_days++;
        }
        if (this.sunday) {
            num_days++;
        }
        return num_days;
    }

    add_marriage(professor) {
        this.spouse = professor;
        this.married = true;
    }

    remove_marriage() {
        this.spouse = null;
        this.married = false;
    }
  
    // Getters & Setters
    get_id() {
        return this.id;
    }
    get_fullname() {
      return (this.first + " " + this.last);
    }

    get_lastname() {
        return this.last
    }

    get_spouse() {
        return this.spouse;
    }

    get_tenured() {
        return this.tenured;
    }

    is_married() {
        return this.married;
    }
   
    set_name(name) {
      this.name = name;
    }

    set_tenured(tenured) {
        this.tenured = tenured;
    }
  }
