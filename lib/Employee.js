class Employee{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName(name){
        return name;
    }

    getId(id){
        return id;
    }

    getEmail(email){
        return email;
    }

    getRole(Employee){
        return Employee;
    }

}

module.exports = Employee;