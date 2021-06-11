const csv = require('csv-parser');
const fs = require('fs');


//csvToRefmap -- Used to translate a csv file of references into a JavaScript object.
//This function is deprecated! We no longer use the csv intermediate file format.
//Instead, we translate directly from Zotero's bibliography output to a js object.
//See util.js

function csvToRefmap() {
  let content = "const refMap = {";
  fs.createReadStream('refs.csv')
    .pipe(csv())
    .on('data', (row) => {
      content += "\n'" + row.Chapter + "." + row.Ref + "': '" + row.URL + "',";
    })
    .on('end', () => {
      content = content.substr(0,content.length-1); //Remove last ',\n"
      content += "\n};";
      fs.writeFileSync('refmap.js',content);
      console.log('References successfully updated to refmap.js');
    });
}