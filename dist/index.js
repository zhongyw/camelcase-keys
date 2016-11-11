'use strict';

var mapObj = require('map-obj');
var camelCase = require('camelcase');

var has = function has(arr, key) {
	return arr.some(function (x) {
		return typeof x === 'string' ? x === key : x.test(key);
	});
};

module.exports = function (input, opts) {
	opts = Object.assign({
		exclude: [],
		deep: false
	}, opts);

	return mapObj(input, function (key, val) {
		key = has(opts.exclude, key) ? key : camelCase(key);
		return [key, val];
	}, { deep: opts.deep });
};