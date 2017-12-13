fs = require('fs')
fs.readFile('./day7/input.txt', 'utf8', function (err,data) {
    if (err) {

        return console.log(err);
    }
    processFile(data);
});

function Disc(name,weight)
{
    this.name = name;
    this.weight = weight;
    this.children = [];
    this.childStrings = [];
    this.parent = null;
}

function parseLines(data)
{
    var myArray = data.split("\n");
    var outputList = {};
    for(var i = 0; i < myArray.length; i++)
    {
        var line = myArray[i];
        var groups = line.split(/([a-z]+) \(([0-9]+)\)(?: -> (.+))?/);
        var disc = new Disc(groups[1], groups[2]);
        if(typeof groups[3] != 'undefined')
        {
            disc.childStrings = groups[3].split(", ");
        }

        outputList[disc.name] = disc;
    }

    return outputList;
}

function processFile(data)
{
    var discs = parseLines(data);

    // Now associate all children/parents
}