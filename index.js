function padLeft(input, length, padding) {
	var result = input
	while(result.length < length) {
		result = padding + result
	}
	return result
}


module.exports = {
	padLeft: padLeft
}
