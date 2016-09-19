var fs = require('fs');
var pdf = require('html-pdf');

var args = process.argv;
var htmlfile = args[2];
var pdffile = args[3];

if(htmlfile === undefined || pdffile === undefined) {
    console.error('You must supply a html filename, and then a PDF filename.');
    process.exit();
}

var html = fs.readFileSync(htmlfile, 'utf8')
var options = { filename: pdffile, format: 'Letter' };

pdf.create(html, options).toFile(function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/tmp/html-pdf-8ymPV.pdf' }
});
