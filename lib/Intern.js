const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getSchool(school) {
        return this.school;
    };
    
    getRole(role){
        return "Intern";
    };
}

module.exports = Intern;
