var assert = require('assert')

const getQASkillsName = () => {
  return "QASkills";
}

describe('Test which checks if given strings are equal', function () {

    it('should check is input value equal to QASkills name value', function () {
      var inputValue = "Write first automation test with support from";
      var qaskillsName = getQASkillsName();
      
      assert.strictEqual(inputValue, qaskillsName);
    });

});