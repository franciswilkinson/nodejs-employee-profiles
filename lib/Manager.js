const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    };
    getRole(role){
        return "Manager";
    }
}

module.exports = Manager;