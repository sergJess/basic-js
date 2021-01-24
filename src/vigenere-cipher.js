const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(param) {
        this.param = param;
        this.alphabet = {
            'A': 1,
            'B': 2,
            'C': 3,
            'D': 4,
            'E': 5,
            'F': 6,
            'G': 7,
            'H': 8,
            'I': 9,
            'J': 10,
            'K': 11,
            'L': 12,
            'M': 13,
            'N': 14,
            'O': 15,
            'P': 16,
            'Q': 17,
            'R': 18,
            'S': 19,
            'T': 20,
            'U': 21,
            'V': 22,
            'W': 23,
            'X': 24,
            'Y': 25,
            'Z': 26
        };
        this.templateCipher = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'BCDEFGHIJKLMNOPQRSTUVWXYZA', 'CDEFGHIJKLMNOPQRSTUVWXYZAB', 'DEFGHIJKLMNOPQRSTUVWXYZABC', 'EFGHIJKLMNOPQRSTUVWXYZABCD', 'FGHIJKLMNOPQRSTUVWXYZABCDE', 'GHIJKLMNOPQRSTUVWXYZABCDEF', 'HIJKLMNOPQRSTUVWXYZABCDEFG', 'IJKLMNOPQRSTUVWXYZABCDEFGH',
            'JKLMNOPQRSTUVWXYZABCDEFGHI', 'KLMNOPQRSTUVWXYZABCDEFGHIJ',
            'LMNOPQRSTUVWXYZABCDEFGHIJK', 'MNOPQRSTUVWXYZABCDEFGHIJKL',
            'NOPQRSTUVWXYZABCDEFGHIJKLM', 'OPQRSTUVWXYZABCDEFGHIJKLMN',
            'PQRSTUVWXYZABCDEFGHIJKLMNO', 'QRSTUVWXYZABCDEFGHIJKLMNOP',
            'RSTUVWXYZABCDEFGHIJKLMNOPQ', 'STUVWXYZABCDEFGHIJKLMNOPQR',
            'TUVWXYZABCDEFGHIJKLMNOPQRS', 'UVWXYZABCDEFGHIJKLMNOPQRST',
            'VWXYZABCDEFGHIJKLMNOPQRSTU', 'WXYZABCDEFGHIJKLMNOPQRSTUV',
            'XYZABCDEFGHIJKLMNOPQRSTUVW', 'YZABCDEFGHIJKLMNOPQRSTUVWX',
            'ZABCDEFGHIJKLMNOPQRSTUVWXY'
        ];
    }
    encrypt(str, key) {
        if (str === undefined || key === undefined) throw new Error('Arguments is missed');
        if (typeof str === 'string' && typeof key === 'string') {
            const upperString = str.toUpperCase();
            const length = upperString.length;
            let substring = this.getSubstring(str, key);
            let result = '';
            for (let i = 0; i < length; i++) {
                if (this.alphabet[substring[i]]) {
                    result += this.templateCipher[this.alphabet[substring[i]] - 1][this.alphabet[upperString[i]] - 1];
                } else {
                    result += upperString[i];
                }
            }

            return (this.param === false) ? result.split('').reverse().join('') : result;
        }
    }
    decrypt(str, key) {
        if (str === undefined || key === undefined) throw new Error('Arguments is missed');
        if (typeof str === 'string' && typeof key === 'string') {
            const upperString = str.toUpperCase();
            const length = upperString.length;
            let substring = this.getSubstring(str, key);
            let result = '';
            for (let i = 0; i < length; i++) {
                if (this.alphabet[substring[i]]) {
                    let index = this.templateCipher[this.alphabet[substring[i]] - 1].indexOf(upperString[i]);
                    result += this.templateCipher[0][index];
                } else {
                    result += upperString[i];
                }

            }

            return (this.param === false) ? result.split('').reverse().join('') : result;
        }
    }

    getSubstring(str, key) {
        const upperString = str.toUpperCase();
        let substring = '';
        const length = upperString.length;
        for (let i = 0, j = 0, lengthKey = key.length; i < length; i++) {
            if (j == lengthKey) { j = 0; }
            if (this.alphabet[upperString[i]]) {
                substring += key[j].toUpperCase();
                j++;
            } else {
                substring += upperString[i];
            }
        }
        return substring;
    }

}

module.exports = VigenereCipheringMachine;