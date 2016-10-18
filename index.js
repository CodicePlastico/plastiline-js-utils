const ObjectID = require('mongodb').ObjectID

function padLeft(input, length, padding) {
	var result = input
	while(result.length < length) {
		result = padding + result
	}
	return result
}

function getObjectID(id){
  if (typeof(id) === 'string'){
    return new ObjectID(id)
  }
  return id
}


module.exports = {
	padLeft: padLeft,
	getObjectID: getObjectID
}
