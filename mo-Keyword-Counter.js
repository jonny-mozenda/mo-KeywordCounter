var fulltextCloud = document.body.innerText;

// Start assembling row
var row = {};

// Loop through and count keywords

try {
    var fulltext = document.documentElement.innerHTML;
    var keywords = [
      // Below is a list of the keywords that the javascript is going to parse through. Below, is an example of political candidates. Please delete these before running and fill with the keywords you are looking for.
/*
        'Biden',
        'Pete',
        'Bloomberg',
        'Buttigieg',
        'Warren',
        'Bernie',
        'Klobuchar'
*/
    ];

    for (var i = 0; i < keywords.length; i++) {
        var inputReg = "\\b" + keywords[i] + "\\b";
        var myRegex = new RegExp(inputReg, "gi");

        // Use Regex to Count Matches
        var count = (fulltext.match(myRegex) || []).length;

        // Put counts to row
        row[keywords[i]] = count;
    }
} catch { /* Swallow error */ }


// Write row
var error;
try {
    M_SetFieldValues(row, true);
} catch (err) {
    error = err;
    console.log(err);
    if (err.message == "M_SetFieldValues is not defined") {
        /* Swallow error */
    } else if (err.message == "JSON.stringify is not a function") { /* Swallow error */ }
    else {
        console.log(err.message);
        M_StopWithError("Error Writing with JavaScript");
    }

}
M_StopWaiting();
