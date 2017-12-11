const datastore = require('@google-cloud/datastore')();
var key = datastore.key(['Thing']);

function getTheThings(req, res) {
  let query = datastore.createQuery("Thing").select('__key__', 'data');
  datastore.runQuery(query, function(err, entities) {
    res.status(200).send(entities);
  });
}

function saveNewThing(req, res) {

  var data = {
    data: req.body.theThing + ""
  };

  datastore.save({
    key: key,
    data: data
  }, function (err) {
    if (!err) {
      res
        .status(200)
        .send("All is good.");
    } else {
      res
        .status(400)
        .send({error: err});
    }
  });
}

exports.storeTheTing = function (req, res) {
  switch (req.method) {
    case 'GET':
      getTheThings(req, res);
      break;
    case 'POST':
      saveNewThing(req, res);
      break;
    default:
      res
        .status(500)
        .send({error: 'Something blew up!'});
      break;
  }
};
