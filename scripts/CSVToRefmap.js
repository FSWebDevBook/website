const csv = require('csv-parser');
const fs = require('fs');

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
  })

module.exports = {createReadStream}