fs = require('fs')
fs.readFile('./day8/input.txt', 'utf8', function (err,data) {
    if (err) {

        return console.log(err);
    }
    processFile(data);
});

function Line(name,operation, val, conName, condition,conVal)
{
    this.name = name;
    this.operation = operation;
    this.val = val;
    this.conName = conName;
    this.condition = condition;
    this.conVal = conVal;
}


function parseLines(data)
{
    var myArray = data.split("\n");

    var outputList = [];
    for(var i = 0; i < myArray.length; i++)
    {
        var line = myArray[i];
        var groups = line.split(/([a-z]+) ([a-z]+) ([-0-9]+) if ([a-z]+) ([><=!]+) ([-0-9]+)/);
        var sL = new Line(groups[1], groups[2], groups[3],groups[4], groups[5], groups[6]);
       if(typeof sL.name == "undefined")
       {
           var k =0;
       }

        outputList.push(sL);
    }
    
    return outputList;
}

function processFile(data)
{
    var stuff = parseLines(data);
    var reg = {};
    var ultraMax= 0;
    var ultraMaxName = "";
    for(var i = 0; i < stuff.length; i++)
    {
        var line = stuff[i];

        if(typeof reg[line.name] == 'undefined')
        {reg[line.name] = 0;}
        var curVal = reg[line.name];

        if(typeof reg[line.conName] == 'undefined')
        {reg[line.conName] = 0;}
        var con = reg[line.conName];
        var consval = line.conVal;

        var passed = false;

        switch(line.condition)
        {
            case ">":
                passed = (con > consval);
                break;
            case ">=":
                passed = (con >= consval);
                break;
            case "<":
                passed = (con < consval);
                break;
            case "<=":
                passed = (con <= consval);
                break;
            case "!=":
                passed = (con != consval);
                break;
            case "==":
                passed = (con == consval);
                break;
            default:
                console.log(line.condition);
                break;
        }

        if(passed)
        {
            if(line.operation == 'inc')
            {
                reg[line.name] = reg[line.name]*1 + line.val*1
            }
            else
            {
                reg[line.name] = reg[line.name]*1 - line.val*1
            }
        }

        if(reg[line.name] > ultraMax)
        {
            ultraMax = reg[line.name];
            ultraMaxName = line.name;
        }
    }

    var max= 0;
    var maxName = "";
    for(var key in reg)
    {
        var reger = reg[key];
        if(reger > max)
        {
            max = reger;
            maxName = key;
        }
    }

    console.log("Key: " + maxName);
    console.log("Num: " + max);
    
    console.log("UKey: " + ultraMaxName);
    console.log("UNum: " + ultraMax);
}