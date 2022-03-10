const Employee = require('./Employee');

class Intern extends Employee{
    constructor(id, name, email, school){
        super(id, name, email);
        this.school = school;
    }

    getSchool(school){
        return school;
    }

    getRole(Intern){
        return Intern;
    }
}

module.exports = Intern;