const Intern = require('../lib/Intern');

describe('Intern class', () => {
    const intTest = new Intern(1, 'Tim', 'tim@tim.com', 'school')
    it('Role is employee', () => {
        expect(intTest).toEqual(new Intern(1, 'Tim', 'tim@tim.com', 'school'))
    })
    it('Returns school property', () => {
        expect(intTest.getSchool(intTest.school)).toEqual('school')
    })
});