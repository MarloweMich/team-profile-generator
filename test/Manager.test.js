const Manager = require('../lib/Manager');

describe('Manaeger class', () => {
    const manTest = new Manager(1, 'Tim', 'tim@tim.com', 40)
    it('Role is employee', () => {
        expect(manTest.getRole()).toEqual('Manager')
    })
    it('Returns githubparameter', () => {
        expect(manTest.getOfficeNumber()).toEqual(40)
    })
});