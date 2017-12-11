fs = require('fs')
fs.readFile('./input.txt', 'utf8', function (err,data) {
    if (err) {

        return console.log(err);
    }
    processFile(data);
});

function processFile(data)
{
    var total = 0;
    console.log(data);

    // Format data into array
    var lines = data.split("\n");

    for(var i=0; i < lines.length; i++)
    {
        var line = lines[i];
        var numbers = line.split(/\s+/);
        var goodnum = [];
        for(var k=0; k < numbers.length; k++)
        {
            var number = numbers[k];
            if(!isNaN(number) && number != "")
            {
                goodnum.push(number * 1);
            }
        }
        if(goodnum.length == 0)
        {
            continue;
        }

        var max = goodnum.reduce(function(a, b) {
                return Math.max(a, b);
        });
        var min = goodnum.reduce(function(a, b) {
                return Math.min(a, b);
        });

        console.log(" min: ");
        console.log(min);
        console.log(" max: ");
        console.log(max);

        total += max - min;
    }

    console.log("total: " + total);
};
