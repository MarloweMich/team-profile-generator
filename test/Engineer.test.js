const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    const engTest = new Engineer(1, 'Tim', 'tim@tim.com', 'github.tim')
    it('Role is employee', () => {
        expect(engTest).toEqual(new Engineer(1, 'Tim', 'tim@tim.com', 'github.tim'))
    })
    it('Returns githubparameter', () => {
        expect(engTest.getGithub(engTest.github)).toEqual('github.tim')
    })
});