const Frame = require("./frame.js");

test("moves property initialized correctly", () => {
    let frame = new Frame("--");
    expect(frame.moves).toBe("--");
});

test("does nothing when input is empty", () => {
    let frame = new Frame("");
    expect(frame.calculateScore()).toBe(0);
});
