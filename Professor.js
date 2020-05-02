class Professor {
    constructor(id, firstname, lastname) {
        this.id = id;
        this.first = firstname;
        this.last = lastname
        this.spouse = null;
        this.married = false;
        this.tenured = false;
    }

    add_marriage(professor) {
        this.spouse = professor;
        this.married = true;
    }

    remove_marriage() {
        this.spouse = null;
        this.married = false;
    }
    
    add_tenure() {
        this.tenured = true;
    }
    
    remove_tenure() {
        this.tenured = false;
    }
  
    // Getters & Setters
    
    get_tenured() {
        return this.tenured;
    }
    
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

    is_married() {
        return this.married;
    }
   
    set_name(name) {
      this.name = name;
    }
  }
  
  module.exports = Professor;
  
