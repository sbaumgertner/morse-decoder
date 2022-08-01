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

function decodeMorseLetter(str){
    if (str === '10'){
        return '.';
    }
    if (str === '11'){
        return '-';
    }
    return '';
}

function decodeLetter(str){
    if (str === '**********'){
        return ' ';
    }
    let morse = '';
    for (let i = 0; i < 10; i+=2){
        morse += decodeMorseLetter(str.substring(i, i + 2));
    }
    return MORSE_TABLE[morse];
}

function decode(expr) {
    let str = '';
    for (let i = 0; i < expr.length; i+= 10){
        str += decodeLetter(expr.substring(i, i + 10));
    }
    return str;
}

module.exports = {
    decode
}