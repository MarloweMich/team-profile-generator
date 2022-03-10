const Manager = require('../lib/Manager');

describe('Manaeger class', () => {
    const manTest = new Manager(1, 'Tim', 'tim@tim.com', 40)
    it('Role is employee', () => {
        expect(manTest).toEqual(new Manager(1, 'Tim', 'tim@tim.com', 40))
    })
    it('Returns githubparameter', () => {
        expect(manTest.getOfficeNumber(manTest.officeNumber)).toEqual(40)
    })
});