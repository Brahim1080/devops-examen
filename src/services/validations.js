// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
function isValidGamerTag(gamerTag) {
    if (gamerTag === undefined) return false;

    if (gamerTag.length < 8) return false;

    return true;
}
exports.isEmpty = isEmpty;
exports.isValidGamerTag = isValidGamerTag;
