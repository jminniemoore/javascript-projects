//
function makeLine(size) {
    let LineSize = " ";
    for (let i = 0; i < size; i++) {
        LineSize += '#'
    }
    return LineSize
}

console.log(makeLine(5))

function makeSquare(size) {
    let square = " ";
    for (let i = 0; i < size; i++) {
        square += ('\n' + makeLine(size));
    }
    return square
}

console.log(makeSquare(5))

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += ('\n' + makeLine(width));
    }
    return rectangle.slice(0, -1);
  }
    
  console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = " \n ";
    for (let i = 0; i< height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
} 
console.log(makeDownwardStairs(5));

function makeSpaceLine (numSpaces, numChars){
    let SpaceLine = " "
    for (i=0; i<numSpaces; i++){
        SpaceLine += (makeLine(numChars-1-i))
    }
    return SpaceLine
}
console.log(makeSpaceLine(3, 5));

