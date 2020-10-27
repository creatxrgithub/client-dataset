# csv to array split by regular expression

npm install csv2array_regular 

const csv2array = require('csv2array_regular');

let arr = csv2array.toArray('csv_file_name');

# static toArray(csvFileName, columnDelimiter=/\s+/, encoding='utf8')
