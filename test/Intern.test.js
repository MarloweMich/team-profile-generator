const Intern = require('../lib/Intern');

describe('Intern class', () => {
    const intTest = new Intern(1, 'Tim', 'tim@tim.com', 'school')
    it('Role is employee', () => {
        expect(intTest.getRole()).toEqual('Intern')
    })
    it('Returns school property', () => {
        expect(intTest.getSchool()).toEqual('school')
    })
});