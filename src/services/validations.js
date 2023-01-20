// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
function haveSpecialChar(string) {
    var specialChars = "!@#$%^&*()+=-[]\\';,./{}|\":<>?";
    for (var i = 0; i < specialChars.length; i++) {
        if (string.indexOf(specialChars[i]) != -1) {
            return true;
        }
    }
    return false;
}
function containsNumber(string) {
    return /\d/.test(string);
}
function isValidGamerTag(gamerTag) {
    if (gamerTag === undefined) return false;

    if (gamerTag.length < 8) return false;

    if (!haveSpecialChar(gamerTag)) return false;
    if (!containsNumber(gamerTag)) return false;
    return true;
}
exports.isEmpty = isEmpty;
exports.isValidGamerTag = isValidGamerTag;
