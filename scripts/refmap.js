/* refmap is an associative array that maps chapter references to URLs.
 * For example:
 *   refmap['1.1] = 'https://google.com';
 * It is used to redirect references to URLs.
 * The refMap associative array is built up through a series of .js files,
 * one for each chapter (e.g., 'Ch1refs.js')
 * Each chapter file must be included into index.html 
 */ 
let refmap = {};