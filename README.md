# Full Stack Web Development Website
This website presents information on the book and redirects references from the book.

## Accessing the Website
If no query params are provided, this website serves as the informational site for the book. The content will be updated closer to publication time.

## Using the Website to Redirect to Book References
The user can include a reference number from the book as a query parameter. If a query parameter is included and the reference is recognized, the site redirects to the URL of the reference. By convention, references are numbered sequentially starting at 1 in each chapter. The chapter number and a period precedes each reference number to make it unique. So, for example, the first reference in Chapter 1 will be labeled 1.1 and can be accessed using the URL https://webdevbook.com?1.1. 

## Automatically Generating the References
In the `scripts/` folder, the file `util.js` contains `reflistToRefmap`, a Node.js script that takes two parameters as input:

* `fname`, a text file containing a chapter bibliography generated by Zotero. The bibliography is assumed to have a list of sequentially numbered references (e.g., [3.1], [3.2]). For each reference, the reference entry is assumed to have a URL that starts with http:// or https://.
* `x`, an integer indicating the number of the chapter. Note: To prepare the file for processing: 1. Create a new file ChxPUB.docx. 2. "unlink Citations" in the Zotero toolbar. 3. Do a search/replace, replacing '[' with '[x.' where x is the chapter number. BE CAREFUL: You need to check each replacement, because many instances of '[' lie in code listings and should not be changed. 4. Copy/paste references list into Chx.txt.

`reflistToRefmap` produces a file `chxrefs.js` that contains JavaScript code to an entry to the `refmap` associative array for each chapter reference. An example of such code is `refmap['1.1'] = 'https://google.com';`.

Here are the steps to updating the website with chapter references

1. Copy the chapter's bibliography generated by Zotero into a file `chxrefs.txt`.
2. Change into the scripts/ directory and run the reflistToRefmap script like so:
```console
npx run-func util.js reflistToRefmap ch3refs.txt 3
```
Notice that you need to specify two parameters: the name of the file containing the references and the chapter number. If all goes well, you should see a console transcript of the script processing each line. The last line of the console output should look like this:
```console
References successfully written to 'ch3refs.js'.
```
3. Include the chapter references JavaScript file you just generated into `index.html` _before_ `main.js`, e.g., 

````javascript
<script src="scripts/ch3refs.js"></script>
````
4. Commit the changes, e.g., 
```console
git commit -m "Added references for Chapter 3"
```
5. Push the changes to the remote.
```console
git push origin main
```