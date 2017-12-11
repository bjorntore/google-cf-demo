

function getTheThings(req, res) {
  let query = datastore.createQuery(key);
  res.status(200).send(JSON.stringify(query));
}

function saveNewThing(req, res) {
  const datastore = require('@google-cloud/datastore')();
  const key = "Thing";
  let theThing = req.body.theThing;

  datastore.get(key, function(error, entity) {
    if(error) {
      res.status(400).send({error1: error});
    } else {
      //Make changes in entity.
      datastore.save({
        key: key,
        data: theThing
      }, function(error) {
        if(error) {
          res.status(400).send({error2: error});
        } else {
          res.status(200).send("Entity saved");
        }
      })
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
