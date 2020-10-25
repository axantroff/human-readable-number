module.exports = function toReadable(number) {
    const tableNumbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        0: ''
    };

    const hundreds = Math.floor(number / 100),
        decades = Math.floor((number - hundreds * 100) / 10),
        digits = number % 10;

    if (number == 0) return 'zero';

    if (number <= 20) {
        return tableNumbers[number];
    }

    if (number < 100) {
        return `${tableNumbers[decades * 10]} ${tableNumbers[digits]}`.trim().replace('  ', ' ');
    }

    if ((decades * 10) < 20) {
        return `${tableNumbers[hundreds]} hundred ${tableNumbers[(decades * 10) + digits]}`.trim().replace('  ', ' ');
    }

    return `${tableNumbers[hundreds]} hundred ${tableNumbers[decades * 10]} ${tableNumbers[digits]}`.trim().replace('  ', ' ');

};