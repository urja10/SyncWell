function isValidValue(value) {
	return value !== undefined && value !== null && value.trim() !== '';
}

module.exports = {
	isValidValue
}