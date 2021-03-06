---
[![npm version](https://badge.fury.io/js/malta-markdown-pdf.svg)](http://badge.fury.io/js/malta-markdown-pdf)
[![npm downloads](https://img.shields.io/npm/dt/malta-markdown-pdf.svg)](https://npmjs.org/package/malta-markdown-pdf)
[![npm downloads](https://img.shields.io/npm/dm/malta-markdown-pdf.svg)](https://npmjs.org/package/malta-markdown-pdf)  
---  

This plugin can be used on: **.md**

Options :  
    - paperFormat : default `A4`, choose among `A3`, `A4`, `A5`, `Legal`, `Letter` or `Tabloid`  
    - paperOrientation : default `portrait`, choose among `portrait` or `landscape`  
    - paperBorder : default `2cm`, supported dimension units are: 'mm', 'cm', 'in', 'px'  

Sample usage:  
```
malta app/source/index.md public/docs -plugins=malta-markdown-pdf
```
or in the .json file :
```
"app/source/index.md" : "public/docs -plugins=malta-markdown-pdf"
```
or in a script : 
``` js
var Malta = require('malta');
Malta.get().check([
    'app/source/index.md',
    'public/docs',
    '-plugins=malta-markdown-pdf',
    '-options=showPath:false,watchInterval:500,verbose:0'
    ]).start(function (o) {
        var s = this;
        console.log('name : ' + o.name)
        console.log("content : \n" + o.content);
        'plugin' in o && console.log("plugin : " + o.plugin);
        console.log('=========');
    });
```