const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    const engTest = new Engineer(1, 'Tim', 'tim@tim.com', 'github.tim')
    it('Role is employee', () => {
        expect(engTest.getRole()).toEqual('Engineer')
    })
    it('Returns githubparameter', () => {
        expect(engTest.getGithub()).toEqual('github.tim')
    })
});