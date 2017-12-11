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
        console.log("NEWLINE-----");
        for(var x =0; x < goodnum.length; x++)
        {
            for(var y=0; y < goodnum.length; y++)
            {
                var a = goodnum[x];
                var b = goodnum[y];
                if(a > b && a%b ==0)
                {
                    console.log("a:" + a);
                    console.log("b:" + b);
                    total += a / b;
                }
            }
        }
    }

    console.log("total: " + total);
};
