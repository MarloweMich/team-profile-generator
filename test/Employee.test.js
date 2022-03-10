const Employee = require('../lib/Employee');

describe('Employee class', () => {
    const empTest = new Employee(1, 'Tim', 'tim@tim.com')
    it('Role is employee', () => {
        expect(empTest).toEqual(new Employee(1, 'Tim', 'tim@tim.com'))
    });
    it('Returns name of employee', () => {
        expect(empTest.getName(empTest.name)).toEqual('Tim')
    })
    it('Returns id of employee', () => {
        expect(empTest.getId(empTest.id)).toEqual(1)
    })
    it('Returns email of employee', () => {
        expect(empTest.getEmail(empTest.email)).toEqual('tim@tim.com')
    })
});