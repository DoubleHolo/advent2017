var input = 325489;

var dir = "right";

var curnum = 0;
var maxLength = 1;

var spiral = [[1]];

var x =0;
var y =0;

// Dunno what the patter is so spiral out
while(curnum < input)
{
    curnum = 0;
    if(x +1 == maxLength && y +1 == maxLength)
    {
        maxLength += 2;

        for(i = 0; i < spiral.length; i++)
        {
            spiral[i].push(0);
            spiral[i].unshift(0);
        }
        
        // Now add a new blank array to top and bottom
        var bottomRow = [];
        for(i=0; i< maxLength; i++)
        {
            bottomRow.push(0);
        }
        spiral.push(bottomRow);

        var topRow = [];
        for(i=0; i< maxLength; i++)
        {
            topRow.push(0);
        }
        spiral.unshift(topRow);

        // Shift our coords
        x += 1;
        y += 1;
    }

    var nextDir = dir;
    if(dir == "right")
    {
        if(typeof spiral[y][x + 1] === 'undefined')
        {
            nextDir = "up";
            y--;
        }
        else
        {
            x++;
        }
    }
    else if(dir == "left")
    {
        if(typeof spiral[y][x - 1]=== 'undefined')
        {
            nextDir = "down";
            y++;
        }
        else
        {
            x--;
        }
    }
    else if(dir == "up")
    {
        if(typeof spiral[y-1]=== 'undefined')
        {
            nextDir = "left";
            x--;
        }
        else
        {
            y--;
        }
    }
    else if(dir == "down")
    {
        if(typeof spiral[y+1] === 'undefined')
        {
            nextDir = "right";
            x++;
        }
        else
        {
            y++;
        }
    }
    dir = nextDir;

    
    console.log("necxtdir: " + nextDir);
    console.log("x: " + x + " y: " + y);
    // Calc number for this square
    if(spiral[y][x+1]){curnum+=spiral[y][x+1];}
    if(spiral[y][x-1]){curnum+=spiral[y][x-1];}
    if(spiral[y+1]){
        if(spiral[y+1][x-1]){curnum+=spiral[y+1][x-1];}
        if(spiral[y+1][x]){curnum+=spiral[y+1][x];}
        if(spiral[y+1][x+1]){curnum+=spiral[y+1][x+1];}
    }
    if(spiral[y-1]){
        if(spiral[y-1][x-1]){curnum+=spiral[y-1][x-1];}
        if(spiral[y-1][x]){curnum+=spiral[y-1][x];}
        if(spiral[y-1][x+1]){curnum+=spiral[y-1][x+1];}
    }

    spiral[y][x] = curnum;
    console.log("num: " + curnum);
}