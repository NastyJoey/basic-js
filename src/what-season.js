module.exports = function getSeason(date) {
    try {
        if (date !== undefined) {
            let err = date.getTimezoneOffset();
            let curMonth = date.getMonth();
            return curMonth <= 1 || curMonth === 11 ? 'winter' : curMonth <= 4 ? 'spring' : curMonth <= 7 ? 'summer' : 'autumn'
        } else {
            return 'Unable to determine the time of year!'
        }
    }
    catch (err) {
        throw Error();
    }
};
