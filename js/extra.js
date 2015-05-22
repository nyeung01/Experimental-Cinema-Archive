// Show/Hide Divs
var divState = {};
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
    return false;
}

// Randomize body background color on each load
function changeBodyBackground (){
	var bg = 'rgb(' + (Math.floor((256-229)*Math.random()) + 150) + ',' + 
                                    (Math.floor((256-229)*Math.random()) + 150) + ',' + 
                                    (Math.floor((256-229)*Math.random()) + 150) + ')';
	$('body').css('background', bg);
	changeTextColor();
}

// Adjust text color to background color
function changeTextColor (){
    var color = $('body').css('background-color');
    var startIndex = color.indexOf('(') + 1;
    var lastIndex = color.indexOf(')');

    var values = color.substr(startIndex, lastIndex - startIndex).split(',');

    var r = 0;
    var g = 0;
    var b = 0;

    $(values).each(function(i) {
        if (i == 0) {
            r = 255 - values[i];
        }
        if (i == 1) {
            g = 255 - values[i];
        }
        if (i == 2) {
            b = 255 - values[i];
        }
    });

    $('body').css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
}

// function changeTextColor (bg){
// 	var brightness = Math.sqrt(
// 	   bg.r * bg.r * .299 +
// 	   bg.g * bg.g * .587 +
// 	   bg.b * bg.b * .114); 
// 	console.log (brightness);
//     var foreColor = (brightness < 40) ? "#FFFFFF" : "#000000";
//     $('body').css('color', foreColor);
// 	// var c = c.substring(1);      // strip #
// 	// var rgb = parseInt(c, 16);   // convert rrggbb to decimal
// 	// var r = (rgb >> 16) & 0xff;  // extract red
// 	// var g = (rgb >>  8) & 0xff;  // extract green
// 	// var b = (rgb >>  0) & 0xff;  // extract blue

// 	// var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

// 	// if (luma < 40) {
// 	//     $('body').css('color', 'white');
// 	// }
// 	// else $('body').css('color', 'black');
// }