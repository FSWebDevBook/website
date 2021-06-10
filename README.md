#Full Stack Web Development Website
This website presents information on the book and redirects references from the book.

##Using the Website
This site redirects references included as a query parameter to the site. The URL for redirects is https://webdevbook.com/?ref
where _ref_ is the reference number in the book. By convention, references will be numbered sequentially starting at 1 in each chapter. The chapter number and a period will prefix each reference number. So, for example, the first reference in Chapter 1 will be labeled 1.1 and can be accessed using the URL https://webdevbook.com?1.1. 

##Automatically Generating the References
In the `scripts/` folder, th file `CSVToRefmap.js` contains a Node.js script for building the list of references redirected by the site from a CSV file. References should be placed in the file `refs.csv` -- one reference per line. To push the reference list in `refs.csv` into the website's code, run the following at the command line:

    $npx run-func CSVToRefmap createReadStream

The `createReadStream` function hardcodes its input (`refs.csv`) and output (`refmap.js`). The `refmap.js`output file contains a JavaScript associative array that maps reference numbers to redirect URLs. It is imported into the website's `index.html` file and utilized in the `window.onload` function to perform the redirect.

Each time the reference list is regenereated, The updated `refmap.js` must be pushed to the remote.