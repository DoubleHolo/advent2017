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
    for(var key in discs)
    {
        var curDisc = discs[key];
        if(curDisc.childStrings.length == 0){continue;}
        for(var second in discs)
        {
            var otherDisc = discs[second];
            if(curDisc.childStrings.includes(otherDisc.name))
            {
                curDisc.children.push(otherDisc);
                otherDisc.parent = curDisc;
            }
        }
    }

    var bottomDisc = null;

    for(var key in discs)
    {
        var curDisc = discs[key];

        if(curDisc.parent == null)
        {
            console.log(curDisc.name)
            bottomDisc = curDisc;
            break;
        }
    }

    recursiveLook(bottomDisc);
}

function recursiveLook(disc)
{
    var totalWeight = 0;
    if(disc.children.length > 0)
    {
        var weights = {};
        var badName = null;
        for(var i = 0; i < disc.children.length; i++)
        {
            var temp = disc.children[i];
            var thisWeight = recursiveLook(temp);
            totalWeight += thisWeight* 1;;
            weights[temp.name] = thisWeight;
        }
        var diff = 0;
        for(var key in weights)
        {
            var curDisc = weights[key];
            var vadCount = 0;
           
            for(var other in weights)
            {
                if(other != key)
                {
                    if(weights[other] != weights[key])
                    {
                        vadCount++;
                    }

                }
            }

            if(vadCount >1)
            {
                console.log("Bad: " + key);
                console.log("Weight is: " + curDisc);
                console.log("Weight should be: " + weights[other]);
                diff = (curDisc-weights[other]);
                badName = key;
            }
        }

        if(badName != null)
        {
            for(var i = 0; i < disc.children.length; i++)
            {
                var temp = disc.children[i];
                if(temp.name == badName)
                {
                    
                    console.log("Weight should be for real: " + (temp.weight-diff));
                }
            }
        }
    }
    else
    {
        
    }

    totalWeight += disc.weight * 1;
   // console.log(disc.name);
    //console.log(totalWeight);
    return totalWeight;
}