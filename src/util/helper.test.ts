import { mergeClass, formatDate } from "./helper";

describe("mergeClass function", () => {
  it("merges single class names", () => {
    expect(mergeClass("class1", "class2")).toBe("class1 class2");
  });

  it("ignores undefined and null values", () => {
    expect(mergeClass("class1", undefined, "class2", null)).toBe(
      "class1 class2"
    );
  });

  it("merges array of class names", () => {
    expect(mergeClass(["class1", "class2"])).toBe("class1 class2");
  });

  it("merges mixed class names and arrays", () => {
    expect(mergeClass("class1", ["class2", "class3"], "class4")).toBe(
      "class1 class2 class3 class4"
    );
  });

  it("returns an empty string for no input", () => {
    expect(mergeClass()).toBe("");
  });
});

describe("formatDate function", () => {
  it("formats a valid date string correctly", () => {
    const dateStr = "2023-01-01";
    expect(formatDate(dateStr)).toBe("1 Jan 2023");
  });

  it("returns null for a null input", () => {
    expect(formatDate(null)).toBeNull();
  });

  it("returns null for an invalid date string", () => {
    const invalidDateStr = "invalid-date";
    expect(formatDate(invalidDateStr)).toBe("NaN undefined NaN");
  });

  it("formats a date string with leading zeros correctly", () => {
    const dateStr = "2023-02-05";
    expect(formatDate(dateStr)).toBe("5 Feb 2023");
  });
});
