
const fs = require('fs');


/*
 * reflistToRefmap
 * @descr
 * Given the name of a file of chapter references in Zotero bibliographic format, 
 * creates a .js file'chxrefs.js' that includes JS code to add an entry to the 
 * refMap associative array for each chapter reference (e.g., [1]). Each array
 * entry maps the chapter reference (e.g., 1.1) to its corresponding URL.
 * @args
 * fname -- the name of the file containin the chapter's references
 * chNum -- the number of the chapter
 * 
*/

function reflistToRefmap(fname,chNum) {
  //console.log("entering reflistToRefmap with fname = " + fname + " & chNum = " + chNum);
  let refs = "";
  fs.createReadStream(fname)
  .on('data', (data) => {
    const lines = data.toString().split("\n");
    //console.log("Split file into " + lines.length + " lines.");
    let refRegex = /\[\d{1,3}\]/; //regex for [xxx]
    let urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    for (let i = 0; i < lines.length; ++i) {
      console.log("Processing line " + (i+1) + ": " + lines[i]);
      let refMatch = refRegex.exec(lines[i]);
      if (refMatch !== null) {
        let urlMatch = urlRegex.exec(lines[i]);
        if (urlMatch !== null) {
          refs += "refmap['" + chNum + "." + 
            (refMatch[0].charAt(2) === "]" ? refMatch[0].charAt(1) :  refMatch[0].substr(1,2)) + 
            "'] = '" + urlMatch[0] + "';\n";
        } else {
          console.log("Error on line " + i+1 + ": " + lines[i]);
          console.log("Could not find a valid URL. Ignoring...");
        }
      } else {
        console.log("Error on line " + i+1 + ": " + lines[i]);
        console.log("Could not find a valid reference (e.g., '[1.1]). Ignoring...");
      }
    }
    const outFile = "ch" + chNum + "refs.js";
    fs.writeFileSync(outFile,refs);
      console.log("References successfully written to '" + outFile + "'.");
  }) 
  .on('error',() => {
    console.log("Unexpected error occurred when reading '" + fname + "'.");
  }
  )
}

module.exports = {reflistToRefmap}