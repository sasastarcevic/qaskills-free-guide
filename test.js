var assert = require('assert')

const checkQASkills = (name) => {
  return name == "QASkills"
}

describe('Test method which checks if given string is QASkills', function () {

    it('should return TRUE because correct string is passed', function () {
     assert.ok(checkQASkills('Skills'))
    });

});