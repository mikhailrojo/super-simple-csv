const rl = require('readline');
const fs = require('fs');
const os = require('os');

const read = (path) => {
	return new Promise((resolve, reject) => {
		const result = [];
		const readStream = fs.createReadStream(path);
		const rlInterface = rl.createInterface({
			input: readStream
		});

		rlInterface.on('line', (line) => result.push(line));
		rlInterface.on('close', () => {
			resolve(result);		
		});
	
		
	});
};

const write = (fileName, arr) => {
	const writeStream = fs.createWriteStream(fileName);
	arr.forEach(line => {
		writeStream.write(line + os.EOL);
	});
	writeStream.end();
}	


module.exports = {
	read,
	write
};
