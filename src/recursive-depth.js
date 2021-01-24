const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let depth = 1;
            let maxDepth = 1;
            for (let i = 0, length = arr.length; i < length; i++) {
                if (Array.isArray(arr[i])) {
                    depth += this.calculateDepth(arr[i]);
                }
                maxDepth = (depth > maxDepth) ? depth : maxDepth;
                depth = 1;
            }
            return maxDepth;
        }
        return false;

    }
};