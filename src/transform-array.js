const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        const discardNext = '--discard-next';
        const discardPrev = '--discard-prev';
        const doubleNext = '--double-next';
        const doublePrev = '--double-prev';
        const length = arr.length;
        let counter = 0;
        let result = [];
        let i = 0;
        if (arr[0] == discardPrev || arr[0] == doublePrev) {
            i = 1;
        }
        if (arr[length - 1] == discardNext || arr[length - 1] == doubleNext) {
            counter = 1;
        }
        for (i; i < length - counter; i++) {

            if (arr[i] == doubleNext) {
                result.push(arr[i + 1]);
                continue;
            }
            if (arr[i] == discardPrev) {
                result.pop();
                continue;
            }
            if (arr[i] == discardNext) {
                let check = arr[i + 2];
                if (check == doublePrev || check == discardPrev) {
                    i += 2;
                    continue;
                } else {
                    i++;
                    continue;
                }

            }
            if (arr[i] == doublePrev) {
                result.push(arr[i - 1]);
                continue;
            }
            result.push(arr[i]);
        }
        return result;
    }
    throw new Error();
};