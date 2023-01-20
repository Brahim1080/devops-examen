const { isEmpty } = require("../validations");
const { isValidGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});
// TODO: Create tests suite for validation function

describe("GamerTag tests suites - isValidGamerTag", () => {
    test("should return false as the label is undefined", () => {
        const result = isValidGamerTag();
        expect(result).toEqual(false);
    });

    test("should return false as the label contains less than 8 characters", () => {
        const result = isValidGamerTag("brahim");
        expect(result).toEqual(false);
    });

    test("should return false as the label does not contain a special character", () => {
        const result = isValidGamerTag("brahimmmmmm");
        expect(result).toEqual(false);
    });

    test("should return true as the label does contain a special character", () => {
        const result = isValidGamerTag("br@himmmmm1");
        expect(result).toEqual(true);
    });

    test("should return false as the label does not contain  a number", () => {
        const result = isValidGamerTag("br@himmmmm");
        expect(result).toEqual(false);
    });
});
