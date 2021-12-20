
exports.transform = function(input) {
    if (input === "") return "";

    let charCode = input.charCodeAt(0);

    if (charCode >= 110) {
        charCode -= 13;
    } else if (charCode >= 97) {
        charCode += 13;
    }

    return String.fromCharCode(charCode);
}
