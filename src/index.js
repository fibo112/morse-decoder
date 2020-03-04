const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
var str_full = '';
var str_p = '';
var exp;
var str = '';
    for (var i=0; i<expr.length; i+=10) {
        exp = expr.slice(i, i+10)

    if (exp === '**********') {
        str_full+=' ';
    } else {

    for (var j=0; j<exp.length; j+=2) {
        if (exp[j] + str + exp[j+1] === '10') {
            str_p+='.';
        }
        else if (exp[j] + str + exp[j+1] === '11') {
            str_p+='-';
        }
    }
str_full+=MORSE_TABLE[str_p];
str_p = '';
    }
}

return str_full;

}
module.exports = {
    decode
}