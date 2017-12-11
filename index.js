exports.tellMeMyName = function (req, res) {
	let content =  { name: "BT", team: "GJERDE"};
    res.status(200).send(content);
}