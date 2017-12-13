fs = require('fs')
fs.readFile('./day6/input.txt', 'utf8', function (err,data) {
    if (err) {

        return console.log(err);
    }
    processFile(data);
});

function parseLine(data)
{
    var myArray = data.split(/\s+/);
    for(var i=0; i<myArray.length; i++) { myArray[i] = +myArray[i]; } 

    return myArray;
}

function processFile(data)
{
    var banks = parseLine(data);
    var redis = 0;
    console.log("Bank: " + banks.join(","));
    var oldbanks = [];
    while(oldbanks.indexOf(banks.join(",")) === -1)
    {
        oldbanks.push(banks.join(","));

        var maxIndex = -1;
        var maxValue = -1;
        for(var i = 0; i < banks.length; i++)
        {
            if(banks[i]*1 > maxValue)
            {
                maxValue = banks[i];
                maxIndex = i;
            }
        }
        // Rset large block
        banks[maxIndex] = 0;
        var z = maxIndex;
        for(var i =0; i <maxValue; i++)
        {
            if(z + 1 >= banks.length )
            {
                z=0;
            } else
            {
                z++;
            }

            banks[z] = banks[z] + 1;
        }

        //console.log("Bank: " + banks.join(","));
        redis++;
    }

    var oldindex = oldbanks.indexOf(banks.join(","))

    console.log("Redis: " + redis);
    console.log("Size: " +((redis) - oldindex));
}