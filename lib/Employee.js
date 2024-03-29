
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    
    getName(name)  {
      return this.name;
    };

    getId(id)  {
      return this.id;
    };

    getEmail(email)  {
      return this.email;
    };

    getRole(role)  {
      if (role==undefined){
        return "Employee";
      }
      else {
      return this.role;
      }
    };
}

module.exports = Employee;
