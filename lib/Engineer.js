const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(id, name, email, github){
        super(id, name, email);
        this.github = github;
    }
    getGithub(github){
        return github;
    }

    getRole(Engineer){
        return Engineer;
    }   
}

module.exports = Engineer;