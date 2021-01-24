const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options instanceof Object) {
        const strString = str + '';
        let substring = '';
        let result = '';
        if (options.repeatTimes == undefined) options.repeatTimes = 1;
        if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
        if (!options.separator) options.separator = '+';
        if (!options.additionSeparator) options.additionSeparator = '|';
        if (options.addition === false || options.addition === null) options.addition = new String(options.addition);
        if (options.additionRepeatTimes && options.additionSeparator && options.addition) {
            for (let i = 0, length = options.additionRepeatTimes; i < length; i++) {
                (i == length - 1) ? substring += ('' + options.addition): substring += ('' + options.addition) + options.additionSeparator;
            }
        }
        for (let i = 0, length = options.repeatTimes; i < length; i++) {
            (i == length - 1) ? result += strString + substring: result += strString + substring + options.separator;
        }

        return result;

    }
    return false;
};