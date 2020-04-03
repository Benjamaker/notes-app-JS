let fail = "<p style='color: red;'>Failed</p>";
let pass = "<p style='color: green;'>Passed</p>";

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      document.write(fail);
      throw new Error("Assertion failed:" + assertionToCheck + "is not truthy")
    } else {
      document.write(pass);
    }
  },
  isEqual: function(a, b) {
    if (a !== b) {
      document.write(fail);
      throw new Error(`${a} is not equal to ${b}!`);
    } else {
      document.write(pass);
    }
  },
  isInstanceOf: function(instance, object) {
    if (instance instanceof object) {
      document.write(pass);
    } else {
      document.write(fail);
      throw new Error(`${instance} is not an instance of ${object}!`);
    }
  }
};
