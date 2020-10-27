const fs = require('fs');

class CSV {
	constructor() {}

	static toArray(csvFileName, columnDelimiter=/\s+/, encoding='utf8') {
		let oo = [];
		let content = fs.readFileSync(csvFileName, encoding);
		let rows = content.toString().split(/[\r\n]+/);
		for(let i=0; i<rows.length; i++) {
			if(rows[i].trim().length===0) continue;
			oo.push(rows[i].split(columnDelimiter));
		}
		return oo;
	}
}

module.exports = CSV;
