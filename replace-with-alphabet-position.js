function alphabetPosition(text) {
 
  text = text.toLowerCase();
 
  var newText = [];
 
  for (i = 0; i < text.length; i++) {
 
      switch(text[i]) {
        case 'a':
          newText.push('1');
          break;
        case 'b':
          newText.push('2');
          break;
        case 'c':
          newText.push('3');
          break;
        case 'd':
          newText.push('4');
          break;
        case 'e':
          newText.push('5');
          break;
        case 'f':
          newText.push('6');
          break;
        case 'g':
          newText.push('7');
          break;
        case 'h':
          newText.push('8');
          break;
        case 'i':
          newText.push('9');
          break;
        case 'j':
          newText.push('10');
          break;
        case 'k':
          newText.push('11');
          break;
        case 'l':
          newText.push('12');
          break;
          case 'm':
            newText.push('13');
            break;
          case 'n':
            newText.push('14');
            break;
          case 'o':
            newText.push('15');
            break;
          case 'p':
            newText.push('16');
            break;
          case 'q':
            newText.push('17');
            break;
          case 'r':
            newText.push('18');
            break;
          case 's':
            newText.push('19');
            break;
          case 't':
            newText.push('20');
            break;
          case 'u':
            newText.push('21');
            break;
          case 'v':
            newText.push('22');
            break;
          case 'w':
            newText.push('23');
            break;
          case 'x':
            newText.push('24');
            break;
          case 'y':
            newText.push('25');
            break;
          case 'z':
            newText.push('26');
            break;
          default:
              break;
      }
  }
  return newText.join(" ");
}
