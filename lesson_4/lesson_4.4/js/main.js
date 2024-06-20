// Переписати код нижче з використанням конструкції switch…case
// let numOrStr = prompt('input number or string');
// console.log(numOrStr)


// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }
let numOrStr = prompt('Enter input number or string');

switch (true) {
  case numOrStr === null:
    console.log('You canceled');
    break;
  case numOrStr.trim() === '':
    console.log('Empty is string');
    break;
  case isNaN(+numOrStr):
    console.log('Number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}