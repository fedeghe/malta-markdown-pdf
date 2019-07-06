require('malta').checkDeps('markdown-pdf');

var markdownpdf = require("markdown-pdf"),
	path = require('path');

function malta_markdown_pdf(o, options) {
	var self = this,
		start = new Date(),
		msg,
        pluginName = path.basename(path.dirname(__filename));

	options = options || {};

	options.paperFormat = options.paperFormat || 'A4', // 'A3', 'A4', 'A5', 'Legal', 'Letter' or 'Tabloid'.
	options.paperOrientation = options.paperOrientation || 'portrait', // 'portrait' or 'landscape'
	options.paperBorder = options.paperBorder || '2cm' // Supported dimension units are: 'mm', 'cm', 'in', 'px'
		
	o.name = o.name.replace(/\.md$/, '.pdf');

	return function (solve, reject){
		try {
			markdownpdf(options).from.string(o.content).to(o.name, function() {
				var d = self.date(),
					data = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
				msg = 'plugin ' + pluginName.white() + ' wrote ' + o.name + ' (' + self.getSize(o.name) + ')';						
				solve(o);
				self.notifyAndUnlock(start, msg);
			});
		} catch (err) {
            self.doErr(err, o, pluginName);
            reject(`Plugin ${pluginName} conversion error:\n${err}`)
		}	
	};
}
malta_markdown_pdf.ext = 'md';
module.exports = malta_markdown_pdf;