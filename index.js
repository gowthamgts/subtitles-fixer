#! /usr/bin/env node

/*
 * Fix inconsistent subtitles of your serials or movies.
 *
 * @package subtitles-fixer
 * @author Gowtham Gopalakrishnan <gowthamgts12@gmail.com>
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');


// Supporting variables
const videoFormats = ['.mp4', '.mkv', '.avi']

// TODO: cleanup this code.
const argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
console.log(chalk.bgBlue(`Currently Processing: ${argv.path}`));

var dirFiles = fs.readdirSync(argv.path);
var videoFiles = [];

for (var i in dirFiles) {
	if (videoFormats.indexOf(path.extname(dirFiles[i])) != -1) {
		videoFiles.push(dirFiles[i]);
	}
}

console.log(videoFiles);