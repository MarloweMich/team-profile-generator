const Employee = require('../lib/Employee');

describe('Employee class', () => {
    const empTest = new Employee(1, 'Tim', 'tim@tim.com')
    it('Role is employee', () => {
        expect(empTest.getRole()).toEqual('Employee')
    });
    it('Returns name of employee', () => {
        expect(empTest.getName()).toEqual('Tim')
    })
    it('Returns id of employee', () => {
        expect(empTest.getId()).toEqual(1)
    })
    it('Returns email of employee', () => {
        expect(empTest.getEmail()).toEqual('tim@tim.com')
    })
});