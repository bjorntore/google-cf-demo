exports.tellMeMyName = function (req, res) {
	let content =  "Request: " + JSON.stringify(req)
    res.status(200).send(content);
}