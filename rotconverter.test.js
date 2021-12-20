const rot13 = require("./rotconverter.js");

test("does nothing when input is empty", () => {
    expect(rot13.transform("")).toBe("");
});

test("transforms lower-case letters", () => {
    expect(rot13.transform("a")).toBe("n");
    expect(rot13.transform("n")).toBe("a");
});

test("doesn't transformm symbols", () => {
    expect(rot13.transform("`")).toBe("`");
});
