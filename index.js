exports.tellMeMyName = function (req, res) {
    let name = JSON.stringify(req.body);
	let content =  "Your name is " + name;
    res.status(200).send(content);
}