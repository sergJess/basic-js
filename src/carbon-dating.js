const CustomError = require("../extensions/custom-error");

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string' && +sampleActivity > 0 && +sampleActivity <= 15) {
        const halfLifePeriod = 5730;
        const modernActivity = 15;
        let sampleActivityNumber = +sampleActivity;
        const ln = Math.LN2;
        const k = Math.ceil(ln / halfLifePeriod);
        return Math.ceil(Math.log(modernActivity / sampleActivityNumber) / k);
    }
    return false;
};