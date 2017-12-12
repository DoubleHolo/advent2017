fs = require('fs')
fs.readFile('./day5/input.txt', 'utf8', function (err,data) {
    if (err) {

        return console.log(err);
    }
    processFile(data);
});

function parseLines(data)
{
    return data.split("\n");
}

function processFile(data)
{ 
    var current = 0;
    var steps = 0;
    var lines = parseLines(data);
   
    while(typeof lines[current] !== 'undefined')
    {
        var val = lines[current]*1;
        // console.log("Current Index: " + current + "  Value: " + val);
        var next = current + val;

        // Part 1
        // lines[current] = lines[current]*1 + 1;

        // Part 2
        if(val >= 3)
        {
            lines[current] = lines[current]*1 - 1;

        }
        else
        {
            lines[current] = lines[current]*1 + 1;
        }
        current = next;
        steps++;
    }
    console.log("Escaped!")
    console.log("Steps Count: " + steps);
}
