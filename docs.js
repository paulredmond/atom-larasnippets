/**
 * Convert cson snippets into a Markdown document for reference
 */
const cson = require('cson');
const glob = require ('glob');
const path = require('path');
const fs   = require('fs');
const _    = require('lodash');

function Snippet(title, code, prefix, fileName) {
  this.title = title;
  this.code = code;
  this.prefix = prefix;
  this.fileName = fileName;
}

Snippet.prototype.getFormattedCode = function () {
  return this.code.replace(/\\\\/g, '\\');
};

// Process snippets and generate markdown reference document
glob('./snippets/**/*.cson', (err, files) => {
  var snippets = [];
  var template = fs.readFileSync('./doc/snippet.jst').toString();
  var compiled = _.template(template);

  files.forEach(file => {
    var fileName = path.parse(file).base;
    var parsed = cson.parseCSONFile(file);

    Object.keys(parsed).forEach(key => {
      Object.keys(parsed[key]).forEach(title => {
        var s = parsed[key][title];
        snippets.push(new Snippet(title, s.body, s.prefix, fileName));
      });
    });
  });

  fs.writeFile('./doc/snippet-reference.markdown', compiled({ snippets: snippets }), (err) => {
      if (err) {
          return console.log(err);
      }
      console.log("The ./doc/snippet-reference.mardown file was saved");
  });

});
