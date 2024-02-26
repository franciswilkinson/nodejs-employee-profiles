const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getGithub(github) {
        return this.github;
    };

    getRole(role){
        return "Engineer";
    };
}

module.exports = Engineer;