const assert = require("assert");
const rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("Announce have the right return value", () => {
      const expected = "cock-a-doodle-doo!";
      const result = rooster.announceDawn();

      assert.strictEqual(result, expected);
    });
  });
  describe(".timeAtDawn", () => {
    it("timeAtDawn Returns string",() => {
      const expected = "1";
      const result = rooster.timeAtDawn(1);

      assert.strictEqual(result, expected);
    });
    it("throws an error if passed a number less than 0",() => {
      const fn = () => {
        return rooster.timeAtDawn(-1);
      }

      assert.throws(fn, RangeError);
    });
    it("throws an error if passed a number greater than 23",() => {
      const fn = () => {
        return rooster.timeAtDawn(24);
      }

      assert.throws(fn, RangeError);
    });
  });
});
