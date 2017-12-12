fs = require('fs')
fs.readFile('./day4/input.txt', 'utf8', function (err,data) {
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
    var valid = 0;
    var lines = parseLines(data);
    for(var i = 0; i < lines.length; i++)
    {
        var success = validateLine(lines[i]);
        if(success)
        {
            valid++;
        }
    }

    console.log("Valid Count: " + valid);
}

function validateLine(line)
{
    var valid = true;
    var words = line.split(/\s+/);
    for(var i = 0; i< words.length; i++)
    {

        for(var k = 0; k < words.length; k++)
        {
            if(k != i)
            {
                // Part 1
                // if(words[i] == words[k])
                // {
                //     valid = false;
                // }

                // Part 2
                if(orderWord(words[i]) == orderWord(words[k]))
                {
                    valid = false;
                }

            }
        }
    }
    return valid;
}

function orderWord(word)
{
    var orderedWord = "";

    var chars = word.split('');
    chars.sort();
    orderedWord = chars.join("");

    return orderedWord;
}