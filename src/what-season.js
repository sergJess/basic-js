const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date == undefined) { return 'Unable to determine the time of year!'; }
    if (date instanceof Date && !date.hasOwnProperty('toString')) {
        let dateMonth = date.getMonth();
        const winter = 'winter';
        const autumn = 'autumn';
        const spring = 'spring';
        const summer = 'summer';

        if (dateMonth < 2 || dateMonth == 11) return winter;
        if (dateMonth >= 2 && dateMonth < 5) return spring;
        if (dateMonth >= 5 && dateMonth < 8) return summer;
        if (dateMonth >= 8 && dateMonth < 11) return autumn;
    }
    throw new Error('Error');
};