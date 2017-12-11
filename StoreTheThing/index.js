const datastore = require('@google-cloud/datastore')();
var key = datastore.key(['Thing']);

function getTheThings(req, res) {
  // let query = datastore.createQuery("Thing");

  // datastore.runQuery(query, function(err, entities, info) {
  //   res.status(200).send(entities);
  // });
 
  let query = datastore.createQuery("Thing");
  datastore.runQuery(query).then((results) => {
    // Task entities found.
    const rows = results[0];

    res.status(200).send(rows);
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
