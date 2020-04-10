// create a table from javascript
const table = document.createElement("table");
// <table id="table"></table> ;) 
table.setAttribute("id", "table");
// <body><table id="table"></table></body> ;)
document.body.appendChild(table);

// to not repeat the number 9 all the time
const heroNumber = 9;

var i = 0;
for(var i; i <= heroNumber; i++) {
    var tr = table.insertRow(-1);
    var td_1 = tr.insertCell(-1);
    if (i == 0) {
        // turn the 0 in the left upper corner to an X
        td_1.innerText = 'X';
    } else {
        // otherwise just display the numbers
        td_1.innerText = i;
    }
    var j = 1;
    for(var j; j <= heroNumber; j++) {
        var td_2 = tr.insertCell(-1);
        td_2.innerText = j;
        if(i == 0) {
            // upper row orange
            td_2.style.backgroundColor = "#FF9E00";
        } else if(i > 0 && j > 0) {
            td_2.innerText = j*i;
        }
        // check some crappy fucking shit math fuck fuck to turn the number 25 red like why
        if (j == Math.round(heroNumber/2) && i == Math.round(heroNumber/2)) {
            // red
            td_2.style.backgroundColor = "#FF0000";
        // check if 9 - j is equal to i - 1 ez
        } else if(heroNumber - j === i - 1) {
            // then make the color green
            td_2.style.backgroundColor = "#49FF00";
        // check if j is equal to i
        } else if (j === i) {
            // then make the color to yellow
            td_2.style.backgroundColor = "#F7FF00";
        // check if j doesn't equal to i
        } else if (j !== i) {
            // then make the left row orange
            td_1.style.backgroundColor = "#FF9E00";
        }
    }
}