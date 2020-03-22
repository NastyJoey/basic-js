module.exports = function repeater(str, options) {

    let repeatTimes = options.repeatTimes,
        separator = options.separator || '+',
        addition = typeof options.addition === 'undefined' ? '' : String(options.addition),
        additionRepeatTimes = options.additionRepeatTimes,
        additionSeparator = options.additionSeparator || '|';


    return (str + addition + (additionSeparator + addition).repeat(additionRepeatTimes - 1)) + (separator + str + addition + (additionSeparator + addition).repeat(additionRepeatTimes - 1)).repeat(repeatTimes - 1)
};
