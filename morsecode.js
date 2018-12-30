decodeMorse = function(morseCode){
    
let decoded='';
morseCode=morseCode.trim();

morseCode.split('   ').forEach(word => {
word.split(' ').forEach(chr => {
decoded+=MORSE_CODE[chr];});
       decoded+=' ';
    });
    return decoded.substring(0,decoded.length-1);
  }