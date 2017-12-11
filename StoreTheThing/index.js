

function getTheThings(req, res) {
  let query = datastore.createQuery(key);
  res.status(200).send(JSON.stringify(query));
}

function saveNewThing(req, res) {
  const datastore = require('@google-cloud/datastore')();
  const key = datastore.key('Thing');

  let theThing = "Test";

  datastore.save({
    key: key,
    description: theThing
  }, function (err) {
    res
      .status(400)
      .send({
        error: 'Failed to save thing with key ' + key.path
      });
  });

  res.status(200).send('Saved the thing with key ' + key.path);
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
