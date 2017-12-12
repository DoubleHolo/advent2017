var input = 325489;

var right = true;
var up = true;

var curnum = 1;

// Spirals are in every other square, 1 3 5 7, etc
// Find the odd root above my num
var root = Math.ceil(Math.sqrt(input));

if(root%2 == 0)
{
    root++;
}

// Bottom right num is always the square while root is the height/width
var bottomRight = root * root;

// get difference
var diff = bottomRight - input;

// find how far away from a corner we are by mod the width -1 
var away = diff%((root -1));

if( away >= (root-1)/2)
{
    steps = 0 + away;
}
else
{
    steps = (root -1) - away;
}

console.log(steps);